import { useState } from 'react'
import FadeUp from '@/components/FadeUp'
import { pricingPlans, waLink } from '@/data'
import styles from './Pricing.module.css'

function Tooltip({ text, children }) {
  const [show, setShow] = useState(false)
  return (
    <span
      className={styles.tipWrap}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      {children}
      <i className={styles.tipIcon}>?</i>
      {show && <span className={styles.tipBox}>{text}</span>}
    </span>
  )
}

export default function Pricing() {
  return (
    <div className="page-wrapper">
      <section className="section-pad">
        <div className="container">
          <div className="text-center">
            <div className="section-label" style={{ margin: '0 auto 20px' }}>Fiyatlandırma</div>
            <h2 className="section-title">Şeffaf & <span className="text-accent">Adil Fiyatlar</span></h2>
            <p className="section-sub" style={{ margin: '14px auto 0' }}>
              Her bütçeye uygun paket seçenekleri. Gizli ücret yok, sürpriz fatura yok.
            </p>
          </div>

          <div className={styles.grid}>
            {pricingPlans.map((plan, i) => (
              <FadeUp key={i} delay={i + 1}>
                <div className={`${styles.card} ${plan.popular ? styles.popular : ''}`}>
                  {plan.popular && <div className={styles.popularBadge}>⭐ En Çok Tercih Edilen</div>}
                  <div className={styles.name}>{plan.name}</div>
                  <div className={styles.price}>
                    {plan.price} <span>{plan.priceSuffix}</span>
                  </div>
                  <p className={styles.desc}>{plan.desc}</p>

                  <ul className={styles.features}>
                    {plan.features.map((f, j) => (
                      <li key={j} className={f.ok ? '' : styles.no}>
                        {f.tip
                          ? <Tooltip text={f.tip}>{f.text}</Tooltip>
                          : f.text
                        }
                        {f.ok && f.text.includes('teknik destek') && (
                          <span className={`support-badge ${plan.supportClass}`}>{plan.support}</span>
                        )}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={waLink(plan.waMsg)}
                    target="_blank"
                    rel="noreferrer"
                    className={`btn ${plan.btnClass} ${styles.planBtn}`}
                  >
                    💬 WhatsApp'tan Teklif Al
                  </a>
                </div>
              </FadeUp>
            ))}
          </div>

          <FadeUp>
            <div className={styles.note}>
              <p>
                💡 <strong>Projenize özel fiyat mı istiyorsunuz?</strong> İhtiyaçlarınızı anlatalım, size özel teklif hazırlayalım.
              </p>
              <a
                href={waLink('Merhaba, projem için özel teklif almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                💬 WhatsApp'tan Özel Teklif Al →
              </a>
            </div>
          </FadeUp>
        </div>
      </section>
    </div>
  )
}
