import React, { useState } from 'react';
import PageHero from '../components/UI/PageHero';
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react';

export default function Iletisim({ onNavigate, onOpenApplyModal }) {
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
      alert('Lütfen zorunlu alanları doldurun ve KVKK onayını işaretleyin.');
      return;
    }
    setSubmitted(true);
  };

  const redirects = [
    { title: 'Girişim & Uygulama Talebi', label: 'Girişim Başvurusu', action: () => onOpenApplyModal('girisim') },
    { title: 'Tünel & Eğitim Soruları', label: 'Akademi Başvurusu', action: () => onOpenApplyModal('tunel') },
    { title: 'Kurumsal Eğitim & Dönüşüm', label: 'Kurumsal Form', action: () => onOpenApplyModal('kurumsal') },
    { title: 'YouTube, Podcast & Medya', label: 'Medya İş Birliği', action: () => onNavigate('/medya') },
    { title: 'Etkinlik & Sponsorluk', label: 'Etkinlik Formu', action: () => onOpenApplyModal('egitim') }
  ];

  return (
    <div className="animate-fade-in bg-[#000000] text-gray-100 min-h-screen">
      {/* Hero */}
      <PageHero
        badge="İletişim"
        title="Doğru ekiple konuşun."
        description="Girişim, eğitim, uygulama, kurumsal çözüm, medya veya etkinlik talebinizi iletin."
        primaryCtaText="Başvuru Merkezine Git"
        onPrimaryClick={() => onNavigate('/basvur')}
      />

      {/* Main Grid */}
      <section className="py-20 border-t border-white/5 bg-[#080B12]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Direct Contact & Route Options */}
          <div className="lg:col-span-5 space-y-10">
            <div className="space-y-6">
              <h2 className="text-2xl font-extrabold text-white font-sans">İletişim Yönlendirmeleri</h2>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                Hızlı ve doğru bir dönüş için lütfen ilgili kategorilerdeki başvuru formlarını kullanmayı tercih edin:
              </p>
              <div className="space-y-3.5">
                {redirects.map((red, idx) => (
                  <div key={idx} className="p-4 rounded-xl glass border border-white/5 flex items-center justify-between gap-4">
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-white">{red.title}</h4>
                    </div>
                    <button 
                      onClick={red.action}
                      className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white/5 hover:bg-white/10 text-cyber-cyan border border-white/10 hover:border-cyan-500/30 transition-all cursor-pointer"
                    >
                      {red.label}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Info */}
            <div className="space-y-4 pt-6 border-t border-white/5 text-gray-400 text-xs sm:text-sm">
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
                <span>Levent, İstanbul / Türkiye</span>
              </div>
            </div>
          </div>

          {/* General Message Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl glass p-8 border border-white/5">
              <h2 className="text-2xl font-extrabold text-white font-sans mb-6">Genel İletişim Formu</h2>
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-scale-in">
                  <div className="w-12 h-12 rounded-full bg-cyan-500/10 text-cyber-cyan flex items-center justify-center mx-auto">
                    <Check className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Mesajınız İletildi!</h3>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-sm mx-auto">
                    İletişim talebiniz alınmıştır. Ekibimiz en geç 48 saat içerisinde e-posta adresiniz üzerinden geri dönüş sağlayacaktır.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-gray-400 font-semibold">Ad Soyad *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-400 font-semibold">Kurum / Girişim Adı</label>
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
                      <label className="text-gray-400 font-semibold">E-posta Adresi *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-gray-400 font-semibold">Telefon Numarası</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">Konu Başlığı</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-white focus:outline-none focus:border-cyan-500/50"
                    >
                      <option value="genel" className="bg-[#0B0F19]">Genel Bilgi Talebi</option>
                      <option value="akademi" className="bg-[#0B0F19]">Akademi & Eğitimler</option>
                      <option value="uygulama" className="bg-[#0B0F19]">Uygulama Hizmetleri</option>
                      <option value="medya" className="bg-[#0B0F19]">Medya & İş Birliği</option>
                      <option value="diger" className="bg-[#0B0F19]">Diğer Konular</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-gray-400 font-semibold">Mesajınız *</label>
                    <textarea
                      required
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Lütfen mesajınızı detaylıca yazın..."
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
                    <label htmlFor="kvkk" className="text-[11px] text-gray-500 leading-snug cursor-pointer select-none">
                      Dijital Hezarfen KVKK Aydınlatma Metni kapsamında kişisel verilerimin işlenmesini kabul ediyorum.
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Mesajı İlet</span>
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
