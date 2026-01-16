"use client"

import { useEffect, useRef, useState } from 'react'

interface Particle {
  id: number
  x: number
  y: number
  speed: number
  char: string
  opacity: number
}

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const characters = '01{}[]<>/\\|+-=*!@#$%^&()_ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const particles: Particle[] = []
    const maxParticles = 50

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (): Particle => ({
      id: Math.random(),
      x: Math.random() * canvas.width,
      y: Math.random() * -100,
      speed: Math.random() * 2 + 1,
      char: characters[Math.floor(Math.random() * characters.length)],
      opacity: Math.random() * 0.5 + 0.1
    })

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        if (particles[i].y > canvas.height) {
          particles.splice(i, 1)
        }
      }

      while (particles.length < maxParticles && Math.random() < 0.3) {
        particles.push(createParticle())
      }

      particles.forEach(particle => {
        particle.y += particle.speed
        particle.opacity -= 0.002
        if (particle.opacity <= 0) {
          particle.opacity = Math.random() * 0.3 + 0.1
          particle.char = characters[Math.floor(Math.random() * characters.length)]
        }
      })
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach(particle => {
        ctx.save()
        ctx.globalAlpha = particle.opacity
        ctx.fillStyle = '#60a5fa'
        ctx.font = '14px monospace'
        ctx.textAlign = 'center'
        ctx.fillText(particle.char, particle.x, particle.y)
        ctx.restore()
      })
    }

    const animate = () => {
      updateParticles()
      drawParticles()
      animationRef.current = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mounted])

  if (!mounted) {
    return null
  }

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-20"
      style={{ mixBlendMode: 'multiply' }}
    />
  )
}
