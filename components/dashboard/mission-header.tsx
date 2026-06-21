"use client"

import { Plane, Globe } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { TRIP } from "@/lib/trip-data"
import { formatDateRange, getTripStatus } from "@/lib/trip-utils"
import { useNow } from "@/hooks/use-now"

export function MissionHeader() {
  const now = useNow(1000)
  const status = now ? getTripStatus(now) : null

  const phaseLabel =
    status?.phase === "active"
      ? "Mission in progress"
      : status?.phase === "post"
        ? "Mission completed"
        : "Awaiting departure"

  return (
    <header className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-[0.15]" aria-hidden="true">
        <div className="absolute -right-24 -top-24 size-80 rounded-full bg-accent blur-3xl" />
        <div className="absolute -bottom-32 left-10 size-72 rounded-full bg-primary-foreground/30 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-4 py-6 sm:px-6 md:py-8 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-lg">
              <Plane className="size-6" aria-hidden="true" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                {TRIP.org}
              </p>
              <h1 className="text-balance text-xl font-bold leading-tight sm:text-2xl">
                {TRIP.title} <span className="text-accent">{TRIP.year}</span>
              </h1>
            </div>
          </div>

          <Badge className="gap-1.5 rounded-full border-0 bg-primary-foreground/15 px-3 py-1.5 text-primary-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            {phaseLabel}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-primary-foreground/80">
          <span className="inline-flex items-center gap-2">
            <Globe className="size-4 text-accent" aria-hidden="true" />
            Windhoek · Shanghai · Guiyang
          </span>
          <span className="hidden h-4 w-px bg-primary-foreground/25 sm:block" aria-hidden="true" />
          <span className="font-mono text-primary-foreground">{formatDateRange()}</span>
        </div>
      </div>
    </header>
  )
}
