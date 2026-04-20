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
  { to: '/iletisim', label: 'İletişim' },
]

export default function Navbar() {
  const scrolled = useNavScroll()
  const [open, setOpen] = useState(false)
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
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`${styles.navLink} ${pathname === l.to ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            ))}
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
        {links.map(l => (
          <Link key={l.to} to={l.to} className={styles.mobileLink} onClick={close}>
            {l.label}
          </Link>
        ))}
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
