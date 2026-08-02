import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ArrowRight, ArrowLeft, Mail, Phone, User, Landmark, HelpCircle, Layers } from 'lucide-react';

export default function ApplicationModal({ isOpen, onClose, initialType = 'genel', initialStageId = '' }) {
  const [step, setStep] = useState(1);
  const [appType, setAppType] = useState('tunel'); // tunel, uygulama, buyume, kurumsal
  
  // Form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    idea: '',
    experience: 'yok', // yok, orta, tecrubeli
    companyName: '',
    employeeCount: '1-5',
    stage: 'fikir', // fikir, pre-seed, seed, series-a, scale-up
    needs: [],
    corporateNeeds: '',
    message: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setErrors({});
      // Preset based on CTA action
      if (initialType === 'tunel' || initialType === 'egitim') {
        setAppType('tunel');
      } else if (initialType === 'girisim') {
        setAppType('uygulama');
      } else if (initialType === 'kurumsal') {
        setAppType('kurumsal');
      } else {
        setAppType('tunel');
      }

      if (initialStageId) {
        setFormData(prev => ({ ...prev, stage: initialStageId }));
      }
    }
  }, [isOpen, initialType, initialStageId]);

  if (!isOpen) return null;

  const handleAppTypeSelect = (type) => {
    setAppType(type);
    setStep(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (need) => {
    setFormData(prev => {
      const activeNeeds = prev.needs.includes(need)
        ? prev.needs.filter(n => n !== need)
        : [...prev.needs, need];
      return { ...prev, needs: activeNeeds };
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Ad Soyad alanı zorunludur';
    if (!formData.email.trim()) {
      newErrors.email = 'E-posta alanı zorunludur';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Geçersiz e-posta adresi';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Telefon alanı zorunludur';
    
    if (appType === 'tunel' && !formData.idea.trim()) {
      newErrors.idea = 'Girişim fikri / uzmanlık açıklaması zorunludur';
    }
    if ((appType === 'uygulama' || appType === 'buyume') && !formData.companyName.trim()) {
      newErrors.companyName = 'Şirket/Proje adı zorunludur';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Simulate API submit
      setStep(3);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[#0B0F19]/80 backdrop-blur-md" onClick={onClose}></div>

      {/* Modal Container */}
      <div className="bg-[#0C1220] border border-white/10 rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl relative z-10 animate-fade-in flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 shrink-0 bg-[#0E1527]">
          <div>
            <h3 className="font-extrabold text-base sm:text-lg text-white font-sans">Ekosistem Başvuru Formu</h3>
            <p className="text-xs text-gray-400 mt-0.5">Dijital Hezarfen Değerlendirme & Kabul Süreci</p>
          </div>
          <button onClick={onClose} className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Steps Content Area */}
        <div className="p-6 overflow-y-auto flex-grow">
          
          {/* Step indicators */}
          <div className="flex items-center justify-center gap-2 mb-8 shrink-0">
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 1 ? 'w-10 bg-cyber-cyan' : 'w-5 bg-white/10'}`}></div>
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 2 ? 'w-10 bg-cyber-cyan' : 'w-5 bg-white/10'}`}></div>
            <div className={`h-1.5 rounded-full transition-all duration-300 ${step >= 3 ? 'w-10 bg-cyber-cyan' : 'w-5 bg-white/10'}`}></div>
          </div>

          {/* STEP 1: Application Type Selection */}
          {step === 1 && (
            <div className="space-y-5">
              <div className="text-center max-w-md mx-auto mb-6">
                <h4 className="font-bold text-base sm:text-lg text-white font-sans">Katılmak İstediğiniz Yapıyı Seçin</h4>
                <p className="text-xs text-gray-400 mt-1">İhtiyacınıza en uygun Dijital Hezarfen programını seçerek ilerleyin.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Option 1: Tünel */}
                <button
                  onClick={() => handleAppTypeSelect('tunel')}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/3 hover:bg-cyan-500/5 hover:border-cyan-500/20 text-left transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyber-cyan group-hover:bg-gradient-cyber group-hover:text-[#0B0F19] transition-all">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Girişimcilik Tüneli</h5>
                    <p className="text-xs text-gray-400 mt-1 leading-normal">Girişimci olmak, fikrini ürüne dönüştürmek isteyen adaylar için 3-5 aylık yoğun akademi programı.</p>
                  </div>
                </button>

                {/* Option 2: Uygulama Hizmetleri */}
                <button
                  onClick={() => handleAppTypeSelect('uygulama')}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/3 hover:bg-blue-500/5 hover:border-blue-500/20 text-left transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-gradient-cyber group-hover:text-[#0B0F19] transition-all">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Uygulama Hizmetleri</h5>
                    <p className="text-xs text-gray-400 mt-1 leading-normal">Fikir, MVP veya erken aşamadaki girişimler için yazılım, AI otomasyonu, pazarlama, satış altyapı işleri.</p>
                  </div>
                </button>

                {/* Option 3: Büyüme */}
                <button
                  onClick={() => handleAppTypeSelect('buyume')}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/3 hover:bg-violet-500/5 hover:border-violet-500/20 text-left transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400 group-hover:bg-gradient-cyber group-hover:text-[#0B0F19] transition-all">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M23 6l-9.5 9.5-5-5L1 18M17 6h6v6"/></svg>
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Büyüme & Yatırım</h5>
                    <p className="text-xs text-gray-400 mt-1 leading-normal">Ürünü olan, ciro üreten ve hızlanmak isteyen yapılar için Growth hacking ve yatırım hazırlık süreçleri.</p>
                  </div>
                </button>

                {/* Option 4: Kurumsal */}
                <button
                  onClick={() => handleAppTypeSelect('kurumsal')}
                  className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/3 hover:bg-pink-500/5 hover:border-pink-500/20 text-left transition-all duration-300 group cursor-pointer"
                >
                  <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 group-hover:bg-gradient-cyber group-hover:text-[#0B0F19] transition-all">
                    <Landmark className="w-5 h-5" />
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-white">Kurumsal Çözümler</h5>
                    <p className="text-xs text-gray-400 mt-1 leading-normal">Şirketler için yapay zekâ, inovasyon akademisi ve startup iş birliği programları.</p>
                  </div>
                </button>

              </div>
            </div>
          )}

          {/* STEP 2: Detail Forms */}
          {step === 2 && (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Back to Step 1 Button */}
              <button
                type="button"
                onClick={() => setStep(1)}
                className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors mb-4 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Program Seçimine Geri Dön</span>
              </button>

              {/* Selected Program Badge */}
              <div className="p-3.5 rounded-xl bg-white/3 border border-white/5 flex items-center justify-between mb-4">
                <span className="text-xs text-gray-400">Seçilen Program:</span>
                <span className="text-xs font-extrabold text-cyber-cyan uppercase tracking-wider bg-cyan-500/10 px-3 py-1 rounded-md">
                  {appType === 'tunel' && 'Girişimcilik Tüneli'}
                  {appType === 'uygulama' && 'Uygulama Hizmetleri'}
                  {appType === 'buyume' && 'Büyüme & Yatırım'}
                  {appType === 'kurumsal' && 'Kurumsal Çözümler'}
                </span>
              </div>

              {/* General Personal Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold text-gray-400 block mb-1.5">Ad Soyad *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Adınız ve soyadınız"
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                  />
                  {errors.name && <span className="text-[10px] text-rose-500 mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-400 block mb-1.5">E-posta Adresi *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="isim@girişim.com"
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                  />
                  {errors.email && <span className="text-[10px] text-rose-500 mt-1 block">{errors.email}</span>}
                </div>

                <div className="sm:col-span-2">
                  <label className="text-xs font-semibold text-gray-400 block mb-1.5">Telefon Numarası *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+90 5XX XXX XX XX"
                    className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                  />
                  {errors.phone && <span className="text-[10px] text-rose-500 mt-1 block">{errors.phone}</span>}
                </div>
              </div>

              {/* Context Fields based on Program Type */}
              {appType === 'tunel' && (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-gray-400 block mb-1.5">Girişim Fikri veya Uzmanlık Hedefiniz *</label>
                    <textarea
                      name="idea"
                      rows="3"
                      value={formData.idea}
                      onChange={handleInputChange}
                      placeholder="Geliştirmek istediğiniz problemi, fikri veya uzmanlaşmak istediğiniz alanları özetleyin."
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 resize-none"
                    ></textarea>
                    {errors.idea && <span className="text-[10px] text-rose-500 mt-1 block">{errors.idea}</span>}
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-400 block mb-1.5">Girişimcilik / Sektörel Tecrübeniz</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                    >
                      <option value="yok" className="bg-[#0C1220]">Hiç girişim deneyimim yok (Başlangıç)</option>
                      <option value="orta" className="bg-[#0C1220]">Daha önce proje veya ekip çalışması yaptım</option>
                      <option value="tecrubeli" className="bg-[#0C1220]">Aktif/eski şirket kurucusuyum</option>
                    </select>
                  </div>
                </div>
              )}

              {(appType === 'uygulama' || appType === 'buyume') && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-400 block mb-1.5">Girişim / Proje Adı *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Şirket veya proje adı"
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                      />
                      {errors.companyName && <span className="text-[10px] text-rose-500 mt-1 block">{errors.companyName}</span>}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-400 block mb-1.5">Bulunduğu Evre</label>
                      <select
                        name="stage"
                        value={formData.stage}
                        onChange={handleInputChange}
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                      >
                        <option value="fikir" className="bg-[#0C1220]">Fikir Aşaması</option>
                        <option value="pre-seed" className="bg-[#0C1220]">Pre-seed (Prototip/MVP)</option>
                        <option value="seed" className="bg-[#0C1220]">Seed (İlk Müşteriler / Ciro)</option>
                        <option value="series-a" className="bg-[#0C1220]">Series A+ (Ölçeklenme)</option>
                        <option value="scale-up" className="bg-[#0C1220]">Scale-up (Küreselleşme)</option>
                      </select>
                    </div>
                  </div>

                  {/* Needs checkboxes */}
                  <div>
                    <label className="text-xs font-semibold text-gray-400 block mb-2">Hangi Alanlarda Desteğe İhtiyacınız Var? (Birden fazla seçebilirsiniz)</label>
                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-300">
                      {[
                        'Yazılım / MVP Geliştirme',
                        'Yapay Zekâ Entegrasyonu',
                        'Marka & Konumlandırma',
                        'Growth Hacking & Reklam',
                        'Satış Hunisi & CRM Kurulumu',
                        'Finansal Modelleme & Hukuk',
                        'Yatırımcı Sunumu & Data Room',
                        'Global Pazarlara Erişim'
                      ].map((need) => (
                        <label key={need} className="flex items-center gap-2 p-2 rounded bg-white/2 border border-white/5 hover:bg-white/5 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.needs.includes(need)}
                            onChange={() => handleCheckboxChange(need)}
                            className="rounded border-white/10 text-cyan-500 focus:ring-0"
                          />
                          <span>{need}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {appType === 'kurumsal' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold text-gray-400 block mb-1.5">Şirket / Kurum Adı *</label>
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Kurum adı"
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                      />
                      {errors.companyName && <span className="text-[10px] text-rose-500 mt-1 block">{errors.companyName}</span>}
                    </div>

                    <div>
                      <label className="text-xs font-semibold text-gray-400 block mb-1.5">Mevcut Çalışan Sayısı</label>
                      <select
                        name="employeeCount"
                        value={formData.employeeCount}
                        onChange={handleInputChange}
                        className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50"
                      >
                        <option value="1-5" className="bg-[#0C1220]">1-50 Çalışan</option>
                        <option value="50-250" className="bg-[#0C1220]">50-250 Çalışan</option>
                        <option value="250+" className="bg-[#0C1220]">250+ Çalışan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-400 block mb-1.5">Kurumsal Çözüm İhtiyaçlarınız</label>
                    <textarea
                      name="corporateNeeds"
                      rows="3"
                      value={formData.corporateNeeds}
                      onChange={handleInputChange}
                      placeholder="Kurumsal akademi, yapay zekâ eğitimleri, intraprenörlük programı vb. ihtiyaçlarınızı tanımlayın."
                      className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 resize-none"
                    ></textarea>
                  </div>
                </div>
              )}

              {/* Message */}
              <div>
                <label className="text-xs font-semibold text-gray-400 block mb-1.5">Ek Not / İletmek İstediğiniz Mesaj</label>
                <textarea
                  name="message"
                  rows="2"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Eklemek istediğiniz özel detaylar..."
                  className="w-full bg-white/3 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500/50 resize-none"
                ></textarea>
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-bold text-sm bg-gradient-cyber text-[#0B0F19] hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <span>Başvuruyu Tamamla</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          )}

          {/* STEP 3: Success Screen */}
          {step === 3 && (
            <div className="py-10 text-center space-y-6">
              <div className="w-16 h-16 rounded-full bg-cyan-500/10 text-cyber-cyan flex items-center justify-center mx-auto border border-cyan-500/20">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl font-extrabold text-white font-sans">Başvurunuz Alındı!</h4>
                <p className="text-sm text-gray-400 max-w-md mx-auto leading-relaxed">
                  Dijital Hezarfen ekosistemine gösterdiğiniz ilgi için teşekkür ederiz. Başvurunuz uzman ekibimiz tarafından detaylıca incelenecektir.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/3 border border-white/5 max-w-md mx-auto text-left space-y-2">
                <span className="text-[10px] font-bold text-cyber-cyan uppercase tracking-wider">Sıradaki Adım</span>
                <h5 className="text-xs sm:text-sm font-semibold text-white">Değerlendirme Görüşmesi</h5>
                <p className="text-xs text-gray-400 leading-relaxed">
                  2 iş günü içerisinde formda belirttiğiniz e-posta ve telefon numarası üzerinden sizinle bir ön görüşme takvimi paylaşacağız.
                </p>
              </div>

              <div className="pt-6">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl font-semibold text-xs bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-200 cursor-pointer"
                >
                  Kapat
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
