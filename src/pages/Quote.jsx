import { useState } from 'react'
import { PHONE_DISPLAY, EMAIL, waLink } from '@/data'
import styles from './Quote.module.css'

const SITE_TYPES = [
  { label: 'Kurumsal Web Sitesi', value: 5000 },
  { label: 'E-Ticaret Sitesi', value: 8000 },
  { label: 'Portföy Sitesi', value: 3000 },
  { label: 'Landing Page', value: 4000 },
  { label: 'Web Uygulaması', value: 10000 },
  { label: 'Blog / Haber Sitesi', value: 2000 },
]
const PAGE_COUNTS = [
  { label: '1-5 Sayfa (dahil)', value: 0 },
  { label: '6-10 Sayfa (+₺2.000)', value: 2000 },
  { label: '11-20 Sayfa (+₺5.000)', value: 5000 },
  { label: '20+ Sayfa (+₺10.000)', value: 10000 },
]
const DELIVERY = [
  { label: 'Normal (3-6 hafta)', value: 0 },
  { label: 'Hızlı (1-2 hafta, +₺3.000)', value: 3000 },
  { label: 'Ekspres (<1 hafta, +₺6.000)', value: 6000 },
]
const EXTRAS = [
  { id: 'f1', label: 'Blog / CMS', desc: 'Kod bilmeden içerik ekleyip düzenleyebileceğiniz panel', value: 2500 },
  { id: 'f2', label: 'Ödeme Sistemi', desc: 'Stripe, iyzico veya PayTR entegrasyonu', value: 4000 },
  { id: 'f3', label: 'Admin Paneli', desc: 'Siparişler ve içerikleri yönetebileceğiniz özel panel', value: 5000 },
  { id: 'f4', label: 'Çok Dil', desc: 'TR/EN ve daha fazla dil için çeviri altyapısı', value: 1500 },
  { id: 'f5', label: 'SEO Paketi', desc: 'Teknik SEO, schema ve Google Search Console kurulumu', value: 2000 },
  { id: 'f6', label: 'Üye Sistemi', desc: 'Kayıt, giriş, profil ve rol bazlı erişim kontrolü', value: 3000 },
  { id: 'f7', label: 'API Entegrasyon', desc: 'CRM, ERP, kargo, muhasebe gibi 3. parti bağlantılar', value: 3500 },
  { id: 'f8', label: 'Canlı Destek', desc: 'Tawk.to veya benzeri canlı destek widget kurulumu', value: 1500 },
]

export default function Quote() {
  const [siteType, setSiteType] = useState('')
  const [pageCount, setPageCount] = useState(0)
  const [delivery, setDelivery] = useState(0)
  const [extras, setExtras] = useState({})
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [detail, setDetail] = useState('')

  const toggleExtra = (id, value) =>
    setExtras(prev => ({ ...prev, [id]: prev[id] ? 0 : value }))

  const base = parseInt(siteType) || 0
  const extraTotal = Object.values(extras).reduce((a, b) => a + (b || 0), 0)
  const total = base + pageCount + delivery + extraTotal
  const high = Math.round(total * 1.3 / 500) * 500

  const priceLabel = siteType
    ? `₺${total.toLocaleString('tr-TR')} – ₺${(high > total ? high : total + 5000).toLocaleString('tr-TR')}`
    : null

  const sendToWA = () => {
    const siteName = SITE_TYPES.find(s => s.value === parseInt(siteType))?.label || ''
    const extraNames = EXTRAS.filter(f => extras[f.id]).map(f => f.label).join(', ')
    let msg = 'Merhaba WebX Tasarım,\n\nProje teklifi almak istiyorum.\n'
    if (name) msg += `\nAd: ${name}`
    if (phone) msg += `\nTelefon: ${phone}`
    if (siteName) msg += `\nSite Türü: ${siteName}`
    if (extraNames) msg += `\nEk Özellikler: ${extraNames}`
    if (priceLabel) msg += `\nTahmini Bütçe: ${priceLabel}`
    if (detail) msg += `\n\nDetaylar:\n${detail}`
    window.open(`https://wa.me/905319621482?text=${encodeURIComponent(msg)}`, '_blank')
  }

  return (
    <div className="page-wrapper">
      <section className={`section-pad ${styles.section}`}>
        <div className="container">
          <div className="section-label">Teklif Al</div>
          <h2 className="section-title">
            Projeniz İçin<br />
            <span className="text-accent">Tahmini Fiyat</span> Hesaplayın
          </h2>
          <p className="section-sub">
            Seçimlerinize göre anlık fiyat tahmini alın. Kesin fiyat görüşme sonrası belirlenir.
          </p>

          <div className={styles.wrapper}>
            {/* LEFT */}
            <div className={styles.info}>
              <h3>Neden WebX Tasarım?</h3>
              <p>Projenizi anlatın, gereksinimlerinizi seçin ve anında bir fiyat tahmini alın. 24 saat içinde size geri dönüyoruz.</p>
              <div className={styles.guarantees}>
                {[
                  ['✅', 'Ücretsiz ön görüşme'],
                  ['⚡', '24 saat içinde geri dönüş'],
                  ['🔒', 'Bilgileriniz gizli tutulur'],
                  ['💰', 'Gizli ücret yoktur'],
                  ['🛡️', 'Pakete göre 1–6 ay destek'],
                  ['🏆', '50+ başarılı proje'],
                ].map(([icon, text]) => (
                  <div key={text} className={styles.guarantee}>
                    <span>{icon}</span><span>{text}</span>
                  </div>
                ))}
              </div>
              <div className={styles.contactBox}>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>📞 Telefon / WhatsApp</span>
                  <a href={waLink()} target="_blank" rel="noreferrer" className={styles.contactVal}>{PHONE_DISPLAY}</a>
                </div>
                <div className={styles.contactRow}>
                  <span className={styles.contactLabel}>📧 E-Posta</span>
                  <a href={`mailto:${EMAIL}`} className={styles.contactVal}>{EMAIL}</a>
                </div>
              </div>
              <a
                href={waLink('Merhaba, proje teklifi almak istiyorum.')}
                target="_blank"
                rel="noreferrer"
                className={`btn btn-primary ${styles.waBtn}`}
              >
                💬 WhatsApp'tan Hızlı Teklif Al
              </a>
            </div>

            {/* RIGHT FORM */}
            <div className={styles.formBox}>
              <div className="form-group">
                <label className="form-label">Web Sitesi Türü *</label>
                <select className="form-select" value={siteType} onChange={e => setSiteType(e.target.value)}>
                  <option value="">Seçiniz...</option>
                  {SITE_TYPES.map(s => (
                    <option key={s.label} value={s.value}>
                      {s.label} (+₺{s.value.toLocaleString('tr-TR')})
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Sayfa Sayısı</label>
                <select className="form-select" value={pageCount} onChange={e => setPageCount(+e.target.value)}>
                  {PAGE_COUNTS.map(p => <option key={p.label} value={p.value}>{p.label}</option>)}
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">
                  Ek Özellikler
                  <span className={styles.hint}> – üzerine gelin, açıklama görün</span>
                </label>
                <div className={styles.extrasGrid}>
                  {EXTRAS.map(f => (
                    <label
                      key={f.id}
                      className={`${styles.extraItem} ${extras[f.id] ? styles.checked : ''}`}
                      title={f.desc}
                    >
                      <input
                        type="checkbox"
                        checked={!!extras[f.id]}
                        onChange={() => toggleExtra(f.id, f.value)}
                      />
                      <span className={styles.extraLabel}>{f.label}</span>
                      <span className={styles.extraPrice}>+₺{f.value.toLocaleString('tr-TR')}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Teslim Süresi</label>
                <select className="form-select" value={delivery} onChange={e => setDelivery(+e.target.value)}>
                  {DELIVERY.map(d => <option key={d.label} value={d.value}>{d.label}</option>)}
                </select>
              </div>

              <div className={styles.priceDisplay}>
                <small>Tahmini Fiyat Aralığı</small>
                <div className={styles.priceAmount}>
                  {priceLabel ?? '₺ Seçim yapın'}
                </div>
                <small>KDV dahil değildir. Kesin fiyat görüşme sonrası belirlenir.</small>
              </div>

              <div className="form-group">
                <label className="form-label">Adınız Soyadınız *</label>
                <input className="form-input" type="text" placeholder="Ahmet Yılmaz" value={name} onChange={e => setName(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Telefon</label>
                <input className="form-input" type="tel" placeholder={PHONE_DISPLAY} value={phone} onChange={e => setPhone(e.target.value)} />
              </div>
              <div className="form-group">
                <label className="form-label">Proje Detayları</label>
                <textarea className="form-textarea" placeholder="Projeniz hakkında kısa bilgi verin..." value={detail} onChange={e => setDetail(e.target.value)} />
              </div>

              <button className={`btn btn-primary ${styles.submitBtn}`} onClick={sendToWA}>
                💬 WhatsApp'tan Teklif Gönder
              </button>
              <p className="form-note">Formu doldurduktan sonra sizi WhatsApp'a yönlendiriyoruz.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
