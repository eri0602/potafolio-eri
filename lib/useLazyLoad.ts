"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(options = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting)
    }, {
      threshold: 0.1,
      rootMargin: "50px",
      ...options
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}

export function useLazyLoad() {
  const [shouldLoad, setShouldLoad] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = ref.current
    if (!element || shouldLoad) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoad(true)
      }
    }, {
      threshold: 0.1,
      rootMargin: "100px"
    })

    observer.observe(element)

    return () => observer.disconnect()
  }, [shouldLoad])

  return { ref, shouldLoad }
}
