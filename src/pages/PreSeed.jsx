import React from 'react';
import PageHero from '../components/UI/PageHero';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

export default function PreSeed({ onOpenApplyModal, onNavigate }) {
  const priorities = [
    'MVP’nin neyi yapacağı kadar neyi yapmayacağının belirlenmesi.',
    'Yapay zekâ destekli geliştirme ile hızlı çalışan ürün oluşturulması.',
    'İlk kullanıcı, pilot müşteri ve kullanım geri bildirimlerinin toplanması.',
    'Kurucu rolleri, çalışma düzeni ve temel şirketleşme kararları.',
    'İlk marka, web sitesi, demo, satış mesajı ve CRM altyapısı.',
    'Nakit ihtiyacı, runway, birim ekonomi varsayımları ve yatırım planı.'
  ];

  const packages = [
    { title: 'MVP Sprint', desc: 'Ürün kapsamı, kullanıcı akışı, AI destekli geliştirme, test ve demo.' },
    { title: 'İlk Müşteri', desc: 'ICP (İdeal Müşteri Profili), teklif, landing page, outbound, pilot ve CRM kurulumu.' },
    { title: 'Kurucu Altyapısı', desc: 'Rol dağılımları, hedefler, finansal plan, temel hukuk ve yönetim ritmi.' },
    { title: 'Yatırım Hazırlığı', desc: 'Pitch deck, finansal model, data room planı ve mock pitch sunumları.' }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Pre-seed Aşaması"
        title="Fikri çalışan bir girişime dönüştürün."
        description="Pre-seed aşamasında amaç mükemmel ürün yapmak değil; en kritik varsayımları mümkün olan en hızlı ve anlamlı biçimde test etmektir."
        primaryCtaText="Pre-seed Programına Başvur"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="MVP Hizmetlerini İncele"
        onSecondaryClick={() => onNavigate('/uygulama/yazilim-mvp')}
      />

      {/* Priorities */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Önceliklerimiz</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {priorities.map((p, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Packages Table */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Pre-seed Çalışma Paketleri</h2>
          <div className="rounded-2xl glass border border-white/5 overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 text-gray-300 font-extrabold border-b border-white/5">
                <tr>
                  <th className="px-6 py-4">Paket</th>
                  <th className="px-6 py-4">İçerik</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-400">
                {packages.map((pkg, idx) => (
                  <tr key={idx} className="hover:bg-white/1 transition-colors">
                    <td className="px-6 py-4 font-bold text-white shrink-0">{pkg.title}</td>
                    <td className="px-6 py-4 leading-relaxed">{pkg.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              Pre-seed İhtiyacını Anlat
            </button>
            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              Çalışan MVP Talep Et
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
