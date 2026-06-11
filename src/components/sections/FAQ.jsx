import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { faqs } from '../../data/faqs';
import Container from '../layout/Container';
import SectionLabel from '../common/SectionLabel';

export default function FAQ() {
  return (
    <section id="faq" className="border-t border-line bg-cream py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.35fr]">
          <SectionLabel eyebrow="FAQ" title="Before We Start" />
          <div className="grid gap-3">
            {faqs.map((item, index) => (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.62, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-lg border border-line bg-white/35 p-5"
              >
                <div className="flex gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-serif text-lg font-bold text-green">{item.question}</h3>
                    <p className="mt-2 text-xs leading-6 text-muted">{item.answer}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
