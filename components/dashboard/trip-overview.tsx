"use client"

import { CalendarClock, Flag, Route, Timer } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { DAYS } from "@/lib/trip-data"
import { getTripStatus, splitDuration } from "@/lib/trip-utils"
import { useNow } from "@/hooks/use-now"

function Stat({
  icon: Icon,
  label,
  value,
  sub,
  accent,
}: {
  icon: typeof Flag
  label: string
  value: string
  sub: string
  accent?: boolean
}) {
  return (
    <Card className="border-border/70">
      <CardContent className="flex items-start gap-3 p-4">
        <div
          className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${
            accent ? "bg-accent/15 text-accent" : "bg-primary/10 text-primary"
          }`}
        >
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</p>
          <p className="truncate text-lg font-bold text-foreground tabular-nums">{value}</p>
          <p className="truncate text-xs text-muted-foreground">{sub}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export function TripOverview() {
  const now = useNow(1000)
  const status = now ? getTripStatus(now) : null

  const currentDay =
    status && status.currentDayIndex >= 0 ? DAYS[status.currentDayIndex] : null

  let countdownText = "—"
  let countdownSub = ""
  if (status) {
    if (status.phase === "pre") {
      const { days, hours, minutes, seconds } = splitDuration(status.countdownToStartMs)
      countdownText = `${days}d ${hours}h ${minutes}m ${seconds}s`
      countdownSub = "until departure"
    } else if (status.phase === "active") {
      countdownText = `Day ${status.currentDayIndex + 1}`
      countdownSub = "of the mission"
    } else {
      countdownText = "Complete"
      countdownSub = "mission concluded"
    }
  }

  const dayValue =
    status?.phase === "active"
      ? `${status.currentDayIndex + 1} / ${status.totalDays}`
      : status?.phase === "post"
        ? `${status.totalDays} / ${status.totalDays}`
        : `0 / ${status?.totalDays ?? DAYS.length}`

  return (
    <section aria-label="Trip overview" className="space-y-4">
      <Card className="overflow-hidden border-border/70">
        <CardContent className="p-5 sm:p-6">
          <div className="flex flex-wrap items-end justify-between gap-2">
            <div>
              <p className="text-sm font-medium text-muted-foreground">Trip progress</p>
              <p className="text-2xl font-bold text-foreground tabular-nums">
                {status ? Math.round(status.progressPct) : 0}%
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              {currentDay ? (
                <>
                  <span className="font-semibold text-foreground">{currentDay.city}</span> · {currentDay.label}
                </>
              ) : status?.phase === "pre" ? (
                "Pre-departure"
              ) : (
                "Returned to Windhoek"
              )}
            </p>
          </div>
          <Progress value={status?.progressPct ?? 0} className="mt-4 h-2.5" />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>22 Jun · Windhoek</span>
            <span>28 Jun · Windhoek</span>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Stat
          icon={Timer}
          label="Countdown"
          value={countdownText}
          sub={countdownSub}
          accent
        />
        <Stat icon={CalendarClock} label="Current day" value={dayValue} sub="mission days" />
        <Stat
          icon={Route}
          label="Route"
          value="3 cities"
          sub="Windhoek · Shanghai · Guiyang"
        />
        <Stat
          icon={Flag}
          label="Duration"
          value="7 days"
          sub="22 – 28 June 2026"
        />
      </div>
    </section>
  )
}
