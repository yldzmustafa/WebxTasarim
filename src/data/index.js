import tashanImg from '@/assets/tashan.png'
import sahapanelImg from '@/assets/sahapanel.png'
import akcelikImg from '@/assets/akcelik.png'
import mustafaImg from '@/assets/mustafa-portfolio.png'

/* ─── İLETİŞİM ─── */
export const WA_NUMBER = '905319621482'
export const PHONE_DISPLAY = '+90 531 962 14 82'
export const EMAIL = 'yldzzmustafaa.98@gmail.com'

export const waLink = (msg = 'Merhaba, proje teklifi almak istiyorum.') =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`

/* ─── HİZMETLER ─── */
export const services = [
  { icon: '🏢', title: 'Kurumsal Web Sitesi', desc: 'Markanızı en iyi şekilde yansıtan, güven veren ve dönüşüm odaklı kurumsal web siteleri tasarlıyoruz.', tags: 'Branding • SEO • CMS' },
  { icon: '🛒', title: 'E-Ticaret Sitesi', desc: 'Hızlı, güvenli ve satış odaklı e-ticaret platformları geliştiriyoruz. Ödeme sistemi ve stok yönetimi dahil.', tags: 'Ödeme • Stok • Güvenlik' },
  { icon: '⚙️', title: 'Web Uygulaması', desc: 'Panel, yönetim sistemi, rezervasyon ve SaaS tabanlı özel web uygulamaları geliştiriyoruz.', tags: 'Full-Stack • API • DB' },
  { icon: '🎨', title: 'Portföy & Blog', desc: 'Kendinizi veya işinizi öne çıkaran şık portföy ve blog siteleri tasarlıyoruz. Tam içerik yönetimi sunuyoruz.', tags: 'CMS • Portföy • Blog' },
  { icon: '📱', title: 'Landing Page', desc: "Tek sayfalık, dönüşüm odaklı landing page'ler geliştiriyoruz. Reklam kampanyalarınız için ideal.", tags: 'A/B Test • Analytics • CRO' },
  { icon: '🔍', title: 'SEO & Performans', desc: 'Mevcut sitenizi hızlandırıyor, Google sıralamanızı yükseltiyoruz ve teknik SEO optimizasyonu gerçekleştiriyoruz.', tags: 'Core Web Vitals • Schema' },
]

/* ─── PROJELER ─── */
export const projects = [
  {
    image: tashanImg,
    title: 'Taşan Lojistik – Kurumsal Web',
    desc: 'İstanbul merkezli bir lojistik firması için hazırladığımız kurumsal site. Hizmet sayfaları, filo tanıtımı, müşteri referansları ve iletişim formu içeriyor.',
    url: 'https://tasanakliyat.com',
    urlLabel: 'tasanakliyat.com',
    tags: ['Kurumsal', 'Lojistik', 'SEO'],
  },
  {
    image: sahapanelImg,
    title: 'SahaPanel – Halısaha Yönetim Sistemi',
    desc: 'Halısaha işletmecileri için SaaS tabanlı yönetim platformu. Randevu, depozito, müşteri geçmişi, abonelik ve kasa takibi tek panelde.',
    url: 'https://sahapanel.tr',
    urlLabel: 'sahapanel.tr',
    tags: ['SaaS', 'Web App', 'Panel'],
  },
  {
    image: akcelikImg,
    title: 'Akçelik Mühendislik & İnşaat',
    desc: 'İnşaat & mühendislik firması için hazırladığımız kurumsal web sitesi. Proje galerisi, blog ve referansları dijitale taşıdık.',
    url: 'https://akcelikmuhendislikinsaat.com.tr',
    urlLabel: 'akcelikmuhendislikinsaat.com.tr',
    tags: ['Kurumsal', 'İnşaat', 'Blog'],
  },
  {
    image: mustafaImg,
    title: 'Mustafa Yıldız – Kişisel Portföy',
    desc: 'Software Developer & Business Analyst kimliğiyle öne çıkan kişisel portföy sitesi. Modern tipografi, koyu tema ve akıcı kullanıcı deneyimi ile tasarlandı.',
    url: 'https://mustafayildizportfolio.netlify.app/',
    urlLabel: 'mustafayildizportfolio.netlify.app',
    tags: ['Portföy', 'React', 'Dark Theme'],
  },
  {
    image: null,
    emoji: '🌐',
    gradient: 'linear-gradient(135deg,#1a1f4e,#2d3478)',
    title: 'WebX Tasarım – Portföy Sitesi',
    desc: 'Müşteri kazanım odaklı portföy ve kurumsal web sitemiz. Dinamik teklif formu, proje galerisi ve iletişim sistemi içeriyor.',
    url: 'https://webxtasarim.com',
    urlLabel: 'webxtasarim.com',
    tags: ['React', 'Vite', 'Portföy'],
  },
]

/* ─── MÜŞTERİ YORUMLARI ─── */
export const testimonials = [
  {
    stars: 5,
    text: '"Web sitemiz yenilendikten sonra kurumsal görünümümüz tamamen değişti. Taşan Lojistik olarak artık dijitalde çok daha güçlü bir imajımız var. Hızlı teslimat ve profesyonel iletişim için kesinlikle tavsiye ediyoruz!"',
    name: 'Yasin Taşan',
    role: 'Kurucu – Taşan Lojistik',
    site: 'tasanakliyat.com',
    avatarBg: 'linear-gradient(135deg,#1a3a6b,#0d1f3c)',
    initial: 'Y',
  },
  {
    stars: 5,
    text: '"SahaPanel\'i müşterilerimizin ihtiyaçlarına tam olarak uyacak şekilde geliştirdiler. Randevu yönetimi, kasa takibi ve abonelik sistemi — her detayı önceden düşünülmüştü. Sahacıların bu araca ihtiyacı vardı ve WebX bunu mükemmel çözüme kavuşturdu!"',
    name: 'Muhammet Can Gezgin',
    role: 'Kurucu – SahaPanel',
    site: 'sahapanel.tr',
    avatarBg: 'linear-gradient(135deg,#1a5c2a,#0d2e14)',
    initial: 'M',
  },
  {
    stars: 5,
    text: '"Akçelik Mühendislik olarak yıllardır profesyonel bir web sitesi arayışındaydık. Hem tasarımı hem içeriği çok başarılı şekilde yönettiler. Proje galerimiz artık müşterilerimize harika bir izlenim bırakıyor."',
    name: 'Okan Akçelik',
    role: 'Yönetici – Akçelik Mühendislik & İnşaat',
    site: 'akcelikmuhendislikinsaat.com.tr',
    avatarBg: 'linear-gradient(135deg,#6b1a1a,#2e0d0d)',
    initial: 'O',
  },
]

/* ─── FİYATLANDIRMA ─── */
export const pricingPlans = [
  {
    name: 'Başlangıç',
    price: '₺8.000',
    priceSuffix: '– ₺12.000',
    desc: 'Küçük işletmeler ve girişimler için ideal başlangıç paketi.',
    support: '1 Ay',
    supportClass: 'support-1',
    delivery: '1–2 Hafta',
    popular: false,
    btnClass: 'btn-outline',
    features: [
      { text: 'Teslim süresi: 1–2 hafta', ok: true },
      { text: '5 sayfaya kadar web sitesi', ok: true },
      { text: 'Mobil uyumlu tasarım', ok: true },
      { text: 'İletişim formu', ok: true, tip: 'Ziyaretçilerin size doğrudan mesaj gönderebileceği form' },
      { text: 'Temel SEO ayarları', ok: true, tip: 'Başlık, açıklama, anahtar kelime ve meta etiket optimizasyonu' },
      { text: 'Google Analytics entegrasyonu', ok: true },
      { text: '1 ay teknik destek', ok: true },
      { text: 'Blog / CMS paneli', ok: false },
      { text: 'E-ticaret / ödeme sistemi', ok: false },
    ],
    waMsg: 'Merhaba, Başlangıç paketi (1-2 hafta teslim) hakkında bilgi almak istiyorum.',
  },
  {
    name: 'Standart',
    price: '₺15.000',
    priceSuffix: '– ₺25.000',
    desc: 'Büyümek isteyen işletmeler için kapsamlı çözüm paketi.',
    support: '3 Ay',
    supportClass: 'support-3',
    delivery: '2–3 Hafta',
    popular: true,
    btnClass: 'btn-primary',
    features: [
      { text: 'Teslim süresi: 2–3 hafta', ok: true },
      { text: '10 sayfaya kadar web sitesi', ok: true },
      { text: 'Premium & Özel Tasarım', ok: true },
      { text: 'Blog / CMS paneli', ok: true, tip: 'Kod bilmeden içerik ekleyip düzenleyebileceğiniz yönetim paneli' },
      { text: 'İletişim & teklif formu', ok: true },
      { text: 'Kapsamlı SEO optimizasyonu', ok: true, tip: 'Teknik SEO, schema markup ve Google Search Console kurulumu' },
      { text: 'Hız & performans optimizasyonu', ok: true, tip: '90+ PageSpeed skoru hedefiyle optimize edilir' },
      { text: 'Google Analytics + Tag Manager', ok: true },
      { text: '3 ay teknik destek', ok: true },
    ],
    waMsg: 'Merhaba, Standart paket (2-3 hafta teslim) hakkında bilgi almak istiyorum.',
  },
  {
    name: 'Premium',
    price: '₺30.000',
    priceSuffix: 've üzeri',
    desc: 'E-ticaret, web uygulaması veya özel çözümler isteyen işletmeler için.',
    support: '6 Ay',
    supportClass: 'support-6',
    delivery: '4+ Hafta',
    popular: false,
    btnClass: 'btn-gold',
    features: [
      { text: 'Teslim süresi: 4+ hafta', ok: true },
      { text: 'Sınırsız sayfa', ok: true },
      { text: 'E-ticaret / Ödeme sistemi', ok: true, tip: 'Stripe, iyzico veya PayTR entegrasyonu ile güvenli ödeme altyapısı' },
      { text: 'Admin & yönetim paneli', ok: true, tip: 'Siparişler, kullanıcılar ve içerikleri yönetebileceğiniz özel panel' },
      { text: 'Özel API entegrasyonları', ok: true, tip: 'CRM, ERP, kargo, muhasebe gibi 3. parti sistemlerle bağlantı' },
      { text: 'Çok dil desteği', ok: true, tip: 'TR/EN ve daha fazla dil için tam çeviri altyapısı' },
      { text: 'Gelişmiş SEO stratejisi', ok: true },
      { text: 'A/B test & CRO danışmanlığı', ok: true, tip: 'Hangi tasarımın daha fazla müşteri kazandırdığını test ederiz' },
      { text: '6 ay teknik destek', ok: true },
    ],
    waMsg: 'Merhaba, Premium paket (4+ hafta teslim) hakkında bilgi almak istiyorum.',
  },
]

/* ─── SSS ─── */
export const faqs = [
  { q: 'Proje teslim süresi ne kadar?', a: 'Başlangıç paketi 1-2 hafta, Standart paket 2-3 hafta, Premium paket ise 4 hafta ve üzeri sürmektedir. Proje başlangıcında net bir takvim paylaşıyoruz.' },
  { q: 'Ödeme nasıl yapılıyor?', a: 'Genellikle %50 başlangıç, %50 teslimatta ödeme modeli uyguluyoruz. Büyük projeler için %30-%40-%30 taksitli ödeme planı da oluşturabiliyoruz. Havale/EFT ve kredi kartı kabul edilmektedir.' },
  { q: 'Siteyi teslim aldıktan sonra kendim içerik ekleyebilir miyim?', a: 'Evet! Standart ve Premium paketlerde sitenize özel CMS kuruyoruz. Teknik bilgiye ihtiyaç duymadan yazı, görsel ve sayfa ekleyebiliyorsunuz. Ayrıca kullanım eğitimi de veriyoruz.' },
  { q: 'Mevcut web sitemizi yenileyebilir misiniz?', a: 'Evet, mevcut sitenizi sıfırdan yeniden tasarlayabilir ya da görsel ve teknik güncellemeler yapabiliriz. Önce sitenizi inceleyip size en uygun yolu öneriyoruz.' },
  { q: 'SEO ve otomasyon hizmetleriniz var mı?', a: 'Evet! Hem teknik/yerel SEO hem de WhatsApp otomasyonu, form-CRM entegrasyonu ve müşteri takip sistemleri konularında kapsamlı hizmet sunuyoruz.' },
  { q: 'Destek süresi bittikten sonra ne olur?', a: 'Destek süreniz bittikten sonra aylık bakım paketleri ile hizmet almaya devam edebilirsiniz. Tek seferlik güncelleme veya teknik destek talepleri için uygun fiyatlı seçeneklerimiz mevcuttur.' },
]

/* ─── SÜREÇ ─── */
export const processSteps = [
  { num: '01', title: 'Keşif & Analiz', desc: 'İhtiyaçlarınızı, hedef kitlenizi ve rekabeti analiz ediyoruz. İlk görüşme tamamen ücretsizdir.' },
  { num: '02', title: 'Tasarım', desc: "Figma'da özel tasarım oluşturuyor, onayınızı alıyoruz. Şablon kullanmıyoruz." },
  { num: '03', title: 'Geliştirme', desc: 'Temiz, hızlı ve ölçeklenebilir kod yazıyoruz. İlerlemeyi düzenli paylaşıyoruz.' },
  { num: '04', title: 'Test & Lansman', desc: 'Kapsamlı test sonrası sitenizi yayına alıyoruz. SEO ve hız optimizasyonu yapıyoruz.' },
  { num: '05', title: 'Destek', desc: 'Paketinize göre 1, 3 veya 6 ay teknik destek ve bakım hizmeti sunuyoruz.' },
]

/* ─── GÜVEN İSTATİSTİKLERİ ─── */
export const trustStats = [
  { num: '50+', label: 'Tamamlanan Proje' },
  { num: '5★', label: 'Ortalama Müşteri Puanı' },
  { num: '%98', label: 'Müşteri Memnuniyeti' },
  { num: '24s', label: 'Ortalama Yanıt Süresi' },
]

/* ─── BECERİLER ─── */
export const skills = {
  Frontend: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'TypeScript', 'HTML/CSS'],
  Backend: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Supabase', 'REST API'],
  'Araçlar & Diğer': ['Figma', 'Git', 'Vercel', 'WordPress', 'Shopify', 'SEO'],
}