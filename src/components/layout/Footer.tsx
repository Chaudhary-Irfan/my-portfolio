import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { profile, socialLinks } from '@/data';
import { Reveal } from '@/components/ui/Reveal';
import { useScrollTo } from '@/context/LenisContext';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: '/resume', route: true },
];

export function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const { scrollTo } = useScrollTo();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleHashClick = (e: React.MouseEvent, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    if (isHome) {
      scrollTo(href, { offset: -80 });
    }
  };

  return (
    <footer className="relative border-t border-plum/[0.06] dark:border-lime/[0.06] bg-white/50 dark:bg-surface-dark/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="font-display font-bold text-xl text-gray-900 dark:text-white mb-3">
                {profile.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-4">
                Crafting premium digital experiences with modern technologies.
              </p>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: socialLinks.github, label: 'GitHub' },
                  { icon: Linkedin, href: socialLinks.linkedin, label: 'LinkedIn' },
                  { icon: MessageCircle, href: socialLinks.whatsapp, label: 'WhatsApp' },
                  { icon: Mail, href: socialLinks.email, label: 'Email' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-2.5 rounded-xl bg-gray-100/80 dark:bg-surface-card/80 text-gray-500 dark:text-gray-400 hover:text-plum dark:hover:text-lime hover:-translate-y-0.5 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum dark:focus-visible:ring-lime"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                Navigation
              </h4>
              <ul className="space-y-2">
                {footerLinks.map((link) => (
                  <li key={link.label}>
                    {'route' in link && link.route ? (
                      <Link
                        to={link.href}
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-plum dark:hover:text-lime transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={isHome ? link.href : `/${link.href}`}
                        onClick={(e) => handleHashClick(e, link.href)}
                        className="text-sm text-gray-500 dark:text-gray-400 hover:text-plum dark:hover:text-lime transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wider">
                Contact
              </h4>
              <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
                <li>{profile.email}</li>
                <li>{profile.location}</li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  {profile.availability}
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        <div className="mt-12 pt-8 border-t border-plum/[0.06] dark:border-lime/[0.06] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {year} {profile.name}. All rights reserved.
          </p>
          <p className="text-sm text-gray-400">
            Designed & engineered with precision.
          </p>
        </div>
      </div>

      <motion.button
        onClick={() => scrollTo(0)}
        aria-label="Scroll to top"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: showTop ? 1 : 0, scale: showTop ? 1 : 0.8 }}
        className="fixed bottom-8 right-8 z-40 p-3 rounded-2xl bg-plum dark:bg-lime text-white dark:text-gray-900 shadow-glow-plum dark:shadow-glow hover:-translate-y-1 transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-plum dark:focus-visible:ring-lime"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
}
