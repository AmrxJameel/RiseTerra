import './AboutSection.css'

interface AboutSectionProps {
  lang?: 'en' | 'ar'
}

const CONTENT = {
  en: {
    intro: {
      eyebrow: 'Our Legacy',
      title: 'Forged by Experience.\nDefined by Excellence.',
      p1: 'For over 8 years, our leadership has delivered structural mastery and logistical precision across the region. In 2026, we officially united this profound expertise under one powerful brand in Saudi Arabia: <strong>RiseTerra</strong>.',
      p2: 'RiseTerra stands as a premier industrial partner, seamlessly integrating two specialized divisions — Contracting and Transport. We are not just contractors or logistics providers; we are the foundational backbone for projects that shape the Kingdom\'s future.',
    },
    timeline: {
      title: 'The Journey',
      items: [
        {
          year: '8+ Years',
          title: 'Regional Expertise',
          desc: 'A legacy of excellence in construction and logistics established by our founders across numerous high-profile projects.'
        },
        {
          year: '2026',
          title: 'The Unification',
          desc: 'Official launch of RiseTerra in Riyadh, uniting our dual capabilities under a single, formidable corporate entity.'
        },
        {
          year: 'Future',
          title: 'Building Tomorrow',
          desc: 'Serving as a cornerstone for Saudi Arabia\'s monumental development and infrastructural growth.'
        }
      ]
    },
    mvv: {
      mission: {
        title: 'Our Mission',
        desc: 'To provide uncompromising structural integrity and reliable transport solutions, driving Saudi Arabia\'s industrial and infrastructural growth with precision and power.'
      },
      vision: {
        title: 'Our Vision',
        desc: 'To be the Kingdom\'s most trusted partner in construction and logistics, recognized for our dual-expertise, unwavering quality, and commitment to long-term legacy.'
      },
      valuesTitle: 'Core Values',
      values: [
        'Unyielding Quality',
        'Absolute Reliability',
        'Safety First',
        'Enduring Partnerships'
      ]
    },
    trust: [
      { label: '100% Saudi-Based Entity' },
      { label: 'Engineering Precision' },
      { label: 'Logistics Reliability' },
      { label: 'Long-Term Partnership' }
    ]
  },
  ar: {
    intro: {
      eyebrow: 'إرثنا',
      title: 'صُقلنا بالخبرة.\nوتَميزنا بالإتقان.',
      p1: 'لأكثر من 8 سنوات، قدمت قيادتنا إتقاناً إنشائياً ودقة لوجستية في جميع أنحاء المنطقة. وفي عام 2026، وحدنا هذه الخبرة العميقة رسمياً تحت علامة تجارية واحدة قوية في المملكة العربية السعودية: <strong>رايز تيرا</strong>.',
      p2: 'تقف رايز تيرا كشريك صناعي رائد، حيث تدمج بسلاسة بين قسمين متخصصين — المقاولات والنقل. لسنا مجرد مقاولين أو مقدمي خدمات لوجستية؛ بل نحن العمود الفقري للمشاريع التي ترسم مستقبل المملكة.',
    },
    timeline: {
      title: 'رحلتنا',
      items: [
        {
          year: '+8 سنوات',
          title: 'خبرة إقليمية',
          desc: 'إرث من التميز في البناء والخدمات اللوجستية أسسه قادتنا عبر العديد من المشاريع البارزة.'
        },
        {
          year: '2026',
          title: 'توحيد الجهود',
          desc: 'الإطلاق الرسمي لشركة رايز تيرا في الرياض، وتوحيد قدراتنا المزدوجة تحت كيان مؤسسي واحد قوي.'
        },
        {
          year: 'المستقبل',
          title: 'نبني الغد',
          desc: 'العمل كحجر أساس للتنمية الضخمة والنمو في البنية التحتية في المملكة العربية السعودية.'
        }
      ]
    },
    mvv: {
      mission: {
        title: 'مهمتنا',
        desc: 'توفير تكامل هيكلي لا يساوم وحلول نقل موثوقة، ودفع عجلة النمو الصناعي وتطوير البنية التحتية في المملكة العربية السعودية بدقة وقوة.'
      },
      vision: {
        title: 'رؤيتنا',
        desc: 'أن نكون الشريك الأكثر ثقة في المملكة في مجالي البناء والخدمات اللوجستية، معترف بنا لخبراتنا المزدوجة وجودتنا الثابتة والتزامنا بإرث طويل الأمد.'
      },
      valuesTitle: 'قيمنا الأساسية',
      values: [
        'جودة لا تساوم',
        'موثوقية مطلقة',
        'السلامة أولاً',
        'شراكات مستدامة'
      ]
    },
    trust: [
      { label: 'كيان سعودي 100%' },
      { label: 'دقة هندسية' },
      { label: 'موثوقية لوجستية' },
      { label: 'شراكة طويلة الأمد' }
    ]
  }
}

// --- Icons ---
function IconTarget() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  )
}

function IconEye() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
      <circle cx="12" cy="12" r="3"/>
    </svg>
  )
}

function IconCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  )
}

function IconCompass() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
    </svg>
  )
}

function IconAnchor() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3"/>
      <line x1="12" y1="22" x2="12" y2="8"/>
      <path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </svg>
  )
}

function IconHandshake() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
      <path d="m21 3-6 6"/>
      <path d="M8.4 10.4 5.32 13.5a2.83 2.83 0 0 0 0 4V21a3 3 0 0 1-6 0v-1a2.83 2.83 0 0 0 4 0v-1a2.83 2.83 0 0 0 0-4l3.18-3.18"/>
    </svg>
  )
}

export default function AboutSection({ lang = 'en' }: AboutSectionProps) {
  const c = CONTENT[lang]

  return (
    <section className="about" id="about" aria-label="About RiseTerra">
      
      {/* ── Background visuals ── */}
      <div className="about__bg">
        <div className="about__bg-glow" />
        <div className="about__bg-grid" />
      </div>

      <div className="about__container">

        {/* ── 1. Intro Story ── */}
        <div className="about-intro">
          <div className="about-intro__content">
            <div className="about-intro__eyebrow">
              <span className="about-intro__eyebrow-line" aria-hidden="true" />
              <span className="about-intro__eyebrow-text">{c.intro.eyebrow}</span>
            </div>
            
            <h2 className="about-intro__title">
              {c.intro.title.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </h2>
            
            <div className="about-intro__text">
              <p dangerouslySetInnerHTML={{ __html: c.intro.p1 }} />
              <p dangerouslySetInnerHTML={{ __html: c.intro.p2 }} />
            </div>
          </div>
          
          <div className="about-intro__visual">
             {/* A subtle large logo mark or geometric shape serving as abstract visual */}
             <div className="about-intro__logo-mark">
               <svg viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
                  <polygon points="19,3 35,33 3,33" stroke="#C9A84C" strokeWidth="2" strokeLinejoin="round" fill="none"/>
                  <polygon points="19,11 29,31 9,31" fill="#C9A84C" opacity="0.3"/>
                  <line x1="19" y1="3" x2="19" y2="33" stroke="#C9A84C" strokeWidth="1" opacity="0.6"/>
               </svg>
             </div>
          </div>
        </div>

        {/* ── 2. Timeline / Legacy ── */}
        <div className="about-timeline">
          <div className="about-timeline__header">
            <h3 className="about-timeline__title">{c.timeline.title}</h3>
          </div>
          
          <div className="about-timeline__grid">
            <div className="about-timeline__track" />
            
            {c.timeline.items.map((item, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-item__dot" />
                <div className="timeline-item__content">
                  <div className="timeline-item__year">{item.year}</div>
                  <div className="timeline-item__title">{item.title}</div>
                  <div className="timeline-item__desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── 3. Mission, Vision & Values ── */}
        <div className="about-mvv">
          {/* Mission */}
          <div className="mvv-card">
            <div className="mvv-card__icon"><IconTarget /></div>
            <h3 className="mvv-card__title">{c.mvv.mission.title}</h3>
            <p className="mvv-card__text">{c.mvv.mission.desc}</p>
          </div>
          
          {/* Vision & Values */}
          <div className="mvv-card">
            <div className="mvv-card__icon"><IconEye /></div>
            <h3 className="mvv-card__title">{c.mvv.vision.title}</h3>
            <p className="mvv-card__text">{c.mvv.vision.desc}</p>
            
            <div className="values-list">
              {c.mvv.values.map((val, idx) => (
                <div key={idx} className="value-item">
                  <div className="value-item__icon"><IconCheck /></div>
                  <span className="value-item__text">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── 4. Trust Strip ── */}
        <div className="about-trust">
          <div className="trust-item">
             <div className="trust-item__icon"><IconShield /></div>
             <span className="trust-item__label">{c.trust[0].label}</span>
          </div>
          <div className="trust-item">
             <div className="trust-item__icon"><IconCompass /></div>
             <span className="trust-item__label">{c.trust[1].label}</span>
          </div>
          <div className="trust-item">
             <div className="trust-item__icon"><IconAnchor /></div>
             <span className="trust-item__label">{c.trust[2].label}</span>
          </div>
          <div className="trust-item">
             <div className="trust-item__icon"><IconHandshake /></div>
             <span className="trust-item__label">{c.trust[3].label}</span>
          </div>
        </div>

      </div>
    </section>
  )
}
