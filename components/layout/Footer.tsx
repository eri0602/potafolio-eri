"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ArrowUp, Rocket, Award, Target, ShieldCheck } from "lucide-react"
import { socialLinks, contactEmail } from "@/lib/constants"

const footerLinks = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre Mí", href: "#about" },
  { name: "Proyectos", href: "#projects" },
  { name: "Experiencia", href: "#experience" },
  { name: "Contacto", href: "#contact" }
]

const socialIcons = [
  { icon: Github, href: socialLinks.github, label: "GitHub" },
  { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: socialLinks.twitter, label: "Twitter" }
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* CTA Section */}
        <motion.div
          className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 rounded-3xl p-8 md:p-12 mb-16 border border-primary/20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">¿Listo para trabajar juntos?</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Transformemos tu idea en una solución digital excepcional.
            </p>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-semibold shadow-lg hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={18} />
              <span>Hablemos de Tu Proyecto</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand & Social */}
          <div className="md:col-span-2">
            <motion.div
              className="text-2xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="gradient-text">Eri Cruz</span>
            </motion.div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Full Stack Developer especializado en crear experiencias web excepcionales.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.1, y: -2 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <div className="space-y-2">
              {footerLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <motion.a
              href={`mailto:${contactEmail}`}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-200 mb-3"
              whileHover={{ x: 5 }}
            >
              <Mail size={16} />
              <span className="text-sm">{contactEmail}</span>
            </motion.a>
            <p className="text-xs text-muted-foreground">
              Respuesta en 24 horas
            </p>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { icon: Award, label: "AWS Certified", sublabel: "Developer" },
            { icon: Target, label: "Metodologías", sublabel: "Agile & Scrum" },
            { icon: ShieldCheck, label: "Seguridad", sublabel: "OWASP" },
            { icon: Rocket, label: "Performance", sublabel: "Core Web Vitals" }
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="p-4 bg-card/50 rounded-xl border border-border/50 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex justify-center mb-2">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <item.icon size={20} className="text-primary" />
                </div>
              </div>
              <div className="font-semibold text-sm">{item.label}</div>
              <div className="text-xs text-muted-foreground">{item.sublabel}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} Eri Cruz</span>
            <span className="hidden sm:inline">•</span>
            <span>Hecho con ❤️ y código</span>
          </div>

          <motion.button
            onClick={scrollToTop}
            className="group p-3 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Volver arriba"
          >
            <ArrowUp size={18} className="group-hover:text-primary transition-colors" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
