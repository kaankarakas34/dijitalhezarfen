import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Shield, Target, Users, Zap, CheckCircle2 } from 'lucide-react';

export default function About({ onOpenApplyModal, onNavigate }) {
  const diffData = [
    { classic: 'Genel eğitim', hezarfen: 'Girişimin aşamasına ve gerçek ihtiyacına bağlı öğrenme' },
    { classic: 'Rapor ve tavsiye', hezarfen: 'Yol haritası, uygulama, ölçüm ve tekrar' },
    { classic: 'Tek bir departmana odaklanma', hezarfen: 'Ürün, satış, pazarlama, finans ve yönetimi birlikte ele alma' },
    { classic: 'Teorik MVP anlatımı', hezarfen: 'Yapay zekâ destekli çalışan ürün geliştirme' },
    { classic: 'Kısa vadeli kampanya', hezarfen: 'Sürdürülebilir ve tekrarlanabilir büyüme sistemi' }
  ];

  const works = [
    { title: 'Girişimci Adaylarını Yetiştiriyoruz', desc: 'Girişimci adaylarını ve yöneticileri kapsamlı eğitim programlarıyla yetiştiriyoruz.' },
    { title: 'Fikir Doğrulama', desc: 'Fikirlerin problem, müşteri, pazar ve gelir modeli açısından doğrulanmasını sağlıyoruz.' },
    { title: 'Yazılım & AI MVP', desc: 'Yapay zekâ destekli çalışan MVP, web, mobil, SaaS ve otomasyon çözümleri geliştiriyoruz.' },
    { title: 'Büyüme Sistemleri', desc: 'Pazarlama, satış, CRM, growth, finans, yönetim ve operasyon sistemleri kuruyoruz.' },
    { title: 'Yatırım & Globalleşme', desc: 'Girişimleri yatırım görüşmelerine, yeni pazarlara ve uluslararası büyümeye hazırlıyoruz.' }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Dijital Hezarfen Nedir?"
        title="Bilgiyi girişime, girişimi büyümeye dönüştürüyoruz."
        description="Dijital Hezarfen; eğitim, teknoloji, uygulama ve büyüme disiplinlerini tek bir girişimcilik ekosisteminde birleştirir."
        primaryCtaText="Girişimin İçin Başvur"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Programları İncele"
        onSecondaryClick={() => onNavigate('/akademi')}
      />

      {/* Neden Dijital Hezarfen? */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Neden Dijital Hezarfen?</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Bir girişimin başarısı yalnızca iyi bir fikre bağlı değildir. Ürün, müşteri, teknoloji, satış, pazarlama, finans, hukuk, ekip ve yönetim aynı hedef etrafında çalışmadığında güçlü fikirler dahi büyüyemez. Girişimciler çoğu zaman bu alanların her biri için farklı kişi ve şirketlerle çalışmak zorunda kalır; süreç parçalanır, bilgi kaybolur ve kararların sorumluluğu belirsizleşir.
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto">
            Dijital Hezarfen bu parçaları aynı büyüme sistemi içinde birleştirir. Girişimci önce gerekli yetkinlikleri kazanır; ardından ihtiyacına göre uygulama desteği alır; ürününü, müşterisini, gelir modelini ve organizasyonunu geliştirir.
          </p>
        </div>
      </section>

      {/* Ne Yapıyoruz? */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Ne Yapıyoruz?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {works.map((w, idx) => (
              <div key={idx} className="p-6 rounded-2xl glass border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 transition-all">
                <div className="space-y-4">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 text-cyber-cyan flex items-center justify-center font-bold text-sm">
                    {idx + 1}
                  </div>
                  <h3 className="font-extrabold text-sm sm:text-base text-white">{w.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nasıl Çalışıyoruz? */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Nasıl Çalışıyoruz?</h2>
          <div className="space-y-6">
            {[
              { step: '1', title: 'Mevcut Durum Analizi', text: 'Girişimin aşaması, hedefi, kaynakları ve darboğazları analiz edilir.' },
              { step: '2', title: 'Önceliklendirme', text: 'Aynı anda her şey yerine en yüksek etkiyi yaratacak konular seçilir.' },
              { step: '3', title: 'Yol Haritası Tasarımı', text: 'Çıktılar, sorumlular, süre, bütçe ve başarı ölçütleri tanımlanır.' },
              { step: '4', title: 'Doğrudan Uygulama', text: 'Eğitim, mentorluk, uzman desteği ve doğrudan uygulama birlikte kullanılır.' },
              { step: '5', title: 'Ölçüm & Optimizasyon', text: 'Ürün, müşteri, satış, finans ve operasyon metrikleri takip edilir.' },
              { step: '6', title: 'Ölçeklenme & Büyüme', text: 'Kanıtlanan süreçler sistemleştirilir, otomasyona ve ekibe aktarılır.' }
            ].map((s, idx) => (
              <div key={idx} className="flex items-start gap-4 p-5 rounded-xl glass border border-white/5">
                <div className="w-8 h-8 rounded-full bg-cyan-500/15 text-cyber-cyan flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                  {s.step}
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

      {/* Neyi Farklı Yapıyoruz? */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Neyi Farklı Yapıyoruz?</h2>
          <div className="rounded-2xl glass border border-white/5 overflow-hidden shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 text-gray-300 font-extrabold border-b border-white/5">
                <tr>
                  <th className="px-6 py-4">Klasik Yaklaşım</th>
                  <th className="px-6 py-4 text-cyber-cyan">Dijital Hezarfen Yaklaşımı</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-400">
                {diffData.map((d, idx) => (
                  <tr key={idx} className="hover:bg-white/1 transition-colors">
                    <td className="px-6 py-4 font-medium">{d.classic}</td>
                    <td className="px-6 py-4 text-white font-semibold">{d.hezarfen}</td>
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
              Girişiminin İhtiyacını Anlat
            </button>
            <button
              onClick={() => onNavigate('/akademi')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              Programları İncele
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
