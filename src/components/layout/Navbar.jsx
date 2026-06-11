import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Container from './Container';
import Button from '../common/Button';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/90 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-2 font-serif text-lg font-bold">
          Jayr Agamata
        </a>
        <nav className="hidden items-center gap-8 text-xs font-semibold lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-orange">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden lg:block">
          <Button href="#contact" variant="gold" className="min-h-10 px-4 text-xs">
            Contact Me
          </Button>
        </div>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line lg:hidden"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>
      {open ? (
        <div className="border-t border-line bg-cream lg:hidden">
          <Container className="grid gap-2 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-semibold hover:bg-white/60"
              >
                {link.label}
              </a>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
