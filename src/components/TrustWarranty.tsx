import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Clock, DollarSign, Sparkles, Shield, ChevronLeft, ChevronRight } from 'lucide-react';

const usps = [
  { icon: <Clock className="w-6 h-6" />, title: 'On Time', description: 'Guaranteed schedule adherence' },
  { icon: <DollarSign className="w-6 h-6" />, title: 'On Budget', description: 'No surprise charges, ever' },
  { icon: <Sparkles className="w-6 h-6" />, title: 'Clean Workspace', description: 'We leave it spotless' },
  { icon: <Shield className="w-6 h-6" />, title: 'Fully Insured', description: '$2M liability coverage' },
];

const testimonials = [
  {
    name: 'Sarah Jenkins',
    location: 'Frisco, TX',
    text: 'The attention to detail was beyond anything I\'ve seen. Carlos and his crew treated my home like a museum piece. The accent wall they did in our living room gets complimented every single time we have guests. Absolutely flawless finish.',
    painter: 'Carlos M.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    location: 'Plano, TX',
    text: 'Professional, punctual, and the royalty blue accent wall they did in my office is the talk of every Zoom call. Eduardo was meticulous about masking and prep — you can see the difference when someone truly cares about their craft.',
    painter: 'Eduardo R.',
    rating: 5,
  },
  {
    name: 'David Miller',
    location: 'McKinney, TX',
    text: 'WALLEX transformed our kitchen cabinets into a factory-new finish. It saved us over $15,000 compared to a full remodel. Miguel and his team were incredibly clean, organized, and the results speak for themselves.',
    painter: 'Miguel S.',
    rating: 5,
  },
  {
    name: 'Jennifer Walsh',
    location: 'Prosper, TX',
    text: 'We\'ve used WALLEX for three consecutive projects—interior repaint, exterior, and cabinets. Every single time, the results are pristine. Their 3-year warranty gave us total peace of mind. Can\'t recommend them enough.',
    painter: 'Team WALLEX',
    rating: 5,
  },
];

export default function TrustWarranty() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(() => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setActiveIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [autoplay, next]);

  return (
    <section
      id="warranty"
      className="section-padding"
      style={{ background: 'var(--bg-primary)' }}
    >
      <div className="max-container">
        {/* Warranty Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative overflow-hidden"
          style={{
            padding: 'clamp(48px, 8vw, 80px) 32px',
            borderRadius: 'var(--radius-xl)',
            background: 'linear-gradient(135deg, #0A2540 0%, #002366 60%, #0A2540 100%)',
            marginBottom: 80,
          }}
        >
          {/* Decorative floats */}
          <div className="ufo-float absolute hidden md:block" style={{ top: 30, left: 40, opacity: 0.1 }}>
            <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
              <path d="M30 5L55 30L30 55L5 30L30 5Z" stroke="#D4AF37" strokeWidth="2" />
            </svg>
          </div>
          <div className="ufo-float-reverse absolute hidden md:block" style={{ bottom: 30, right: 40, opacity: 0.1 }}>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none">
              <circle cx="25" cy="25" r="22" stroke="#FF6B35" strokeWidth="2" strokeDasharray="4 4" />
            </svg>
          </div>

          <div className="relative z-10">
            <div
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full"
              style={{
                background: 'rgba(212, 175, 55, 0.15)',
                border: '1px solid rgba(212, 175, 55, 0.3)',
                marginBottom: 24,
              }}
            >
              <Shield className="w-4 h-4" style={{ color: '#D4AF37' }} />
              <span style={{ color: '#D4AF37', fontSize: 14, fontWeight: 600 }}>Our Promise</span>
            </div>

            <h2
              className="font-display font-bold text-white"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                lineHeight: 1.1,
                marginBottom: 16,
              }}
            >
              Our 3-Year Ironclad Warranty
            </h2>
            <p
              style={{
                color: 'rgba(255,255,255,0.6)',
                fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
                maxWidth: 560,
                margin: '0 auto',
                lineHeight: 1.7,
              }}
            >
              Every project is backed by our comprehensive warranty covering peeling,
              cracking, and fading. Your satisfaction isn't just guaranteed—it's warranted.
            </p>
          </div>
        </motion.div>

        {/* USP Grid */}
        <div
          className="grid gap-6"
          style={{
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            marginBottom: 80,
          }}
        >
          {usps.map((usp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="text-center"
              style={{ padding: '32px 24px' }}
            >
              <div
                className="flex items-center justify-center mx-auto"
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--border-subtle)',
                  color: 'var(--text-accent)',
                  marginBottom: 20,
                }}
              >
                {usp.icon}
              </div>
              <h3
                className="font-display font-bold"
                style={{ fontSize: 20, marginBottom: 8, color: 'var(--text-primary)' }}
              >
                {usp.title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Carousel */}
        <div>
          <div className="text-center" style={{ marginBottom: 48 }}>
            <div className="flex justify-center gap-1" style={{ marginBottom: 16 }}>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5" style={{ fill: '#D4AF37', color: '#D4AF37' }} />
              ))}
            </div>
            <h3
              className="font-display font-bold"
              style={{
                fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                color: 'var(--text-primary)',
                marginBottom: 8,
              }}
            >
              Trusted by North Texas Homeowners
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: 15 }}>
              Real reviews from verified customers
            </p>
          </div>

          <div
            className="relative"
            style={{ maxWidth: 720, margin: '0 auto' }}
            onMouseEnter={() => setAutoplay(false)}
            onMouseLeave={() => setAutoplay(true)}
          >
            <div className="overflow-hidden" style={{ borderRadius: 'var(--radius-xl)', minHeight: 280 }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIdx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card"
                  style={{
                    padding: 'clamp(28px, 5vw, 48px)',
                    background: 'var(--bg-secondary)',
                    border: '1px solid var(--border-subtle)',
                  }}
                >
                  <div className="flex gap-1" style={{ marginBottom: 20 }}>
                    {[...Array(testimonials[activeIdx].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4" style={{ fill: '#D4AF37', color: '#D4AF37' }} />
                    ))}
                  </div>
                  <p
                    style={{
                      fontSize: 'clamp(0.95rem, 1.6vw, 1.1rem)',
                      lineHeight: 1.8,
                      color: 'var(--text-primary)',
                      marginBottom: 28,
                      fontStyle: 'italic',
                    }}
                  >
                    "{testimonials[activeIdx].text}"
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div
                        className="font-display font-bold"
                        style={{ fontSize: 18, color: 'var(--text-primary)' }}
                      >
                        {testimonials[activeIdx].name}
                      </div>
                      <div style={{ fontSize: 14, color: 'var(--text-tertiary)' }}>
                        {testimonials[activeIdx].location}
                      </div>
                    </div>
                    <div
                      className="flex items-center gap-2 px-4 py-2 rounded-full"
                      style={{
                        background: 'var(--border-subtle)',
                        fontSize: 13,
                        fontWeight: 600,
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Painter: {testimonials[activeIdx].painter}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4" style={{ marginTop: 28 }}>
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex items-center justify-center rounded-full transition-all hover:scale-110"
                style={{
                  width: 44,
                  height: 44,
                  background: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className="rounded-full transition-all"
                    style={{
                      width: activeIdx === i ? 28 : 10,
                      height: 10,
                      background: activeIdx === i ? '#FF6B35' : 'var(--border-medium)',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="flex items-center justify-center rounded-full transition-all hover:scale-110"
                style={{
                  width: 44,
                  height: 44,
                  background: 'var(--border-subtle)',
                  color: 'var(--text-primary)',
                }}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
