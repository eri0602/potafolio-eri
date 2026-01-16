"use client"

import { motion } from "framer-motion"
import { Code, Palette, Database, Server, Smartphone, Globe } from "lucide-react"
import { SkillsAnimatedBackground } from "./SkillsAnimatedBackground"
import { CodeAnimation } from "./CodeAnimation"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express", "Python", "PostgreSQL"],
    },
    {
      title: "Mobile",
      icon: Smartphone,
      skills: ["React Native", "Expo", "iOS", "Android"],
    },
    {
      title: "Design",
      icon: Palette,
      skills: ["Figma", "Adobe XD", "Photoshop", "Illustrator"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Redis", "Prisma"],
    },
    {
      title: "DevOps",
      icon: Globe,
      skills: ["Docker", "AWS", "Vercel", "Git"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30 relative overflow-hidden">
      <SkillsAnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Habilidades</h2>
          <p className="text-lg text-muted-foreground">
            Tecnologías y herramientas que domino
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="bg-card p-6 rounded-lg border border-border relative overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, y: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{
                scale: 1.02,
                rotateY: 5,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
              }}
              style={{
                perspective: 1000,
                transformStyle: "preserve-3d"
              }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <motion.div
                  className="p-3 bg-primary/10 rounded-lg"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    backgroundColor: "rgba(var(--primary), 0.2)"
                  }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3
                    }}
                  >
                    <category.icon size={28} className="text-primary" />
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-xl font-semibold"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {category.title}
                </motion.h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="flex items-center space-x-3 p-2 rounded hover:bg-muted/50 transition-colors"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.15 + skillIndex * 0.1,
                      duration: 0.4
                    }}
                    whileHover={{
                      x: 10,
                      scale: 1.02
                    }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-primary rounded-full"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [1, 0.5, 1]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.2 + skillIndex * 0.3
                      }}
                    />
                    <motion.span
                      className="text-sm"
                      whileHover={{
                        color: "hsl(var(--primary))"
                      }}
                    >
                      {skill}
                    </motion.span>
                  </motion.div>
                ))}
              </div>

              {/* Background glow effect */}
              <motion.div
                className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                initial={false}
              />
            </motion.div>
          ))}
        </div>

        {/* Code Animation Showcase */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-2">Desarrollo en Acción</h3>
            <p className="text-muted-foreground">Código que cobra vida</p>
          </motion.div>

          <CodeAnimation />
        </motion.div>
      </div>
    </section>
  )
}