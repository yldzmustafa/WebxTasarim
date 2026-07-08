import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import FadeUp from '@/components/FadeUp'
import { skills, waLink } from '@/data'
import styles from './About.module.css'

const approach = [
  { num: '1', title: 'Keşif', desc: 'İhtiyaçlarınızı, hedef kitlenizi ve rekabet ortamını analiz ediyoruz.' },
  { num: '2', title: 'Tasarım', desc: "Figma'da wireframe ve tasarım prototipi oluşturuyor, onayınızı alıyoruz." },
  { num: '3', title: 'Geliştirme', desc: 'Temiz, hızlı ve ölçeklenebilir kod yazıyoruz.' },
  { num: '4', title: 'Test & Lansman', desc: 'Kapsamlı test sonrası sitenizi yayına alıyoruz.' },
  { num: '5', title: 'Destek', desc: 'Paketinize göre 1, 3 veya 6 ay teknik destek sağlıyoruz.' },
]

export default function About() {
  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Hakkımızda – Ümraniye Web Tasarım Ajansı | WebX Tasarım</title>
        <meta name="description" content="İstanbul Ümraniye merkezli WebX Tasarım ekibini tanıyın. 5+ yıllık deneyimle Ümraniye, Kadıköy, Ataşehir ve tüm İstanbul ilçelerinde web sitesi tasarımı ve dijital çözümler." />
        <meta name="keywords" content="ümraniye web tasarım ajansı, istanbul web tasarım, web geliştirme istanbul, ümraniye web geliştirme" />
        <link rel="canonical" href="https://webxtasarim.com/hakkimizda" />
        <meta property="og:url" content="https://webxtasarim.com/hakkimizda" />
        <meta property="og:title" content="Hakkımızda – Ümraniye Web Tasarım Ajansı | WebX Tasarım" />
      </Helmet>
      <section className="section-pad">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.imgWrap}>
              <div className={styles.img}>👨‍💻</div>
              <div className={styles.expBadge}>
                <span className={styles.expNum}>5+</span>
                <small>Yıl Deneyim</small>
              </div>
            </div>

            <div className={styles.content}>
              <div className="section-label">Hakkımızda</div>
              <h2 className="section-title">
                Biz Kimiz? <span className="text-accent">WebX Tasarım</span>
              </h2>
              <p className={styles.intro}>
                İstanbul Ümraniye merkezli, 5+ yıllık deneyime sahip bir web geliştirme ve UI/UX
                tasarım ekibiyiz. Ümraniye, Kadıköy, Ataşehir ve tüm İstanbul ilçelerinde web
                sitesi, web uygulaması ve e-ticaret alanında işletmelere güçlü bir dijital kimlik
                kazandırıyoruz.
              </p>
              <p className={styles.body}>
                Yazılım geliştirme kariyerimizi tasarım tutkusuyla birleştirerek tam kapsamlı dijital
                çözümler üretiyoruz. Ajans deneyimimizin ardından freelance yapıya geçerek her
                müşterimize daha kişiselleştirilmiş ve hızlı hizmet sunuyoruz.
              </p>
              <p className={styles.body}>
                Her projede amacımız; görsel açıdan etkileyici, teknik olarak sağlam ve iş
                hedeflerinize doğrudan hizmet eden çözümler oluşturmaktır.
              </p>

              <div className={styles.skillsSection}>
                {Object.entries(skills).map(([cat, tags]) => (
                  <div key={cat} className={styles.skillGroup}>
                    <h4 className={styles.skillCat}>{cat}</h4>
                    <div className={styles.skillsGrid}>
                      {tags.map(t => <span key={t} className={styles.skillTag}>{t}</span>)}
                    </div>
                  </div>
                ))}
              </div>

              <h4 className={styles.approachTitle}>Proje Yaklaşımımız</h4>
              <div className={styles.approachList}>
                {approach.map(a => (
                  <FadeUp key={a.num}>
                    <div className={styles.approachItem}>
                      <div className={styles.approachNum}>{a.num}</div>
                      <p><strong>{a.title}:</strong> {a.desc}</p>
                    </div>
                  </FadeUp>
                ))}
              </div>

              <div className={styles.actions}>
                <a
                  href={waLink('Merhaba, birlikte çalışmak istiyorum.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  💬 Birlikte Çalışalım
                </a>
                <Link to="/projeler" className="btn btn-outline">Projelerimizi Gör</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
