import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Iletisim({ onNavigate, onOpenApplyModal, lang }) {
  const isTr = lang === 'tr';

  const t = {
    badge: isTr ? 'İletişim' : 'Contact Us',
    title: isTr ? 'Doğru ekiple konuşun.' : 'Speak with the right team.',
    desc: isTr ? 'Girişim, eğitim, uygulama, kurumsal çözüm, medya veya etkinlik talebinizi iletin.' : 'Send us your inquiries about startups, courses, services, corporate training, media or sponsorships.',
    btnPrimary: isTr ? 'Başvuru Merkezine Git' : 'Go to Application Center',
    routeTitle: isTr ? 'İletişim Yönlendirmeleri' : 'Contact Routing',
    routeDesc: isTr ? 'Hızlı ve doğru bir dönüş için lütfen ilgili kategorilerdeki başvuru formlarını kullanmayı tercih edin:' : 'For faster and more accurate responses, we encourage using the category forms below:',
    nameLabel: isTr ? 'Ad Soyad *' : 'Full Name *',
    companyLabel: isTr ? 'Kurum / Girişim Adı' : 'Company / Venture Name',
    emailLabel: isTr ? 'E-posta Adresi *' : 'Email Address *',
    phoneLabel: isTr ? 'Telefon Numarası' : 'Phone Number',
    topicLabel: isTr ? 'Konu Başlığı' : 'Subject Topic',
    msgLabel: isTr ? 'Mesajınız *' : 'Your Message *',
    msgPlaceholder: isTr ? 'Lütfen mesajınızı detaylıca yazın...' : 'Please write your message in detail...',
    kvkkLabel: isTr ? 'Dijital Hezarfen KVKK Aydınlatma Metni kapsamında kişisel verilerimin işlenmesini kabul ediyorum.' : 'I consent to the processing of my personal data under the Privacy and Data Protection Policy.',
    submitBtn: isTr ? 'Mesajı İlet' : 'Send Message',
    successTitle: isTr ? 'Mesajınız İletildi!' : 'Message Sent!',
    successDesc: isTr ? 'İletişim talebiniz alınmıştır. Ekibimiz en geç 48 saat içerisinde e-posta adresiniz üzerinden geri dönüş sağlayacaktır.' : 'Your request has been received. Our team will get back to you via your email address within 48 hours.',
    option1: isTr ? 'Genel Bilgi Talebi' : 'General Inquiry',
    option2: isTr ? 'Akademi & Eğitimler' : 'Academy & Courses',
    option3: isTr ? 'Uygulama Hizmetleri' : 'Application Services',
    option4: isTr ? 'Medya & İş Birliği' : 'Media & Collaboration',
    option5: isTr ? 'Diğer Konular' : 'Other Subjects'
  };

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    topic: 'genel',
    message: '',
    kvkk: false
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.kvkk) {
      alert(isTr ? 'Lütfen zorunlu alanları doldurun ve KVKK onayını işaretleyin.' : 'Please fill in required fields and accept the data protection policy.');
      return;
    }
    setSubmitted(true);
  };

  const redirects = [
    { title: isTr ? 'Girişim & Uygulama Talebi' : 'Venture & Dev Requests', label: isTr ? 'Girişim Başvurusu' : 'Venture Form', action: () => onOpenApplyModal('girisim') },
    { title: isTr ? 'Tünel & Eğitim Soruları' : 'Tunnel & Education Qs', label: isTr ? 'Akademi Başvurusu' : 'Academy Form', action: () => onOpenApplyModal('tunel') },
    { title: isTr ? 'Kurumsal Eğitim & Dönüşüm' : 'Corporate & Innovation', label: isTr ? 'Kurumsal Form' : 'Corporate Form', action: () => onOpenApplyModal('kurumsal') },
    { title: isTr ? 'YouTube, Podcast & Medya' : 'YouTube, Podcast & Media', label: isTr ? 'Medya İş Birliği' : 'Media Partner', action: () => onNavigate('/medya') },
    { title: isTr ? 'Etkinlik & Sponsorluk' : 'Events & Sponsorship', label: isTr ? 'Etkinlik Formu' : 'Event Form', action: () => onOpenApplyModal('egitim') }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge={t.badge}
        title={t.title}
        description={t.desc}
        primaryCtaText={t.btnPrimary}
        onPrimaryClick={() => onNavigate('/basvur')}
      />

      {/* Main Grid */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact & Route Options */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white font-sans">{t.routeTitle}</h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed font-light">
                {t.routeDesc}
              </p>
              <div className="space-y-3.5">
                {redirects.map((red, idx) => (
                  <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{red.title}</h4>
                    </div>
                    <button 
                      onClick={red.action}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-cyber-cyan border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer font-sans shrink-0"
                    >
                      {red.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Info */}
            <div className="space-y-4 pt-6 border-t border-white/5 text-gray-400 text-xs sm:text-sm font-light">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-cyber-cyan" />
                <span>info@dijitalhezarfen.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-cyber-cyan" />
                <span>+90 (212) 555 0199</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-cyber-cyan" />
                <span>Levent, İstanbul / Turkey</span>
              </div>
            </div>
          </div>

          {/* General Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass p-8 border border-white/5">
              <h2 className="text-2xl font-extrabold text-white font-sans mb-6">{t.msgLabel.replace(' *', '')}</h2>
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-scale-in">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyber-cyan flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{t.successTitle}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto font-light">
                    {t.successDesc}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-400 font-semibold">{t.nameLabel}</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-400 font-semibold">{t.companyLabel}</label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-400 font-semibold">{t.emailLabel}</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-400 font-semibold">{t.phoneLabel}</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">{t.topicLabel}</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50"
                    >
                      <option value="genel" className="bg-[#0B0F19]">{t.option1}</option>
                      <option value="akademi" className="bg-[#0B0F19]">{t.option2}</option>
                      <option value="uygulama" className="bg-[#0B0F19]">{t.option3}</option>
                      <option value="medya" className="bg-[#0B0F19]">{t.option4}</option>
                      <option value="diger" className="bg-[#0B0F19]">{t.option5}</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">{t.msgLabel}</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.msgPlaceholder}
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50 resize-none"
                    />
                  </div>

                  <div className="flex items-start gap-2 pt-2">
                    <input
                      type="checkbox"
                      id="kvkk"
                      required
                      checked={formData.kvkk}
                      onChange={(e) => setFormData({ ...formData, kvkk: e.target.checked })}
                      className="w-4 h-4 rounded border-gray-600 bg-white/3 text-cyber-cyan focus:ring-cyber-cyan cursor-pointer mt-0.5"
                    />
                    <label htmlFor="kvkk" className="text-[11px] text-gray-500 leading-snug cursor-pointer select-none font-light">
                      {t.kvkkLabel}
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer font-sans"
                    >
                      <span>{t.submitBtn}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
