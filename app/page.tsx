import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { Hero } from "@/components/home/Hero"
import { About } from "@/components/home/About"
import { Experience } from "@/components/home/Experience"
import { ProjectsGrid } from "@/components/home/ProjectsGrid"
import { Skills } from "@/components/home/Skills"
import { Testimonials } from "@/components/home/Testimonials"
import { Contact } from "@/components/home/Contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none" />

        <Hero />
        <About />
        <Experience />
        <ProjectsGrid />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
