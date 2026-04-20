import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Upload, Home, Building2, Factory, PaintBucket, DoorOpen, Palette, Fence, CheckCircle } from 'lucide-react';

const steps = [
  {
    title: 'Property Type',
    subtitle: 'What type of property needs painting?',
  },
  {
    title: 'Project Scope',
    subtitle: 'Tell us about your project',
  },
  {
    title: 'Get Your Estimate',
    subtitle: 'Just a few details and we\'ll reach out',
  },
];

const propertyTypes = [
  { label: 'Residential', icon: <Home className="w-6 h-6" />, value: 'residential' },
  { label: 'Commercial', icon: <Building2 className="w-6 h-6" />, value: 'commercial' },
  { label: 'Industrial', icon: <Factory className="w-6 h-6" />, value: 'industrial' },
];

const projectScopes = [
  { label: 'Interior Painting', icon: <PaintBucket className="w-5 h-5" />, value: 'interior' },
  { label: 'Exterior Painting', icon: <DoorOpen className="w-5 h-5" />, value: 'exterior' },
  { label: 'Cabinets', icon: <Palette className="w-5 h-5" />, value: 'cabinets' },
  { label: 'Deck / Fence', icon: <Fence className="w-5 h-5" />, value: 'decks' },
];

const timelines = [
  'As soon as possible',
  'Within 2 weeks',
  'Within a month',
  'Just exploring',
];

export default function MultiStepModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    propertyType: '',
    scopes: [] as string[],
    name: '',
    email: '',
    phone: '',
    timeline: '',
    photos: null as FileList | null,
  });
  const [submitted, setSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const canProceed = () => {
    if (step === 0) return formData.propertyType !== '';
    if (step === 1) return formData.scopes.length > 0;
    if (step === 2) return formData.name && formData.phone;
    return false;
  };

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1);
    } else {
      // Submit
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const toggleScope = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      scopes: prev.scopes.includes(value)
        ? prev.scopes.filter((s) => s !== value)
        : [...prev.scopes, value],
    }));
  };

  const reset = () => {
    setStep(0);
    setFormData({ propertyType: '', scopes: [], name: '', email: '', phone: '', timeline: '', photos: null });
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ padding: 16 }}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0"
            style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)' }}
            onClick={reset}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="glass-modal relative w-full"
            style={{
              maxWidth: 520,
              maxHeight: '90vh',
              overflowY: 'auto',
              background: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {/* Close button */}
            <button
              onClick={reset}
              className="absolute flex items-center justify-center rounded-full transition-all hover:scale-110"
              style={{
                top: 16,
                right: 16,
                width: 36,
                height: 36,
                background: 'var(--border-subtle)',
                color: 'var(--text-primary)',
                zIndex: 10,
              }}
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div style={{ padding: 'clamp(24px, 5vw, 40px)' }}>
              {!submitted ? (
                <>
                  {/* Progress bar */}
                  <div className="progress-bar" style={{ marginBottom: 32 }}>
                    <div
                      className="progress-fill"
                      style={{ width: `${((step + 1) / 3) * 100}%` }}
                    />
                  </div>

                  {/* Step indicator */}
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 13, color: 'var(--text-tertiary)', fontWeight: 500 }}>
                      Step {step + 1} of 3
                    </span>
                  </div>

                  <h3
                    className="font-display font-bold"
                    style={{ fontSize: 24, color: 'var(--text-primary)', marginBottom: 4 }}
                  >
                    {steps[step].title}
                  </h3>
                  <p style={{ fontSize: 15, color: 'var(--text-secondary)', marginBottom: 32 }}>
                    {steps[step].subtitle}
                  </p>

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                    >
                      {/* Step 1: Property Type */}
                      {step === 0 && (
                        <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))' }}>
                          {propertyTypes.map((pt) => (
                            <button
                              key={pt.value}
                              onClick={() => setFormData({ ...formData, propertyType: pt.value })}
                              className="flex flex-col items-center gap-3 rounded-2xl transition-all"
                              style={{
                                padding: '28px 20px',
                                border: formData.propertyType === pt.value
                                  ? '2px solid #FF6B35'
                                  : '2px solid var(--border-subtle)',
                                background: formData.propertyType === pt.value
                                  ? 'rgba(255, 107, 53, 0.06)'
                                  : 'transparent',
                                color: 'var(--text-primary)',
                              }}
                              aria-label={`Select ${pt.label}`}
                            >
                              <div style={{ color: formData.propertyType === pt.value ? '#FF6B35' : 'var(--text-secondary)' }}>
                                {pt.icon}
                              </div>
                              <span className="font-semibold text-sm">{pt.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Step 2: Project Scope */}
                      {step === 1 && (
                        <div className="grid gap-3" style={{ gridTemplateColumns: '1fr 1fr' }}>
                          {projectScopes.map((ps) => (
                            <button
                              key={ps.value}
                              onClick={() => toggleScope(ps.value)}
                              className="flex items-center gap-3 rounded-xl transition-all text-left"
                              style={{
                                padding: '18px 20px',
                                border: formData.scopes.includes(ps.value)
                                  ? '2px solid #FF6B35'
                                  : '2px solid var(--border-subtle)',
                                background: formData.scopes.includes(ps.value)
                                  ? 'rgba(255, 107, 53, 0.06)'
                                  : 'transparent',
                                color: 'var(--text-primary)',
                              }}
                              aria-label={`Toggle ${ps.label}`}
                            >
                              <div style={{ color: formData.scopes.includes(ps.value) ? '#FF6B35' : 'var(--text-secondary)' }}>
                                {ps.icon}
                              </div>
                              <span className="font-medium text-sm">{ps.label}</span>
                            </button>
                          ))}
                        </div>
                      )}

                      {/* Step 3: Contact Details */}
                      {step === 2 && (
                        <div className="flex flex-col gap-4">
                          <div>
                            <label className="block text-sm font-medium" style={{ color: 'var(--text-secondary)', marginBottom: 6 }}>
                              Full Name *
                            </label>
                            <input
                              type="text"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Smith"
                              className="w-full rounded-xl outline-none transition-all"
                              style={{
                                padding: '14px 18px',
                                fontSize: 15,
                                border: '2px solid var(--border-subtle)',
                                background: 'var(--bg-secondary)',
                                color: 'var(--text-primary)',
                              }}
                              aria-label="Full name"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium" style={{ color: 'var(--text-secondary)', marginBottom: 6 }}>
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              placeholder="(972) 904-5132"
                              className="w-full rounded-xl outline-none transition-all"
                              style={{
                                padding: '14px 18px',
                                fontSize: 15,
                                border: '2px solid var(--border-subtle)',
                                background: 'var(--bg-secondary)',
                                color: 'var(--text-primary)',
                              }}
                              aria-label="Phone number"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium" style={{ color: 'var(--text-secondary)', marginBottom: 6 }}>
                              Email (optional)
                            </label>
                            <input
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@example.com"
                              className="w-full rounded-xl outline-none transition-all"
                              style={{
                                padding: '14px 18px',
                                fontSize: 15,
                                border: '2px solid var(--border-subtle)',
                                background: 'var(--bg-secondary)',
                                color: 'var(--text-primary)',
                              }}
                              aria-label="Email address"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium" style={{ color: 'var(--text-secondary)', marginBottom: 6 }}>
                              Timeline
                            </label>
                            <select
                              value={formData.timeline}
                              onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                              className="w-full rounded-xl outline-none"
                              style={{
                                padding: '14px 18px',
                                fontSize: 15,
                                border: '2px solid var(--border-subtle)',
                                background: 'var(--bg-secondary)',
                                color: formData.timeline ? 'var(--text-primary)' : 'var(--text-tertiary)',
                              }}
                              aria-label="Project timeline"
                            >
                              <option value="">Select timeline...</option>
                              {timelines.map((t) => (
                                <option key={t} value={t}>{t}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <input
                              ref={fileInputRef}
                              type="file"
                              accept="image/*"
                              multiple
                              className="hidden"
                              onChange={(e) => setFormData({ ...formData, photos: e.target.files })}
                              aria-label="Upload photos"
                            />
                            <button
                              onClick={() => fileInputRef.current?.click()}
                              className="w-full flex items-center justify-center gap-2 rounded-xl transition-all"
                              style={{
                                padding: '14px 18px',
                                border: '2px dashed var(--border-medium)',
                                color: 'var(--text-secondary)',
                                fontSize: 14,
                                fontWeight: 500,
                              }}
                            >
                              <Upload className="w-4 h-4" />
                              {formData.photos
                                ? `${formData.photos.length} photo(s) selected`
                                : 'Upload photos of your space (optional)'}
                            </button>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation */}
                  <div className="flex items-center justify-between" style={{ marginTop: 32 }}>
                    <button
                      onClick={handleBack}
                      className="text-sm font-medium transition-opacity"
                      style={{
                        color: 'var(--text-secondary)',
                        opacity: step === 0 ? 0 : 1,
                        pointerEvents: step === 0 ? 'none' : 'auto',
                      }}
                    >
                      ← Back
                    </button>
                    <button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="btn-cta flex items-center gap-2 transition-all"
                      style={{
                        padding: '14px 28px',
                        fontSize: 15,
                        opacity: canProceed() ? 1 : 0.4,
                        cursor: canProceed() ? 'pointer' : 'not-allowed',
                      }}
                    >
                      <span className="flex items-center gap-2">
                        {step === 2 ? 'Submit Request' : 'Continue'}
                        <ChevronRight className="w-4 h-4" />
                      </span>
                    </button>
                  </div>
                </>
              ) : (
                /* Success state */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                  style={{ padding: '40px 0' }}
                >
                  <div
                    className="flex items-center justify-center mx-auto"
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: '50%',
                      background: 'rgba(34, 197, 94, 0.1)',
                      marginBottom: 24,
                    }}
                  >
                    <CheckCircle className="w-10 h-10" style={{ color: '#22C55E' }} />
                  </div>
                  <h3
                    className="font-display font-bold"
                    style={{ fontSize: 24, color: 'var(--text-primary)', marginBottom: 12 }}
                  >
                    Request Submitted!
                  </h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: 32, lineHeight: 1.7 }}>
                    Thank you, {formData.name}! Our team will contact you within
                    24 hours to schedule your free estimate.
                  </p>
                  <button onClick={reset} className="btn-cta" style={{ padding: '14px 32px', fontSize: 15 }}>
                    <span>Done</span>
                  </button>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
