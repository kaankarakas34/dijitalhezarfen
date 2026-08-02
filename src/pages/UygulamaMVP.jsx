import React from 'react';
import PageHero from '../components/UI/PageHero';
import Accordion from '../components/UI/Accordion';
import { Layers, CheckCircle2 } from 'lucide-react';

export default function UygulamaMVP({ onOpenApplyModal }) {
  const steps = [
    { num: '12', title: 'Problem & Varsayım', text: 'Problem, kullanıcı ve test edilecek varsayımlar netleştirilir.' },
    { num: '13', title: 'Ürün Kapsamı & Akış', text: 'Ürün kapsamı, kullanıcı akışı ve öncelikli özellikler belirlenir.' },
    { num: '14', title: 'Teknik Mimari & Güvenlik', text: 'Teknik mimari, veri, entegrasyon ve güvenlik ihtiyaçları planlanır.' },
    { num: '15', title: 'AI Destekli Geliştirme', text: 'Yapay zekâ destekli geliştirme ile çalışan ilk sürüm oluşturulur.' },
    { num: '16', title: 'Kullanıcı Testi & İyileştirme', text: 'Gerçek kullanıcılarla test edilir; geri bildirimlere göre iyileştirilir.' },
    { num: '17', title: 'Analitik & Yol Haritası', text: 'Ürün analitiği, bakım ve sonraki geliştirme yol haritası kurulur.' }
  ];

  const products = [
    'SaaS ve abonelik ürünleri.',
    'Web ve mobil uygulamalar.',
    'Marketplace ve platformlar.',
    'E-ticaret ve müşteri portalları.',
    'CRM, panel ve iş yönetim uygulamaları.',
    'AI agent, chatbot ve voice agent çözümleri.'
  ];

  const faqItems = [
    {
      title: 'MVP ne kadar sürede geliştirilebilir?',
      content: 'Süre kapsam, entegrasyon ve güvenlik ihtiyacına göre değişir. İlk görüşme sonrasında aşamalı proje planı oluşturulur.'
    },
    {
      title: 'MVP sonrasında geliştirmeye devam edebilir miyiz?',
      content: 'Evet. İlk sürüm, kullanıcı verilerine göre büyütülebilecek bir ürün yol haritasıyla teslim edilir.'
    },
    {
      title: 'Sadece fikirle başvurabilir miyim?',
      content: 'Evet. Ancak geliştirmeden önce problem ve ürün kapsamı çalışması yapılması gerekebilir.'
    }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="MVP Geliştirme"
        title="Fikrinizi sunuma değil, çalışan ürüne dönüştürün."
        description="Yapay zekâ destekli geliştirme yaklaşımıyla en kritik kullanıcı problemini çözen, test edilebilir ve geliştirilebilir MVP'ler üretiriz."
        primaryCtaText="MVP Görüşmesi Planla"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Teknik İhtiyacını Anlat"
        onSecondaryClick={() => onOpenApplyModal('girisim')}
      />

      {/* MVP Süreci */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">MVP Geliştirme Süreci</h2>
          <div className="space-y-6">
            {steps.map((s, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-xl glass border border-white/5">
                <div className="w-8 h-8 rounded-full bg-cyan-500/15 text-cyber-cyan flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  {s.num}
                </div>
                <div>
                  <h3 className="font-bold text-white text-sm sm:text-base">{s.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Geliştirilebilecek Ürünler */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Geliştirilebilecek Ürünler</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {products.map((p, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3 hover:border-cyan-500/20 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed font-semibold">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Sık Sorulan Sorular</h2>
          <Accordion items={faqItems} />
        </div>
      </section>

    </div>
  );
}
