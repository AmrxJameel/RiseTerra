import './HeroSection.css'

interface HeroSectionProps {
  lang?: 'en' | 'ar'
}

const CONTENT = {
  en: {
    badge:    'Est. Kingdom of Saudi Arabia',
    location: 'Riyadh, Saudi Arabia',
    pre:      'One Brand. Two Divisions.',
    title1:   'Built to',
    title2:   'Last.',
    title3:   'Driven to',
    title4:   'Deliver.',
    tagline:  'RiseTerra unites <strong>structural concrete mastery</strong> and <strong>precision logistics</strong> under one industrial vision — engineered for the projects that define Saudi Arabia\'s future.',
    stats: [
      { num: '15', sup: '+', label: 'Years of Excellence' },
      { num: '200', sup: '+', label: 'Projects Completed' },
      { num: '2',  sup: '',  label: 'Specialized Divisions' },
    ],
    cta1:   'Explore Contracting',
    cta2:   'Explore Transport',
    scroll: 'Scroll to explore',
    pillContracting: { name: 'RiseTerra Contracting', sub: 'Structural · Concrete · Skeleton Phase' },
    pillTransport:   { name: 'RiseTerra Transport',   sub: 'Logistics · Trailers · GPS Fleet' },
  },
  ar: {
    badge:    'المملكة العربية السعودية',
    location: 'الرياض، المملكة العربية السعودية',
    pre:      'علامة واحدة. قسمان متخصصان.',
    title1:   'بُني',
    title2:   'ليدوم.',
    title3:   'يسير',
    title4:   'ليُنجز.',
    tagline:  'تجمع <strong>رايز تيرا</strong> بين احترافية الهياكل الخرسانية ودقة الخدمات اللوجستية تحت رؤية صناعية واحدة — مصممة لمشاريع تصنع مستقبل المملكة.',
    stats: [
      { num: '15', sup: '+', label: 'سنة من التميز' },
      { num: '200', sup: '+', label: 'مشروع منجز' },
      { num: '2',  sup: '',  label: 'قسم متخصص' },
    ],
    cta1:   'استكشف المقاولات',
    cta2:   'استكشف النقل',
    scroll: 'مرر للاستكشاف',
    pillContracting: { name: 'رايز تيرا للمقاولات', sub: 'هياكل · خرسانة · مرحلة الهيكل' },
    pillTransport:   { name: 'رايز تيرا للنقل',     sub: 'لوجستيات · مقطورات · تتبع GPS' },
  },
}

// SVG icons as inline components for zero-dep
function IconBuilding({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
    </svg>
  )
}

function IconTruck({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
      <path d="M15 18H9"/>
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
      <circle cx="17" cy="18" r="2"/>
      <circle cx="7"  cy="18" r="2"/>
    </svg>
  )
}

function IconMapPin({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconArrowRight({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

export default function HeroSection({ lang = 'en' }: HeroSectionProps) {
  const c = CONTENT[lang]

  return (
    <section className="hero" id="home" aria-label="Hero">

      {/* ── Background layers ── */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-gradient" />
        <div className="hero__bg-grid" />
        <div className="hero__bg-orb" />
        <div className="hero__bg-orb-2" />
        <div className="hero__bg-vignette" />
      </div>

      {/* ── Main content ── */}
      <div className="hero__content">

        {/* Eyebrow */}
        <div className="hero__eyebrow">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            {c.badge}
          </div>
          <span className="hero__location">
            <IconMapPin />
            {c.location}
          </span>
        </div>

        {/* Headline */}
        <div className="hero__headline">
          <p className="hero__headline-pre">{c.pre}</p>
          <h1 className="hero__title">
            {c.title1} <em>{c.title2}</em>
            <br />
            {c.title3} <em>{c.title4}</em>
          </h1>
        </div>

        {/* Tagline */}
        <p
          className="hero__tagline"
          dangerouslySetInnerHTML={{ __html: c.tagline }}
        />

        {/* Stats */}
        <div className="hero__stats">
          {c.stats.map((s, i) => (
            <div key={i} style={{ display: 'contents' }}>
              {i > 0 && <div className="hero__stats-divider" aria-hidden="true" />}
              <div className="hero__stat">
                <span className="hero__stat-number">
                  {s.num}<span>{s.sup}</span>
                </span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="hero__cta">
          <a href="#contracting" className="btn btn-primary">
            {c.cta1}
            <IconArrowRight />
          </a>
          <a href="#transport" className="btn btn-outline">
            {c.cta2}
            <IconArrowRight />
          </a>
        </div>
      </div>

      {/* ── Floating division pills (desktop) ── */}
      <div className="hero__division-pills" aria-hidden="true">
        <div className="division-pill division-pill--contracting">
          <div className="division-pill__icon">
            <IconBuilding size={20} />
          </div>
          <div className="division-pill__info">
            <span className="division-pill__name">{c.pillContracting.name}</span>
            <span className="division-pill__sub">{c.pillContracting.sub}</span>
          </div>
        </div>
        <div className="division-pill division-pill--transport">
          <div className="division-pill__icon">
            <IconTruck size={20} />
          </div>
          <div className="division-pill__info">
            <span className="division-pill__name">{c.pillTransport.name}</span>
            <span className="division-pill__sub">{c.pillTransport.sub}</span>
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <a href="#divisions" className="hero__scroll" aria-label={c.scroll}>
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel" />
        </div>
        <span className="hero__scroll-label">{c.scroll}</span>
      </a>

    </section>
  )
}
