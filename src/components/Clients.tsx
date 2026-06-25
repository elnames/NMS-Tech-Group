'use client';
import { cn } from '@/lib/utils';
import { InfiniteSlider } from './ui/infinite-slider';
import { ProgressiveBlur } from './ui/progressive-blur';
import { motion } from 'framer-motion';

const logos = [
  {
    src: 'https://svgl.app/library/nvidia-wordmark-light.svg',
    alt: 'Nvidia Logo',
  },
  {
    src: 'https://svgl.app/library/supabase_wordmark_light.svg',
    alt: 'Supabase Logo',
  },
  {
    src: 'https://svgl.app/library/openai_wordmark_light.svg',
    alt: 'OpenAI Logo',
  },
  {
    src: 'https://svgl.app/library/turso-wordmark-light.svg',
    alt: 'Turso Logo',
  },
  {
    src: 'https://svgl.app/library/vercel_wordmark.svg',
    alt: 'Vercel Logo',
  },
  {
    src: 'https://svgl.app/library/github_wordmark_light.svg',
    alt: 'GitHub Logo',
  },
  {
    src: 'https://svgl.app/library/claude-ai-wordmark-icon_light.svg',
    alt: 'Claude AI Logo',
  },
  {
    src: 'https://svgl.app/library/clerk-wordmark-light.svg',
    alt: 'Clerk Logo',
  },
];

export default function Clients() {
  return (
    <section className="relative py-20 bg-[#050505] overflow-hidden">
      <div
        aria-hidden="true"
        className={cn(
          '-top-1/2 -translate-x-1/2 pointer-events-none absolute left-1/2 h-[120vmin] w-[120vmin] rounded-b-full',
          'bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05),transparent_50%)]',
          'blur-[30px]'
        )}
      />
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center"
        >
          <p className="text-gray-400 font-medium text-sm tracking-widest uppercase mb-2">
            Nuestra Cartera
          </p>
          <h2 className="font-black text-2xl text-white tracking-tight md:text-3xl">
            Empresas y Tecnologías <span className="gradient-text">Top</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl py-6 border-y border-white/[0.05]">
          <InfiniteSlider gap={60} reverse duration={40} durationOnHover={20}>
            {logos.map((logo) => (
              <img
                alt={logo.alt}
                className="pointer-events-none h-6 select-none md:h-8 opacity-60 hover:opacity-100 transition-opacity"
                height="auto"
                key={`logo-${logo.alt}`}
                loading="lazy"
                src={logo.src}
                width="auto"
              />
            ))}
          </InfiniteSlider>

          <ProgressiveBlur
            blurIntensity={2}
            className="pointer-events-none absolute top-0 left-0 h-full w-[100px] md:w-[160px]"
            direction="right"
          />
          <ProgressiveBlur
            blurIntensity={2}
            className="pointer-events-none absolute top-0 right-0 h-full w-[100px] md:w-[160px]"
            direction="left"
          />
        </div>
      </div>
    </section>
  );
}
