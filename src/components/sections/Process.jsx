import { motion } from 'framer-motion';
import { processSteps } from '../../data/process';
import Container from '../layout/Container';
import SectionLabel from '../common/SectionLabel';

export default function Process() {
  return (
    <section id="process" className="bg-green py-16 text-cream">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.35fr_0.8fr] lg:items-start">
          <div className="grid gap-3 md:grid-cols-2">
            {processSteps.map((item, index) => (
              <motion.article
                key={item.step}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg border border-cream/14 bg-white/[0.03] p-5"
              >
                <p className="text-sm font-bold text-gold">{item.step}</p>
                <h3 className="mt-4 font-serif text-2xl font-bold">{item.title}</h3>
                <p className="mt-3 text-xs leading-6 text-cream/68">{item.description}</p>
              </motion.article>
            ))}
          </div>
          <SectionLabel eyebrow="Process" title="How I Work" light className="lg:text-right" />
        </div>
      </Container>
    </section>
  );
}
