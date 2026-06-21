import { MissionHeader } from "@/components/dashboard/mission-header"
import { TripOverview } from "@/components/dashboard/trip-overview"
import { ItineraryTimeline } from "@/components/dashboard/itinerary-timeline"
import { LocationsPanel } from "@/components/dashboard/locations-panel"
import { ExecutiveNotes, Observations } from "@/components/dashboard/notes-observations"
import { ActionTracker } from "@/components/dashboard/action-tracker"
import { PhotoGallery } from "@/components/dashboard/photo-gallery"

export default function Page() {
  return (
    <main className="min-h-screen bg-background pb-12">
      <MissionHeader />

      <div className="mx-auto max-w-7xl space-y-6 px-4 py-6 sm:px-6 lg:px-8">
        <TripOverview />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Primary column */}
          <div className="space-y-6 lg:col-span-2">
            <ItineraryTimeline />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <ExecutiveNotes />
              <Observations />
            </div>
            <PhotoGallery />
          </div>

          {/* Sidebar column */}
          <div className="space-y-6">
            <LocationsPanel />
            <ActionTracker />
          </div>
        </div>

        <footer className="border-t border-border pt-6 text-center text-xs text-muted-foreground">
          Telecom Namibia · Huawei China Executive Mission Companion 2026 — for internal delegation use
        </footer>
      </div>
    </main>
  )
}
