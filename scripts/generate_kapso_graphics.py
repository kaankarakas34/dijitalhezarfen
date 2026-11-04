import os
import math
from PIL import Image, ImageDraw, ImageFont

project_root = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
images_dir = os.path.join(project_root, 'public', 'images')
os.makedirs(images_dir, exist_ok=True)

print(f"Generating Kapso assets into {images_dir}...")

# -------------------------------------------------------------
# 1. GENERATE kapso-uc-baglanti-yolu.svg
# -------------------------------------------------------------
svg_baglanti = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 720" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070A12" />
      <stop offset="50%" stop-color="#0B1120" />
      <stop offset="100%" stop-color="#05070D" />
    </linearGradient>
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
    <linearGradient id="emeraldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10B981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="purpleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8B5CF6" />
      <stop offset="100%" stop-color="#6366F1" />
    </linearGradient>
    <linearGradient id="cardGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E293B" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#0F172A" stop-opacity="0.6" />
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="16" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <rect width="1400" height="720" fill="url(#bgGrad)" />

  <!-- Grid overlay -->
  <g stroke="#1E293B" stroke-width="1" opacity="0.35">
    <line x1="100" y1="0" x2="100" y2="720" />
    <line x1="300" y1="0" x2="300" y2="720" />
    <line x1="500" y1="0" x2="500" y2="720" />
    <line x1="700" y1="0" x2="700" y2="720" />
    <line x1="900" y1="0" x2="900" y2="720" />
    <line x1="1100" y1="0" x2="1100" y2="720" />
    <line x1="1300" y1="0" x2="1300" y2="720" />
    <line x1="0" y1="120" x2="1400" y2="120" />
    <line x1="0" y1="360" x2="1400" y2="360" />
    <line x1="0" y1="600" x2="1400" y2="600" />
  </g>

  <!-- Top Badge & Title -->
  <g transform="translate(80, 50)">
    <rect width="180" height="28" rx="14" fill="#06B6D4" fill-opacity="0.15" stroke="#06B6D4" stroke-width="1" />
    <text x="90" y="19" fill="#22D3EE" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">MİMARİ REHBERİ</text>
    <text x="0" y="68" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="800">Kapso ile WhatsApp Bağlantısında 3 Temel Yol</text>
    <text x="0" y="98" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="15" font-weight="400">İhtiyacınıza, mevcut telefon numaranıza ve operasyon hacminize göre en uygun bağlantı modelini seçin.</text>
  </g>

  <!-- CARD 1: Instant Setup (Hazır Numara) -->
  <g transform="translate(80, 180)" filter="url(#shadow)">
    <rect width="380" height="480" rx="20" fill="url(#cardGlow)" stroke="#06B6D4" stroke-width="1.5" stroke-opacity="0.6" />
    <rect x="0" y="0" width="380" height="8" rx="4" fill="url(#cyanGrad)" />
    
    <!-- Tag -->
    <rect x="28" y="28" width="130" height="24" rx="12" fill="#06B6D4" fill-opacity="0.15" />
    <text x="93" y="44" fill="#38BDF8" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" text-anchor="middle">YOL A • HIZLI BAŞLANGIÇ</text>
    
    <text x="28" y="86" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700">Kapso Hazır Numara</text>
    <text x="28" y="110" fill="#06B6D4" font-family="monospace" font-size="13" font-weight="600">Instant Setup (Pre-verified)</text>

    <text x="28" y="148" fill="#CBD5E1" font-family="system-ui, -apple-system, sans-serif" font-size="13.5" font-weight="400" width="324">
      <tspan x="28" dy="0">Meta tarafından önceden doğrulanmış</tspan>
      <tspan x="28" dy="20">ABD/küresel test numaralarından biri seçilir.</tspan>
      <tspan x="28" dy="20">Kendi SIM kartınıza dokunmanız gerekmez.</tspan>
    </text>

    <!-- Checklist -->
    <g transform="translate(28, 230)" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#E2E8F0">
      <circle cx="8" cy="8" r="7" fill="#06B6D4" fill-opacity="0.2" stroke="#06B6D4" stroke-width="1.5" />
      <text x="24" y="13">En hızlı PoC ve prototip denemesi</text>
      
      <circle cx="8" cy="46" r="7" fill="#06B6D4" fill-opacity="0.2" stroke="#06B6D4" stroke-width="1.5" />
      <text x="24" y="51">Kişisel numaranızı riske atmaz</text>
      
      <circle cx="8" cy="84" r="7" fill="#06B6D4" fill-opacity="0.2" stroke="#06B6D4" stroke-width="1.5" />
      <text x="24" y="89">Meta Business Portfolio bağlantısı</text>
      
      <circle cx="8" cy="122" r="7" fill="#F59E0B" fill-opacity="0.2" stroke="#F59E0B" stroke-width="1.5" />
      <text x="24" y="127" fill="#FCD34D">Üretim onayı öncesi kapsam sınırlı</text>
    </g>

    <!-- Bottom Badge -->
    <rect x="28" y="415" width="324" height="38" rx="10" fill="#080F1D" stroke="#1E293B" stroke-width="1" />
    <text x="190" y="439" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" text-anchor="middle">Öneri: Geliştirme ve Test Aşaması</text>
  </g>

  <!-- CARD 2: Business App Coexistence -->
  <g transform="translate(510, 180)" filter="url(#shadow)">
    <rect width="380" height="480" rx="20" fill="url(#cardGlow)" stroke="#10B981" stroke-width="1.5" stroke-opacity="0.6" />
    <rect x="0" y="0" width="380" height="8" rx="4" fill="url(#emeraldGrad)" />

    <!-- Tag -->
    <rect x="28" y="28" width="130" height="24" rx="12" fill="#10B981" fill-opacity="0.15" />
    <text x="93" y="44" fill="#34D399" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" text-anchor="middle">YOL B • HİBRİT KULLANIM</text>

    <text x="28" y="86" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700">Mevcut WhatsApp Business</text>
    <text x="28" y="110" fill="#10B981" font-family="monospace" font-size="13" font-weight="600">WhatsApp Business App (Coexistence)</text>

    <text x="28" y="148" fill="#CBD5E1" font-family="system-ui, -apple-system, sans-serif" font-size="13.5" font-weight="400">
      <tspan x="28" dy="0">Numaranız telefonunuzda aktif kalır;</tspan>
      <tspan x="28" dy="20">QR kod eşleştirmesi ile gelen mesajlar hem</tspan>
      <tspan x="28" dy="20">telefona hem Kapso paneline eşzamanlı akar.</tspan>
    </text>

    <!-- Checklist -->
    <g transform="translate(28, 230)" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#E2E8F0">
      <circle cx="8" cy="8" r="7" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="1.5" />
      <text x="24" y="13">Operasyonu telefondan sürdürme imkânı</text>
      
      <circle cx="8" cy="46" r="7" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="1.5" />
      <text x="24" y="51">Mevcut müşteri konuşmaları kesintiye uğramaz</text>
      
      <circle cx="8" cy="84" r="7" fill="#F59E0B" fill-opacity="0.2" stroke="#F59E0B" stroke-width="1.5" />
      <text x="24" y="89" fill="#FCD34D">Geçmiş aktarım kararı geri alınamaz</text>
      
      <circle cx="8" cy="122" r="7" fill="#F59E0B" fill-opacity="0.2" stroke="#F59E0B" stroke-width="1.5" />
      <text x="24" y="127" fill="#FCD34D">Yüksek hacimde Cloud API kadar kararlı değil</text>
    </g>

    <!-- Bottom Badge -->
    <rect x="28" y="415" width="324" height="38" rx="10" fill="#080F1D" stroke="#1E293B" stroke-width="1" />
    <text x="190" y="439" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" text-anchor="middle">Öneri: Küçük İşletmeler &amp; Geçiş Süreci</text>
  </g>

  <!-- CARD 3: BYOSIM (Kendi SIM Numaran) -->
  <g transform="translate(940, 180)" filter="url(#shadow)">
    <rect width="380" height="480" rx="20" fill="url(#cardGlow)" stroke="#8B5CF6" stroke-width="1.5" stroke-opacity="0.6" />
    <rect x="0" y="0" width="380" height="8" rx="4" fill="url(#purpleGrad)" />

    <!-- Tag -->
    <rect x="28" y="28" width="130" height="24" rx="12" fill="#8B5CF6" fill-opacity="0.15" />
    <text x="93" y="44" fill="#C084FC" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" text-anchor="middle">YOL C • ÜRETİM &amp; KURUMSAL</text>

    <text x="28" y="86" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="22" font-weight="700">Kendi SIM Numaranız</text>
    <text x="28" y="110" fill="#A855F7" font-family="monospace" font-size="13" font-weight="600">Bring Your Own SIM (Dedicated API)</text>

    <text x="28" y="148" fill="#CBD5E1" font-family="system-ui, -apple-system, sans-serif" font-size="13.5" font-weight="400">
      <tspan x="28" dy="0">Doğrudan Meta Cloud API bağlantısı.</tspan>
      <tspan x="28" dy="20">SMS/Ses aramasıyla onaylanır; telefon</tspan>
      <tspan x="28" dy="20">uygulamasından ayrılıp tümüyle API'ye geçer.</tspan>
    </text>

    <!-- Checklist -->
    <g transform="translate(28, 230)" font-family="system-ui, -apple-system, sans-serif" font-size="13" fill="#E2E8F0">
      <circle cx="8" cy="8" r="7" fill="#8B5CF6" fill-opacity="0.2" stroke="#8B5CF6" stroke-width="1.5" />
      <text x="24" y="13">En yüksek kurumsal kararlılık ve hız</text>
      
      <circle cx="8" cy="46" r="7" fill="#8B5CF6" fill-opacity="0.2" stroke="#8B5CF6" stroke-width="1.5" />
      <text x="24" y="51">Sınırsız ölçeklenebilir mesaj trafiği</text>
      
      <circle cx="8" cy="84" r="7" fill="#EF4444" fill-opacity="0.2" stroke="#EF4444" stroke-width="1.5" />
      <text x="24" y="89" fill="#FCA5A5">Telefondaki WhatsApp devre dışı kalır</text>
      
      <circle cx="8" cy="122" r="7" fill="#EF4444" fill-opacity="0.2" stroke="#EF4444" stroke-width="1.5" />
      <text x="24" y="127" fill="#FCA5A5">Eski sağlayıcı credit line silinmelidir</text>
    </g>

    <!-- Bottom Badge -->
    <rect x="28" y="415" width="324" height="38" rx="10" fill="#080F1D" stroke="#1E293B" stroke-width="1" />
    <text x="190" y="439" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="500" text-anchor="middle">Öneri: Üretim ve Kurumsal Otomasyon</text>
  </g>
</svg>'''

with open(os.path.join(images_dir, 'kapso-uc-baglanti-yolu.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_baglanti)
print("Saved kapso-uc-baglanti-yolu.svg")


# -------------------------------------------------------------
# 2. GENERATE kapso-bes-adim.svg
# -------------------------------------------------------------
svg_bes_adim = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 700" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070A12" />
      <stop offset="50%" stop-color="#0B1222" />
      <stop offset="100%" stop-color="#060810" />
    </linearGradient>
    <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="50%" stop-color="#3B82F6" />
      <stop offset="100%" stop-color="#10B981" />
    </linearGradient>
    <filter id="shadow2" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.5" />
    </filter>
  </defs>

  <rect width="1400" height="700" fill="url(#bgGrad2)" />

  <!-- Header -->
  <g transform="translate(80, 50)">
    <rect width="210" height="28" rx="14" fill="#06B6D4" fill-opacity="0.15" stroke="#06B6D4" stroke-width="1" />
    <text x="105" y="19" fill="#22D3EE" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">UÇTAN UCA İŞ AKIŞI</text>
    <text x="0" y="68" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="800">5 Adımda WhatsApp Yapay Zekâ Botu Kurulumu</text>
    <text x="0" y="98" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="15">Geliştirme asistanından 7/24 otonom çalışan canlı asistana geçiş haritası.</text>
  </g>

  <!-- Connecting Path Line -->
  <path d="M 190 320 L 1210 320" stroke="url(#cyanLine)" stroke-width="3" stroke-dasharray="6 6" opacity="0.6" />

  <!-- Step 1 -->
  <g transform="translate(80, 200)" filter="url(#shadow2)">
    <rect width="220" height="340" rx="16" fill="#0D1527" stroke="#1E293B" stroke-width="1.5" />
    <circle cx="110" cy="40" r="24" fill="#06B6D4" fill-opacity="0.2" stroke="#06B6D4" stroke-width="2" />
    <text x="110" y="47" fill="#38BDF8" font-family="monospace" font-size="18" font-weight="800" text-anchor="middle">01</text>
    
    <text x="110" y="98" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" text-anchor="middle">Kapso Projesi</text>
    <text x="110" y="120" fill="#06B6D4" font-family="monospace" font-size="12" text-anchor="middle">app.kapso.ai</text>
    
    <text x="20" y="160" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12.5" leading="18">
      <tspan x="20" dy="0">Hesap aç ve yeni bir</tspan>
      <tspan x="20" dy="18">çalışma alanı oluştur.</tspan>
      <tspan x="20" dy="18">API anahtarlarını ve</tspan>
      <tspan x="20" dy="18">güvenlik izinlerini</tspan>
      <tspan x="20" dy="18">belirle.</tspan>
    </text>

    <rect x="20" y="275" width="180" height="32" rx="8" fill="#080D1A" stroke="#1E293B" />
    <text x="110" y="295" fill="#38BDF8" font-family="monospace" font-size="11" text-anchor="middle">Proje Başlatma</text>
  </g>

  <!-- Step 2 -->
  <g transform="translate(330, 200)" filter="url(#shadow2)">
    <rect width="220" height="340" rx="16" fill="#0D1527" stroke="#1E293B" stroke-width="1.5" />
    <circle cx="110" cy="40" r="24" fill="#3B82F6" fill-opacity="0.2" stroke="#3B82F6" stroke-width="2" />
    <text x="110" y="47" fill="#60A5FA" font-family="monospace" font-size="18" font-weight="800" text-anchor="middle">02</text>
    
    <text x="110" y="98" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" text-anchor="middle">Numara Bağlantısı</text>
    <text x="110" y="120" fill="#3B82F6" font-family="monospace" font-size="12" text-anchor="middle">Meta Business</text>
    
    <text x="20" y="160" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12.5">
      <tspan x="20" dy="0">Sandbox, Instant,</tspan>
      <tspan x="20" dy="18">Business App veya</tspan>
      <tspan x="20" dy="18">kendi SIM numaranı</tspan>
      <tspan x="20" dy="18">seçerek Meta oturumu</tspan>
      <tspan x="20" dy="18">ile yetkilendir.</tspan>
    </text>

    <rect x="20" y="275" width="180" height="32" rx="8" fill="#080D1A" stroke="#1E293B" />
    <text x="110" y="295" fill="#60A5FA" font-family="monospace" font-size="11" text-anchor="middle">WABA Entegrasyonu</text>
  </g>

  <!-- Step 3 -->
  <g transform="translate(580, 200)" filter="url(#shadow2)">
    <rect width="220" height="340" rx="16" fill="#0D1527" stroke="#8B5CF6" stroke-width="1.5" />
    <circle cx="110" cy="40" r="24" fill="#8B5CF6" fill-opacity="0.2" stroke="#8B5CF6" stroke-width="2" />
    <text x="110" y="47" fill="#C084FC" font-family="monospace" font-size="18" font-weight="800" text-anchor="middle">03</text>
    
    <text x="110" y="98" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" text-anchor="middle">MCP Bağlantısı</text>
    <text x="110" y="120" fill="#C084FC" font-family="monospace" font-size="12" text-anchor="middle">Codex &amp; Claude</text>
    
    <text x="20" y="160" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12.5">
      <tspan x="20" dy="0">Terminalden Kapso</tspan>
      <tspan x="20" dy="18">MCP sunucusunu ekle.</tspan>
      <tspan x="20" dy="18">Asistanın proje</tspan>
      <tspan x="20" dy="18">kaynaklarını okumasını</tspan>
      <tspan x="20" dy="18">sağla.</tspan>
    </text>

    <rect x="20" y="275" width="180" height="32" rx="8" fill="#080D1A" stroke="#1E293B" />
    <text x="110" y="295" fill="#C084FC" font-family="monospace" font-size="11" text-anchor="middle">Geliştirme Erişimi</text>
  </g>

  <!-- Step 4 -->
  <g transform="translate(830, 200)" filter="url(#shadow2)">
    <rect width="220" height="340" rx="16" fill="#0D1527" stroke="#EC4899" stroke-width="1.5" />
    <circle cx="110" cy="40" r="24" fill="#EC4899" fill-opacity="0.2" stroke="#EC4899" stroke-width="2" />
    <text x="110" y="47" fill="#F472B6" font-family="monospace" font-size="18" font-weight="800" text-anchor="middle">04</text>
    
    <text x="110" y="98" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" text-anchor="middle">Agent &amp; Akış</text>
    <text x="110" y="120" fill="#EC4899" font-family="monospace" font-size="12" text-anchor="middle">SSS &amp; İnsan Devri</text>
    
    <text x="20" y="160" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12.5">
      <tspan x="20" dy="0">İşletme bilgilerini,</tspan>
      <tspan x="20" dy="18">yanıtlama kurallarını,</tspan>
      <tspan x="20" dy="18">doğrulama adımlarını</tspan>
      <tspan x="20" dy="18">ve operatöre aktarma</tspan>
      <tspan x="20" dy="18">koşullarını tanımla.</tspan>
    </text>

    <rect x="20" y="275" width="180" height="32" rx="8" fill="#080D1A" stroke="#1E293B" />
    <text x="110" y="295" fill="#F472B6" font-family="monospace" font-size="11" text-anchor="middle">Kurallar &amp; Zekâ</text>
  </g>

  <!-- Step 5 -->
  <g transform="translate(1080, 200)" filter="url(#shadow2)">
    <rect width="220" height="340" rx="16" fill="#0D1527" stroke="#10B981" stroke-width="1.5" />
    <circle cx="110" cy="40" r="24" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="2" />
    <text x="110" y="47" fill="#34D399" font-family="monospace" font-size="18" font-weight="800" text-anchor="middle">05</text>
    
    <text x="110" y="98" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700" text-anchor="middle">7/24 Canlı Yayın</text>
    <text x="110" y="120" fill="#10B981" font-family="monospace" font-size="12" text-anchor="middle">Workflow / Webhook</text>
    
    <text x="20" y="160" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12.5">
      <tspan x="20" dy="0">Sandbox testlerini yap,</tspan>
      <tspan x="20" dy="18">Kapso Workflow veya</tspan>
      <tspan x="20" dy="18">sunucusuz webhook'u</tspan>
      <tspan x="20" dy="18">yayınla; terminal</tspan>
      <tspan x="20" dy="18">kapansa da çalışır.</tspan>
    </text>

    <rect x="20" y="275" width="180" height="32" rx="8" fill="#080D1A" stroke="#1E293B" />
    <text x="110" y="295" fill="#34D399" font-family="monospace" font-size="11" text-anchor="middle">Otonom Operasyon</text>
  </g>

  <!-- Bottom Tip Banner -->
  <g transform="translate(80, 580)">
    <rect width="1220" height="60" rx="12" fill="#08101E" stroke="#06B6D4" stroke-width="1" stroke-opacity="0.4" />
    <text x="30" y="35" fill="#38BDF8" font-family="monospace" font-size="14" font-weight="700">KRİTİK FARK:</text>
    <text x="160" y="35" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="13.5">
      1, 2 ve 3. adımlar Kapso'yu asistanınıza tanıtır. 4 ve 5. adımlar ise sisteminizin terminal kapalıyken de 7/24 yanıt vermesini sağlar.
    </text>
  </g>
</svg>'''

with open(os.path.join(images_dir, 'kapso-bes-adim.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_bes_adim)
print("Saved kapso-bes-adim.svg")


# -------------------------------------------------------------
# 3. GENERATE kapso-codex-claude-kurulum.svg
# -------------------------------------------------------------
svg_codex_claude = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 760" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad3" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#060911" />
      <stop offset="50%" stop-color="#090E1A" />
      <stop offset="100%" stop-color="#05070D" />
    </linearGradient>
    <linearGradient id="termGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0D1322" />
      <stop offset="100%" stop-color="#070A12" />
    </linearGradient>
    <filter id="shadow3" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <rect width="1400" height="760" fill="url(#bgGrad3)" />

  <!-- Header -->
  <g transform="translate(80, 45)">
    <rect width="190" height="28" rx="14" fill="#06B6D4" fill-opacity="0.15" stroke="#06B6D4" stroke-width="1" />
    <text x="95" y="19" fill="#22D3EE" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">TERMINAL MCP SETUP</text>
    <text x="0" y="66" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="30" font-weight="800">Codex ve Claude Code ile Kapso MCP Kurulumu</text>
    <text x="0" y="94" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="14.5">Resmî komut satırı parametreleri, tarayıcı yetkilendirmesi ve bağlantı doğrulama komutları.</text>
  </g>

  <!-- LEFT PANEL: OPENAI CODEX -->
  <g transform="translate(80, 170)" filter="url(#shadow3)">
    <rect width="590" height="520" rx="16" fill="url(#termGrad)" stroke="#10B981" stroke-width="1.5" stroke-opacity="0.5" />
    
    <!-- Terminal Header Bar -->
    <rect x="0" y="0" width="590" height="42" rx="16" fill="#090E1A" />
    <circle cx="24" cy="21" r="5" fill="#EF4444" />
    <circle cx="42" cy="21" r="5" fill="#F59E0B" />
    <circle cx="60" cy="21" r="5" fill="#10B981" />
    <text x="90" y="26" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700">OpenAI Codex (Terminal / CLI)</text>
    <text x="560" y="26" fill="#10B981" font-family="monospace" font-size="11" text-anchor="end">MCP CLIENT</text>
    <line x1="0" y1="42" x2="590" y2="42" stroke="#1E293B" stroke-width="1" />

    <!-- Step 1: Add MCP -->
    <g transform="translate(25, 65)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">1. Kapso MCP Sunucusunu Ekle:</text>
      <rect x="0" y="10" width="540" height="42" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="36" fill="#34D399" font-family="monospace" font-size="12.5">codex mcp add kapso --url https://api.kapso.ai/mcp</text>
    </g>

    <!-- Step 2: Login -->
    <g transform="translate(25, 140)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">2. OAuth / Tarayıcı ile Oturum Aç:</text>
      <rect x="0" y="10" width="540" height="42" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="36" fill="#34D399" font-family="monospace" font-size="12.5">codex mcp login kapso</text>
      <text x="0" y="68" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="11.5">Tarayıcıda proje seçilir ve salt-okunur/gerekli izinler onaylanır.</text>
    </g>

    <!-- Step 3: Docs MCP (Optional) -->
    <g transform="translate(25, 230)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">3. İsteğe Bağlı: Resmî Dokümantasyon MCP'si:</text>
      <rect x="0" y="10" width="540" height="42" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="36" fill="#A7F3D0" font-family="monospace" font-size="12">codex mcp add kapso-docs --url https://docs.kapso.ai/mcp</text>
    </g>

    <!-- Step 4: Verification Prompt -->
    <g transform="translate(25, 305)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">4. Codex İçi İlk Güvenli Doğrulama İstemi:</text>
      <rect x="0" y="10" width="540" height="74" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="32" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="12">"Kapso projemin durumunu ve bağlı WhatsApp numaralarını listele.</text>
      <text x="16" y="52" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="12">Hiç mesaj gönderme, ayar değiştirme. SSS asistanı mimarisi öner."</text>
    </g>

    <!-- Step 5: Agent Skills -->
    <g transform="translate(25, 415)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">5. Kapso Agent Skills Ekle (İsteğe Bağlı):</text>
      <rect x="0" y="10" width="540" height="42" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="36" fill="#38BDF8" font-family="monospace" font-size="12.5">npx skills add gokapso/agent-skills</text>
    </g>
  </g>

  <!-- RIGHT PANEL: CLAUDE CODE -->
  <g transform="translate(730, 170)" filter="url(#shadow3)">
    <rect width="590" height="520" rx="16" fill="url(#termGrad)" stroke="#38BDF8" stroke-width="1.5" stroke-opacity="0.5" />
    
    <!-- Terminal Header Bar -->
    <rect x="0" y="0" width="590" height="42" rx="16" fill="#090E1A" />
    <circle cx="24" cy="21" r="5" fill="#EF4444" />
    <circle cx="42" cy="21" r="5" fill="#F59E0B" />
    <circle cx="60" cy="21" r="5" fill="#10B981" />
    <text x="90" y="26" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="700">Claude Code (Anthropic CLI)</text>
    <text x="560" y="26" fill="#38BDF8" font-family="monospace" font-size="11" text-anchor="end">MCP CLIENT</text>
    <line x1="0" y1="42" x2="590" y2="42" stroke="#1E293B" stroke-width="1" />

    <!-- Step 1: Add MCP -->
    <g transform="translate(25, 65)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">1. Kapso HTTP MCP Sunucusunu Tanıt:</text>
      <rect x="0" y="10" width="540" height="42" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="36" fill="#38BDF8" font-family="monospace" font-size="12">claude mcp add --transport http kapso https://api.kapso.ai/mcp</text>
    </g>

    <!-- Step 2: Login -->
    <g transform="translate(25, 140)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">2. Claude İçinde Oturum Doğrula:</text>
      <rect x="0" y="10" width="540" height="42" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="36" fill="#38BDF8" font-family="monospace" font-size="12.5">claude  # oturumda /mcp yazıp girişi tamamla</text>
      <text x="0" y="68" fill="#64748B" font-family="system-ui, -apple-system, sans-serif" font-size="11.5">Gerektiğinde oturumu 'claude --continue' ile yeniden aç.</text>
    </g>

    <!-- Step 3: Docs MCP -->
    <g transform="translate(25, 230)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">3. İsteğe Bağlı: Canlı Doküman MCP'si:</text>
      <rect x="0" y="10" width="540" height="42" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="36" fill="#BAE6FD" font-family="monospace" font-size="11.5">claude mcp add --transport http kapso-docs https://docs.kapso.ai/mcp</text>
    </g>

    <!-- Step 4: API Key Alternative -->
    <g transform="translate(25, 305)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">4. Alternatif: Proje API Anahtarı ile Başlatma:</text>
      <rect x="0" y="10" width="540" height="74" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="32" fill="#FCD34D" font-family="monospace" font-size="11.5">export KAPSO_API_KEY="anahtar_buraya"</text>
      <text x="16" y="52" fill="#CBD5E1" font-family="monospace" font-size="11.5">claude mcp add --transport http kapso https://api.kapso.ai/mcp \</text>
      <text x="16" y="70" fill="#CBD5E1" font-family="monospace" font-size="11.5">  --header "Authorization: Bearer $KAPSO_API_KEY"</text>
    </g>

    <!-- Step 5: Verification -->
    <g transform="translate(25, 415)">
      <text x="0" y="0" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="600">5. Yapılandırmayı Kontrol Et:</text>
      <rect x="0" y="10" width="540" height="42" rx="8" fill="#04060A" stroke="#1E293B" />
      <text x="16" y="36" fill="#38BDF8" font-family="monospace" font-size="12.5">claude mcp get kapso</text>
    </g>
  </g>
</svg>'''

with open(os.path.join(images_dir, 'kapso-codex-claude-kurulum.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_codex_claude)
print("Saved kapso-codex-claude-kurulum.svg")


# -------------------------------------------------------------
# 4. GENERATE kapso-7-24-mimari.svg
# -------------------------------------------------------------
svg_7_24_mimari = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 850" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad4" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#05070D" />
      <stop offset="50%" stop-color="#090F1C" />
      <stop offset="100%" stop-color="#04060A" />
    </linearGradient>
    <linearGradient id="glowCyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06B6D4" />
      <stop offset="100%" stop-color="#3B82F6" />
    </linearGradient>
    <filter id="shadow4" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="18" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <rect width="1600" height="850" fill="url(#bgGrad4)" />

  <!-- Header -->
  <g transform="translate(80, 45)">
    <rect width="170" height="28" rx="14" fill="#06B6D4" fill-opacity="0.15" stroke="#06B6D4" stroke-width="1" />
    <text x="85" y="19" fill="#22D3EE" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">SİSTEM MİMARİSİ</text>
    <text x="0" y="66" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="800">WhatsApp Yapay Zekâ Botu 7/24 Çalışma Mimarisi</text>
    <text x="0" y="94" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="15">Mesajın gelişi, Kapso ağ geçidi, otonom runtime seçenekleri ve insan devri döngüsü.</text>
  </g>

  <!-- TOP-RIGHT SEPARATE BOX: DEV ENVIRONMENT (CODEX & CLAUDE) -->
  <g transform="translate(1060, 40)" filter="url(#shadow4)">
    <rect width="460" height="150" rx="16" fill="#0D111E" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="6 6" />
    <rect x="20" y="18" width="140" height="22" rx="11" fill="#F59E0B" fill-opacity="0.2" />
    <text x="90" y="33" fill="#FCD34D" font-family="system-ui, -apple-system, sans-serif" font-size="10.5" font-weight="700" text-anchor="middle">GELİŞTİRME ASİSTANI</text>
    
    <text x="20" y="64" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="16" font-weight="700">OpenAI Codex &amp; Claude Code</text>
    <text x="20" y="85" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12">
      <tspan x="20" dy="0">MCP üzerinden yapılandırma, webhook kodu yazma</tspan>
      <tspan x="20" dy="16">ve test amaçlı bağlanır. Terminal kapandığında bot</tspan>
      <tspan x="20" dy="16">aşağıdaki runtime üzerinde 7/24 yaşamaya devam eder.</tspan>
    </text>
  </g>

  <!-- PIPELINE STAGES -->

  <!-- 1. KULLANICI / WHATSAPP -->
  <g transform="translate(80, 240)" filter="url(#shadow4)">
    <rect width="220" height="420" rx="18" fill="#0C1424" stroke="#10B981" stroke-width="1.5" />
    <rect x="0" y="0" width="220" height="6" rx="3" fill="#10B981" />
    
    <circle cx="110" cy="50" r="28" fill="#10B981" fill-opacity="0.2" stroke="#10B981" stroke-width="2" />
    <text x="110" y="57" fill="#34D399" font-family="monospace" font-size="20" text-anchor="middle">WA</text>
    
    <text x="110" y="110" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" text-anchor="middle">WhatsApp Kullanıcısı</text>
    <text x="110" y="132" fill="#10B981" font-family="monospace" font-size="11.5" text-anchor="middle">Mobil / Masaüstü</text>

    <g transform="translate(20, 160)" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94A3B8">
      <text x="0" y="0" fill="#E2E8F0" font-weight="600">• Gelen Mesaj İletimi:</text>
      <text x="0" y="18">Kullanıcı soru sorar</text>
      <text x="0" y="34">(Toplantı saati, üyelik vb.)</text>

      <text x="0" y="70" fill="#E2E8F0" font-weight="600">• 24 Saat Hizmet Penceresi:</text>
      <text x="0" y="88">Gelen mesajla birlikte</text>
      <text x="0" y="104">serbest cevap penceresi</text>
      <text x="0" y="120">aktif olur.</text>

      <text x="0" y="156" fill="#E2E8F0" font-weight="600">• Yanıt Alma:</text>
      <text x="0" y="174">Anında yapay zekâ</text>
      <text x="0" y="190">cevabı veya insan devri.</text>
    </g>
  </g>

  <!-- ARROW 1 -->
  <g transform="translate(305, 430)">
    <line x1="0" y1="0" x2="60" y2="0" stroke="#06B6D4" stroke-width="2.5" marker-end="url(#arrow)" />
    <text x="30" y="-12" fill="#38BDF8" font-family="monospace" font-size="11" text-anchor="middle">Cloud API</text>
  </g>

  <!-- 2. KAPSO ALTYAPISI -->
  <g transform="translate(370, 240)" filter="url(#shadow4)">
    <rect width="260" height="420" rx="18" fill="#0C1424" stroke="#06B6D4" stroke-width="1.5" />
    <rect x="0" y="0" width="260" height="6" rx="3" fill="#06B6D4" />
    
    <circle cx="130" cy="50" r="28" fill="#06B6D4" fill-opacity="0.2" stroke="#06B6D4" stroke-width="2" />
    <text x="130" y="57" fill="#38BDF8" font-family="monospace" font-size="18" text-anchor="middle">KAPSO</text>
    
    <text x="130" y="110" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" text-anchor="middle">Kapso Platformu</text>
    <text x="130" y="132" fill="#38BDF8" font-family="monospace" font-size="11.5" text-anchor="middle">Mesajlaşma Ağ Geçidi</text>

    <g transform="translate(20, 160)" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94A3B8">
      <text x="0" y="0" fill="#E2E8F0" font-weight="600">• Meta API Doğrulaması:</text>
      <text x="0" y="18">WABA oturumu, token</text>
      <text x="0" y="34">ve şablon yönetimi</text>

      <text x="0" y="70" fill="#E2E8F0" font-weight="600">• Ortak Gelen Kutusu:</text>
      <text x="0" y="88">Mesaj logları ve</text>
      <text x="0" y="104">durum takibi (Sent, Read)</text>

      <text x="0" y="140" fill="#E2E8F0" font-weight="600">• Tetikleme &amp; Yönlendirme:</text>
      <text x="0" y="158">Workflow veya harici</text>
      <text x="0" y="174">webhook yönlendirmesi</text>
    </g>
  </g>

  <!-- ARROW SPLIT -->
  <path d="M 630 380 L 710 330" stroke="#38BDF8" stroke-width="2" fill="none" />
  <path d="M 630 520 L 710 570" stroke="#8B5CF6" stroke-width="2" fill="none" />

  <!-- 3. RUNTIME OPTION A: KAPSO WORKFLOWS -->
  <g transform="translate(710, 240)" filter="url(#shadow4)">
    <rect width="360" height="200" rx="16" fill="#0B1322" stroke="#38BDF8" stroke-width="1.5" />
    <rect x="20" y="16" width="150" height="22" rx="11" fill="#06B6D4" fill-opacity="0.15" />
    <text x="95" y="31" fill="#38BDF8" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" text-anchor="middle">SEÇENEK 1: KODSUZ / WORKFLOW</text>

    <text x="20" y="62" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700">Kapso Workflows / AI Agent</text>
    <text x="20" y="84" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12">
      <tspan x="20" dy="0">Dahili görsel akış editörü.</tspan>
      <tspan x="20" dy="16">Mesaj tetikleyicisi + SSS Agent Düğümü + Koşul.</tspan>
      <tspan x="20" dy="16">Ayrı sunucu veya barındırma maliyeti gerektirmez.</tspan>
    </text>
    <rect x="20" y="145" width="320" height="34" rx="8" fill="#050912" stroke="#1E293B" />
    <text x="180" y="167" fill="#34D399" font-family="monospace" font-size="11.5" text-anchor="middle">Kapso Bulutunda 7/24 Canlı</text>
  </g>

  <!-- 3. RUNTIME OPTION B: SERVERLESS WEBHOOK -->
  <g transform="translate(710, 460)" filter="url(#shadow4)">
    <rect width="360" height="200" rx="16" fill="#0B1322" stroke="#8B5CF6" stroke-width="1.5" />
    <rect x="20" y="16" width="165" height="22" rx="11" fill="#8B5CF6" fill-opacity="0.15" />
    <text x="102" y="31" fill="#C084FC" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" text-anchor="middle">SEÇENEK 2: WEBHOOK + SERVERLESS</text>

    <text x="20" y="62" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="17" font-weight="700">Cloudflare Workers / Vercel API</text>
    <text x="20" y="84" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="12">
      <tspan x="20" dy="0">İş mantığı, CRM ve özel veritabanı entegrasyonu.</tspan>
      <tspan x="20" dy="16">Webhook güvenliği, idempotency ve loglama.</tspan>
      <tspan x="20" dy="16">Kendi API anahtarlarınız ile tam denetim.</tspan>
    </text>
    <rect x="20" y="145" width="320" height="34" rx="8" fill="#050912" stroke="#1E293B" />
    <text x="180" y="167" fill="#C084FC" font-family="monospace" font-size="11.5" text-anchor="middle">Sunucusuz Fonksiyonda 7/24 Canlı</text>
  </g>

  <!-- ARROW TO LLM & HANDOFF -->
  <path d="M 1070 340 L 1150 400" stroke="#06B6D4" stroke-width="2" fill="none" />
  <path d="M 1070 560 L 1150 500" stroke="#8B5CF6" stroke-width="2" fill="none" />

  <!-- 4. LLM API & HUMAN HANDOFF -->
  <g transform="translate(1150, 240)" filter="url(#shadow4)">
    <rect width="370" height="420" rx="18" fill="#0C1424" stroke="#EC4899" stroke-width="1.5" />
    <rect x="0" y="0" width="370" height="6" rx="3" fill="#EC4899" />

    <circle cx="185" cy="50" r="28" fill="#EC4899" fill-opacity="0.2" stroke="#EC4899" stroke-width="2" />
    <text x="185" y="57" fill="#F472B6" font-family="monospace" font-size="18" text-anchor="middle">AI + İNSAN</text>

    <text x="185" y="110" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="700" text-anchor="middle">Karar ve Yanıt Katmanı</text>
    <text x="185" y="132" fill="#F472B6" font-family="monospace" font-size="11.5" text-anchor="middle">OpenAI / Anthropic / Operatör</text>

    <g transform="translate(25, 160)" font-family="system-ui, -apple-system, sans-serif" font-size="12" fill="#94A3B8">
      <rect width="320" height="85" rx="10" fill="#070D18" stroke="#1E293B" />
      <text x="15" y="24" fill="#38BDF8" font-weight="700">1. Otomatik Yapay Zekâ Yanıtı</text>
      <text x="15" y="44" fill="#CBD5E1">SSS havuzundan kontrol edilen,</text>
      <text x="15" y="60" fill="#CBD5E1">halüsinasyondan arındırılmış kesin cevap.</text>

      <rect y="105" width="320" height="105" rx="10" fill="#070D18" stroke="#F59E0B" stroke-opacity="0.4" />
      <text x="15" y="129" fill="#FCD34D" font-weight="700">2. İnsan Operatöre Devir (Handoff)</text>
      <text x="15" y="149" fill="#CBD5E1">Fiyat taahhüdü, satış kapatma veya</text>
      <text x="15" y="165" fill="#CBD5E1">özel kişisel veri talebinde bot durur;</text>
      <text x="15" y="181" fill="#FCA5A5">Kapso Inbox üzerinden insana devreder.</text>
    </g>

    <!-- Loopback to WhatsApp -->
    <rect x="25" y="360" width="320" height="38" rx="8" fill="#10B981" fill-opacity="0.1" stroke="#10B981" stroke-width="1" />
    <text x="185" y="384" fill="#34D399" font-family="monospace" font-size="11.5" font-weight="600" text-anchor="middle">Kapso API → WhatsApp Yanıtı</text>
  </g>

  <!-- Bottom Clarification Footnote -->
  <g transform="translate(80, 700)">
    <rect width="1440" height="60" rx="12" fill="#080F1E" stroke="#1E293B" stroke-width="1" />
    <text x="30" y="35" fill="#22D3EE" font-family="monospace" font-size="13" font-weight="700">MİMARİ DİPNOT:</text>
    <text x="165" y="35" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13">
      Codex veya Claude Code'u açık bırakmak sunucu değildir. Gerçek 7/24 çalışma Kapso Workflow veya dışarıdaki sunucusuz (serverless) webhook ile sağlanır.
    </text>
  </g>
</svg>'''

with open(os.path.join(images_dir, 'kapso-7-24-mimari.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_7_24_mimari)
print("Saved kapso-7-24-mimari.svg")


# -------------------------------------------------------------
# 5. GENERATE kapso-maliyet-katmanlari.svg
# -------------------------------------------------------------
svg_maliyet = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 680" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070A12" />
      <stop offset="50%" stop-color="#0B1120" />
      <stop offset="100%" stop-color="#05070D" />
    </linearGradient>
    <filter id="shadow5" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="8" stdDeviation="14" flood-color="#000000" flood-opacity="0.6" />
    </filter>
  </defs>

  <rect width="1400" height="680" fill="url(#bgGrad5)" />

  <!-- Header -->
  <g transform="translate(80, 45)">
    <rect width="180" height="28" rx="14" fill="#06B6D4" fill-opacity="0.15" stroke="#06B6D4" stroke-width="1" />
    <text x="90" y="19" fill="#22D3EE" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" text-anchor="middle" letter-spacing="1">FİYAT VE MALİYET ANALİZİ</text>
    <text x="0" y="66" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="800">WhatsApp Yapay Zekâ Botunun 4 Maliyet Katmanı</text>
    <text x="0" y="94" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="15">"Ücretsiz Başlangıç" ile "Sınırsız Bedava WhatsApp Trafiği" arasındaki ayrım (4 Kasım 2026).</text>
  </g>

  <!-- 4 TIERS -->

  <!-- Tier 1: Kapso Platformu -->
  <g transform="translate(80, 160)" filter="url(#shadow5)">
    <rect width="280" height="420" rx="16" fill="#0C1322" stroke="#06B6D4" stroke-width="1.5" />
    <rect x="0" y="0" width="280" height="6" rx="3" fill="#06B6D4" />
    
    <text x="24" y="38" fill="#38BDF8" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">KATMAN 1</text>
    <text x="24" y="66" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700">Kapso Platformu</text>
    <text x="24" y="88" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13">Mesajlaşma &amp; Araç Altyapısı</text>

    <!-- Pricing Box -->
    <rect x="24" y="108" width="232" height="70" rx="10" fill="#060A14" stroke="#1E293B" />
    <text x="38" y="134" fill="#22D3EE" font-family="monospace" font-size="18" font-weight="800">Free: $0 / ay</text>
    <text x="38" y="156" fill="#CBD5E1" font-family="system-ui, -apple-system, sans-serif" font-size="12">Pro: $25 / ay (100k mesaj)</text>

    <g transform="translate(24, 205)" font-family="system-ui, -apple-system, sans-serif" font-size="12.5" fill="#94A3B8">
      <text x="0" y="0" fill="#E2E8F0" font-weight="600">• Aylık 2.000 Mesaj Kotası:</text>
      <text x="0" y="18">Free pakette platform kotası</text>
      <text x="0" y="34">aylık 2.000 mesajdır.</text>

      <text x="0" y="68" fill="#E2E8F0" font-weight="600">• Bağlı Numara:</text>
      <text x="0" y="86">1 adet canlı numara ve</text>
      <text x="0" y="102">Sandbox test alanı dahildir.</text>

      <text x="0" y="136" fill="#E2E8F0" font-weight="600">• $2 Hoş Geldin Kredisi:</text>
      <text x="0" y="154">İlk denemeler için bakiye.</text>
    </g>
  </g>

  <!-- Tier 2: Meta / WhatsApp -->
  <g transform="translate(390, 160)" filter="url(#shadow5)">
    <rect width="280" height="420" rx="16" fill="#0C1322" stroke="#10B981" stroke-width="1.5" />
    <rect x="0" y="0" width="280" height="6" rx="3" fill="#10B981" />

    <text x="24" y="38" fill="#34D399" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">KATMAN 2</text>
    <text x="24" y="66" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700">Meta / WhatsApp</text>
    <text x="24" y="88" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13">Resmî API Kullanım Bedeli</text>

    <!-- Pricing Box -->
    <rect x="24" y="108" width="232" height="70" rx="10" fill="#060A14" stroke="#1E293B" />
    <text x="38" y="134" fill="#34D399" font-family="monospace" font-size="16" font-weight="800">1.000 Servis Mesajı</text>
    <text x="38" y="156" fill="#FCD34D" font-family="system-ui, -apple-system, sans-serif" font-size="11.5">1 Ekim 2026 Meta Kuralları</text>

    <g transform="translate(24, 205)" font-family="system-ui, -apple-system, sans-serif" font-size="12.5" fill="#94A3B8">
      <text x="0" y="0" fill="#E2E8F0" font-weight="600">• 1 Ekim 2026 Değişikliği:</text>
      <text x="0" y="18">Üretim numaralarında servis</text>
      <text x="0" y="34">mesajları ücretlendirilmeye</text>
      <text x="0" y="50">başlamıştır.</text>

      <text x="0" y="84" fill="#E2E8F0" font-weight="600">• Aylık 1.000 Ücretsiz Servis:</text>
      <text x="0" y="102">Numara başına ilk 1.000</text>
      <text x="0" y="118">teslim edilen servis mesajı $0.</text>

      <text x="0" y="152" fill="#E2E8F0" font-weight="600">• Reklam İstisnası:</text>
      <text x="0" y="170">CTWA reklamı 72 saat ücretsiz.</text>
    </g>
  </g>

  <!-- Tier 3: Yapay Zekâ LLM Token -->
  <g transform="translate(700, 160)" filter="url(#shadow5)">
    <rect width="280" height="420" rx="16" fill="#0C1322" stroke="#8B5CF6" stroke-width="1.5" />
    <rect x="0" y="0" width="280" height="6" rx="3" fill="#8B5CF6" />

    <text x="24" y="38" fill="#C084FC" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">KATMAN 3</text>
    <text x="24" y="66" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700">Yapay Zekâ (LLM API)</text>
    <text x="24" y="88" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13">Dil Modeli Token Tüketimi</text>

    <!-- Pricing Box -->
    <rect x="24" y="108" width="232" height="70" rx="10" fill="#060A14" stroke="#1E293B" />
    <text x="38" y="134" fill="#C084FC" font-family="monospace" font-size="16" font-weight="800">Token Başına</text>
    <text x="38" y="156" fill="#CBD5E1" font-family="system-ui, -apple-system, sans-serif" font-size="11.5">OpenAI / Claude / Gemini API</text>

    <g transform="translate(24, 205)" font-family="system-ui, -apple-system, sans-serif" font-size="12.5" fill="#94A3B8">
      <text x="0" y="0" fill="#E2E8F0" font-weight="600">• Abonelikten Bağımsız:</text>
      <text x="0" y="18">Claude Pro veya ChatGPT Plus</text>
      <text x="0" y="34">7/24 bot API'sini karşılamaz.</text>

      <text x="0" y="68" fill="#E2E8F0" font-weight="600">• Token Tüketimi:</text>
      <text x="0" y="86">Gelen mesaj + konuşma</text>
      <text x="0" y="102">geçmişi + sistem talimatı.</text>

      <text x="0" y="136" fill="#E2E8F0" font-weight="600">• Model Seçimi:</text>
      <text x="0" y="154">Hafif modeller (GPT-4o mini,</text>
      <text x="0" y="170">Haiku) maliyeti düşürür.</text>
    </g>
  </g>

  <!-- Tier 4: Barındırma & Sunucu -->
  <g transform="translate(1010, 160)" filter="url(#shadow5)">
    <rect width="280" height="420" rx="16" fill="#0C1322" stroke="#EC4899" stroke-width="1.5" />
    <rect x="0" y="0" width="280" height="6" rx="3" fill="#EC4899" />

    <text x="24" y="38" fill="#F472B6" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700">KATMAN 4</text>
    <text x="24" y="66" fill="#FFFFFF" font-family="system-ui, -apple-system, sans-serif" font-size="20" font-weight="700">Barındırma (Hosting)</text>
    <text x="24" y="88" fill="#94A3B8" font-family="system-ui, -apple-system, sans-serif" font-size="13">Webhook veya Harici Sunucu</text>

    <!-- Pricing Box -->
    <rect x="24" y="108" width="232" height="70" rx="10" fill="#060A14" stroke="#1E293B" />
    <text x="38" y="134" fill="#F472B6" font-family="monospace" font-size="16" font-weight="800">$0 - $5 / ay</text>
    <text x="38" y="156" fill="#CBD5E1" font-family="system-ui, -apple-system, sans-serif" font-size="11.5">Workflow veya Cloudflare</text>

    <g transform="translate(24, 205)" font-family="system-ui, -apple-system, sans-serif" font-size="12.5" fill="#94A3B8">
      <text x="0" y="0" fill="#E2E8F0" font-weight="600">• Kapso Workflow İse:</text>
      <text x="0" y="18">Harici sunucu gerekmez,</text>
      <text x="0" y="34">ek barındırma maliyeti $0.</text>

      <text x="0" y="68" fill="#E2E8F0" font-weight="600">• Sunucusuz Webhook:</text>
      <text x="0" y="86">Cloudflare Workers veya</text>
      <text x="0" y="102">Vercel ücretsiz katmanı</text>
      <text x="0" y="118">genellikle başlangıçta yeterli.</text>

      <text x="0" y="152" fill="#E2E8F0" font-weight="600">• CRM Entegrasyonu:</text>
      <text x="0" y="170">Veritabanı çağrıları.</text>
    </g>
  </g>

  <!-- Bottom Summary -->
  <g transform="translate(80, 600)">
    <rect width="1210" height="50" rx="10" fill="#050914" stroke="#1E293B" />
    <text x="25" y="31" fill="#38BDF8" font-family="monospace" font-size="12" font-weight="700">ÖZET HESAP:</text>
    <text x="135" y="31" fill="#E2E8F0" font-family="system-ui, -apple-system, sans-serif" font-size="12.5">
      Başlangıçta Kapso Free + Meta 1.000 ücretsiz servis mesajı ile 0 TL altyapı maliyetiyle başlayabilir; yalnızca ufak LLM token bedeliyle çalışabilirsiniz.
    </text>
  </g>
</svg>'''

with open(os.path.join(images_dir, 'kapso-maliyet-katmanlari.svg'), 'w', encoding='utf-8') as f:
    f.write(svg_maliyet)
print("Saved kapso-maliyet-katmanlari.svg")


# -------------------------------------------------------------
# 6. GENERATE kapso-whatsapp-bot-kapak.webp & kapso-whatsapp-bot-og.webp
# -------------------------------------------------------------
def create_cover(width, height, is_og=False):
    img = Image.new('RGB', (width, height), color=(6, 9, 16))
    draw = ImageDraw.Draw(img)

    # Gradient background
    for y in range(height):
        ratio = y / height
        r = int(6 + (14 - 6) * ratio * 0.8)
        g = int(9 + (18 - 9) * ratio * 0.8)
        b = int(16 + (34 - 16) * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Decorative cyber grid lines
    grid_color = (25, 38, 64)
    step = 60 if not is_og else 50
    for x in range(0, width, step):
        draw.line([(x, 0), (x, height)], fill=grid_color, width=1)
    for y in range(0, height, step):
        draw.line([(0, y), (width, y)], fill=grid_color, width=1)

    # Radial gradient glow on bottom-right and top-left
    # We can draw layered alpha circles
    glow_overlay = Image.new('RGBA', (width, height), (0, 0, 0, 0))
    glow_draw = ImageDraw.Draw(glow_overlay)
    
    # Cyan glow right side
    cx, cy = int(width * 0.82), int(height * 0.5)
    for rad in range(350, 50, -30):
        alpha = int((350 - rad) / 350 * 50)
        glow_draw.ellipse([cx - rad, cy - rad, cx + rad, cy + rad], fill=(6, 182, 212, alpha))
        
    # Indigo glow left
    cx2, cy2 = int(width * 0.2), int(height * 0.25)
    for rad in range(300, 50, -30):
        alpha = int((300 - rad) / 300 * 35)
        glow_draw.ellipse([cx2 - rad, cy2 - rad, cx2 + rad, cy2 + rad], fill=(99, 102, 241, alpha))

    img.paste(Image.alpha_composite(img.convert('RGBA'), glow_overlay).convert('RGB'))
    draw = ImageDraw.Draw(img)

    # Fonts
    font_bold_path = "C:\\Windows\\Fonts\\segoeuib.ttf"
    font_reg_path = "C:\\Windows\\Fonts\\segoeui.ttf"
    font_mono_path = "C:\\Windows\\Fonts\\consolab.ttf"

    scale = 1.0 if not is_og else 0.75

    title_size = int(60 * scale)
    title_sub_size = int(34 * scale)
    body_size = int(20 * scale)
    badge_size = int(15 * scale)

    font_title = ImageFont.truetype(font_bold_path, title_size)
    font_title2 = ImageFont.truetype(font_bold_path, int(title_size * 0.95))
    font_sub = ImageFont.truetype(font_bold_path, title_sub_size)
    font_body = ImageFont.truetype(font_reg_path, body_size)
    font_badge = ImageFont.truetype(font_bold_path, badge_size)
    font_mono = ImageFont.truetype(font_mono_path, int(15 * scale))

    # Left content position
    lx = int(90 * scale)
    ly = int(90 * scale)

    # Category Pill
    pill_w = int(320 * scale)
    pill_h = int(36 * scale)
    draw.rounded_rectangle([lx, ly, lx + pill_w, ly + pill_h], radius=int(18 * scale), fill=(6, 182, 212, 35), outline=(6, 182, 212), width=1)
    draw.text((lx + int(18 * scale), ly + int(8 * scale)), "DİJİTAL HEZARFEN  •  REHBER & MİMARİ", fill=(34, 211, 238), font=font_badge)

    # Main Big Title
    t1_y = ly + int(60 * scale)
    draw.text((lx, t1_y), "WHATSAPP BOTUNU", fill=(255, 255, 255), font=font_title)
    
    t2_y = t1_y + int(70 * scale)
    draw.text((lx, t2_y), "KENDİN KUR", fill=(6, 182, 212), font=font_title2)

    # Subtitle
    sub_y = t2_y + int(75 * scale)
    draw.text((lx, sub_y), "Kapso + Codex + Claude Code", fill=(192, 132, 252), font=font_sub)

    # Tagline / highlights
    tags_y = sub_y + int(55 * scale)
    highlights = [
        "✓ 7/24 Kesintisiz Otonom Ajan Mimarisi",
        "✓ Resmî Meta WhatsApp Business API & Sandbox",
        "✓ Model Bağımsız MCP Terminal Entegrasyonu",
        "✓ 1 Ekim 2026 Meta Kuralları & Ücretsiz Paket Analizi"
    ]
    for i, h in enumerate(highlights):
        color = (203, 213, 225) if i < 3 else (252, 211, 77)
        draw.text((lx, tags_y + i * int(32 * scale)), h, fill=color, font=font_body)

    # Date badge bottom left
    date_y = tags_y + len(highlights) * int(32 * scale) + int(35 * scale)
    draw.text((lx, date_y), "📅 4 KASIM 2026 • TÜRKÇE KURULUM REHBERİ", fill=(148, 163, 184), font=font_mono)

    # Right side: Mock WhatsApp Chat Container
    rx = int(width * 0.58) if not is_og else int(width * 0.56)
    rw = int(width * 0.35)
    ry = int(100 * scale)
    rh = int(height * 0.74)

    # Phone / Chat Canvas Box
    draw.rounded_rectangle([rx, ry, rx + rw, ry + rh], radius=int(24 * scale), fill=(10, 16, 28), outline=(30, 41, 59), width=2)
    # Header of phone
    draw.rounded_rectangle([rx, ry, rx + rw, ry + int(65 * scale)], radius=int(24 * scale), fill=(15, 23, 42))
    draw.rectangle([rx, ry + int(45 * scale), rx + rw, ry + int(65 * scale)], fill=(15, 23, 42))
    
    # Phone header content
    draw.ellipse([rx + int(18 * scale), ry + int(16 * scale), rx + int(50 * scale), ry + int(48 * scale)], fill=(16, 185, 129))
    draw.text((rx + int(26 * scale), ry + int(20 * scale)), "WA", fill=(255, 255, 255), font=font_mono)
    draw.text((rx + int(60 * scale), ry + int(16 * scale)), "Dijital Hezarfen Asistanı", fill=(255, 255, 255), font=font_badge)
    draw.text((rx + int(60 * scale), ry + int(36 * scale)), "Kapso 7/24 AI Agent • Çevrimiçi", fill=(52, 211, 153), font=font_mono)

    # Chat Bubble 1 (User - Right)
    b1_y = ry + int(90 * scale)
    b1_w = int(rw * 0.78)
    b1_x = rx + rw - b1_w - int(20 * scale)
    b1_h = int(75 * scale)
    draw.rounded_rectangle([b1_x, b1_y, b1_x + b1_w, b1_y + b1_h], radius=int(14 * scale), fill=(20, 83, 45))
    draw.text((b1_x + int(14 * scale), b1_y + int(12 * scale)), "Toplantı günleri ne zaman?", fill=(255, 255, 255), font=font_body)
    draw.text((b1_x + int(14 * scale), b1_y + int(36 * scale)), "Katılım için ne gerekiyor?", fill=(255, 255, 255), font=font_body)
    draw.text((b1_x + b1_w - int(55 * scale), b1_y + b1_h - int(20 * scale)), "14:02 ✓✓", fill=(134, 239, 172), font=font_mono)

    # Chat Bubble 2 (AI Agent - Left)
    b2_y = b1_y + b1_h + int(25 * scale)
    b2_w = int(rw * 0.88)
    b2_x = rx + int(20 * scale)
    b2_h = int(140 * scale)
    draw.rounded_rectangle([b2_x, b2_y, b2_x + b2_w, b2_y + b2_h], radius=int(14 * scale), fill=(15, 23, 42), outline=(30, 41, 59), width=1)
    draw.text((b2_x + int(14 * scale), b2_y + int(12 * scale)), "🤖 Dijital Hezarfen AI:", fill=(56, 189, 248), font=font_badge)
    draw.text((b2_x + int(14 * scale), b2_y + int(38 * scale)), "Toplantılarımız her Perşembe 19:30'da", fill=(241, 245, 249), font=font_body)
    draw.text((b2_x + int(14 * scale), b2_y + int(64 * scale)), "gerçekleşiyor. Katılım koşulları ve", fill=(241, 245, 249), font=font_body)
    draw.text((b2_x + int(14 * scale), b2_y + int(90 * scale)), "SSS dökümanı hazır. İleteyim mi?", fill=(241, 245, 249), font=font_body)
    draw.text((b2_x + b2_w - int(55 * scale), b2_y + b2_h - int(20 * scale)), "14:02", fill=(148, 163, 184), font=font_mono)

    # Chat Bubble 3 (System Status Pill - Center)
    b3_y = b2_y + b2_h + int(25 * scale)
    b3_w = int(rw * 0.84)
    b3_x = rx + int((rw - b3_w) / 2)
    b3_h = int(45 * scale)
    draw.rounded_rectangle([b3_x, b3_y, b3_x + b3_w, b3_y + b3_h], radius=int(10 * scale), fill=(6, 182, 212, 20), outline=(6, 182, 212), width=1)
    draw.text((b3_x + int(16 * scale), b3_y + int(14 * scale)), "⚡ Kapso MCP • Runtime 7/24 Aktif", fill=(34, 211, 238), font=font_mono)

    # Save as WebP
    return img

cover_1600 = create_cover(1600, 900, is_og=False)
cover_1600.save(os.path.join(images_dir, 'kapso-whatsapp-bot-kapak.webp'), 'WEBP', quality=95)
print("Saved kapso-whatsapp-bot-kapak.webp (1600x900)")

cover_og = create_cover(1200, 630, is_og=True)
cover_og.save(os.path.join(images_dir, 'kapso-whatsapp-bot-og.webp'), 'WEBP', quality=95)
print("Saved kapso-whatsapp-bot-og.webp (1200x630)")

print("All graphics generated successfully!")
