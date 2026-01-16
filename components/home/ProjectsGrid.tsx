"use client"

import { motion } from "framer-motion"
import { ProjectsAnimatedBackground } from "./ProjectsAnimatedBackground"
import { Building2, GraduationCap, Truck } from "lucide-react"

export function ProjectsGrid() {
  const projects = [
    {
      title: "Sistema de Gestión Hospitalaria",
      description: "Plataforma integral para clínicas médicas con gestión de pacientes, citas médicas, historiales clínicos y facturación electrónica. Implementó reducción del 60% en tiempo de espera de pacientes.",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "JWT"],
      category: "Healthcare",
      status: "Completado",
      company: "Clínica San Rafael",
      link: "#",
      metrics: "60% reducción tiempo espera"
    },
    {
      title: "Plataforma E-Learning Corporativo",
      description: "Sistema de capacitación empresarial con cursos interactivos, seguimiento de progreso, certificaciones automáticas y analíticas avanzadas. Utilizado por más de 500 empleados en 3 empresas.",
      technologies: ["Next.js", "TypeScript", "Prisma", "AWS S3", "Stripe"],
      category: "Education",
      status: "Completado",
      company: "TechCorp Solutions",
      link: "#",
      metrics: "500+ usuarios activos"
    },
    {
      title: "Aplicación de Delivery Inteligente",
      description: "App móvil y web para gestión de entregas con optimización de rutas GPS, seguimiento en tiempo real y sistema de calificaciones. Procesó más de 10,000 pedidos mensuales.",
      technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "Google Maps API"],
      category: "Logistics",
      status: "En Desarrollo",
      company: "FastDelivery Inc",
      link: "#",
      metrics: "10k+ pedidos/mes"
    },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <ProjectsAnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Mis Proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una colección de proyectos que demuestran mis habilidades en desarrollo web,
            desde aplicaciones interactivas hasta sitios web completos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="bg-card p-6 rounded-xl border border-border relative overflow-hidden group cursor-pointer hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                rotateY: 3,
                rotateX: -3,
                scale: 1.02,
                boxShadow: "0 25px 60px rgba(0,0,0,0.12)"
              }}
              style={{
                perspective: 1000,
                transformStyle: "preserve-3d"
              }}
            >
              {/* Project Image/Preview */}
              <motion.div
                className="w-full h-48 bg-gradient-to-br from-primary/20 via-purple-500/10 to-secondary/20 rounded-lg mb-4 flex items-center justify-center relative overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="text-primary"
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5
                  }}
                >
                  {project.category === "Healthcare" && <Building2 size={64} />}
                  {project.category === "Education" && <GraduationCap size={64} />}
                  {project.category === "Logistics" && <Truck size={64} />}
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Project Header */}
              <div className="flex items-start justify-between mb-3">
                <motion.h3
                  className="text-xl font-bold text-foreground"
                  whileHover={{ x: 3 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                <motion.span
                  className={`px-2 py-1 text-xs rounded-full ${
                    project.status === "Completado"
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                  }`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                >
                  {project.status}
                </motion.span>
              </div>

              {/* Project Description */}
              <motion.p
                className="text-muted-foreground mb-4 leading-relaxed"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {project.description}
              </motion.p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-3">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    className="px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary text-sm rounded-full border border-primary/20 hover:border-primary/50 transition-colors cursor-pointer font-medium"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + techIndex * 0.08, type: "spring", stiffness: 200 }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "hsl(var(--primary) / 0.15)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

              {/* Project Info */}
              <div className="flex items-center justify-between mb-4 text-sm">
                <span className="text-muted-foreground font-medium">{project.company}</span>
                <span className="text-primary font-semibold">{project.metrics}</span>
              </div>

              {/* Action Button */}
              <motion.button
                className="w-full py-2 px-4 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border border-primary/20 rounded-lg hover:border-primary/50 transition-all duration-300 text-sm font-medium"
                whileHover={{
                  scale: 1.02,
                  backgroundColor: "hsl(var(--primary) / 0.15)"
                }}
                whileTap={{ scale: 0.98 }}
              >
                Ver Proyecto →
              </motion.button>

              {/* Hover overlay effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-primary/3 via-transparent to-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}