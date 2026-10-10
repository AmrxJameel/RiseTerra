import { Link } from 'react-router-dom'
import './HomePage.css'

interface HomePageProps {
  lang: 'en' | 'ar'
}

const CONTENT = {
  en: {
    badge: 'Est. Kingdom of Saudi Arabia',
    pre: 'One Brand. Two Divisions.',
    title1: 'Built to',
    title2: 'Last.',
    title3: 'Driven to',
    title4: 'Deliver.',
    tagline: 'RiseTerra unites <strong>structural concrete mastery</strong> and <strong>precision logistics</strong> under one industrial vision — engineered for the projects that define Saudi Arabia\'s future.',
    scroll: 'Discover Our Divisions',
    divisions: {
      eyebrow: 'Our Divisions',
      title: 'Two Pillars. One Name.',
      contracting: {
        label: 'Division 01',
        name: 'RiseTerra Contracting',
        desc: 'Specializing in structural concrete works and skeleton phase construction. We deliver the foundational strength that modern Saudi infrastructure demands.',
        tags: ['Structural Concrete', 'Skeleton Phase', 'Foundation Works', 'Civil Engineering'],
        cta: 'Explore Contracting',
        stat: { num: '120+', label: 'Structures Built' },
      },
      transport: {
        label: 'Division 02',
        name: 'RiseTerra Transport',
        desc: 'A modern fleet of trailers and heavy-haul vehicles with real-time GPS tracking. Reliable logistics from site to site, across the Kingdom.',
        tags: ['Heavy Trailers', 'GPS Tracking', 'Fleet Management', 'Cross-Kingdom Logistics'],
        cta: 'Explore Transport',
        stat: { num: '80+', label: 'Active Vehicles' },
      },
    },
    separator: 'Headquartered in Riyadh · Operating Across Saudi Arabia',
  },
  ar: {
    badge: 'المملكة العربية السعودية',
    pre: 'علامة واحدة. قسمان متخصصان.',
    title1: 'بُني',
    title2: 'ليدوم.',
    title3: 'يسير',
    title4: 'ليُنجز.',
    tagline: 'تجمع <strong>رايز تيرا</strong> بين احترافية الهياكل الخرسانية ودقة الخدمات اللوجستية تحت رؤية صناعية واحدة — مصممة لمشاريع تصنع مستقبل المملكة.',
    scroll: 'اكتشف أقسامنا',
    divisions: {
      eyebrow: 'أقسامنا',
      title: 'ركيزتان. اسم واحد.',
      contracting: {
        label: 'القسم الأول',
        name: 'رايز تيرا للمقاولات',
        desc: 'متخصصون في أعمال الخرسانة الإنشائية ومرحلة الهيكل، نقدم القوة الأساسية التي تتطلبها البنية التحتية السعودية الحديثة.',
        tags: ['خرسانة إنشائية', 'مرحلة الهيكل', 'أعمال الأساسات', 'هندسة مدنية'],
        cta: 'استكشف المقاولات',
        stat: { num: '120+', label: 'منشأة مبنية' },
      },
      transport: {
        label: 'القسم الثاني',
        name: 'رايز تيرا للنقل',
        desc: 'أسطول حديث من المقطورات والشاحنات الثقيلة مع تتبع GPS في الوقت الفعلي. خدمات لوجستية موثوقة من موقع لآخر عبر المملكة.',
        tags: ['مقطورات ثقيلة', 'تتبع GPS', 'إدارة الأسطول', 'لوجستيات المملكة'],
        cta: 'استكشف النقل',
        stat: { num: '80+', label: 'مركبة نشطة' },
      },
    },
    separator: 'مقرها في الرياض · تعمل في أنحاء المملكة العربية السعودية',
  },
}

// --- Icons ---
function IconBuilding() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
    </svg>
  )
}

function IconTruck() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
      <path d="M15 18H9"/>
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
      <circle cx="17" cy="18" r="2"/>
      <circle cx="7"  cy="18" r="2"/>
    </svg>
  )
}

function IconArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

function PatternHex() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <polygon points="100,10 180,55 180,145 100,190 20,145 20,55" stroke="white" strokeWidth="1.5" fill="none"/>
      <polygon points="100,35 158,68 158,132 100,165 42,132 42,68" stroke="white" strokeWidth="1" fill="none"/>
      <polygon points="100,60 136,80 136,120 100,140 64,120 64,80" stroke="white" strokeWidth="0.8" fill="none"/>
      <line x1="100" y1="10"  x2="100" y2="190" stroke="white" strokeWidth="0.5"/>
      <line x1="20"  y1="55"  x2="180" y2="145" stroke="white" strokeWidth="0.5"/>
      <line x1="180" y1="55"  x2="20"  y2="145" stroke="white" strokeWidth="0.5"/>
    </svg>
  )
}

export default function HomePage({ lang }: HomePageProps) {
  const c = CONTENT[lang]

  return (
    <div className="home-page">

      {/* ══════════════════════════════════════
          CINEMATIC HERO — Video Background
          ══════════════════════════════════════ */}
      <section className="home-hero" id="home" aria-label="Hero">

        {/* Video background */}
        <div className="home-hero__video-wrap" aria-hidden="true">
          <video
            className="home-hero__video"
            src="/videos/hero-main.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
          <div className="home-hero__video-overlay" />
        </div>

        {/* Grid texture overlay */}
        <div className="home-hero__bg-grid" aria-hidden="true" />

        {/* Content */}
        <div className="home-hero__content">
          {/* Gold logo */}
          <div className="home-hero__logo">
            <img
              src="/branding/logo-gold.png"
              alt="RiseTerra"
              className="home-hero__logo-img"
            />
          </div>

          {/* Eyebrow badge */}
          <div className="home-hero__badge">
            <span className="home-hero__badge-dot" />
            {c.badge}
          </div>

          {/* Pre-headline */}
          <p className="home-hero__pre">{c.pre}</p>

          {/* Main headline */}
          <h1 className="home-hero__title">
            {c.title1} <em>{c.title2}</em>
            <br />
            {c.title3} <em>{c.title4}</em>
          </h1>

          {/* Tagline */}
          <p
            className="home-hero__tagline"
            dangerouslySetInnerHTML={{ __html: c.tagline }}
          />

          {/* CTA Buttons */}
          <div className="home-hero__cta">
            <Link to="/contracting" className="btn btn-primary">
              {c.divisions.contracting.cta}
              <IconArrowRight />
            </Link>
            <Link to="/transport" className="btn btn-outline">
              {c.divisions.transport.cta}
              <IconArrowRight />
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <a href="#divisions" className="home-hero__scroll" aria-label={c.scroll}>
          <div className="home-hero__scroll-mouse">
            <div className="home-hero__scroll-wheel" />
          </div>
          <span className="home-hero__scroll-label">{c.scroll}</span>
        </a>
      </section>

      {/* ══════════════════════════════════════
          DIVISION CARDS — Gateway to pages
          ══════════════════════════════════════ */}
      <section className="home-divisions" id="divisions" aria-label="Divisions">

        {/* Section header */}
        <div className="home-divisions__header">
          <div className="home-divisions__eyebrow">
            <span className="home-divisions__eyebrow-line" aria-hidden="true" />
            <span className="home-divisions__eyebrow-text">{c.divisions.eyebrow}</span>
          </div>
          <h2 className="home-divisions__title">{c.divisions.title}</h2>
        </div>

        {/* Cards */}
        <div className="home-divisions__grid">

          {/* Contracting Card */}
          <Link to="/contracting" className="home-division-card home-division-card--contracting" aria-label={c.divisions.contracting.name}>
            <div className="home-division-card__bg" aria-hidden="true">
              <div className="home-division-card__bg-gradient" />
              <div className="home-division-card__pattern">
                <PatternHex />
              </div>
            </div>
            <div className="home-division-card__content">
              <div className="home-division-card__top">
                <div className="home-division-card__icon"><IconBuilding /></div>
                <span className="home-division-card__index">{c.divisions.contracting.label}</span>
              </div>
              <div className="home-division-card__body">
                <span className="home-division-card__label">{c.divisions.contracting.label}</span>
                <h3 className="home-division-card__name">{c.divisions.contracting.name}</h3>
                <p className="home-division-card__desc">{c.divisions.contracting.desc}</p>
                <div className="home-division-card__tags">
                  {c.divisions.contracting.tags.map(tag => (
                    <span key={tag} className="home-division-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="home-division-card__footer">
                <span className="home-division-card__cta">
                  {c.divisions.contracting.cta}
                  <span className="home-division-card__cta-arrow"><IconArrowRight /></span>
                </span>
                <div className="home-division-card__stat">
                  <span className="home-division-card__stat-num">{c.divisions.contracting.stat.num}</span>
                  <span className="home-division-card__stat-label">{c.divisions.contracting.stat.label}</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Transport Card */}
          <Link to="/transport" className="home-division-card home-division-card--transport" aria-label={c.divisions.transport.name}>
            <div className="home-division-card__bg" aria-hidden="true">
              <div className="home-division-card__bg-gradient" />
              <div className="home-division-card__pattern">
                <PatternHex />
              </div>
            </div>
            <div className="home-division-card__content">
              <div className="home-division-card__top">
                <div className="home-division-card__icon"><IconTruck /></div>
                <span className="home-division-card__index">{c.divisions.transport.label}</span>
              </div>
              <div className="home-division-card__body">
                <span className="home-division-card__label">{c.divisions.transport.label}</span>
                <h3 className="home-division-card__name">{c.divisions.transport.name}</h3>
                <p className="home-division-card__desc">{c.divisions.transport.desc}</p>
                <div className="home-division-card__tags">
                  {c.divisions.transport.tags.map(tag => (
                    <span key={tag} className="home-division-tag">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="home-division-card__footer">
                <span className="home-division-card__cta">
                  {c.divisions.transport.cta}
                  <span className="home-division-card__cta-arrow"><IconArrowRight /></span>
                </span>
                <div className="home-division-card__stat">
                  <span className="home-division-card__stat-num">{c.divisions.transport.stat.num}</span>
                  <span className="home-division-card__stat-label">{c.divisions.transport.stat.label}</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Separator */}
        <div className="home-divisions__separator">
          <div className="home-divisions__separator-line" />
          <span className="home-divisions__separator-text">{c.separator}</span>
          <div className="home-divisions__separator-line" />
        </div>
      </section>
    </div>
  )
}
