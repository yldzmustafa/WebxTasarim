import { useState } from 'react'
import { Link } from 'react-router-dom'
import FadeUp from '@/components/FadeUp'
import {
  services, projects, testimonials,
  processSteps, trustStats, faqs, waLink
} from '@/data'
import styles from './Home.module.css'

/* ── HERO ── */
function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroBg}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />
      </div>
      <div className="container">
        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <div className={styles.heroBadge}>
              <span className={styles.heroDot} />
              Şu an müsaitiz — Yeni projelere açığız
            </div>
            <h1 className={styles.heroTitle}>
              Modern & Yüksek Dönüşümlü<br />
              <span className="text-accent">Web Siteleri</span> İnşa Ediyoruz
            </h1>
            <p className={styles.heroDesc}>
              Web sitesi, web uygulaması ve e-ticaret alanında işletmenizi dijitalde öne çıkaran,
              hızlı, mobil uyumlu ve müşteri kazandıran çözümler geliştiriyoruz.
              Her proje hedeflerinize göre özel olarak oluşturuluyor.
            </p>
            <div className={styles.heroActions}>
              <a
                href={waLink('Merhaba, proje teklifi almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                🚀 Ücretsiz Teklif Al
              </a>
              <Link to="/projeler" className="btn btn-outline">Projelerimizi Gör →</Link>
            </div>
            <div className={styles.heroStats}>
              {[
                { val: '50+', lbl: 'Tamamlanan Proje' },
                { val: '5★', lbl: 'Müşteri Puanı' },
                { val: '24s', lbl: 'Yanıt Süresi' },
              ].map(s => (
                <div key={s.lbl} className={styles.heroStat}>
                  <span>{s.val}</span>
                  <small>{s.lbl}</small>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroCard}>
              <div className={styles.heroCardHeader}>
                <div className={`${styles.dot} ${styles.dotR}`} />
                <div className={`${styles.dot} ${styles.dotY}`} />
                <div className={`${styles.dot} ${styles.dotG}`} />
              </div>
              <div className={styles.codeBlock}>
                <div><span className={styles.kw}>const</span> <span className={styles.fn}>webSitesi</span> = {'{'}</div>
                <div>&nbsp;&nbsp;tasarim: <span className={styles.str}>"premium"</span>,</div>
                <div>&nbsp;&nbsp;performans: <span className={styles.str}>"100/100"</span>,</div>
                <div>&nbsp;&nbsp;seo: <span className={styles.str}>"optimize"</span>,</div>
                <div>&nbsp;&nbsp;mobil: <span className={styles.str}>"tam uyumlu"</span>,</div>
                <div>&nbsp;&nbsp;donusum: <span className={styles.str}>"yüksek"</span></div>
                <div>{'}'}</div>
                <div className={styles.cm}>{'// 🚀 Projeniz hazır!'}</div>
              </div>
            </div>
            <div className={`${styles.floatingBadge} ${styles.fb1}`}>⚡ Next.js + Vite</div>
            <div className={`${styles.floatingBadge} ${styles.fb2}`}>🎨 UI/UX Tasarım</div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── MARQUEE ── */
const ITEMS = ['Next.js', 'React', 'Vite', 'Tailwind CSS', 'Node.js', 'E-Ticaret', 'Web Uygulaması', 'Kurumsal Web']
function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]
  return (
    <div className="marquee-section">
      <div className="marquee-track">
        {doubled.map((item, i) => <span key={i} className="marquee-item">{item}</span>)}
      </div>
    </div>
  )
}

/* ── SERVICES ── */
function Services() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className="section-label">Hizmetler</div>
        <h2 className="section-title">
          İşletmenize Özel<br />
          <span className="text-accent">Dijital Çözümler</span>
        </h2>
        <p className="section-sub">
          Her sektöre, her ölçeğe uygun web sitesi, web uygulaması ve e-ticaret hizmetleri sunuyoruz.
        </p>
        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <FadeUp key={i} delay={(i % 3) + 1}>
              <div className={styles.serviceCard}>
                <div className={styles.serviceIcon}>{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <span className={styles.serviceTag}>{s.tags}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── WHY US ── */
const WHY_ITEMS = [
  { icon: '⚡', title: 'Hızlı Teslimat', desc: 'Çoğu projemizi 2-4 hafta içinde teslim ediyoruz. Süreç şeffaf şekilde takip edilebilir.' },
  { icon: '💎', title: 'Premium Tasarım', desc: 'Her pikseli özenle tasarlıyoruz. Şablon kullanmıyor, her projeyi özgün yapıyoruz.' },
  { icon: '📈', title: 'Dönüşüm Odaklı', desc: 'Geliştirdiğimiz siteler ziyaretçiyi müşteriye dönüştürecek şekilde kurgulanır.' },
  { icon: '🛡️', title: 'Pakete Göre Destek', desc: 'Paketinize göre 1, 3 veya 6 ay teknik destek ve bakım hizmeti sunuyoruz.' },
]
function WhyUs() {
  return (
    <section className={`section-pad ${styles.whySection}`}>
      <div className="container">
        <div className={styles.whyGrid}>
          <div>
            <div className="section-label">Neden Biz?</div>
            <h2 className="section-title">
              Ajans Kalitesi,<br />
              <span className="text-accent">Freelance Esnekliği</span>
            </h2>
            <p className="section-sub">
              Büyük ajansların sunduğu kaliteyi, freelance'ın hızı ve kişiselliğiyle birleştiriyoruz.
            </p>
            <div className={styles.whyItems}>
              {WHY_ITEMS.map((item, i) => (
                <FadeUp key={i} delay={i + 1}>
                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}>{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
          <div className={styles.whyVisual}>
            <div className={styles.whyCircle}>
              <div className={styles.whyCircleInner}>
                <span className={styles.circleNum}>50+</span>
                <span className={styles.circleLbl}>Mutlu Müşteri</span>
              </div>
              <div className={`${styles.orbitBadge} ${styles.ob1}`}>🏆 5 Yıl Deneyim</div>
              <div className={`${styles.orbitBadge} ${styles.ob2}`}>✅ %98 Memnuniyet</div>
              <div className={`${styles.orbitBadge} ${styles.ob3}`}>🚀 Hızlı Teslimat</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ── FEATURED PROJECTS ── */
function FeaturedProjects() {
  return (
    <section className="section-pad">
      <div className="container">
        <div className={styles.projHeader}>
          <div>
            <div className="section-label">Öne Çıkan Projeler</div>
            <h2 className="section-title">Tamamlanan <span className="text-accent">İşler</span></h2>
            <p className="section-sub">Farklı sektörlerden başarılı projelerden bir seçki.</p>
          </div>
          <Link to="/projeler" className="btn btn-outline">Tüm Projeler →</Link>
        </div>
        <div className={styles.projGrid}>
          {projects.map((p, i) => (
            <FadeUp key={i} delay={(i % 2) + 1}>
              <div className={styles.projCard}>
                <div className={styles.projImg}>
                  {p.image
                    ? <img src={p.image} alt={p.title} className={styles.projScreenshot} />
                    : <div className={styles.projPlaceholder} style={{ background: p.gradient }}>{p.emoji}</div>
                  }
                  <div className={styles.projOverlay}>
                    <div className={styles.projTags}>
                      {p.tags.map((t, j) => <span key={j} className={styles.projTag}>{t}</span>)}
                    </div>
                  </div>
                </div>
                <div className={styles.projBody}>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <a href={p.url} target="_blank" rel="noreferrer" className={styles.projLink}>
                    {p.urlLabel} →
                  </a>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── PROCESS ── */
function Process() {
  return (
    <section className={`section-pad ${styles.processSection}`}>
      <div className="container">
        <div className="text-center">
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Süreç</div>
          <h2 className="section-title">Nasıl <span className="text-accent">Çalışıyoruz?</span></h2>
          <p className="section-sub" style={{ margin: '14px auto 0' }}>
            Projenizi fikir aşamasından canlı yayına kadar şeffaf ve planlı bir süreçle yönetiyoruz.
          </p>
        </div>
        <div className={styles.processGrid}>
          {processSteps.map((s, i) => (
            <FadeUp key={i} delay={i + 1}>
              <div className={styles.processStep}>
                <div className={styles.processNum}>{s.num}</div>
                <h4>{s.title}</h4>
                <p>{s.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <div className={styles.trustBar}>
            {trustStats.map((t, i) => (
              <div key={i} className={styles.trustItem}>
                <span className={styles.trustNum}>{t.num}</span>
                <span className={styles.trustLbl}>{t.label}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}

/* ── TESTIMONIALS ── */
function Testimonials() {
  return (
    <section className={`section-pad ${styles.testiSection}`}>
      <div className="container">
        <div className="section-label">Müşteri Yorumları</div>
        <h2 className="section-title">
          Müşterilerimiz <span className="text-accent">Ne Diyor?</span>
        </h2>
        <p className="section-sub">Gerçek müşterilerden, gerçek deneyimler.</p>
        <div className={styles.testiGrid}>
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i + 1}>
              <div className={styles.testiCard}>
                <div className={styles.stars}>{'★'.repeat(t.stars)}</div>
                <p className={styles.testiText}>{t.text}</p>
                <div className={styles.testiAuthor}>
                  <div className={styles.avatar} style={{ background: t.avatarBg }}>{t.initial}</div>
                  <div>
                    <div className={styles.authorName}>{t.name}</div>
                    <div className={styles.authorRole}>{t.role}</div>
                    <a href={`https://${t.site}`} target="_blank" rel="noreferrer" className={styles.authorSite}>
                      {t.site}
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── FAQ ── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <section className="section-pad">
      <div className="container">
        <div className="text-center">
          <div className="section-label" style={{ margin: '0 auto 20px' }}>SSS</div>
          <h2 className="section-title">Sık Sorulan <span className="text-accent">Sorular</span></h2>
          <p className="section-sub" style={{ margin: '14px auto 0' }}>
            Aklınızdaki soruların cevabını bulamadıysanız WhatsApp'tan ulaşabilirsiniz.
          </p>
        </div>
        <div className={styles.faqList}>
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`${styles.faqItem} ${openIdx === i ? styles.faqOpen : ''}`}
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
            >
              <div className={styles.faqQ}>
                {f.q}
                <span className={styles.faqArrow}>▼</span>
              </div>
              <div className={styles.faqA}>
                <div className={styles.faqAInner}>{f.a}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: 36 }}>
          <a
            href={waLink('Merhaba, sormak istediğim birkaç sorum var.')}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            💬 Başka Sorunuz mu Var? WhatsApp'tan Sorun
          </a>
        </div>
      </div>
    </section>
  )
}

/* ── CTA ── */
function CTA() {
  return (
    <section className={`section-pad ${styles.ctaSection}`}>
      <div className="container">
        <div className={styles.ctaBox}>
          <div className="section-label" style={{ margin: '0 auto 20px' }}>Hemen Başlayalım</div>
          <h2 className="section-title">
            Projenizi Hayata<br />
            <span className="text-accent">Geçirmeye Hazırız</span>
          </h2>
          <p>Ücretsiz ön görüşme ile ihtiyaçlarınızı konuşalım ve size en uygun çözümü birlikte belirleyelim.</p>
          <div className={styles.ctaActions}>
            <a
              href={waLink('Merhaba, proje teklifi almak istiyorum.')}
              target="_blank"
              rel="noreferrer"
              className="btn btn-primary"
            >
              💬 WhatsApp'tan Teklif Al
            </a>
            <Link to="/iletisim" className="btn btn-outline">📞 İletişime Geç</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <WhyUs />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  )
}
