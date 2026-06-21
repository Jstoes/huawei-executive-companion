"use client"

import { MapPin } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LOCATIONS } from "@/lib/trip-data"
import { useNow } from "@/hooks/use-now"

function localTime(now: Date, utcOffset: number) {
  const utc = now.getTime() + now.getTimezoneOffset() * 60_000
  const local = new Date(utc + utcOffset * 3_600_000)
  return local.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" })
}

export function LocationsPanel() {
  const now = useNow(1000)

  return (
    <Card className="border-border/70">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <MapPin className="size-4 text-accent" aria-hidden="true" />
          Locations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {LOCATIONS.map((loc, i) => (
          <div
            key={loc.name}
            className="flex items-center justify-between gap-3 rounded-lg border border-border/70 bg-secondary/40 px-3 py-2.5"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {i + 1}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {loc.name}
                  <span className="ml-1.5 text-xs font-normal text-muted-foreground">{loc.country}</span>
                </p>
                <p className="text-xs text-muted-foreground">{loc.role}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="font-mono text-sm font-semibold tabular-nums text-foreground">
                {now ? localTime(now, loc.utcOffset) : "--:--"}
              </p>
              <p className="text-[0.65rem] uppercase tracking-wide text-muted-foreground">{loc.timezone}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
