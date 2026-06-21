"use client"

import { useMemo, useState } from "react"
import { CircleCheckBig, Circle, ListChecks } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ACTION_ITEMS } from "@/lib/trip-data"
import { cn } from "@/lib/utils"

export function ActionTracker() {
  const [items, setItems] = useState(ACTION_ITEMS)

  const completed = useMemo(() => items.filter((i) => i.done).length, [items])
  const pct = Math.round((completed / items.length) * 100)

  function toggle(id: string) {
    setItems((prev) => prev.map((i) => (i.id === id ? { ...i, done: !i.done } : i)))
  }

  return (
    <Card className="border-border/70">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between gap-2 text-base">
          <span className="flex items-center gap-2">
            <ListChecks className="size-4 text-accent" aria-hidden="true" />
            Action tracker
          </span>
          <span className="text-sm font-medium tabular-nums text-muted-foreground">
            {completed}/{items.length}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <Progress value={pct} className="h-2" />
        <ul className="space-y-2">
          {items.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => toggle(item.id)}
                className={cn(
                  "flex w-full items-start gap-3 rounded-lg border px-3 py-2.5 text-left transition-colors",
                  "min-h-11 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  item.done
                    ? "border-border/60 bg-secondary/30"
                    : "border-border bg-card hover:border-accent/50 hover:bg-secondary/40",
                )}
                aria-pressed={item.done}
              >
                {item.done ? (
                  <CircleCheckBig className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                ) : (
                  <Circle className="mt-0.5 size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
                )}
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "text-sm font-medium",
                      item.done ? "text-muted-foreground line-through" : "text-foreground",
                    )}
                  >
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.owner} · due {item.due}
                  </p>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
