"use client"

import { motion } from "framer-motion"

export function SectionLoader({ className = "" }: { className?: string }) {
  return (
    <div className={`relative overflow-hidden bg-muted/20 ${className}`}>
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-primary rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [1, 0.5, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export function HeroLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/20">
      <div className="text-center space-y-4">
        <motion.div
          className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/30 to-secondary/30 rounded-2xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="h-8 w-64 bg-muted/40 rounded mx-auto"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="h-4 w-48 bg-muted/30 rounded mx-auto"
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: 0.3,
          }}
        />
      </div>
    </div>
  )
}

export function CardLoader() {
  return (
    <div className="bg-card p-6 rounded-xl border border-border">
      <div className="flex items-start space-x-4">
        <motion.div
          className="w-12 h-12 bg-primary/20 rounded-full"
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        />
        <div className="flex-1 space-y-2">
          <motion.div
            className="h-4 w-3/4 bg-muted rounded"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
          />
          <motion.div
            className="h-3 w-1/2 bg-muted/60 rounded"
            animate={{
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: 0.2,
            }}
          />
        </div>
      </div>
    </div>
  )
}

export function GridLoader({ count = 3 }: { count?: number }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardLoader key={i} />
      ))}
    </div>
  )
}
