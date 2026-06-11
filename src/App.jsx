import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import CaseStudies from './components/sections/CaseStudies';
import Testimonials from './components/sections/Testimonials';
import Services from './components/sections/Services';
import Process from './components/sections/Process';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import PortfolioChatbot from './components/common/PortfolioChatbot';
import useLenis from './hooks/useLenis';

export default function App() {
  useLenis();

  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-cream text-ink">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CaseStudies />
        <Testimonials />
        <Services />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <PortfolioChatbot />
    </div>
  );
}
