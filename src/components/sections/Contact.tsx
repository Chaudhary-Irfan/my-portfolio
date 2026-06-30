import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageCircle, Send, CheckCircle, Clock, MapPin } from 'lucide-react';
import { profile, socialLinks } from '@/data';
import { Section, SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Reveal } from '@/components/ui/Reveal';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Invalid email';
  if (!data.message.trim()) errors.message = 'Message is required';
  else if (data.message.trim().length < 10) errors.message = 'Message must be at least 10 characters';
  return errors;
}

export function Contact() {
  const [form, setForm] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (touched[field]) {
      setErrors(validate({ ...form, [field]: value }));
    }
  };

  const handleBlur = (field: keyof FormData) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors(validate(form));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(validationErrors).length === 0) {
      const subject = encodeURIComponent(`Project Inquiry from ${form.name}`);
      const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
      window.open(`mailto:${profile.email}?subject=${subject}&body=${body}`, '_blank');
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-surface-card/50 backdrop-blur border transition-all duration-300 outline-none text-gray-900 dark:text-white placeholder:text-gray-400 ${
      touched[field] && errors[field]
        ? 'border-red-400 focus:ring-2 focus:ring-red-400/30'
        : 'border-plum/10 dark:border-lime/10 focus:border-plum/40 dark:focus:border-lime/40 focus:ring-2 focus:ring-plum/20 dark:focus:ring-lime/20'
    }`;

  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading
          label="Contact"
          title="Let's Build"
          highlight="Together"
          description="Have a project in mind? I'd love to hear about it. Premium projects deserve premium execution."
        />
      </Reveal>

      <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
        <Reveal direction="right" className="lg:col-span-2">
          <div className="space-y-4">
            <GlassCard hover={false}>
              <Badge variant="success" pulse className="mb-4">
                {profile.availability}
              </Badge>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <Clock size={16} className="text-plum dark:text-lime" />
                  Response time: {profile.responseTime}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <MapPin size={16} className="text-plum dark:text-lime" />
                  {profile.location}
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-300">
                  <Mail size={16} className="text-plum dark:text-lime" />
                  {profile.email}
                </div>
              </div>
            </GlassCard>

            <div className="grid grid-cols-2 gap-4">
              <Button href={socialLinks.whatsapp} variant="secondary" className="w-full justify-center">
                <MessageCircle size={18} /> WhatsApp
              </Button>
              <Button href={socialLinks.email} variant="secondary" className="w-full justify-center">
                <Mail size={18} /> Email
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal direction="left" className="lg:col-span-3">
          <GlassCard className="relative overflow-hidden">
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-white/90 dark:bg-surface-card/90 backdrop-blur-xl rounded-2xl"
                >
                  <div className="text-center">
                    <CheckCircle size={48} className="mx-auto text-emerald-500 mb-4" />
                    <p className="font-display font-bold text-xl text-gray-900 dark:text-white">
                      Message Ready!
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                      Your email client should open shortly.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  onBlur={() => handleBlur('name')}
                  className={inputClass('name')}
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                />
                {touched.name && errors.name && (
                  <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  onBlur={() => handleBlur('email')}
                  className={inputClass('email')}
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                />
                {touched.email && errors.email && (
                  <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  onBlur={() => handleBlur('message')}
                  className={`${inputClass('message')} resize-none`}
                  placeholder="Tell me about your project..."
                  aria-invalid={!!errors.message}
                />
                {touched.message && errors.message && (
                  <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                )}
              </div>

              <Button type="submit" size="lg" className="w-full justify-center">
                <Send size={18} /> Send Message
              </Button>
            </form>
          </GlassCard>
        </Reveal>
      </div>
    </Section>
  );
}
