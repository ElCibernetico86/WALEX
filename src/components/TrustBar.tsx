import { Star } from 'lucide-react';

const accreditations = [
  { name: 'BBB A+ Rated', abbrev: 'BBB' },
  { name: "Angie's List", abbrev: 'AL' },
  { name: 'Sherwin Williams Preferred', abbrev: 'SW' },
  { name: 'Google Guaranteed', abbrev: 'GG' },
];

export default function TrustBar() {
  return (
    <section
      aria-label="Accreditations and reviews"
      style={{
        background: 'var(--bg-secondary)',
        borderBottom: '1px solid var(--border-subtle)',
      }}
    >
      <div
        className="max-container flex flex-col md:flex-row items-center justify-between gap-6"
        style={{ padding: '24px' }}
      >
        {/* Accreditation logos */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 md:gap-8">
          {accreditations.map((acc) => (
            <div
              key={acc.abbrev}
              className="flex items-center gap-2"
              style={{ opacity: 0.5 }}
              title={acc.name}
            >
              <div
                className="flex items-center justify-center font-display font-bold"
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 'var(--radius-sm)',
                  border: '1.5px solid var(--border-medium)',
                  fontSize: 11,
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.05em',
                }}
              >
                {acc.abbrev}
              </div>
              <span
                className="hidden sm:inline text-xs font-medium"
                style={{ color: 'var(--text-tertiary)' }}
              >
                {acc.name}
              </span>
            </div>
          ))}
        </div>

        {/* Review aggregate */}
        <div className="flex items-center gap-3">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4"
                style={{ fill: '#D4AF37', color: '#D4AF37' }}
              />
            ))}
          </div>
          <span
            className="text-sm font-semibold"
            style={{ color: 'var(--text-primary)' }}
          >
            4.9/5
          </span>
          <span
            className="text-sm"
            style={{ color: 'var(--text-tertiary)' }}
          >
            based on 2,000+ Reviews
          </span>
        </div>
      </div>
    </section>
  );
}
