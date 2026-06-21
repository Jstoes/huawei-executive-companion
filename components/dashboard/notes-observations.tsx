"use client"

import { useState } from "react"
import { NotebookPen, Eye, Plus } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { EXECUTIVE_NOTES, OBSERVATIONS } from "@/lib/trip-data"

export function ExecutiveNotes() {
  return (
    <Card className="border-border/70">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <NotebookPen className="size-4 text-accent" aria-hidden="true" />
          Executive notes
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {EXECUTIVE_NOTES.map((note) => (
          <div key={note.id} className="rounded-lg border border-border/70 bg-secondary/40 p-3">
            <div className="flex items-center justify-between gap-2">
              <p className="text-sm font-semibold text-foreground">{note.title}</p>
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                {note.tag}
              </Badge>
            </div>
            <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">{note.body}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

export function Observations() {
  const [items, setItems] = useState(OBSERVATIONS)
  const [draft, setDraft] = useState("")

  function addObservation() {
    const text = draft.trim()
    if (!text) return
    setItems((prev) => [
      ...prev,
      { id: `o${prev.length + 1}-${Date.now()}`, day: "New entry", text },
    ])
    setDraft("")
  }

  return (
    <Card className="border-border/70">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <Eye className="size-4 text-accent" aria-hidden="true" />
          Observations
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="space-y-2">
          {items.map((o) => (
            <li key={o.id} className="rounded-lg border-l-2 border-accent bg-secondary/40 px-3 py-2">
              <p className="text-[0.65rem] font-semibold uppercase tracking-wide text-accent">{o.day}</p>
              <p className="text-sm text-foreground">{o.text}</p>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") addObservation()
            }}
            placeholder="Capture a field observation…"
            aria-label="New observation"
            className="h-11 flex-1 rounded-lg border border-input bg-background px-3 text-base outline-none focus-visible:ring-2 focus-visible:ring-ring sm:text-sm"
          />
          <Button type="button" onClick={addObservation} size="icon" className="size-11 shrink-0" aria-label="Add observation">
            <Plus className="size-5" aria-hidden="true" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
