"use client"

import { useState, useEffect } from "react"
import { Plane, Users, Building2, Sparkles, Briefcase, MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DAYS, type ItineraryItem } from "@/lib/trip-data"
import { getTripStatus } from "@/lib/trip-utils"
import { useNow } from "@/hooks/use-now"
import { cn } from "@/lib/utils"

const TYPE_META: Record<ItineraryItem["type"], { icon: typeof Plane; label: string; className: string }> = {
  travel: { icon: Plane, label: "Travel", className: "bg-accent/15 text-accent" },
  meeting: { icon: Users, label: "Meeting", className: "bg-primary/10 text-primary" },
  visit: { icon: Building2, label: "Visit", className: "bg-chart-3/15 text-chart-3" },
  leisure: { icon: Sparkles, label: "Cultural", className: "bg-chart-4/20 text-chart-4" },
  logistics: { icon: Briefcase, label: "Logistics", className: "bg-muted text-muted-foreground" },
}

export function ItineraryTimeline() {
  const now = useNow(60_000)
  const status = now ? getTripStatus(now) : null
  const activeIndex = status?.currentDayIndex ?? -1

  const [selected, setSelected] = useState(0)

  // Auto-focus the active day once we know it.
  useEffect(() => {
    if (activeIndex >= 0) setSelected(activeIndex)
  }, [activeIndex])

  const day = DAYS[selected]

  return (
    <Card className="border-border/70">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <MapPin className="size-4 text-accent" aria-hidden="true" />
          Itinerary timeline
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        {/* Day selector */}
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1">
          {DAYS.map((d, i) => {
            const isActive = i === activeIndex
            const isSelected = i === selected
            return (
              <button
                key={d.day}
                type="button"
                onClick={() => setSelected(i)}
                aria-pressed={isSelected}
                className={cn(
                  "flex min-w-[5.25rem] shrink-0 flex-col items-start rounded-xl border px-3 py-2 text-left transition-colors",
                  "min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isSelected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:border-primary/40 hover:bg-secondary",
                )}
              >
                <span className={cn("text-[0.65rem] font-semibold uppercase tracking-wide", isSelected ? "text-primary-foreground/70" : "text-muted-foreground")}>
                  Day {d.day}
                </span>
                <span className="text-sm font-bold">
                  {new Date(d.date + "T00:00:00").toLocaleDateString("en-GB", { day: "numeric", month: "short" })}
                </span>
                {isActive && (
                  <span className={cn("mt-0.5 inline-flex items-center gap-1 text-[0.6rem] font-medium", isSelected ? "text-accent" : "text-accent")}>
                    <span className="size-1.5 rounded-full bg-accent" />
                    Today
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Selected day detail */}
        <div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-lg font-bold text-foreground">{day.label}</h3>
              <p className="text-sm text-muted-foreground">{day.city}</p>
            </div>
            <Badge variant="outline" className="border-accent/40 text-accent">
              {day.country}
            </Badge>
          </div>
          <p className="mt-2 text-pretty text-sm text-muted-foreground">{day.summary}</p>

          <ol className="mt-4 space-y-0">
            {day.items.map((item, idx) => {
              const meta = TYPE_META[item.type]
              const Icon = meta.icon
              const isLast = idx === day.items.length - 1
              return (
                <li key={idx} className="relative flex gap-3 pb-4 last:pb-0">
                  {!isLast && (
                    <span className="absolute left-[19px] top-10 h-[calc(100%-1.5rem)] w-px bg-border" aria-hidden="true" />
                  )}
                  <div className={cn("flex size-10 shrink-0 items-center justify-center rounded-full", meta.className)}>
                    <Icon className="size-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1 rounded-lg border border-border/70 bg-secondary/40 px-3 py-2">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-sm font-semibold text-foreground">{item.time}</span>
                      <span className="text-[0.65rem] font-semibold uppercase tracking-wide text-muted-foreground">
                        {meta.label}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.detail}</p>
                  </div>
                </li>
              )
            })}
          </ol>
        </div>
      </CardContent>
    </Card>
  )
}
