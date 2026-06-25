'use client';
import { cn } from '@/lib/utils';
import { InfiniteSlider } from './ui/infinite-slider';
import { ProgressiveBlur } from './ui/progressive-blur';
import { motion } from 'framer-motion';

const projects = [
  { name: 'MiCarteraPro', className: 'font-serif font-medium text-2xl tracking-wide', url: 'https://micarterapro.nmsdev.tech' },
  { name: 'Vellum.cl', className: 'font-serif italic text-3xl font-light', url: 'https://vellum.cl' },
  { name: 'Dental', src: '/logos/dental.png', url: 'https://dental.nmsdev.tech' },
  { name: 'Finance Pro', className: 'font-mono font-bold text-2xl tracking-tight', url: 'https://finance.nmsdev.tech' },
  { name: 'M2 Platform', src: '/logos/m2.svg', url: 'https://m2.nmsdev.tech' },
  { name: 'SPEEDRUN', src: '/logos/speedrun.png', url: 'https://speedrun.nmsdev.tech' },
  { name: 'PortalTI', src: '/logos/portalti.png' },
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
            Casos de Éxito
          </p>
          <h2 className="font-black text-2xl text-white tracking-tight md:text-3xl">
            Proyectos que hemos <span className="gradient-text">Impulsado</span>
          </h2>
        </motion.div>

        <div className="relative mx-auto max-w-4xl py-6 border-y border-white/[0.05]">
          <InfiniteSlider gap={60} reverse duration={40} durationOnHover={20}>
            {projects.map((project) => (
              <a 
                key={`logo-${project.name}`} 
                href={project.url || '#'}
                target={project.url ? "_blank" : "_self"}
                rel={project.url ? "noopener noreferrer" : ""}
                className="flex items-center justify-center h-12 px-6 opacity-60 hover:opacity-100 transition-opacity select-none cursor-pointer"
              >
                {project.src ? (
                  <img
                    alt={project.name}
                    src={project.src}
                    className="max-h-12 w-auto object-contain pointer-events-none"
                  />
                ) : (
                  <span className={cn('text-white whitespace-nowrap', project.className)}>
                    {project.name}
                  </span>
                )}
              </a>
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
