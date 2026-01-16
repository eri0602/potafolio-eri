"use client"

import { motion } from "framer-motion"
import { Star, Quote, User } from "lucide-react"
import { TestimonialsAnimatedBackground } from "./TestimonialsAnimatedBackground"

const testimonials = [
  {
    name: "María González",
    position: "CEO, TechStartup Inc",
    company: "TechStartup Inc",
    content: "Eri transformó completamente nuestra aplicación web. Su atención al detalle y conocimientos técnicos son excepcionales. El proyecto se entregó antes de tiempo y superó todas nuestras expectativas.",
    rating: 5,
    icon: User
  },
  {
    name: "Carlos Rodríguez",
    position: "CTO, DigitalCorp",
    company: "DigitalCorp",
    content: "Trabajar con Eri fue una experiencia excelente. Su capacidad para resolver problemas complejos y mantener una comunicación clara hizo que el desarrollo fuera fluido y eficiente.",
    rating: 5,
    icon: User
  },
  {
    name: "Ana Martínez",
    position: "Product Manager, InnovateLab",
    company: "InnovateLab",
    content: "La calidad del código y la arquitectura que implementó Eri nos permitió escalar rápidamente. Su enfoque proactivo y sugerencias técnicas fueron invaluable para nuestro crecimiento.",
    rating: 5,
    icon: User
  }
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/30 relative overflow-hidden">
      <TestimonialsAnimatedBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Lo Que Dicen Mis Clientes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonios de clientes satisfechos que han confiado en mi trabajo
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="bg-card p-8 rounded-xl border border-border relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-primary/20">
                <Quote size={32} />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.2 + i * 0.1 }}
                  >
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                &#34;{testimonial.content}&#34;
              </blockquote>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center text-primary">
                  <testimonial.icon size={24} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-xs text-primary font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-card p-8 rounded-2xl border border-border max-w-md mx-auto">
            <div className="text-4xl font-bold text-primary mb-2">4.9/5</div>
            <div className="text-lg font-semibold mb-1">Puntuación Promedio</div>
            <div className="text-muted-foreground text-sm">Basado en 15+ proyectos completados</div>
            <div className="flex justify-center space-x-1 mt-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}