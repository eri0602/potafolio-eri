"use client"

import { motion } from "framer-motion"
import { useMemo } from "react"

interface AnimatedElement {
  id: string
  x: number
  y: number
  delay: number
  duration: number
}

function getDeterministicValue(index: number, multiplier: number, offset: number = 0): number {
  const seed = (index * 9301 + 49297) % 233280
  const random = seed / 233280
  return (random * multiplier + offset) % 100
}

function getDeterministicDuration(index: number, min: number, max: number): number {
  const seed = (index * 55421 + 12345) % 9973
  const random = seed / 9973
  return min + random * (max - min)
}

function getDeterministicDelay(index: number, max: number): number {
  const seed = (index * 78901 + 34567) % 17239
  const random = seed / 17239
  return random * max
}

export function ExperienceAnimatedBackground() {
  const codeElements = [
    '{code}',
    'function()',
    'return',
    'const',
    '=>',
    'async',
    'await',
    'import',
    'export',
    'interface',
    'type',
    'class'
  ]

  const bracketElements = useMemo<AnimatedElement[]>(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: `bracket-${i}`,
      x: getDeterministicValue(i, 100),
      y: getDeterministicValue(i, 100, 10),
      delay: getDeterministicDelay(i, 5),
      duration: getDeterministicDuration(i, 10, 20)
    }))
  }, [])

  const tagElements = useMemo<AnimatedElement[]>(() => {
    return Array.from({ length: 6 }, (_, i) => ({
      id: `tag-${i}`,
      x: getDeterministicValue(i + 8, 100),
      y: getDeterministicValue(i + 8, 100, 20),
      delay: getDeterministicDelay(i + 8, 3),
      duration: getDeterministicDuration(i + 8, 12, 24)
    }))
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {codeElements.map((code, index) => {
        const animData = bracketElements[index % bracketElements.length]
        return (
          <motion.div
            key={code}
            className="absolute text-primary/5 font-mono text-xl font-bold whitespace-nowrap"
            initial={{
              x: `${animData.x}%`,
              y: `${animData.y}%`,
            }}
            animate={{
              y: [null, -100, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: animData.duration,
              repeat: Infinity,
              delay: animData.delay,
              ease: "linear"
            }}
          >
            {code}
          </motion.div>
        )
      })}

      {bracketElements.map((animData, i) => (
        <motion.div
          key={`bracket-${i}`}
          className="absolute text-secondary/5 font-mono text-6xl font-bold"
          initial={{
            x: `${animData.x}%`,
            y: `${animData.y}%`,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: animData.duration + 5,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {['{', '}', '[', ']', '(', ')', '<', '>'][i % 8]}
        </motion.div>
      ))}

      {tagElements.map((animData, i) => (
        <motion.div
          key={`tag-${i}`}
          className="absolute text-accent/5 font-mono text-lg font-bold"
          initial={{
            x: `${animData.x}%`,
            y: `${animData.y}%`,
          }}
          animate={{
            x: [null, (animData.x % 50) - 25, 0],
            opacity: [0, 0.2, 0],
          }}
          transition={{
            duration: animData.duration + 2,
            repeat: Infinity,
            delay: animData.delay,
          }}
        >
          &lt;/&gt;
        </motion.div>
      ))}

      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-primary/2 to-transparent pointer-events-none" />
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-secondary/2 to-transparent pointer-events-none" />
    </div>
  )
}
