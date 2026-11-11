import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const publicDir = path.join(projectRoot, 'public');
const distDir = path.join(projectRoot, 'dist');
const templateHtmlPath = path.join(distDir, 'index.html');

if (!fs.existsSync(templateHtmlPath)) {
  console.error('dist/index.html not found! Please run vite build first.');
  process.exit(1);
}

const rawTemplateHtml = fs.readFileSync(templateHtmlPath, 'utf8');

const importData = (relPath) => import(pathToFileURL(path.join(projectRoot, relPath)).href);

const { articles, articleCategories } = await importData('src/data/articles.js');
const { youtubeVideos } = await importData('src/data/youtubeVideos.js');
const { faqData, faqCategories } = await importData('src/data/faqData.js');
const {
  SITE_ORIGIN,
  SITE_NAME,
  DEFAULT_OG_IMAGE,
  ORGANIZATION_SAME_AS,
  PERSON_ENTITIES,
  CORE_SEO_ROUTES
} = await importData('src/data/seoRoutes.js');

const TODAY_ISO = new Date().toISOString().slice(0, 10);

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
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getInitials(name) {
  return (name || 'DH')
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join('');
}

function toAbsoluteUrl(relOrAbs) {
  if (!relOrAbs) return DEFAULT_OG_IMAGE;
  return relOrAbs.startsWith('http') ? relOrAbs : `${SITE_ORIGIN}${relOrAbs.startsWith('/') ? '' : '/'}${relOrAbs}`;
}

function smartTrimMeta(text, maxLen = 158) {
  if (!text) return '';
  const clean = String(text).replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLen) return clean;
  const sliced = clean.slice(0, maxLen - 1);
  const lastSpace = sliced.lastIndexOf(' ');
  return `${(lastSpace > 90 ? sliced.slice(0, lastSpace) : sliced).replace(/[,:;—-]+$/, '')}.`;
}

function toOgRasterUrl(imagePath, slug = '') {
  if (slug) {
    const generatedOgPath = path.join(publicDir, 'images', 'og', `${slug}.png`);
    if (fs.existsSync(generatedOgPath)) {
      return `${SITE_ORIGIN}/images/og/${slug}.png`;
    }
  }
  if (!imagePath || imagePath.endsWith('.svg')) {
    return DEFAULT_OG_IMAGE;
  }
  return toAbsoluteUrl(imagePath);
}

function buildTrustNavFooterHtml() {
  const linkItem = (href, label) => `<a href="${href}" class="hover:text-cyan-400">${label}</a>`;
  return `
    <footer class="mt-16 pt-8 border-t border-white/10 text-xs text-gray-400 space-y-6">
      <nav aria-label="Kurumsal ve Ekosistem Bağlantıları" class="space-y-4">
        <div class="flex flex-wrap gap-x-5 gap-y-2">
          <strong class="text-gray-200">Ekosistem:</strong>
          ${linkItem('/', 'Ana Sayfa')}
          ${linkItem('/yayinlar', 'Tüm Yayınlar')}
          ${linkItem('/dijital-hezarfen', 'Dijital Hezarfen Nedir?')}
          ${linkItem('/hakkimizda', 'Hakkımızda')}
          ${linkItem('/medya', 'Medya &amp; YouTube')}
          ${linkItem('/kurumsal', 'Kurumsal Çözümler')}
          ${linkItem('/acik-kaynak-kutuphanesi', 'Açık Kaynak Araç Kütüphanesi')}
          ${linkItem('/sik-sorulan-sorular', 'Sık Sorulan Sorular')}
          ${linkItem('/basvur', 'Başvur')}
          ${linkItem('/iletisim', 'İletişim')}
        </div>
        <div class="flex flex-wrap gap-x-5 gap-y-2">
          <strong class="text-gray-200">Akademi:</strong>
          ${linkItem('/akademi', 'Akademi Ana Sayfa')}
          ${linkItem('/akademi/girisimcilik-tuneli', 'Girişimcilik Tüneli')}
          ${linkItem('/akademi/egitimler', 'Modüler Eğitimler')}
          ${linkItem('/akademi/pazarlama-satis', 'Pazarlama &amp; Satış Eğitimleri')}
          ${linkItem('/akademi/teknoloji-yapay-zeka', 'Teknoloji &amp; Yapay Zekâ Eğitimleri')}
          ${linkItem('/akademi/finans-hukuk-yonetim', 'Finans, Hukuk &amp; Yönetim Eğitimleri')}
          ${linkItem('/akademi/kurumsal', 'Kurumsal Akademi')}
        </div>
        <div class="flex flex-wrap gap-x-5 gap-y-2">
          <strong class="text-gray-200">Uygulama Hizmetleri:</strong>
          ${linkItem('/uygulama', 'Uygulama Ana Sayfa')}
          ${linkItem('/uygulama/yazilim-mvp', 'Yazılım &amp; AI MVP')}
          ${linkItem('/uygulama/yapay-zeka-otomasyon', 'Yapay Zekâ Otomasyon')}
          ${linkItem('/uygulama/dijital-pazarlama-growth', 'Dijital Pazarlama &amp; Growth')}
          ${linkItem('/uygulama/satis-crm', 'B2B Satış &amp; CRM')}
          ${linkItem('/uygulama/finans-hukuk', 'Finans &amp; Startup Hukuku')}
          ${linkItem('/uygulama/yonetim-organizasyon', 'Yönetim &amp; Organizasyon')}
          ${linkItem('/uygulama/medya-tasarim', 'Marka Tasarımı &amp; Medya')}
        </div>
        <div class="flex flex-wrap gap-x-5 gap-y-2">
          <strong class="text-gray-200">Girişim Aşamaları &amp; Büyüme:</strong>
          ${linkItem('/girisimler', 'Girişimler İçin')}
          ${linkItem('/girisimler/fikir-asamasi', 'Fikir Aşaması')}
          ${linkItem('/girisimler/pre-seed', 'Pre-Seed')}
          ${linkItem('/girisimler/seed', 'Seed')}
          ${linkItem('/girisimler/series-a-ve-sonrasi', 'Series A ve Sonrası')}
          ${linkItem('/girisimler/scale-up', 'Scale-up')}
          ${linkItem('/buyume-yatirim', 'Büyüme &amp; Yatırım')}
          ${linkItem('/buyume-yatirim/yatirima-hazirlik', 'Yatırıma Hazırlık')}
          ${linkItem('/buyume-yatirim/uluslararasilasma', 'Uluslararasılaşma')}
        </div>
      </nav>
    </footer>
  `;
}

function buildOrganizationSchema() {
  return {
    '@type': 'Organization',
    '@id': `${SITE_ORIGIN}/#organization`,
    name: SITE_NAME,
    url: `${SITE_ORIGIN}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_ORIGIN}/favicon.svg`,
      width: 60,
      height: 60
    },
    description:
      'Dijital Hezarfen; girişimcileri yetiştiren, fikirleri çalışan ürünlere dönüştüren ve şirketleri sürdürülebilir büyümeye taşıyan akademi, uygulama ve medya ekosistemidir.',
    sameAs: ORGANIZATION_SAME_AS,
    founder: [
      { '@type': 'Person', '@id': `${SITE_ORIGIN}/#person-kaan-karakas`, name: 'Kaan Karakaş' }
    ]
  };
}

function buildPersonSchemas() {
  return Object.values(PERSON_ENTITIES).map((person) => ({
    '@type': 'Person',
    '@id': `${SITE_ORIGIN}/#person-${slugify(person.name)}`,
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.bio,
    url: person.url,
    worksFor: { '@id': `${SITE_ORIGIN}/#organization` },
    ...(person.sameAs?.length ? { sameAs: person.sameAs } : {})
  }));
}

function buildVideoSchemas() {
  return youtubeVideos.map((v) => ({
    '@type': 'VideoObject',
    '@id': `${SITE_ORIGIN}/medya#video-${v.id}`,
    name: v.title.tr,
    description: v.summary.tr,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
    embedUrl: `https://www.youtube-nocookie.com/embed/${v.id}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.id}`,
    author: { '@type': 'Person', name: v.author },
    publisher: { '@id': `${SITE_ORIGIN}/#organization` }
  }));
}

function injectHeadAndRoot(baseHtml, {
  title,
  description,
  canonicalUrl,
  ogType = 'website',
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = SITE_NAME,
  extraMeta = '',
  jsonLd,
  semanticBodyHtml
}) {
  const isGeneratedOg = ogImage.includes('/images/og/');
  const ogWidth = isGeneratedOg ? 1200 : 1600;
  const ogHeight = isGeneratedOg ? 675 : 900;
  let html = baseHtml;

  html = html.replace(/<title>.*?<\/title>/is, `<title>${escapeHtml(title)}</title>`);
  html = html.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/i, `<meta name="description" content="${escapeHtml(description)}" />`);

  // Strip base head tags that we replace with route-exact versions
  const stripPatterns = [
    /<link\s+rel="canonical"[^>]*>\s*/gi,
    /<meta\s+name="robots"[^>]*>\s*/gi,
    /<meta\s+property="og:[^"]*"[^>]*>\s*/gi,
    /<meta\s+name="twitter:[^"]*"[^>]*>\s*/gi
  ];
  for (const pattern of stripPatterns) {
    html = html.replace(pattern, '');
  }

  const headInject = `
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}" />
    <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    ${extraMeta}

    <!-- Open Graph -->
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:type" content="${ogType}" />
    <meta property="og:locale" content="tr_TR" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}" />
    <meta property="og:image" content="${escapeHtml(ogImage)}" />
    <meta property="og:image:width" content="${ogWidth}" />
    <meta property="og:image:height" content="${ogHeight}" />
    <meta property="og:image:alt" content="${escapeHtml(ogImageAlt)}" />

    <!-- Twitter Card -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${escapeHtml(ogImage)}" />
    <meta name="twitter:image:alt" content="${escapeHtml(ogImageAlt)}" />

    <!-- Schema.org JSON-LD -->
    <script type="application/ld+json" id="page-json-ld">
${JSON.stringify(jsonLd, null, 2)}
    </script>
  `;

  html = html.replace('</head>', `${headInject}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root">${semanticBodyHtml}</div>`);
  return html;
}

function parseMarkdownToHtml(markdown) {
  const rawLines = markdown.split(/\r?\n/);
  let html = '';
  let inList = false;
  let inCode = false;
  let codeBuffer = [];
  let codeLang = '';

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

  for (let i = 0; i < rawLines.length; i++) {
    const rawLine = rawLines[i];
    const line = rawLine.trim();

    if (line.startsWith('```')) {
      if (inCode) {
        html += `<pre class="my-6 p-4 rounded-xl border border-cyan-500/20 bg-[#070A12] text-cyan-200 font-mono text-xs sm:text-sm overflow-x-auto"><code class="language-${codeLang}">${escapeHtml(codeBuffer.join('\n'))}</code></pre>`;
        inCode = false;
        codeBuffer = [];
        codeLang = '';
      } else {
        inCode = true;
        codeLang = line.slice(3).trim();
        codeBuffer = [];
      }
      continue;
    }

    if (inCode) {
      codeBuffer.push(rawLine);
      continue;
    }

    if (!line) {
      if (inList) {
        html += '</ul>';
        inList = false;
      }
      continue;
    }

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

    const imgMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
    if (imgMatch) {
      html += `<figure class="my-8 rounded-2xl overflow-hidden border border-white/10 bg-[#080B12]"><img src="${imgMatch[2]}" alt="${escapeHtml(imgMatch[1])}" class="w-full h-auto" loading="lazy" /></figure>`;
      continue;
    }

    if (line.startsWith('<iframe')) {
      html += `<figure class="my-8 rounded-2xl overflow-hidden border border-white/10 aspect-video">${line}</figure>`;
      continue;
    }

    if (line.startsWith('|')) {
      const tableLines = [line];
      while (i + 1 < rawLines.length && rawLines[i + 1].trim().startsWith('|')) {
        i++;
        tableLines.push(rawLines[i].trim());
      }
      if (tableLines.length >= 2) {
        const parseCells = (row) => row.split('|').slice(1, -1).map((c) => c.trim());
        const headers = parseCells(tableLines[0]);
        const dataRows = tableLines.slice(1).filter((r) => !/^\|[\s\-:]+(\|[\s\-:]+)+\|?$/.test(r)).map(parseCells);
        html += `<div class="my-8 overflow-x-auto rounded-2xl border border-white/10 bg-[#0A0E17]/80"><table class="w-full text-left text-xs sm:text-sm border-collapse min-w-[500px]"><thead><tr class="border-b border-white/10 bg-white/[0.04]">${headers.map((h) => `<th class="py-3 px-4 text-cyan-400 font-bold uppercase text-[11px]">${renderInline(h)}</th>`).join('')}</tr></thead><tbody class="divide-y divide-white/5">${dataRows.map((r) => `<tr class="hover:bg-white/[0.02]">${r.map((c, cIdx) => `<td class="py-3 px-4 ${cIdx === 0 ? 'font-medium text-white' : 'text-gray-300'}">${renderInline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
        continue;
      }
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

  if (inList) html += '</ul>';
  if (inCode && codeBuffer.length > 0) {
    html += `<pre class="my-6 p-4 rounded-xl border border-cyan-500/20 bg-[#070A12] text-cyan-200 font-mono text-xs sm:text-sm overflow-x-auto"><code>${escapeHtml(codeBuffer.join('\n'))}</code></pre>`;
  }

  return html;
}

// =========================================================================
// 1. Pre-render All 40 Article Pages
// =========================================================================
console.log('Generating static HTML (SSG) for articles...');
const ssgArticles = [];

for (const art of articles) {
  if (!art.source) continue;

  const rawFilePath = path.join(projectRoot, 'public', art.source);
  if (!fs.existsSync(rawFilePath)) {
    console.warn(`Source text not found for ${art.slug}: ${rawFilePath}`);
    continue;
  }

  ssgArticles.push(art);
  const rawText = fs.readFileSync(rawFilePath, 'utf8');
  const bodyHtml = parseMarkdownToHtml(rawText);
  const canonicalUrl = `${SITE_ORIGIN}/yayinlar/${art.slug}`;
  const ogImageUrl = toOgRasterUrl(art.image, art.slug);
  const metaDesc = smartTrimMeta(art.seoDesc || art.desc.tr, 158);
  const categoryLabel = articleCategories.find((c) => c.id === art.category)?.label.tr || 'Haberler';
  const topicLabel = art.topic?.tr || '';
  const leadText = art.lead?.tr || art.desc.tr;
  const schemaType = art.category === 'haber' ? 'NewsArticle' : (art.category === 'rapor' ? 'TechArticle' : 'Article');
  const authorEntity = PERSON_ENTITIES[art.author];
  const resolvedAuthorBio = art.authorBio || authorEntity?.bio || '';
  const resolvedAuthorRole = art.authorRole || authorEntity?.jobTitle || 'Kurucu & Teknoloji Girişimcisi';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': schemaType,
        '@id': `${canonicalUrl}#article`,
        isPartOf: { '@type': 'WebPage', '@id': canonicalUrl },
        headline: art.title.tr,
        name: art.title.tr,
        description: art.desc.tr,
        image: [ogImageUrl],
        author: art.author === SITE_NAME
          ? { '@type': 'Organization', '@id': `${SITE_ORIGIN}/#organization`, name: SITE_NAME, url: `${SITE_ORIGIN}/` }
          : {
              '@type': 'Person',
              '@id': `${SITE_ORIGIN}/#person-${slugify(art.author)}`,
              name: art.author,
              jobTitle: resolvedAuthorRole,
              url: `${SITE_ORIGIN}/dijital-hezarfen`,
              ...(authorEntity?.sameAs?.length ? { sameAs: authorEntity.sameAs } : {})
            },
        publisher: buildOrganizationSchema(),
        mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl },
        datePublished: art.publishedAt,
        dateModified: art.modifiedAt || art.publishedAt,
        articleSection: categoryLabel,
        keywords: art.keywords?.join(', '),
        inLanguage: 'tr-TR',
        citation: art.sources?.map((s) => s.url)
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE_ORIGIN}/` },
          { '@type': 'ListItem', position: 2, name: 'Yayınlar', item: `${SITE_ORIGIN}/yayinlar` },
          { '@type': 'ListItem', position: 3, name: art.title.tr, item: canonicalUrl }
        ]
      }
    ]
  };

  if (art.slug === 'kapso-whatsapp-chatbot-codex-claude-code-kurulum') {
    jsonLd['@graph'].push({
      '@type': 'FAQPage',
      '@id': `${canonicalUrl}#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Kapso ile WhatsApp botu kod yazmadan kurulabilir mi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Kapso’nun Workflows ve Agent arayüzü temel SSS ve kural bazlı mesajlaşmaları görsel olarak kurmayı kolaylaştırır. Codex ve Claude Code da gereken kod veya yapılandırmayı üretebilir.'
          }
        },
        {
          '@type': 'Question',
          name: 'Codex veya Claude Code açık değilken bot çalışır mı?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Evet. Codex ve Claude Code geliştirme asistanıdır; botun 7/24 kesintisiz çalışması Kapso içinde yayınlanan bir Workflow/Agent veya bulutta barındırılan sunucusuz webhook mimarisiyle sağlanır.'
          }
        },
        {
          '@type': 'Question',
          name: 'Mevcut WhatsApp Business numaramla kurabilir miyim?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Evet. WhatsApp Business App Coexistence seçeneğiyle numara telefonda kalırken Kapso ile paralel kullanılabilir.'
          }
        }
      ]
    });
  }

  const articleSemanticHtml = `
    <div class="min-h-screen bg-[#000000] text-gray-100">
      <main class="pt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <nav aria-label="Ekmek kırıntısı" class="flex items-center gap-2 text-xs text-gray-400 mb-6">
          <a href="/" class="hover:text-cyan-400">Ana Sayfa</a>
          <span>/</span>
          <a href="/yayinlar" class="hover:text-cyan-400">Yayınlar</a>
          <span>/</span>
          <span>${escapeHtml(categoryLabel)}</span>
        </nav>

        <div class="flex flex-wrap items-center gap-3 text-xs text-gray-400 mb-6">
          <span>${escapeHtml(categoryLabel)}</span>
          ${topicLabel ? `<span>•</span><span>${escapeHtml(topicLabel)}</span>` : ''}
          <span>•</span>
          <span>Yayın: <time dateTime="${art.publishedAt}">${escapeHtml(art.date.tr)}</time></span>
          <span>•</span>
          <span>${escapeHtml(art.readTime.tr)}</span>
          <span>•</span>
          <span>Yazar: <strong>${escapeHtml(art.author)}</strong></span>
        </div>

        <h1 class="text-3xl sm:text-5xl font-extrabold text-white leading-tight mb-8">${escapeHtml(art.title.tr)}</h1>

        <div class="border-l-4 border-cyan-500/60 pl-4 py-2 my-6 bg-white/[0.02]">
          <p class="text-lg sm:text-xl text-gray-200 font-light leading-relaxed">${escapeHtml(leadText)}</p>
        </div>

        <figure class="my-8 rounded-2xl overflow-hidden border border-white/10 bg-white/5">
          <img src="${art.image}" alt="${escapeHtml(art.imageAlt || art.title.tr)}" width="1600" height="900" class="w-full aspect-[16/9] object-cover" loading="eager" />
          ${art.imageAlt ? `<figcaption class="text-center text-xs text-gray-400 py-2.5 px-4">${escapeHtml(art.imageAlt)}</figcaption>` : ''}
        </figure>

        <div class="article-content space-y-6">
          ${bodyHtml}
        </div>

        ${art.sources?.length ? `
          <section id="kaynaklar" class="mt-16 pt-8 border-t border-white/10">
            <h2 class="text-xl sm:text-2xl font-extrabold text-white mb-4">Kaynaklar ve Doğrulama Bağlantıları</h2>
            <ul class="space-y-2">
              ${art.sources.map((s) => `
                <li class="p-3 rounded-xl border border-white/5 bg-white/3 text-xs text-gray-300">
                  <a href="${escapeHtml(s.url)}" target="_blank" rel="noreferrer noopener" class="text-cyan-400 hover:underline font-medium block">
                    ${escapeHtml(s.label)}
                  </a>
                </li>
              `).join('')}
            </ul>
          </section>
        ` : ''}

        ${art.author !== SITE_NAME && !art.hideAuthorBio ? `
          <section class="mt-12 rounded-2xl border border-white/10 bg-[#0C1220] p-6 flex items-start gap-4">
            <div class="w-16 h-16 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-300 font-bold text-xl shrink-0">
              ${getInitials(art.author)}
            </div>
            <div>
              <h3 class="text-lg font-bold text-white">${escapeHtml(art.author)}</h3>
              <p class="text-xs text-cyan-400 font-medium">${escapeHtml(resolvedAuthorRole)}</p>
              <p class="text-xs sm:text-sm text-gray-400 mt-2 font-light leading-relaxed">${escapeHtml(resolvedAuthorBio)}</p>
            </div>
          </section>
        ` : ''}

        ${buildTrustNavFooterHtml()}
      </main>
    </div>
  `;

  const pageTitle = art.seoTitle || `${art.title.tr} | ${SITE_NAME}`;
  const extraMeta = `
    <meta name="author" content="${escapeHtml(art.author)}" />
    <meta name="keywords" content="${escapeHtml(art.keywords?.join(', ') || '')}" />
    <meta property="article:published_time" content="${art.publishedAt}" />
    <meta property="article:modified_time" content="${art.modifiedAt || art.publishedAt}" />
    <meta property="article:author" content="${escapeHtml(art.author)}" />
    <meta property="article:section" content="${escapeHtml(categoryLabel)}" />
  `;

  const pageHtml = injectHeadAndRoot(rawTemplateHtml, {
    title: pageTitle,
    description: metaDesc,
    canonicalUrl,
    ogType: 'article',
    ogImage: ogImageUrl,
    ogImageAlt: art.imageAlt || art.title.tr,
    extraMeta,
    jsonLd,
    semanticBodyHtml: articleSemanticHtml
  });

  const targetDir = path.join(distDir, 'yayinlar', art.slug);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.writeFileSync(path.join(targetDir, 'index.html'), pageHtml, 'utf8');
  fs.writeFileSync(path.join(distDir, 'yayinlar', `${art.slug}.html`), pageHtml, 'utf8');

  const rootSlugDir = path.join(distDir, art.slug);
  fs.mkdirSync(rootSlugDir, { recursive: true });
  fs.writeFileSync(path.join(rootSlugDir, 'index.html'), pageHtml, 'utf8');
}

// =========================================================================
// 2. Pre-render Homepage (/) + All 33 Core Application Routes
// =========================================================================
console.log('Generating static HTML (SSG) for homepage and core routes...');

const authorEssays = ssgArticles.filter((a) => a.author !== SITE_NAME && a.category !== 'haber');
const newsArticles = ssgArticles.filter((a) => !authorEssays.some((e) => e.slug === a.slug));

// Pre-render Homepage dist/index.html
const homeRoute = CORE_SEO_ROUTES.find((r) => r.path === '/');
const homeJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    buildOrganizationSchema(),
    {
      '@type': 'WebSite',
      '@id': `${SITE_ORIGIN}/#website`,
      url: `${SITE_ORIGIN}/`,
      name: SITE_NAME,
      description: homeRoute.description,
      inLanguage: 'tr-TR',
      publisher: { '@id': `${SITE_ORIGIN}/#organization` },
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_ORIGIN}/yayinlar?q={search_term_string}`,
        'query-input': 'required name=search_term_string'
      }
    },
    ...buildPersonSchemas(),
    {
      '@type': 'ItemList',
      '@id': `${SITE_ORIGIN}/#featured-essays`,
      name: 'Öne Çıkan Yazar Yayınları',
      itemListElement: authorEssays.slice(0, 9).map((a, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${SITE_ORIGIN}/yayinlar/${a.slug}`,
        name: a.title.tr
      }))
    },
    ...buildVideoSchemas()
  ]
};

const leadStory = ssgArticles.find((a) => a.slug === 'enron-karin-nakdin-ve-guvenin-denetimi') || authorEssays[0] || ssgArticles[0];
const homeSemanticHtml = `
  <div class="min-h-screen bg-[#000000] text-gray-100">
    <header class="max-w-7xl mx-auto px-4 pt-6 pb-4 border-b border-white/10">
      <nav aria-label="Ana Menü" class="flex flex-wrap gap-4 text-sm text-gray-300">
        <a href="/">Dijital Hezarfen</a>
        <a href="/yayinlar">Yayınlarımız</a>
        <a href="/akademi">Akademi</a>
        <a href="/uygulama">Uygulama</a>
        <a href="/buyume-yatirim">Büyüme &amp; Yatırım</a>
        <a href="/medya">Medya</a>
        <a href="/hakkimizda">Hakkımızda</a>
        <a href="/iletisim">İletişim</a>
      </nav>
    </header>
    <main class="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <section aria-label="Öne Çıkan Yazar Yayını">
        <h1>${escapeHtml(leadStory ? leadStory.title.tr : homeRoute.h1)}</h1>
        <p>${escapeHtml(leadStory ? leadStory.desc.tr : homeRoute.lead)}</p>
        ${leadStory ? `<p>Yazar: <strong>${escapeHtml(leadStory.author)}</strong> — <a href="/yayinlar/${leadStory.slug}">Dosyayı Oku</a></p>` : ''}
      </section>

      <section aria-label="Yazarlardan Öne Çıkan İncelemeler">
        <h2>Öne Çıkan Yazar Yayınları (Kaan Karakaş &amp; Haydar Karakaş)</h2>
        <ul>
          ${authorEssays.slice(0, 12).map((a) => `
            <li>
              <a href="/yayinlar/${a.slug}">${escapeHtml(a.title.tr)}</a>
              <span> (${escapeHtml(a.author)}) — ${escapeHtml(a.desc.tr)}</span>
            </li>
          `).join('')}
        </ul>
      </section>

      <section aria-label="Haberler ve Rehberler">
        <h2>Teknoloji Haberleri, Strateji Analizleri ve Uygulama Rehberleri</h2>
        <ul>
          ${newsArticles.slice(0, 18).map((a) => `
            <li>
              <a href="/yayinlar/${a.slug}">${escapeHtml(a.title.tr)}</a>
              <span> — ${escapeHtml(a.desc.tr)}</span>
            </li>
          `).join('')}
        </ul>
      </section>

      <section aria-label="YouTube Video Yayınları">
        <h2>Dijital Hezarfen YouTube Video Yayınları</h2>
        <ul>
          ${youtubeVideos.map((v) => `
            <li>
              <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noreferrer noopener">${escapeHtml(v.title.tr)}</a>
              <span> (${escapeHtml(v.author)}) — ${escapeHtml(v.summary.tr)}</span>
            </li>
          `).join('')}
        </ul>
      </section>

      <section aria-label="Biz Ne Yapıyoruz">
        <h2>Biz Ne Yapıyoruz? Akademi, Uygulama ve Büyüme &amp; Yatırım</h2>
        <div class="pillar-card">
          <h3><a href="/akademi">01. Akademi — Girişimcilik Tüneli ve Modüler Eğitimler</a></h3>
          <p>Teorik anlatımların ötesinde; kurucuların ürün, müşteri doğrulama, teknoloji ve yönetim reflekslerini gerçek vakalarla inşa ediyoruz. Programlar, pazarlama, satış, yapay zekâ ve finans modüllerinden oluşur.</p>
        </div>
        <div class="pillar-card">
          <h3><a href="/uygulama">02. Uygulama — Fikirden Çalışan Sisteme</a></h3>
          <p>Yazılım ve yapay zekâ destekli MVP üretiminden dijital pazarlama, B2B satış, CRM ve finans altyapısına kadar sahada birlikte kuruyoruz. Stratejiyi çalışan sisteme dönüştürüyoruz.</p>
        </div>
        <div class="pillar-card">
          <h3><a href="/buyume-yatirim">03. Büyüme &amp; Yatırım — Ölçekten Küresel Pazara</a></h3>
          <p>Girişimleri finansal modelleme, pitch deck kurgusu, yatırımcı görüşmeleri ve uluslararası büyüme stratejileriyle bir sonraki aşamaya hazırlıyoruz. Fikir aşamasından ölçeklenme evresine kadar eşlik ediyoruz.</p>
        </div>
      </section>

      ${buildTrustNavFooterHtml()}
    </main>
  </div>
`;

const homeHtml = injectHeadAndRoot(rawTemplateHtml, {
  title: homeRoute.title,
  description: homeRoute.description,
  canonicalUrl: `${SITE_ORIGIN}/`,
  ogType: 'website',
  ogImage: DEFAULT_OG_IMAGE,
  ogImageAlt: 'Dijital Hezarfen | Girişimcilik Akademisi, Uygulama ve Medya Ekosistemi',
  jsonLd: homeJsonLd,
  semanticBodyHtml: homeSemanticHtml
});
fs.writeFileSync(path.join(distDir, 'index.html'), homeHtml, 'utf8');

// Pre-render all non-root core routes
const flatFaqItems = faqCategories.flatMap((cat) =>
  (faqData[cat.id] || []).map((item) => ({ ...item, categoryLabel: cat.label }))
);

let coreRouteCount = 1; // already counted '/'
for (const route of CORE_SEO_ROUTES) {
  if (route.path === '/') continue;

  const routeUrl = `${SITE_ORIGIN}${route.path}`;
  const graph = [
    buildOrganizationSchema(),
    {
      '@type': 'WebPage',
      '@id': `${routeUrl}#webpage`,
      url: routeUrl,
      name: route.title,
      description: route.description,
      inLanguage: 'tr-TR',
      isPartOf: { '@id': `${SITE_ORIGIN}/#organization` }
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${routeUrl}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Ana Sayfa', item: `${SITE_ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: route.h1, item: routeUrl }
      ]
    }
  ];

  let extraSectionHtml = '';

  if (route.path === '/yayinlar') {
    graph.push({
      '@type': 'ItemList',
      name: 'Dijital Hezarfen Yayınları',
      itemListElement: ssgArticles.map((a, idx) => ({
        '@type': 'ListItem',
        position: idx + 1,
        url: `${SITE_ORIGIN}/yayinlar/${a.slug}`,
        name: a.title.tr
      }))
    });
    extraSectionHtml = `
      <section>
        <h2>Tüm Yayınlar (${ssgArticles.length})</h2>
        <ul>
          ${ssgArticles.map((a) => `
            <li>
              <a href="/yayinlar/${a.slug}">${escapeHtml(a.title.tr)}</a>
              <span> — ${escapeHtml(a.author)} | ${escapeHtml(a.date.tr)}: ${escapeHtml(a.desc.tr)}</span>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  } else if (route.path === '/medya') {
    graph.push(...buildVideoSchemas());
    extraSectionHtml = `
      <section>
        <h2>Dijital Hezarfen YouTube Videoları</h2>
        <ul>
          ${youtubeVideos.map((v) => `
            <li>
              <h3>${escapeHtml(v.title.tr)}</h3>
              <p>${escapeHtml(v.summary.tr)}</p>
              <a href="https://www.youtube.com/watch?v=${v.id}" target="_blank" rel="noreferrer noopener">YouTube’da İzle</a>
            </li>
          `).join('')}
        </ul>
      </section>
    `;
  } else if (route.path === '/sik-sorulan-sorular') {
    const topFaqs = flatFaqItems.slice(0, 35);
    graph.push({
      '@type': 'FAQPage',
      '@id': `${routeUrl}#faq`,
      mainEntity: topFaqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.a
        }
      }))
    });
    extraSectionHtml = `
      <section>
        <h2>Sık Sorulan Sorular Arşivi (${flatFaqItems.length} Soru)</h2>
        ${topFaqs.map((item) => `
          <div class="faq-item">
            <h3>${escapeHtml(item.q)}</h3>
            <p>${escapeHtml(item.a)}</p>
          </div>
        `).join('')}
      </section>
    `;
  } else if (route.path === '/hakkimizda' || route.path === '/dijital-hezarfen') {
    graph.push(...buildPersonSchemas());
    extraSectionHtml = `
      <section>
        <h2>Yazarlar ve Ekosistem Liderleri</h2>
        ${Object.values(PERSON_ENTITIES).map((p) => `
          <article>
            <h3>${escapeHtml(p.name)} — ${escapeHtml(p.jobTitle)}</h3>
            <p>${escapeHtml(p.bio)}</p>
          </article>
        `).join('')}
      </section>
    `;
  }

  const routeSemanticHtml = `
    <div class="min-h-screen bg-[#000000] text-gray-100">
      <main class="max-w-5xl mx-auto px-4 pt-28 pb-16 space-y-8">
        <nav aria-label="Ekmek kırıntısı" class="text-xs text-gray-400">
          <a href="/">Ana Sayfa</a> / <span>${escapeHtml(route.h1)}</span>
        </nav>
        <h1>${escapeHtml(route.h1)}</h1>
        <p>${escapeHtml(route.lead || route.description)}</p>
        ${extraSectionHtml}
        ${buildTrustNavFooterHtml()}
      </main>
    </div>
  `;

  const routeHtml = injectHeadAndRoot(rawTemplateHtml, {
    title: route.title,
    description: route.description,
    canonicalUrl: routeUrl,
    ogType: 'website',
    ogImage: DEFAULT_OG_IMAGE,
    ogImageAlt: route.title,
    jsonLd: { '@context': 'https://schema.org', '@graph': graph },
    semanticBodyHtml: routeSemanticHtml
  });

  const cleanRel = route.path.replace(/^\/+/, '');
  const outDir = path.join(distDir, cleanRel);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'index.html'), routeHtml, 'utf8');
  fs.writeFileSync(path.join(distDir, `${cleanRel}.html`), routeHtml, 'utf8');
  coreRouteCount++;
}

// =========================================================================
// 3. Auto-generate Unified sitemap.xml (public + dist) with www canonical
// =========================================================================
const sitemapUrls = [
  ...CORE_SEO_ROUTES.map((r) => ({
    loc: `${SITE_ORIGIN}${r.path}`,
    lastmod: TODAY_ISO,
    changefreq: r.changefreq,
    priority: r.priority
  })),
  ...ssgArticles.map((art) => ({
    loc: `${SITE_ORIGIN}/yayinlar/${art.slug}`,
    lastmod: art.modifiedAt || art.publishedAt || TODAY_ISO,
    changefreq: art.featured ? 'weekly' : 'monthly',
    priority: art.featured ? '0.9' : '0.8',
    image: toOgRasterUrl(art.image),
    imageTitle: art.title.tr
  }))
];

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${sitemapUrls
  .map(
    (entry) => `  <url>
    <loc>${escapeHtml(entry.loc)}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${
      entry.image
        ? `
    <image:image>
      <image:loc>${escapeHtml(entry.image)}</image:loc>
      <image:title>${escapeHtml(entry.imageTitle)}</image:title>
    </image:image>`
        : ''
    }
  </url>`
  )
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemapXml, 'utf8');

// =========================================================================
// 4. Auto-generate GEO Standard llms.txt & llms-full.txt (public + dist)
// =========================================================================
const llmsTxt = `# Dijital Hezarfen

> Dijital Hezarfen; girişimcileri yetiştiren Akademi (Girişimcilik Tüneli ve modüler eğitimler), fikirleri çalışan ürünlere dönüştüren Uygulama (yazılım, AI MVP, growth, satış, CRM, finans) ve Büyüme & Yatırım süreçlerini tek çatı altında birleştiren, aynı zamanda Kaan Karakaş ve Haydar Karakaş imzalı derinlemesine teknoloji ve finans yayınları üreten bir girişimcilik ekosistemidir.

Öne çıkan yayınlar, YouTube video analizleri ve program detayları \`https://www.dijitalhezarfen.com\` üzerinde sunulur. Türkçe ve İngilizce desteklidir; birincil yayın dili Türkçedir.

## Ekosistem ve Programlar

- [Ana Sayfa](${SITE_ORIGIN}/): Öne çıkan yazar dosyaları, teknoloji gündemi akışı, YouTube video analizleri ve ekosistem sütunları.
- [Akademi](${SITE_ORIGIN}/akademi): Girişimciler ve yöneticiler için uygulamalı eğitim ve refleks geliştirme merkezi.
- [Girişimcilik Tüneli](${SITE_ORIGIN}/akademi/girisimcilik-tuneli): 3-5 aylık yoğun kurucu yetiştirme, fikir doğrulama ve MVP programı.
- [Uygulama Hizmetleri](${SITE_ORIGIN}/uygulama): Yazılım, AI MVP, otomasyon, dijital pazarlama, B2B satış/CRM ve finans altyapı inşası.
- [Büyüme & Yatırım](${SITE_ORIGIN}/buyume-yatirim): Finansal modelleme, pitch deck kurgusu, yatırıma hazırlık ve küresel büyüme.
- [Girişimler İçin](${SITE_ORIGIN}/girisimler): Fikir aşamasından Pre-Seed, Seed, Series A ve Scale-up evrelerine göre destek modeli.
- [Dijital Hezarfen Nedir?](${SITE_ORIGIN}/dijital-hezarfen): Vizyon, çalışma modeli ve farklılaşan yaklaşımımız.
- [Hakkımızda](${SITE_ORIGIN}/hakkimizda): Kurucu ekibimiz, misyonumuz ve vizyonumuz.
- [Sık Sorulan Sorular](${SITE_ORIGIN}/sik-sorulan-sorular): Programlar, kabul kriterleri ve çalışma modeli hakkında kapsamlı SSS.

## Öne Çıkan Yazar Yayınları (Kaan Karakaş & Haydar Karakaş)

${authorEssays
  .map((a) => `- [${a.title.tr}](${SITE_ORIGIN}/yayinlar/${a.slug}): ${a.author} (${a.readTime.tr}) — ${a.desc.tr}`)
  .join('\n')}

## Medya & Video Yayınları

- [Medya Merkezi](${SITE_ORIGIN}/medya): Tüm YouTube analizleri ve yayın formatları.
${youtubeVideos
  .map((v) => `- [${v.title.tr}](https://www.youtube.com/watch?v=${v.id}): ${v.author} — ${v.summary.tr}`)
  .join('\n')}

## Optional

- [Tüm Yayınlar Arşivi](${SITE_ORIGIN}/yayinlar): Sitedeki ${ssgArticles.length}+ analiz, rehber ve haber dosyasının tam dizini.
- [Açık Kaynak Araç Kütüphanesi](${SITE_ORIGIN}/acik-kaynak-kutuphanesi): Girişimciler için seçili açık kaynak yazılım ve yapay zekâ araçları.
- [İletişim](${SITE_ORIGIN}/iletisim): Doğrudan başvuru, iş birliği ve iletişim kanalları.
- [Tam İçerik Dizini (llms-full.txt)](${SITE_ORIGIN}/llms-full.txt): Tüm sayfaların ve makalelerin genişletilmiş özet indeks dosyası.
`;

const llmsFullTxt = `# Dijital Hezarfen — Genişletilmiş İçerik ve Bilgi İndeksi (llms-full.txt)

> Kaynak: ${SITE_ORIGIN}/
> Güncelleme Tarihi: ${TODAY_ISO}
> Yazarlar: Kaan Karakaş (Kurucu & Teknoloji Girişimcisi), Haydar Karakaş (Finansal & Mali Denetçi), Dijital Hezarfen Editör Ekibi

## 1. Kurumsal Kimlik ve Çekirdek Sayfalar

${CORE_SEO_ROUTES.map((r) => `### ${r.h1}\n- URL: ${SITE_ORIGIN}${r.path}\n- Özet: ${r.description}`).join('\n\n')}

## 2. Yayınlar Kataloğu (${ssgArticles.length} Tam Makale)

${ssgArticles
  .map(
    (a) => `### ${a.title.tr}
- URL: ${SITE_ORIGIN}/yayinlar/${a.slug}
- Yazar: ${a.author}
- Yayın Tarihi: ${a.publishedAt}
- Okuma Süresi: ${a.readTime.tr}
- Özet: ${a.desc.tr}
- Anahtar Kelimeler: ${(a.keywords || []).join(', ')}`
  )
  .join('\n\n')}

## 3. Sık Sorulan Sorular (Seçili Özet)

${flatFaqItems
  .slice(0, 25)
  .map((f) => `### ${f.q}\n${f.a}`)
  .join('\n\n')}
`;

fs.writeFileSync(path.join(publicDir, 'llms.txt'), llmsTxt, 'utf8');
fs.writeFileSync(path.join(distDir, 'llms.txt'), llmsTxt, 'utf8');
fs.writeFileSync(path.join(publicDir, 'llms-full.txt'), llmsFullTxt, 'utf8');
fs.writeFileSync(path.join(distDir, 'llms-full.txt'), llmsFullTxt, 'utf8');

console.log(
  `Successfully pre-rendered ${ssgArticles.length} articles, ${coreRouteCount} core routes (including /), ${sitemapUrls.length} sitemap URLs, and llms.txt + llms-full.txt!`
);
