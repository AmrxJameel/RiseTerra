import { useState } from 'react'
import './ProjectsSection.css'

interface ProjectsSectionProps {
  lang?: 'en' | 'ar'
}

type DivisionFilter = 'All' | 'Contracting' | 'Transport'

const CONTENT = {
  en: {
    stats: [
      { num: '200+', label: 'Completed Works' },
      { num: '14',   label: 'Active Sites' },
      { num: '80+',  label: 'Fleet Capability' },
      { num: 'KSA',  label: 'Service Reach' }
    ],
    header: {
      eyebrow: 'Our Work',
      title: 'Featured\nProjects',
      filters: {
        All: 'All',
        Contracting: 'Contracting',
        Transport: 'Transport'
      }
    },
    featured: {
      title: 'King Salman Park Infrastructure',
      division: 'Contracting',
      location: 'Riyadh',
      status: 'Ongoing',
      metric: '250,000+ sqm concrete',
      desc: 'Delivering foundational structural works for one of the world\'s largest urban parks. This flagship project demands extreme precision, massive scale execution, and uncompromising quality standards.'
    },
    grid: [
      {
        id: 1,
        title: 'NEOM Heavy Haul Logistics',
        division: 'Transport',
        location: 'Tabuk Region',
        status: 'Active',
        metric: '40+ heavy trailers deployed',
        desc: 'Providing specialized flatbed transport and continuous GPS-monitored logistics for critical construction materials across vast terrains.'
      },
      {
        id: 2,
        title: 'Riyadh Metro Extension',
        division: 'Contracting',
        location: 'Riyadh',
        status: 'Completed',
        metric: 'Complex Skeleton Phase',
        desc: 'Executed the structural framework and heavy reinforcing for advanced transit stations under strict municipal timelines.'
      },
      {
        id: 3,
        title: 'Jeddah Port Supply Chain',
        division: 'Transport',
        location: 'Jeddah',
        status: 'Ongoing',
        metric: '24/7 Supply Route',
        desc: 'Continuous fleet operations connecting coastal shipments directly to inland megaprojects with zero-delay guarantees.'
      },
      {
        id: 4,
        title: 'Qiddiya Core Structures',
        division: 'Contracting',
        location: 'Qiddiya',
        status: 'In Progress',
        metric: 'Retaining Walls',
        desc: 'Foundational earthworks and massive retaining walls built into challenging rocky terrain to support upcoming entertainment venues.'
      }
    ]
  },
  ar: {
    stats: [
      { num: '+200', label: 'عمل منجز' },
      { num: '14',   label: 'موقع نشط' },
      { num: '+80',  label: 'قدرة الأسطول' },
      { num: 'المملكة', label: 'نطاق الخدمة' }
    ],
    header: {
      eyebrow: 'أعمالنا',
      title: 'مشاريع\nمتميزة',
      filters: {
        All: 'الكل',
        Contracting: 'المقاولات',
        Transport: 'النقل'
      }
    },
    featured: {
      title: 'البنية التحتية لحديقة الملك سلمان',
      division: 'Contracting', // using internal key for logic
      divisionLabel: 'المقاولات',
      location: 'الرياض',
      status: 'جاري العمل',
      metric: '+250,000 متر مربع خرسانة',
      desc: 'تنفيذ الأعمال الهيكلية الأساسية لواحدة من أكبر الحدائق الحضرية في العالم. يتطلب هذا المشروع الرائد دقة متناهية، وتنفيذاً على نطاق ضخم، ومعايير جودة لا تساوم.'
    },
    grid: [
      {
        id: 1,
        title: 'لوجستيات النقل الثقيل في نيوم',
        division: 'Transport',
        divisionLabel: 'النقل',
        location: 'منطقة تبوك',
        status: 'نشط',
        metric: '+40 مقطورة ثقيلة',
        desc: 'توفير نقل متخصص عبر المقطورات المسطحة وخدمات لوجستية مراقبة بنظام GPS للمواد الإنشائية الحيوية عبر تضاريس شاسعة.'
      },
      {
        id: 2,
        title: 'امتداد مترو الرياض',
        division: 'Contracting',
        divisionLabel: 'المقاولات',
        location: 'الرياض',
        status: 'مكتمل',
        metric: 'مرحلة هيكل معقدة',
        desc: 'تنفيذ الإطار الهيكلي والتسليح الثقيل لمحطات النقل المتقدمة وفق جداول زمنية بلدية صارمة.'
      },
      {
        id: 3,
        title: 'سلسلة توريد ميناء جدة',
        division: 'Transport',
        divisionLabel: 'النقل',
        location: 'جدة',
        status: 'جاري العمل',
        metric: 'مسار توريد على مدار الساعة',
        desc: 'عمليات أسطول مستمرة تربط الشحنات الساحلية مباشرة بالمشاريع الكبرى الداخلية مع ضمان عدم التأخير.'
      },
      {
        id: 4,
        title: 'الهياكل الأساسية في القدية',
        division: 'Contracting',
        divisionLabel: 'المقاولات',
        location: 'القدية',
        status: 'قيد التقدم',
        metric: 'جدران استنادية',
        desc: 'أعمال ترابية أساسية وجدران استنادية ضخمة مبنية في تضاريس صخرية صعبة لدعم الوجهات الترفيهية القادمة.'
      }
    ]
  }
}

// --- Icons ---
function IconBuilding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <rect x="4" y="2" width="16" height="20" rx="1"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
    </svg>
  )
}

function IconTruck() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/>
      <path d="M15 18H9"/>
      <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"/>
      <circle cx="17" cy="18" r="2"/>
      <circle cx="7"  cy="18" r="2"/>
    </svg>
  )
}

function IconImagePlaceholder() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" width="100%" height="100%">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
      <circle cx="8.5" cy="8.5" r="1.5"/>
      <polyline points="21 15 16 10 5 21"/>
    </svg>
  )
}

export default function ProjectsSection({ lang = 'en' }: ProjectsSectionProps) {
  const c = CONTENT[lang]
  const [filter, setFilter] = useState<DivisionFilter>('All')

  // Filter logic
  const showFeatured = filter === 'All' || filter === c.featured.division
  const filteredGrid = c.grid.filter(item => filter === 'All' || item.division === filter)

  return (
    <section className="projects" id="projects" aria-label="Projects Portfolio">
      
      {/* ── 1. Stats Strip ── */}
      <div className="projects-stats">
        <div className="projects-stats__grid">
          {c.stats.map((stat, idx) => (
            <div key={idx} className="projects-stat-item">
              <span className="projects-stat-item__num">{stat.num}</span>
              <span className="projects-stat-item__label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── 2. Header & Filters ── */}
      <div className="projects__header">
        <div className="projects__intro">
          <div className="projects__eyebrow">
            <span className="projects__eyebrow-line" aria-hidden="true" />
            <span className="projects__eyebrow-text">{c.header.eyebrow}</span>
          </div>
          <h2 className="projects__title">
            {c.header.title.split('\n').map((line, i) => (
              <span key={i} style={{ display: 'block' }}>{line}</span>
            ))}
          </h2>
        </div>

        <div className="projects__filters" role="group" aria-label="Filter projects">
          {(['All', 'Contracting', 'Transport'] as DivisionFilter[]).map(f => (
            <button
              key={f}
              className={`filter-btn ${filter === f ? 'filter-btn--active' : ''}`}
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
            >
              {c.header.filters[f]}
            </button>
          ))}
        </div>
      </div>

      {/* ── 3. Content Area ── */}
      <div className="projects__content">
        
        {/* Featured Project */}
        {showFeatured && (
          <article className="project-featured project-animate-enter" aria-label={`Featured Project: ${c.featured.title}`}>
            <div className="project-featured__visual" aria-hidden="true">
              <div className="project-featured__visual-icon">
                <IconImagePlaceholder />
              </div>
            </div>
            
            <div className="project-featured__info">
              <span className={`project-badge project-badge--${c.featured.division.toLowerCase()}`}>
                 {c.featured.division === 'Contracting' ? <IconBuilding /> : <IconTruck />}
                 {'divisionLabel' in c.featured ? (c.featured as any).divisionLabel : c.featured.division}
              </span>
              
              <h3 className="project-featured__title">{c.featured.title}</h3>
              <p className="project-featured__desc">{c.featured.desc}</p>
              
              <div className="project-meta">
                <div className="project-meta__item">
                  <span className="project-meta__label">Location</span>
                  <span className="project-meta__value">{c.featured.location}</span>
                </div>
                <div className="project-meta__item">
                  <span className="project-meta__label">Status</span>
                  <span className="project-meta__value">{c.featured.status}</span>
                </div>
                <div className="project-meta__item" style={{ gridColumn: '1 / -1' }}>
                  <span className="project-meta__label">Scale / Metric</span>
                  <span className="project-meta__value">{c.featured.metric}</span>
                </div>
              </div>
            </div>
          </article>
        )}

        {/* Project Grid */}
        <div className="projects__grid">
          {filteredGrid.map(item => (
            <article key={item.id} className="project-card project-animate-enter" style={{ animationDelay: `${item.id * 100}ms` }}>
              <div className="project-card__visual" aria-hidden="true">
                 <div className="project-card__icon">
                   <IconImagePlaceholder />
                 </div>
              </div>
              
              <div className="project-card__info">
                <span className={`project-badge project-badge--${item.division.toLowerCase()}`}>
                  {item.division === 'Contracting' ? <IconBuilding /> : <IconTruck />}
                  {'divisionLabel' in item ? (item as any).divisionLabel : item.division}
                </span>
                
                <h3 className="project-card__title">{item.title}</h3>
                <p className="project-card__desc">{item.desc}</p>
                
                <div className="project-meta">
                  <div className="project-meta__item">
                    <span className="project-meta__label">Location</span>
                    <span className="project-meta__value">{item.location}</span>
                  </div>
                  <div className="project-meta__item">
                    <span className="project-meta__label">Status</span>
                    <span className="project-meta__value">{item.status}</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
