---
title: "WhatsApp'ta Kendi Yapay Zekâ Botunu Kur: Kapso, Codex ve Claude Code Rehberi"
slug: "kapso-whatsapp-chatbot-codex-claude-code-kurulum"
description: "Kapso ile WhatsApp botu nasıl kurulur? Ücretsiz başlangıç, Codex ve Claude Code MCP bağlantısı, 7/24 çalışan ajan, görseller ve video rehberleri."
date: "2026-11-04"
updated: "2026-11-04"
category: "Yapay Zekâ ve Otomasyon"
tags: ["Kapso", "WhatsApp chatbot", "WhatsApp AI agent", "Codex", "Claude Code", "MCP", "WhatsApp otomasyon"]
cover_image: "/images/kapso-whatsapp-bot-kapak.webp"
cover_alt: "Kapso üzerinden WhatsApp bağlantısı; Codex ve Claude Code ile yapay zekâ botu kurulumunun şematik anlatımı"
---

# WhatsApp'ta Kendi Yapay Zekâ Botunu Kur: Kapso + Codex + Claude Code

**Bir WhatsApp botu kurmak için baştan bir mesajlaşma altyapısı yazmak zorunda değilsin.** Kapso resmî WhatsApp Business Platform'a bağlanıyor; Codex veya Claude Code ise o bağlantının etrafındaki otomasyonu kurmana yardımcı olabiliyor. Doğru kurguda gelen mesajları karşılayan, sık sorulan soruları yanıtlayan, gerektiğinde bir insana devreden ve sohbet geçmişini takip eden bir sistem oluşturabiliyorsun.

Buradaki kritik ayrım şu: **Kapso mesajlaşma altyapısı, Codex ve Claude Code geliştirme asistanlarıdır.** Codex'i WhatsApp'a bağlamak, tek başına 7/24 açık bir chatbot yaratmaz. Kesintisiz cevap veren bir bot için Kapso içinde çalışan bir **Workflow/Agent** veya dışarıda yayınlanmış bir **webhook + uygulama** gerekir. Bu yazıda ikisini de anlatacağım.

Kapso'nun ücretsiz başlangıç paketi bulunuyor. Ancak “ücretsiz paket” ile “her koşulda sınırsız ücretsiz WhatsApp trafiği” aynı şey değil. Fiyat ve Meta ücretlerini aşağıda ayrıca ayırdım.

> **Bu rehberin kapsamı (4 Kasım 2026):** Kapso hesabını açmak, WhatsApp numarası bağlamak, Codex/Claude Code ile en hızlı MCP kurulumunu yapmak, basit bir botun 7/24 cevap vermesi için gerekli mimariyi anlamak, gerçek kurulum videolarını ve görsel kaynaklarını kullanmak.

![Kapso ile WhatsApp Yapay Zekâ Botu Hızlı Kurulum Adımları](/images/kapso-bes-adim.svg)

## Kapso nedir, ne işe yarar?

[Kapso](https://kapso.com/) WhatsApp'ın resmî API'si üzerinden mesaj gönderme, mesaj alma ve otomasyon kurmayı kolaylaştıran bir platform. İçerisinde ortak gelen kutusu (Inbox), şablon yönetimi, webhook, API, MCP, görsel Workflow/Agent seçenekleri ve log takibi gibi parçalar bulunuyor. WhatsApp'ı uygulama içindeki bir sohbet kutusundan çıkarıp iş süreçlerinin bir parçasına dönüştürmek için kullanılıyor.

Örneğin bir hizmet işletmesi, WhatsApp'tan yazan kişiyi karşılayıp hizmet kapsamını açıklayabilir, birkaç soruyla ihtiyacını anlayabilir ve uygun kişiyle görüşmeye yönlendirebilir. Bir müşteri temsilcisi her mesaja ilk yanıtı vermek zorunda kalmaz. Ama satış, iptal, fiyat taahhüdü veya özel bir kişisel veri söz konusuysa devri insana bırakmak daha sağlıklı olur.

**Resmî bağlantılar:** [Kapso](https://kapso.com/) · [Dashboard](https://app.kapso.ai/) · [Dokümantasyon](https://docs.kapso.ai/docs/build-with-ai) · [GitHub / Kapso Agent Skills](https://github.com/gokapso/agent-skills)

## En hızlı kurulum: Beş adımda çalışma mantığı

1. [Kapso'da hesap aç](https://app.kapso.ai/) ve bir proje oluştur.
2. `Connected numbers → Connect new number` bölümünden hazır numara, WhatsApp Business uygulaması veya kendi SIM numaranı seç; Meta bağlantı adımlarını tamamla. Sadece denemek için önce **WhatsApp → Sandbox** alanını da kullanabilirsin.
3. Codex veya Claude Code'u Kapso'nun MCP sunucusuna bağla. Bu işlem terminalde birkaç komutla, çoğu durumda API anahtarını elle yapıştırmadan tarayıcı onayıyla tamamlanabilir.
4. Ajana istediğin işlevi tarif et: “Gelen mesajı al, sık sorulan soruları cevapla, bilmediğinde insana aktar.”
5. **7/24 çalışacak** bir Kapso Workflow/Agent kur veya webhook alan sunucusuz uygulamayı yayınla. Test mesajı gönder, logları incele, sonra gerçek numaraya geç.

**Önemli:** İlk üç adım Kapso'yu geliştirme asistanına tanıtır. 4. ve 5. adım gerçek otomasyonun kurulmasını ve yayınlanmasını kapsar.

## 1. Kapso hesabı aç ve WhatsApp bağlantısını seç

Önce [app.kapso.ai](https://app.kapso.ai/) üzerinden bir proje oluştur. Kapso'nun resmî dökümantasyonu, WhatsApp bağlantısı için `Connected numbers → Connect new number` yolunu kullanıyor. Meta oturum açma ekranı, işletme hesabı ve bazı doğrulamalar bağlantı sırasında karşına çıkabilir. Önceden tanımlı bir Meta Business Portfolio'n yoksa uygun akışta oluşturabilirsin; varsa doğru portföy ve WhatsApp Business Account (WABA) için yetkin bulunmalı.

![Kapso ile WhatsApp Bağlantısında 3 Temel Yol](/images/kapso-uc-baglanti-yolu.svg)

### Yol A: Kapso'nun hazır ABD numarası — en hızlı deneme

Kapso'da **Instant setup** seç. Meta içindeki numara ekranında **pre-verified** olarak sunulan numaralardan birini seç; kendi numaranı girme. İşletme portföyünü ve WhatsApp Business hesabını seçip erişim izinlerini onayla. Meta bağlantıyı bitirdikten sonra Kapso numarayı projenle ilişkilendirir.

Bu seçenek hızlı başlangıç için iyi. Ancak Meta'nın inceleme ve uygunluk kontrolleri tamamlanmadan üretim ortamında tüm işlemlerin çalışacağını varsayma.

**Adım adım resmî rehber:** [Connect WhatsApp — Instant setup](https://docs.kapso.ai/docs/how-to/whatsapp/connect-whatsapp)

### Yol B: Mevcut WhatsApp Business numaran kalsın

Telefonunda **WhatsApp Business** uygulamasını kullanmaya devam etmek istiyorsan `WhatsApp Business App` seçeneğini seç. Meta akışında mevcut numaranı gir; Meta numaranın Business uygulamasında etkin olduğunu algılar. Sonraki ekranda bilgisayarda görünen QR kodunu telefonun WhatsApp Business uygulamasıyla eşleştir. Sohbet geçmişini paylaşma seçeneğini dikkatle değerlendir; belgeye göre bu karar sonradan değiştirilemiyor. Bağlantı sağlandığında mesajlar hem uygulamada hem Kapso'da görünebilir.

Bu eşzamanlı kullanım yoluna *coexistence* deniyor. Kolaylık sunmasına rağmen Kapso, üretim kararlılığı açısından ayrı Cloud API bağlantısının daha sağlam olabildiğini belirtiyor.

**Adım adım rehber:** [Connect WhatsApp — Business App](https://docs.kapso.ai/docs/how-to/whatsapp/connect-whatsapp) · [Coexistence sorunları](https://docs.kapso.ai/docs/how-to/whatsapp/coexistence-troubleshooting)

### Yol C: Kendi SIM numaranla yalnızca API kullan

Kendi numaranla özel Cloud API bağlantısı kuracaksan `Bring your own SIM` seç. SMS veya sesli çağrıyla numaranı doğrula. Bu senaryoda numaranın eski sağlayıcıdan ve gerekiyorsa Business uygulamasındaki aktif kayıtlarından doğru şekilde ayrılması gerekir; bu seçenek uygulamayı aynı numarayla kullanmaya devam etmeye yönelik değildir.

**Bir hata yapma:** Numaran başka bir BSP/sağlayıcıda bağlıysa sadece “bağlantıyı kes” düğmesine basmak yeterli olmayabilir. Önce eski sağlayıcının WABA üzerindeki **credit line** tahsisini de kaldırdığını doğrula. Sırf bağlantı sorunu çözmek için Meta'da WABA'yı veya telefondaki WhatsApp hesabını silme. [Kapso'nun kurtarma yönergelerini](https://docs.kapso.ai/docs/how-to/whatsapp/coexistence-troubleshooting) izle.

## 2. Üretim numaran olmadan Sandbox'ta dene

Gerçek numaraya dokunmak istemiyorsan önce Sandbox'ta test yapabilirsin:

1. Projende `WhatsApp → Sandbox` bölümüne git.
2. `Add Test Number` ile mesaj gönderecek telefon numaranı ekle.
3. Kapso'nun gösterdiği **6 karakterli aktivasyon kodunu** al.
4. `Open WhatsApp` ile açılan sohbete bu kodu gönder.
5. Etkinleşen Sandbox numarasını agent veya akış ayarlarında seç ve test et.

Aktivasyon kodunun **15 dakikalık** süresi var. Bağlantı kuramazsan yeni bir oturum açıp yeni kod üret. [Resmî Sandbox kılavuzu](https://docs.kapso.ai/docs/how-to/whatsapp/use-sandbox-for-testing).

![Kapso WhatsApp Sandbox Test Ortamı ve Sohbet Doğrulaması](/images/kapso_sandbox.png)
*Kaynak: [Kapso resmî sitesi](https://kapso.com/). Bu görsel gerçek bir Kapso varlığıdır.*

## 3. Codex ile Kapso'yu bağla — en hızlı yöntem

Buradaki amaç, Codex'e mevcut Kapso projesini görme ve izin verirsen onun içindeki numara, mesaj, şablon, webhook ve workflow gibi kaynaklarla çalışma imkânı vermek.

![OpenAI Codex ve Claude Code ile Kapso MCP Kurulumu](/images/kapso-codex-claude-kurulum.svg)

**Ön koşul:** Bilgisayarında çalışan [OpenAI Codex](https://openai.com/codex/) ve oluşturulmuş bir Kapso projesi.

Terminalde:

```bash
codex mcp add kapso --url https://api.kapso.ai/mcp
codex mcp login kapso
```

İkinci komut tarayıcıda Kapso oturumunu açar. Projeni seçip istenen izinleri onayla. İlk bağlantıyı **salt okunur** izinle açman daha güvenli. Ardından Codex oturumunu yeniden başlat veya `codex resume --last` ile devam et. Codex içinde `/mcp` komutuyla bağlantıyı kontrol et.

Codex'e ilk mesajın şu olsun:

```text
Kapso projemin durumunu ve bağlı WhatsApp numaralarını listele.
Hiç mesaj gönderme, şablonları veya webhook'ları değiştirme.
Bağlantıyı doğruladıktan sonra bir WhatsApp SSS asistanı oluşturmak
ve 7/24 çalıştırmak için iki uygulama yolu öner.
```

İstersen Kodex'in güncel Kapso belgelerini de okuyabilmesi için ayrıca **dokümantasyon MCP**'sini kur:

```bash
codex mcp add kapso-docs --url https://docs.kapso.ai/mcp
```

Resmî sayfa: [Use Codex with WhatsApp](https://kapso.com/whatsapp-codex) · [MCP belgesi](https://docs.kapso.ai/docs/whatsapp/mcp).

### Alternatif: Proje API anahtarı ile Codex kurulumu

OAuth/tarayıcı yöntemi yerine proje anahtarı kullanacaksan Kapso Dashboard'dan bir API key oluştur. Anahtarı terminal ortam değişkeninde tut; projeye veya Git deposuna yazma.

**macOS/Linux terminali:**

```bash
export KAPSO_API_KEY="ANAHTAR_BURAYA"
codex mcp add kapso --url https://api.kapso.ai/mcp --bearer-token-env-var KAPSO_API_KEY
codex mcp get kapso
```

**Windows PowerShell ortam değişkeni:**

```powershell
$env:KAPSO_API_KEY = "ANAHTAR_BURAYA"
```

Sonra aynı `codex mcp add ... --bearer-token-env-var KAPSO_API_KEY` komutunu bu ortamdan çalıştır. `codex mcp get` yalnızca yapılandırmayı gösterir; gerçek bağlantıyı yeniden başlatılmış Codex oturumundaki `/mcp` bölümünden doğrula.

## 4. Claude Code ile Kapso'yu bağla — en hızlı yöntem

[Claude Code](https://www.anthropic.com/claude-code) kullanıyorsan aynı proje MCP adresini tanıtman yeterli.

```bash
claude mcp add --transport http kapso https://api.kapso.ai/mcp
```

Claude Code'u aç, içeride `/mcp` komutunu kullan, Kapso giriş ekranından hesabına girip projeni seç. Gerekiyorsa `claude --continue` ile oturumu bağlantı araçları yüklenmiş şekilde yeniden aç. İlk talebini yine salt okunur tut:

```text
Kapso MCP bağlantısını doğrula ve projedeki WhatsApp numaralarını listele.
Önce mevcut bağlantı durumunu kontrol et. Mesaj gönderme veya ayar
değiştirme. SSS yanıtlayan bir AI agent için taslak mimari hazırla.
```

Claude'un güncel belgeleri görmesi için isteğe bağlı komut:

```bash
claude mcp add --transport http kapso-docs https://docs.kapso.ai/mcp
```

**API anahtarıyla alternatif:**

```bash
export KAPSO_API_KEY="ANAHTAR_BURAYA"
claude mcp add --transport http kapso \
  https://api.kapso.ai/mcp \
  --header "Authorization: Bearer $KAPSO_API_KEY"
claude mcp get kapso
```

API key tam proje yetkisi verebilir; güvenlik açısından tarayıcıdaki sınırlı izinleri tercih edebilirsin. [Resmî Claude Code kurulum sayfası](https://kapso.com/whatsapp-claude-code).

## 5. Codex veya Claude Code'a Kapso becerilerini tanıt

MCP canlı projeye bağlanır. **Agent Skills** ise yazılım geliştirme asistanının Kapso'ya özgü entegrasyon, otomasyon ve hata ayıklama yöntemlerini öğrenmesini sağlar. MCP'nin yerine geçmez, onu tamamlar.

```bash
npx skills add gokapso/agent-skills
```

Bu depo `integrate-whatsapp`, `automate-whatsapp`, `observe-whatsapp` gibi yönergeler içeriyor. Depo sürümleri değişebildiği için kurulumdan önce README dosyasına bak. [GitHub: gokapso/agent-skills](https://github.com/gokapso/agent-skills) · [Kapso'nun Build with AI rehberi](https://docs.kapso.ai/docs/build-with-ai).

## 6. WhatsApp botunun gerçekten 7/24 çalışmasını sağla

Şimdi en çok karıştırılan noktaya geldik. Terminalde Codex veya Claude Code'u açık bırakmak, güvenilir bir üretim botu işletme yöntemi değil. MCP bağlantısı geliştirme/operasyon erişimidir; **otomatik gelen mesaj yanıtlama akışını ayrıca kurmak gerekir.**

![WhatsApp Yapay Zekâ Botu 7/24 Çalışma Mimarisi](/images/kapso-7-24-mimari.svg)

### Seçenek 1 — Kapso Workflows/Agent: en az altyapı yönetimi

Yeni başlayanlar için en kısa yol Kapso'nun kendi **Workflows** yapısını kullanmak:

1. `WhatsApp message received` / gelen mesaj tetikleyicisi tanımla.
2. İşletmenin SSS bilgilerini ve cevap verme kurallarını bir Agent düğümüne tanıt.
3. Sorunun kapsamında olmayan durumlar için koşul ve insan devri ekle.
4. Gelen mesajı bağlama göre cevaplayan adımı bağla.
5. Akışı önce Sandbox numarasıyla test et; loglara bak ve yanlış cevapları düzelt.
6. Uygun izinler ve Meta kontrolleri tamamlandığında gerçek numarada yayınla.

Menü ve düğüm adları platform sürümüne göre değişebilir. Codex'e kapalı gözle tahmin ederek işlem yaptırma; güncel Kapso dokümanından kontrol ettir. [Kapso AI Agent](https://kapso.com/whatsapp-ai-agent).

### Seçenek 2 — Kapso + webhook + sunucusuz uygulama: daha fazla kontrol

Kendi iş mantığını, CRM'ini veya veri tabanını kullanacaksan akış şöyledir:

**Kullanıcı mesajı → Kapso → Webhook → Sunucudaki AI/iş kuralları → Kapso API → WhatsApp yanıtı.**

Bu uygulama sunucusuz fonksiyon üzerinde (örneğin Cloudflare Workers, Vercel Functions gibi) yayınlanabilir. Uygulamanın kodunu Codex/Claude Code yazabilir, ancak yayınlama, anahtar yönetimi, yetkilendirme ve gerçek kullanıcı testleri ayrıca gerekir. Webhook kimliğini doğrula, yinelenen mesajları idempotent işle, timeout/retry durumlarını logla, konuşma geçmişine sınırsız hassas veri yazma. Gelen her mesajı otomatik AI'a göndermeden önce kişisel veri politikasını ve sağlayıcı sözleşmelerini incele.

Webhook başlangıcı için: [Kapso Personal AI Agents](https://docs.kapso.ai/docs/whatsapp/personal-agent) · [AI Agent mimarisi](https://kapso.com/whatsapp-ai-agent).

### Örnek senaryo: etkinlik veya networking topluluğunun WhatsApp asistanı

Bir networking topluluğu için basit başlangıç şöyle olabilir: yeni gelen kişiyi karşıla; topluluk modeli, toplantı sıklığı, üyelik, ziyaretçi hakkı ve katılım sorularını onaylı SSS havuzundan cevapla; toplantı tarihini güncel takvimden doğrula; ücret veya uygunluk konusunda emin olmadığında yetkili kişiye devret. İlk sürümde otomatik satış kapatma yerine **doğru bilgilendirme ve görüşme yönlendirmesi** daha güvenilir bir hedef.

Burada modelin kendisi tek kaynak olmamalı. Ücret, kurallar, toplantı ve organizasyon bilgilerinin güncellendiği bir belge veya veritabanı bulunmalı.

## 7. Meta reklamından gelen lead'e otomatik WhatsApp mesajı gönderilebilir mi?

**Teknik olarak evet; ancak lead'in nereden geldiği önemli.** Reklam kişiyi doğrudan WhatsApp konuşmasına getiriyorsa gelen mesaj üzerinden başlatılan müşteri hizmeti penceresi devreye girer. Meta Instant Form üzerinden yalnızca telefon numarası geliyorsa bu **kullanıcının WhatsApp'tan mesaj attığı anlamına gelmez**. Bu durumda Instant Form kaydını entegrasyon/webhook üzerinden alman, iletişim iznini doğrulaman ve gerekiyorsa **Meta onaylı WhatsApp mesaj şablonunu** göndermen gerekir.

İlk proje akışını şöyle kur: `Meta Lead Form → lead webhook/integration → izin ve numara doğrulama → WhatsApp şablon gönderimi → kullanıcının cevabı → agent → gerekirse satış ekibi`. Reklam ile WhatsApp arasında otomatik doğrudan bağlantı varmış gibi varsayma; gerçekten kullanılacak Meta Lead Ads tetikleyicisini Kapso'nun güncel entegrasyon kataloğunda doğrula.

**Uyarı:** İzin/opt-in ve Meta'nın 24 saatlik hizmet penceresi koşullarını atlama. Şablonların onaylanması ve kategorilere göre ücretlendirilmesi gerekebilir. [Kapso AI Agent politikası](https://kapso.com/whatsapp-ai-agent) · [Meta/Kapso fiyat açıklaması](https://docs.kapso.ai/docs/whatsapp/pricing-faq).

## 8. Kapso ücretsiz mi, gerçek maliyet nereden geliyor?

**4 Kasım 2026'da resmî fiyat sayfasındaki planlar:**

![WhatsApp Yapay Zekâ Botu 4 Maliyet Katmanı](/images/kapso-maliyet-katmanlari.svg)

| Kalem | Resmî bilgi | Not |
|---|---|---|
| Kapso Free | **$0/ay** | Ayda 2.000 mesaj platform kotası, bir bağlı numara ve Sandbox; hoş geldin için $2 kredi. |
| Kapso Pro | **$25/ay** | Ayda 100.000 mesaj; limit üstünde ücret. |
| WhatsApp/Meta | **Ayrı ücretlendirilebilir** | Mesaj tipi, ülke ve güncel Meta kuralları önemli. |
| Yapay zekâ modeli | **Kullanıma göre** | Seçtiğin modelin/AI sağlayıcısının token kullanımı ve ilgili ücretleri ayrıca değerlendirilmeli. |
| Dış sunucu | **Mimariye bağlı** | Kapso Workflows kullanıyorsan ayrı sunucu gerekmeyebilir; kendi webhook uygulamanı dışarıda barındırıyorsan maliyet doğabilir. |

**2026 güncellemesi:** Kapso'nun ücret rehberi, Meta'nın **1 Ekim 2026** itibarıyla üretim numaralarında servis kategorisindeki şablonsuz mesajları da ücretlendirdiğini ve numara başına aylık **1.000 ücretsiz teslim edilmiş servis mesajı** kotası bulunduğunu açıklıyor. Bu Meta kotası, Kapso'nun aylık 2.000 mesaj platform kotasıyla aynı şey değil. Reklam kaynaklı ücretsiz giriş penceresi ve şablon kategorileri gibi istisnalar var. Güncel tarife, müşteri ülkesi ve hesap konfigürasyonuna göre kontrol edilmeli.

Kaynak: [Kapso fiyatlandırma](https://kapso.com/pricing) · [Kapso/Meta ücret ayrımı](https://docs.kapso.ai/docs/whatsapp/pricing-faq).

## 9. Kurulum videoları: doğrudan izleme bağlantıları

**Kapso kullanılan uygulamalı video (özellikle önerilen):**

- **Stiven Rosales — “I asked Claude Code for a WhatsApp Agent and this is what he did”** (21 Nisan 2026). [YouTube'da izle](https://www.youtube.com/watch?v=sHyIhRpzhos). Bu videoda Kapso numarası bağlama ve Claude Code ile AI ajan oluşturma gösteriliyor. Önemli bölümler: **00:11** numara bağlantısı, **04:04** Claude Code + Vercel AI SDK, **07:07** anahtarlar, **13:51** Kapso webhook, **15:59** test ve dağıtım.

  <iframe title="Kapso ve Claude Code ile WhatsApp ajanı" src="https://www.youtube-nocookie.com/embed/sHyIhRpzhos" loading="lazy" allowfullscreen></iframe>

**Genel WhatsApp AI ajanı kurulumunun ek videosu — Kapso'ya özgü değil:**

- **Yashica Jain — “Build a WhatsApp AI Agent in Just 30 Minutes (Claude Code Tutorial)”** (27 Haziran 2026). [YouTube'da izle](https://www.youtube.com/watch?v=_VX7jc_BhB8). Özellikle webhook, token yönetimi ve canlıya alma mantığı için örnek; Kapso ekranlarıyla birebir aynı akış olarak sunulmamalı.

  <iframe title="WhatsApp AI Ajanı Kurulumu Genel Rehber" src="https://www.youtube-nocookie.com/embed/_VX7jc_BhB8" loading="lazy" allowfullscreen></iframe>

## 10. Sık sorulan sorular

### Kapso ile WhatsApp botu kod yazmadan kurulabilir mi?

Kapso'nun Workflows/Agent tarafı bazı akışları görsel olarak kurmayı kolaylaştırır. Codex ve Claude Code da ihtiyacın olan kodu veya yapılandırmayı hazırlayabilir. Ancak Meta doğrulaması, izinler ve testler otomatik yok olmaz.

### Codex veya Claude Code açık değilken bot çalışır mı?

Evet, **eğer** botun akışını Kapso'da yayınladıysan veya webhook uygulamanı sürekli erişilebilir bir altyapıya dağıttıysan. Salt MCP bağlantısı yeterli değil.

### Mevcut WhatsApp Business numaramla kurabilir miyim?

Evet. WhatsApp Business App coexistence veya numaranı ayrı Cloud API'ye taşıma seçenekleri var. Her ikisi aynı operasyonel sonucu vermiyor; numaranın önceki sağlayıcı durumunu kontrol et.

### Meta onaylı şablonlar gerekli mi?

İşletmenin proaktif mesaj başlattığı veya müşteri hizmeti penceresi dışında yazdığı senaryolarda genellikle onaylı şablon gerekir. İzin ve mesaj kategorisi kurallarına uymalısın.

### Ücretsiz 2.000 mesaj, 2.000 ücretsiz yapay zekâ yanıtı mı?

Hayır. Bu Kapso planının mesaj kotasıdır. Meta'nın ücret kuralları ile AI modelinin maliyeti ayrıca hesaplanır.

### Claude aboneliğim varsa AI model API'si de ücretsiz olur mu?

Kod yazmak için kullandığın Claude Code oturumu ile 7/24 çalışan botun model API tüketimini aynı bütçe gibi düşünme. Botun seçtiği modelin çalışma biçimine ve sağlayıcı ücretlerine ayrı bak.

## Sonuç: mesele botu bağlamak değil, doğru süreci kurmak

Kapso'nun güçlü tarafı, WhatsApp bağlantısı için geliştiricinin sıfırdan büyük bir altyapı yazma ihtiyacını azaltması. Codex ve Claude Code da proje kurulumunu, webhook kodunu, testleri ve otomasyon akışlarını hazırlamada işe yarıyor. Ama kullanılabilir bir işletme botunun değeri “merhaba” yazmasına değil; **doğru bilgiyi vermesine, yanlış cevap vermediğinde durabilmesine, insan devri yapmasına ve süreçlerini kaydedebilmesine** bağlı.

İlk denemede bir Sandbox numarası, sınırlı SSS havuzu ve insan devri yeterli. Çalıştığını gördükten sonra canlı numara, CRM ve reklamdan gelen lead süreci eklenebilir.

Son güncelleme: 4 Kasım 2026
