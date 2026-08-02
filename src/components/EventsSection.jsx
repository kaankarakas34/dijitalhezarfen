import React from 'react';
import { Calendar, User, MapPin, Users2, ArrowRight } from 'lucide-react';

export default function EventsSection({ onOpenApplyModal, lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Buluşmalar' : 'Meetups',
    title: isTr ? 'Yaklaşan Etkinlikler' : 'Upcoming Events',
    desc: isTr 
      ? 'Eğitimler, Demo Day\'ler, konferanslar ve meetup\'lar ile ekosistemi fiziksel ve dijital ortamlarda bir araya getiriyoruz.'
      : 'We gather our ecosystem across physical and digital spaces through workshops, conferences, Demo Days, and founder meetups.',
    speakerLabel: isTr ? 'Konuşmacı/Eğitmen:' : 'Speaker/Trainer:',
    targetLabel: isTr ? 'Hedef Kitle:' : 'Target Audience:',
    locationLabel: isTr ? 'Yer:' : 'Location:',
    btnRegister: isTr ? 'Kayıt Ol / Başvur' : 'Register / Apply',

    // Event 1
    t1: isTr ? 'Dijital Hezarfen Demo Day' : 'Dijital Hezarfen Demo Day',
    d1: isTr ? '28 Eylül 2026' : 'September 28, 2026',
    s1: isTr ? 'Tünel Girişimcileri & Jüri Panelistleri' : 'Tunnel Alumni & Jury Panel',
    tar1: isTr ? 'Yatırımcılar, Melek Yatırım Ağları, VC Fon Temsilcileri' : 'Angel Investors, VCs, and Syndicate Partners',
    loc1: isTr ? 'Kanyon Joint Idea / İstanbul' : 'Kanyon Joint Idea / Istanbul',

    // Event 2
    t2: isTr ? 'Growth Lab: B2B Satış Hunisi Kurulumu' : 'Growth Lab: B2B Sales Funnel Setup',
    d2: isTr ? '12 Ekim 2026' : 'October 12, 2026',
    s2: isTr ? 'Pazarlama & Growth Uzman Ekibimiz' : 'Our Specialized Marketing & Growth Team',
    tar2: isTr ? 'Erken ve Büyüme Aşamasındaki Startup Kurucuları' : 'Early-stage and Growth-stage Startup Founders',
    loc2: isTr ? 'Online (Zoom & Miro)' : 'Online (Zoom & Miro)',

    // Event 3
    t3: isTr ? 'Founder Sessions: Ürün-Pazar Uyumu ve Pivot' : 'Founder Sessions: Product-Market Fit & Pivot',
    d3: isTr ? '24 Ekim 2026' : 'October 24, 2026',
    s3: isTr ? 'Deneyimli Startup Kurucuları' : 'Experienced Startup Founders',
    tar3: isTr ? 'Fikir aşamasındaki girişimci adayları & kurucular' : 'Aspiring founders & early stage teams',
    loc3: isTr ? 'Levent Kolektif House / İstanbul' : 'Levent Kolektif House / Istanbul',

    // Event 4
    t4: isTr ? 'Investor Office Hours: Birebir Yatırımcı Görüşmeleri' : 'Investor Office Hours: 1-on-1 Sessions',
    d4: isTr ? '05 Kasım 2026' : 'November 05, 2026',
    s4: isTr ? 'Önde gelen Melek Yatırımcılar & VC Ortakları' : 'Leading Angel Investors & VC Partners',
    tar4: isTr ? 'Seed/Pre-seed aşamasında yatırım arayan ekipler' : 'Startups raising Seed or Pre-seed rounds',
    loc4: isTr ? 'Online (Birebir Seanslar)' : 'Online (1-on-1 Sessions)'
  };

  const events = [
    {
      id: 'demo-day',
      title: t.t1,
      type: 'Demo Day',
      date: t.d1,
      time: '14:00 - 18:00',
      location: t.loc1,
      speaker: t.s1,
      target: t.tar1,
      color: 'border-cyan-500/20 text-cyber-cyan'
    },
    {
      id: 'growth-lab',
      title: t.t2,
      type: 'Growth Lab',
      date: t.d2,
      time: '19:00 - 21:30',
      location: t.loc2,
      speaker: t.s2,
      target: t.tar2,
      color: 'border-blue-500/20 text-blue-400'
    },
    {
      id: 'founder-sessions',
      title: t.t3,
      type: 'Founder Sessions',
      date: t.d3,
      time: '18:30 - 20:30',
      location: t.loc3,
      speaker: t.s3,
      target: t.tar3,
      color: 'border-violet-500/20 text-violet-400'
    },
    {
      id: 'investor-office-hours',
      title: t.t4,
      type: 'Office Hours',
      date: t.d4,
      time: '10:00 - 17:00',
      location: t.loc4,
      speaker: t.s4,
      target: t.tar4,
      color: 'border-pink-500/20 text-pink-400'
    }
  ];

  return (
    <section id="etkinlikler" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/3 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">{t.badge}</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            {t.title}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            {t.desc}
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group flex flex-col justify-between rounded-2xl glass p-6 hover:border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                
                {/* Event header (Date & Type) */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                  <div className="flex items-center gap-2 text-cyber-cyan">
                    <Calendar className="w-4 h-4" />
                    <span className="text-xs font-extrabold tracking-wider">{event.date}</span>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest border px-2.5 py-1 rounded-md ${event.color}`}>
                    {event.type}
                  </span>
                </div>

                {/* Topic */}
                <h3 className="font-extrabold text-lg sm:text-xl text-white font-sans leading-snug group-hover:text-cyber-cyan transition-colors">
                  {event.title}
                </h3>
                
                {/* Info block list */}
                <div className="mt-5 space-y-3">
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400 font-light">
                    <User className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      <strong className="text-gray-300">{t.speakerLabel}</strong> {event.speaker}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400 font-light">
                    <Users2 className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      <strong className="text-gray-300">{t.targetLabel}</strong> {event.target}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400 font-light">
                    <MapPin className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      <strong className="text-gray-300">{t.locationLabel}</strong> {event.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Apply / Register button */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <button
                  onClick={() => onOpenApplyModal('egitim')}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/35 transition-all duration-300 flex items-center justify-center gap-1.5 group/btn cursor-pointer font-sans"
                >
                  <span>{t.btnRegister}</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
