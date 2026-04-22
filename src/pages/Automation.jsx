import { Link } from 'react-router-dom'
import FadeUp from '@/components/FadeUp'
import { waLink } from '@/data'
import styles from './Automation.module.css'

const solutions = [
  {
    icon: '💬',
    tag: 'En Popüler',
    tagClass: 'popular',
    title: 'WhatsApp Otomasyonu',
    desc: 'Müşterilerinizle 7/24 iletişimde olun. Otomatik yanıtlar, lead toplama ve takip süreçlerini otomatize edin.',
    features: [
      'Otomatik hoş geldin mesajı',
      'Saat dışı otomatik yanıt sistemi',
      'Sık sorulan sorular (FAQ) botu',
      'Lead bilgisi toplama akışı',
      'Randevu/teklif talep formu',
      'WhatsApp Business API entegrasyonu',
      'Mesaj şablonları ve kampanya gönderimi',
      'Çok temsilci yönetim paneli',
    ],
  },
  {
    icon: '🔄',
    tag: 'CRM',
    tagClass: 'crm',
    title: 'Form → CRM Entegrasyonu',
    desc: 'Web sitenizdeki formlar dolduğunda veriler otomatik olarak CRM sistemine aktarılsın. Hiçbir lead kaybetmeyin.',
    features: [
      'Web form → CRM otomatik aktarım',
      'HubSpot, Pipedrive, Salesforce bağlantısı',
      'Özel CRM kurulumu ve yapılandırması',
      'Lead skorlama ve önceliklendirme',
      'Satış ekibi otomatik bildirim',
      'E-posta & SMS tetikleyiciler',
      'Pipeline otomasyonu',
      'Raporlama ve analitik dashboard',
    ],
  },
  {
    icon: '📊',
    tag: 'Takip',
    tagClass: 'tracking',
    title: 'Müşteri Takip Sistemleri',
    desc: 'Müşteri yolculuğunu baştan sona takip edin. Hangi aşamada olduklarını bilin, doğru zamanda harekete geçin.',
    features: [
      'Müşteri yaşam döngüsü takibi',
      'Otomatik follow-up e-posta dizileri',
      'Teklif sonrası otomatik takip',
      'Müşteri segmentasyonu',
      'Yeniden satın alma hatırlatmaları',
      'NPS & müşteri memnuniyet anketleri',
      'Churn (kayıp) önleme uyarıları',
      'Müşteri sağlığı skoru paneli',
    ],
  },
]

const benefits = [
  { icon: '⏰', title: 'Zaman Tasarrufu', desc: 'Tekrarlayan görevleri otomatize ederek haftada 10+ saat kazanın. Ekibiniz stratejik işlere odaklanır.' },
  { icon: '💰', title: 'Gelir Artışı', desc: 'Hiçbir lead kaçmaz. Otomatik takip sistemi ile dönüşüm oranınızı ortalama %40 artırın.' },
  { icon: '🎯', title: 'Doğru Zamanlama', desc: "Müşteriniz hazır olduğunda otomatik devreye girin. 'Sıcak lead'leri kaçırmayın." },
  { icon: '📈', title: 'Ölçeklenebilirlik', desc: 'Ekip büyütmeden daha fazla müşteriye hizmet verin. Otomasyon büyümenizle birlikte ölçeklenir.' },
]

const workflow = [
  { step: '1', title: 'Ziyaretçi Gelir', desc: 'Potansiyel müşteri web sitenizi ziyaret eder.' },
  { step: '2', title: 'Form Doldurur', desc: 'İletişim veya teklif formunu doldurur.' },
  { step: '3', title: 'Anında Bildirim', desc: 'Siz ve ekibiniz anlık bildirim alır.' },
  { step: '4', title: 'CRM\'e Aktarılır', desc: 'Veriler otomatik CRM\'e kaydedilir.' },
  { step: '5', title: 'WhatsApp Gönderilir', desc: 'Müşteriye otomatik karşılama mesajı iletilir.' },
  { step: '6', title: 'Takip Başlar', desc: 'Tanımlı aralıklarla otomatik follow-up dizisi devreye girer.' },
]

const faqs = [
  { q: 'Otomasyon kurmak için teknik bilgi gerekiyor mu?', a: 'Hayır. Tüm kurulum ve yapılandırmayı biz yapıyoruz. Sisteminizi teslim ederken kısa bir eğitim de veriyoruz. Günlük kullanım için herhangi bir teknik bilgi gerekmez.' },
  { q: 'Hangi CRM sistemleriyle entegrasyon sağlıyorsunuz?', a: 'HubSpot, Pipedrive, Salesforce, Zoho CRM, Notion ve Google Sheets ile entegrasyon yapıyoruz. Kullandığınız sistemin dışında bir talep varsa önce inceleyip bilgi veriyoruz.' },
  { q: 'WhatsApp Business API nasıl çalışır?', a: "WhatsApp Business API, kişisel WhatsApp'tan farklıdır. Birden fazla temsilci aynı anda yanıt verebilir, otomatik mesajlar gönderilebilir ve kampanya mesajları iletilebilir. Meta onay süreci yaklaşık 1-3 iş günü sürer." },
  { q: 'Otomasyon ne zaman devreye girer?', a: 'Proje büyüklüğüne göre değişmekle birlikte, basit WhatsApp otomasyonu 3-5 iş günü, CRM entegrasyonu 1-2 hafta, tam müşteri takip sistemi ise 2-4 hafta içinde devreye alınabilir.' },
]

export default function Automation() {
  return (
    <div className="page-wrapper">
      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <FadeUp>
            <div className="section-label">Otomasyon Çözümleri</div>
            <h1 className={styles.heroTitle}>
              İşlerinizi <span className="text-accent">Otomatize Edin,</span><br />
              Büyümeye Odaklanın
            </h1>
            <p className={styles.heroDesc}>
              WhatsApp otomasyonu, form-CRM entegrasyonu ve müşteri takip sistemleriyle
              hiçbir lead kaçırmayın. Ekibiniz stratejik işlere odaklanırken sistem 7/24 çalışır.
            </p>
            <div className={styles.heroActions}>
              <a
                href={waLink('Merhaba, otomasyon çözümleri hakkında bilgi almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                💬 Ücretsiz Danışmanlık Al
              </a>
              <Link to="/teklif" className="btn btn-outline">Fiyat Hesapla →</Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* BENEFITS */}
      <section className={`section-pad ${styles.benefitsSection}`}>
        <div className="container">
          <div className="text-center">
            <div className="section-label" style={{ margin: '0 auto 20px' }}>Faydaları</div>
            <h2 className="section-title">Otomasyon Size <span className="text-accent">Ne Kazandırır?</span></h2>
          </div>
          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <FadeUp key={i} delay={i + 1}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIcon}>{b.icon}</div>
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-label" style={{ margin: '0 auto 20px' }}>Çözümlerimiz</div>
            <h2 className="section-title">Kapsamlı <span className="text-accent">Otomasyon Paketi</span></h2>
            <p className="section-sub" style={{ margin: '14px auto 0' }}>
              Üç temel çözümü birbirine entegre kurarak uçtan uca otomatik bir satış ve müşteri yönetim sistemi oluşturuyoruz.
            </p>
          </div>
          <div className={styles.solutionsGrid}>
            {solutions.map((s, i) => (
              <FadeUp key={i} delay={i + 1}>
                <div className={`${styles.solutionCard} ${s.tagClass === 'popular' ? styles.popularCard : ''}`}>
                  {s.tagClass === 'popular' && <div className={styles.popularBadge}>⭐ En Popüler</div>}
                  <div className={styles.solutionHeader}>
                    <div className={styles.solutionIcon}>{s.icon}</div>
                    <span className={`${styles.solutionTag} ${styles[s.tagClass]}`}>{s.tag}</span>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <ul className={styles.featureList}>
                    {s.features.map((f, j) => (
                      <li key={j}><span className={styles.check}>✓</span>{f}</li>
                    ))}
                  </ul>
                  <a
                    href={waLink(`Merhaba, ${s.title} hizmeti hakkında bilgi almak istiyorum.`)}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn ${s.tagClass === 'popular' ? 'btn-primary' : 'btn-outline'} ${styles.solutionBtn}`}
                  >
                    💬 Bilgi Al
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* WORKFLOW */}
      <section className={`section-pad ${styles.workflowSection}`}>
        <div className="container">
          <div className="text-center">
            <div className="section-label" style={{ margin: '0 auto 20px' }}>İş Akışı</div>
            <h2 className="section-title">Otomasyon <span className="text-accent">Nasıl Çalışır?</span></h2>
            <p className="section-sub" style={{ margin: '14px auto 0' }}>
              Bir müşteri adayı formunuzu doldurduğu andan itibaren tüm süreç otomatik işler.
            </p>
          </div>
          <div className={styles.workflowGrid}>
            {workflow.map((w, i) => (
              <FadeUp key={i} delay={(i % 3) + 1}>
                <div className={styles.workflowStep}>
                  <div className={styles.workflowNum}>{w.step}</div>
                  {i < workflow.length - 1 && <div className={styles.workflowArrow}>→</div>}
                  <h4>{w.title}</h4>
                  <p>{w.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-pad">
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
              <div className="section-label" style={{ margin: '0 auto 20px' }}>Başlayalım</div>
              <h2 className="section-title">
                İlk Adımı Atın,<br />
                <span className="text-accent">Biz Gerisini Halledelim</span>
              </h2>
              <p>
                İşletmenizin hangi otomasyon çözümüne ihtiyaç duyduğunu birlikte belirleyelim.
                Ücretsiz danışmanlık görüşmesinde mevcut süreçlerinizi analiz ediyor ve en uygun çözümü öneriyoruz.
              </p>
              <div className={styles.ctaActions}>
                <a
                  href={waLink('Merhaba, otomasyon çözümleri için ücretsiz danışmanlık almak istiyorum.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  💬 Ücretsiz Danışmanlık Al
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