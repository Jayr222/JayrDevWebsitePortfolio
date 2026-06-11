import { motion } from 'framer-motion';
import { ArrowDownToLine, CheckCircle2 } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';
import { socials } from '../../data/socials';

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-20">
      <Container className="relative grid min-h-[500px] items-center gap-8 pb-6 lg:grid-cols-[0.95fr_0.9fr]">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10"
        >
          <h1 className="max-w-2xl font-serif text-5xl font-black leading-[0.94] sm:text-6xl lg:text-[4.25rem]">
            Hello, I&apos;m <span className="text-green">Jayr!</span>
            <br />
            I Build Digital Experiences.
          </h1>
          <p className="mt-5 max-w-lg text-[13px] leading-6 text-ink/78">
            I design and develop responsive websites, full-stack web apps, e-commerce experiences,
            and AI-powered automation systems that help businesses work faster, look better, and
            operate smarter.
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
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative mx-auto h-[350px] w-full max-w-[360px]"
        >
          <div className="pointer-events-none absolute -left-24 top-32 z-0 hidden select-none font-serif text-[3.55rem] font-black leading-[0.84] text-transparent [-webkit-text-stroke:1px_#E5DCCB] lg:block">
            DESIGN
            <br />
            DEVELOP
            <br />
            CREATE
          </div>
          <div className="absolute left-3 top-20 z-20 rounded-xl border border-line bg-cream/95 p-3 shadow-soft">
            <p className="font-serif text-2xl font-black leading-none">3+</p>
            <p className="mt-1.5 text-[10px] font-semibold text-muted">Years Building</p>
          </div>
          <div className="absolute right-8 top-[240px] z-20 flex items-center gap-2 rounded-xl bg-gold px-4 py-3 text-[10px] font-bold text-ink shadow-soft">
            <CheckCircle2 className="h-4 w-4 fill-green text-green" />
            <span>
              Available for
              <br />
              Freelance
            </span>
          </div>
          <div className="absolute bottom-0 right-8 h-[295px] w-[245px] overflow-visible rounded-t-full bg-green">
            <div className="absolute inset-x-0 bottom-0 h-[260px] rounded-t-full bg-[#244F36]" />
            <div className="absolute inset-0 rounded-t-full bg-gradient-to-t from-green-deep/20 via-transparent to-transparent" />
          </div>
          <img
            src="/images/avatar-no-background.png"
            alt="Jayr Agamata portrait"
            className="absolute bottom-[42px] right-[-12px] z-10 h-[395px] w-[310px] object-contain object-bottom grayscale"
          />
        </motion.div>
      </Container>
      <div className="border-t border-line" />
    </section>
  );
}
