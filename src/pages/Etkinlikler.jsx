import React from 'react';
import PageHero from '../components/UI/PageHero';
import { Calendar, User, MapPin, Users2, ArrowRight } from 'lucide-react';

export default function Etkinlikler({ onOpenApplyModal }) {
  const formats = [
    { name: 'Academy Live', desc: 'Sektörel derinlik katan uzmanlık eğitimleri, masterclass ve yoğun workshop seansları.' },
    { name: 'Growth Lab', desc: 'Gerçek bir startup büyüme problemini, kurucu ve ekiplerle birlikte canlıda uygulamalı çözmek.' },
    { name: 'Founder Sessions', desc: 'Deneyimli startup kurucularının sahne arkasındaki gerçek deneyimlerini paylaştığı buluşmalar.' },
    { name: 'Demo Day', desc: 'Tünel mezunlarının ve hazır girişimlerin melek yatırımcılar ve fonlarla bir araya gelmesi.' },
    { name: 'Investor Office Hours', desc: 'Yatırımcılardan girişiminiz için kısa geri bildirim alma ve ilk tanışma seansları.' },
    { name: 'Corporate Innovation Day', desc: 'Kurumsal şirketlerin inovasyon problemlerini girişim ekosistemi çözümleriyle eşleştirmek.' },
    { name: 'Dijital Hezarfen Summit', desc: 'Girişimcilik, teknoloji, yapay zekâ ve büyüme gündemini bir araya getiren büyük konferans.' }
  ];

  const events = [
    {
      title: 'Dijital Hezarfen Demo Day',
      type: 'Demo Day',
      date: '28 Eylül 2026',
      location: 'Kanyon Joint Idea / İstanbul',
      speaker: 'Tünel Girişimcileri & Jüri Panelistleri',
      target: 'Yatırımcılar, Melek Yatırım Ağları, VC Fon Temsilcileri'
    },
    {
      title: 'Growth Lab: B2B Satış Hunisi Kurulumu',
      type: 'Growth Lab',
      date: '12 Ekim 2026',
      location: 'Online (Zoom & Miro)',
      speaker: 'Pazarlama & Growth Uzman Ekibimiz',
      target: 'Erken ve Büyüme Aşamasındaki Startup Kurucuları'
    },
    {
      title: 'Founder Sessions: Ürün-Pazar Uyumu ve Pivot',
      type: 'Founder Sessions',
      date: '24 Ekim 2026',
      location: 'Levent Kolektif House / İstanbul',
      speaker: 'Deneyimli Startup Kurucuları',
      target: 'Fikir aşamasındaki girişimci adayları & kurucular'
    }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Etkinlikler & Buluşmalar"
        title="Öğrenin, uygulayın ve doğru fırsatlarla buluşun."
        description="Akademi programlarından yatırımcı ortak oturumlarına kadar girişimcilik yolculuğunun farklı evrelerine özel olarak tasarlanmış etkinlik takvimimiz."
        primaryCtaText="Yaklaşan Etkinlikleri Gör"
        onPrimaryClick={() => {
          const element = document.querySelector('#yaklasan-etkinlikler');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
        secondaryCtaText="Sponsor Ol"
        onSecondaryClick={() => onOpenApplyModal('egitim')}
      />

      {/* Formatlar Table */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Etkinlik Formatlarımız</h2>
          <div className="rounded-2xl glass border border-white/5 overflow-hidden">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white/5 text-gray-300 border-b border-white/5">
                <tr>
                  <th className="px-6 py-4">Format</th>
                  <th className="px-6 py-4">Amaç</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-400">
                {formats.map((f, idx) => (
                  <tr key={idx} className="hover:bg-white/1 transition-colors">
                    <td className="px-6 py-4 font-bold text-white shrink-0">{f.name}</td>
                    <td className="px-6 py-4 leading-relaxed">{f.desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Yaklaşan Etkinlikler List */}
      <section id="yaklasan-etkinlikler" className="py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Yaklaşan Etkinlik Takvimi</h2>
          <div className="grid grid-cols-1 gap-6">
            {events.map((event, idx) => (
              <div 
                key={idx}
                className="group flex flex-col justify-between rounded-2xl glass p-6 hover:border-cyan-500/20 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-5">
                    <div className="flex items-center gap-2 text-cyber-cyan">
                      <Calendar className="w-4 h-4" />
                      <span className="text-xs font-extrabold tracking-wider">{event.date}</span>
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-widest border border-cyan-500/20 px-2.5 py-1 rounded-md text-cyber-cyan bg-cyan-500/5">
                      {event.type}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-lg sm:text-xl text-white font-sans group-hover:text-cyber-cyan transition-colors">
                    {event.title}
                  </h3>
                  
                  <div className="mt-5 space-y-3">
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
                      <User className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                      <span><strong className="text-gray-300">Konuşmacı/Eğitmen:</strong> {event.speaker}</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
                      <Users2 className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                      <span><strong className="text-gray-300">Hedef Kitle:</strong> {event.target}</span>
                    </div>
                    <div className="flex items-start gap-3 text-xs sm:text-sm text-gray-400">
                      <MapPin className="w-4.5 h-4.5 text-gray-500 shrink-0 mt-0.5" />
                      <span><strong className="text-gray-300">Yer:</strong> {event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <button
                    onClick={() => onOpenApplyModal('egitim')}
                    className="w-full py-3 rounded-xl text-xs sm:text-sm font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-500/35 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Kayıt Ol / Başvur</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16">
            <button
              onClick={() => {
                const element = document.querySelector('#yaklasan-etkinlikler');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              Etkinlik Takvimini Gör
            </button>
            <button
              onClick={() => onOpenApplyModal('egitim')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:bg-white/10 text-white transition-all cursor-pointer"
            >
              Etkinlik İş Birliği Yap
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
