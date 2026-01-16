"use client"

import { useState, useEffect, useCallback } from "react"

interface ViewportState {
  sections: Record<string, boolean>
  loadedSections: Set<string>
}

export function useSectionLoadObserver(sectionIds: string[]) {
  const [state, setState] = useState<ViewportState>({
    sections: {},
    loadedSections: new Set()
  })

  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      const sectionId = entry.target.id
      if (entry.isIntersecting) {
        setState((prev) => ({
          ...prev,
          sections: { ...prev.sections, [sectionId]: true },
          loadedSections: new Set([...prev.loadedSections, sectionId])
        }))
      }
    })
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: "200px"
    })

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds, observerCallback])

  const shouldLoad = useCallback((sectionId: string) => {
    return state.loadedSections.has(sectionId)
  }, [state.loadedSections])

  return { shouldLoad, loadedSections: state.loadedSections }
}

export function useProgressiveLoad(items: any[], batchSize = 3) {
  const [loadedCount, setLoadedCount] = useState(batchSize)
  const [isLoading, setIsLoading] = useState(false)

  const loadMore = useCallback(() => {
    if (loadedCount >= items.length) return

    setIsLoading(true)
    setTimeout(() => {
      setLoadedCount((prev) => Math.min(prev + batchSize, items.length))
      setIsLoading(false)
    }, 300)
  }, [loadedCount, items.length, batchSize])

  const visibleItems = items.slice(0, loadedCount)

  return { visibleItems, loadMore, isLoading, hasMore: loadedCount < items.length }
}
