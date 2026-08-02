import React from 'react';
import PageHero from '../components/UI/PageHero';
import Accordion from '../components/UI/Accordion';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

export default function Fikir({ onOpenApplyModal, onNavigate }) {
  const questions = [
    'Problem kim tarafından, ne sıklıkta ve ne kadar güçlü yaşanıyor?',
    'Müşteri bugün bu problemi nasıl çözüyor ve neden yeni bir çözüm kullansın?',
    'Müşteri çözüm için ödeme yapar mı; karar verici ve kullanıcı aynı kişi mi?',
    'Kurucunun bu problem alanında hangi avantajı, deneyimi veya erişimi var?',
    'Fikir teknoloji, operasyon, regülasyon ve finans açısından uygulanabilir mi?'
  ];

  const supports = [
    'Problem keşfi, müşteri segmentasyonu ve görüşme tasarımı.',
    'Pazar, rekabet, alternatif çözüm ve konumlandırma analizi.',
    'Değer önerisi, iş modeli, fiyatlandırma ve ilk gelir hipotezi.',
    'Landing page, talep toplama, ön satış ve pilot deneyi.',
    'Yapay zekâ destekli prototip ve çalışan MVP yol haritası.'
  ];

  const faqItems = [
    {
      title: 'Fikrim çalınır mı?',
      content: 'Görüşmelerde gereksiz teknik ayrıntı paylaşmadan problem ve müşteri davranışı doğrulanabilir. Gizlilik gerektiren projelerde uygun belge ve erişim süreçleri ayrıca ele alınır.'
    },
    {
      title: 'Şirket kurmadan başvurabilir miyim?',
      content: 'Evet. Fikir aşamasında şirket kurmuş olmanız gerekmez.'
    },
    {
      title: 'Fikrim yoksa katılabilir miyim?',
      content: 'Girişimcilik Tüneli, henüz net fikri olmayan ancak girişimcilik yetkinliği geliştirmek isteyen katılımcılara da uygundur.'
    }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Fikir Aşaması"
        title="Bir fikir, doğrulanmadan girişim değildir."
        description="Fikrinize âşık olmadan önce problemin gerçekliğini, müşterinin ödeme isteğini ve çözümün uygulanabilirliğini birlikte test edin."
        primaryCtaText="Fikrini Doğrula"
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText="Girişimcilik Tüneli’ni İncele"
        onSecondaryClick={() => onNavigate('/akademi/girisimcilik-tuneli')}
      />

      {/* Questions & Supports */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Questions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white font-sans flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-cyber-cyan" />
              Bu Aşamada Çözülmesi Gereken Sorular
            </h2>
            <div className="space-y-3.5">
              {questions.map((q, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supports */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white font-sans flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-cyber-cyan" />
              Sunulan Destekler
            </h2>
            <div className="space-y-3.5">
              {supports.map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">{s}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Beklenen Çıktı */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">Beklenen Çıktı</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Program sonunda girişimci; hedef müşterisini, çözülen problemi, farklılaşmasını, gelir modelini, MVP kapsamını ve ilk 90 günlük doğrulama planını netleştirmiş olmalıdır.
          </p>
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
