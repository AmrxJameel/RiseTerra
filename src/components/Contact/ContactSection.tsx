import './ContactSection.css'

interface ContactSectionProps {
  lang?: 'en' | 'ar'
}

const CONTENT = {
  en: {
    trust: [
      { label: 'Fast Response' },
      { label: 'Saudi-Based Team' },
      { label: 'Contracting & Logistics' },
      { label: 'Long-Term Partnerships' }
    ],
    info: {
      eyebrow: 'Get In Touch',
      title: 'Partner\nWith Us.',
      desc: 'Let\'s build the future together. Reach out for project inquiries, partnerships, or logistical support. Our team is ready to deliver.',
      details: [
        { label: 'Headquarters', value: 'Riyadh, Kingdom of Saudi Arabia' },
        { label: 'Email', value: 'Info@riseterra.com.sa' },
        { label: 'Phone', value: '+966 53 163 2887' },
        { label: 'Business Hours', value: 'Sunday - Thursday | 8:00 AM - 5:00 PM' }
      ]
    },
    form: {
      name: 'Full Name',
      company: 'Company Name',
      email: 'Email Address',
      phone: 'Phone Number',
      division: 'Division Interest',
      message: 'Your Message',
      submit: 'Send Message',
      options: [
        'Contracting',
        'Transport',
        'Both / General Inquiry'
      ],
      placeholders: {
        name: 'John Doe',
        company: 'Your Company',
        email: 'john@example.com',
        phone: '+966 5x xxx xxxx',
        message: 'How can we help you?'
      }
    }
  },
  ar: {
    trust: [
      { label: 'استجابة سريعة' },
      { label: 'فريق عمل سعودي' },
      { label: 'مقاولات ولوجستيات' },
      { label: 'شراكات طويلة الأمد' }
    ],
    info: {
      eyebrow: 'تواصل معنا',
      title: 'شاركنا\nالنجاح.',
      desc: 'لنبني المستقبل معاً. تواصل معنا لاستفسارات المشاريع والشراكات أو الدعم اللوجستي. فريقنا جاهز للتنفيذ.',
      details: [
        { label: 'المقر الرئيسي', value: 'الرياض، المملكة العربية السعودية' },
        { label: 'البريد الإلكتروني', value: 'Info@riseterra.com.sa' },
        { label: 'رقم الهاتف', value: '+966 53 163 2887' },
        { label: 'ساعات العمل', value: 'الأحد - الخميس | 8:00 صباحاً - 5:00 مساءً' }
      ]
    },
    form: {
      name: 'الاسم الكامل',
      company: 'اسم الشركة',
      email: 'البريد الإلكتروني',
      phone: 'رقم الهاتف',
      division: 'القسم المهتم به',
      message: 'الرسالة',
      submit: 'إرسال الرسالة',
      options: [
        'المقاولات',
        'النقل',
        'كلاهما / استفسار عام'
      ],
      placeholders: {
        name: 'الاسم الكامل',
        company: 'شركتك',
        email: 'name@example.com',
        phone: '+966 5x xxx xxxx',
        message: 'كيف يمكننا مساعدتك؟'
      }
    }
  }
}

// Icons
function IconZap() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  )
}

function IconMapPin() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  )
}

function IconLayers() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2"/>
      <polyline points="2 12 12 17 22 12"/>
      <polyline points="2 17 12 22 22 17"/>
    </svg>
  )
}

function IconHandshake() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
      <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
      <path d="m21 3-6 6"/>
      <path d="M8.4 10.4 5.32 13.5a2.83 2.83 0 0 0 0 4V21a3 3 0 0 1-6 0v-1a2.83 2.83 0 0 0 4 0v-1a2.83 2.83 0 0 0 0-4l3.18-3.18"/>
    </svg>
  )
}

function IconBuilding() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"/>
      <path d="M9 22v-4h6v4"/>
      <path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>
    </svg>
  )
}

function IconMail() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
    </svg>
  )
}

function IconPhone() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
    </svg>
  )
}

function IconClock() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  )
}

export default function ContactSection({ lang = 'en' }: ContactSectionProps) {
  const c = CONTENT[lang]

  return (
    <section className="contact" id="contact" aria-label="Contact Us">
      
      {/* ── Trust Strip ── */}
      <div className="contact-trust">
        <div className="contact-trust__inner">
          <div className="contact-trust__item">
            <div className="contact-trust__icon"><IconZap /></div>
            <span className="contact-trust__label">{c.trust[0].label}</span>
          </div>
          <div className="contact-trust__item">
            <div className="contact-trust__icon"><IconMapPin /></div>
            <span className="contact-trust__label">{c.trust[1].label}</span>
          </div>
          <div className="contact-trust__item">
            <div className="contact-trust__icon"><IconLayers /></div>
            <span className="contact-trust__label">{c.trust[2].label}</span>
          </div>
          <div className="contact-trust__item">
            <div className="contact-trust__icon"><IconHandshake /></div>
            <span className="contact-trust__label">{c.trust[3].label}</span>
          </div>
        </div>
      </div>

      <div className="contact__container">
        
        {/* ── Info Panel ── */}
        <div className="contact-info">
          <div className="contact-info__header">
            <div className="contact-info__eyebrow">
              <span className="contact-info__eyebrow-line" aria-hidden="true" />
              <span className="contact-info__eyebrow-text">{c.info.eyebrow}</span>
            </div>
            <h2 className="contact-info__title">
              {c.info.title.split('\n').map((line, i) => (
                <span key={i} style={{ display: 'block' }}>{line}</span>
              ))}
            </h2>
            <p className="contact-info__desc">{c.info.desc}</p>
          </div>

          <div className="contact-info__details">
            <div className="info-item">
              <div className="info-item__icon"><IconBuilding /></div>
              <div className="info-item__content">
                <span className="info-item__label">{c.info.details[0].label}</span>
                <span className="info-item__value">{c.info.details[0].value}</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item__icon"><IconMail /></div>
              <div className="info-item__content">
                <span className="info-item__label">{c.info.details[1].label}</span>
                <span className="info-item__value">{c.info.details[1].value}</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item__icon"><IconPhone /></div>
              <div className="info-item__content">
                <span className="info-item__label">{c.info.details[2].label}</span>
                <span className="info-item__value">{c.info.details[2].value}</span>
              </div>
            </div>
            <div className="info-item">
              <div className="info-item__icon"><IconClock /></div>
              <div className="info-item__content">
                <span className="info-item__label">{c.info.details[3].label}</span>
                <span className="info-item__value">{c.info.details[3].value}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Form UI ── */}
        <div className="contact-form-wrapper">
          <form className="contact-form" onSubmit={e => e.preventDefault()}>
            
            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="name">{c.form.name}</label>
                <input type="text" id="name" className="form-input" placeholder={c.form.placeholders.name} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="company">{c.form.company}</label>
                <input type="text" id="company" className="form-input" placeholder={c.form.placeholders.company} />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label" htmlFor="email">{c.form.email}</label>
                <input type="email" id="email" className="form-input" placeholder={c.form.placeholders.email} />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="phone">{c.form.phone}</label>
                <input type="tel" id="phone" className="form-input" placeholder={c.form.placeholders.phone} dir="ltr" style={{ textAlign: lang === 'ar' ? 'right' : 'left' }} />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="division">{c.form.division}</label>
              <select id="division" className="form-select">
                {c.form.options.map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label className="form-label" htmlFor="message">{c.form.message}</label>
              <textarea id="message" className="form-textarea" placeholder={c.form.placeholders.message}></textarea>
            </div>

            <button type="button" className="btn btn-primary form-submit">
              {c.form.submit}
            </button>
            
          </form>
        </div>

      </div>
    </section>
  )
}
