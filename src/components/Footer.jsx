import { Link } from 'react-router-dom'
import { EMAIL, PHONE_DISPLAY } from '@/data'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <div className={styles.logoIcon}>W</div>
              WebX<span>Tasarım</span>
            </Link>
            <p>Web sitesi, web uygulaması ve e-ticaret alanında modern, hızlı ve dönüşüm odaklı dijital çözümler üretiyoruz.</p>
            <div className={styles.socials}>
              <a href="#!" className="social-link" aria-label="LinkedIn">💼</a>
              <a href="#!" className="social-link" aria-label="Instagram">📷</a>
              <a href="#!" className="social-link" aria-label="Twitter">🐦</a>
              <a href="#!" className="social-link" aria-label="GitHub">🐱</a>
            </div>
          </div>

          <div className={styles.col}>
            <h5>Sayfalar</h5>
            <Link to="/">Ana Sayfa</Link>
            <Link to="/hakkimizda">Hakkımızda</Link>
            <Link to="/projeler">Projeler</Link>
            <Link to="/fiyatlar">Fiyatlar</Link>
            <Link to="/iletisim">İletişim</Link>
          </div>

          <div className={styles.col}>
            <h5>Hizmetler</h5>
            <Link to="/teklif">Kurumsal Web</Link>
            <Link to="/teklif">E-Ticaret</Link>
            <Link to="/teklif">Web Uygulaması</Link>
            <Link to="/seo-hizmetleri">🔍 SEO Hizmetleri</Link>
            <Link to="/otomasyon">⚡ Otomasyon</Link>
          </div>

          <div className={styles.col}>
            <h5>İletişim</h5>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={`https://wa.me/905319621482`} target="_blank" rel="noreferrer">{PHONE_DISPLAY}</a>
            <span>İstanbul, Türkiye</span>
            <a
              href={`https://wa.me/905319621482?text=${encodeURIComponent('Merhaba, proje teklifi almak istiyorum.')}`}
              target="_blank"
              rel="noreferrer"
              className={`btn btn-primary ${styles.footerCta}`}
            >
              💬 Teklif Al
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <span>© 2025 WebX Tasarım – webxtasarim.com – Tüm hakları saklıdır.</span>
          <div className={styles.legal}>
            <a href="#!">Gizlilik Politikası</a>
            <a href="#!">Kullanım Şartları</a>
          </div>
        </div>
      </div>
    </footer>
  )
}