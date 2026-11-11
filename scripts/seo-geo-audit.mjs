import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');

const SITE_URL = (process.argv[2] || 'https://www.dijitalhezarfen.com').replace(/\/$/, '');
const ARTICLE_URL =
  process.argv[3] || `${SITE_URL}/yayinlar/enron-karin-nakdin-ve-guvenin-denetimi`;

const REPORT_DIR = path.join(ROOT_DIR, 'reports', 'seo-geo');
fs.mkdirSync(REPORT_DIR, { recursive: true });

const VENV_PY = path.join(ROOT_DIR, '.seo-geo-tools', '.venv', 'Scripts', 'python.exe');
const PYTHON_EXE = fs.existsSync(VENV_PY) ? VENV_PY : 'python';

const REPO_AGENTIC = path.join(ROOT_DIR, '.seo-geo-tools', 'repos', 'Agentic-SEO-Skill', 'scripts');
const REPO_GEO = path.join(ROOT_DIR, '.seo-geo-tools', 'repos', 'geo-seo-claude', 'scripts');
const REPO_CLAUDE_SEO = path.join(ROOT_DIR, '.seo-geo-tools', 'repos', 'claude-seo', 'scripts');

/**
 * Execute a Python audit script with UTF-8 encoding and optional JSON parsing.
 */
function runPython(scriptPath, args = [], parseJson = true, input = undefined) {
  if (!fs.existsSync(scriptPath)) {
    return { ok: false, error: `Missing script: ${scriptPath}` };
  }
  const result = spawnSync(PYTHON_EXE, [scriptPath, ...args], {
    cwd: ROOT_DIR,
    encoding: 'utf8',
    input,
    timeout: 240000,
    env: {
      ...process.env,
      PYTHONIOENCODING: 'utf-8',
      PYTHONUTF8: '1'
    }
  });
  const stdout = (result.stdout || '').trim();
  const stderr = (result.stderr || '').trim();
  if (!parseJson) {
    return { ok: result.status === 0, status: result.status, stdout, stderr };
  }
  try {
    const data = JSON.parse(stdout);
    return { ok: result.status === 0, status: result.status, data, stderr };
  } catch {
    return { ok: false, status: result.status, raw: stdout.slice(0, 500), error: stderr || 'Invalid JSON output' };
  }
}

/**
 * Probe live HTTP status & redirect target for core routes.
 */
async function probeLiveRoutes(baseUrl) {
  const routes = [
    '/',
    '/yayinlar',
    '/girisimler',
    '/akademi',
    '/uygulama',
    '/buyume-yatirim',
    '/medya',
    '/kurumsal',
    '/iletisim',
    '/sik-sorulan-sorular',
    '/hakkimizda',
    '/dijital-hezarfen',
    '/otomasyon',
    '/llms.txt'
  ];
  const results = [];
  for (const route of routes) {
    const url = `${baseUrl}${route}`;
    try {
      const res = await fetch(url, { redirect: 'manual' });
      const html = res.status === 200 && !route.endsWith('.txt') ? await res.text() : '';
      const canonicalMatch = html.match(/<link rel="canonical" href="([^"]*)"/);
      results.push({
        route,
        status: res.status,
        location: res.headers.get('location') || null,
        emptyRoot: html.includes('<div id="root"></div>'),
        canonical: canonicalMatch ? canonicalMatch[1] : null,
        bytes: html.length
      });
    } catch (err) {
      results.push({ route, status: 0, error: err.message });
    }
  }
  return results;
}

/**
 * Inspect local workspace artifacts (articles, sitemap, vercel config, JSX hash links).
 */
async function inspectWorkspace(articlesModulePath) {
  const { articles } = await import(`file:///${articlesModulePath.replace(/\\/g, '/')}`);
  const sitemapXml = fs.readFileSync(path.join(ROOT_DIR, 'public', 'sitemap.xml'), 'utf8');
  const robotsTxt = fs.readFileSync(path.join(ROOT_DIR, 'public', 'robots.txt'), 'utf8');
  const vercelCfg = JSON.parse(fs.readFileSync(path.join(ROOT_DIR, 'vercel.json'), 'utf8'));

  const sitemapLocs = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const ssgArticles = articles.filter((a) => Boolean(a.source));
  const missingFromSitemap = ssgArticles
    .filter((a) => !sitemapLocs.some((loc) => loc.endsWith(`/${a.slug}`)))
    .map((a) => a.slug);

  const svgOgArticles = ssgArticles
    .filter((a) => a.image && a.image.endsWith('.svg'))
    .map((a) => a.slug);

  const apexUrlsInSitemap = sitemapLocs.filter((loc) => loc.startsWith('https://dijitalhezarfen.com')).length;

  let hashHrefs = 0;
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith('.jsx')) {
        const text = fs.readFileSync(full, 'utf8');
        hashHrefs += (text.match(/href="#/g) || []).length;
      }
    }
  };
  walk(path.join(ROOT_DIR, 'src'));

  const slugRule = vercelCfg.rewrites?.find((r) => r.source.startsWith('/:slug('))?.source || '';
  const vercelDirectSlugs = slugRule ? slugRule.slice(7, -1).split('|').length : 0;

  return {
    totalArticles: articles.length,
    ssgArticles: ssgArticles.length,
    stubArticles: articles.length - ssgArticles.length,
    sitemapLocsCount: sitemapLocs.length,
    missingFromSitemap,
    svgOgArticlesCount: svgOgArticles.length,
    apexNonWwwUrlsInSitemap: apexUrlsInSitemap,
    robotsSitemapLine: robotsTxt.split('\n').find((l) => l.startsWith('Sitemap:'))?.trim() || null,
    vercelDirectSlugs,
    jsxHashHrefs: hashHrefs,
    hasLlmsTxt: fs.existsSync(path.join(ROOT_DIR, 'public', 'llms.txt'))
  };
}

async function main() {
  console.log(`\n[1/5] Running Agentic-SEO-Skill full site audit on ${SITE_URL}...`);
  const agenticFull = runPython(
    path.join(REPO_AGENTIC, 'audit_runner.py'),
    [
      SITE_URL,
      '--json', path.join(REPORT_DIR, 'agentic-audit.json'),
      '--html', path.join(REPORT_DIR, 'agentic-seo-report.html'),
      '--markdown', path.join(REPORT_DIR, 'agentic-full-audit.md'),
      '--action-plan', path.join(REPORT_DIR, 'agentic-action-plan.md')
    ],
    false
  );

  console.log('[2/5] Running Agentic-SEO-Skill specialized SEO + GEO modules...');
  const crawlerMatrix = runPython(path.join(REPO_AGENTIC, 'ai_crawler_policy_matrix.py'), [SITE_URL, '--json']);
  const llmsCheck = runPython(path.join(REPO_AGENTIC, 'llms_txt_checker.py'), [SITE_URL, '--json']);
  const sitemapCheck = runPython(path.join(REPO_AGENTIC, 'sitemap_checker.py'), [SITE_URL, '--json']);
  const securityCheck = runPython(path.join(REPO_AGENTIC, 'security_headers.py'), [SITE_URL, '--json']);
  const entityHome = runPython(path.join(REPO_AGENTIC, 'entity_checker.py'), [SITE_URL, '--json']);
  const eeatHome = runPython(path.join(REPO_AGENTIC, 'eeat_signal_checker.py'), [SITE_URL, '--json']);
  const eeatArticle = runPython(path.join(REPO_AGENTIC, 'eeat_signal_checker.py'), [ARTICLE_URL, '--json']);
  const citationArticle = runPython(path.join(REPO_AGENTIC, 'citation_readiness.py'), [ARTICLE_URL, '--json']);

  console.log('[3/5] Running geo-seo-claude citability & brand scanners...');
  const citabilityHome = runPython(path.join(REPO_GEO, 'citability_scorer.py'), [SITE_URL, 'json']);
  const citabilityArticle = runPython(path.join(REPO_GEO, 'citability_scorer.py'), [ARTICLE_URL, 'json']);
  const brandScan = runPython(path.join(REPO_GEO, 'brand_scanner.py'), ['Dijital Hezarfen', 'dijitalhezarfen.com']);

  console.log('[4/5] Running claude-seo HTML & content quality scoring...');
  const parseArticle = runPython(path.join(REPO_CLAUDE_SEO, 'parse_html.py'), ['--url', ARTICLE_URL, '--json']);
  const articleHtmlRes = await fetch(ARTICLE_URL);
  const articleHtml = articleHtmlRes.ok ? await articleHtmlRes.text() : '';
  const contentQualityArticle = articleHtml
    ? runPython(path.join(REPO_CLAUDE_SEO, 'content_quality.py'), ['--json'], true, articleHtml)
    : { ok: false, error: 'Failed to fetch article HTML' };

  console.log('[5/5] Probing live routes & local workspace integrity...');
  const liveRoutes = await probeLiveRoutes(SITE_URL);
  const workspace = await inspectWorkspace(path.join(ROOT_DIR, 'src', 'data', 'articles.js'));

  const agenticJson = fs.existsSync(path.join(REPORT_DIR, 'agentic-audit.json'))
    ? JSON.parse(fs.readFileSync(path.join(REPORT_DIR, 'agentic-audit.json'), 'utf8'))
    : null;

  const summary = {
    generatedAt: new Date().toISOString(),
    targets: { siteUrl: SITE_URL, articleUrl: ARTICLE_URL },
    agenticSeo: {
      exitStatus: agenticFull.status,
      overallScore: agenticJson?.overall_score ?? agenticJson?.score ?? null,
      crawlerMatrix: crawlerMatrix.data ?? crawlerMatrix,
      llmsTxt: llmsCheck.data ?? llmsCheck,
      sitemap: sitemapCheck.data ?? sitemapCheck,
      securityHeaders: securityCheck.data ?? securityCheck,
      entityHome: entityHome.data ?? entityHome,
      eeatHome: eeatHome.data ?? eeatHome,
      eeatArticle: eeatArticle.data ?? eeatArticle,
      citationArticle: citationArticle.data ?? citationArticle
    },
    geoSeoClaude: {
      citabilityHome: citabilityHome.data ?? citabilityHome,
      citabilityArticle: citabilityArticle.data ?? citabilityArticle,
      brandScan: brandScan.data ?? brandScan
    },
    claudeSeo: {
      parseArticle: parseArticle.data ?? parseArticle,
      contentQualityArticle: contentQualityArticle.data ?? contentQualityArticle
    },
    liveRoutes,
    workspace
  };

  fs.writeFileSync(path.join(REPORT_DIR, 'COMBINED-SUMMARY.json'), JSON.stringify(summary, null, 2), 'utf8');

  const route404s = liveRoutes.filter((r) => r.status === 404 && r.route !== '/llms.txt').map((r) => r.route);
  const mdLines = [
    '# Unified SEO + GEO Audit Report',
    '',
    `- **Generated:** ${summary.generatedAt}`,
    `- **Site URL:** ${SITE_URL}`,
    `- **Lead Article URL:** ${ARTICLE_URL}`,
    '',
    '## Live Route Status',
    ...liveRoutes.map((r) => `- \`${r.route}\` -> **${r.status}** (emptyRoot=${r.emptyRoot}, bytes=${r.bytes}, canonical=${r.canonical || 'none'})`),
    '',
    '## Key Findings Across Engines',
    `- **404 Core Routes:** ${route404s.length} (${route404s.join(', ') || 'none'})`,
    `- **llms.txt Exists:** ${summary.agenticSeo.llmsTxt?.exists ?? false}`,
    `- **Citability Home:** ${JSON.stringify(summary.geoSeoClaude.citabilityHome?.overall_score ?? summary.geoSeoClaude.citabilityHome?.average_score ?? summary.geoSeoClaude.citabilityHome?.error ?? 'see JSON')}`,
    `- **Citability Article:** ${JSON.stringify(summary.geoSeoClaude.citabilityArticle?.overall_score ?? summary.geoSeoClaude.citabilityArticle?.average_score ?? summary.geoSeoClaude.citabilityArticle?.error ?? 'see JSON')}`,
    `- **Content Quality (Article):** ${JSON.stringify(summary.claudeSeo.contentQualityArticle?.overall_quality ?? summary.claudeSeo.contentQualityArticle?.error ?? 'see JSON')}`,
    `- **Workspace Hash Links (\`href="#..."\`):** ${workspace.jsxHashHrefs}`,
    `- **SSG Articles Missing from Sitemap:** ${workspace.missingFromSitemap.join(', ') || 'none'}`,
    `- **SVG OG Images:** ${workspace.svgOgArticlesCount}`
  ];

  fs.writeFileSync(path.join(REPORT_DIR, 'COMBINED-REPORT.md'), mdLines.join('\n'), 'utf8');

  console.log('\n=== UNIFIED SEO + GEO CHECK COMPLETE ===');
  console.log(`Reports saved to: ${REPORT_DIR}`);
  console.log(`Core route 404 count: ${route404s.length} -> ${route404s.join(', ')}`);
  console.log(`llms.txt present: ${summary.agenticSeo.llmsTxt?.exists ?? false}`);
}

main().catch((err) => {
  console.error('Audit failed:', err);
  process.exit(1);
});
