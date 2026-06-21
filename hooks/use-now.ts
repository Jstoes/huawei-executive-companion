"use client"

import { useEffect, useState } from "react"

/**
 * Returns a live Date that updates on an interval.
 * Returns null until mounted to avoid hydration mismatches.
 */
export function useNow(intervalMs = 1000): Date | null {
  const [now, setNow] = useState<Date | null>(null)

  useEffect(() => {
    setNow(new Date())
    const id = setInterval(() => setNow(new Date()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return now
}
