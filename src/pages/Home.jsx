import React from 'react';
import EditorialLeadSection from '../components/EditorialLeadSection';
import NewsMasonrySection from '../components/NewsMasonrySection';
import YoutubeShowcaseSection from '../components/YoutubeShowcaseSection';
import WhatWeDoSection from '../components/WhatWeDoSection';

export default function Home({ onNavigate, lang }) {
  return (
    <div className="bg-[#080A0F]">
      {/* 1. Giriş: Yazarlardan (Kaan Karakaş & Haydar Karakaş) Öne Çıkan Yayınlar */}
      <EditorialLeadSection lang={lang} onNavigate={onNavigate} />

      {/* 2. Haberler, Rehberler ve Diğer Yayınlar (Masonry) */}
      <NewsMasonrySection lang={lang} onNavigate={onNavigate} />

      {/* 3. YouTube Kanalından Videolar (Iframe) */}
      <YoutubeShowcaseSection lang={lang} onNavigate={onNavigate} />

      {/* 4. Biz Ne Yapıyoruz? (Akademi · Uygulama · Büyüme & Yatırım) */}
      <WhatWeDoSection lang={lang} onNavigate={onNavigate} />
    </div>
  );
}
