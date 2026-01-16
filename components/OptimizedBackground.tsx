"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "@/lib/useLazyLoad"

interface OptimizedCanvasProps {
  children: React.ReactNode
  opacity?: number
  zIndex?: number
}

export function OptimizedCanvas({
  children,
  opacity = 0.25,
  zIndex = -10
}: OptimizedCanvasProps) {
  const { ref, inView } = useInView({ threshold: 0.05, rootMargin: "200px" })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div ref={ref} className="absolute inset-0 -z-10" />
  }

  return (
    <div ref={ref} className="absolute inset-0 -z-10" style={{ opacity }}>
      {inView && children}
    </div>
  )
}

export function OptimizedBackground({
  children,
  opacity = 0.05,
  className = ""
}: {
  children: React.ReactNode
  opacity?: number
  className?: string
}) {
  const { ref, inView } = useInView({ threshold: 0.05, rootMargin: "150px" })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} />
  }

  return (
    <div
      ref={ref}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity: inView ? opacity : 0 }}
    >
      {inView && children}
    </div>
  )
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 20,
  className = ""
}: {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}) {
  const { ref, inView } = useInView({ threshold: 0.1, rootMargin: "100px" })

  if (!inView) {
    return <div ref={ref} className={className} />
  }

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export function ParallaxSection({
  children,
  speed = 0.5,
  className = ""
}: {
  children: React.ReactNode
  speed?: number
  className?: string
}) {
  const { ref, inView } = useInView({ threshold: 0.1 })
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    if (!inView) return

    const handleScroll = () => {
      const scrolled = window.scrollY
      setOffset(scrolled * speed * 0.1)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [inView, speed])

  return (
    <div ref={ref} className={className} style={{ transform: `translateY(${offset}px)` }}>
      {children}
    </div>
  )
}
