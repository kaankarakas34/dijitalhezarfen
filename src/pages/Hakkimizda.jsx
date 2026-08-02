import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Target, Users, BookOpen, MessageSquare, Zap, ShieldCheck } from 'lucide-react';

export default function Hakkimizda({ onNavigate, onOpenApplyModal, lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Hakkımızda' : 'About Us',
    title: isTr ? 'Farklı disiplinleri aynı büyüme hedefinde birleştiriyoruz.' : 'Unifying diverse disciplines under one growth target.',
    desc: isTr ? 'Girişimcilik, teknoloji, pazarlama, satış, finans, yönetim ve insan gelişimini birbirinden ayrı görmeyen bütünleşik bir ekosistemiz.' : 'We are an integrated ecosystem that unifies entrepreneurship, technology, marketing, sales, finance, management, and human development.',
    btnPrimary: isTr ? 'Bizimle Çalış' : 'Work With Us',
    btnSecondary: isTr ? 'İletişime Geç' : 'Contact Us',
    storyTitle: isTr ? 'Hikâyemiz' : 'Our Story',
    storyDesc1: isTr
      ? 'Dijital Hezarfen; bir girişimin yalnızca pazarlama, yalnızca yazılım veya yalnızca yatırım problemi olmadığı düşüncesinden doğdu. Kurucuların çoğu parçalı hizmetler, çelişen tavsiyeler ve uygulamaya dönüşmeyen raporlar arasında ilerlemeye çalışıyor. Biz bu parçaları aynı şirket mantığı içinde birleştiren bir yapı tasarladık.'
      : 'Dijital Hezarfen was founded on the insight that a startup\'s struggle is rarely just a marketing, software, or funding problem alone. Most founders are caught between fragmented services, conflicting advice, and reports that never translate into execution. We designed a structure to unite these pieces within a single, cohesive framework.',
    storyDesc2: isTr
      ? 'Hezarfen ismi; farklı alanlarda derin bilgi sahibi olmayı, disiplinler arasında sağlam bağlantılar kurmayı ve bilinmeyene doğru cesaretle ilerlemeyi temsil eder. Dijital Hezarfen ise bu hezarfen zihniyetini modern teknoloji, girişimcilik ve büyüme dünyasına taşır.'
      : 'The name Hezarfen represents mastering diverse fields of knowledge, building connections between disciplines, and advancing courageously into the unknown. Dijital Hezarfen translates this polymath mindset into the modern startup, tech, and venture growth ecosystem.',
    visionTitle: isTr ? 'Vizyonumuz' : 'Our Vision',
    visionDesc: isTr 
      ? 'Türkiye’den ve yakın coğrafyadan çıkan girişimlerin daha güçlü insan kaynağıyla kurulmasını, daha hızlı doğrulanmasını, sürdürülebilir gelir üretmesini ve uluslararası ölçekte rekabet edebilmesini sağlayan öncü yapılardan biri olmak.'
      : 'To be a pioneering ecosystem enabling startups in Turkey and its surrounding region to build with stronger talent pools, validate business models faster, generate sustainable revenues, and compete on a global scale.',
    missionTitle: isTr ? 'Misyonumuz' : 'Our Mission',
    missionDesc: isTr 
      ? 'Girişimcileri yetiştirmek; fikirleri çalışan ürünlere dönüştürmek; şirketlerin ürün, müşteri, teknoloji, finans ve yönetim sistemlerini geliştirerek sürdürülebilir büyümelerine yardımcı olmak.'
      : 'To develop capable entrepreneurs; transform ideas into working products; and support sustainable business growth by building robust product, sales, tech, finance, and management systems.',
    teamTitle: isTr ? 'Ekibimiz' : 'Our Team',
    teamSubtitle: isTr ? 'Kişileri yalnızca unvanlarıyla değil, girişimlere hangi somut değeri sunduklarıyla tanıtıyoruz.' : 'We introduce our team members by the concrete value they deliver to startups, not just their titles.',
    teamBtn: isTr ? 'Dijital Hezarfen ile Çalış' : 'Join Dijital Hezarfen Network',
    memberValueLabel: isTr ? 'Girişimlere Sunduğu Değer:' : 'Value Delivered to Startups:'
  };

  const team = [
    { 
      name: 'Kaan Karakaş', 
      role: isTr ? 'Kurucu / Büyüme Stratejisti' : 'Founder / Growth Strategist', 
      value: isTr ? 'Girişimlerin büyüme denklemini kurmalarına, RevOps altyapısını tasarlamalarına ve küresel pazarlara açılmalarına rehberlik eder.' : 'Guides startups in formulating growth equations, designing RevOps architectures, and launching international market entries.' 
    },
    { 
      name: 'Dr. Ahmet Yılmaz', 
      role: isTr ? 'Akademik Lider / Başmentör' : 'Academic Lead / Lead Advisor', 
      value: isTr ? 'Girişimcilik Tüneli müfredatını yönetir, problem keşfi ve iş modeli doğrulaması konularında kurucuları yönlendirir.' : 'Manages the Entrepreneur Tunnel curriculum, coaching founders on problem discovery and business model validation.' 
    },
    { 
      name: 'Merve Kaya', 
      role: isTr ? 'Teknoloji & Yapay Zekâ Lideri' : 'Tech & AI Lead', 
      value: isTr ? 'Yapay zekâ destekli MVP geliştirme süreçlerini, süreç otomasyonu ve entegrasyon çözümlerini hayata geçirir.' : 'Deploys AI-assisted MVP processes, process automations, and custom API integration solutions.' 
    },
    { 
      name: 'Buse Demir', 
      role: isTr ? 'Pazarlama & Medya Direktörü' : 'Marketing & Media Director', 
      value: isTr ? 'Startup marka kimliği, reklam yönetimi, YouTube/podcast yapım süreçleri ve sosyal medya büyüme stratejilerini kurgular.' : 'Designs brand identities, paid acquisition campaigns, YouTube/podcast production flows, and organic social media growth strategies.' 
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
        onPrimaryClick={() => onOpenApplyModal('isbirligi')}
        secondaryCtaText={t.btnSecondary}
        onSecondaryClick={() => onNavigate('/iletisim')}
      />

      {/* Hikâyemiz */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-6">
          <h2 className="text-3xl font-extrabold text-white font-sans">{t.storyTitle}</h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            {t.storyDesc1}
          </p>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-light">
            {t.storyDesc2}
          </p>
        </div>
      </section>

      {/* Vizyon & Misyon */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vizyon */}
          <div className="p-8 rounded-2xl glass border border-white/5 space-y-4 hover:border-cyan-500/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyber-cyan flex items-center justify-center">
              <Zap className="w-5.5 h-5.5" />
            </div>
            <h3 className="text-xl font-extrabold text-white font-sans">{t.visionTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              {t.visionDesc}
            </p>
          </div>

          {/* Misyon */}
          <div className="p-8 rounded-2xl glass border border-white/5 space-y-4 hover:border-cyan-500/20 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyber-cyan flex items-center justify-center">
              <ShieldCheck className="w-5.5 h-5.5" />
            </div>
            <h3 className="text-xl font-extrabold text-white font-sans">{t.missionTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              {t.missionDesc}
            </p>
          </div>

        </div>
      </section>

      {/* Ekip Profilleri */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-5">{t.teamTitle}</h2>
          <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto mb-12 font-light">
            {t.teamSubtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl glass border border-white/5 flex flex-col justify-between hover:border-cyan-500/20 transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan font-bold text-sm">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white">{member.name}</h4>
                      <p className="text-xs text-cyber-cyan font-semibold">{member.role}</p>
                    </div>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed bg-white/2 p-4 rounded-xl border border-white/3 font-light">
                    <strong className="text-gray-300 font-semibold">{t.memberValueLabel}</strong> {member.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <button
              onClick={() => onOpenApplyModal('isbirligi')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer font-sans"
            >
              {t.teamBtn}
            </button>
            <button
              onClick={() => onNavigate('/iletisim')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer font-sans"
            >
              {t.btnSecondary}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
