import './DivisionSplit.css'

interface DivisionSplitProps {
  lang?: 'en' | 'ar'
}

const CONTENT = {
  en: {
    eyebrow: 'Our Divisions',
    title:   'Two Pillars.\nOne Name.',
    subtitle: 'RiseTerra operates two specialized divisions — each a leader in its domain, together forming Saudi Arabia\'s most complete industrial partner.',
    contracting: {
      label:  'Division 01',
      name:   'Contracting',
      fullName: 'RiseTerra Contracting',
      desc:   'Specializing in structural concrete works and skeleton phase construction. We deliver the foundational strength that modern Saudi infrastructure demands.',
      tags:   ['Structural Concrete', 'Skeleton Phase', 'Foundation Works', 'Civil Engineering'],
      cta:    'Explore Contracting',
      stat:   { num: '120+', label: 'Structures Built' },
    },
    transport: {
      label:  'Division 02',
      name:   'Transport',
      fullName: 'RiseTerra Transport',
      desc:   'A modern fleet of trailers and heavy-haul vehicles with real-time GPS tracking. Reliable logistics from site to site, across the Kingdom.',
      tags:   ['Heavy Trailers', 'GPS Tracking', 'Fleet Management', 'Cross-Kingdom Logistics'],
      cta:    'Explore Transport',
      stat:   { num: '80+', label: 'Active Vehicles' },
    },
    separator: 'Headquartered in Riyadh · Operating Across Saudi Arabia',
  },
  ar: {
    eyebrow: 'أقسامنا',
    title:   'ركيزتان.\nاسم واحد.',
    subtitle: 'تدير رايز تيرا قسمين متخصصين — كل منهما رائد في مجاله، وسوياً يشكّلان الشريك الصناعي الأكثر اكتمالاً في المملكة.',
    contracting: {
      label:  'القسم الأول',
      name:   'المقاولات',
      fullName: 'رايز تيرا للمقاولات',
      desc:   'متخصصون في أعمال الخرسانة الإنشائية ومرحلة الهيكل، نقدم القوة الأساسية التي تتطلبها البنية التحتية السعودية الحديثة.',
      tags:   ['خرسانة إنشائية', 'مرحلة الهيكل', 'أعمال الأساسات', 'هندسة مدنية'],
      cta:    'استكشف المقاولات',
      stat:   { num: '120+', label: 'منشأة مبنية' },
    },
    transport: {
      label:  'القسم الثاني',
      name:   'النقل',
      fullName: 'رايز تيرا للنقل',
      desc:   'أسطول حديث من المقطورات والشاحنات الثقيلة مع تتبع GPS في الوقت الفعلي. خدمات لوجستية موثوقة من موقع لآخر عبر المملكة.',
      tags:   ['مقطورات ثقيلة', 'تتبع GPS', 'إدارة الأسطول', 'لوجستيات المملكة'],
      cta:    'استكشف النقل',
      stat:   { num: '80+', label: 'مركبة نشطة' },
    },
    separator: 'مقرها في الرياض · تعمل في أنحاء المملكة العربية السعودية',
  },
}

// --- Icons ---
function IconBuilding() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="1"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
    </svg>
  )
}

function IconTruck() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  )
}

// Geometric SVG for card pattern overlay
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

export default function DivisionSplit({ lang = 'en' }: DivisionSplitProps) {
  const c = CONTENT[lang]

  return (
    <section className="divisions" id="divisions" aria-label="Our Divisions">

      {/* ── Section header ── */}
      <div className="divisions__header">
        <div className="divisions__eyebrow">
          <span className="divisions__eyebrow-line" aria-hidden="true" />
          <span className="divisions__eyebrow-text">{c.eyebrow}</span>
        </div>
        <h2 className="divisions__title">
          {c.title.split('\n').map((line, i) => (
            <span key={i} style={{ display: 'block' }}>{line}</span>
          ))}
        </h2>
        <p className="divisions__subtitle">{c.subtitle}</p>
      </div>

      {/* ── Cards grid ── */}
      <div className="divisions__grid" id="contracting">

        {/* ── Contracting Card ── */}
        <article
          className="division-card division-card--contracting"
          aria-label={c.contracting.fullName}
          id="contracting-card"
        >
          <div className="division-card__bg" aria-hidden="true">
            <div className="division-card__bg-gradient" />
            <div className="division-card__pattern">
              <PatternHex />
            </div>
          </div>

          <div className="division-card__content">
            <div className="division-card__top">
              <div className="division-card__icon" aria-hidden="true">
                <IconBuilding />
              </div>
              <span className="division-card__index">{c.contracting.label}</span>
            </div>

            <div className="division-card__body">
              <span className="division-card__label">{c.contracting.label}</span>
              <h3 className="division-card__name">{c.contracting.name}</h3>
              <p className="division-card__desc">{c.contracting.desc}</p>
              <div className="division-card__tags">
                {c.contracting.tags.map(tag => (
                  <span key={tag} className="division-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="division-card__footer">
              <a href="#contracting-detail" className="division-card__cta">
                {c.contracting.cta}
                <span className="division-card__cta-arrow">
                  <IconArrowRight />
                </span>
              </a>
              <div className="division-card__stat">
                <span className="division-card__stat-num">{c.contracting.stat.num}</span>
                <span className="division-card__stat-label">{c.contracting.stat.label}</span>
              </div>
            </div>
          </div>
        </article>

        {/* ── Transport Card ── */}
        <article
          className="division-card division-card--transport"
          aria-label={c.transport.fullName}
          id="transport-card"
        >
          <div className="division-card__bg" aria-hidden="true">
            <div className="division-card__bg-gradient" />
            <div className="division-card__pattern">
              <PatternHex />
            </div>
          </div>

          <div className="division-card__content">
            <div className="division-card__top">
              <div className="division-card__icon" aria-hidden="true">
                <IconTruck />
              </div>
              <span className="division-card__index">{c.transport.label}</span>
            </div>

            <div className="division-card__body">
              <span className="division-card__label">{c.transport.label}</span>
              <h3 className="division-card__name">{c.transport.name}</h3>
              <p className="division-card__desc">{c.transport.desc}</p>
              <div className="division-card__tags">
                {c.transport.tags.map(tag => (
                  <span key={tag} className="division-tag">{tag}</span>
                ))}
              </div>
            </div>

            <div className="division-card__footer">
              <a href="#transport-detail" className="division-card__cta">
                {c.transport.cta}
                <span className="division-card__cta-arrow">
                  <IconArrowRight />
                </span>
              </a>
              <div className="division-card__stat">
                <span className="division-card__stat-num">{c.transport.stat.num}</span>
                <span className="division-card__stat-label">{c.transport.stat.label}</span>
              </div>
            </div>
          </div>
        </article>

      </div>

      {/* ── Bottom separator ── */}
      <div className="divisions__separator">
        <div className="divisions__separator-line" />
        <span className="divisions__separator-text">{c.separator}</span>
        <div className="divisions__separator-line" />
      </div>

    </section>
  )
}
