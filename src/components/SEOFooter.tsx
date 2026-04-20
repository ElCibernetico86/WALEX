import { Phone, Mail, MapPin } from 'lucide-react';

const serviceAreas = [
  'North Dallas', 'Plano', 'Frisco', 'McKinney',
  'Prosper', 'Allen', 'Celina', 'The Colony',
  'Little Elm', 'Aubrey', 'Anna', 'Melissa',
];

const companyLinks = [
  { label: 'About Us', href: '#warranty' },
  { label: 'Our Process', href: '#before-after' },
  { label: 'Portfolio', href: '#before-after' },
  { label: 'Careers', href: '#' },
  { label: 'FAQs', href: '#' },
];

const resourceLinks = [
  { label: 'Color Studio', href: '#' },
  { label: 'Painting Blog', href: '#' },
  { label: 'Maintenance Tips', href: '#' },
  { label: 'Accessibility', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

export default function SEOFooter() {
  return (
    <footer
      id="footer"
      style={{ background: '#050D1A', color: '#FFFFFF' }}
    >
      {/* CTA Band */}
      <div
        className="text-center relative overflow-hidden"
        style={{
          padding: 'clamp(60px, 10vw, 100px) 24px',
          background: 'linear-gradient(135deg, #0A2540 0%, #002366 60%, #0A2540 100%)',
        }}
      >
        <div className="ufo-float-slow absolute hidden md:block" style={{ top: 30, right: '15%', opacity: 0.08 }}>
          <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="38" stroke="#D4AF37" strokeWidth="1.5" />
          </svg>
        </div>
        <div className="relative z-10 max-container">
          <h2
            className="font-display font-bold text-white"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Ready to Elevate Your Space?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.55)',
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              maxWidth: 520,
              margin: '0 auto 36px',
              lineHeight: 1.7,
            }}
          >
            Schedule your complimentary consultation and see why WALEX is
            ranked #1 in the DFW metroplex.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="btn-cta w-full sm:w-auto"
              style={{ padding: '18px 36px', fontSize: 17 }}
            >
              <span>Request a Free Estimate</span>
            </button>
            <a
              href="tel:+19729045132"
              className="inline-flex items-center gap-3 transition-colors rounded-2xl hover:bg-white/5"
              style={{
                padding: '12px 20px',
                border: '1px solid rgba(255,255,255,0.1)',
              }}
            >
              <Phone className="w-5 h-5" /> (972) 904-5132
            </a>
          </div>
        </div>
      </div>

      {/* Footer Grid */}
      <div className="max-container" style={{ padding: '80px 24px 40px' }}>
        <div
          className="grid gap-12"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))' }}
        >
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div className="flex items-center gap-3" style={{ marginBottom: 20 }}>
              <img
                src="/logo.png"
                alt="WALEX Logo"
                className="rounded-xl object-cover"
                width={44}
                height={44}
              />
              <div className="flex flex-col leading-none" style={{ width: 130 }}>
                <div className="flex justify-between w-full font-display font-bold text-xl text-white">
                  {'WALEX'.split('').map((c, i) => (
                    <span key={i}>{c}</span>
                  ))}
                </div>
                <div
                  className="flex justify-between w-full font-display font-black uppercase"
                  style={{ fontSize: 7, marginTop: 1, color: 'rgba(255,255,255,0.35)' }}
                >
                  {'THE WALL EXPERTS'.split('').map((c, i) => (
                    <span key={i}>{c === ' ' ? '\u00A0' : c}</span>
                  ))}
                </div>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: 15, lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              The Wall Experts. Elevating homes across North Texas with premium painting services and uncompromising quality.
            </p>
            {/* Contact */}
            <div className="flex flex-col gap-3">
              <a href="tel:+19729045132" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Phone className="w-4 h-4" /> (972) 904-5132
              </a>
              <a href="mailto:hello@walexwalls.com" className="flex items-center gap-2 text-sm hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <Mail className="w-4 h-4" /> hello@walexwalls.com
              </a>
              <span className="flex items-center gap-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>
                <MapPin className="w-4 h-4" /> North Dallas, TX 75001
              </span>
            </div>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-display font-bold text-white" style={{ fontSize: 15, marginBottom: 20 }}>
              Service Areas
            </h4>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {serviceAreas.map((area) => (
                <a
                  key={area}
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {area}
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-bold text-white" style={{ fontSize: 15, marginBottom: 20 }}>
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {companyLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold text-white" style={{ fontSize: 15, marginBottom: 20 }}>
              Resources
            </h4>
            <div className="flex flex-col gap-3">
              {resourceLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm hover:text-white transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          style={{
            paddingTop: 40,
            marginTop: 60,
            borderTop: '1px solid rgba(255,255,255,0.08)',
            fontSize: 13,
            color: 'rgba(255,255,255,0.3)',
          }}
        >
          <p>© 2026 WALEX — The Wall Experts. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
