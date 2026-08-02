import React from 'react';
import { Calendar, User, MapPin, Users2, ArrowRight } from 'lucide-react';

export default function EventsSection({ onOpenApplyModal }) {
  const events = [
    {
      id: 'demo-day',
      title: 'Dijital Hezarfen Demo Day',
      type: 'Demo Day',
      date: '28 Eylül 2026',
      time: '14:00 - 18:00',
      location: 'Kanyon Joint Idea / İstanbul',
      speaker: 'Tünel Girişimcileri & Jüri Panelistleri',
      target: 'Yatırımcılar, Melek Yatırım Ağları, VC Fon Temsilcileri',
      color: 'border-cyan-500/20 text-cyber-cyan'
    },
    {
      id: 'growth-lab',
      title: 'Growth Lab: B2B Satış Hunisi Kurulumu',
      type: 'Growth Lab',
      date: '12 Ekim 2026',
      time: '19:00 - 21:30',
      location: 'Online (Zoom & Miro)',
      speaker: 'Pazarlama & Growth Uzman Ekibimiz',
      target: 'Erken ve Büyüme Aşamasındaki Startup Kurucuları',
      color: 'border-blue-500/20 text-blue-400'
    },
    {
      id: 'founder-sessions',
      title: 'Founder Sessions: Ürün-Pazar Uyumu ve Pivot',
      type: 'Founder Sessions',
      date: '24 Ekim 2026',
      time: '18:30 - 20:30',
      location: 'Levent Kolektif House / İstanbul',
      speaker: 'Deneyimli Startup Kurucuları',
      target: 'Fikir aşamasındaki girişimci adayları & kurucular',
      color: 'border-violet-500/20 text-violet-400'
    },
    {
      id: 'investor-office-hours',
      title: 'Investor Office Hours: Birebir Yatırımcı Görüşmeleri',
      type: 'Office Hours',
      date: '05 Kasım 2026',
      time: '10:00 - 17:00',
      location: 'Online (Birebir Seanslar)',
      speaker: 'Önde gelen Melek Yatırımcılar & VC Ortakları',
      target: 'Seed/Pre-seed aşamasında yatırım arayan ekipler',
      color: 'border-pink-500/20 text-pink-400'
    }
  ];

  return (
    <section id="etkinlikler" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/3 rounded-full filter blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">Buluşmalar</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white font-sans mt-5 mb-5">
            Yaklaşan Etkinlikler
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base">
            Eğitimler, Demo Day'ler, konferanslar ve meetup'lar ile ekosistemi fiziksel ve dijital ortamlarda bir araya getiriyoruz.
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
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
                    <User className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      <strong className="text-gray-300">Konuşmacı/Eğitmen:</strong> {event.speaker}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
                    <Users2 className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      <strong className="text-gray-300">Hedef Kitle:</strong> {event.target}
                    </span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
                    <MapPin className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                    <span className="leading-snug">
                      <strong className="text-gray-300">Yer:</strong> {event.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Apply / Register button */}
              <div className="mt-8 pt-4 border-t border-white/5">
                <button
                  onClick={() => onOpenApplyModal('egitim')}
                  className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/35 transition-all duration-300 flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                >
                  <span>Kayıt Ol / Başvur</span>
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
