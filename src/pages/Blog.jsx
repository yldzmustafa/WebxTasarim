import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import FadeUp from '@/components/FadeUp'
import { blogPosts } from '@/data/blog'
import styles from './Blog.module.css'

const ALL_CATEGORIES = ['Tümü', ...Array.from(new Set(blogPosts.map(p => p.category)))]

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('Tümü')

  const filtered = activeCategory === 'Tümü'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeCategory)

  return (
    <div className="page-wrapper">
      <Helmet>
        <title>Blog – Web Tasarım, SEO ve Dijital Pazarlama | WebX Tasarım</title>
        <meta name="description" content="Web tasarım, SEO, e-ticaret ve dijital pazarlama hakkında güncel blog yazıları. İstanbul, Ümraniye, İzmir ve Türkiye geneli yerel SEO rehberleri." />
        <meta name="keywords" content="web tasarım blog, seo rehberi, e-ticaret blog, ümraniye web sitesi, istanbul web tasarım rehberi, web sitesi yaptırma" />
        <link rel="canonical" href="https://webxtasarim.com/blog" />
        <meta property="og:url" content="https://webxtasarim.com/blog" />
        <meta property="og:title" content="Blog – Web Tasarım, SEO ve Dijital Pazarlama | WebX Tasarım" />
      </Helmet>

      {/* HERO */}
      <section className={styles.hero}>
        <div className="container">
          <div className="section-label">Blog</div>
          <h1 className={styles.heroTitle}>
            Web Tasarım & Dijital Pazarlama<br />
            <span className="text-accent">Rehber Yazıları</span>
          </h1>
          <p className={styles.heroDesc}>
            Web sitesi yaptırma, SEO, e-ticaret ve yerel dijital görünürlük hakkında
            işletmenize faydalı içerikler. Her hafta yeni yazılar.
          </p>
        </div>
      </section>

      {/* FİLTRE */}
      <section className="section-pad">
        <div className="container">
          <div className={styles.filterRow}>
            {ALL_CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className={styles.grid}>
            {filtered.map((post, i) => (
              <FadeUp key={post.slug} delay={(i % 3) + 1}>
                <Link to={`/blog/${post.slug}`} className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.readTime}>{post.readTime} okuma</span>
                  </div>
                  <h2 className={styles.cardTitle}>{post.title}</h2>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.cardMeta}>
                    <div className={styles.tags}>
                      {post.tags.slice(0, 2).map(tag => (
                        <span key={tag} className={styles.tag}>{tag}</span>
                      ))}
                    </div>
                    <span className={styles.date}>{formatDate(post.date)}</span>
                  </div>
                  <div className={styles.readMore}>Devamını Oku →</div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function formatDate(dateStr) {
  const months = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
  const d = new Date(dateStr)
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}
