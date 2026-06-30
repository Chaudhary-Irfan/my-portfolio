import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon, FileText } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';
import { useScrollTo } from '@/context/LenisContext';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { cn } from '@/lib/utils';
import logo from '@/Assets/logo1.png';

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme, isDark } = useTheme();
  const { scrollTo } = useScrollTo();
  const location = useLocation();
  const navigate = useNavigate();
  const menuRef = useRef<HTMLDivElement>(null);
  const isHome = location.pathname === '/';

  const activeSection = useScrollSpy(
    navLinks.map((l) => l.href),
    isHome
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (!href.startsWith('#')) return;

    if (!isHome) {
      navigate({ pathname: '/', hash: href.replace('#', '') });
      return;
    }

    scrollTo(href, { offset: -80 });
  };

  const isActive = (href: string) =>
    isHome && activeSection === href.replace('#', '');

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'py-2' : 'py-4'
      )}
    >
      <nav
        aria-label="Main navigation"
        className={cn(
          'mx-4 md:mx-8 max-w-5xl md:max-w-6xl md:mx-auto rounded-2xl px-4 md:px-6 py-3 transition-all duration-500',
          'bg-white/60 dark:bg-surface-card/60 backdrop-blur-2xl',
          'border border-plum/[0.08] dark:border-lime/[0.08]',
          scrolled ? 'shadow-glass dark:shadow-glass-dark' : ''
        )}
      >
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={logo} alt="Logo" className="h-8 w-8 rounded-lg object-cover" />
            <span className="font-display font-bold text-gray-900 dark:text-white group-hover:text-plum dark:group-hover:text-lime transition-colors">
              Irfan
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                {isHome ? (
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      'relative px-3 py-2 text-sm font-medium rounded-xl transition-colors',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime',
                      isActive(link.href)
                        ? 'text-plum dark:text-lime'
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                    )}
                  >
                    {link.label}
                    {isActive(link.href) && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 rounded-full bg-plum dark:bg-lime"
                      />
                    )}
                  </button>
                ) : (
                  <Link
                    to={{ pathname: '/', hash: link.href.replace('#', '') }}
                    className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link
                to="/resume"
                className={cn(
                  'px-3 py-2 text-sm font-medium rounded-xl transition-colors flex items-center gap-1.5',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime',
                  location.pathname === '/resume'
                    ? 'text-plum dark:text-lime'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                )}
              >
                <FileText size={14} />
                Resume
              </Link>
            </li>
          </ul>

          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 text-gray-600 dark:text-gray-300 hover:text-plum dark:hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className="md:hidden p-2.5 rounded-xl text-gray-600 dark:text-gray-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-nav"
              ref={menuRef}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:hidden overflow-hidden"
            >
              <ul className="pt-4 pb-2 space-y-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        'w-full text-left px-4 py-3 text-sm font-medium rounded-xl transition-colors',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime',
                        isActive(link.href)
                          ? 'text-plum dark:text-lime bg-plum/5 dark:bg-lime/5'
                          : 'text-gray-600 dark:text-gray-400 hover:text-plum dark:hover:text-lime'
                      )}
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/resume"
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-plum dark:hover:text-lime rounded-xl"
                  >
                    Resume
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
