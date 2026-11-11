import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function WhatWeDoSection({ lang = 'tr', onNavigate }) {
  const isTr = lang === 'tr';

  const pillars = [
    {
      index: '01',
      title: isTr ? 'Akademi' : 'Academy',
      summary: isTr
        ? 'Girişimcilik Tüneli ve modüler eğitim programlarıyla kurucuların ürün, pazar ve yönetim reflekslerini sahada güçlendiriyoruz.'
        : 'Through the Entrepreneur Tunnel and modular training tracks, we build founder judgment across product, market, and operations.',
      scope: isTr ? 'Girişimcilik Tüneli · Modüler Eğitimler' : 'Entrepreneur Tunnel · Modular Courses',
      cta: isTr ? 'Akademi Sayfasına Git' : 'Explore Academy',
      path: '/akademi'
    },
    {
      index: '02',
      title: isTr ? 'Uygulama' : 'Execution',
      summary: isTr
        ? 'Yazılım ve yapay zekâ destekli MVP üretiminden dijital pazarlama, B2B satış, CRM ve finans kurulumuna kadar çalışan sistemler inşa ediyoruz.'
        : 'From software and AI-assisted MVPs to digital marketing, B2B sales, CRM, and financial setup, we build working operational systems.',
      scope: isTr ? 'Yazılım & AI MVP · Pazarlama · Satış & Finans' : 'Software & AI MVP · Growth · Sales & Finance',
      cta: isTr ? 'Uygulama Alanlarını Gör' : 'Explore Execution',
      path: '/uygulama'
    },
    {
      index: '03',
      title: isTr ? 'Büyüme & Yatırım' : 'Growth & Venture',
      summary: isTr
        ? 'Yatırıma hazırlık, finansal modelleme, pitch deck kurgusu ve uluslararası pazarlara açılım süreçlerinde girişimlerin yanında yer alıyoruz.'
        : 'We support startups with fundraising readiness, financial modeling, pitch architecture, and international market expansion.',
      scope: isTr ? 'Yatırıma Hazırlık · Küresel Ölçeklenme' : 'Fundraising Prep · Global Expansion',
      cta: isTr ? 'Büyüme & Yatırımı İncele' : 'Explore Growth & Venture',
      path: '/buyume-yatirim'
    }
  ];

  return (
    <section
      id="biz-ne-yapiyoruz"
      aria-labelledby="what-we-do-heading"
      className="bg-[#0B0E14] py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10 space-y-2">
          <h2
            id="what-we-do-heading"
            className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-semibold text-[#F4F4F0] tracking-tight"
          >
            {isTr ? 'Biz ne yapıyoruz?' : 'What do we do?'}
          </h2>
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            {isTr
              ? 'Yayın ve medya çalışmalarımızın arkasında, fikirleri çalışan ürünlere ve ölçeklenen şirketlere dönüştüren üç ana çalışma alanı bulunur.'
              : 'Behind our editorial and media output stand three core practice areas that turn ideas into working products and scalable companies.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 border-y border-white/12 divide-y lg:divide-y-0 lg:divide-x divide-white/12">
          {pillars.map((pillar) => (
            <a
              key={pillar.index}
              href={`#${pillar.path}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.(pillar.path);
              }}
              className="group p-6 sm:p-8 flex flex-col justify-between bg-[#0B0E14] hover:bg-[#10141D] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-meta text-xs font-semibold text-cyan-400">
                    {pillar.index}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#F4F4F0] group-hover:text-cyan-400 transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {pillar.summary}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/8 flex items-center justify-between gap-2">
                <span className="font-mono-meta text-[11px] text-gray-500">
                  {pillar.scope}
                </span>
                <span className="text-xs font-semibold text-cyan-400 group-hover:text-white transition-colors whitespace-nowrap">
                  {pillar.cta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
