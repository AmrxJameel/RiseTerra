import { Link } from 'react-router-dom'
import '../components/Transport/Transport.css'

interface TransportPageProps {
  lang: 'en' | 'ar'
}

const CONTENT = {
  en: {
    hero: {
      badge: 'RiseTerra Transport',
      title: 'Driven to\nDeliver.',
      subtitle: 'A modern fleet of heavy-haul trailers and GPS-monitored logistics, delivering reliable transport solutions across Saudi Arabia.',
      stats: [
        { num: '8', label: 'Years Leadership Experience' },
        { num: '4', label: 'Specialized Transport Solutions' },
        { num: '2026', label: 'Operations Launch' },
        { num: '24/7', label: 'Fleet Readiness' },
      ],
    },
    intro: {
      eyebrow: 'Leadership Message & Our Legacy',
      title: 'Built on\nExperience.',
      body: 'The transport activity at RiseTerra is built on two solid foundations: accumulated experience and solid governance over 8 years. The executive management team has successfully handled a series of complex logistics operations at the regional level. Today, RiseTerra Transport is launched as a strong logistics arm that combines this rich heritage with the ambition to expand in the Kingdom of Saudi Arabia, serving all sectors.',
    },
    visionMission: {
      eyebrow: 'Our Direction',
      title: 'Vision &\nMission.',
      vision: {
        title: 'Our Vision',
        body: 'To become the leading and preferred logistics partner in providing innovative and secure transportation solutions across the Kingdom, through smart connectivity and seamless integration among all stakeholders in the supply chain.',
      },
      mission: {
        title: 'Our Mission',
        body: 'To deliver integrated and professional transportation solutions that exceed expectations, adhering to the highest standards of safety and security, and providing uncompromising quality and reliability, while building long-term strategic partnerships.',
      },
    },
    solutions: {
      eyebrow: 'Our Solutions',
      title: 'Transport\nSolutions.',
      items: [
        {
          icon: 'truck',
          title: 'General Goods & Commercial Cargo Transport',
          desc: 'Reliable transport solutions for general goods and commercial cargo with high efficiency and complete safety across the Kingdom.',
        },
        {
          icon: 'crane',
          title: 'Construction & Infrastructure Materials Transport',
          desc: 'Specialized transport for construction and infrastructure materials supporting development and construction projects across various regions of the Kingdom.',
        },
        {
          icon: 'heavy',
          title: 'Heavy Equipment & Project Cargo Transport',
          desc: 'Specialized expertise in transporting heavy equipment and oversized project cargo to the highest standards of safety and efficiency.',
        },
        {
          icon: 'vip',
          title: 'Custom Transport Solutions for Key Accounts',
          desc: 'Logistics solutions specifically designed to meet the requirements of key accounts with high flexibility and exceptional service.',
        },
      ],
    },
    fleet: {
      eyebrow: 'Our Fleet',
      title: 'Fleet\nCapability.',
      titleAr: 'أسطول التريالت Heavy-Duty',
      titleEn: 'Heavy-Duty Trailer Fleet',
      placeholder: 'Fleet Photos Coming Soon',
      placeholderAr: 'صور الأسطول قريباً',
      descAr: 'يشكل أسطولنا من التريالت Heavy-Duty العمود الفقري لعملياتنا، وهو جاهز لنقل أثقل الحمولات بكفاءة وأمان. أسطولنا المتطور مجهز بأحدث التقنيات وأفضل معايير الصيانة لضمان أعلى مستويات الأداء والموثوقية.',
      descEn: 'Our Heavy-Duty trailer fleet forms the backbone of our operations, ready to transport the heaviest loads with efficiency and safety. Our advanced fleet is equipped with the latest technologies and best maintenance standards to ensure the highest levels of performance and reliability.',
      badges: [
        { ar: 'أحدث التقنيات', en: 'Latest Technology' },
        { ar: 'صيانة دورية', en: 'Regular Maintenance' },
        { ar: 'سلامة مضمونة', en: 'Guaranteed Safety' },
      ],
    },
    tracking: {
      eyebrow: 'Dynamic Fleet Management',
      title: 'Advanced\nTracking.',
      body: 'We use the latest fleet tracking systems (GPS) to manage trailer movements with high precision. This allows us to monitor location, speed, and shipment status in real time, ensuring complete transparency and accurate delivery.',
      features: [
        {
          icon: 'location',
          labelEn: 'Real-Time Location Tracking',
          labelAr: 'تتبع الموقع الفوري',
        },
        {
          icon: 'speed',
          labelEn: 'Speed Monitoring',
          labelAr: 'مراقبة السرعة',
        },
        {
          icon: 'package',
          labelEn: 'Live Shipment Status',
          labelAr: 'حالة الشحنة لحظياً',
        },
        {
          icon: 'shield',
          labelEn: 'Complete Transparency',
          labelAr: 'شفافية مطلقة',
        },
      ],
    },
    why: {
      eyebrow: 'Why RiseTerra Transport',
      title: 'Trusted\nLogistics.',
      items: [
        { icon: 'grid', labelEn: 'Diversified Solutions', labelAr: 'حلول متنوعة' },
        { icon: 'truck', labelEn: 'Tractor-Trailer Experts', labelAr: 'خبراء التريالت' },
        { icon: 'satellite', labelEn: 'Advanced Tracking', labelAr: 'تتبع متطور' },
        { icon: 'map', labelEn: 'Regional Legacy', labelAr: 'إرث إقليمي' },
        { icon: 'badge', labelEn: 'Saudi Compliance', labelAr: 'امتثال سعودي' },
      ],
    },
    cta: {
      title: 'Need Logistics?',
      desc: 'Partner with RiseTerra Transport for reliable, GPS-monitored logistics across the Kingdom. Our fleet is ready to deliver.',
      btn: 'Get In Touch',
      btnSecondary: 'Explore Contracting',
    },
  },
  ar: {
    hero: {
      badge: 'رايز تيرا للنقل',
      title: 'يسير\nليُنجز.',
      subtitle: 'أسطول حديث من المقطورات الثقيلة وخدمات لوجستية مراقبة بنظام GPS، نقدم حلول نقل موثوقة عبر المملكة العربية السعودية.',
      stats: [
        { num: '8', label: 'سنوات خبرة القيادة' },
        { num: '4', label: 'حلول نقل متخصصة' },
        { num: '2026', label: 'انطلاق العمليات' },
        { num: '24/7', label: 'جاهزية الأسطول' },
      ],
    },
    intro: {
      eyebrow: 'كلمة القيادة وإرثنا',
      title: 'بني على\nالخبرة.',
      body: 'يرتكز نشاط النقل في ريسيتيرا على أساس متين من الخبرة المتراكمة والقيادة المحنكة. على مدار 8 سنوات، قاد فريق الإدارة التنفيذية لدينا سلسلة من العمليات اللوجستية المعقدة بنجاح باهر على المستوى الإقليمي. واليوم، نطلق ريسيتيرا للنقل كذراع لوجستي متين يدمج بين هذا الإرث العريق وطموح الانطلاقة في المملكة العربية السعودية لخدمة كافة القطاعات.',
    },
    visionMission: {
      eyebrow: 'اتجاهنا',
      title: 'الرؤية\nوالرسالة.',
      vision: {
        title: 'رؤيتنا',
        body: 'أن نصبح الشريك اللوجستي الأول والخيار الأوحد في تقديم حلول النقل المبتكرة والآمنة في المملكة، من خلال الربط الذكي والكفؤ بين كافة أطراف سلاسل الإمداد.',
      },
      mission: {
        title: 'مهمتنا',
        body: 'تقديم حلول نقل متكاملة واحترافية تتجاوز التوقعات. نلتزم بتطبيق أدق معايير السلامة والأمان، وتقديم جودة وصلابة لا تُضاهى، وبناء شراكات استراتيجية طويلة الأمد.',
      },
    },
    solutions: {
      eyebrow: 'حلولنا',
      title: 'حلول\nالنقل.',
      items: [
        {
          icon: 'truck',
          title: 'نقل البضائع العامة والسلع التجارية',
          desc: 'حلول نقل موثوقة للبضائع العامة والسلع التجارية بكفاءة عالية وأمان تام على امتداد المملكة',
        },
        {
          icon: 'crane',
          title: 'نقل مواد البناء والبنية التحتية',
          desc: 'نقل متخصص لمواد البناء والبنية التحتية بما يخدم مشاريع التطوير والإنشاء في مختلف مناطق المملكة',
        },
        {
          icon: 'heavy',
          title: 'نقل المعدات الثقيلة والمشاريع النوعية',
          desc: 'خبرة متخصصة في نقل المعدات الثقيلة والحمولات النوعية الضخمة بأعلى معايير السلامة والكفاءة',
        },
        {
          icon: 'vip',
          title: 'حلول النقل المخصصة لكبار العملاء',
          desc: 'حلول لوجستية مصممة خصيصاً لتلبية متطلبات كبار العملاء بمرونة عالية وخدمة استثنائية',
        },
      ],
    },
    fleet: {
      eyebrow: 'أسطولنا',
      title: 'قدرات\nالأسطول.',
      titleAr: 'أسطول التريالت Heavy-Duty',
      titleEn: 'Heavy-Duty Trailer Fleet',
      placeholder: 'صور الأسطول قريباً',
      placeholderAr: 'صور الأسطول قريباً',
      descAr: 'يشكل أسطولنا من التريالت Heavy-Duty العمود الفقري لعملياتنا، وهو جاهز لنقل أثقل الحمولات بكفاءة وأمان. أسطولنا المتطور مجهز بأحدث التقنيات وأفضل معايير الصيانة لضمان أعلى مستويات الأداء والموثوقية.',
      descEn: 'Our Heavy-Duty trailer fleet forms the backbone of our operations, ready to transport the heaviest loads with efficiency and safety. Our advanced fleet is equipped with the latest technologies and best maintenance standards to ensure the highest levels of performance and reliability.',
      badges: [
        { ar: 'أحدث التقنيات', en: 'Latest Technology' },
        { ar: 'صيانة دورية', en: 'Regular Maintenance' },
        { ar: 'سلامة مضمونة', en: 'Guaranteed Safety' },
      ],
    },
    tracking: {
      eyebrow: 'إدارة الأسطول الديناميكية',
      title: 'تتبع\nمتطور.',
      body: 'نستخدم أحدث أنظمة تتبع الأسطول (GPS) لإدارة حركة تريالتنا بدقة متناهية. هذا يسمح لنا بمراقبة الموقع والسرعة وحالة الشحنة في الوقت الحقيقي، مما يضمن لك الشفافية المطلقة ودقة الوصول.',
      features: [
        {
          icon: 'location',
          labelEn: 'Real-Time Location Tracking',
          labelAr: 'تتبع الموقع الفوري',
        },
        {
          icon: 'speed',
          labelEn: 'Speed Monitoring',
          labelAr: 'مراقبة السرعة',
        },
        {
          icon: 'package',
          labelEn: 'Live Shipment Status',
          labelAr: 'حالة الشحنة لحظياً',
        },
        {
          icon: 'shield',
          labelEn: 'Complete Transparency',
          labelAr: 'شفافية مطلقة',
        },
      ],
    },
    why: {
      eyebrow: 'لماذا ريسيتيرا للنقل',
      title: 'لوجستيات\nموثوقة.',
      items: [
        { icon: 'grid', labelEn: 'Diversified Solutions', labelAr: 'حلول متنوعة' },
        { icon: 'truck', labelEn: 'Tractor-Trailer Experts', labelAr: 'خبراء التريالت' },
        { icon: 'satellite', labelEn: 'Advanced Tracking', labelAr: 'تتبع متطور' },
        { icon: 'map', labelEn: 'Regional Legacy', labelAr: 'إرث إقليمي' },
        { icon: 'badge', labelEn: 'Saudi Compliance', labelAr: 'امتثال سعودي' },
      ],
    },
    cta: {
      title: 'تحتاج لوجستيات؟',
      desc: 'تشارك مع رايز تيرا للنقل لخدمات لوجستية موثوقة ومراقبة بـ GPS عبر المملكة. أسطولنا جاهز للتنفيذ.',
      btn: 'تواصل معنا',
      btnSecondary: 'استكشف المقاولات',
    },
  },
}

// --- Icon Components ---

function IconArrowRight() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  )
}

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

function SolutionIcon({ type }: { type: string }) {
  switch (type) {
    case 'truck':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      )
    case 'crane':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22h16" />
          <path d="M4 22V8l8-6 8 6v14" />
          <path d="M9 22v-6h6v6" />
          <circle cx="12" cy="11" r="2" />
        </svg>
      )
    case 'heavy':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="14" width="22" height="4" rx="1" />
          <path d="M5 14V8a2 2 0 0 1 2-2h4l3 4h6" />
          <circle cx="6" cy="18" r="2" />
          <circle cx="18" cy="18" r="2" />
        </svg>
      )
    case 'vip':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      )
    default:
      return null
  }
}

function IconFleetTruck() {
  return (
    <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
      <path d="M15 18H9" />
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
      <circle cx="17" cy="18" r="2" />
      <circle cx="7" cy="18" r="2" />
    </svg>
  )
}

function IconLocationPin() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function TrackingFeatureIcon({ type }: { type: string }) {
  switch (type) {
    case 'location':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case 'speed':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      )
    case 'package':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16.5 9.4 7.55 4.24" />
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
          <polyline points="3.29 7 12 12 20.71 7" />
          <line x1="12" y1="22" x2="12" y2="12" />
        </svg>
      )
    case 'shield':
      return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 12 11 14 15 10" />
        </svg>
      )
    default:
      return null
  }
}

function WhyIcon({ type }: { type: string }) {
  switch (type) {
    case 'grid':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" />
          <rect x="14" y="3" width="7" height="7" />
          <rect x="3" y="14" width="7" height="7" />
          <rect x="14" y="14" width="7" height="7" />
        </svg>
      )
    case 'truck':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
          <path d="M15 18H9" />
          <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
          <circle cx="17" cy="18" r="2" />
          <circle cx="7" cy="18" r="2" />
        </svg>
      )
    case 'satellite':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 20h.01" />
          <path d="M7 20v-4" />
          <path d="M12 20v-8" />
          <path d="M17 20V8" />
          <path d="M22 4v16" />
        </svg>
      )
    case 'map':
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      )
    case 'badge':
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

export default function TransportPage({ lang }: TransportPageProps) {
  const c = CONTENT[lang]

  return (
    <div className="transport-page">

      {/* ══════ 1. HERO ══════ */}
      <section className="transport-hero" aria-label="Transport Hero">
        <div className="transport-hero__bg" aria-hidden="true">
          <div className="transport-hero__bg-gradient" />
          <div className="transport-hero__bg-grid" />
          <div className="transport-hero__bg-orb" />
        </div>
        <div className="transport-hero__content">
          <div className="transport-hero__badge">
            <span className="transport-hero__badge-dot" />
            {c.hero.badge}
          </div>
          <h1 className="transport-hero__title">
            {c.hero.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h1>
          <p className="transport-hero__subtitle">{c.hero.subtitle}</p>
          <div className="transport-hero__stats">
            {c.hero.stats.map((s, i) => (
              <div key={i} style={{ display: 'contents' }}>
                {i > 0 && <div className="transport-hero__stats-divider" />}
                <div className="transport-hero__stat">
                  <span className="transport-hero__stat-num">{s.num}</span>
                  <span className="transport-hero__stat-label">{s.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 2. LEADERSHIP MESSAGE & LEGACY ══════ */}
      <section className="transport-intro" aria-label="Leadership Message">
        <div className="transport-intro__container">
          <div className="transport-intro__text">
            <div className="transport-eyebrow">
              <span className="transport-eyebrow__line" />
              <span className="transport-eyebrow__text">{c.intro.eyebrow}</span>
            </div>
            <h2 className="transport-section-title">
              {c.intro.title.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </h2>
            <p className="transport-intro__body">{c.intro.body}</p>
          </div>
          <div className="transport-intro__visual" aria-hidden="true">
            <div className="transport-intro__visual-inner">
              <img src="/images/trans.png" alt="RiseTerra Transport" className="transport-intro__image" />
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 3. VISION & MISSION ══════ */}
      <section className="transport-vm" aria-label="Vision and Mission">
        <div className="transport-vm__container">
          <div className="transport-eyebrow">
            <span className="transport-eyebrow__line" />
            <span className="transport-eyebrow__text">{c.visionMission.eyebrow}</span>
          </div>
          <h2 className="transport-section-title">
            {c.visionMission.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
          <div className="transport-vm__grid">
            <article className="transport-vm__card">
              <div className="transport-vm__card-icon">
                <IconTarget />
              </div>
              <h3 className="transport-vm__card-title">{c.visionMission.vision.title}</h3>
              <p className="transport-vm__card-body">{c.visionMission.vision.body}</p>
            </article>
            <article className="transport-vm__card">
              <div className="transport-vm__card-icon">
                <IconHandshake />
              </div>
              <h3 className="transport-vm__card-title">{c.visionMission.mission.title}</h3>
              <p className="transport-vm__card-body">{c.visionMission.mission.body}</p>
            </article>
          </div>
        </div>
      </section>

      {/* ══════ 4. TRANSPORT SOLUTIONS ══════ */}
      <section className="transport-solutions" aria-label="Transport Solutions">
        <div className="transport-solutions__container">
          <div className="transport-eyebrow">
            <span className="transport-eyebrow__line" />
            <span className="transport-eyebrow__text">{c.solutions.eyebrow}</span>
          </div>
          <h2 className="transport-section-title">
            {c.solutions.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
          <div className="transport-solutions__grid">
            {c.solutions.items.map((item, idx) => (
              <article key={idx} className="transport-solution-card" style={{ animationDelay: `${idx * 80}ms` }}>
                <div className="transport-solution-card__icon">
                  <SolutionIcon type={item.icon} />
                </div>
                <h3 className="transport-solution-card__title">{item.title}</h3>
                <p className="transport-solution-card__desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ 5. FLEET SECTION ══════ */}
      <section className="transport-fleet" aria-label="Fleet">
        <div className="transport-fleet__container">
          <div className="transport-eyebrow">
            <span className="transport-eyebrow__line" />
            <span className="transport-eyebrow__text">{c.fleet.eyebrow}</span>
          </div>
          <h2 className="transport-section-title">
            {c.fleet.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
          <div className="transport-fleet__card">
            <div className="transport-fleet__image-placeholder">
              <div className="transport-fleet__placeholder-icon">
                <IconFleetTruck />
              </div>
              <p className="transport-fleet__placeholder-text">
                {lang === 'ar' ? c.fleet.placeholderAr : c.fleet.placeholder}
              </p>
            </div>
            <div className="transport-fleet__info">
              <h3 className="transport-fleet__title">
                {lang === 'ar' ? c.fleet.titleAr : c.fleet.titleEn}
              </h3>
              <p className="transport-fleet__desc">
                {lang === 'ar' ? c.fleet.descAr : c.fleet.descEn}
              </p>
              <div className="transport-fleet__badges">
                {c.fleet.badges.map((badge, idx) => (
                  <span key={idx} className="transport-fleet__badge">
                    <span className="transport-fleet__badge-dot">✦</span>
                    {lang === 'ar' ? badge.ar : badge.en}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 6. GPS TRACKING ══════ */}
      <section className="transport-tracking" aria-label="GPS Tracking">
        <div className="transport-tracking__container">
          <div className="transport-tracking__visual" aria-hidden="true">
            <div className="transport-tracking__pulse">
              <div className="transport-tracking__pulse-ring" />
              <div className="transport-tracking__pulse-icon">
                <IconLocationPin />
              </div>
            </div>
          </div>
          <div className="transport-tracking__text">
            <div className="transport-eyebrow">
              <span className="transport-eyebrow__line" />
              <span className="transport-eyebrow__text">{c.tracking.eyebrow}</span>
            </div>
            <h2 className="transport-section-title">
              {c.tracking.title.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </h2>
            <p className="transport-tracking__body">{c.tracking.body}</p>
            <div className="transport-tracking__features">
              {c.tracking.features.map((feat, idx) => (
                <div key={idx} className="transport-tracking__feature">
                  <div className="transport-tracking__feature-icon">
                    <TrackingFeatureIcon type={feat.icon} />
                  </div>
                  <span className="transport-tracking__feature-label">
                    {lang === 'ar' ? feat.labelAr : feat.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 7. WHY RISETERRA TRANSPORT ══════ */}
      <section className="transport-why" aria-label="Why RiseTerra Transport">
        <div className="transport-why__container">
          <div className="transport-eyebrow">
            <span className="transport-eyebrow__line" />
            <span className="transport-eyebrow__text">{c.why.eyebrow}</span>
          </div>
          <h2 className="transport-section-title">
            {c.why.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
          <div className="transport-why__grid">
            <div className="transport-why__row">
              {c.why.items.slice(0, 3).map((item, idx) => (
                <div key={idx} className="transport-why__card">
                  <div className="transport-why__card-icon">
                    <WhyIcon type={item.icon} />
                  </div>
                  <span className="transport-why__card-label">
                    {lang === 'ar' ? item.labelAr : item.labelEn}
                  </span>
                </div>
              ))}
            </div>
            <div className="transport-why__row transport-why__row--centered">
              {c.why.items.slice(3, 5).map((item, idx) => (
                <div key={idx} className="transport-why__card">
                  <div className="transport-why__card-icon">
                    <WhyIcon type={item.icon} />
                  </div>
                  <span className="transport-why__card-label">
                    {lang === 'ar' ? item.labelAr : item.labelEn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════ 8. CTA ══════ */}
      <section className="transport-cta" aria-label="Call to Action">
        <div className="transport-cta__container">
          <div className="transport-cta__content">
            <h2 className="transport-cta__title">{c.cta.title}</h2>
            <p className="transport-cta__desc">{c.cta.desc}</p>
            <div className="transport-cta__buttons">
              <Link to="/" className="btn transport-cta__btn-primary">
                {c.cta.btn}
                <IconArrowRight />
              </Link>
              <Link to="/contracting" className="btn btn-outline">
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
