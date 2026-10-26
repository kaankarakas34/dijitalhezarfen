import React from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Scale,
  Briefcase,
  Layers,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { softwareCategories, skillCategories, openSourceTools } from '../data/openSourceTools';

const GithubIcon = ({ className = 'w-4 h-4' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

export default function OpenSourceBanner({ lang = 'tr', onNavigate }) {
  const isTr = lang === 'tr';

  // Pick 6 diverse flagship tools to preview on the home page
  const featuredTools = [
    openSourceTools.find((t) => t.name === 'Medusa'),
    openSourceTools.find((t) => t.name === 'Twenty'),
    openSourceTools.find((t) => t.name === 'Chatwoot'),
    openSourceTools.find((t) => t.name === 'Browser Use'),
    openSourceTools.find((t) => t.name === 'LangGraph'),
    openSourceTools.find((t) => t.name === 'Fonoster')
  ].filter(Boolean);

  const handleOpenCategory = (section, categoryId) => {
    if (section) sessionStorage.setItem('dh_os_section', section);
    if (categoryId) sessionStorage.setItem('dh_os_category', categoryId);
    onNavigate?.('/acik-kaynak-kutuphanesi');
  };

  return (
    <section id="acik-kaynak-kutuphanesi" className="py-24 relative overflow-hidden bg-[#060913] border-y border-white/10">
      {/* Ambient background grid & glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,242,254,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,242,254,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_50%,#000_60%,transparent_100%)] pointer-events-none"></div>
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-violet-600/10 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Hero Card */}
        <div className="rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-[#0C1428] via-[#090E1C] to-[#110C24] p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Pitch & Value Prop */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyber-cyan text-xs font-extrabold uppercase tracking-wider">
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>{isTr ? 'Açık Kaynak Girişimcilik Kütüphanesi' : 'Open Source Startup Library'}</span>
                </span>
                <span className="text-xs font-bold text-violet-300 bg-violet-500/15 border border-violet-500/30 px-3 py-1 rounded-full">
                  {isTr ? '171 Yazılım + 28 AI Agent Skill' : '171 Software + 28 AI Agent Skills'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-sans leading-[1.15]">
                {isTr ? (
                  <>
                    Amerika’yı yeniden keşfetme:{' '}
                    <span className="text-gradient-cyan">
                      Startup ve Vibe Coding için 199 Araç
                    </span>
                  </>
                ) : (
                  <>
                    Don’t reinvent the wheel:{' '}
                    <span className="text-gradient-cyan">
                      199 Open Source Tools for Startups & Vibe Coding
                    </span>
                  </>
                )}
              </h2>

              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                {isTr
                  ? 'Sıfırdan geliştirmek için günlerini harcayacağın CRM, ERP, e-ticaret, abonelik, chatbot, sesli AI, scraping ve agent iş akışları zaten GitHub’da var. Her aracın ne yaptığını, nerede kullanıldığını, hangi ticari ürüne veya ajans hizmetine dönüşebileceğini ve lisans sınırlarını tek katalogda derledik.'
                  : 'CRM, ERP, e-commerce, billing, chatbots, voice AI, scraping, and agent workflows you would spend months building from scratch already exist on GitHub. Explore 199 commercializable repositories with business models and license evaluations.'}
              </p>

              {/* Key Pillars Mini Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5">
                  <div className="flex items-center gap-2 text-cyber-cyan text-xs font-extrabold mb-1">
                    <Briefcase className="w-4 h-4" />
                    <span>Bundan Ne İş Çıkar?</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-snug">
                    Her repo için hazır SaaS, dikey ürün veya kurulum/danışmanlık iş modeli önerisi.
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-extrabold mb-1">
                    <Scale className="w-4 h-4" />
                    <span>Lisans & Ticari Analiz</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-snug">
                    MIT, Apache-2.0, BSD, AGPL, GPL ve özel lisansların SaaS’a etkileri.
                  </p>
                </div>

                <div className="rounded-xl bg-white/[0.03] border border-white/10 p-3.5">
                  <div className="flex items-center gap-2 text-violet-400 text-xs font-extrabold mb-1">
                    <Sparkles className="w-4 h-4" />
                    <span>Vibe Coding & Skills</span>
                  </div>
                  <p className="text-[11px] text-gray-400 leading-snug">
                    Token israfını önleyen olgun altyapılar ve 28 uzman AI agent skill paketi.
                  </p>
                </div>
              </div>

              {/* Primary CTA Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate?.('/acik-kaynak-kutuphanesi')}
                  className="px-7 py-4 rounded-xl font-extrabold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
                >
                  <span>199 Aracın Tamamını ve Açıklamalarını İncele</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => handleOpenCategory('skill', 'all')}
                  className="px-5 py-4 rounded-xl font-bold text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-white border border-white/15 transition-all flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span>28 AI Agent Skill’ini Gör</span>
                </button>
              </div>
            </div>

            {/* Right Column: Category Quick-Jump Matrix */}
            <div className="lg:col-span-5 rounded-2xl bg-[#070B14]/90 border border-white/10 p-5 sm:p-6 space-y-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div>
                  <h3 className="text-sm font-extrabold text-white uppercase tracking-wider flex items-center gap-2">
                    <Layers className="w-4 h-4 text-cyber-cyan" />
                    <span>Katalog Kategorileri (17 Başlık)</span>
                  </h3>
                  <p className="text-[11px] text-gray-400 mt-0.5">
                    İlgilendiğin alana tıklayarak doğrudan o kategorideki araçlara git
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-cyber-cyan bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/20">
                  199 Repo
                </span>
              </div>

              {/* Software Categories */}
              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-cyber-cyan mb-2">
                  Bölüm 1 — Açık Kaynak Yazılımlar (171)
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {softwareCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleOpenCategory('software', cat.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-cyan-500/15 border border-white/10 hover:border-cyan-500/35 text-xs text-gray-200 hover:text-cyber-cyan transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-[10px] text-gray-500 font-mono">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Skill Categories */}
              <div className="pt-2 border-t border-white/5">
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-violet-400 mb-2">
                  Bölüm 2 — AI Agent Skills (28)
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skillCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => handleOpenCategory('skill', cat.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-violet-500/[0.05] hover:bg-violet-500/20 border border-violet-500/20 hover:border-violet-500/40 text-xs text-gray-200 hover:text-violet-300 transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <span className="font-medium">{cat.name}</span>
                      <span className="text-[10px] text-violet-300/70 font-mono">({cat.count})</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Featured Tools Preview Strip */}
          <div className="mt-10 pt-8 border-t border-white/10">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-5">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-gray-300">
                <Terminal className="w-4 h-4 text-cyber-cyan" />
                <span>Katalogdan Örnek Ticarileştirilebilir Yazılımlar</span>
              </div>
              <button
                onClick={() => onNavigate?.('/acik-kaynak-kutuphanesi')}
                className="text-xs font-bold text-cyber-cyan hover:underline inline-flex items-center gap-1 cursor-pointer"
              >
                <span>Tüm 199 Aracı Açıklamalarıyla Gör</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {featuredTools.map((tool) => (
                <div
                  key={tool.id}
                  onClick={() => onNavigate?.('/acik-kaynak-kutuphanesi')}
                  className="group rounded-2xl bg-black/40 border border-white/10 hover:border-cyan-500/35 p-4 transition-all cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-2 py-0.5 rounded border border-cyan-500/20">
                        {tool.category}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-300 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {tool.license}
                      </span>
                    </div>
                    <h4 className="text-base font-extrabold text-white group-hover:text-cyber-cyan transition-colors flex items-center justify-between">
                      <span>{tool.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100" />
                    </h4>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-2 font-light">
                      {tool.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2.5 border-t border-white/5 text-[11px] text-emerald-200/90">
                    <strong className="text-emerald-400">Ne iş çıkar?</strong> {tool.businessIdea}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
