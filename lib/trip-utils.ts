import { TRIP, DAYS } from "@/lib/trip-data"

export type TripStatus = {
  phase: "pre" | "active" | "post"
  currentDayIndex: number // 0-based index into DAYS, -1 if not active
  totalDays: number
  elapsedMs: number
  totalMs: number
  progressPct: number
  countdownToStartMs: number
  daysUntilStart: number
}

export function getTripStatus(now: Date): TripStatus {
  const start = new Date(TRIP.startDate).getTime()
  const end = new Date(TRIP.endDate).getTime()
  const t = now.getTime()
  const totalMs = end - start
  const totalDays = DAYS.length

  let phase: TripStatus["phase"] = "active"
  if (t < start) phase = "pre"
  else if (t > end) phase = "post"

  const elapsedMs = Math.min(Math.max(t - start, 0), totalMs)
  const progressPct = phase === "post" ? 100 : phase === "pre" ? 0 : (elapsedMs / totalMs) * 100

  // current day index
  let currentDayIndex = -1
  if (phase === "active") {
    for (let i = 0; i < DAYS.length; i++) {
      const dayStart = new Date(DAYS[i].date + "T00:00:00").getTime()
      const dayEnd = dayStart + 24 * 60 * 60 * 1000
      if (t >= dayStart && t < dayEnd) {
        currentDayIndex = i
        break
      }
    }
    if (currentDayIndex === -1) currentDayIndex = 0
  } else if (phase === "post") {
    currentDayIndex = DAYS.length - 1
  }

  const countdownToStartMs = Math.max(start - t, 0)
  const daysUntilStart = Math.ceil(countdownToStartMs / (24 * 60 * 60 * 1000))

  return {
    phase,
    currentDayIndex,
    totalDays,
    elapsedMs,
    totalMs,
    progressPct,
    countdownToStartMs,
    daysUntilStart,
  }
}

export function splitDuration(ms: number) {
  const totalSeconds = Math.floor(ms / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60
  return { days, hours, minutes, seconds }
}

export function formatDateRange() {
  const start = new Date(TRIP.startDate)
  const end = new Date(TRIP.endDate)
  const fmt = (d: Date) =>
    d.toLocaleDateString("en-GB", { day: "numeric", month: "short" })
  return `${fmt(start)} – ${fmt(end)} ${end.getFullYear()}`
}
