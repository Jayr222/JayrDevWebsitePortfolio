import { motion } from 'framer-motion';
import { ArrowDownToLine } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';
import { socials } from '../../data/socials';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <Container className="relative grid min-h-[500px] items-center gap-8 pb-6 lg:grid-cols-[0.95fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <h1 className="max-w-2xl font-serif text-5xl font-black leading-[0.98] sm:text-6xl lg:text-[4.6rem]">
            Hello, I&apos;m <span className="text-green">Jayr!</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-6 text-ink/78">
            I design and build digital experiences that are beautiful, functional, and user-centered.
            I create responsive websites, full-stack apps, and AI-powered automation systems.
            Let&apos;s build something meaningful together.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#projects" className="min-h-12 rounded-lg px-7">
              View Projects
            </Button>
            <Button href="#contact" variant="outline" icon={ArrowDownToLine} className="border-0 bg-transparent">
              Download CV
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="mr-2 text-xs font-semibold text-ink">Find me on</span>
            {socials.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noreferrer' : undefined}
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-white/45 transition hover:-translate-y-1 hover:border-gold hover:bg-gold"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto h-[390px] w-full max-w-[430px]"
        >
          <div className="pointer-events-none absolute left-2 top-40 z-[12] hidden w-[340px] select-none overflow-hidden font-serif text-[3.35rem] font-black leading-[0.84] text-green opacity-75 drop-shadow-[0_8px_18px_rgba(15,45,31,0.18)] [-webkit-text-stroke:1px_#173F2A] lg:block">
            <span className="hero-outline-type block">DESIGN</span>
            <span className="hero-outline-type hero-outline-type-delay-1 block">DEVELOP</span>
            <span className="hero-outline-type hero-outline-type-delay-2 block">CREATE</span>
          </div>
          <img
            src="/images/avatar.png"
            alt="Jayr Agamata portrait"
            className="absolute bottom-0 right-6 z-10 h-[330px] w-[270px] object-cover object-[50%_18%] grayscale"
          />
        </motion.div>
      </Container>
      <div className="border-t border-line" />
    </section>
  );
}
