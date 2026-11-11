import React from 'react';
import { ArrowUpRight, BookOpen, Layers, TrendingUp } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';

export default function WhatWeDoSection({ lang = 'tr', onNavigate }) {
  const isTr = lang === 'tr';
  const reduceMotion = useReducedMotion();

  const pillars = [
    {
      index: '01',
      title: isTr ? 'Akademi' : 'Academy',
      tagline: isTr ? 'Öğrenmeden Üretime' : 'From Learning to Building',
      summary: isTr
        ? 'Teorik anlatımların ötesinde; kurucuların ürün, müşteri doğrulama, teknoloji ve yönetim reflekslerini gerçek vakalarla inşa ediyoruz.'
        : 'Beyond classroom theory, we sharpen founder reflexes across product, customer discovery, technology, and management.',
      icon: BookOpen,
      accentText: 'text-cyber-cyan',
      accentBg: 'bg-cyan-500/10 border-cyan-500/25',
      topBeam: 'from-cyan-400 via-cyan-500/50 to-transparent',
      glowTint: 'group-hover:border-cyan-400/45',
      subLinks: [
        { label: isTr ? 'Girişimcilik Tüneli' : 'Entrepreneur Tunnel', path: '/akademi/girisimcilik-tuneli' },
        { label: isTr ? 'Modüler Eğitimler' : 'Modular Training', path: '/akademi/egitimler' }
      ],
      cta: isTr ? 'Akademiyi Keşfet' : 'Explore Academy',
      path: '/akademi'
    },
    {
      index: '02',
      title: isTr ? 'Uygulama' : 'Execution',
      tagline: isTr ? 'Fikirden Çalışan Sisteme' : 'From Idea to Working System',
      summary: isTr
        ? 'Yazılım ve yapay zekâ destekli MVP üretiminden dijital pazarlama, B2B satış, CRM ve finans altyapısına kadar sahada birlikte kuruyoruz.'
        : 'We build alongside teams—from software and AI-assisted MVPs to marketing engines, B2B sales, CRM, and finance operations.',
      icon: Layers,
      accentText: 'text-blue-400',
      accentBg: 'bg-blue-500/10 border-blue-500/25',
      topBeam: 'from-blue-400 via-blue-500/50 to-transparent',
      glowTint: 'group-hover:border-blue-400/45',
      subLinks: [
        { label: isTr ? 'Yazılım & AI MVP' : 'Software & AI MVP', path: '/uygulama/yazilim-mvp' },
        { label: isTr ? 'Uygulama Hizmetleri' : 'Application Services', path: '/uygulama' }
      ],
      cta: isTr ? 'Uygulamayı İncele' : 'Explore Execution',
      path: '/uygulama'
    },
    {
      index: '03',
      title: isTr ? 'Büyüme & Yatırım' : 'Growth & Venture',
      tagline: isTr ? 'Ölçekten Küresel Pazara' : 'From Traction to Global Scale',
      summary: isTr
        ? 'Girişimleri finansal modelleme, pitch deck kurgusu, yatırımcı görüşmeleri ve uluslararası büyüme stratejileriyle bir sonraki aşamaya hazırlıyoruz.'
        : 'We prepare ventures for their next leap with financial modeling, pitch architecture, investor readiness, and global expansion.',
      icon: TrendingUp,
      accentText: 'text-violet-400',
      accentBg: 'bg-violet-500/10 border-violet-500/25',
      topBeam: 'from-violet-400 via-violet-500/50 to-transparent',
      glowTint: 'group-hover:border-violet-400/45',
      subLinks: [
        { label: isTr ? 'Yatırıma Hazırlık' : 'Fundraising Prep', path: '/buyume-yatirim/yatirima-hazirlik' },
        { label: isTr ? 'Küresel Büyüme' : 'Global Growth', path: '/buyume-yatirim/uluslararasilasma' }
      ],
      cta: isTr ? 'Büyüme & Yatırıma Git' : 'Explore Growth',
      path: '/buyume-yatirim'
    }
  ];

  return (
    <section
      id="biz-ne-yapiyoruz"
      aria-labelledby="what-we-do-heading"
      className="relative bg-[#070A12] py-24 overflow-hidden"
    >
      {/* Subtle architectural grid backdrop */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_75%_60%_at_50%_40%,#000_55%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Vision Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pb-12 border-b border-white/10 mb-12">
          <div className="lg:col-span-7 space-y-3">
            <span className="inline-block text-xs font-extrabold uppercase tracking-[0.2em] text-cyber-cyan">
              {isTr ? 'Biz Ne Yapıyoruz?' : 'What We Do'}
            </span>
            <h2
              id="what-we-do-heading"
              className="font-sans text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.1]"
            >
              {isTr ? (
                <>
                  Bilgiyi ürüne, girişimi{' '}
                  <span className="text-gradient-cyan">küresel büyümeye</span>{' '}
                  dönüştüren ekosistem.
                </>
              ) : (
                <>
                  An ecosystem turning knowledge into products and startups into{' '}
                  <span className="text-gradient-cyan">global companies</span>.
                </>
              )}
            </h2>
          </div>

          <div className="lg:col-span-5 lg:pb-1">
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed font-light">
              {isTr
                ? 'Dijital Hezarfen yalnızca yayın üreten bir medya mecrası değildir; akademi, doğrudan uygulama ve yatırım hazırlığını tek büyüme mimarisinde birleştirir.'
                : 'Dijital Hezarfen goes beyond media publishing—uniting founder academy, hands-on execution, and venture readiness in one operating architecture.'}
            </p>
          </div>
        </div>

        {/* 3 Visionary Architectural Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.index}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 'some' }}
                transition={{ duration: 0.45, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative rounded-2xl bg-[#0B101D] border border-white/10 ${pillar.glowTint} transition-all duration-300 flex flex-col justify-between overflow-hidden`}
              >
                {/* Top directional beam */}
                <div className={`h-[2px] w-full bg-gradient-to-r ${pillar.topBeam}`} />

                <div className="p-7 sm:p-8 flex-grow flex flex-col justify-between space-y-8">
                  <div className="space-y-5">
                    {/* Top Index + Icon Row */}
                    <div className="flex items-center justify-between">
                      <div className={`w-12 h-12 rounded-xl border ${pillar.accentBg} ${pillar.accentText} flex items-center justify-center transition-transform duration-300 group-hover:scale-105`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-4xl font-extrabold text-white/[0.06] group-hover:text-white/[0.12] transition-colors tracking-tighter select-none">
                        {pillar.index}
                      </span>
                    </div>

                    {/* Title & Vision Tagline */}
                    <div className="space-y-1.5">
                      <p className={`text-[11px] font-bold uppercase tracking-wider ${pillar.accentText}`}>
                        {pillar.tagline}
                      </p>
                      <h3 className="font-sans text-2xl sm:text-[1.7rem] font-extrabold text-white tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>

                    {/* Core Description */}
                    <p className="text-sm text-gray-400 leading-relaxed font-light">
                      {pillar.summary}
                    </p>
                  </div>

                  {/* Direct Sub-track Quick Links */}
                  <div className="space-y-2 pt-5 border-t border-white/8">
                    {pillar.subLinks.map((sub) => (
                      <a
                        key={sub.path}
                        href={`#${sub.path}`}
                        onClick={(e) => {
                          e.preventDefault();
                          onNavigate?.(sub.path);
                        }}
                        className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.025] hover:bg-white/[0.06] border border-white/5 hover:border-white/15 text-xs font-semibold text-gray-300 hover:text-white transition-all"
                      >
                        <span>{sub.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-500" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Primary Pillar Page Link */}
                <a
                  href={`#${pillar.path}`}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.(pillar.path);
                  }}
                  className="px-7 sm:px-8 py-4 bg-white/[0.03] hover:bg-white/[0.07] border-t border-white/10 flex items-center justify-between text-xs sm:text-sm font-bold text-white transition-colors"
                >
                  <span className={pillar.accentText}>{pillar.cta}</span>
                  <ArrowUpRight className={`w-4 h-4 ${pillar.accentText} transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5`} />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
