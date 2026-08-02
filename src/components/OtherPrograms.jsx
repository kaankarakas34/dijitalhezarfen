import React from 'react';
import { Target, Users, Cpu, FileText, Settings, Video } from 'lucide-react';

export default function OtherPrograms({ onOpenApplyModal }) {
  const categories = [
    {
      title: 'Girişimcilik & İş Modelleri',
      icon: Target,
      color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20',
      courses: ['Fikirden girişime', 'İş modeli geliştirme', 'Product-market fit (PMF)', 'Startup yönetimi']
    },
    {
      title: 'Pazarlama & Satış',
      icon: Users,
      color: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      courses: ['Pazarlama stratejisi', 'Satış süreçleri', 'Dijital pazarlama', 'Growth hacking', 'CRM yönetimi', 'Müşteri başarısı (CS)', 'Sosyal medya yönetimi']
    },
    {
      title: 'Teknoloji',
      icon: Cpu,
      color: 'text-violet-400 bg-violet-500/10 border-violet-500/20',
      courses: ['Yazılım süreçleri', 'Yapay zekâ araçları', 'AI otomasyonları', 'Yapay zekâ destekli MVP', 'Veri analitiği', 'Siber güvenlik']
    },
    {
      title: 'Finans & Şirket Yönetimi',
      icon: FileText,
      color: 'text-fuchsia-400 bg-fuchsia-500/10 border-fuchsia-500/20',
      courses: ['Finansal yönetim', 'Muhasebe temelleri', 'Şirketler hukuku', 'Yatırım süreçleri', 'İstatistik ve olasılık']
    },
    {
      title: 'Yönetimsel Beceriler',
      icon: Settings,
      color: 'text-pink-400 bg-pink-500/10 border-pink-500/20',
      courses: ['Organizasyon tasarımı', 'İnsan kaynakları', 'Kişisel gelişim', 'Liderlik ve ekip yönetimi', 'Topluluk önünde konuşma', 'Müzakere teknikleri']
    },
    {
      title: 'Yaratıcı Üretim',
      icon: Video,
      color: 'text-rose-400 bg-rose-500/10 border-rose-500/20',
      courses: ['Görsel tasarım', 'İçerik üretimi', 'Reklam prodüksiyonu', 'Kurucu markası yönetimi', 'YouTube & podcast üretimi']
    }
  ];

  return (
    <section id="akademi-diger" className="py-24 relative overflow-hidden bg-[#0A0D17]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-cyber-cyan bg-cyan-500/10 px-3.5 py-1.5 rounded-full">Uzmanlık Alanları</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-sans mt-5 mb-5">
            Diğer Akademi Programları
          </h2>
          <div className="h-1.5 w-24 bg-gradient-cyber mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 text-sm sm:text-base">
            Girişimcilik Tüneli programının yanı sıra, ihtiyaç duyduğunuz spesifik alanlarda derinleşmenizi sağlayacak modüler eğitimlerimiz.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div 
                key={cat.title}
                className="group flex flex-col justify-between rounded-2xl glass p-6 hover:border-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/2"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center border ${cat.color} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="font-extrabold text-sm sm:text-base text-white font-sans group-hover:text-cyber-cyan transition-colors duration-200">
                      {cat.title}
                    </h3>
                  </div>

                  {/* Course Lists */}
                  <div className="space-y-2">
                    {cat.courses.map((course, idx) => (
                      <div 
                        key={idx} 
                        className="text-xs sm:text-sm text-gray-400 hover:text-gray-200 py-1.5 px-2.5 rounded-lg bg-white/1 border border-transparent hover:border-white/5 transition-colors duration-200"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5">
                  <button
                    onClick={() => onOpenApplyModal('egitim')}
                    className="w-full py-2.5 rounded-xl text-xs font-semibold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-white/20 transition-all duration-200 cursor-pointer"
                  >
                    Detayları ve Takvimi Gör
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
