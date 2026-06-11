import { ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import Container from '../layout/Container';
import TestimonialCard from '../common/TestimonialCard';

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream pb-16 pt-10">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[1.6fr_0.7fr] lg:items-center">
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
          <div className="lg:text-right">
            <p className="text-xs font-bold uppercase tracking-[0.14em]">Testimonials</p>
            <h2 className="mt-5 font-serif text-4xl font-black">
              What <span className="text-green">Clients</span> Say
            </h2>
            <div className="mt-8 flex gap-3 lg:justify-end">
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-muted">
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink text-ink">
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
