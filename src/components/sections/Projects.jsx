import { ArrowRight } from 'lucide-react';
import { projects } from '../../data/projects';
import Container from '../layout/Container';
import ProjectCard from '../common/ProjectCard';

export default function Projects() {
  return (
    <section id="projects" className="bg-cream pb-12 pt-16">
      <Container>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em]">My Work</p>
            <h2 className="mt-5 font-serif text-5xl font-black">
              Featured <span className="text-green">Projects</span>
            </h2>
          </div>
          <a href="#contact" className="hidden items-center gap-3 text-xs font-bold md:flex">
            View All Projects
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink">
              <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        </div>
        <div className="mt-8 grid gap-7 md:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
}
