import { useState } from 'react'
import { PHONE_DISPLAY, EMAIL, waLink } from '@/data'
import styles from './Contact.module.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [msg, setMsg] = useState('')

  const sendWA = () => {
    let text = 'Merhaba WebX Tasarım,\n\n'
    if (name) text += `Ad: ${name}\n\n`
    text += msg || 'Proje hakkında bilgi almak istiyorum.'
    window.open(`https://wa.me/905319621482?text=${encodeURIComponent(text)}`, '_blank')
  }

  return (
    <div className="page-wrapper">
      <section className="section-pad">
        <div className="container">
          <div className="section-label">İletişim</div>
          <h2 className="section-title">
            Konuşmaya<br />
            <span className="text-accent">Başlayalım</span>
          </h2>
          <p className="section-sub">
            Projeniz için ücretsiz ön görüşme talep edin ya da aklınızdaki soruları sorun.
          </p>

          <div className={styles.grid}>
            {/* LEFT */}
            <div className={styles.infoCol}>
              <h3>Hızlı İletişim</h3>
              <p>
                Projeniz küçük ya da büyük olsun, her türlü soruyu yanıtlamaktan mutluluk duyuyoruz.
                Genellikle 24 saat içinde geri dönüş yapıyoruz.
              </p>

              <div className={styles.contactItems}>
                <a href={`mailto:${EMAIL}`} className={styles.contactItem}>
                  <div className={styles.ciIcon}>📧</div>
                  <div>
                    <div className={styles.ciLabel}>E-Posta</div>
                    <div className={styles.ciVal}>{EMAIL}</div>
                  </div>
                </a>
                <a href={waLink()} target="_blank" rel="noreferrer" className={styles.contactItem}>
                  <div className={styles.ciIcon}>📞</div>
                  <div>
                    <div className={styles.ciLabel}>Telefon / WhatsApp</div>
                    <div className={styles.ciVal}>{PHONE_DISPLAY}</div>
                  </div>
                </a>
                <div className={styles.contactItem}>
                  <div className={styles.ciIcon}>📍</div>
                  <div>
                    <div className={styles.ciLabel}>Konum</div>
                    <div className={styles.ciVal}>İstanbul, Türkiye</div>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <div className={styles.ciIcon}>🕐</div>
                  <div>
                    <div className={styles.ciLabel}>Çalışma Saatleri</div>
                    <div className={styles.ciVal}>Pzt–Cum: 09:00 – 18:00</div>
                  </div>
                </div>
              </div>

              <a
                href={waLink('Merhaba, proje hakkında bilgi almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className={`btn btn-primary ${styles.waBtn}`}
              >
                💬 WhatsApp'tan Mesaj Gönder
              </a>

              <div className={styles.socials}>
                <a href="#!" className="social-link" aria-label="LinkedIn">💼</a>
                <a href="#!" className="social-link" aria-label="Instagram">📷</a>
                <a href="#!" className="social-link" aria-label="Twitter">🐦</a>
                <a href="#!" className="social-link" aria-label="GitHub">🐱</a>
                <a href="#!" className="social-link" aria-label="Behance">🎨</a>
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className={styles.formBox}>
              <div className="form-group">
                <label className="form-label">Adınız Soyadınız *</label>
                <input className="form-input" type="text" placeholder="Ahmet Yılmaz" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">E-Posta Adresiniz</label>
                <input className="form-input" type="email" placeholder={EMAIL} />
              </div>
              <div className="form-group">
                <label className="form-label">Konu</label>
                <select className="form-select">
                  <option>Yeni Proje Talebi</option>
                  <option>Fiyat Bilgisi</option>
                  <option>Teknik Destek</option>
                  <option>İş Birliği</option>
                  <option>Diğer</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">Mesajınız *</label>
                <textarea
                  className="form-textarea"
                  placeholder="Merhaba, projem hakkında bilgi almak istiyorum..."
                  value={msg}
                  onChange={e => setMsg(e.target.value)}
                />
              </div>
              <button className={`btn btn-primary ${styles.submitBtn}`} onClick={sendWA}>
                💬 WhatsApp'tan Mesaj Gönder
              </button>
              <p className="form-note">Genellikle 24 saat içinde yanıt veriyoruz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
