import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      className="relative w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        background: theme === 'light' ? 'var(--border-subtle)' : 'rgba(255,255,255,0.08)',
      }}
    >
      <div
        className="transition-transform duration-500"
        style={{ transform: theme === 'dark' ? 'rotate(180deg)' : 'rotate(0deg)' }}
      >
        {theme === 'light' ? (
          <Moon className="w-5 h-5" style={{ color: 'var(--text-primary)' }} />
        ) : (
          <Sun className="w-5 h-5" style={{ color: '#D4AF37' }} />
        )}
      </div>
    </button>
  );
}
