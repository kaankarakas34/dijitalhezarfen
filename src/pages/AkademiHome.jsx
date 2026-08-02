import React from 'react';
import PageHero from '../components/UI/PageHero';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function AkademiHome({ onOpenApplyModal, onNavigate }) {
  
  const categories = [
    { cat: 'Girişimcilik', sample: 'Fikirden girişime, iş modelleri, ürün-pazar uyumu, startup yönetimi' },
    { cat: 'Pazarlama & Satış', sample: 'Dijital pazarlama, growth hacking, B2B satış, CRM, müşteri başarısı' },
    { cat: 'Teknoloji & AI', sample: 'Yazılım geliştirme, AI destekli MVP, süreç otomasyonu, veri analitiği, siber güvenlik' },
    { cat: 'Finans & Hukuk', sample: 'Finansal modelleme, muhasebe koordinasyonu, yatırım, ticari sözleşmeler, veri koruma' },
    { cat: 'Yönetim & İnsan', sample: 'Liderlik, İK, organizasyon tasarımı, delegasyon, topluluk önünde konuşma' },
    { cat: 'Yaratıcı Üretim', sample: 'Sosyal medya, görsel tasarım, içerik üretimi, video ve reklam prodüksiyonu' }
  ];

  const formats = [
    '3–5 aylık Girişimcilik Tüneli programı.',
    '4–12 haftalık dikey uzmanlık programları.',
    'Tek günlük masterclass ve yoğun workshop’lar.',
    'Kurumlara özel kapalı sınıflar.',
    'Online, yüz yüze ve hibrit kohort modelleri.',
    'YouTube, podcast, rapor ve açık ders içerikleri.'
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Dijital Hezarfen Akademi"
        title="Geleceğin girişimcilerini ve yöneticilerini yetiştiriyoruz."
        description="Akademi; girişimcilik bilgisini teoriyle sınırlamaz. Öğrenilen her konuyu karar, proje, uygulama ve iş sonucuyla ilişkilendirir."
        primaryCtaText="Eğitimleri İncele"
        onPrimaryClick={() => onNavigate('/akademi/egitimler')}
        secondaryCtaText="Girişimcilik Tüneli’ne Başvur"
        onSecondaryClick={() => onOpenApplyModal('tunel')}
      />

      {/* Akademinin Yaklaşımı */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Akademinin Yaklaşımı</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Bilgiye ulaşmanın kolaylaştığı bir dönemde asıl fark, bilgiyi birleştirme ve doğru zamanda uygulama becerisidir. Akademi; farklı disiplinleri birbirinden kopuk dersler olarak değil, bir şirketin çalışan sistemleri olarak öğretir.
          </p>
        </div>
      </section>

      {/* Eğitim Kategorileri */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Eğitim Kategorileri</h2>
          <div className="rounded-2xl glass border border-white/5 overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 text-gray-300 border-b border-white/5">
                <tr>
                  <th className="px-6 py-4">Kategori</th>
                  <th className="px-6 py-4">Örnek Eğitimler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-400">
                {categories.map((c, idx) => (
                  <tr key={idx} className="hover:bg-white/1 transition-colors">
                    <td className="px-6 py-4 font-bold text-white shrink-0">{c.cat}</td>
                    <td className="px-6 py-4 leading-relaxed">{c.sample}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Eğitim Formatları */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Eğitim Formatları</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {formats.map((f, idx) => (
              <div key={idx} className="p-5 rounded-xl glass border border-white/5 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-cyber-cyan shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <button
              onClick={() => onNavigate('/akademi/egitimler')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              Eğitim Takvimini Gör
            </button>
            <button
              onClick={() => onOpenApplyModal('kurumsal')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              Kurumsal Eğitim Talep Et
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
