import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial, index = 0 }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="rounded-xl border border-line bg-[#f8f1e6] p-6"
    >
      <Quote className="h-9 w-9 fill-gold text-gold" />
      <p className="mt-6 min-h-24 text-xs leading-6 text-muted">{testimonial.quote}</p>
      <div className="mt-7 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green text-xs font-bold text-cream">
          {testimonial.name
            .split(' ')
            .map((part) => part[0])
            .join('')}
        </div>
        <div>
          <h3 className="text-xs font-bold">{testimonial.name}</h3>
          <p className="text-xs text-muted">{testimonial.role}</p>
        </div>
      </div>
    </motion.article>
  );
}
