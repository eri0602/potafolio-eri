"use client"

import { motion } from "framer-motion"
import { ChevronDown, MessageCircle } from "lucide-react"
import { HeroProgrammerBackground } from "./HeroProgrammerBackground"
import { useState, useEffect } from "react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [bgLoaded, setBgLoaded] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToNext = () => {
    const nextSection = document.getElementById('about')
    nextSection?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!mounted) {
    return (
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />
      </section>
    )
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {!bgLoaded && <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10" />}
      <HeroProgrammerBackground onLoad={() => setBgLoaded(true)} />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-sm text-primary font-medium">Available for work</span>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="block text-foreground">Hola, soy </span>
          <span className="block gradient-text">Eri Cruz</span>
          <span className="block text-foreground text-2xl sm:text-3xl lg:text-4xl mt-2">Full Stack Developer</span>
        </motion.h1>

        <motion.div
          className="max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
            Especializado en crear experiencias web excepcionales con React, Next.js y TypeScript.
            Transformo ideas en soluciones digitales que destacan.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { value: "50+", label: "Proyectos" },
            { value: "3+", label: "Años Exp." },
            { value: "15+", label: "Tecnologías" },
            { value: "100%", label: "Cliente Satisfecho" }
          ].map((stat, i) => (
            <div key={i} className="text-center px-6 py-3 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50">
              <div className="text-2xl font-bold gradient-text">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>Ver Mis Proyectos</span>
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
              →
            </motion.span>
          </motion.button>

          <motion.button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 bg-card border border-border rounded-xl font-semibold hover:bg-muted hover:border-primary/50 transition-all duration-300 flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            <MessageCircle size={20} />
            <span>Contactar</span>
          </motion.button>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.button
            onClick={scrollToNext}
            className="p-3 rounded-full bg-card/80 backdrop-blur-sm border border-border hover:bg-muted transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            aria-label="Scroll to next section"
          >
            <ChevronDown size={24} className="text-primary" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
