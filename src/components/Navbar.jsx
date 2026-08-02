import React, { useState, useRef } from 'react';
import { Menu, X, ChevronDown, BookOpen, Layers, TrendingUp, HelpCircle, Calendar, FileText, Users, Award, Briefcase, Star, UserPlus } from 'lucide-react';
import logoWhite from '../../logo/Dijital Hezarfen (8).png';

export default function Navbar({ onOpenApplyModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null); // 'programlar', 'medya', 'hakkimizda', 'kariyer'
  const timeoutRef = useRef(null);

  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setActiveMenu(menuName);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 200); // 200ms delay to keep the menu open during transitions
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveMenu(null);
    const element = document.querySelector(path);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
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
            <a href="#" className="flex items-center gap-2 group" onClick={(e) => handleNavClick(e, '#root')}>
              <img src={logoWhite} alt="Dijital Hezarfen" className="h-8 w-auto object-contain group-hover:opacity-90 transition-opacity" />
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-2">
            
            {/* Mega Menu 1: Programlar & Hizmetler */}
            <div 
              className="relative"
              onMouseEnter={() => handleMouseEnter('programlar')}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`flex items-center gap-1 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeMenu === 'programlar' ? 'text-cyber-cyan bg-white/5' : 'text-gray-300 hover:text-white hover:bg-white/3'
              }`}>
                <span>Programlar & Hizmetler</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeMenu === 'programlar' ? 'rotate-180 text-cyber-cyan' : ''}`} />
              </button>

              {/* Mega Dropdown Wrapper - uses padding top to bridge the gap contiguous to parent */}
              {activeMenu === 'programlar' && (
                <div className="absolute top-full left-1/2 -translate-x-[35%] pt-4 w-[850px] z-50">
                  <div className="rounded-2xl bg-[#0F1424] border border-white/10 p-6 shadow-2xl animate-fade-in grid grid-cols-12 gap-6" onMouseEnter={() => handleMouseEnter('programlar')}>
                    
                    {/* Columns of links */}
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-cyber-cyan uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />
                          Akademi
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#akademi" onClick={(e) => handleNavClick(e, '#akademi')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Girişimcilik Tüneli</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">3-5 aylık yoğun kurucu yetiştirme programı</span>
                            </a>
                          </li>
                          <li>
                            <a href="#akademi-diger" onClick={(e) => handleNavClick(e, '#akademi-diger')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Modüler Eğitimler</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Teknoloji, satış, finans ve liderlik</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Layers className="w-4 h-4" />
                          Uygulama
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#uygulama" onClick={(e) => handleNavClick(e, '#uygulama')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Yazılım & AI MVP</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Çalışan prototip, SaaS ve AI otomasyonları</span>
                            </a>
                          </li>
                          <li>
                            <a href="#uygulama" onClick={(e) => handleNavClick(e, '#uygulama')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Büyüme & Operasyon</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Pazarlama, satış ve finans altyapı işleri</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <TrendingUp className="w-4 h-4" />
                          Büyüme & Yatırım
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#buyume" onClick={(e) => handleNavClick(e, '#buyume')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Yatırıma Hazırlık</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Pitch deck, finansal model, mock pitch</span>
                            </a>
                          </li>
                          <li>
                            <a href="#buyume" onClick={(e) => handleNavClick(e, '#buyume')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Küresel Büyüme</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Growth hacking, globalleşme modelleri</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Right Column Visual Banner */}
                    <div className="col-span-4 rounded-xl bg-gradient-to-br from-cyan-950 via-slate-900 to-violet-950 p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full filter blur-xl"></div>
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyber-cyan flex items-center justify-center mb-3">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                        </div>
                        <h5 className="text-xs font-bold text-white">Dijital Hezarfen Ekosistemi</h5>
                        <p className="text-[9px] text-gray-400 mt-1 leading-normal">Fikirden global büyümeye giden tüm yolda, ihtiyaç duyduğunuz akademi ve uygulama gücü tek bir çatı altında.</p>
                      </div>
                      <button 
                        onClick={() => handleApplyClick('girisim')}
                        className="mt-4 py-2 w-full text-center text-[10px] font-bold text-cyber-cyan bg-cyan-500/10 rounded-lg hover:bg-cyan-500/20 transition-all cursor-pointer"
                      >
                        Ekosistemi Keşfet
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
                <span>Yayınlar & Etkinlikler</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeMenu === 'medya' ? 'rotate-180 text-cyber-cyan' : ''}`} />
              </button>

              {/* Mega Dropdown Wrapper */}
              {activeMenu === 'medya' && (
                <div className="absolute top-full left-1/2 -translate-x-[40%] pt-4 w-[800px] z-50">
                  <div className="rounded-2xl bg-[#0F1424] border border-white/10 p-6 shadow-2xl animate-fade-in grid grid-cols-12 gap-6" onMouseEnter={() => handleMouseEnter('medya')}>
                    
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <FileText className="w-4 h-4" />
                          Medya
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#medya" onClick={(e) => handleNavClick(e, '#medya')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">YouTube Programları</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Kurucu röportajları ve analiz videoları</span>
                            </a>
                          </li>
                          <li>
                            <a href="#medya" onClick={(e) => handleNavClick(e, '#medya')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Podcast Serileri</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Sesli girişimcilik deneyimleri ve dersleri</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Calendar className="w-4 h-4" />
                          Etkinlikler
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#etkinlikler" onClick={(e) => handleNavClick(e, '#etkinlikler')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Demo Day Buluşmaları</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Girişim sunumları ve yatırımcı görüşmeleri</span>
                            </a>
                          </li>
                          <li>
                            <a href="#etkinlikler" onClick={(e) => handleNavClick(e, '#etkinlikler')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Konferans & Atölye</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Growth Lab ve founder session günleri</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" />
                          Blog (Yeni)
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Makaleler & Rehberler</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Yazılım, AI, pazarlama ve hukuk yazıları</span>
                            </a>
                          </li>
                          <li>
                            <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Başarı Hikâyeleri</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Büyüyen startup vaka çalışmaları</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Visual Preview */}
                    <div className="col-span-4 rounded-xl bg-gradient-to-br from-violet-950 via-slate-900 to-fuchsia-950 p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-violet-500/5 rounded-full filter blur-xl"></div>
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center mb-3">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 100-6 3 3 0 000 6z" /></svg>
                        </div>
                        <h5 className="text-xs font-bold text-white">Bilgi & İletişim Yayında</h5>
                        <p className="text-[9px] text-gray-400 mt-1 leading-normal">Derslerin dışına taşan podcast, video serileri ve blog rehberleriyle bilgiye her an erişim sağlayın.</p>
                      </div>
                      <button 
                        onClick={(e) => handleNavClick(e, '#blog')}
                        className="mt-4 py-2 w-full text-center text-[10px] font-bold text-violet-400 bg-violet-500/10 rounded-lg hover:bg-violet-500/20 transition-all cursor-pointer"
                      >
                        Blogu İncele
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
                <span>Hakkımızda</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeMenu === 'hakkimizda' ? 'rotate-180 text-cyber-cyan' : ''}`} />
              </button>

              {/* Mega Dropdown Wrapper */}
              {activeMenu === 'hakkimizda' && (
                <div className="absolute top-full left-1/2 -translate-x-[45%] pt-4 w-[800px] z-50">
                  <div className="rounded-2xl bg-[#0F1424] border border-white/10 p-6 shadow-2xl animate-fade-in grid grid-cols-12 gap-6" onMouseEnter={() => handleMouseEnter('hakkimizda')}>
                    
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-pink-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          Hakkımızda
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#nedir" onClick={(e) => handleNavClick(e, '#nedir')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Vizyon & Yaklaşım</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Yenilikçi girişimcilik ve çalışma modelimiz</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Award className="w-4 h-4" />
                          Ekip & Süreç
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#hakkimizda" onClick={(e) => handleNavClick(e, '#hakkimizda')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Ekibimiz & Uzmanlar</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Tecrübeli mentör ve uzman kadromuz</span>
                            </a>
                          </li>
                          <li>
                            <a href="#akademi" onClick={(e) => handleNavClick(e, '#akademi')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Nasıl Kabul Edilir?</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Değerlendirme, mülakat ve kabul süreçleri</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Briefcase className="w-4 h-4" />
                          Yatırımcı Portföyü
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#buyume" onClick={(e) => handleNavClick(e, '#buyume')} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Yatırımcı Ağı</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">İş birliği yaptığımız melek ağları & fonlar</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Visual Preview */}
                    <div className="col-span-4 rounded-xl bg-gradient-to-br from-pink-950 via-slate-900 to-rose-950 p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-pink-500/5 rounded-full filter blur-xl"></div>
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-400 flex items-center justify-center mb-3">
                          <Award className="w-4 h-4" />
                        </div>
                        <h5 className="text-xs font-bold text-white">Global Network</h5>
                        <p className="text-[9px] text-gray-400 mt-1 leading-normal">Uzman ekibimiz, iş ortaklarımız ve geniş yatırımcı ağımızla girişiminizin arkasındaki itici güç oluyoruz.</p>
                      </div>
                      <button 
                        onClick={(e) => handleNavClick(e, '#hakkimizda')}
                        className="mt-4 py-2 w-full text-center text-[10px] font-bold text-pink-400 bg-pink-500/10 rounded-lg hover:bg-pink-500/20 transition-all cursor-pointer"
                      >
                        Bizi Tanıyın
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
                <span>Kariyer</span>
                <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${activeMenu === 'kariyer' ? 'rotate-180 text-cyber-cyan' : ''}`} />
              </button>

              {/* Mega Dropdown Wrapper */}
              {activeMenu === 'kariyer' && (
                <div className="absolute top-full left-1/2 -translate-x-[50%] pt-4 w-[800px] z-50">
                  <div className="rounded-2xl bg-[#0F1424] border border-white/10 p-6 shadow-2xl animate-fade-in grid grid-cols-12 gap-6" onMouseEnter={() => handleMouseEnter('kariyer')}>
                    
                    <div className="col-span-8 grid grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <Users className="w-4 h-4" />
                          Yetenek Arayışı
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleApplyClick('girisim'); }} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Ekip Arıyorum</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Girişiminiz için yazılımcı, pazarlamacı veya uzman ilanı</span>
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
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">İş Arıyorum</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Ekosistem startup'larındaki açık iş ve staj imkanları</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-xs font-bold text-violet-400 uppercase tracking-wider mb-4 flex items-center gap-1.5">
                          <UserPlus className="w-4 h-4" />
                          Ortaklık
                        </h4>
                        <ul className="space-y-3.5">
                          <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); handleApplyClick('girisim'); }} className="block group">
                              <span className="text-xs font-bold text-white group-hover:text-cyber-cyan transition-colors block">Co-founder Arıyorum</span>
                              <span className="text-[10px] text-gray-400 mt-0.5 block leading-tight">Tamamlayıcı yeteneklerde ortak arayan kurucular</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Visual Preview */}
                    <div className="col-span-4 rounded-xl bg-gradient-to-br from-cyan-950 via-slate-900 to-amber-950 p-4 border border-white/5 flex flex-col justify-between relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full filter blur-xl"></div>
                      <div>
                        <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center mb-3">
                          <UserPlus className="w-4 h-4" />
                        </div>
                        <h5 className="text-xs font-bold text-white">Co-founder Eşleşmesi</h5>
                        <p className="text-[9px] text-gray-400 mt-1 leading-normal">Bir projeniz mi var veya bir startup'a kurucu ortak olarak katılmak mı istiyorsunuz? Başvurunuzu yapın, eşleştirelim.</p>
                      </div>
                      <button 
                        onClick={() => handleApplyClick('girisim')}
                        className="mt-4 py-2 w-full text-center text-[10px] font-bold text-amber-400 bg-amber-500/10 rounded-lg hover:bg-amber-500/20 transition-all cursor-pointer"
                      >
                        Kayıt Formu
                      </button>
                    </div>

                  </div>
                </div>
              )}
            </div>

          </div>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={() => handleApplyClick('genel')}
              className="px-6 py-2.5 rounded-xl font-semibold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer font-sans"
            >
              Başvur
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
              <button onClick={() => setIsOpen(false)} className="p-2 rounded-lg text-gray-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile links group structure */}
            <div className="mt-6 space-y-4 overflow-y-auto max-h-[calc(100vh-220px)] pr-2">
              
              {/* Programlar */}
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-cyber-cyan uppercase tracking-wider px-2">Programlar & Hizmetler</div>
                <a href="#akademi" onClick={(e) => handleNavClick(e, '#akademi')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">Girişimcilik Tüneli</a>
                <a href="#uygulama" onClick={(e) => handleNavClick(e, '#uygulama')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">Uygulama Hizmetleri</a>
                <a href="#buyume" onClick={(e) => handleNavClick(e, '#buyume')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">Büyüme & Yatırım</a>
              </div>

              {/* Medya & Buluşmalar */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <div className="text-[10px] font-bold text-violet-400 uppercase tracking-wider px-2">Yayınlar & Etkinlikler</div>
                <a href="#medya" onClick={(e) => handleNavClick(e, '#medya')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">YouTube & Podcast</a>
                <a href="#etkinlikler" onClick={(e) => handleNavClick(e, '#etkinlikler')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">Demo Day & Etkinlikler</a>
                <a href="#blog" onClick={(e) => handleNavClick(e, '#blog')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">Makaleler & Blog</a>
              </div>

              {/* Hakkımızda */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <div className="text-[10px] font-bold text-pink-400 uppercase tracking-wider px-2">Hakkımızda</div>
                <a href="#nedir" onClick={(e) => handleNavClick(e, '#nedir')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">Vizyon & Yaklaşım</a>
                <a href="#hakkimizda" onClick={(e) => handleNavClick(e, '#hakkimizda')} className="flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold">Ekibimiz & Kabul Süreci</a>
              </div>

              {/* Kariyer */}
              <div className="space-y-1 pt-2 border-t border-white/5">
                <div className="text-[10px] font-bold text-amber-500 uppercase tracking-wider px-2">Kariyer & Fırsatlar</div>
                <button onClick={() => handleApplyClick('girisim')} className="w-full flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold text-left">Ekip / Co-founder Arıyorum</button>
                <button onClick={() => handleApplyClick('tunel')} className="w-full flex items-center gap-3 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 text-xs font-semibold text-left">İş Arıyorum</button>
              </div>

            </div>
          </div>

          <div className="pt-6 border-t border-white/5">
            <button
              onClick={() => handleApplyClick('genel')}
              className="w-full py-3.5 rounded-xl font-bold bg-gradient-cyber text-[#0B0F19] text-center shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-300 cursor-pointer"
            >
              Başvur
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
