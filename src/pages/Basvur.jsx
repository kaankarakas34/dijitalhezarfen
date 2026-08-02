import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import { ArrowRight, CheckCircle2, FileText, UserPlus, Milestone, HelpCircle } from 'lucide-react';

export default function Basvur({ onOpenApplyModal }) {
  const [activeFormTab, setActiveFormTab] = useState(null); // 'girisim', 'tunel', 'kurumsal', 'isbirligi'

  const forms = [
    { id: 'girisim', title: 'Girişim Başvurusu', desc: 'Fikirden scale-up’a girişimler için', icon: Milestone },
    { id: 'tunel', title: 'Girişimcilik Tüneli', desc: 'Girişimci adayları ve erken kurucular', icon: UserPlus },
    { id: 'kurumsal', title: 'Kurumsal Akademi', desc: 'İnovasyon ve dönüşüm isteyen kurumlar', icon: FileText },
    { id: 'isbirligi', title: 'Uzman / İş Ortaklığı', desc: 'Eğitmen, mentor ve uzman adayları', icon: HelpCircle }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="Başvuru Merkezi"
        title="Doğru başlangıç noktasını seçin."
        description="Başvurunuzu ihtiyacınıza uygun başvuru tipi üzerinden iletin. Değerlendirmeden sonra uygun görülen başvurular için detaylı görüşme planlanır."
        primaryCtaText="Başvuru Türünü Seç"
        onPrimaryClick={() => {
          const element = document.querySelector('#basvuru-secenekleri');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }}
      />

      {/* Başvuru Türleri Tab */}
      <section id="basvuru-secenekleri" className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">Başvuru Türleri</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {forms.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.id}
                  onClick={() => {
                    setActiveFormTab(f.id);
                    onOpenApplyModal(f.id);
                  }}
                  className={`p-6 rounded-2xl glass border border-white/5 flex flex-col justify-between hover:border-cyan-500/30 transition-all cursor-pointer ${
                    activeFormTab === f.id ? 'border-cyan-400 bg-cyan-500/5' : ''
                  }`}
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyber-cyan flex items-center justify-center">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-sm sm:text-base text-white">{f.title}</h3>
                      <p className="text-xs text-gray-400 mt-1">{f.desc}</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-xs font-bold text-cyber-cyan mt-6">
                    <span>Başvur</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl glass p-8 border border-white/5 bg-[#000000] text-center max-w-2xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-white">Etkinlik & Sponsorluk Başvurusu</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Katılımcı buluşmalarına kaydolmak, Demo Day etkinliklerine katılım veya kurumsal sponsorluk ortaklıkları için lütfen Etkinlik/Sponsorluk Başvuru Formunu açın.
            </p>
            <div>
              <button
                onClick={() => onOpenApplyModal('egitim')}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg transition-all cursor-pointer"
              >
                Etkinlik Formunu Aç
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
