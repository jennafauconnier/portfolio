import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import HeroSection from '@/components/HeroSection';
import { getAllProjects } from '@/lib/projects';

export default function Home() {
  const projects = getAllProjects();

  return (
    <>
      <HeroSection />
      <About />
      <Skills />
      <Projects projects={projects} />
      <Contact />
    </>
  );
}