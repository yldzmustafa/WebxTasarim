import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useNavScroll } from '@/hooks/useScrollAnimation'
import { waLink } from '@/data'
import styles from './Navbar.module.css'

const links = [
  { to: '/', label: 'Ana Sayfa' },
  { to: '/hakkimizda', label: 'Hakkımızda' },
  { to: '/projeler', label: 'Projeler' },
  { to: '/fiyatlar', label: 'Fiyatlar' },
  {
    label: 'Hizmetler ▾',
    dropdown: [
      { to: '/seo-hizmetleri', label: '🔍 SEO Hizmetleri' },
      { to: '/otomasyon', label: '⚡ Otomasyon Çözümleri' },
    ],
  },
  { to: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const scrolled = useNavScroll()
  const [open, setOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)
  const { pathname } = useLocation()
  const close = () => setOpen(false)

  return (
    <>
      <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`${styles.inner} container`}>
          <Link to="/" className={styles.logo} onClick={close}>
            <div className={styles.logoIcon}>W</div>
            WebX<span>Tasarım</span>
          </Link>

          <nav className={styles.navLinks}>
            {links.map((l, i) => {
              if (l.dropdown) {
                return (
                  <div
                    key={i}
                    className={styles.dropWrap}
                    onMouseEnter={() => setDropOpen(true)}
                    onMouseLeave={() => setDropOpen(false)}
                  >
                    <span className={styles.navLink}>{l.label}</span>
                    {dropOpen && (
                      <div className={styles.dropdown}>
                        {l.dropdown.map(d => (
                          <Link
                            key={d.to}
                            to={d.to}
                            className={`${styles.dropItem} ${pathname === d.to ? styles.active : ''}`}
                            onClick={() => setDropOpen(false)}
                          >
                            {d.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )
              }
              return (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`${styles.navLink} ${pathname === l.to ? styles.active : ''}`}
                >
                  {l.label}
                </Link>
              )
            })}
            <a
              href={waLink('Merhaba, proje teklifi almak istiyorum.')}
              target="_blank"
              rel="noreferrer"
              className={styles.navCta}
            >
              💬 Teklif Al
            </a>
          </nav>

          <button
            className={`${styles.hamburger} ${open ? styles.open : ''}`}
            onClick={() => setOpen(v => !v)}
            aria-label="Menü"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`${styles.mobileMenu} ${open ? styles.mobileOpen : ''}`}>
        <button className={styles.mobileClose} onClick={close}>✕</button>
        <Link to="/" className={styles.mobileLink} onClick={close}>Ana Sayfa</Link>
        <Link to="/hakkimizda" className={styles.mobileLink} onClick={close}>Hakkımızda</Link>
        <Link to="/projeler" className={styles.mobileLink} onClick={close}>Projeler</Link>
        <Link to="/fiyatlar" className={styles.mobileLink} onClick={close}>Fiyatlar</Link>
        <Link to="/seo-hizmetleri" className={styles.mobileLink} onClick={close}>🔍 SEO Hizmetleri</Link>
        <Link to="/otomasyon" className={styles.mobileLink} onClick={close}>⚡ Otomasyon</Link>
        <Link to="/iletisim" className={styles.mobileLink} onClick={close}>İletişim</Link>
        <a
          href={waLink('Merhaba, proje teklifi almak istiyorum.')}
          target="_blank"
          rel="noreferrer"
          className={styles.mobileCta}
          onClick={close}
        >
          💬 WhatsApp'tan Teklif Al
        </a>
      </div>
    </>
  )
}