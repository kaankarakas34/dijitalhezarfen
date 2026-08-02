import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import logoBlue from '../../logo/Dijital Hezarfen (9).png';

const Github = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Twitter = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const Linkedin = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Youtube = (props) => (
  <svg className={props.className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25a29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
  </svg>
);

export default function Footer({ onOpenApplyModal, onNavigate, lang }) {
  const isTr = lang === 'tr';

  const t = {
    ctaTitle: isTr ? 'Fikrinizin bir girişime, girişiminizin büyüyen bir şirkete dönüşmesi için ilk adımı atın.' : 'Take the first step to turn your idea into a venture, and your venture into a growing company.',
    ctaDesc: isTr ? 'Dijital Hezarfen ekosistemi, ihtiyacınız olan eğitim, uygulama gücü ve network\'ü tek bir çatı altında sunar. Girişim tipinize göre en uygun programı seçip hemen başvurun.' : 'The Dijital Hezarfen ecosystem offers the training, execution power, and network you need under one roof. Choose the best program for your startup type and apply today.',
    btnVenture: isTr ? 'Girişimin İçin Başvur' : 'Apply for Your Venture',
    btnTunnel: isTr ? 'Girişimcilik Tüneli\'ne Başvur' : 'Apply to Entrepreneur Tunnel',
    btnCourses: isTr ? 'Eğitimleri İncele' : 'Explore Programs',
    btnCorporate: isTr ? 'Kurumsal Çözüm Talep Et' : 'Request Corporate Solution',
    aboutText: isTr ? 'Dijital Hezarfen; girişimcileri yetiştiren, fikirleri çalışan girişimlere dönüştüren ve şirketleri sürdürülebilir büyümeye taşıyan akademi, uygulama ve büyüme ekosistemidir.' : 'Dijital Hezarfen is an academy, execution, and growth ecosystem that trains entrepreneurs, transforms ideas into working ventures, and leads companies to sustainable growth.',
    colLinks: isTr ? 'Hızlı Bağlantılar' : 'Quick Links',
    colResources: isTr ? 'Kaynaklar' : 'Resources',
    colCorporate: isTr ? 'Kurumsal' : 'Corporate',
    privacy: isTr ? 'Gizlilik Politikası' : 'Privacy Policy',
    terms: isTr ? 'Kullanım Şartları' : 'Terms of Use',
    kvkk: isTr ? 'KVKK Aydınlatma Metni' : 'Data Protection (GDPR)',
    rights: isTr ? 'Tüm hakları saklıdır.' : 'All rights reserved.'
  };

  const handleScrollToTop = (e) => {
    e.preventDefault();
    onNavigate('/');
  };

  const footerLinks = {
    [t.colLinks]: [
      { name: isTr ? 'Girişimler İçin' : 'For Startups', path: '/girisimler' },
      { name: isTr ? 'Girişimcilik Tüneli' : 'Entrepreneur Tunnel', path: '/akademi/girisimcilik-tuneli' },
      { name: isTr ? 'Akademi & Eğitimler' : 'Academy & Courses', path: '/akademi' },
      { name: isTr ? 'Uygulama Hizmetleri' : 'Application Services', path: '/uygulama' },
      { name: isTr ? 'Büyüme & Yatırım' : 'Growth & Venture', path: '/buyume-yatirim' }
    ],
    [t.colResources]: [
      { name: isTr ? 'YouTube & Podcast' : 'YouTube & Podcast', path: '/medya' },
      { name: isTr ? 'Demo Day & Etkinlikler' : 'Demo Days & Events', path: '/etkinlikler' },
      { name: isTr ? 'Makaleler & Blog' : 'Articles & Blog', path: '/icerikler' },
      { name: isTr ? 'Sık Sorulan Sorular' : 'FAQ', path: '/sik-sorulan-sorular' }
    ],
    [t.colCorporate]: [
      { name: isTr ? 'Hakkımızda' : 'About Us', path: '/hakkimizda' },
      { name: isTr ? 'Kurumsal Çözümler' : 'Corporate Solutions', path: '/kurumsal' },
      { name: isTr ? 'İletişim & Konum' : 'Contact & Location', path: '/iletisim' }
    ]
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="relative bg-[#080B12] border-t border-white/5 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-96 h-96 bg-violet-600/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      {/* Section 13: Final CTA */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center relative z-10 border-b border-white/5">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-6 font-sans max-w-3xl mx-auto leading-tight">
          {t.ctaTitle}
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto mb-10 text-sm sm:text-base leading-relaxed font-light">
          {t.ctaDesc}
        </p>
        
        {/* Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto font-sans">
          <button
            onClick={() => onOpenApplyModal('girisim')}
            className="flex items-center justify-between px-6 py-4 rounded-xl font-semibold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
          >
            <span>{t.btnVenture}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
          
          <button
            onClick={() => onOpenApplyModal('tunel')}
            className="flex items-center justify-between px-6 py-4 rounded-xl font-semibold text-sm bg-gradient-violet text-white hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
          >
            <span>{t.btnTunnel}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onNavigate('/akademi/egitimler')}
            className="flex items-center justify-between px-6 py-4 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
          >
            <span>{t.btnCourses}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>

          <button
            onClick={() => onOpenApplyModal('kurumsal')}
            className="flex items-center justify-between px-6 py-4 rounded-xl font-semibold text-sm bg-white/5 border border-white/10 hover:border-white/20 text-white hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-0.5 group cursor-pointer"
          >
            <span>{t.btnCorporate}</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Logo & About */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#" className="flex items-center gap-2.5 group" onClick={handleScrollToTop}>
              <img src={logoBlue} alt="Dijital Hezarfen" className="h-8 w-auto object-contain group-hover:opacity-90 transition-opacity" />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light">
              {t.aboutText}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center space-x-3.5 pt-2">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyber-cyan transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyber-cyan transition-all duration-300">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyber-cyan transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:border-cyan-500/30 text-gray-400 hover:text-cyber-cyan transition-all duration-300">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.keys(footerLinks).map((columnKey) => (
            <div key={columnKey} className="space-y-4">
              <h3 className="text-white text-xs font-bold uppercase tracking-wider">{columnKey}</h3>
              <ul className="space-y-2.5">
                {footerLinks[columnKey].map((link) => (
                  <li key={link.name}>
                    <a
                      href="#"
                      onClick={(e) => handleNavClick(e, link.path)}
                      className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Dijital Hezarfen. {t.rights}</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">{t.privacy}</a>
            <a href="#" className="hover:text-white transition-colors">{t.terms}</a>
            <a href="#" className="hover:text-white transition-colors">{t.kvkk}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
