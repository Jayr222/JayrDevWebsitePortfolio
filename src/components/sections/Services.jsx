import { motion } from 'framer-motion';
import { Bot, Code2, MonitorSmartphone, ShoppingBag } from 'lucide-react';
import { services } from '../../data/services';
import Container from '../layout/Container';
import SectionLabel from '../common/SectionLabel';

const serviceIcons = [Code2, MonitorSmartphone, Bot, ShoppingBag];

export default function Services() {
  return (
    <section id="services" className="border-t border-line bg-cream py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.4fr] lg:items-end">
          <SectionLabel eyebrow="Services" title="What I Can Build" />
          <p className="max-w-2xl text-sm leading-7 text-muted">
            Practical digital work for businesses and founders who need interfaces that look sharp,
            work reliably, and support real workflows.
          </p>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = serviceIcons[index];

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 38, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg border border-line bg-white/35 p-5 transition hover:-translate-y-1 hover:border-gold hover:shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-green text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-bold text-green">{service.title}</h3>
                <p className="mt-3 text-xs leading-6 text-muted">{service.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {service.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-line bg-cream/70 px-3 py-1 text-[10px] font-semibold text-ink"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
