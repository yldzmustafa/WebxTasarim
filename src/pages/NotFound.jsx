import { Link } from 'react-router-dom'
import { waLink } from '@/data'
import styles from './NotFound.module.css'

const quickLinks = [
  { to: '/', label: '🏠 Ana Sayfa' },
  { to: '/projeler', label: '💼 Projeler' },
  { to: '/fiyatlar', label: '💰 Fiyatlar' },
  { to: '/iletisim', label: '📞 İletişim' },
]

export default function NotFound() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.bg}>
        <div className={styles.glow} />
        <div className={styles.grid} />
      </div>

      <div className={styles.content}>
        {/* 404 Büyük Yazı */}
        <div className={styles.code}>404</div>

        {/* İkon */}
        <div className={styles.icon}>🔍</div>

        {/* Başlık */}
        <h1 className={styles.title}>Sayfa Bulunamadı</h1>
        <p className={styles.desc}>
          Aradığınız sayfa taşınmış, silinmiş ya da hiç var olmamış olabilir.
          Aşağıdaki bağlantılardan devam edebilirsiniz.
        </p>

        {/* Hızlı Linkler */}
        <div className={styles.links}>
          {quickLinks.map(l => (
            <Link key={l.to} to={l.to} className={styles.linkCard}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTA Butonları */}
        <div className={styles.actions}>
          <Link to="/" className="btn btn-primary">
            ← Ana Sayfaya Dön
          </Link>
          <a
            href={waLink('Merhaba, bir sayfaya ulaşmaya çalışırken hata aldım.')}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline"
          >
            💬 Yardım Al
          </a>
        </div>
      </div>
    </div>
  )
}