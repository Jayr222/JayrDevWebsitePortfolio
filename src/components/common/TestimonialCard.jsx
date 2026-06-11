import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="rounded-xl border border-line bg-[#f8f1e6] p-6">
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
    </article>
  );
}
