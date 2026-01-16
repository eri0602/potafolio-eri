"use client"

import { motion } from "framer-motion"
import { Code, Palette, Zap, User } from "lucide-react"
import { AboutAnimatedBackground } from "./AboutAnimatedBackground"

export function About() {
  const specialties = [
    {
      icon: Code,
      title: "Desarrollo Frontend",
      description: "Creación de interfaces modernas y responsivas con React, Next.js y TypeScript",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Diseño de experiencias de usuario intuitivas y accesibles con enfoque mobile-first",
      skills: ["Figma", "Design Systems", "Prototyping", "Usability"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Zap,
      title: "Performance & Optimization",
      description: "Optimización de aplicaciones para máxima velocidad y experiencia de usuario",
      skills: ["Core Web Vitals", "SEO", "Bundle Analysis", "Caching"],
      color: "from-yellow-500 to-orange-500"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30 relative overflow-hidden">
      <AboutAnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Sobre Mí</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Desarrollador web apasionado por crear experiencias digitales excepcionales
            que combinan funcionalidad, diseño y performance.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo and Bio */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
              <motion.div
                className="w-48 h-48 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-6 flex items-center justify-center cursor-pointer relative overflow-hidden"
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                whileTap={{ scale: 0.95 }}
                style={{ perspective: 1000 }}
              >
                <motion.div
                  className="text-primary"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <User size={64} />
                </motion.div>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <div className="space-y-6 text-center md:text-left">
              <motion.div
                className="inline-flex items-center space-x-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>Disponible para nuevos proyectos</span>
              </motion.div>

              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Ingeniero de Software con más de 3 años de experiencia liderando el desarrollo de
                  <span className="text-primary font-semibold"> aplicaciones web escalables</span> y
                  <span className="text-secondary font-semibold"> sistemas complejos</span>.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Especializado en el stack MERN/MEAN, con experiencia sólida en arquitecturas de
                  microservicios, optimización de performance y metodologías ágiles. He contribuido
                  al éxito de startups tecnológicas y equipos enterprise.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  Mi enfoque combina <strong>ingeniería de software robusta</strong> con
                  <strong> diseño de experiencia de usuario intuitivo</strong>, asegurando que cada
                  proyecto no solo cumpla con los requerimientos técnicos, sino que también
                  genere valor real para los usuarios finales.
                </p>
              </motion.div>

              {/* Professional Highlights */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <div className="bg-card/50 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-xs text-muted-foreground">Proyectos Entregados</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">15+</div>
                  <div className="text-xs text-muted-foreground">Tecnologías Expertas</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-xs text-muted-foreground">Uptime en Producción</div>
                </div>
                <div className="bg-card/50 p-4 rounded-lg border border-border/50 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-xs text-muted-foreground">Soporte Disponible</div>
                </div>
              </motion.div>

              {/* Key Skills Tags */}
              <motion.div
                className="flex flex-wrap gap-2 mt-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                {["React", "TypeScript", "Next.js", "Node.js", "UI/UX", "Performance"].map((skill, index) => (
                  <motion.span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-full text-sm font-medium"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 + index * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Specialties */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty.title}
                className="p-6 rounded-xl bg-card border border-border relative overflow-hidden group cursor-pointer hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20, rotateX: -10 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)"
                }}
                style={{ perspective: 1000 }}
              >
                <div className="flex items-start space-x-4 mb-4">
                  <motion.div
                    className={`p-3 rounded-xl bg-gradient-to-br ${specialty.color} text-white shadow-lg`}
                    whileHover={{
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    <specialty.icon size={24} />
                  </motion.div>
                  <div className="flex-1">
                    <motion.h3
                      className="text-xl font-bold mb-2 text-foreground"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      {specialty.title}
                    </motion.h3>
                    <motion.p
                      className="text-muted-foreground leading-relaxed"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {specialty.description}
                    </motion.p>
                  </div>
                </div>

                {/* Skills Tags */}
                <motion.div
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3 }}
                >
                  {specialty.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-muted text-muted-foreground text-xs rounded-full border border-border/50"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.15 + skillIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "hsl(var(--primary) / 0.1)",
                        color: "hsl(var(--primary))"
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${specialty.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  initial={false}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}