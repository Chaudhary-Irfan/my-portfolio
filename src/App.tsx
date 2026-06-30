import { lazy, Suspense, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import { LenisProvider } from '@/context/LenisContext';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Preloader } from '@/components/Preloader';
import { ScrollProgress } from '@/components/ui/ScrollProgress';
import { LandingPage } from '@/components/sections/LandingPage';

const ResumePage = lazy(() =>
  import('@/components/Resume/ResumePage').then((m) => ({ default: m.ResumePage }))
);

function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="w-8 h-8 border-2 border-plum dark:border-lime border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.3 }}
      >
        <Suspense fallback={<PageLoader />}>
          <Routes location={location}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/project" element={<Navigate to="/#projects" replace />} />
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/services" element={<Navigate to="/#services" replace />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

function AppContent() {
  return (
    <LenisProvider>
      <ScrollProgress />
      <Navbar />
      <AnimatedRoutes />
      <Footer />
    </LenisProvider>
  );
}

export default function App() {
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const minDelay = new Promise<void>((resolve) => setTimeout(resolve, 800));
    const pageReady =
      document.readyState === 'complete'
        ? Promise.resolve()
        : new Promise<void>((resolve) => window.addEventListener('load', () => resolve(), { once: true }));

    Promise.all([minDelay, pageReady]).then(() => setLoad(false));
  }, []);

  return (
    <ThemeProvider>
      <Router>
        <Preloader load={load} />
        <div
          className="min-h-screen bg-surface-light dark:bg-surface-dark text-gray-900 dark:text-gray-100 transition-colors duration-500 overflow-x-hidden"
          id={load ? 'no-scroll' : 'scroll'}
        >
          {!load && <AppContent />}
        </div>
      </Router>
    </ThemeProvider>
  );
}
