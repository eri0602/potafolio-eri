"use client"

import { useState, useEffect, Suspense } from "react"
import { SectionLoader } from "@/components/SectionLoader"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { useInView } from "@/lib/useLazyLoad"

interface LazySectionProps {
  id: string
  children: React.ReactNode
  minHeight?: string
}

function LazySection({ id, children, minHeight = "min-h-[300px]" }: LazySectionProps) {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: "200px" })
  const [shouldRender, setShouldRender] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (inView) {
      setShouldRender(true)
    }
  }, [inView])

  if (!mounted) {
    return <div id={id} className={minHeight} />
  }

  return (
    <div id={id} ref={ref} className={minHeight}>
      {shouldRender ? (
        <Suspense fallback={<SectionLoader className={minHeight} />}>
          {children}
        </Suspense>
      ) : (
        <SectionLoader className={minHeight} />
      )}
    </div>
  )
}

export default function HomePage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="relative">
          <SectionLoader className="min-h-screen" />
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="relative">
        <div className="fixed inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none z-0" />

        <div id="hero">
          <LazySection id="hero-content" minHeight="min-h-screen">
            <section className="min-h-screen">
              {/* Hero content will be rendered here */}
            </section>
          </LazySection>
        </div>

        <LazySection id="about" minHeight="min-h-[400px]">
          <section id="about-section">
            {/* About content */}
          </section>
        </LazySection>

        <LazySection id="experience" minHeight="min-h-[400px]">
          <section id="experience-section">
            {/* Experience content */}
          </section>
        </LazySection>

        <LazySection id="projects" minHeight="min-h-[400px]">
          <section id="projects-section">
            {/* Projects content */}
          </section>
        </LazySection>

        <LazySection id="skills" minHeight="min-h-[400px]">
          <section id="skills-section">
            {/* Skills content */}
          </section>
        </LazySection>

        <LazySection id="testimonials" minHeight="min-h-[400px]">
          <section id="testimonials-section">
            {/* Testimonials content */}
          </section>
        </LazySection>

        <LazySection id="contact" minHeight="min-h-[400px]">
          <section id="contact-section">
            {/* Contact content */}
          </section>
        </LazySection>
      </main>
      <Footer />
    </div>
  )
}
