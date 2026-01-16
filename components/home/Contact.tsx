"use client"

import { motion } from "framer-motion"
import { Mail, Send, Briefcase, Phone, MessageCircle } from "lucide-react"
import { ContactAnimatedBackground } from "./ContactAnimatedBackground"
import { BuildAnimation } from "./BuildAnimation"

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    subtitle: "Respuesta en 24 horas",
    value: "contact@ericruz.dev",
    href: "mailto:contact@ericruz.dev",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Briefcase,
    title: "LinkedIn",
    subtitle: "Conectemos profesionalmente",
    value: "linkedin.com/in/ericruz",
    href: "https://linkedin.com/in/ericruz",
    color: "from-blue-600 to-blue-800"
  },
  {
    icon: Phone,
    title: "WhatsApp",
    subtitle: "Consultas rápidas",
    value: "+1 (234) 567-8900",
    href: "https://wa.me/1234567890",
    color: "from-green-500 to-emerald-500"
  }
]

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <ContactAnimatedBackground />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Contáctame
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Iniciemos un Proyecto</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            ¿Tienes una idea? Conversemos y transformémosla en realidad digital.
          </p>
        </motion.div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((item, i) => (
            <motion.a
              key={item.title}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group p-6 bg-card/80 backdrop-blur-sm rounded-2xl border border-border hover:border-primary/30 transition-all duration-300 card-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={24} className="text-white" />
              </div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.subtitle}</p>
              <p className="text-sm text-primary font-medium group-hover:underline">{item.value}</p>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          className="bg-card/80 backdrop-blur-sm rounded-3xl border border-border p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <MessageCircle size={20} className="text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Envíame un Mensaje</h3>
              <p className="text-sm text-muted-foreground">Te responderé lo antes posible</p>
            </div>
          </div>

          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Nombre</label>
                <input
                  type="text"
                  className="input"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">Email</label>
                <input
                  type="email"
                  className="input"
                  placeholder="tu@email.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2 text-muted-foreground">Mensaje</label>
              <textarea
                rows={5}
                className="input resize-none"
                placeholder="Cuéntame sobre tu proyecto..."
              />
            </div>

            <motion.button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send size={18} />
              <span>Enviar Mensaje</span>
            </motion.button>
          </form>
        </motion.div>

        {/* Build Process */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-2">Cómo Trabajo</h3>
            <p className="text-muted-foreground">Un proceso estructurado para resultados excepcionales</p>
          </div>
          <BuildAnimation />
        </motion.div>
      </div>
    </section>
  )
}
