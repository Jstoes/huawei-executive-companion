"use client"

import { Camera, ImagePlus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const PLACEHOLDERS = [
  "Windhoek departure",
  "Shanghai skyline",
  "Innovation centre",
  "Partnership session",
  "Guiyang data hub",
  "Cultural evening",
]

export function PhotoGallery() {
  return (
    <Card className="border-border/70">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Camera className="size-4 text-accent" aria-hidden="true" />
          Photo gallery
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {PLACEHOLDERS.map((label) => (
            <button
              key={label}
              type="button"
              className="group flex aspect-[4/3] flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-secondary/40 p-3 text-center transition-colors hover:border-accent/60 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <ImagePlus
                className="size-6 text-muted-foreground transition-colors group-hover:text-accent"
                aria-hidden="true"
              />
              <span className="text-xs font-medium text-muted-foreground">{label}</span>
            </button>
          ))}
        </div>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          Tap a tile to add mission photos
        </p>
      </CardContent>
    </Card>
  )
}
