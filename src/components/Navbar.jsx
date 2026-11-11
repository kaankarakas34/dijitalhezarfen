import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown, BookOpen, Layers, TrendingUp, Users, Award, UserPlus, Compass } from 'lucide-react';
import logoWhite from '../../logo/Dijital Hezarfen (8).png';

export default function Navbar({ onOpenApplyModal, onNavigate, lang, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const timeoutRef = useRef(null);

  const isTr = lang === 'tr';
  const t = {
    programs: isTr ? 'Programlar & Hizmetler' : 'Programs & Services',
    academy: isTr ? 'Akademi' : 'Academy',
    academyHome: isTr ? 'Akademi Ana Sayfa' : 'Academy Overview',
    academyHomeDesc: isTr ? 'Kurucu yetiştirme ve eğitim yapısı' : 'Founder training & learning tracks',
    tunnel: isTr ? 'Girişimcilik Tüneli' : 'Entrepreneur Tunnel',
    tunnelDesc: isTr ? '3-5 aylık yoğun kurucu yetiştirme programı' : '3-5 months intensive founder development',
    modular: isTr ? 'Modüler Eğitimler' : 'Modular Training',
    modularDesc: isTr ? 'Teknoloji, satış, finans ve liderlik' : 'Technology, sales, finance & leadership',
    application: isTr ? 'Uygulama' : 'Execution',
    mvp: isTr ? 'Yazılım & AI MVP' : 'Software & AI MVP',
    mvpDesc: isTr ? 'Çalışan prototip, SaaS ve AI otomasyonları' : 'Working prototype, SaaS & AI automation',
    appServices: isTr ? 'Uygulama Hizmetleri' : 'Application Services',
    appServicesDesc: isTr ? 'Pazarlama, satış ve finans altyapı işleri' : 'Marketing, sales & finance infrastructure',
    growthVenture: isTr ? 'Büyüme & Yatırım' : 'Growth & Venture',
    fundraising: isTr ? 'Yatırıma Hazırlık' : 'Fundraising Prep',
    fundraisingDesc: isTr ? 'Pitch deck, finansal model, mock pitch' : 'Pitch deck, financial model, mock pitch',
    globalGrowth: isTr ? 'Küresel Büyüme' : 'Global Growth',
    globalGrowthDesc: isTr ? 'Growth hacking, globalleşme modelleri' : 'Growth hacking, globalization models',
    whoFor: isTr ? 'Kimler İçin Çalışıyoruz?' : 'Who We Work With',
    forStartups: isTr ? 'Girişimler İçin (Fikirden Scale-up’a)' : 'For Startups (Idea to Scale-up)',
    forCorporate: isTr ? 'Kurumsal Çözümler' : 'Corporate Solutions',
    explore: isTr ? 'Ekosistemi Keşfet' : 'Explore Ecosystem',
    ekosistemTitle: isTr ? 'Dijital Hezarfen Ekosistemi' : 'Dijital Hezarfen Ecosystem',
    ekosistemDesc: isTr
      ? 'Fikirden küresel büyümeye giden yolda akademi, uygulama ve büyüme gücü tek çatı altında.'
      : 'Academy, execution, and growth power under one roof from idea to global scale.',

    publications: isTr ? 'Yayınlarımız' : 'Publications',
    media: isTr ? 'Medya' : 'Media',

    about: isTr ? 'Hakkımızda' : 'About Us',
    vision: isTr ? 'Ekosistem & Yaklaşım' : 'Ecosystem & Approach',
    visionDesc: isTr ? 'Çalışma modelimiz ve ana güçler' : 'Our operating model and core pillars',
    team: isTr ? 'Ekip & Süreç' : 'Team & Process',
    teamDesc: isTr ? 'Kurucu hikâyemiz ve uzman kadromuz' : 'Our founder story & experts',
    acceptance: isTr ? 'Sık Sorulan Sorular' : 'FAQ',
    acceptanceDesc: isTr ? 'Değerlendirme ve kabul süreçleri' : 'Assessment and acceptance criteria',
    investor: isTr ? 'Büyüme & Yatırım Ağı' : 'Growth & Investor Network',
    investorDesc: isTr ? 'Yatırım hazırlığı ve iş ortaklıkları' : 'Investor readiness and partnerships',
    knowUs: isTr ? 'Bizi Tanıyın' : 'Get to Know Us',
    networkTitle: isTr ? 'Dijital Hezarfen Hakkında' : 'About Dijital Hezarfen',
    networkDesc: isTr
      ? 'Uzman ekibimiz, iş ortaklarımız ve yayınlarımızla girişimlerin büyüme yolculuğunu destekliyoruz.'
      : 'Supporting startup growth through our specialist teams, partner network, and media.',

    careers: isTr ? 'Kariyer' : 'Careers',
    talent: isTr ? 'Yetenek Arayışı' : 'Talent Search',
    lookingForTeam: isTr ? 'Ekip Arıyorum' : 'Looking for Team',
    lookingForTeamDesc: isTr ? 'Girişiminiz için yazılımcı, pazarlamacı veya uzman ilanı' : 'Post tech, marketing or expert roles',
    lookingForJob: isTr ? 'İş Arıyorum' : 'Looking for Job',
    lookingForJobDesc: isTr ? 'Ekosistem girişimlerindeki açık iş ve staj imkânları' : 'Job and internship openings',
    partnership: isTr ? 'Ortaklık' : 'Partnership',
    lookingForFounder: isTr ? 'Co-founder Arıyorum' : 'Looking for Co-founder',
    lookingForFounderDesc: isTr ? 'Tamamlayıcı yeteneklerde ortak arayan kurucular' : 'Connect with complementary co-founders',
    cofounderMatchTitle: isTr ? 'Co-founder Eşleşmesi' : 'Co-founder Matching',
    cofounderMatchDesc: isTr
      ? 'Bir projeniz mi var veya bir girişime kurucu ortak olarak katılmak mı istiyorsunuz?'
      : 'Have a project or want to join a startup as a co-founder?',
    formLabel: isTr ? 'Kayıt Formu' : 'Registration Form',

    applyBtn: isTr ? 'Başvur' : 'Apply',
    careerLabel: isTr ? 'Kariyer & Fırsatlar' : 'Careers & Opportunities',
    bothCareerLabel: isTr ? 'Ekip / Co-founder Arıyorum' : 'Looking for Team / Co-founder'
  };

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 180);
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
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#080A0F]/95 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <a href="#/" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '/')}>
              <img
                src={logoWhite}
                alt="Dijital Hezarfen"
                className="h-7 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
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
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === 'programlar' ? null : 'programlar')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeMenu === 'programlar' ? 'text-cyan-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{t.programs}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    activeMenu === 'programlar' ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>

              {activeMenu === 'programlar' && (
                <div className="absolute top-full left-1/2 -translate-x-[30%] pt-3 w-[860px] z-50">
                  <div
                    className="rounded-lg bg-[#0E1219] border border-white/12 p-6 shadow-2xl grid grid-cols-12 gap-6"
                    onMouseEnter={() => handleMouseEnter('programlar')}
                  >
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-mono-meta text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                          <BookOpen className="w-3.5 h-3.5" />
                          {t.academy}
                        </h4>
                        <ul className="space-y-3">
                          <li>
                            <a href="#/akademi" onClick={(e) => handleNavClick(e, '/akademi')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.academyHome}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.academyHomeDesc}</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#/akademi/girisimcilik-tuneli"
                              onClick={(e) => handleNavClick(e, '/akademi/girisimcilik-tuneli')}
                              className="block group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.tunnel}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.tunnelDesc}</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#/akademi/egitimler"
                              onClick={(e) => handleNavClick(e, '/akademi/egitimler')}
                              className="block group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.modular}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.modularDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono-meta text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          {t.application}
                        </h4>
                        <ul className="space-y-3">
                          <li>
                            <a
                              href="#/uygulama/yazilim-mvp"
                              onClick={(e) => handleNavClick(e, '/uygulama/yazilim-mvp')}
                              className="block group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.mvp}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.mvpDesc}</span>
                            </a>
                          </li>
                          <li>
                            <a href="#/uygulama" onClick={(e) => handleNavClick(e, '/uygulama')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.appServices}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.appServicesDesc}</span>
                            </a>
                          </li>
                          <li className="pt-2 border-t border-white/8">
                            <span className="font-mono-meta text-[10px] uppercase tracking-wider text-gray-500 block mb-1.5">
                              {t.whoFor}
                            </span>
                            <a
                              href="#/girisimler"
                              onClick={(e) => handleNavClick(e, '/girisimler')}
                              className="text-xs font-semibold text-gray-200 hover:text-cyan-400 transition-colors block"
                            >
                              {t.forStartups}
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono-meta text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {t.growthVenture}
                        </h4>
                        <ul className="space-y-3">
                          <li>
                            <a
                              href="#/buyume-yatirim/yatirima-hazirlik"
                              onClick={(e) => handleNavClick(e, '/buyume-yatirim/yatirima-hazirlik')}
                              className="block group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.fundraising}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.fundraisingDesc}</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#/buyume-yatirim/uluslararasilasma"
                              onClick={(e) => handleNavClick(e, '/buyume-yatirim/uluslararasilasma')}
                              className="block group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.globalGrowth}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.globalGrowthDesc}</span>
                            </a>
                          </li>
                          <li className="pt-2 border-t border-white/8">
                            <a
                              href="#/kurumsal"
                              onClick={(e) => handleNavClick(e, '/kurumsal')}
                              className="text-xs font-semibold text-gray-200 hover:text-cyan-400 transition-colors block"
                            >
                              {t.forCorporate}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-span-4 rounded-lg bg-[#141923] p-4 border border-white/10 flex flex-col justify-between">
                      <div>
                        <div className="w-8 h-8 rounded-md bg-cyan-400/10 text-cyan-400 flex items-center justify-center mb-3">
                          <Compass className="w-4 h-4" />
                        </div>
                        <h5 className="text-xs font-bold text-white">{t.ekosistemTitle}</h5>
                        <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">{t.ekosistemDesc}</p>
                      </div>
                      <a
                        href="#/dijital-hezarfen"
                        onClick={(e) => handleNavClick(e, '/dijital-hezarfen')}
                        className="mt-4 py-2 w-full text-center text-xs font-semibold text-[#080A0F] bg-cyan-400 rounded-md hover:bg-cyan-300 transition-colors cursor-pointer block"
                      >
                        {t.explore}
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <a
              href="#/yayinlar"
              onClick={(e) => handleNavClick(e, '/yayinlar')}
              className="flex items-center px-3.5 py-2 rounded-md text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              {t.publications}
            </a>

            <a
              href="#/medya"
              onClick={(e) => handleNavClick(e, '/medya')}
              className="flex items-center px-3.5 py-2 rounded-md text-sm font-semibold text-gray-300 hover:text-white hover:bg-white/5 transition-colors whitespace-nowrap"
            >
              {t.media}
            </a>

            {/* Mega Menu 2: Hakkımızda */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('hakkimizda')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === 'hakkimizda' ? null : 'hakkimizda')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeMenu === 'hakkimizda' ? 'text-cyan-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{t.about}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    activeMenu === 'hakkimizda' ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>

              {activeMenu === 'hakkimizda' && (
                <div className="absolute top-full left-1/2 -translate-x-[45%] pt-3 w-[760px] z-50">
                  <div
                    className="rounded-lg bg-[#0E1219] border border-white/12 p-6 shadow-2xl grid grid-cols-12 gap-6"
                    onMouseEnter={() => handleMouseEnter('hakkimizda')}
                  >
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-mono-meta text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" />
                          {t.about}
                        </h4>
                        <ul className="space-y-3">
                          <li>
                            <a
                              href="#/dijital-hezarfen"
                              onClick={(e) => handleNavClick(e, '/dijital-hezarfen')}
                              className="block group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.vision}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.visionDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono-meta text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                          <Award className="w-3.5 h-3.5" />
                          {t.team}
                        </h4>
                        <ul className="space-y-3">
                          <li>
                            <a href="#/hakkimizda" onClick={(e) => handleNavClick(e, '/hakkimizda')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.team}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.teamDesc}</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#/sik-sorulan-sorular"
                              onClick={(e) => handleNavClick(e, '/sik-sorulan-sorular')}
                              className="block group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.acceptance}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.acceptanceDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono-meta text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                          <TrendingUp className="w-3.5 h-3.5" />
                          {t.growthVenture}
                        </h4>
                        <ul className="space-y-3">
                          <li>
                            <a
                              href="#/buyume-yatirim"
                              onClick={(e) => handleNavClick(e, '/buyume-yatirim')}
                              className="block group"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.investor}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.investorDesc}</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-span-4 rounded-lg bg-[#141923] p-4 border border-white/10 flex flex-col justify-between">
                      <div>
                        <h5 className="text-xs font-bold text-white">{t.networkTitle}</h5>
                        <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">{t.networkDesc}</p>
                      </div>
                      <button
                        type="button"
                        onClick={(e) => handleNavClick(e, '/hakkimizda')}
                        className="mt-4 py-2 w-full text-center text-xs font-semibold text-white bg-white/10 rounded-md hover:bg-white/15 transition-colors cursor-pointer"
                      >
                        {t.knowUs}
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Mega Menu 3: Kariyer */}
            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('kariyer')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                onClick={() => setActiveMenu(activeMenu === 'kariyer' ? null : 'kariyer')}
                className={`flex items-center gap-1 px-3.5 py-2 rounded-md text-sm font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeMenu === 'kariyer' ? 'text-cyan-400 bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{t.careers}</span>
                <ChevronDown
                  className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                    activeMenu === 'kariyer' ? 'rotate-180 text-cyan-400' : ''
                  }`}
                />
              </button>

              {activeMenu === 'kariyer' && (
                <div className="absolute top-full right-0 pt-3 w-[740px] z-50">
                  <div
                    className="rounded-lg bg-[#0E1219] border border-white/12 p-6 shadow-2xl grid grid-cols-12 gap-6"
                    onMouseEnter={() => handleMouseEnter('kariyer')}
                  >
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="font-mono-meta text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                          <Users className="w-3.5 h-3.5" />
                          {t.talent}
                        </h4>
                        <ul className="space-y-3">
                          <li>
                            <button
                              type="button"
                              onClick={() => handleApplyClick('girisim')}
                              className="block group text-left cursor-pointer"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.lookingForTeam}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.lookingForTeamDesc}</span>
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono-meta text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3.5">
                          {t.careers}
                        </h4>
                        <ul className="space-y-3">
                          <li>
                            <button
                              type="button"
                              onClick={() => handleApplyClick('tunel')}
                              className="block group text-left cursor-pointer"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.lookingForJob}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.lookingForJobDesc}</span>
                            </button>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-mono-meta text-[11px] font-semibold text-cyan-400 uppercase tracking-wider mb-3.5 flex items-center gap-1.5">
                          <UserPlus className="w-3.5 h-3.5" />
                          {t.partnership}
                        </h4>
                        <ul className="space-y-3">
                          <li>
                            <button
                              type="button"
                              onClick={() => handleApplyClick('girisim')}
                              className="block group text-left cursor-pointer"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-cyan-400 transition-colors block">
                                {t.lookingForFounder}
                              </span>
                              <span className="text-[11px] text-gray-400 mt-0.5 block leading-tight">{t.lookingForFounderDesc}</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="col-span-4 rounded-lg bg-[#141923] p-4 border border-white/10 flex flex-col justify-between">
                      <div>
                        <h5 className="text-xs font-bold text-white">{t.cofounderMatchTitle}</h5>
                        <p className="text-[11px] text-gray-400 mt-1.5 leading-relaxed">{t.cofounderMatchDesc}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleApplyClick('girisim')}
                        className="mt-4 py-2 w-full text-center text-xs font-semibold text-[#080A0F] bg-cyan-400 rounded-md hover:bg-cyan-300 transition-colors cursor-pointer"
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
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onLanguageChange(lang === 'tr' ? 'en' : 'tr')}
              className="px-2.5 py-1.5 rounded-md font-mono-meta text-xs font-semibold border border-white/12 hover:border-cyan-400/50 text-gray-300 hover:text-white transition-colors cursor-pointer uppercase"
            >
              {lang === 'tr' ? 'EN' : 'TR'}
            </button>
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '/basvur')}
              className="px-4 py-2 rounded-md font-semibold text-sm bg-cyan-400 text-[#080A0F] hover:bg-cyan-300 transition-colors cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              {t.applyBtn}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={() => setIsOpen(false)} />

        <div className="absolute right-0 top-0 h-full w-80 bg-[#0E1219] border-l border-white/10 p-6 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between pb-5 border-b border-white/10">
              <img src={logoWhite} alt="Dijital Hezarfen" className="h-6 w-auto object-contain" />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => onLanguageChange(lang === 'tr' ? 'en' : 'tr')}
                  className="px-2.5 py-1 rounded-md font-mono-meta text-[11px] font-semibold border border-white/15 text-gray-300 hover:text-white uppercase"
                >
                  {lang === 'tr' ? 'EN' : 'TR'}
                </button>
                <button
                  type="button"
                  aria-label="Kapat"
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-md text-gray-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="mt-5 space-y-4 overflow-y-auto max-h-[calc(100vh-200px)] pr-1">
              <div className="space-y-1">
                <div className="font-mono-meta text-[10px] font-semibold text-cyan-400 uppercase tracking-wider px-2">
                  {t.publications} & {t.media}
                </div>
                <a
                  href="#/yayinlar"
                  onClick={(e) => handleNavClick(e, '/yayinlar')}
                  className="block p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.publications}
                </a>
                <a
                  href="#/medya"
                  onClick={(e) => handleNavClick(e, '/medya')}
                  className="block p-2 rounded-md text-gray-200 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.media}
                </a>
              </div>

              <div className="space-y-1 pt-3 border-t border-white/10">
                <div className="font-mono-meta text-[10px] font-semibold text-cyan-400 uppercase tracking-wider px-2">
                  {t.programs}
                </div>
                <a
                  href="#/akademi"
                  onClick={(e) => handleNavClick(e, '/akademi')}
                  className="block p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.academy}
                </a>
                <a
                  href="#/akademi/girisimcilik-tuneli"
                  onClick={(e) => handleNavClick(e, '/akademi/girisimcilik-tuneli')}
                  className="block p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.tunnel}
                </a>
                <a
                  href="#/uygulama"
                  onClick={(e) => handleNavClick(e, '/uygulama')}
                  className="block p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.appServices}
                </a>
                <a
                  href="#/buyume-yatirim"
                  onClick={(e) => handleNavClick(e, '/buyume-yatirim')}
                  className="block p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.growthVenture}
                </a>
                <a
                  href="#/girisimler"
                  onClick={(e) => handleNavClick(e, '/girisimler')}
                  className="block p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.forStartups}
                </a>
                <a
                  href="#/kurumsal"
                  onClick={(e) => handleNavClick(e, '/kurumsal')}
                  className="block p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.forCorporate}
                </a>
              </div>

              <div className="space-y-1 pt-3 border-t border-white/10">
                <div className="font-mono-meta text-[10px] font-semibold text-cyan-400 uppercase tracking-wider px-2">
                  {t.about}
                </div>
                <a
                  href="#/dijital-hezarfen"
                  onClick={(e) => handleNavClick(e, '/dijital-hezarfen')}
                  className="block p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.vision}
                </a>
                <a
                  href="#/hakkimizda"
                  onClick={(e) => handleNavClick(e, '/hakkimizda')}
                  className="block p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold"
                >
                  {t.team}
                </a>
              </div>

              <div className="space-y-1 pt-3 border-t border-white/10">
                <div className="font-mono-meta text-[10px] font-semibold text-cyan-400 uppercase tracking-wider px-2">
                  {t.careerLabel}
                </div>
                <button
                  type="button"
                  onClick={() => handleApplyClick('girisim')}
                  className="w-full p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold text-left"
                >
                  {t.bothCareerLabel}
                </button>
                <button
                  type="button"
                  onClick={() => handleApplyClick('tunel')}
                  className="w-full p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold text-left"
                >
                  {t.lookingForJob}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-white/10">
            <button
              type="button"
              onClick={(e) => handleNavClick(e, '/basvur')}
              className="w-full py-3 rounded-md font-semibold text-sm bg-cyan-400 text-[#080A0F] hover:bg-cyan-300 transition-colors cursor-pointer"
            >
              {t.applyBtn}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
