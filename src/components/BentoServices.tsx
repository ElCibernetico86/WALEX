import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    title: 'Residential Interior',
    description: 'Premium wall finishes, accent walls, and complete interior repaints that transform your living spaces.',
    gradient: 'linear-gradient(135deg, #002366 0%, #0A2540 100%)',
    iconColor: '#6B9FFF',
    wide: true,
    image: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Residential Exterior',
    description: 'Weather-resistant coatings and expert surface preparation to protect and beautify your home.',
    gradient: 'linear-gradient(135deg, #0A2540 0%, #1a3a5c 100%)',
    iconColor: '#D4AF37',
    wide: false,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Commercial & Industrial',
    description: 'Large-scale painting solutions for offices, retail spaces, and industrial facilities with minimal disruption.',
    gradient: 'linear-gradient(135deg, #1a3a5c 0%, #002366 100%)',
    iconColor: '#FF6B35',
    wide: false,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Cabinet Refinishing',
    description: 'Factory-quality finishes for kitchen and bath cabinetry. Save thousands compared to replacement.',
    gradient: 'linear-gradient(135deg, #002366 0%, #0A2540 100%)',
    iconColor: '#E8913A',
    wide: false,
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Specialty Services',
    description: 'Popcorn ceiling removal, drywall repair, custom textures, and tape-bed finishing by certified craftsmen.',
    gradient: 'linear-gradient(135deg, #0A2540 0%, #002366 100%)',
    iconColor: '#D4AF37',
    wide: true,
    image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=800',
  },
];

const ServiceIcon = ({ color, index }: { color: string; index: number }) => {
  const icons = [
    // House
    <svg key="house" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M4 14L14 4L24 14V24C24 24.5 23.5 25 23 25H5C4.5 25 4 24.5 4 24V14Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 25V16H18V25" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Shield
    <svg key="shield" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3L4 7V13C4 19.6 8.4 25.7 14 27C19.6 25.7 24 19.6 24 13V7L14 3Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>,
    // Building
    <svg key="building" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="4" width="20" height="21" rx="2" stroke={color} strokeWidth="2"/>
      <line x1="10" y1="9" x2="10" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="18" y1="9" x2="18" y2="12" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="10" y1="16" x2="10" y2="19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
      <line x1="18" y1="16" x2="18" y2="19" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    </svg>,
    // PaintBucket
    <svg key="bucket" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M5 10L14 4L23 10V20L14 26L5 20V10Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="14" cy="15" r="4" stroke={color} strokeWidth="2"/>
    </svg>,
    // Brush
    <svg key="brush" width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M20 4L8 16L6 22L12 20L24 8L20 4Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <line x1="16" y1="8" x2="20" y2="12" stroke={color} strokeWidth="2"/>
    </svg>,
  ];
  return icons[index] || icons[0];
};

export default function BentoServices() {
  return (
    <section
      id="services"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-container">
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="uppercase font-semibold tracking-widest"
            style={{
              fontSize: 13,
              color: '#FF6B35',
              marginBottom: 16,
              letterSpacing: '0.15em',
            }}
          >
            Our Services
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              lineHeight: 1.1,
              color: 'var(--text-primary)',
              marginBottom: 16,
            }}
          >
            Comprehensive Wall &<br />
            <span style={{ color: 'var(--text-accent)' }}>Paint Solutions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
              color: 'var(--text-secondary)',
              maxWidth: 560,
              lineHeight: 1.7,
            }}
          >
            From initial drywall prep to the final coat of paint — we deliver a
            complete transformation experience.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="bento-grid">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: idx * 0.08, duration: 0.6 }}
              className={`glass-card group relative overflow-hidden ${service.wide ? 'bento-wide' : ''}`}
              style={{ minHeight: 320 }}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0 overflow-hidden" style={{ borderRadius: 'inherit' }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  style={{ opacity: 0.12 }}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  width={800}
                  height={600}
                />
                <div
                  className="absolute inset-0"
                  style={{ background: 'var(--bg-card)', opacity: 0.6 }}
                />
              </div>

              {/* Floating accent */}
              <div
                className="ufo-float absolute hidden md:block"
                style={{
                  top: 20,
                  right: 20,
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: `${service.iconColor}12`,
                  border: `1px solid ${service.iconColor}20`,
                }}
              />

              {/* Content */}
              <div
                className="relative z-10 flex flex-col justify-between h-full"
                style={{ padding: 36, minHeight: 320 }}
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="flex items-center justify-center"
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: 'var(--radius-md)',
                      background: `${service.iconColor}15`,
                      border: `1px solid ${service.iconColor}25`,
                      marginBottom: 24,
                    }}
                  >
                    <ServiceIcon color={service.iconColor} index={idx} />
                  </motion.div>

                  <h3
                    className="font-display font-bold"
                    style={{
                      fontSize: 22,
                      color: 'var(--text-primary)',
                      marginBottom: 12,
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      fontSize: 15,
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                <div style={{ marginTop: 28 }}>
                  <button
                    className="flex items-center gap-1 font-semibold text-sm group/btn transition-colors"
                    style={{ color: 'var(--text-accent)' }}
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more
                    <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
