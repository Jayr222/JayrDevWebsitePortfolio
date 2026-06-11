import { ArrowUp } from 'lucide-react';
import Container from './Container';

export default function Footer() {
  return (
    <footer className="mt-auto bg-ink py-4 text-cream">
      <Container className="flex min-h-12 flex-col gap-4 text-xs md:flex-row md:items-center md:justify-between">
        <a href="#home" className="flex items-center gap-2 font-serif text-base font-bold">
          Jayr Agamata
        </a>
        <p className="text-cream/55">© 2026 Jayr Agamata. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-5 md:gap-8">
          <a href="#contact" className="text-cream/60 hover:text-gold">
            Privacy Policy
          </a>
          <a href="#contact" className="text-cream/60 hover:text-gold">
            Terms of Use
          </a>
          <a
            href="#home"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-gold text-gold"
            aria-label="Back to top"
          >
            <ArrowUp className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </footer>
  );
}
