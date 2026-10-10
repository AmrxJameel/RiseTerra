import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

interface NavItem {
  label: string
  labelAr: string
  href: string
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home',        labelAr: 'الرئيسية',   href: '/' },
  { label: 'Contracting', labelAr: 'المقاولات',  href: '/contracting' },
  { label: 'Transport',   labelAr: 'النقل',       href: '/transport' },
]

interface NavbarProps {
  lang?: 'en' | 'ar'
  onLangChange?: (lang: 'en' | 'ar') => void
}

export default function Navbar({ lang = 'en', onLangChange }: NavbarProps) {
  const [scrolled, setScrolled]     = useState(false)
  const [menuOpen, setMenuOpen]     = useState(false)
  const [activeLang, setActiveLang] = useState<'en' | 'ar'>(lang)

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 40)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const switchLang = (l: 'en' | 'ar') => {
    setActiveLang(l)
    onLangChange?.(l)
    document.documentElement.lang = l
    document.documentElement.dir  = l === 'ar' ? 'rtl' : 'ltr'
  }

  const isAr = activeLang === 'ar'

  return (
    <>
      <header
        className={`navbar ${scrolled ? 'navbar--scrolled' : 'navbar--transparent'}`}
        role="banner"
      >
        <div className="navbar__inner">

          {/* ── Logo ── */}
          <Link to="/" className="navbar__logo" aria-label="RiseTerra — Home">
            <div className="navbar__logo-mark">
              <img src="/branding/logo-gold.png" alt="RiseTerra Logo" />
            </div>
          </Link>

          {/* ── Desktop nav links ── */}
          <nav aria-label="Primary navigation">
            <ul className="navbar__links" role="list">
              {NAV_ITEMS.map(item => (
                <li key={item.href}>
                  <Link to={item.href}>
                    {isAr ? item.labelAr : item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ── Actions ── */}
          <div className="navbar__actions">
            {/* Language toggle */}
            <div
              className="navbar__lang-toggle"
              role="group"
              aria-label="Language selector"
            >
              <button
                className={`lang-btn ${activeLang === 'en' ? 'lang-btn--active' : ''}`}
                onClick={() => switchLang('en')}
                aria-pressed={activeLang === 'en'}
              >
                EN
              </button>
              <button
                className={`lang-btn ${activeLang === 'ar' ? 'lang-btn--active' : ''}`}
                onClick={() => switchLang('ar')}
                aria-pressed={activeLang === 'ar'}
              >
                AR
              </button>
            </div>

            {/* Desktop CTA */}
            <a href="#contact" className="btn btn-primary navbar__cta hide-mobile">
              {isAr ? 'تواصل معنا' : 'Get in Touch'}
            </a>

            {/* Hamburger */}
            <button
              className={`navbar__hamburger ${menuOpen ? 'is-open' : ''}`}
              onClick={() => setMenuOpen(v => !v)}
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-controls="mobile-menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile menu ── */}
      <nav
        id="mobile-menu"
        className={`navbar__mobile-menu ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul className="mobile-nav-links" role="list">
          {NAV_ITEMS.map(item => (
            <li key={item.href}>
              <Link
                to={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {isAr ? item.labelAr : item.label}
                <span>→</span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="mobile-nav-actions">
          <Link
            to="/contracting"
            className="btn btn-ghost"
            onClick={() => setMenuOpen(false)}
          >
            {isAr ? 'استكشف المقاولات' : 'Explore Contracting'}
          </Link>
          <Link
            to="/transport"
            className="btn btn-ghost"
            onClick={() => setMenuOpen(false)}
          >
            {isAr ? 'استكشف النقل' : 'Explore Transport'}
          </Link>
        </div>
      </nav>
    </>
  )
}
