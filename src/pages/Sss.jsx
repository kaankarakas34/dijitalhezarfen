import React, { useState, useEffect } from 'react';
import PageHero from '../components/UI/PageHero';
import { faqData, faqCategories } from '../data/faqData';
import { Search, HelpCircle, ArrowRight, Share2, ThumbsUp, ThumbsDown, Check, Info } from 'lucide-react';

export default function Sss({ onNavigate, onOpenApplyModal, lang }) {
  const isTr = lang === 'tr';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('genel');
  const [openQuestionId, setOpenQuestionId] = useState(null);
  const [copiedId, setCopiedId] = useState(null);
  const [votes, setVotes] = useState(() => {
    try {
      const stored = localStorage.getItem('dh_faq_votes');
      return stored ? JSON.parse(stored) : {};
    } catch {
      return {};
    }
  });

  // Localized UI Texts
  const t = {
    badge: isTr ? 'Yardım & Destek' : 'Help & Support',
    title: isTr ? 'Sık Sorulan Sorular' : 'Frequently Asked Questions',
    desc: isTr 
      ? 'Dijital Hezarfen, Girişimcilik Tüneli, eğitimlerimiz, MVP geliştirme, yapay zekâ, pazarlama, satış, finans, yatırım hazırlığı ve büyüme hizmetlerimiz hakkında merak edilenleri burada bulabilirsiniz. Aradığınız cevap listede yoksa bize ulaşarak ihtiyacınızı paylaşabilirsiniz.' 
      : 'Find everything you need to know about Dijital Hezarfen, the Entrepreneur Tunnel, our courses, MVP scoping, Generative AI integration, marketing workflows, sales, seed-stage finance, fundraising prep, and scaleup consulting. If you cannot find your answer, contact us.',
    btnHeroPrimary: isTr ? 'Programları İncele' : 'Explore Programs',
    btnHeroSecondary: isTr ? 'Başvuru Yap / Bize Ulaşın' : 'Apply / Contact Us',
    
    searchPlaceholder: isTr ? 'Soru başlığı, anahtar kelime veya içerik ara...' : 'Search questions, keywords, or topics...',
    searchNoResults: isTr ? 'Aramanıza uygun soru bulunamadı. Lütfen başka bir kelime deneyin.' : 'No matches found. Try entering a different keyword.',
    searchResultsTitle: isTr ? 'Arama Sonuçları' : 'Search Results',
    
    tabGenel: isTr ? 'Genel' : 'General',
    tabTunnel: isTr ? 'Girişimcilik Tüneli' : 'Tunnel',
    tabAkademi: isTr ? 'Akademi' : 'Academy',
    tabMvp: isTr ? 'MVP' : 'MVP',
    tabAi: isTr ? 'Yapay Zekâ' : 'AI & Sec',
    tabPazarlama: isTr ? 'Pazarlama' : 'Marketing',
    tabSatis: isTr ? 'Satış & CRM' : 'Sales',
    tabFinans: isTr ? 'Finans & Hukuk' : 'Finance & Law',
    tabGrowth: isTr ? 'Growth' : 'Growth',
    tabYatirim: isTr ? 'Yatırım' : 'Fundraising',
    tabKurumsal: isTr ? 'Kurumsal' : 'Corporate',
    tabIletisim: isTr ? 'İletişim & Pratik' : 'Contact & Info',
    
    faqH1: isTr ? 'Dijital Hezarfen Hakkında Sık Sorulan Sorular' : 'Frequently Asked Questions about Dijital Hezarfen',
    voteLabel: isTr ? 'Bu cevap faydalı oldu mu?' : 'Was this answer helpful?',
    voteYes: isTr ? 'Evet' : 'Yes',
    voteNo: isTr ? 'Hayır' : 'No',
    voteThanks: isTr ? 'Teşekkürler!' : 'Thanks!',
    shareText: isTr ? 'Bağlantıyı Kopyala' : 'Copy Share Link',
    shareCopied: isTr ? 'Kopyalandı!' : 'Link Copied!',

    // Contextual CTA blocks
    ctaTitle: isTr ? 'Bir sorunuz mu var?' : 'Have a question?',
    ctaActionText: isTr ? 'Bize Ulaşın' : 'Contact Us',

    // Final CTA Block
    finalCtaTitle: isTr ? 'Sorunuzun cevabını bulamadınız mı?' : 'Did you not find the answer to your question?',
    finalCtaDesc: isTr 
      ? 'Girişiminizin aşamasını, çözmek istediğiniz problemi ve hedeflediğiniz çıktıyı bize anlatın. Sizi uygun eğitim, program veya uzmanlık alanına yönlendirelim.'
      : 'Tell us your startup stage, the problem you are looking to solve, and your target outcome. We will guide you to the appropriate cohort or execution module.',
    btnFinalContact: isTr ? 'Bize Ulaşın' : 'Contact Us',
    btnFinalPrograms: isTr ? 'Programları İncele' : 'Explore Programs',
    btnFinalApply: isTr ? 'Başvuru Yap' : 'Apply Now'
  };

  // 12 Tabs required by PDF page 22 checklist
  const categories = [
    { id: 'genel', label: t.tabGenel, subcats: ['cat01', 'cat02', 'cat03'] },
    { id: 'tunnel', label: t.tabTunnel, subcats: ['cat05'] },
    { id: 'akademi', label: t.tabAkademi, subcats: ['cat06'] },
    { id: 'mvp', label: t.tabMvp, subcats: ['cat07'] },
    { id: 'ai', label: t.tabAi, subcats: ['cat08'] },
    { id: 'pazarlama', label: t.tabPazarlama, subcats: ['cat09'] },
    { id: 'satis', label: t.tabSatis, subcats: ['cat10'] },
    { id: 'finans', label: t.tabFinans, subcats: ['cat11'] },
    { id: 'growth', label: t.tabGrowth, subcats: ['cat13', 'cat15'] },
    { id: 'yatirim', label: t.tabYatirim, subcats: ['cat14'] },
    { id: 'kurumsal', label: t.tabKurumsal, subcats: ['cat16', 'cat12'] },
    { id: 'iletisim', label: t.tabIletisim, subcats: ['cat17'] }
  ];

  // Map category code to category label
  const getCategoryLabel = (catCode) => {
    const found = faqCategories.find(c => c.id === catCode);
    if (!found) return '';
    return isTr ? found.label : found.label
      .replace('Dijital Hezarfen Hakkında', 'About Dijital Hezarfen')
      .replace('Kimler İçin?', 'For Who?')
      .replace('Başvuru ve Başlangıç Süreci', 'Application & Setup')
      .replace('Fikir, Problem ve Pazar Doğrulama', 'Idea & Feasibility')
      .replace('Girişimcilik Tüneli', 'Entrepreneur Tunnel')
      .replace('Akademi ve Eğitimler', 'Academy & Training')
      .replace('MVP, Ürün ve Yazılım', 'MVP & Tech Development')
      .replace('Yapay Zekâ, Otomasyon ve Siber Güvenlik', 'GenAI, RPA & Sec')
      .replace('Pazarlama, Marka, İçerik ve Medya', 'Growth & Brand Media')
      .replace('Satış, CRM ve Müşteri Yönetimi', 'Sales, CRM & RevOps')
      .replace('Finans, Muhasebe ve Hukuk', 'Finance & Business Law')
      .replace('Yönetim, Liderlik, İnsan Kaynakları ve Organizasyon', 'Management & Leadership')
      .replace('Growth Hacking, Ölçüm ve Büyüme', 'Growth Hacking & Analytics')
      .replace('Girişim Aşamaları ve Yatırıma Hazırlık', 'Startup Stages & Funding')
      .replace('Uluslararasılaşma ve Scale-up Sonrası', 'Global Scaling & Post-Scaleup')
      .replace('Kurumsal Çözümler, Etkinlikler ve İş Birlikleri', 'Enterprise & Partnerships')
      .replace('Hizmet Modeli, İletişim ve Pratik Bilgiler', 'Support Model & Setup Info');
  };

  // Watch URL Hash to automatically scroll & open
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash;
      if (hash && hash.startsWith('#q-')) {
        const id = parseInt(hash.replace('#q-', ''), 10);
        if (!isNaN(id)) {
          setOpenQuestionId(id);
          setTimeout(() => {
            const el = document.getElementById(`q-container-${id}`);
            if (el) {
              el.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
          }, 400);
        }
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  // Handle voting
  const handleVote = (qId, voteType) => {
    const newVotes = { ...votes, [qId]: voteType };
    setVotes(newVotes);
    localStorage.setItem('dh_faq_votes', JSON.stringify(newVotes));
  };

  // Handle Copy Link
  const handleCopyLink = (e, qId) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}${window.location.pathname}#q-${qId}`;
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopiedId(qId);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  // Compile active list of QAs
  const getFilteredItems = () => {
    const query = searchQuery.toLowerCase().trim();
    
    // If searching, ignore tab filters and show matches globally
    if (query) {
      const matches = [];
      Object.keys(faqData).forEach((catCode) => {
        faqData[catCode].forEach((item) => {
          if (
            item.q.toLowerCase().includes(query) ||
            item.a.toLowerCase().includes(query)
          ) {
            matches.push({ ...item, categoryCode: catCode });
          }
        });
      });
      return matches;
    }

    // Otherwise, filter by subcats of the active tab
    const activeSubcats = categories.find(c => c.id === activeTab)?.subcats || [];
    const items = [];
    activeSubcats.forEach((catCode) => {
      if (faqData[catCode]) {
        faqData[catCode].forEach((item) => {
          items.push({ ...item, categoryCode: catCode });
        });
      }
    });
    return items;
  };

  const filteredItems = getFilteredItems();

  // Helper to highlight matching text
  const highlightText = (text, query) => {
    if (!query) return text;
    const parts = text.split(new RegExp(`(${query})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) => 
          part.toLowerCase() === query.toLowerCase() ? (
            <mark key={i} className="bg-cyan-500/30 text-white font-semibold rounded px-0.5">{part}</mark>
          ) : part
        )}
      </span>
    );
  };

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge={t.badge}
        title={t.title}
        description={t.desc}
        primaryCtaText={t.btnHeroPrimary}
        onPrimaryClick={() => onNavigate('/#buyume')}
        secondaryCtaText={t.btnHeroSecondary}
        onSecondaryClick={() => onNavigate('/basvur')}
      />

      {/* SEO H1 Header for Web Crawlers */}
      <h1 className="sr-only">{t.faqH1}</h1>

      {/* Search Input Section */}
      <section className="py-12 border-t border-white/5 bg-[#080B12] sticky top-[72px] z-30 shadow-md backdrop-blur-md bg-opacity-95">
        <div className="max-w-4xl mx-auto px-4 space-y-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full bg-[#0A0D17] border border-white/10 rounded-2xl py-4.5 pl-12 pr-6 text-sm sm:text-base text-white focus:outline-none focus:border-cyber-cyan focus:ring-1 focus:ring-cyber-cyan/30 transition-all font-light"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-gray-500 hover:text-white cursor-pointer"
              >
                Temizle
              </button>
            )}
          </div>

          {/* Categorized Tab Buttons (only visible when not searching) */}
          {!searchQuery && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10 pr-2">
              {categories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => {
                    setActiveTab(c.id);
                    setOpenQuestionId(null);
                  }}
                  className={`px-4.5 py-2.5 rounded-xl text-xs font-bold border transition-all cursor-pointer whitespace-nowrap ${
                    activeTab === c.id
                      ? 'bg-gradient-cyber text-[#0B0F19] border-transparent shadow'
                      : 'bg-white/3 border-white/5 text-gray-400 hover:text-white hover:border-white/15'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Accordion Questions List */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          
          {searchQuery && (
            <div className="text-sm font-semibold text-cyber-cyan mb-8 uppercase tracking-wider flex items-center gap-2">
              <Info className="w-4 h-4" />
              <span>{t.searchResultsTitle} ({filteredItems.length})</span>
            </div>
          )}

          {filteredItems.length === 0 ? (
            <div className="text-center py-16 rounded-2xl border border-white/5 bg-[#080B12] p-8">
              <HelpCircle className="w-12 h-12 text-gray-600 mx-auto mb-4" />
              <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                {t.searchNoResults}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredItems.map((item, idx) => {
                const isOpen = openQuestionId === item.id;
                
                // Accessibility properties
                const controlsId = `faq-content-${item.id}`;
                const headingId = `faq-heading-${item.id}`;

                return (
                  <div 
                    key={item.id}
                    id={`q-container-${item.id}`}
                    className={`rounded-2xl border transition-all duration-300 relative overflow-hidden ${
                      isOpen 
                        ? 'bg-[#0B0F19] border-cyber-cyan/30 shadow-lg shadow-cyan-500/5' 
                        : 'bg-white/3 border-white/5 hover:border-white/10'
                    }`}
                  >
                    {/* Accordion Trigger Header */}
                    <div 
                      id={headingId} 
                      className="w-full text-left"
                    >
                      <button
                        onClick={() => setOpenQuestionId(isOpen ? null : item.id)}
                        aria-expanded={isOpen}
                        aria-controls={controlsId}
                        className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left font-bold text-sm sm:text-base text-white hover:text-cyber-cyan transition-colors duration-200 cursor-pointer focus:outline-none"
                      >
                        {/* H3 hierarchy for perfect SEO index crawling */}
                        <h3 className="pr-4 leading-snug flex gap-2">
                          <span className="text-cyber-cyan font-mono">{item.id}.</span>
                          <span>{highlightText(item.q, searchQuery)}</span>
                        </h3>
                        
                        <div className="flex items-center gap-3 shrink-0 mt-0.5">
                          {/* Share button */}
                          <button
                            onClick={(e) => handleCopyLink(e, item.id)}
                            title={t.shareText}
                            className="p-1 rounded hover:bg-white/10 text-gray-500 hover:text-white transition-colors cursor-pointer"
                          >
                            {copiedId === item.id ? (
                              <Check className="w-3.5 h-3.5 text-green-400" />
                            ) : (
                              <Share2 className="w-3.5 h-3.5" />
                            )}
                          </button>
                          
                          {/* Indicator */}
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center border border-white/10 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 border-cyber-cyan text-cyber-cyan bg-cyan-500/10' : ''}`}>
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" /></svg>
                          </div>
                        </div>
                      </button>
                    </div>

                    {/* Accordion Content Block */}
                    <div 
                      id={controlsId}
                      role="region"
                      aria-labelledby={headingId}
                      className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] border-t border-white/5' : 'max-h-0'}`}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="p-6 text-xs sm:text-sm text-gray-300 leading-relaxed font-light space-y-4">
                        <p>{highlightText(item.a, searchQuery)}</p>
                        
                        {/* Subcategory Pill */}
                        <div className="pt-2 flex items-center justify-between border-t border-white/5 mt-4">
                          <span className="text-[9px] font-bold uppercase tracking-wider text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                            {getCategoryLabel(item.categoryCode)}
                          </span>

                          {/* Voting block to solve page 22 feedback checklist */}
                          <div className="flex items-center gap-3">
                            <span className="text-[10px] font-semibold text-gray-500">{t.voteLabel}</span>
                            
                            {votes[item.id] ? (
                              <span className="text-[10px] font-bold text-green-400 animate-pulse">{t.voteThanks}</span>
                            ) : (
                              <div className="flex items-center gap-1.5">
                                <button 
                                  onClick={() => handleVote(item.id, 'yes')}
                                  className="px-2 py-1 rounded bg-white/3 border border-white/5 hover:border-green-500/30 hover:text-green-400 transition-all text-[10px] font-bold cursor-pointer"
                                >
                                  {t.voteYes}
                                </button>
                                <button 
                                  onClick={() => handleVote(item.id, 'no')}
                                  className="px-2 py-1 rounded bg-white/3 border border-white/5 hover:border-red-500/30 hover:text-red-400 transition-all text-[10px] font-bold cursor-pointer"
                                >
                                  {t.voteNo}
                                </button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

        </div>
      </section>

      {/* Recommended Final CTA Block (PDF Page 22 final requirement) */}
      <section className="py-20 border-t border-white/5 bg-[#080B12] relative overflow-hidden font-sans">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/5 rounded-full filter blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {t.finalCtaTitle}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-light">
            {t.finalCtaDesc}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/iletisim')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all cursor-pointer"
            >
              {t.btnFinalContact}
            </button>
            
            <button
              onClick={() => onNavigate('/#buyume')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-[#0C111F] hover:bg-[#0F1424] text-white border border-white/5 hover:border-cyber-cyan/35 transition-all cursor-pointer"
            >
              {t.btnFinalPrograms}
            </button>

            <button
              onClick={() => onOpenApplyModal('girisim')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-xs sm:text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all cursor-pointer"
            >
              {t.btnFinalApply}
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
