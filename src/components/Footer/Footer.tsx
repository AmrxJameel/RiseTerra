import { Link } from 'react-router-dom'
import './Footer.css'

interface FooterProps {
  lang?: 'en' | 'ar'
}

const CONTENT = {
  en: {
    brand: {
      tagline: 'Contracting · Transport',
      desc: 'The foundational backbone for projects that shape the Kingdom\'s future. Uniting structural mastery and logistical precision under one industrial vision.'
    },
    linksTitle: 'Quick Links',
    links: [
      { label: 'Home', href: '/' },
      { label: 'Contracting', href: '/contracting' },
      { label: 'Transport', href: '/transport' },
    ],
    divisionsTitle: 'Divisions',
    divisions: [
      { label: 'RiseTerra Contracting', href: '/contracting' },
      { label: 'RiseTerra Transport', href: '/transport' }
    ],
    contactTitle: 'Headquarters',
    contact: {
      locationLabel: 'Location',
      location: 'Riyadh, Kingdom of Saudi Arabia',
      emailLabel: 'Email',
      email: 'Info@riseterra.com.sa',
      phoneLabel: 'Phone',
      phone: '+966 53 163 2887'
    },
    copyright: '© 2026 RiseTerra. All rights reserved.',
    backToTop: 'Back to Top'
  },
  ar: {
    brand: {
      tagline: 'مقاولات · نقل',
      desc: 'العمود الفقري للمشاريع التي ترسم مستقبل المملكة. توحيد الإتقان الإنشائي والدقة اللوجستية تحت رؤية صناعية واحدة.'
    },
    linksTitle: 'روابط سريعة',
    links: [
      { label: 'الرئيسية', href: '/' },
      { label: 'المقاولات', href: '/contracting' },
      { label: 'النقل', href: '/transport' },
    ],
    divisionsTitle: 'الأقسام',
    divisions: [
      { label: 'رايز تيرا للمقاولات', href: '/contracting' },
      { label: 'رايز تيرا للنقل', href: '/transport' }
    ],
    contactTitle: 'المقر الرئيسي',
    contact: {
      locationLabel: 'الموقع',
      location: 'الرياض، المملكة العربية السعودية',
      emailLabel: 'البريد الإلكتروني',
      email: 'Info@riseterra.com.sa',
      phoneLabel: 'الهاتف',
      phone: '+966 53 163 2887'
    },
    copyright: '© 2026 رايز تيرا. جميع الحقوق محفوظة.',
    backToTop: 'العودة للأعلى'
  }
}

function IconArrowUp() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19V5M5 12l7-7 7 7"/>
    </svg>
  )
}

export default function Footer({ lang = 'en' }: FooterProps) {
  const c = CONTENT[lang]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" aria-label="Site Footer">
      
      <div className="footer__container">
        
        {/* Brand */}
        <div className="footer-brand">
          <Link to="/" className="footer-brand__logo" aria-label="RiseTerra">
            <div className="footer-brand__logo-mark">
              <img src="/branding/logo-gold.png" alt="RiseTerra Logo" />
            </div>
          </Link>
          <p className="footer-brand__desc">{c.brand.desc}</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <h4 className="footer-links__title">{c.linksTitle}</h4>
          <ul className="footer-links__list">
            {c.links.map(link => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Divisions */}
        <div className="footer-links">
          <h4 className="footer-links__title">{c.divisionsTitle}</h4>
          <ul className="footer-links__list">
            {c.divisions.map(link => (
              <li key={link.href}>
                <Link to={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-links">
          <h4 className="footer-links__title">{c.contactTitle}</h4>
          <div className="footer-contact__list">
            <span className="footer-contact__item">
              <strong>{c.contact.locationLabel}</strong>
              {c.contact.location}
            </span>
            <span className="footer-contact__item">
              <strong>{c.contact.emailLabel}</strong>
              {c.contact.email}
            </span>
            <span className="footer-contact__item">
              <strong>{c.contact.phoneLabel}</strong>
              <span dir="ltr" style={{ display: 'inline-block' }}>{c.contact.phone}</span>
            </span>
          </div>
        </div>

      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span className="footer__copy">{c.copyright}</span>
          <button className="footer__back-top" onClick={scrollToTop} aria-label={c.backToTop}>
            {c.backToTop}
            <span className="footer__back-top-icon">
              <IconArrowUp />
            </span>
          </button>
        </div>
      </div>

    </footer>
  )
}
