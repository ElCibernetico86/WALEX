import { useRef, useState, useCallback, useEffect } from 'react';
import { motion } from 'motion/react';

export default function BeforeAfterSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    updatePosition(e.clientX);
  }, [updatePosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => updatePosition(e.clientX);
    const handleTouchMove = (e: TouchEvent) => updatePosition(e.touches[0].clientX);
    const handleEnd = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleEnd);
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleEnd);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleEnd);
    };
  }, [isDragging, updatePosition]);

  return (
    <section
      id="before-after"
      className="section-padding"
      style={{ background: 'var(--bg-secondary)' }}
    >
      <div className="max-container">
        {/* Header */}
        <div className="text-center" style={{ marginBottom: 56 }}>
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
            Proof of Excellence
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
            See the Transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={{
              fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
              color: 'var(--text-secondary)',
              maxWidth: 480,
              margin: '0 auto',
              lineHeight: 1.7,
            }}
          >
            Slide to reveal the dramatic before and after of our professional work.
          </motion.p>
        </div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          style={{ maxWidth: 960, margin: '0 auto' }}
        >
          <div
            ref={containerRef}
            className="ba-slider"
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
            role="slider"
            aria-label="Before and after image comparison slider"
            aria-valuenow={Math.round(sliderPos)}
            aria-valuemin={0}
            aria-valuemax={100}
            tabIndex={0}
            style={{ aspectRatio: '16/10' }}
          >
            {/* After image (full background) */}
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200"
              alt="After: beautifully painted home"
              loading="lazy"
              referrerPolicy="no-referrer"
              width={1200}
              height={750}
              style={{ position: 'absolute', inset: 0 }}
            />

            {/* Before image (clipped) */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200"
                alt="Before: home exterior needing paint"
                loading="lazy"
                referrerPolicy="no-referrer"
                width={1200}
                height={750}
                style={{
                  position: 'absolute',
                  inset: 0,
                  filter: 'saturate(0.5) brightness(0.8)',
                }}
              />
            </div>

            {/* Labels */}
            <div
              style={{
                position: 'absolute',
                top: 20,
                left: 20,
                zIndex: 11,
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              Before
            </div>
            <div
              style={{
                position: 'absolute',
                top: 20,
                right: 20,
                zIndex: 11,
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                background: 'rgba(0,0,0,0.55)',
                backdropFilter: 'blur(8px)',
                color: '#fff',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              After
            </div>

            {/* Handle */}
            <div
              className="ba-handle"
              style={{ left: `${sliderPos}%`, transform: 'translateX(-50%)' }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: '#FFFFFF',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 4,
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M7 4L3 10L7 16" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 4L17 10L13 16" stroke="#0A2540" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Micro-copy */}
          <p
            className="text-center"
            style={{
              marginTop: 16,
              fontSize: 13,
              color: 'var(--text-tertiary)',
              fontStyle: 'italic',
            }}
          >
            ← Slide to reveal the transformation →
          </p>
        </motion.div>
      </div>
    </section>
  );
}
