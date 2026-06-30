import { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import pdf from '@/Assets/ChaudharyIrfan.pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export function ResumePage() {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [width, setWidth] = useState(800);

  useEffect(() => {
    const updateWidth = () => setWidth(Math.min(window.innerWidth - 48, 900));
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  return (
    <div className="min-h-screen pt-28 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-plum dark:hover:text-lime transition-colors mb-3"
              >
                <ArrowLeft size={16} /> Back to home
              </Link>
              <h1 className="font-display font-bold text-3xl md:text-4xl text-gray-900 dark:text-white">
                Resume
              </h1>
            </div>
            <Button href={pdf} variant="primary">
              <Download size={18} /> Download CV
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="rounded-2xl overflow-hidden border border-plum/10 dark:border-lime/10 shadow-float bg-white dark:bg-surface-card">
            <Document
              file={pdf}
              onLoadSuccess={({ numPages: n }) => setNumPages(n)}
              loading={
                <div className="flex items-center justify-center py-32">
                  <div className="w-8 h-8 border-2 border-plum dark:border-lime border-t-transparent rounded-full animate-spin" />
                </div>
              }
              error={
                <div className="text-center py-16 text-gray-500">
                  Failed to load PDF.{' '}
                  <a href={pdf} className="text-plum dark:text-lime underline">
                    Download instead
                  </a>
                </div>
              }
            >
              {numPages &&
                Array.from({ length: numPages }, (_, i) => (
                  <Page
                    key={i + 1}
                    pageNumber={i + 1}
                    width={width}
                    renderTextLayer={false}
                    className="mx-auto"
                  />
                ))}
            </Document>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
