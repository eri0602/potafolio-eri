"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Building, Briefcase, ArrowRight } from "lucide-react"
import { ExperienceAnimatedBackground } from "./ExperienceAnimatedBackground"

const experiences = [
  {
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    period: "2022 - Presente",
    location: "Madrid, España",
    description: "Lideré el desarrollo de plataformas enterprise, mentorizando a 5 desarrolladores junior. Implementé arquitecturas de microservicios que mejoraron la escalabilidad en un 300%.",
    achievements: [
      "Reducción del 60% en tiempo de carga",
      "Implementación de CI/CD pipelines",
      "Mentoría de equipo junior",
      "Arquitectura de microservicios"
    ],
    technologies: ["React", "Node.js", "AWS", "Docker"],
    accent: "from-blue-500 to-cyan-500"
  },
  {
    company: "StartupFlow Inc",
    position: "Full Stack Developer",
    period: "2020 - 2022",
    location: "Barcelona, España",
    description: "Desarrollé MVPs para 3 startups desde cero hasta producción. Colaboré estrechamente con founders para validar ideas técnicas y comerciales.",
    achievements: [
      "Lanzamiento exitoso de 3 productos",
      "Validación técnica de 15+ ideas",
      "Optimización de costos en un 40%",
      "Implementación de analytics"
    ],
    technologies: ["Next.js", "MongoDB", "Stripe", "Vercel"],
    accent: "from-purple-500 to-pink-500"
  },
  {
    company: "DigitalAgency Pro",
    position: "Frontend Developer",
    period: "2019 - 2020",
    location: "Valencia, España",
    description: "Especialista en desarrollo frontend para clientes enterprise. Creé interfaces de usuario complejas que mejoraron la conversión en un promedio del 25%.",
    achievements: [
      "Mejora del 25% en conversión",
      "Desarrollo de componentes reutilizables",
      "Implementación de diseño systems",
      "Optimización de performance"
    ],
    technologies: ["React", "TypeScript", "SCSS", "Webpack"],
    accent: "from-orange-500 to-red-500"
  }
]

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/20 relative overflow-hidden">
      <ExperienceAnimatedBackground />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            Mi Trayectoria
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experiencia Profesional</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Un recorrido por mis contribuciones en diferentes empresas y proyectos
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-secondary to-transparent hidden md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-6 top-8 w-4 h-4 rounded-full bg-gradient-to-br ${exp.accent} border-4 border-background z-10 hidden md:block`} />

                <div className="bg-card/80 backdrop-blur-sm p-6 md:ml-12 rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-hover">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`px-3 py-1 rounded-full bg-gradient-to-r ${exp.accent} text-white text-xs font-medium`}>
                          {exp.period}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{exp.position}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground text-sm">
                        <div className="flex items-center gap-1">
                          <Building size={14} />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin size={14} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-3 mb-6">
                    {exp.achievements.map((achievement, i) => (
                      <motion.div
                        key={i}
                        className="flex items-start gap-2"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05 }}
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${exp.accent} mt-2 flex-shrink-0`} />
                        <span className="text-sm text-muted-foreground">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
                      <motion.span
                        key={tech}
                        className="px-3 py-1.5 bg-muted/50 text-muted-foreground text-sm rounded-lg border border-border/50"
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + i * 0.05, type: "spring" }}
                        whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--primary) / 0.1)" }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 opacity-0 hover:opacity-10 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-2xl font-bold mb-2">¿Te Interesa Mi Perfil?</h3>
                <p className="text-muted-foreground">
                  Estoy abierto a nuevas oportunidades. Hablemos sobre tu proyecto.
                </p>
              </div>
              
              <motion.button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.98 }}
              >
                <Briefcase size={20} />
                <span>Hablemos de Oportunidades</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
