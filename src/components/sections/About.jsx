import { motion } from 'framer-motion';
import { Mail, MapPin, UserRound } from 'lucide-react';
import Container from '../layout/Container';
import Button from '../common/Button';

export default function About() {
  return (
    <section id="about" className="border-b border-line bg-cream py-8">
      <Container className="grid gap-8 lg:grid-cols-[230px_0.75fr_1fr_240px] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-48 overflow-hidden rounded-2xl bg-[#d9c7aa] shadow-soft"
        >
          <img
            src="/images/avatar.png"
            alt="Jayr Agamata portrait"
            className="h-full w-full object-cover object-[50%_18%] grayscale"
          />
        </motion.div>
        <div>
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.16em]">About Me</p>
          <h2 className="font-serif text-3xl font-black leading-[1.05]">
            I&apos;m a Developer
            <br />
            Who Designs
          </h2>
          <Button href="#contact" className="mt-6 min-h-11 rounded-lg px-6 text-xs">
            More About Me
          </Button>
        </div>
        <p className="max-w-lg text-sm leading-6 text-ink/72">
          I specialize in full-stack development and UI/UX-focused web building, blending creative
          design with practical logic to craft intuitive, impactful digital products. I care about
          details, performance, and creating systems that help businesses move faster.
        </p>
        <div className="rounded-2xl border border-line bg-[#f2eadc] p-6">
          {[
            { icon: UserRound, label: 'Name', value: 'Jayr Agamata' },
            { icon: MapPin, label: 'Focus', value: 'Web Apps & AI Automation' },
            { icon: Mail, label: 'Email', value: 'jayragamata68@gmail.com' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4 py-4 first:pt-0 last:pb-0">
              <Icon className="mt-1 h-5 w-5 text-green" />
              <div>
                <p className="text-xs text-muted">{label}:</p>
                <p className="mt-1 text-xs font-semibold">{value}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
