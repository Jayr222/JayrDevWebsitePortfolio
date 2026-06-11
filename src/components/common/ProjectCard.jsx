import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  const isExternal = project.link?.startsWith('http');

  return (
    <motion.article
      initial={{ opacity: 0, y: 42, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.68, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      className="group overflow-hidden rounded-xl border border-line bg-[#f8f1e6]"
    >
      <div className="p-4">
        <div className="relative h-52 overflow-hidden rounded-lg bg-cream">
          {project.video ? (
            <video
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              muted
              loop
              playsInline
              preload="metadata"
              poster={project.image}
              controls
            >
              <source src={project.video} type="video/mp4" />
            </video>
          ) : project.image ? (
            <img
              src={project.image}
              alt={`${project.displayTitle || project.title} screenshot`}
              className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <>
              <div className="absolute inset-4 rounded-md bg-cream/92 shadow-soft" />
              <div className="relative rounded-md border border-line bg-white/70 p-3">
                <div className="mb-3 h-3 w-20 rounded bg-ink/80" />
                <div className="grid grid-cols-[0.8fr_1fr] gap-3">
                  <div className="space-y-2">
                    <div className="h-20 rounded bg-green-deep/90" />
                    <div className="h-2 rounded bg-line" />
                    <div className="h-2 w-4/5 rounded bg-line" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="h-12 rounded bg-gold/35" />
                    <div className="h-12 rounded bg-orange/25" />
                    <div className="h-12 rounded bg-green/20" />
                    <div className="h-12 rounded bg-ink/10" />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="px-5 pb-5">
        <h3 className="font-serif text-xl font-black">{project.displayTitle || project.title}</h3>
        <p className="mt-1 text-xs font-semibold text-muted">{project.type}</p>
        <p className="mt-4 min-h-14 text-sm leading-6 text-muted">{project.description}</p>
        <div className="mt-4 flex items-end justify-between gap-4">
          <div className="flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((item) => (
              <span key={item} className="rounded border border-line px-2 py-1 text-[10px] text-muted">
                {item}
              </span>
            ))}
          </div>
          <a
            href={project.link}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noreferrer' : undefined}
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold bg-gold/20 text-ink transition group-hover:bg-gold"
            aria-label={`Open ${project.displayTitle || project.title}`}
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </motion.article>
  );
}
