import {
  Bot,
  Barcode,
  Braces,
  BriefcaseBusiness,
  Clock3,
  Code2,
  Database,
  Download,
  Figma,
  Layers3,
  Network,
  Palette,
  Rocket,
  Server,
  ShoppingBag,
  Smartphone,
  Workflow,
} from 'lucide-react';
import { experience } from '../../data/experience';
import { skills } from '../../data/skills';
import Container from '../layout/Container';
import SkillPill from '../common/SkillPill';
import StatCard from '../common/StatCard';

const skillIcons = {
  React: Code2,
  'Next.js': Layers3,
  JavaScript: Braces,
  TypeScript: Braces,
  'Tailwind CSS': Palette,
  'Node.js': Server,
  'Express.js': Network,
  MongoDB: Database,
  PostgreSQL: Database,
  Shopify: ShoppingBag,
  Supabase: Database,
  Flutter: Smartphone,
  Dart: Code2,
  Python: Code2,
  'Barcode Scanning': Barcode,
  n8n: Workflow,
  'AI Agents': Bot,
  RAG: Bot,
  'UI/UX Design': Figma,
};

export default function Skills() {
  return (
    <section id="skills" className="bg-green py-14 text-cream">
      <Container className="grid gap-10 lg:grid-cols-[0.82fr_1.15fr_0.58fr]">
        <div>
          <p className="text-[11px] font-bold text-cream/80">What I Do</p>
          <h2 className="mt-4 font-serif text-4xl font-black leading-[0.98]">
            Skills &
            <br />
            <span className="text-gold">Expertise</span>
          </h2>
          <p className="mt-5 max-w-xs text-xs leading-6 text-cream/70">
            I combine design thinking with clean code to build user-friendly interfaces and
            seamless experiences.
          </p>
          <div className="mt-6 flex max-w-md flex-wrap gap-2">
            {skills.map((skill) => (
              <SkillPill key={skill} icon={skillIcons[skill]} light>
                {skill}
              </SkillPill>
            ))}
          </div>
          <a
            href="#projects"
            className="mt-8 inline-flex min-h-10 items-center justify-center rounded-md border border-gold px-5 text-xs font-bold text-gold transition hover:bg-gold hover:text-ink"
          >
            View All Skills
          </a>
        </div>

        <div>
          <p className="text-[11px] font-bold text-gold">Experience</p>
          <div className="relative mt-7 border-l border-gold/35 pl-10">
            {experience.map((item) => (
              <article key={item.role} className="relative pb-9 last:pb-0">
                <span className="absolute -left-[2.85rem] top-1 h-5 w-5 rotate-45 bg-orange" />
                <p className="text-xs text-cream/70">{item.period}</p>
                <h3 className="mt-1.5 font-serif text-xl font-bold leading-tight">{item.role}</h3>
                <p className="mt-1 text-xs font-semibold text-cream">{item.company}</p>
                <p className="mt-2 max-w-md text-xs leading-6 text-cream/65">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid content-start gap-4">
          <StatCard icon={Rocket} value="7" label="Projects Completed" highlighted />
          <StatCard icon={BriefcaseBusiness} value="4" label="Live Deployments" />
          <StatCard icon={Clock3} value="5+" label="Years Experience" light />
          <a
            href="#contact"
            className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md border border-gold px-5 text-xs font-bold text-gold transition hover:bg-gold hover:text-ink"
          >
            Download CV
            <Download className="h-3.5 w-3.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
