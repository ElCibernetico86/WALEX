import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronRight, MapPin } from 'lucide-react';

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);

  return (
    <section
      ref={containerRef}
      className="relative flex items-center justify-center overflow-hidden"
      style={{
        minHeight: '100vh',
        minHeight: '100dvh',
        background: '#0A2540',
      }}
    >
      {/* Background image with parallax */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000"
          alt="Beautifully painted luxury home exterior"
          className="w-full h-full object-cover"
          style={{ opacity: 0.45 }}
          width={2000}
          height={1333}
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Gradient overlays */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,37,64,0.6) 0%, rgba(0,35,102,0.3) 40%, rgba(10,37,64,0.85) 100%)',
          }}
        />
      </motion.div>

      {/* Floating decorative elements */}
      <div
        className="ufo-float-slow absolute hidden md:block"
        style={{ top: '15%', left: '8%', opacity: 0.15 }}
      >
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <circle cx="40" cy="40" r="38" stroke="#D4AF37" strokeWidth="2" strokeDasharray="6 4" />
          <circle cx="40" cy="40" r="20" fill="#D4AF37" fillOpacity="0.15" />
        </svg>
      </div>
      <div
        className="ufo-float absolute hidden md:block"
        style={{ top: '25%', right: '10%', opacity: 0.12 }}
      >
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
          <rect x="5" y="5" width="50" height="50" rx="12" stroke="#FF6B35" strokeWidth="2" />
          <rect x="15" y="15" width="30" height="30" rx="6" fill="#FF6B35" fillOpacity="0.12" />
        </svg>
      </div>
      <div
        className="ufo-float-reverse absolute hidden lg:block"
        style={{ bottom: '20%', left: '12%', opacity: 0.1 }}
      >
        <svg width="100" height="40" viewBox="0 0 100 40" fill="none">
          <path d="M5 35 Q50 -10 95 35" stroke="#FFFFFF" strokeWidth="2" fill="none" strokeOpacity="0.4" />
          <circle cx="50" cy="12" r="6" fill="#D4AF37" fillOpacity="0.3" />
        </svg>
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div style={{ padding: '0 24px', maxWidth: 900, margin: '0 auto' }}>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full mb-8"
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <MapPin className="w-4 h-4 text-amber-400" />
            <span className="text-white/80 text-sm font-medium">Serving North Texas Since 2015</span>
          </motion.div>

          <h1
            className="font-display font-bold text-white leading-[1.05] tracking-tight text-balance"
            style={{ fontSize: 'clamp(2.5rem, 7vw, 5.5rem)', marginBottom: 24 }}
          >
            The Gold Standard in{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #D4AF37 0%, #FF6B35 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Professional Painting
            </span>
          </h1>

          <p
            className="text-white/70 font-light leading-relaxed mx-auto text-balance"
            style={{
              fontSize: 'clamp(1rem, 2.2vw, 1.35rem)',
              maxWidth: 640,
              marginBottom: 40,
            }}
          >
            From expert drywall finishing to flawless full-home painting —
            delivering superb quality and meticulous detail to every project across the DFW metroplex.
          </p>

          {/* CTA Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenModal}
              className="btn-cta animate-pulse-glow w-full sm:w-auto flex items-center justify-center gap-2"
              style={{ padding: '18px 36px', fontSize: 17 }}
            >
              <span className="flex items-center gap-2">
                Get a Free Estimate
                <ChevronRight className="w-5 h-5" />
              </span>
            </button>
            <a
              href="#before-after"
              className="w-full sm:w-auto flex items-center justify-center gap-2 text-white font-semibold hover:text-white/80 transition-colors"
              style={{
                padding: '18px 36px',
                fontSize: 17,
                border: '1px solid rgba(255,255,255,0.2)',
                borderRadius: 'var(--radius-full)',
                backdropFilter: 'blur(8px)',
                background: 'rgba(255,255,255,0.05)',
              }}
            >
              View Our Work
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute z-10"
        style={{ bottom: 32, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div
          className="rounded-full flex justify-center"
          style={{
            width: 28,
            height: 44,
            border: '2px solid rgba(255,255,255,0.2)',
            padding: 6,
          }}
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: 4,
              height: 8,
              borderRadius: 2,
              background: 'rgba(255,255,255,0.4)',
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
