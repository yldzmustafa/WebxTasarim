import FadeUp from '@/components/FadeUp'
import { projects, waLink } from '@/data'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <div className="page-wrapper">
      <section className="section-pad">
        <div className="container">
          <div className="section-label">Portföy</div>
          <h2 className="section-title">
            Tamamlanan <span className="text-accent">Projeler</span>
          </h2>
          <p className="section-sub">Her proje, özel ihtiyaçlara göre tasarlanmış ve geliştirilmiştir.</p>

          <div className={styles.grid}>
            {projects.map((p, i) => (
              <FadeUp key={i} delay={(i % 2) + 1}>
                <div className={styles.card}>
                  <div className={styles.imgWrap}>
                    {p.image
                      ? <img src={p.image} alt={p.title} className={styles.screenshot} />
                      : <div className={styles.placeholder} style={{ background: p.gradient }}>{p.emoji}</div>
                    }
                    <div className={styles.overlay}>
                      <div className={styles.tags}>
                        {p.tags.map((t, j) => <span key={j} className={styles.tag}>{t}</span>)}
                      </div>
                    </div>
                  </div>
                  <div className={styles.body}>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <a href={p.url} target="_blank" rel="noreferrer" className={styles.link}>
                      🔗 {p.urlLabel}
                    </a>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className={styles.cta}>
              <p>Projenizi hayata geçirmek ister misiniz?</p>
              <a
                href={waLink('Merhaba, benzer bir proje yaptırmak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                💬 Benzer Proje İstiyorum
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
