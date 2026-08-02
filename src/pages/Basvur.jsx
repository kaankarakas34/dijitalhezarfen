import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import { ArrowRight, CheckCircle2, FileText, UserPlus, Milestone, HelpCircle } from 'lucide-react';

export default function Basvur({ onOpenApplyModal, lang }) {
  const [activeFormTab, setActiveFormTab] = useState(null);
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Başvuru Merkezi' : 'Application Center',
    title: isTr ? 'Doğru başlangıç noktasını seçin.' : 'Choose the right starting point.',
    desc: isTr 
      ? 'Başvurunuzu ihtiyacınıza uygun form üzerinden iletin; ekip değerlendirmesinden sonra uygun görülen başvurular için görüşme planlanır.'
      : 'Submit your application using the appropriate form; after assessment, meetings will be scheduled for qualified projects.',
    btnPrimary: isTr ? 'Başvuru Türünü Seç' : 'Choose Application Type',
    typesTitle: isTr ? 'Başvuru Türleri' : 'Application Categories',
    sponsorTitle: isTr ? 'Etkinlik & Sponsorluk Başvurusu' : 'Event & Sponsorship Registration',
    sponsorDesc: isTr
      ? 'Katılımcı buluşmalarına kaydolmak, Demo Day etkinliklerine katılım veya kurumsal sponsorluk ortaklıkları için lütfen Etkinlik/Sponsorluk Başvuru Formunu açın.'
      : 'To register for meetups, pitch sessions, or inquire about corporate sponsorships, please open the Event/Sponsor Registration form.',
    sponsorBtn: isTr ? 'Etkinlik Formunu Aç' : 'Open Event Form',
    applyBtn: isTr ? 'Başvur' : 'Apply',
    girisimTitle: isTr ? 'Girişim Başvurusu' : 'Venture Application',
    girisimDesc: isTr ? 'Fikirden scale-up’a girişimler' : 'Ventures from idea to scale-up stage',
    tunelTitle: isTr ? 'Girişimcilik Tüneli' : 'Entrepreneur Tunnel',
    tunelDesc: isTr ? 'Girişimci adayları ve erken kurucular' : 'Aspiring entrepreneurs & early founders',
    kurumsalTitle: isTr ? 'Kurumsal Akademi' : 'Corporate Academy',
    kurumsalDesc: isTr ? 'İnovasyon ve dönüşüm isteyen kurumlar' : 'Corporates seeking training & innovation',
    partnerTitle: isTr ? 'Uzman / İş Ortaklığı' : 'Expert / Partner Network',
    partnerDesc: isTr ? 'Eğitmen, mentor ve uzman adayları' : 'Trainer, mentor & advisor candidates'
  };

  const forms = [
    { id: 'girisim', title: t.girisimTitle, desc: t.girisimDesc, icon: Milestone },
    { id: 'tunel', title: t.tunelTitle, desc: t.tunelDesc, icon: UserPlus },
    { id: 'kurumsal', title: t.kurumsalTitle, desc: t.kurumsalDesc, icon: FileText },
    { id: 'isbirligi', title: t.partnerTitle, desc: t.partnerDesc, icon: HelpCircle }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge={t.badge}
        title={t.title}
        description={t.desc}
        primaryCtaText={t.btnPrimary}
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
          <h2 className="text-3xl font-extrabold text-white text-center font-sans mb-12">{t.typesTitle}</h2>
          
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
                  <button className="flex items-center gap-1 text-xs font-bold text-cyber-cyan mt-6 font-sans">
                    <span>{t.applyBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="rounded-2xl glass p-8 border border-white/5 bg-[#000000] text-center max-w-2xl mx-auto space-y-6">
            <h3 className="text-xl font-bold text-white font-sans">{t.sponsorTitle}</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              {t.sponsorDesc}
            </p>
            <div>
              <button
                onClick={() => onOpenApplyModal('egitim')}
                className="px-6 py-3 rounded-xl font-bold text-xs sm:text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg transition-all cursor-pointer font-sans"
              >
                {t.sponsorBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
