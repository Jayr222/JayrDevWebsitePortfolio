import { ArrowUpRight } from 'lucide-react';
import { projects } from '../../data/projects';
import Container from '../layout/Container';

const featuredCases = projects.slice(0, 3);

export default function CaseStudies() {
  return (
    <section id="case-studies" className="border-y border-line bg-[#fbf7ee] py-16">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.55fr_1fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em]">Case Studies</p>
            <h2 className="mt-5 font-serif text-4xl font-black leading-tight md:text-5xl">
              How The Work
              <br />
              Comes Together
            </h2>
          </div>
          <p className="max-w-2xl text-sm leading-7 text-muted">
            A closer look at the product thinking behind selected builds: the problem, the design
            decision, and the outcome each project is shaped around.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredCases.map((project, index) => (
            <article
              key={project.title}
              className="rounded-xl border border-line bg-cream p-5 shadow-[0_12px_40px_rgba(17,17,17,0.04)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-orange">
                    0{index + 1} / {project.type}
                  </p>
                  <h3 className="mt-3 font-serif text-2xl font-black">
                    {project.displayTitle || project.title}
                  </h3>
                </div>
                <a
                  href={project.link}
                  target={project.link.startsWith('http') ? '_blank' : undefined}
                  rel={project.link.startsWith('http') ? 'noreferrer' : undefined}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gold bg-gold/20 transition hover:bg-gold"
                  aria-label={`Open ${project.displayTitle || project.title}`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-6 grid gap-4 text-sm leading-6">
                <CaseRow label="Problem" value={project.caseStudy.problem} />
                <CaseRow label="Solution" value={project.caseStudy.solution} />
                <CaseRow label="Impact" value={project.caseStudy.impact} />
              </div>

              <div className="mt-6 rounded-lg border border-line bg-[#f3ebdc] px-4 py-3 text-xs font-semibold text-green">
                Role: {project.caseStudy.role}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CaseRow({ label, value }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-green">{label}</p>
      <p className="mt-1 text-muted">{value}</p>
    </div>
  );
}
