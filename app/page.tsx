import HeroSection from './components/HeroSection'
import AboutSection from "@/app/components/AboutSection";
import ProjectsSection from "@/app/components/ProjectSection";


export default function Home() {
  return (
      <main className="flex min-h-screen flex-col bg-blue-950">
          <div className='container mt-24 mx-auto px-12 py-4'>
              <HeroSection/>
              <AboutSection/>
              <ProjectsSection/>
          </div>



      </main>
  );
}
