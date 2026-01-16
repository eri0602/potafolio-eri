"use client"

import { lazy, Suspense, useEffect, useState } from "react"
import { SectionLoader } from "./SectionLoader"

interface LazySectionProps {
  children: React.ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
}

export function LazySection({
  children,
  threshold = 0.1,
  rootMargin = "100px",
  className = ""
}: LazySectionProps) {
  const [shouldLoad, setShouldLoad] = useState(false)
  const containerRef = useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true)
        }
      },
      { threshold, rootMargin }
    )

    const element = document.getElementById("lazy-section-container")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const containerRefValue = typeof window !== "undefined" 
    ? { 
        ref: (node: HTMLDivElement | null) => {
          if (node && !shouldLoad) {
            const observer = new IntersectionObserver(
              ([entry]) => {
                if (entry.isIntersecting) {
                  setShouldLoad(true)
                }
              },
              { threshold, rootMargin }
            )
            observer.observe(node)
            return () => observer.disconnect()
          }
        }
      }
    : { ref: () => {} }

  return (
    <div ref={containerRefValue.ref as any} id="lazy-section-container" className={className}>
      {shouldLoad ? children : <SectionLoader className="min-h-[300px]" />}
    </div>
  )
}

export function withLazyLoading<P extends object>(
  Component: React.ComponentType<P>,
  fallback?: React.ReactNode
) {
  return function LazyWrapper(props: P) {
    return (
      <Suspense fallback={fallback || <SectionLoader />}>
        <Component {...props} />
      </Suspense>
    )
  }
}

export function useComponentLoader<T>(component: () => Promise<{ default: T }>) {
  const [Component, setComponent] = useState<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (inView) {
      component().then((mod) => {
        setComponent(mod.default)
      })
    }
  }, [inView, component])

  return { Component, inView, setInView }
}
