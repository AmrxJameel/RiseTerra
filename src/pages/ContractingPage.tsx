import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import '../components/Contracting/Contracting.css'

interface ContractingPageProps {
  lang: 'en' | 'ar'
}

interface ProjectImage {
  src: string
  alt: string
}

const SHABRA_IMAGES: ProjectImage[] = [
  { src: '/images/contracting/projects/shabra/0eaed285-d71a-4c90-82ef-6b53336e1dca_20260406_204558_0000.jpg', alt: 'Shabra Project Image 1' },
  { src: '/images/contracting/projects/shabra/d311f7de-ea99-4d73-844c-023dd0da7fce_20260406_204211_0000.jpg', alt: 'Shabra Project Image 2' },
  { src: '/images/contracting/projects/shabra/a6c6e552-4739-46dd-9207-684f34ae4e8f_20260405_181548_0000.jpg', alt: 'Shabra Project Image 3' },
  { src: '/images/contracting/projects/shabra/d31191c8-52fc-4593-a686-aed48f43c88c_20260405_180752_0000.jpg', alt: 'Shabra Project Image 4' },
  { src: '/images/contracting/projects/shabra/20260406_192809.jpg', alt: 'Shabra Project Image 5' },
  { src: '/images/contracting/projects/shabra/4_5_2026, 6_01_53 PM - Edited_20260405_180502_0000.jpg', alt: 'Shabra Project Image 6' },
  { src: '/images/contracting/projects/shabra/8c871eab-06f4-4c48-ae31-2adc747fbcd7_20260405_182103_0000.jpg', alt: 'Shabra Project Image 7' },
  { src: '/images/contracting/projects/shabra/16658905-ad67-408f-bd9d-d21f57fcde5c_20260406_204747_0000.jpg', alt: 'Shabra Project Image 8' },
  { src: '/images/contracting/projects/shabra/20260405_182257.jpg', alt: 'Shabra Project Image 9' },
  { src: '/images/contracting/projects/shabra/6319479f-6ed9-4f43-972e-618c86a0633c_20260406_204900_0000.jpg', alt: 'Shabra Project Image 10' },
]

const AARIDH_IMAGES: ProjectImage[] = [
  { src: '/images/contracting/projects/aaridh/331fcce4-bd60-4ec9-8074-fa1e9b579d08_20260405_190641_0000.jpg', alt: 'Aaridh Project Image 1' },
  { src: '/images/contracting/projects/aaridh/57e506dd-f6f5-4c1a-8d40-90f6dcdab60d_20260405_191715_0000.jpg', alt: 'Aaridh Project Image 2' },
  { src: '/images/contracting/projects/aaridh/4b12ddfd-5fe6-47a6-bc0c-ccdc5a4d0a2a_20260405_190517_0000.jpg', alt: 'Aaridh Project Image 3' },
  { src: '/images/contracting/projects/aaridh/fed8c4f8-6bfb-4afc-afa0-bb54196ecac9_20260405_185537_0000.jpg', alt: 'Aaridh Project Image 4' },
  { src: '/images/contracting/projects/aaridh/Screenshot_20260406-185909_Samsung Notes.jpg', alt: 'Aaridh Project Image 5' },
  { src: '/images/contracting/projects/aaridh/f1c8611c-4bb2-460e-870c-3829e04fbde2_20260405_190003_0000.jpg', alt: 'Aaridh Project Image 6' },
  { src: '/images/contracting/projects/aaridh/1179fea7-52b3-4f08-985c-33b6451afc45_20260405_190210_0000.jpg', alt: 'Aaridh Project Image 7' },
]

const CONTENT = {
  en: {
    hero: {
      badge: 'RiseTerra Contracting',
      title: 'Forging\nStrength.',
      subtitle: 'Specializing in structural concrete works and skeleton phase construction — delivering the foundational strength that Saudi infrastructure demands.',
      stats: [
        { num: '8 Years', label: 'Leadership Experience' },
        { num: '2', label: 'Completed Projects' },
        { num: '2026', label: 'Founded' },
        { num: '100%', label: 'On-Time Commitment' },
      ],
    },
    intro: {
      eyebrow: 'Who We Are',
      title: 'Rooted in\nExcellence.',
      body: 'Founded in Saudi Arabia in 2026, RiseTerra is the firm continuation of an 8-year legacy of profound experience and accumulated successes in contracting and management. We specialize in forging strength and durability by executing structural concrete works (skeleton phase) to the highest standards of quality and engineering precision.',
    },
    visionMission: {
      eyebrow: 'Our Direction',
      title: 'Vision &\nMission.',
      vision: {
        title: 'Our Vision',
        body: 'To become the leading company and the premier choice for structural concrete and skeleton works in Saudi Arabia, by delivering exceptionally durable engineering works that create sustainable value and build trust with our clients.',
      },
      mission: {
        title: 'Our Mission',
        body: 'To provide comprehensive structural solutions in concrete casting and foundations that exceed expectations. We are committed to applying the most rigorous engineering standards, delivering unmatched quality and solidity, and building long-term strategic partnerships.',
      },
    },
    services: {
      eyebrow: 'Our Services',
      title: 'What We\nDeliver.',
      items: [
        {
          icon: 'concrete',
          title: 'Structural Concrete Works',
          desc: 'Executing skeleton phase works for residential and commercial buildings across all scales and designs.',
        },
        {
          icon: 'foundation',
          title: 'Foundations',
          desc: 'Deep and shallow foundations to ensure building stability and durability.',
        },
        {
          icon: 'reinforcement',
          title: 'Reinforcement & Concrete Casting',
          desc: 'Formwork, reinforcement, and casting of slabs, columns, and retaining walls with high engineering precision.',
        },
        {
          icon: 'supervision',
          title: 'Supervision & Management',
          desc: 'Comprehensive project management with engineering supervision to ensure quality and deadline adherence.',
        },
      ],
    },
    advantages: {
      eyebrow: 'Why RiseTerra',
      title: 'Built\nDifferent.',
      items: [
        {
          icon: 'clock',
          title: 'On-Time Delivery',
          desc: 'Strict adherence to project timelines',
        },
        {
          icon: 'standard',
          title: 'International Standards',
          desc: 'Full compliance with international specifications and standards',
        },
        {
          icon: 'partnership',
          title: 'Strategic Partnerships',
          desc: 'Building long-term partnerships with clients',
        },
      ],
    },
    projects: {
      eyebrow: 'Our Work',
      title: 'Featured\nProjects.',
      items: [
        {
          number: '01',
          category: 'Contracting',
          title: 'Shabra District Project',
          location: 'Riyadh — Shabra District',
          area: '1,800 sqm',
          scope: 'Skeleton phase & structural concrete works',
          phase: 'Execution Complete ✓',
          images: SHABRA_IMAGES,
        },
        {
          number: '02',
          category: 'Contracting',
          title: 'Al-Aaridh District Project',
          location: 'Riyadh — Al-Aaridh District',
          area: '2,300 sqm',
          scope: 'Skeleton phase & structural concrete works',
          phase: 'Execution Complete ✓',
          images: AARIDH_IMAGES,
        },
      ],
    },
    cta: {
      title: 'Ready to Build?',
      desc: 'Partner with RiseTerra Contracting for your next structural project. Our engineering team is ready to deliver.',
      btn: 'Get In Touch',
      btnSecondary: 'Explore Transport',
    },
  },
  ar: {
    hero: {
      badge: 'رايز تيرا للمقاولات',
      title: 'نصوغ\nالمتانة.',
      subtitle: 'متخصصون في أعمال الخرسانة الإنشائية ومرحلة الهيكل العظمي — نقدم القوة الأساسية التي تتطلبها البنية التحتية السعودية.',
      stats: [
        { num: '8 سنوات', label: 'خبرة القيادة' },
        { num: '2', label: 'مشاريع منجزة' },
        { num: '2026', label: 'تأسيس الشركة' },
        { num: '100%', label: 'التزام بالمواعيد' },
      ],
    },
    intro: {
      eyebrow: 'من نحن',
      title: 'متجذرون\nفي التميز.',
      body: 'تأسست ريسيتيرا في المملكة العربية السعودية عام 2026، لتكون امتداداً راسخاً لإرث يمتد لـ 8 سنوات من الخبرة العميقة والنجاحات المتراكمة في قطاع الإدارة والمقاولات. نحن متخصصون في صياغة القوة والمتانة من خلال تنفيذ الهياكل الخرسانية (أعمال العظم) بأعلى معايير الجودة والدقة الهندسية.',
    },
    visionMission: {
      eyebrow: 'اتجاهنا',
      title: 'الرؤية\nوالرسالة.',
      vision: {
        title: 'رؤيتنا',
        body: 'أن نصبح الشركة الرائدة والخيار الأول في تنفيذ الهياكل الخرسانية وأعمال العظم في المملكة العربية السعودية، من خلال تقديم أعمال هندسية فائقة المتانة تخلق قيمة مستدامة وتبني جسوراً من الثقة مع عملائنا.',
      },
      mission: {
        title: 'رسالتنا',
        body: 'تقديم حلول إنشائية متكاملة في صب وتأسيس الهياكل الخرسانية تتجاوز التوقعات. نلتزم بتطبيق أدق المعايير الهندسية، وتقديم جودة وصلابة لا تُضاهى، وبناء شراكات استراتيجية طويلة الأمد.',
      },
    },
    services: {
      eyebrow: 'خدماتنا',
      title: 'ما\nنقدمه.',
      items: [
        {
          icon: 'concrete',
          title: 'الهياكل الخرسانية',
          desc: 'تنفيذ أعمال العظم للمباني السكنية والتجارية بكافة المقاييس والتصاميم',
        },
        {
          icon: 'foundation',
          title: 'الأساسات',
          desc: 'قواعد عميقة وسطحية لضمان ثبات ومتانة المبنى',
        },
        {
          icon: 'reinforcement',
          title: 'التسليح والصب',
          desc: 'صندقة وتسليح وصب الأسقف والأعمدة والجدران الاستنادية بدقة هندسية عالية',
        },
        {
          icon: 'supervision',
          title: 'الإشراف والإدارة',
          desc: 'إدارة شاملة للمشاريع مع الإشراف الهندسي لضمان الجودة والمواعيد',
        },
      ],
    },
    advantages: {
      eyebrow: 'لماذا ريسيتيرا',
      title: 'بُني\nباختلاف.',
      items: [
        {
          icon: 'clock',
          title: 'الالتزام بالمواعيد',
          desc: 'التزام صارم بالجدول الزمني للمشروع',
        },
        {
          icon: 'standard',
          title: 'المواصفات العالمية',
          desc: 'التزام كامل بالمواصفات والمعايير العالمية',
        },
        {
          icon: 'partnership',
          title: 'الشراكات الاستراتيجية',
          desc: 'بناء شراكات طويلة الأمد مع العملاء',
        },
      ],
    },
    projects: {
      eyebrow: 'أعمالنا',
      title: 'مشاريع\nمتميزة.',
      items: [
        {
          number: '01',
          category: 'مقاولات',
          title: 'مشروع حي شبرا',
          location: 'الرياض — حي شبرا',
          area: '1,800 متر مربع',
          scope: 'أعمال العظم والهياكل الخرسانية',
          phase: 'التنفيذ مكتمل ✓',
          images: SHABRA_IMAGES,
        },
        {
          number: '02',
          category: 'مقاولات',
          title: 'مشروع حي العارض',
          location: 'الرياض — حي العارض',
          area: '2,300 متر مربع',
          scope: 'أعمال العظم والهياكل الخرسانية',
          phase: 'التنفيذ مكتمل ✓',
          images: AARIDH_IMAGES,
        },
      ],
    },
    cta: {
      title: 'جاهز للبناء؟',
      desc: 'تشارك مع رايز تيرا للمقاولات لمشروعك الهيكلي القادم. فريقنا الهندسي جاهز للتنفيذ.',
      btn: 'تواصل معنا',
      btnSecondary: 'استكشف النقل',
    },
  },
}

// --- Icons ---

function IconTarget() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

function IconHandshake() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.5 1.33 10.35 4 13l8 8 8-8c2.67-2.65 2.54-6.5-.58-8.42z" />
      <path d="M16 8.5c0 1.5-1.5 3-4 4.5-2.5-1.5-4-3-4-4.5" />
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function IconStandard() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  )
}

function IconPartnership() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}

function ServiceIcon({ type }: { type: string }) {
  switch (type) {
    case 'foundation':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="18" width="20" height="4" rx="1" />
          <path d="M6 18V10l6-6 6 6v8" />
          <path d="M10 18v-4h4v4" />
        </svg>
      )
    case 'concrete':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="4" y="2" width="16" height="20" rx="1" />
          <path d="M9 22v-4h6v4" />
          <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01" />
        </svg>
      )
    case 'reinforcement':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="3" y1="15" x2="21" y2="15" />
          <line x1="9" y1="3" x2="9" y2="21" />
          <line x1="15" y1="3" x2="15" y2="21" />
        </svg>
      )
    case 'supervision':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    default:
      return null
  }
}

function IconArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

interface GalleryProps {
  images: ProjectImage[]
}

function ImageGallery({ images }: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleThumbnailClick = useCallback((index: number) => {
    setSelectedIndex(index)
  }, [])

  return (
    <div className="contracting-gallery">
      <div className="contracting-gallery__main">
        <img
          src={images[selectedIndex].src}
          alt={images[selectedIndex].alt}
          className="contracting-gallery__main-img"
        />
      </div>
      <div className="contracting-gallery__thumbs">
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            className={`contracting-gallery__thumb ${idx === selectedIndex ? 'contracting-gallery__thumb--active' : ''}`}
            onClick={() => handleThumbnailClick(idx)}
            aria-label={`View image ${idx + 1}`}
          >
            <img src={img.src} alt={img.alt} className="contracting-gallery__thumb-img" />
          </button>
        ))}
      </div>
    </div>
  )
}

export default function ContractingPage({ lang }: ContractingPageProps) {
  const c = CONTENT[lang]

  return (
    <div className="contracting-page">

      {/* ══════ HERO ══════ */}
      <section className="contracting-hero" aria-label="Contracting Hero">
        <div className="contracting-hero__bg" aria-hidden="true">
          <div className="contracting-hero__bg-gradient" />
          <div className="contracting-hero__bg-grid" />
          <div className="contracting-hero__bg-orb" />
        </div>
        <div className="contracting-hero__content">
          <div className="contracting-hero__badge">
            <span className="contracting-hero__badge-dot" />
            {c.hero.badge}
          </div>
          <h1 className="contracting-hero__title">
            {c.hero.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h1>
          <p className="contracting-hero__subtitle">{c.hero.subtitle}</p>
          <div className="contracting-hero__stats">
            {c.hero.stats.map((s, i) => (
              <div key={i} style={{ display: 'contents' }}>
                {i > 0 && <div className="contracting-hero__stats-divider" />}
                <div className="contracting-hero__stat">
                  <span className="contracting-hero__stat-num">{s.num}</span>
                  <span className="contracting-hero__stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ INTRO ══════ */}
      <section className="contracting-intro" aria-label="About Contracting">
        <div className="contracting-intro__container">
          <div className="contracting-intro__text">
            <div className="contracting-eyebrow">
              <span className="contracting-eyebrow__line" />
              <span className="contracting-eyebrow__text">{c.intro.eyebrow}</span>
            </div>
            <h2 className="contracting-section-title">
              {c.intro.title.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </h2>
            <p className="contracting-intro__body">{c.intro.body}</p>
          </div>
          <div className="contracting-intro__visual" aria-hidden="true">
            <div className="contracting-intro__visual-inner">
              <img src="/images/contra.png" alt="RiseTerra Contracting" className="contracting-intro__image" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ VISION & MISSION ══════ */}
      <section className="contracting-vm" aria-label="Vision and Mission">
        <div className="contracting-vm__container">
          <div className="contracting-eyebrow">
            <span className="contracting-eyebrow__line" />
            <span className="contracting-eyebrow__text">{c.visionMission.eyebrow}</span>
          </div>
          <h2 className="contracting-section-title">
            {c.visionMission.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
          <div className="contracting-vm__grid">
            <article className="contracting-vm__card">
              <div className="contracting-vm__card-icon">
                <IconTarget />
              </div>
              <h3 className="contracting-vm__card-title">{c.visionMission.vision.title}</h3>
              <p className="contracting-vm__card-body">{c.visionMission.vision.body}</p>
            </article>
            <article className="contracting-vm__card">
              <div className="contracting-vm__card-icon">
                <IconHandshake />
              </div>
              <h3 className="contracting-vm__card-title">{c.visionMission.mission.title}</h3>
              <p className="contracting-vm__card-body">{c.visionMission.mission.body}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════ SERVICES ══════ */}
      <section className="contracting-services" aria-label="Services">
        <div className="contracting-services__container">
          <div className="contracting-eyebrow">
            <span className="contracting-eyebrow__line" />
            <span className="contracting-eyebrow__text">{c.services.eyebrow}</span>
          </div>
          <h2 className="contracting-section-title">
            {c.services.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
          <div className="contracting-services__grid">
            {c.services.items.map((item, idx) => (
              <article key={idx} className="contracting-service-card" style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="contracting-service-card__icon">
                  <ServiceIcon type={item.icon} />
                </div>
                <h3 className="contracting-service-card__title">{item.title}</h3>
                <p className="contracting-service-card__desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ADVANTAGES ══════ */}
      <section className="contracting-advantages" aria-label="Why RiseTerra">
        <div className="contracting-advantages__container">
          <div className="contracting-eyebrow">
            <span className="contracting-eyebrow__line" />
            <span className="contracting-eyebrow__text">{c.advantages.eyebrow}</span>
          </div>
          <h2 className="contracting-section-title">
            {c.advantages.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
          <div className="contracting-advantages__grid">
            {c.advantages.items.map((item, idx) => (
              <div key={idx} className="contracting-advantage-card">
                <div className="contracting-advantage-card__icon-wrap">
                  {item.icon === 'clock' && <IconClock />}
                  {item.icon === 'standard' && <IconStandard />}
                  {item.icon === 'partnership' && <IconPartnership />}
                </div>
                <h3 className="contracting-advantage-card__title">{item.title}</h3>
                <p className="contracting-advantage-card__desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ PROJECTS ══════ */}
      <section className="contracting-projects" aria-label="Projects">
        <div className="contracting-projects__container">
          <div className="contracting-eyebrow">
            <span className="contracting-eyebrow__line" />
            <span className="contracting-eyebrow__text">{c.projects.eyebrow}</span>
          </div>
          <h2 className="contracting-section-title">
            {c.projects.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
          <div className="contracting-projects__grid">
            {c.projects.items.map((item, idx) => (
              <article key={idx} className="contracting-project-card">
                <div className="contracting-project-card__badges">
                  <span className="contracting-project-card__number">{item.number}</span>
                  <span className="contracting-project-card__category">{item.category}</span>
                </div>
                <ImageGallery images={item.images} />
                <div className="contracting-project-card__info">
                  <h3 className="contracting-project-card__title">{item.title}</h3>
                  <div className="contracting-project-card__details">
                    <div className="contracting-project-card__detail">
                      <span className="contracting-project-card__detail-icon">📍</span>
                      <span className="contracting-project-card__detail-value">{item.location}</span>
                    </div>
                    <div className="contracting-project-card__detail">
                      <span className="contracting-project-card__detail-icon">📐</span>
                      <span className="contracting-project-card__detail-value">{item.area}</span>
                    </div>
                    <div className="contracting-project-card__detail">
                      <span className="contracting-project-card__detail-icon">🔧</span>
                      <span className="contracting-project-card__detail-value">{item.scope}</span>
                    </div>
                    <div className="contracting-project-card__detail">
                      <span className="contracting-project-card__detail-icon">✅</span>
                      <span className="contracting-project-card__detail-value contracting-project-card__detail-value--complete">{item.phase}</span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ CTA ══════ */}
      <section className="contracting-cta" aria-label="Call to Action">
        <div className="contracting-cta__container">
          <div className="contracting-cta__content">
            <h2 className="contracting-cta__title">{c.cta.title}</h2>
            <p className="contracting-cta__desc">{c.cta.desc}</p>
            <div className="contracting-cta__buttons">
              <Link to="/" className="btn btn-primary">
                {c.cta.btn}
                <IconArrowRight />
              </Link>
              <Link to="/transport" className="btn btn-outline">
                {c.cta.btnSecondary}
                <IconArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}
