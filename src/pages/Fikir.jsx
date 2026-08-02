import React from 'react';
import PageHero from '../components/UI/PageHero';
import Accordion from '../components/UI/Accordion';
import { HelpCircle, CheckCircle2 } from 'lucide-react';

export default function Fikir({ onOpenApplyModal, onNavigate, lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Fikir Aşaması' : 'Idea Stage',
    title: isTr ? 'Bir fikir, doğrulanmadan girişim değildir.' : 'An idea is not a venture until it is validated.',
    desc: isTr 
      ? 'Fikrinize âşık olmadan önce problemin gerçekliğini, müşterinin ödeme isteğini ve çözümün uygulanabilirliğini birlikte test edin.'
      : 'Before falling in love with your idea, let\'s test the problem validity, customer willingness to pay, and solution feasibility.',
    btnPrimary: isTr ? 'Fikrini Doğrula' : 'Validate Your Idea',
    btnSecondary: isTr ? 'Girişimcilik Tüneli’ni İncele' : 'Explore Entrepreneur Tunnel',
    questionsTitle: isTr ? 'Bu Aşamada Çözülmesi Gereken Sorular' : 'Questions to Solve in this Stage',
    supportsTitle: isTr ? 'Sunulan Destekler' : 'Support Provided',
    outcomeTitle: isTr ? 'Beklenen Çıktı' : 'Expected Outcome',
    outcomeDesc: isTr 
      ? 'Program sonunda girişimci; hedef müşterisini, çözülen problemi, farklılaşmasını, gelir modelini, MVP kapsamını ve ilk 90 günlük doğrulama planını netleştirmiş olmalıdır.'
      : 'By the end of this phase, the founder must have clarified target customers, validated problems, value proposition, revenue model, MVP scope, and the first 90-day execution roadmap.',
    faqTitle: isTr ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions'
  };

  const questions = isTr 
    ? [
        'Problem kim tarafından, ne sıklıkta ve ne kadar güçlü yaşanıyor?',
        'Müşteri bugün bu problemi nasıl çözüyor ve neden yeni bir çözüm kullansın?',
        'Müşteri çözüm için ödeme yapar mı; karar verici ve kullanıcı aynı kişi mi?',
        'Kurucunun bu problem alanında hangi avantajı, deneyimi veya erişimi var?',
        'Fikir teknoloji, operasyon, regülasyon ve finans açısından uygulanabilir mi?'
      ]
    : [
        'Who experiences this problem, how frequently, and how painfully?',
        'How do customers solve this problem today and why would they switch?',
        'Will the customer pay for the solution; is the buyer also the user?',
        'What unfair advantage, experience, or access does the founder have in this domain?',
        'Is the idea feasible from a technological, regulatory, and financial standpoint?'
      ];

  const supports = isTr
    ? [
        'Problem keşfi, müşteri segmentasyonu ve görüşme tasarımı.',
        'Pazar, rekabet, alternatif çözüm ve konumlandırma analizi.',
        'Değer önerisi, iş modeli, fiyatlandırma ve ilk gelir hipotezi.',
        'Landing page, talep toplama, ön satış ve pilot deneyi.',
        'Yapay zekâ destekli prototip ve çalışan MVP yol haritası.'
      ]
    : [
        'Problem discovery, customer segment profiling, and interview scripts.',
        'Market research, competitive analyses, and strategic positioning.',
        'Value proposition mapping, business models, pricing, and initial monetizing.',
        'Landing page templates, waitlist setups, pre-sales, and pilot cohort runs.',
        'AI-assisted prototyping and core MVP roadmap formulation.'
      ];

  const faqItems = isTr
    ? [
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
      ]
    : [
        {
          title: 'Will my idea get stolen?',
          content: 'You can validate customer behavior and problem scope without disclosing core technical details. For highly confidential setups, we can deploy NDAs and private access controls.'
        },
        {
          title: 'Can I apply without an incorporated company?',
          content: 'Yes. You do not need to register a company during the idea validation phase.'
        },
        {
          title: 'Can I join if I don\'t have a concrete idea yet?',
          content: 'Yes. The Entrepreneur Tunnel is fully suited for individuals looking to build core founder capabilities before finalizing an idea.'
        }
      ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge={t.badge}
        title={t.title}
        description={t.desc}
        primaryCtaText={t.btnPrimary}
        onPrimaryClick={() => onOpenApplyModal('girisim')}
        secondaryCtaText={t.btnSecondary}
        onSecondaryClick={() => onNavigate('/akademi/girisimcilik-tuneli')}
      />

      {/* Questions & Supports */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Questions */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white font-sans flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-cyber-cyan" />
              {t.questionsTitle}
            </h2>
            <div className="space-y-3.5">
              {questions.map((q, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Supports */}
          <div className="space-y-6">
            <h2 className="text-2xl font-extrabold text-white font-sans flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-cyber-cyan" />
              {t.supportsTitle}
            </h2>
            <div className="space-y-3.5">
              {supports.map((s, idx) => (
                <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 shrink-0 mt-2"></span>
                  <span className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light">{s}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Beklenen Çıktı */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">{t.outcomeTitle}</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            {t.outcomeDesc}
          </p>
        </div>
      </section>

      {/* SSS */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">{t.faqTitle}</h2>
          <Accordion items={faqItems} />
        </div>
      </section>

    </div>
  );
}
