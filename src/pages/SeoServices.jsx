import { Link } from 'react-router-dom'
import FadeUp from '@/components/FadeUp'
import { waLink } from '@/data'
import styles from './SeoServices.module.css'

const seoPackages = [
  {
    icon: '⚙️',
    title: 'Teknik SEO',
    desc: 'Sitenizin arama motorları tarafından doğru şekilde taranmasını ve indexlenmesini sağlıyoruz.',
    items: [
      'Site hız optimizasyonu (Core Web Vitals)',
      'XML sitemap & robots.txt yapılandırması',
      'Canonical tag ve duplicate content düzeltme',
      'Structured data / Schema.org markup',
      'Mobile-first indexing uyumu',
      'HTTPS & güvenlik sertifikası',
      '404 ve yönlendirme hataları düzeltme',
      'Sayfa hızı: 90+ PageSpeed skoru hedefi',
    ],
  },
  {
    icon: '📝',
    title: 'İçerik SEO',
    desc: "Hedef kitlenizin aradığı içerikleri üretiyoruz, anahtar kelime stratejisi ile organik trafiğinizi artırıyoruz.",
    items: [
      'Anahtar kelime araştırması & analizi',
      'Rakip analizi ve içerik boşluğu tespiti',
      'SEO uyumlu içerik yazımı',
      'Meta başlık & açıklama optimizasyonu',
      'İç linkleme stratejisi',
      'Blog içerik planlaması',
      'Görsel SEO (alt text, sıkıştırma)',
      'İçerik güncellemesi & yenileme',
    ],
  },
  {
    icon: '📍',
    title: 'Yerel SEO (Local SEO)',
    desc: "Bölgenizdeki müşterilere ulaşın. Google Haritalar'da öne çıkın, yerel aramalarda rakiplerinizi geçin.",
    items: [
      'Google Business Profile optimizasyonu',
      'NAP (Ad, Adres, Telefon) tutarlılığı',
      'Yerel anahtar kelime optimizasyonu',
      'Yerel atıf (citation) oluşturma',
      'Müşteri yorum yönetimi stratejisi',
      'Yerel schema markup',
      'Google Haritalar sıralama artırma',
      'Aylık yerel SEO raporu',
    ],
  },
]

const results = [
  { num: '+%180', label: 'Organik Trafik Artışı', sub: 'Ortalama 6 ay içinde' },
  { num: 'İlk 3', label: 'Google Sıralaması', sub: 'Hedef anahtar kelimeler' },
  { num: '+%65', label: 'Lead (Müşteri Adayı) Artışı', sub: 'Organik kanallardan' },
  { num: '30+', label: 'Başarılı SEO Projesi', sub: 'Farklı sektörlerden' },
]

const process = [
  { num: '01', title: 'Ücretsiz SEO Analizi', desc: 'Sitenizi derinlemesine analiz ediyoruz. Mevcut durum, rakipler ve fırsatlar raporlanıyor.' },
  { num: '02', title: 'Strateji Belirleme', desc: 'Hedeflerinize göre özel SEO stratejisi hazırlıyoruz. Öncelikli aksiyonlar belirleniyor.' },
  { num: '03', title: 'Uygulama', desc: 'Teknik düzeltmeler, içerik üretimi ve optimizasyonları hayata geçiriyoruz.' },
  { num: '04', title: 'Takip & Raporlama', desc: 'Aylık detaylı raporlar sunuyoruz. Sıralamalar, trafik ve dönüşümler şeffaf şekilde takip ediliyor.' },
]

const faqs = [
  { q: 'SEO sonuçları ne zaman görülür?', a: 'SEO uzun vadeli bir stratejidir. İlk sonuçlar genellikle 3-4 ayda görülmeye başlar, kalıcı ve güçlü sıralamalar için 6-12 ay gerekebilir. Teknik SEO düzeltmeleri daha hızlı etkili olabilir.' },
  { q: 'Google Ads ile SEO arasındaki fark nedir?', a: "Google Ads anlık ve ücretli trafik sağlar; ödeme durursa trafik de durur. SEO ise organik, ücretsiz ve kalıcı trafik oluşturur. En iyi sonuç için ikisini birlikte kullanmak önerilir." },
  { q: 'Siteniz kaç anahtar kelime için optimize edilecek?', a: 'Pakete bağlı olarak 10 ile 50+ anahtar kelime için optimizasyon yapıyoruz. Sektör analizi sonrası en değerli ve ulaşılabilir anahtar kelimeleri birlikte belirliyoruz.' },
  { q: 'SEO raporları ne sıklıkla gönderilir?', a: 'Her ay detaylı bir rapor gönderiyoruz. Raporda sıralama değişimleri, trafik verileri, tamamlanan çalışmalar ve bir sonraki ayın planı yer alıyor.' },
]

export default function SeoServices() {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <FadeUp>
            <div className="section-label">SEO Hizmetleri</div>
            <h1 className={styles.heroTitle}>
              Google'da <span className="text-accent">Zirveye</span> Çıkın,<br />
              Organik Müşteri Kazanın
            </h1>
            <p className={styles.heroDesc}>
              Teknik SEO, içerik optimizasyonu ve yerel SEO stratejileriyle işletmenizi arama motorlarında öne çıkarıyoruz.
              Aylık raporlarla her adımı şeffaf takip ediyorsunuz.
            </p>
            <div className={styles.heroActions}>
              <a
                href={waLink('Merhaba, SEO hizmetleri hakkında bilgi almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                💬 Ücretsiz SEO Analizi İste
              </a>
              <Link to="/teklif" className="btn btn-outline">Fiyat Hesapla →</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* RESULTS BAR */}
      <section className={styles.resultsBar}>
        <div className="container">
          <div className={styles.resultsGrid}>
            {results.map((r, i) => (
              <FadeUp key={i} delay={i + 1}>
                <div className={styles.resultItem}>
                  <span className={styles.resultNum}>{r.num}</span>
                  <span className={styles.resultLabel}>{r.label}</span>
                  <span className={styles.resultSub}>{r.sub}</span>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SEO PACKAGES */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-label" style={{ margin: '0 auto 20px' }}>Hizmetlerimiz</div>
            <h2 className="section-title">Kapsamlı <span className="text-accent">SEO Çözümleri</span></h2>
            <p className="section-sub" style={{ margin: '14px auto 0' }}>
              Tek seferlik düzeltmeler değil, sürdürülebilir büyüme. Her hizmet birbiriyle entegre çalışır.
            </p>
          </div>
          <div className={styles.packagesGrid}>
            {seoPackages.map((pkg, i) => (
              <FadeUp key={i} delay={i + 1}>
                <div className={styles.packageCard}>
                  <div className={styles.pkgIcon}>{pkg.icon}</div>
                  <h3>{pkg.title}</h3>
                  <p>{pkg.desc}</p>
                  <ul className={styles.pkgList}>
                    {pkg.items.map((item, j) => (
                      <li key={j}><span className={styles.check}>✓</span>{item}</li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WHY SEO */}
      <section className={`section-pad ${styles.whySection}`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <FadeUp>
              <div>
                <div className="section-label">Neden SEO?</div>
                <h2 className="section-title">
                  Müşterileriniz Sizi<br />
                  <span className="text-accent">Google'da Arıyor</span>
                </h2>
                <p className="section-sub">
                  Türkiye'de internet kullanıcılarının %93'ü ürün veya hizmet ararken Google'ı kullanıyor.
                  Siz ilk sayfada değilseniz, rakipleriniz var.
                </p>
                <div className={styles.whyStats}>
                  {[
                    { num: '%75', label: "Kullanıcılar 1. sayfanın ötesine geçmez" },
                    { num: '%28', label: "1. sıradaki site tıklamaların 28%'ini alır" },
                    { num: '0₺', label: "Organik trafiğin tıklama başı maliyeti" },
                    { num: '7/24', label: "Siteniz uyurken bile müşteri kazanır" },
                  ].map((s, i) => (
                    <div key={i} className={styles.whyStat}>
                      <span className={styles.whyStatNum}>{s.num}</span>
                      <span className={styles.whyStatLabel}>{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={2}>
              <div className={styles.whyVisual}>
                <div className={styles.googleCard}>
                  <div className={styles.googleHeader}>
                    <div className={styles.googleLogo}>G</div>
                    <div className={styles.googleSearch}>
                      <span>istanbul web tasarım şirketi</span>
                    </div>
                  </div>
                  {['WebX Tasarım – Modern Web Geliştirme', 'Kurumsal Web Sitesi | WebX Tasarım', 'SEO Hizmetleri – WebX Tasarım'].map((title, i) => (
                    <div key={i} className={`${styles.googleResult} ${i === 0 ? styles.topResult : ''}`}>
                      {i === 0 && <div className={styles.adBadge}>1. Sıra</div>}
                      <div className={styles.resultUrl}>webxtasarim.com</div>
                      <div className={styles.resultTitle}>{title}</div>
                      <div className={styles.resultSnippet}>Modern, hızlı ve dönüşüm odaklı web siteleri tasarlıyor ve geliştiriyoruz...</div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-label" style={{ margin: '0 auto 20px' }}>Süreç</div>
            <h2 className="section-title">SEO'da <span className="text-accent">Nasıl Çalışıyoruz?</span></h2>
          </div>
          <div className={styles.processGrid}>
            {process.map((s, i) => (
              <FadeUp key={i} delay={i + 1}>
                <div className={styles.processStep}>
                  <div className={styles.processNum}>{s.num}</div>
                  <h4>{s.title}</h4>
                  <p>{s.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={`section-pad ${styles.faqSection}`}>
        <div className="container">
          <div className="text-center">
            <div className="section-label" style={{ margin: '0 auto 20px' }}>SSS</div>
            <h2 className="section-title">Sık Sorulan <span className="text-accent">Sorular</span></h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <FadeUp key={i} delay={i + 1}>
                <div className={styles.faqItem}>
                  <div className={styles.faqQ}>❓ {f.q}</div>
                  <div className={styles.faqA}>{f.a}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section-pad ${styles.ctaSection}`}>
        <div className="container">
          <FadeUp>
            <div className={styles.ctaBox}>
              <div className="section-label" style={{ margin: '0 auto 20px' }}>Hemen Başlayalım</div>
              <h2 className="section-title">
                Ücretsiz SEO Analizi<br />
                <span className="text-accent">Hemen Alın</span>
              </h2>
              <p>Sitenizi analiz edelim, rakiplerinizi inceleyelim ve size özel SEO stratejisi sunalım. Tamamen ücretsiz.</p>
              <div className={styles.ctaActions}>
                <a
                  href={waLink('Merhaba, ücretsiz SEO analizi almak istiyorum. Web sitem: ')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  💬 Ücretsiz SEO Analizi İste
                </a>
                <Link to="/iletisim" className="btn btn-outline">İletişime Geç</Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}