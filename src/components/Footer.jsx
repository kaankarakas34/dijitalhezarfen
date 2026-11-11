import React from 'react';
import { ArrowUpRight } from 'lucide-react';
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
    ctaTitle: isTr
      ? 'Girişiminiz için doğru program veya medya iş birliğiyle ilerleyin.'
      : 'Move forward with the right startup program or media collaboration.',
    ctaDesc: isTr
      ? 'Akademi, uygulama ve büyüme süreçlerinde ekibimizle doğrudan iletişime geçebilir veya başvurunuzu iletebilirsiniz.'
      : 'Connect directly with our team across academy, execution, and growth tracks, or submit an application.',
    btnVenture: isTr ? 'Başvuru Yap' : 'Apply Now',
    btnCourses: isTr ? 'Programları İncele' : 'Explore Programs',
    aboutText: isTr
      ? 'Dijital Hezarfen; yayınları, akademi programları, uygulama ekipleri ve büyüme odağıyla girişimcilik ekosisteminde çalışan çok disiplinli bir yapıdır.'
      : 'Dijital Hezarfen is a multidisciplinary platform uniting publications, academy programs, execution teams, and venture growth.',
    colLinks: isTr ? 'Programlar' : 'Programs',
    colResources: isTr ? 'Yayın & Medya' : 'Media & Content',
    colCorporate: isTr ? 'Kurumsal' : 'Organization',
    privacy: isTr ? 'Gizlilik Politikası' : 'Privacy Policy',
    terms: isTr ? 'Kullanım Şartları' : 'Terms of Use',
    kvkk: isTr ? 'KVKK Aydınlatma Metni' : 'Data Protection',
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
      { name: isTr ? 'Akademi' : 'Academy', path: '/akademi' },
      { name: isTr ? 'Uygulama Hizmetleri' : 'Application Services', path: '/uygulama' },
      { name: isTr ? 'Büyüme & Yatırım' : 'Growth & Venture', path: '/buyume-yatirim' }
    ],
    [t.colResources]: [
      { name: isTr ? 'Yayınlarımız' : 'Publications', path: '/yayinlar' },
      { name: isTr ? 'Medya & Video' : 'Media & Video', path: '/medya' },
      { name: isTr ? 'Sık Sorulan Sorular' : 'FAQ', path: '/sik-sorulan-sorular' }
    ],
    [t.colCorporate]: [
      { name: isTr ? 'Ekosistem & Yaklaşım' : 'Ecosystem & Approach', path: '/dijital-hezarfen' },
      { name: isTr ? 'Hakkımızda' : 'About Us', path: '/hakkimizda' },
      { name: isTr ? 'Kurumsal Çözümler' : 'Corporate Solutions', path: '/kurumsal' },
      { name: isTr ? 'İletişim' : 'Contact', path: '/iletisim' }
    ]
  };

  const handleNavClick = (e, path) => {
    e.preventDefault();
    onNavigate(path);
  };

  return (
    <footer className="relative bg-[#080A0F] border-t border-white/10">
      {/* Closing Strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 border-b border-white/10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
        <div className="max-w-2xl space-y-2">
          <h2 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#F4F4F0] leading-tight">
            {t.ctaTitle}
          </h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            {t.ctaDesc}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => onOpenApplyModal('girisim')}
            className="px-5 py-2.5 rounded-md font-semibold text-sm bg-cyan-400 text-[#080A0F] hover:bg-cyan-300 transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>{t.btnVenture}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => onNavigate('/akademi')}
            className="px-5 py-2.5 rounded-md font-semibold text-sm bg-[#121620] border border-white/15 hover:border-white/30 text-white transition-colors inline-flex items-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            <span>{t.btnCourses}</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            <a href="#/" className="inline-flex items-center gap-2.5 group" onClick={handleScrollToTop}>
              <img
                src={logoBlue}
                alt="Dijital Hezarfen"
                className="h-8 w-auto object-contain group-hover:opacity-90 transition-opacity"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {t.aboutText}
            </p>

            <div className="flex items-center space-x-3 pt-1">
              <a
                href="https://www.youtube.com/channel/UC0xVK9RzlDyFcVMm_iGiARA"
                target="_blank"
                rel="noreferrer"
                aria-label="Dijital Hezarfen YouTube"
                className="p-2.5 rounded-md bg-[#10141C] border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 rounded-md bg-[#10141C] border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X / Twitter"
                className="p-2.5 rounded-md bg-[#10141C] border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="p-2.5 rounded-md bg-[#10141C] border border-white/10 hover:border-cyan-400/50 text-gray-300 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {Object.keys(footerLinks).map((columnKey) => (
            <div key={columnKey} className="space-y-4">
              <h3 className="font-mono-meta text-white text-[11px] font-semibold uppercase tracking-wider">
                {columnKey}
              </h3>
              <ul className="space-y-2.5">
                {footerLinks[columnKey].map((link) => (
                  <li key={link.name}>
                    <a
                      href={`#${link.path}`}
                      onClick={(e) => handleNavClick(e, link.path)}
                      className="text-gray-400 hover:text-white text-xs sm:text-sm transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 text-xs text-gray-500">
          <a href="/otomasyon" className="hover:text-gray-300 transition-colors">
            {isTr ? 'Dijital Hezarfen Otomasyon' : 'Dijital Hezarfen Automation'}
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Dijital Hezarfen. {t.rights}</p>
          <div className="flex flex-wrap gap-6">
            <a href="#/iletisim" onClick={(e) => handleNavClick(e, '/iletisim')} className="hover:text-white transition-colors">
              {t.privacy}
            </a>
            <a href="#/iletisim" onClick={(e) => handleNavClick(e, '/iletisim')} className="hover:text-white transition-colors">
              {t.terms}
            </a>
            <a href="#/iletisim" onClick={(e) => handleNavClick(e, '/iletisim')} className="hover:text-white transition-colors">
              {t.kvkk}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
