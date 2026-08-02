import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown, BookOpen, Layers, TrendingUp, HelpCircle, Calendar, FileText, Users, Award, Briefcase, UserPlus } from 'lucide-react';
import logoWhite from '../../logo/Dijital Hezarfen (8).png';

export default function Navbar({ onOpenApplyModal, onNavigate, lang, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'programlar', 'medya', 'hakkimizda', 'kariyer'
  const timeoutRef = useRef(null);

  const isTr = lang === 'tr';
  const t = {
    programs: isTr ? 'Programlar & Hizmetler' : 'Programs & Services',
    academy: isTr ? 'Akademi' : 'Academy',
    tunnel: isTr ? 'Girişimcilik Tüneli' : 'Entrepreneur Tunnel',
    tunnelDesc: isTr ? '3-5 aylık yoğun kurucu yetiştirme programı' : '3-5 months intensive founder development',
    modular: isTr ? 'Modüler Eğitimler' : 'Modular Training',
    modularDesc: isTr ? 'Teknoloji, satış, finans ve liderlik' : 'Technology, sales, finance & leadership',
    application: isTr ? 'Uygulama' : 'Application',
    mvp: isTr ? 'Yazılım & AI MVP' : 'Software & AI MVP',
    mvpDesc: isTr ? 'Çalışan prototip, SaaS ve AI otomasyonları' : 'Working prototype, SaaS & AI automation',
    appServices: isTr ? 'Uygulama Hizmetleri' : 'Application Services',
    appServicesDesc: isTr ? 'Pazarlama, satış ve finans altyapı işleri' : 'Marketing, sales & finance infrastructure',
    growthVenture: isTr ? 'Büyüme & Yatırım' : 'Growth & Venture',
    fundraising: isTr ? 'Yatırıma Hazırlık' : 'Fundraising Prep',
    fundraisingDesc: isTr ? 'Pitch deck, finansal model, mock pitch' : 'Pitch deck, financial model, mock pitch',
    globalGrowth: isTr ? 'Küresel Büyüme' : 'Global Growth',
    globalGrowthDesc: isTr ? 'Growth hacking, globalleşme modelleri' : 'Growth hacking, globalization models',
    explore: isTr ? 'Ekosistemi Keşfet' : 'Explore Ecosystem',
    ekosistemTitle: isTr ? 'Dijital Hezarfen Ekosistemi' : 'Dijital Hezarfen Ecosystem',
    ekosistemDesc: isTr ? 'Fikirden global büyümeye giden tüm yolda, akademi ve uygulama gücü tek bir çatı altında.' : 'Academy and application power under one roof, from idea to global growth.',
    
    publications: isTr ? 'Yayınlar & Etkinlikler' : 'Publications & Events',
    media: isTr ? 'Medya' : 'Media',
    mediaDesc: isTr ? 'YouTube & Podcast' : 'YouTube & Podcast',
    mediaDetail: isTr ? 'Kurucu röportajları ve analiz videoları' : 'Founder interviews & analyses',
    events: isTr ? 'Etkinlikler' : 'Events',
    eventsDesc: isTr ? 'Demo Day & Buluşmalar' : 'Demo Day & Meetups',
    eventsDetail: isTr ? 'Girişim sunumları ve yatırımcı görüşmeleri' : 'Pitch events & investor networking',
    blog: isTr ? 'Blog' : 'Blog',
    blogDesc: isTr ? 'Makaleler & Rehberler' : 'Articles & Guides',
    blogDetail: isTr ? 'Yazılım, AI, pazarlama ve hukuk yazıları' : 'Software, AI, marketing & legal resources',
    blogExplore: isTr ? 'Blogu İncele' : 'Browse Blog',
    mediaBannerTitle: isTr ? 'Bilgi & İletişim Yayında' : 'Knowledge Hub Live',
    mediaBannerDesc: isTr ? 'Derslerin dışına taşan podcast, video serileri ve blog rehberleriyle bilgiye her an erişim sağlayın.' : 'Access podcasts, video series, and blog guides beyond classroom learning.',
    
    about: isTr ? 'Hakkımızda' : 'About Us',
    vision: isTr ? 'Vizyon & Yaklaşım' : 'Vision & Approach',
    visionDesc: isTr ? 'Yenilikçi çalışma modelimiz' : 'Our innovative working model',
    team: isTr ? 'Ekip & Süreç' : 'Team & Process',
    teamDesc: isTr ? 'Kurucu hikayemiz ve uzman kadromuz' : 'Our founder story & experts',
    acceptance: isTr ? 'Nasıl Kabul Edilir?' : 'Acceptance Guide',
    acceptanceDesc: isTr ? 'Değerlendirme ve kabul süreçleri' : 'Assessment and acceptance criteria',
    investor: isTr ? 'Yatırımcı Portföyü' : 'Investor Network',
    investorDesc: isTr ? 'İş birliği yaptığımız melek ağları & fonlar' : 'Partner angel networks & VC funds',
    knowUs: isTr ? 'Bizi Tanıyın' : 'Get to Know Us',
    networkTitle: isTr ? 'Global Network' : 'Global Network',
    networkDesc: isTr ? 'Uzman ekibimiz, iş ortaklarımız ve geniş yatırımcı ağımızla girişiminizin arkasındaki itici güç oluyoruz.' : 'We power your startup with our experts, partners, and extensive investor network.',
    
    careers: isTr ? 'Kariyer' : 'Careers',
    talent: isTr ? 'Yetenek Arayışı' : 'Talent Search',
    lookingForTeam: isTr ? 'Ekip Arıyorum' : 'Looking for Team',
    lookingForTeamDesc: isTr ? 'Girişiminiz için yazılımcı, pazarlamacı veya uzman ilanı' : 'Post tech, marketing or expert roles',
    lookingForJob: isTr ? 'İş Arıyorum' : 'Looking for Job',
    lookingForJobDesc: isTr ? 'Ekosistem startup\'larındaki açık iş ve staj imkanları' : 'Job and internship openings',
    partnership: isTr ? 'Ortaklık' : 'Partnership',
    lookingForFounder: isTr ? 'Co-founder Arıyorum' : 'Looking for Co-founder',
    lookingForFounderDesc: isTr ? 'Tamamlayıcı yeteneklerde ortak arayan kurucular' : 'Connect with complementary co-founders',
    cofounderMatchTitle: isTr ? 'Co-founder Eşleşmesi' : 'Co-founder Matching',
    cofounderMatchDesc: isTr ? 'Bir projeniz mi var veya bir startup\'a kurucu ortak olarak katılmak mı istiyorsunuz? Başvurun, eşleştirelim.' : 'Have a project or want to join as a co-founder? Apply now and get matched.',
    formLabel: isTr ? 'Kayıt Formu' : 'Registration Form',
    
    applyBtn: isTr ? 'Başvur' : 'Apply',
    careerLabel: isTr ? 'Kariyer & Fırsatlar' : 'Careers & Opportunities',
    bothCareerLabel: isTr ? 'Ekip / Co-founder Arıyorum' : 'Looking for Team / Co-founder'
  };

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200);
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveMenu(null);
    onNavigate(path);
  };

  const handleApplyClick = (type) => {
    setIsOpen(false);
    setActiveMenu(null);
    onOpenApplyModal(type);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0B0F19] border-b border-white/10 py-4 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '/')}>
              <img src={logoWhite} alt="Dijital Hezarfen" className="h-8 w-auto object-contain group-hover:opacity-90 transition-opacity" />
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            
            {/* Mega Menu 1: Programlar & Hizmetler */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('programlar')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeMenu === 'programlar' ? 'text-cyber-cyan bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/3'
              }`}>
                <span>{t.programs}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeMenu === 'programlar' ? 'rotate-180 text-cyber-cyan' : ''}`} />
              </button>

              {activeMenu === 'programlar' && (
                <div className="absolute top-full left-1/2 -translate-x-[35%] pt-4 w-[850px] z-50">
                  <div className="rounded-2xl bg-[#0F1424] border border-white/10 p-6 shadow-2xl animate-fade-in grid grid-cols-12 gap-6" onMouseEnter={() => handleMouseEnter('programlar')}>
                    
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-cyber-cyan uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />
                          {t.academy}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/akademi/girisimcilik-tuneli')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.tunnel}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.tunnelDesc}</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/akademi/egitimler')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.modular}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.modularDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Layers className="w-4 h-4" />
                          {t.application}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/uygulama/yazilim-mvp')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.mvp}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.mvpDesc}</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/uygulama')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.appServices}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.appServicesDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4" />
                          {t.growthVenture}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/buyume-yatirim/yatirima-hazirlik')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.fundraising}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.fundraisingDesc}</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/buyume-yatirim/uluslararasilasma')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.globalGrowth}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.globalGrowthDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-span-4 rounded-xl bg-gradient-to-br from-cyan-950 via-slate-900 to-violet-950 p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full filter blur-xl"></div>
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyber-cyan flex items-center justify-center mb-3">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h5 className="text-xs font-bold text-white">{t.ekosistemTitle}</h5>
                        <p className="text-[9px] text-gray-400 mt-1 leading-normal">{t.ekosistemDesc}</p>
                      </div>
                      <button 
                        onClick={() => handleApplyClick('girisim')}
                        className="mt-4 py-2 w-full text-center text-[10px] font-bold text-cyber-cyan bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-all cursor-pointer"
                      >
                        {t.explore}
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Mega Menu 2: Yayınlar & Etkinlikler */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('medya')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeMenu === 'medya' ? 'text-cyber-cyan bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/3'
              }`}>
                <span>{t.publications}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeMenu === 'medya' ? 'rotate-180 text-cyber-cyan' : ''}`} />
              </button>

              {activeMenu === 'medya' && (
                <div className="absolute top-full left-1/2 -translate-x-[40%] pt-4 w-[800px] z-50">
                  <div className="rounded-2xl bg-[#0F1424] border border-white/10 p-6 shadow-2xl animate-fade-in grid grid-cols-12 gap-6" onMouseEnter={() => handleMouseEnter('medya')}>
                    
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <FileText className="w-4 h-4" />
                          {t.media}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/medya')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.mediaDesc}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.mediaDetail}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          {t.events}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/etkinlikler')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.eventsDesc}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.eventsDetail}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />
                          {t.blog}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/icerikler')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.blogDesc}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.blogDetail}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-span-4 rounded-xl bg-gradient-to-br from-violet-950 via-slate-900 to-fuchsia-950 p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full filter blur-xl"></div>
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" /></svg>
                        </div>
                        <h5 className="text-xs font-bold text-white">{t.mediaBannerTitle}</h5>
                        <p className="text-[9px] text-gray-400 mt-1 leading-normal">{t.mediaBannerDesc}</p>
                      </div>
                      <button 
                        onClick={(e) => handleNavClick(e, '/icerikler')}
                        className="mt-4 py-2 w-full text-center text-[10px] font-bold text-violet-400 bg-violet-500/10 rounded-lg hover:bg-violet-500/20 transition-all cursor-pointer"
                      >
                        {t.blogExplore}
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Mega Menu 3: Hakkımızda */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('hakkimizda')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeMenu === 'hakkimizda' ? 'text-cyber-cyan bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/3'
              }`}>
                <span>{t.about}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeMenu === 'hakkimizda' ? 'rotate-180 text-cyber-cyan' : ''}`} />
              </button>

              {activeMenu === 'hakkimizda' && (
                <div className="absolute top-full left-1/2 -translate-x-[45%] pt-4 w-[800px] z-50">
                  <div className="rounded-2xl bg-[#0F1424] border border-white/10 p-6 shadow-2xl animate-fade-in grid grid-cols-12 gap-6" onMouseEnter={() => handleMouseEnter('hakkimizda')}>
                    
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {t.about}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/dijital-hezarfen')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.vision}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.visionDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Award className="w-4 h-4" />
                          {t.team}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/hakkimizda')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.teamDesc}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.teamDesc}</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/sik-sorulan-sorular')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.acceptance}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.acceptanceDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          {t.investor}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => handleNavClick(e, '/buyume-yatirim')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.investorDesc}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.investorDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-span-4 rounded-xl bg-gradient-to-br from-pink-950 via-slate-900 to-rose-950 p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full filter blur-xl"></div>
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center mb-3">
                          <Award className="w-4 h-4" />
                        </div>
                        <h5 className="text-xs font-bold text-white">{t.networkTitle}</h5>
                        <p className="text-[9px] text-gray-400 mt-1 leading-normal">{t.networkDesc}</p>
                      </div>
                      <button 
                        onClick={(e) => handleNavClick(e, '/hakkimizda')}
                        className="mt-4 py-2 w-full text-center text-[10px] font-bold text-pink-400 bg-pink-500/10 rounded-lg hover:bg-pink-500/20 transition-all cursor-pointer"
                      >
                        {t.knowUs}
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* Mega Menu 4: Kariyer */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('kariyer')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeMenu === 'kariyer' ? 'text-cyber-cyan bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/3'
              }`}>
                <span>{t.careers}</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeMenu === 'kariyer' ? 'rotate-180 text-cyber-cyan' : ''}`} />
              </button>

              {activeMenu === 'kariyer' && (
                <div className="absolute top-full left-1/2 -translate-x-[50%] pt-4 w-[800px] z-50">
                  <div className="rounded-2xl bg-[#0F1424] border border-white/10 p-6 shadow-2xl animate-fade-in grid grid-cols-12 gap-6" onMouseEnter={() => handleMouseEnter('kariyer')}>
                    
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          {t.talent}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleApplyClick('girisim'); }} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.lookingForTeam}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.lookingForTeamDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleApplyClick('tunel'); }} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.lookingForJob}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.lookingForJobDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <UserPlus className="w-4 h-4" />
                          {t.partnership}
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleApplyClick('girisim'); }} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">{t.lookingForFounder}</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">{t.lookingForFounderDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-span-4 rounded-xl bg-gradient-to-br from-cyan-950 via-slate-900 to-amber-950 p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full filter blur-xl"></div>
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                          <UserPlus className="w-4 h-4" />
                        </div>
                        <h5 className="text-xs font-bold text-white">{t.cofounderMatchTitle}</h5>
                        <p className="text-[9px] text-gray-400 mt-1 leading-normal">{t.cofounderMatchDesc}</p>
                      </div>
                      <button 
                        onClick={() => handleApplyClick('girisim')}
                        className="mt-4 py-2 w-full text-center text-[10px] font-bold text-amber-400 bg-amber-500/10 rounded-lg hover:bg-amber-500/20 transition-all cursor-pointer"
                      >
                        {t.formLabel}
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Action CTA Button & Language Switcher */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => onLanguageChange(lang === 'tr' ? 'en' : 'tr')}
              className="px-3 py-1.5 rounded-lg text-xs font-extrabold border border-white/10 hover:border-cyan-500/30 text-gray-300 hover:text-white transition-all cursor-pointer font-sans uppercase mr-4 tracking-wider hover:bg-white/5 active:scale-95 duration-200"
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
            <button
              onClick={(e) => handleNavClick(e, '/basvur')}
              className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-sans"
            >
              {t.applyBtn}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`lg:hidden fixed inset-0 z-40 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-md" onClick={() => setIsOpen(false)}></div>
        
        <div className="absolute right-0 top-0 h-full w-80 bg-[#0C1220] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-white/5">
              <div className="flex items-center gap-2">
                <img src={logoWhite} alt="Dijital Hezarfen" className="h-7 w-auto object-contain" />
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => onLanguageChange(lang === 'tr' ? 'en' : 'tr')}
                  className="px-2.5 py-1 rounded-md text-[10px] font-extrabold border border-white/10 text-gray-300 hover:text-white uppercase tracking-wider bg-white/5"
                >
                  {lang === 'tr' ? 'EN' : 'TR'}
                </button>
                <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg text-gray-400 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mobile links group structure */}
            <div className="mt-6 space-y-4 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
              
              {/* Programlar */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-cyber-cyan uppercase tracking-wider px-2">{t.programs}</div>
                <a href="#" onClick={(e) => handleNavClick(e, '/akademi/girisimcilik-tuneli')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">{t.tunnel}</a>
                <a href="#" onClick={(e) => handleNavClick(e, '/uygulama')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">{t.appServices}</a>
                <a href="#" onClick={(e) => handleNavClick(e, '/buyume-yatirim')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">{t.growthVenture}</a>
              </div>

              {/* Medya & Buluşmalar */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <div className="text-[10px] font-bold text-violet-400 uppercase tracking-wider px-2">{t.publications}</div>
                <a href="#" onClick={(e) => handleNavClick(e, '/medya')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">{t.mediaDesc}</a>
                <a href="#" onClick={(e) => handleNavClick(e, '/etkinlikler')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">{t.eventsDesc}</a>
                <a href="#" onClick={(e) => handleNavClick(e, '/icerikler')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">{t.blogDesc}</a>
              </div>

              {/* Hakkımızda */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <div className="text-[10px] font-bold text-pink-400 uppercase tracking-wider px-2">{t.about}</div>
                <a href="#" onClick={(e) => handleNavClick(e, '/dijital-hezarfen')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">{t.vision}</a>
                <a href="#" onClick={(e) => handleNavClick(e, '/hakkimizda')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">{t.teamDesc}</a>
              </div>

              {/* Kariyer */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <div className="text-[10px] font-bold text-amber-500 uppercase tracking-wider px-2">{t.careerLabel}</div>
                <button onClick={() => handleApplyClick('girisim')} className="w-full flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold text-left">{t.bothCareerLabel}</button>
                <button onClick={() => handleApplyClick('tunel')} className="w-full flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold text-left">{t.lookingForJob}</button>
              </div>

            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <button
              onClick={(e) => handleNavClick(e, '/basvur')}
              className="w-full py-3.5 rounded-xl font-bold bg-gradient-cyber text-[#0B0F19] text-center shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 cursor-pointer"
            >
              {t.applyBtn}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
