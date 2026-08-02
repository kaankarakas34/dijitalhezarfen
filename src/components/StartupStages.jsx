import React, { useState } from 'react';
import { Target, Milestone, Zap, Rocket, Globe, ArrowRight } from 'lucide-react';

export default function StartupStages({ onOpenApplyModal, lang }) {
  const [selectedStage, setSelectedStage] = useState(0);
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'Yol Haritası' : 'Roadmap',
    title: isTr ? 'Girişimin Hangi Aşamasında?' : 'What Stage is Your Startup?',
    desc: isTr 
      ? 'Girişiminizin bulunduğu evreye özel olarak tasarlanmış desteklerle, riskleri minimize edip büyümenizi hızlandırıyoruz.'
      : 'With custom support tailored to your startup\'s exact stage, we minimize execution risks and accelerate growth.',
    stageLabel: isTr ? 'Aşama' : 'Stage',
    cardTitleSuffix: isTr ? 'Aşaması Destekleri' : 'Stage Support',
    supportLabel: isTr ? 'Sunulan Destek' : 'Support Provided',
    noteText: isTr ? '* Girişiminizin bu aşamadaki ihtiyaçlarına özel uygulama desteği verilir.' : '* Custom execution support tailored to your startup\'s needs at this stage.',
    btnApplyAt: isTr ? 'Aşamasında Başvur' : 'Stage Application',
    btnDiagnose: isTr ? 'Girişiminin Aşamasını Belirle' : 'Diagnose Your Startup Stage'
  };

  const stages = [
    {
      id: 'fikir',
      name: isTr ? 'Fikir' : 'Idea',
      icon: Target,
      tag: `${t.stageLabel} 1`,
      description: isTr 
        ? 'Henüz başlangıçta, fikir geliştirme ve doğrulama evresi.' 
        : 'Early ideation, feasibility planning, and market validation phase.',
      support: isTr 
        ? 'Problem, müşteri ve iş modeli doğrulaması.' 
        : 'Problem, customer discovery, and business model validation.',
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20'
    },
    {
      id: 'pre-seed',
      name: 'Pre-seed',
      icon: Milestone,
      tag: `${t.stageLabel} 2`,
      description: isTr 
        ? 'Minimum ürün geliştirme ve ilk ekibi kurma evresi.' 
        : 'Minimum viable product scoping and core team formation stage.',
      support: isTr 
        ? 'MVP geliştirme, ilk ekip kurulumu ve ilk müşteri lansmanı.' 
        : 'MVP coding, team scaling, and launching a pilot cohort.',
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20'
    },
    {
      id: 'seed',
      name: 'Seed',
      icon: Zap,
      tag: `${t.stageLabel} 3`,
      description: isTr 
        ? 'Ürünün pazara çıktığı ve büyümeye başladığı evre.' 
        : 'Product launch in active markets and customer acquisition scale stage.',
      support: isTr 
        ? 'Satış kanalları, pazarlama, finansal model ve yatırım hazırlığı.' 
        : 'Sales funnels, growth marketing, 3-year model, and data room prep.',
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20'
    },
    {
      id: 'series-a',
      name: 'Series A+',
      icon: Rocket,
      tag: `${t.stageLabel} 4`,
      description: isTr 
        ? 'Ölçeklenmeye hazır, sistemlerin kurulduğu evre.' 
        : 'Prepared for systemic scale and organizational structuring.',
      support: isTr 
        ? 'Tekrarlanabilir büyüme modelleri ve kurumsal organizasyon tasarımı.' 
        : 'Repeatable growth funnels, RevOps execution, and team matrix design.',
      color: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20'
    },
    {
      id: 'scale-up',
      name: 'Scale-up',
      icon: Globe,
      tag: `${t.stageLabel} 5`,
      description: isTr 
        ? 'Küresel pazarlara açılma ve ileri büyüme evresi.' 
        : 'International expansion planning and late-stage scaling.',
      support: isTr 
        ? 'Uluslararasılaşma, global büyüme ve ileri seviye yatırım süreçleri.' 
        : 'Cross-border sales development, global entity setup, and next-round fundraising.',
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20'
    }
  ];

  return (
    <section id="girişim-asama" className="py-24 relative overflow-hidden bg-[#080B12]">
      {/* Mesh lines */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">{t.badge}</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans mt-5 mb-5">
            {t.title}
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-light">
            {t.desc}
          </p>
        </div>

        {/* Interactive Progress Path */}
        <div className="relative mb-16">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[3px] bg-white/5 z-0">
            <div 
              className="h-full bg-gradient-cyber transition-all duration-500 rounded-full"
              style={{ width: `${(selectedStage / (stages.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* Timeline Nodes Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
            {stages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = selectedStage === idx;
              return (
                <div key={stage.id} className="text-center flex flex-col items-center group">
                  
                  {/* Circle Selector */}
                  <button
                    onClick={() => setSelectedStage(idx)}
                    className={`w-22 h-22 rounded-full border-3 flex items-center justify-center transition-all duration-300 relative cursor-pointer ${
                      isSelected
                        ? 'border-cyber-cyan bg-[#0B0F19] text-cyber-cyan shadow-xl shadow-cyan-500/20 scale-105'
                        : 'border-white/10 bg-[#0B0F19] hover:border-white/20 text-gray-500 hover:text-gray-300'
                    }`}
                  >
                    <Icon className="w-8 h-8" />
                    
                    {/* Step Number Badge */}
                    <div className={`absolute -top-1 -right-1 w-6 h-6 rounded-full text-[10px] font-extrabold flex items-center justify-center border ${
                      isSelected 
                        ? 'bg-gradient-cyber text-[#0B0F19] border-transparent' 
                        : 'bg-white/5 text-gray-400 border-white/10'
                    }`}>
                      {idx + 1}
                    </div>
                  </button>

                  {/* Stage Label Text */}
                  <h3 className={`mt-5 font-extrabold text-base transition-colors ${isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-300'}`}>
                    {stage.name}
                  </h3>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-600 mt-0.5">
                    {stage.tag}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Card */}
        <div className="max-w-4xl mx-auto rounded-2xl glass p-8 border-cyan-500/10 relative overflow-hidden mb-12 min-h-[220px] flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/3 rounded-full filter blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center border ${stages[selectedStage].color}`}>
                  {React.createElement(stages[selectedStage].icon, { className: 'w-5 h-5' })}
                </div>
                <h4 className="text-xl font-bold text-white font-sans">{stages[selectedStage].name} {t.cardTitleSuffix}</h4>
              </div>
              <p className="text-sm text-gray-400 max-w-xl leading-relaxed font-light">
                {stages[selectedStage].description}
              </p>
            </div>

            {/* Support Highlight Box */}
            <div className="w-full md:max-w-xs p-4 rounded-xl bg-white/3 border border-white/5 shrink-0">
              <span className="text-[10px] font-bold text-cyber-cyan uppercase tracking-wider block mb-1">{t.supportLabel}</span>
              <p className="text-xs sm:text-sm font-semibold text-white leading-normal">
                {stages[selectedStage].support}
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
            <span className="text-xs text-gray-500 font-light">{t.noteText}</span>
            <button 
              onClick={() => onOpenApplyModal('girisim', stages[selectedStage].id)}
              className="text-xs font-bold text-cyber-cyan hover:underline flex items-center gap-1 cursor-pointer shrink-0"
            >
              <span>{isTr ? `${stages[selectedStage].name} ${t.btnApplyAt}` : `Apply for ${stages[selectedStage].name} Stage`}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* General Assessment CTA */}
        <div className="text-center font-sans">
          <button
            onClick={() => onOpenApplyModal('girisim')}
            className="px-8 py-4 rounded-xl font-bold text-sm sm:text-base bg-gradient-cyber text-[#0B0F19] hover:shadow-xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer"
          >
            {t.btnDiagnose}
          </button>
        </div>

      </div>
    </section>
  );
}
