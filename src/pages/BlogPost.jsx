import { useParams, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { getBlogPost, getRelatedPosts } from '@/data/blog'
import { waLink } from '@/data'
import styles from './BlogPost.module.css'

function renderBlock(block, i) {
  switch (block.type) {
    case 'h2': return <h2 key={i} className={styles.h2}>{block.text}</h2>
    case 'h3': return <h3 key={i} className={styles.h3}>{block.text}</h3>
    case 'p':  return <p  key={i} className={styles.p}>{block.text}</p>
    case 'ul': return (
      <ul key={i} className={styles.ul}>
        {block.items.map((item, j) => <li key={j}>{item}</li>)}
      </ul>
    )
    default: return null
  }
}

function formatDate(dateStr) {
  const months = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık']
  const d = new Date(dateStr)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = getBlogPost(slug)

  if (!post) return <Navigate to="/blog" replace />

  const related = getRelatedPosts(slug, 3)
  const canonical = `https://webxtasarim.com/blog/${slug}`

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>{post.title} | WebX Tasarım Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta name="keywords" content={post.tags.join(', ') + ', web tasarım, webxtasarim'} />
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="article:published_time" content={post.date} />
      </Helmet>

      {/* BREADCRUMB */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link to="/">Ana Sayfa</Link>
          <span> / </span>
          <Link to="/blog">Blog</Link>
          <span> / </span>
          <span>{post.title}</span>
        </div>
      </div>

      {/* MAKALE */}
      <article className={styles.article}>
        <div className="container">
          <div className={styles.inner}>
            {/* BAŞLIK ALANI */}
            <header className={styles.header}>
              <div className={styles.metaRow}>
                <span className={styles.category}>{post.category}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.date}>{formatDate(post.date)}</span>
                <span className={styles.dot}>·</span>
                <span className={styles.readTime}>{post.readTime} okuma</span>
              </div>
              <h1 className={styles.title}>{post.title}</h1>
              <p className={styles.excerpt}>{post.excerpt}</p>
              <div className={styles.tags}>
                {post.tags.map(tag => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </header>

            {/* İÇERİK */}
            <div className={styles.content}>
              {post.content.map((block, i) => renderBlock(block, i))}
            </div>

            {/* CTA */}
            <div className={styles.cta}>
              <h3>Projenizi Hayata Geçirelim</h3>
              <p>Bu yazıda anlattığımız konular hakkında işletmenize özel çözümler için ücretsiz görüşme talep edin.</p>
              <div className={styles.ctaActions}>
                <a
                  href={waLink('Merhaba, blog yazınızı okudum. Daha fazla bilgi almak istiyorum.')}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary"
                >
                  💬 WhatsApp\'tan Teklif Al
                </a>
                <Link to="/iletisim" className="btn btn-outline">İletişime Geç</Link>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* İLGİLİ YAZILAR */}
      {related.length > 0 && (
        <section className={`section-pad ${styles.relatedSection}`}>
          <div className="container">
            <div className="section-label">Devamını Okuyun</div>
            <h2 className="section-title">İlgili <span className="text-accent">Blog Yazıları</span></h2>
            <div className={styles.relatedGrid}>
              {related.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className={styles.relatedCard}>
                  <span className={styles.relatedCat}>{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <span className={styles.relatedLink}>Oku →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
