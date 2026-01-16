"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Laptop, Keyboard, Zap, Wrench } from 'lucide-react'

const codeElements = [
  '{', '}', '[', ']', '<', '>', '(', ')', ';', ':', '=', '+', '-', '*', '/', '%',
  'function', 'const', 'let', 'var', 'if', 'else', 'for', 'while', 'return',
  'class', 'import', 'export', 'async', 'await', 'try', 'catch'
]

const colors = [
  'text-blue-400/20',
  'text-green-400/20',
  'text-purple-400/20',
  'text-yellow-400/20',
  'text-red-400/20',
  'text-cyan-400/20',
  'text-pink-400/20'
]

interface FloatingElement {
  id: number
  element: string
  x: number
  y: number
  color: string
  delay: number
  duration: number
}

function generateElements(count: number): FloatingElement[] {
  const elements: FloatingElement[] = []
  for (let i = 0; i < count; i++) {
    elements.push({
      id: i,
      element: codeElements[Math.floor(Math.random() * codeElements.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 10,
      duration: 15 + Math.random() * 10
    })
  }
  return elements
}

export function ProgrammerBackground() {
  const [mounted, setMounted] = useState(false)
  const [elements, setElements] = useState<FloatingElement[]>([])

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true)
      setElements(generateElements(25))
    }, 0)
    return () => clearTimeout(timer)
  }, [])

  const circuitPatternId = "circuit-pattern"

  if (!mounted) {
    return <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" />
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-transparent to-slate-800/5" />

      {elements.map((item) => (
        <motion.div
          key={item.id}
          className={`absolute font-mono text-2xl font-bold ${item.color} select-none`}
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
          }}
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
            rotate: [0, 90, 180, 270, 360],
            scale: [1, 1.2, 0.8, 1.1, 1],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            delay: item.delay,
            ease: "linear"
          }}
        >
          {item.element}
        </motion.div>
      ))}

      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id={circuitPatternId} x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="transparent"/>
            <circle cx="5" cy="5" r="1" fill="currentColor" className="text-primary/30"/>
            <circle cx="15" cy="15" r="1" fill="currentColor" className="text-primary/30"/>
            <line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="0.5" className="text-primary/20"/>
            <line x1="5" y1="15" x2="15" y2="5" stroke="currentColor" strokeWidth="0.5" className="text-primary/20"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${circuitPatternId})`} />
      </svg>

      <motion.div
        className="absolute top-20 right-10 text-4xl opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Laptop size={48} className="text-foreground/20" />
      </motion.div>

      <motion.div
        className="absolute bottom-32 left-16 text-3xl opacity-15"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [0, -10, 10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <Keyboard size={36} className="text-foreground/15" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 left-1/4 text-2xl opacity-25"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          delay: 4
        }}
      >
        <Zap size={32} className="text-foreground/25" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/3 text-3xl opacity-20"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 6
        }}
      >
        <Wrench size={36} className="text-foreground/20" />
      </motion.div>
    </div>
  )
}
