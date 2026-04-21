import { useState, useEffect } from 'react';
import { ChevronRight, Phone, Menu, X, ChevronDown } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';

const navItems = [
  {
    label: 'Services',
    href: '#services',
    dropdown: [
      { label: 'Residential Interior', href: '#services' },
      { label: 'Residential Exterior', href: '#services' },
      { label: 'Commercial Painting', href: '#services' },
      { label: 'Cabinet Refinishing', href: '#services' },
      { label: 'Drywall & Texture', href: '#services' },
    ],
  },
  {
    label: 'Commercial',
    href: '#services',
    dropdown: [
      { label: 'Office Buildings', href: '#services' },
      { label: 'Retail Spaces', href: '#services' },
      { label: 'Industrial Facilities', href: '#services' },
    ],
  },
  { label: 'About Us', href: '#warranty' },
  { label: 'Portfolio', href: '#before-after' },
  { label: 'Contact', href: '#footer' },
];

export default function StickyHeader({ onOpenModal }: { onOpenModal: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expandedMobile, setExpandedMobile] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [drawerOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-nav py-3' : 'py-5'
        }`}
        style={{
          background: isScrolled ? undefined : 'transparent',
        }}
      >
        <div className="max-container flex items-center justify-between" style={{ padding: '0 24px' }}>
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 no-theme-transition" aria-label="WALLEX Home">
            <img
              src="/logo.png"
              alt="WALLEX Logo"
              className="w-10 h-10 rounded-xl object-cover"
              width={40}
              height={40}
            />
            <div className="flex flex-col leading-none" style={{ width: 110 }}>
              <div
                className="flex justify-between w-full font-display font-bold text-xl"
                style={{ color: isScrolled ? 'var(--text-primary)' : '#FFFFFF' }}
              >
                {'WALLEX'.split('').map((c, i) => (
                  <span key={i}>{c}</span>
                ))}
              </div>
              <div
                className="flex justify-between w-full font-display font-black uppercase"
                style={{
                  fontSize: 6,
                  marginTop: 1,
                  color: isScrolled ? 'var(--text-tertiary)' : 'rgba(255,255,255,0.55)',
                }}
              >
                {'THE WALL EXPERTS'.split('').map((c, i) => (
                  <span key={i}>{c === ' ' ? '\u00A0' : c}</span>
                ))}
              </div>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <div key={item.label} className="nav-item relative">
                <a
                  href={item.href}
                  className="flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-80"
                  style={{ color: isScrolled ? 'var(--text-primary)' : '#FFFFFF' }}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3 h-3 opacity-50" />}
                </a>
                {item.dropdown && (
                  <div className="nav-dropdown">
                    {item.dropdown.map((sub) => (
                      <a key={sub.label} href={sub.href}>
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Right */}
          <div className="hidden lg:flex items-center gap-3">
            <DarkModeToggle />
            <a
              href="tel:+19729045132"
              className="group hidden lg:flex items-center gap-2 rounded-full transition-all duration-300 hover:bg-white/10"
              style={{ padding: '8px 16px', border: '1px solid var(--border-medium)' }}
              aria-label="Call us at (972) 904-5132"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[var(--brand-primary)]/20 text-[var(--brand-primary)] group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden xl:inline font-semibold text-sm tracking-wide text-white">(972) 904-5132</span>
            </a>
            <button
              onClick={onOpenModal}
              className="btn-cta px-6 py-3 text-sm flex items-center gap-2"
              aria-label="Get a free estimate"
            >
              <span className="flex items-center gap-2">
                Get a Free Estimate
                <ChevronRight className="w-4 h-4" />
              </span>
            </button>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <DarkModeToggle />
            <button
              onClick={() => setDrawerOpen(true)}
              className="w-11 h-11 flex items-center justify-center rounded-full"
              style={{
                color: isScrolled ? 'var(--text-primary)' : '#FFFFFF',
              }}
              aria-label="Open menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`mobile-overlay ${drawerOpen ? 'visible' : ''}`}
        onClick={() => setDrawerOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile drawer */}
      <nav
        className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between mb-8">
          <span className="font-display font-bold text-xl" style={{ color: 'var(--text-primary)' }}>
            Menu
          </span>
          <button
            onClick={() => setDrawerOpen(false)}
            className="w-11 h-11 flex items-center justify-center rounded-full"
            style={{ background: 'var(--border-subtle)', color: 'var(--text-primary)' }}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex flex-col gap-1">
          {navItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => {
                  if (item.dropdown) {
                    setExpandedMobile(expandedMobile === item.label ? null : item.label);
                  } else {
                    setDrawerOpen(false);
                    const el = document.querySelector(item.href);
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-left font-medium transition-colors"
                style={{
                  color: 'var(--text-primary)',
                  background: expandedMobile === item.label ? 'var(--border-subtle)' : 'transparent',
                }}
              >
                {item.label}
                {item.dropdown && (
                  <ChevronDown
                    className="w-4 h-4 transition-transform"
                    style={{
                      transform: expandedMobile === item.label ? 'rotate(180deg)' : 'rotate(0)',
                    }}
                  />
                )}
              </button>
              {item.dropdown && expandedMobile === item.label && (
                <div className="pl-4 pb-2">
                  {item.dropdown.map((sub) => (
                    <a
                      key={sub.label}
                      href={sub.href}
                      onClick={() => setDrawerOpen(false)}
                      className="block py-2 px-4 text-sm rounded-lg transition-colors"
                      style={{ color: 'var(--text-secondary)' }}
                    >
                      {sub.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href="tel:+19729045132"
            className="flex items-center justify-center gap-2 w-full rounded-xl transition-all font-semibold"
            style={{
              padding: '14px',
              background: 'rgba(255, 107, 53, 0.1)',
              color: 'var(--brand-primary)',
              border: '1px solid rgba(255, 107, 53, 0.2)',
            }}
          >
            <Phone className="w-4 h-4" /> (972) 904-5132
          </a>
          <button
            onClick={() => { setDrawerOpen(false); onOpenModal(); }}
            className="btn-cta py-3 px-6 text-sm font-semibold"
          >
            <span>Get a Free Estimate</span>
          </button>
        </div>
      </nav>
    </>
  );
}
