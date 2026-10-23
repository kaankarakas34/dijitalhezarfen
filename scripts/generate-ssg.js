import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const templateHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(templateHtmlPath)) {
  console.error('dist/index.html not found! Please run vite build first.');
  process.exit(1);
}

const templateHtml = fs.readFileSync(templateHtmlPath, 'utf8');

// Dynamic import of articles from compiled source or ES module
const { articles, articleCategories } = await import(pathToFileURL(path.join(projectRoot, 'src', 'data', 'articles.js')).href);

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ı/g, 'i')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function parseMarkdownToHtml(markdown, sources = []) {
  const lines = markdown
    .split(/\r?\n/)
    .map(l => l.trim())
    .filter(Boolean);

  let html = '';
  let inList = false;

  const renderInline = (text) => {
    return text
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code class="bg-white/10 text-cyan-300 px-1 py-0.5 rounded text-xs">$1</code>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (match, p1, p2) => {
        const isInternal = p2.startsWith('/');
        return `<a href="${p2}" class="text-cyan-400 hover:underline font-medium"${isInternal ? '' : ' target="_blank" rel="noreferrer noopener"'}>${p1}</a>`;
      });
  };

  for (const line of lines) {
    if (line.startsWith('- ') || line.startsWith('* ') || line.startsWith('• ')) {
      if (!inList) {
        html += '<ul class="list-disc list-inside space-y-2 text-gray-300 my-4 pl-2 font-light">';
        inList = true;
      }
      const item = line.replace(/^[-*•]\s+/, '');
      html += `<li>${renderInline(item)}</li>`;
      continue;
    }

    if (inList) {
      html += '</ul>';
      inList = false;
    }

    if (line.startsWith('# ')) {
      const title = line.replace(/^#\s+/, '');
      html += `<h2 class="text-2xl sm:text-3xl font-extrabold text-white mt-12 mb-4 pt-6 border-t border-white/10" id="${slugify(title)}">${escapeHtml(title)}</h2>`;
    } else if (line.startsWith('## ')) {
      const title = line.replace(/^##\s+/, '');
      html += `<h2 class="text-xl sm:text-2xl font-bold text-white mt-10 mb-4 pt-4 border-t border-white/10" id="${slugify(title)}">${escapeHtml(title)}</h2>`;
    } else if (line.startsWith('### ')) {
      const title = line.replace(/^###\s+/, '');
      html += `<h3 class="text-lg sm:text-xl font-bold text-gray-200 mt-6 mb-3" id="${slugify(title)}">${escapeHtml(title)}</h3>`;
    } else if (line.startsWith('> ')) {
      const quote = line.replace(/^>\s*/, '');
      html += `<blockquote class="border-l-4 border-cyan-400 bg-cyan-950/20 p-4 rounded-r-xl my-6 text-cyan-200 text-sm leading-relaxed">${renderInline(quote)}</blockquote>`;
    } else if (line === '---' || line === '***') {
      html += '<hr class="my-8 border-white/10" />';
    } else {
      html += `<p class="text-gray-300 text-base sm:text-lg leading-relaxed my-4 font-light">${renderInline(line)}</p>`;
    }
  }

  if (inList) {
    html += '</ul>';
  }

  return html;
}

console.log('Generating static HTML (SSG) for all articles...');

let generatedCount = 0;

for (const art of articles) {
  if (!art.source) continue;

  const rawFilePath = path.join(projectRoot, 'public', art.source);
  if (!fs.existsSync(rawFilePath)) {
    console.warn(`Source text not found for ${art.slug}: ${rawFilePath}`);
    continue;
  }

  const rawText = fs.readFileSync(rawFilePath, 'utf8');
  const bodyHtml = parseMarkdownToHtml(rawText, art.sources || []);
  const canonicalUrl = `https://dijitalhezarfen.com/yayinlar/${art.slug}`;
  const imageUrl = art.image.startsWith('http') ? art.image : `https://dijitalhezarfen.com${art.image}`;
  const categoryLabel = articleCategories.find(c => c.id === art.category)?.label.tr || 'Haber';
  const schemaType = art.category === 'haber' ? 'NewsArticle' : (art.category === 'rapor' ? 'TechArticle' : 'Article');

  // JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': schemaType,
        '@id': `${canonicalUrl}#article`,
        isPartOf: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        headline: art.title.tr,
        name: art.title.tr,
        description: art.desc.tr,
        image: [imageUrl],
        author: {
          '@type': 'Person',
          name: art.author,
          jobTitle: art.authorRole || 'Kurucu & Teknoloji Girişimcisi',
          url: 'https://dijitalhezarfen.com/#/dijital-hezarfen'
        },
        publisher: {
          '@type': 'Organization',
          name: 'Dijital Hezarfen',
          url: 'https://dijitalhezarfen.com',
          logo: {
            '@type': 'ImageObject',
            url: 'https://dijitalhezarfen.com/favicon.svg',
            width: 60,
            height: 60
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonicalUrl
        },
        datePublished: art.publishedAt,
        dateModified: art.modifiedAt || art.publishedAt,
        articleSection: categoryLabel,
        keywords: art.keywords?.join(', '),
        inLanguage: 'tr-TR',
        citation: art.sources?.map(s => s.url)
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Ana Sayfa',
            item: 'https://dijitalhezarfen.com/'
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Yayınlar',
            item: 'https://dijitalhezarfen.com/yayinlar'
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: art.title.tr,
            item: canonicalUrl
          }
        ]
      }
    ]
  };

  // Build semantic article HTML to inject into #root
  const articleSemanticHtml = `
    <div class="min-h-screen bg-[#000000] text-gray-100 selection:bg-cyan-500/30 selection:text-white">
      <article class="pt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <!-- Breadcrumb Navigation -->
        <nav aria-label="Ekmek kırıntısı" class="flex items-center gap-2 text-xs text-gray-500 mb-6">
          <a href="/" class="hover:text-cyan-400 transition-colors">Ana Sayfa</a>
          <span>/</span>
          <a href="/yayinlar" class="hover:text-cyan-400 transition-colors">Yayınlar</a>
          <span>/</span>
          <span class="text-gray-400 truncate max-w-xs">${escapeHtml(categoryLabel)}</span>
        </nav>

        <!-- Meta badges -->
        <div class="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-6">
          <span class="rounded-lg bg-cyan-500/10 text-cyan-400 px-3 py-1 font-bold border border-cyan-500/20">${escapeHtml(categoryLabel)}</span>
          <span><time dateTime="${art.publishedAt}">${escapeHtml(art.date.tr)}</time></span>
          <span>•</span>
          <span>${escapeHtml(art.readTime.tr)}</span>
          <span>•</span>
          <span>Yazar: <strong class="text-white">${escapeHtml(art.author)}</strong></span>
        </div>

        <!-- H1 Headline -->
        <h1 class="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-8">${escapeHtml(art.title.tr)}</h1>

        <!-- Lead Description -->
        <div class="border-l-4 border-cyan-500/60 pl-4 py-2 my-6 bg-white/[0.02]">
          <p class="text-lg sm:text-xl text-gray-200 font-light leading-relaxed">${escapeHtml(art.desc.tr)}</p>
        </div>

        <!-- Hero Image -->
        <figure class="my-8 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <img src="${art.image}" alt="${escapeHtml(art.imageAlt || art.title.tr)}" class="w-full aspect-[16/9] object-cover" loading="eager" />
          ${art.imageAlt ? `<figcaption class="text-center text-xs text-gray-400 py-2.5 px-4 bg-[#080B12] border-t border-white/5">${escapeHtml(art.imageAlt)}</figcaption>` : ''}
        </figure>

        <!-- Article Body -->
        <div class="article-content space-y-6">
          ${bodyHtml}
        </div>

        <!-- Sources Section -->
        ${art.sources?.length ? `
          <div id="kaynaklar" class="mt-16 pt-8 border-t border-white/10">
            <h2 class="text-xl sm:text-2xl font-extrabold text-white mb-4">Kaynaklar ve Referanslar</h2>
            <p class="text-xs text-gray-400 mb-4 font-light">Bu analizdeki veriler ve haber detayları aşağıdaki doğrulanmış resmî kaynaklara dayanmaktadır:</p>
            <ul class="space-y-2">
              ${art.sources.map(s => `
                <li class="p-3 rounded-xl border border-white/5 bg-white/3 text-xs text-gray-300">
                  <a href="${s.url}" target="_blank" rel="noreferrer noopener" class="text-cyan-400 hover:underline font-medium block">
                    ${escapeHtml(s.label)}
                  </a>
                  <span class="text-[10px] text-gray-500 font-mono">${escapeHtml(s.url)}</span>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}

        <!-- Author Bio Box -->
        <div class="mt-16 rounded-2xl border border-white/10 bg-[#0C1220] p-6 flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <div class="w-16 h-16 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-300 font-bold text-xl font-mono shrink-0">
            KK
          </div>
          <div>
            <h3 class="text-lg font-bold text-white">${escapeHtml(art.author)}</h3>
            <span class="text-xs text-cyan-400 font-medium">${escapeHtml(art.authorRole || 'Kurucu & Teknoloji Girişimcisi')}</span>
            <p class="text-xs sm:text-sm text-gray-400 mt-2 font-light leading-relaxed">${escapeHtml(art.authorBio || '')}</p>
          </div>
        </div>
      </article>
    </div>
  `;

  // Inject meta tags into template <head>
  let pageHtml = templateHtml;

  // Replace <title>
  const pageTitle = `${art.title.tr} | Dijital Hezarfen`;
  pageHtml = pageHtml.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(pageTitle)}</title>`);

  // Replace <meta name="description">
  pageHtml = pageHtml.replace(/<meta name="description" content=".*?" \/>/i, `<meta name="description" content="${escapeHtml(art.desc.tr)}" />`);

  // Build custom head injection
  const headInject = `
    <link rel="canonical" href="${canonicalUrl}" />
    <meta name="author" content="${escapeHtml(art.author)}" />
    <meta name="keywords" content="${escapeHtml(art.keywords?.join(', ') || '')}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

    <!-- Open Graph -->
    <meta property="og:site_name" content="Dijital Hezarfen" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${escapeHtml(pageTitle)}" />
    <meta property="og:description" content="${escapeHtml(art.desc.tr)}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:alt" content="${escapeHtml(art.imageAlt || art.title.tr)}" />
    <meta property="article:published_time" content="${art.publishedAt}" />
    <meta property="article:modified_time" content="${art.modifiedAt || art.publishedAt}" />
    <meta property="article:author" content="${escapeHtml(art.author)}" />
    <meta property="article:section" content="${escapeHtml(categoryLabel)}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(pageTitle)}" />
    <meta name="twitter:description" content="${escapeHtml(art.desc.tr)}" />
    <meta name="twitter:image" content="${imageUrl}" />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json" id="article-json-ld">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  `;

  pageHtml = pageHtml.replace('</head>', `${headInject}\n</head>`);

  // Inject prerendered semantic HTML into <div id="root">
  pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${articleSemanticHtml}</div>`);

  // Save to dist/yayinlar/{slug}/index.html
  const targetDir = path.join(distDir, 'yayinlar', art.slug);
  if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true });

  fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml, 'utf8');

  // Also save flat dist/yayinlar/{slug}.html for static server setups
  fs.writeFileSync(path.join(distDir, 'yayinlar', `${art.slug}.html`), pageHtml, 'utf8');

  generatedCount++;
}

console.log(`Successfully pre-rendered ${generatedCount} static HTML articles in dist/yayinlar/!`);
