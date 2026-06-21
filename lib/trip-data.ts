export const TRIP = {
  title: "Huawei China Executive Mission",
  year: "2026",
  org: "Telecom Namibia",
  startDate: "2026-06-22T00:00:00",
  endDate: "2026-06-28T23:59:59",
}

export type ItineraryItem = {
  time: string
  title: string
  detail: string
  type: "travel" | "meeting" | "visit" | "leisure" | "logistics"
}

export type TripDay = {
  day: number
  date: string // ISO date (local)
  label: string
  city: string
  country: string
  summary: string
  items: ItineraryItem[]
}

export const DAYS: TripDay[] = [
  {
    day: 1,
    date: "2026-06-22",
    label: "Departure",
    city: "Windhoek → Shanghai",
    country: "Namibia → China",
    summary: "Departure from Hosea Kutako International. Long-haul transit to Shanghai Pudong.",
    items: [
      { time: "08:00", title: "Delegation assembly", detail: "Hosea Kutako Intl (WDH) — VIP lounge briefing", type: "logistics" },
      { time: "10:45", title: "Departure WDH", detail: "Outbound flight via Johannesburg", type: "travel" },
      { time: "23:30", title: "Connection", detail: "International transit & boarding for Shanghai", type: "travel" },
    ],
  },
  {
    day: 2,
    date: "2026-06-23",
    label: "Arrival Shanghai",
    city: "Shanghai",
    country: "China",
    summary: "Arrival at Shanghai Pudong, transfer to hotel, welcome briefing.",
    items: [
      { time: "17:20", title: "Arrival PVG", detail: "Shanghai Pudong International Airport", type: "travel" },
      { time: "19:00", title: "Hotel check-in", detail: "Executive transfer to downtown Shanghai", type: "logistics" },
      { time: "20:30", title: "Welcome dinner", detail: "Huawei host reception & agenda overview", type: "meeting" },
    ],
  },
  {
    day: 3,
    date: "2026-06-24",
    label: "Shanghai Engagements",
    city: "Shanghai",
    country: "China",
    summary: "Executive briefings and Huawei innovation centre tour.",
    items: [
      { time: "09:00", title: "Strategy briefing", detail: "Carrier network modernisation roadmap", type: "meeting" },
      { time: "13:30", title: "Innovation centre", detail: "5G-A & cloud infrastructure showcase", type: "visit" },
      { time: "16:00", title: "Partnership session", detail: "Telecom Namibia x Huawei alignment", type: "meeting" },
    ],
  },
  {
    day: 4,
    date: "2026-06-25",
    label: "Shanghai → Guiyang",
    city: "Shanghai → Guiyang",
    country: "China",
    summary: "Domestic transfer to Guiyang, the data hub of Guizhou province.",
    items: [
      { time: "08:30", title: "Domestic flight", detail: "PVG → KWE, transfer to Guiyang", type: "travel" },
      { time: "12:00", title: "Arrival Guiyang", detail: "Hotel check-in & lunch", type: "logistics" },
      { time: "15:00", title: "Site orientation", detail: "Guizhou data centre region overview", type: "visit" },
    ],
  },
  {
    day: 5,
    date: "2026-06-26",
    label: "Guiyang Programme",
    city: "Guiyang",
    country: "China",
    summary: "Cloud & data centre deep-dive, sustainability and operations.",
    items: [
      { time: "09:00", title: "Data centre tour", detail: "Green energy cooling & operations", type: "visit" },
      { time: "13:00", title: "Tech workshop", detail: "Cloud migration & managed services", type: "meeting" },
      { time: "18:00", title: "Cultural evening", detail: "Guizhou heritage experience", type: "leisure" },
    ],
  },
  {
    day: 6,
    date: "2026-06-27",
    label: "Guiyang → Return",
    city: "Guiyang → Shanghai",
    country: "China",
    summary: "Wrap-up sessions and return routing to Shanghai for departure.",
    items: [
      { time: "09:30", title: "Closing review", detail: "Action items & memorandum sign-off", type: "meeting" },
      { time: "14:00", title: "Return flight", detail: "KWE → PVG connection", type: "travel" },
      { time: "20:00", title: "Departure prep", detail: "Overnight before international leg", type: "logistics" },
    ],
  },
  {
    day: 7,
    date: "2026-06-28",
    label: "Return to Windhoek",
    city: "Shanghai → Windhoek",
    country: "China → Namibia",
    summary: "Long-haul return journey concluding the executive mission.",
    items: [
      { time: "07:00", title: "Departure PVG", detail: "International flight homebound", type: "travel" },
      { time: "13:00", title: "Connection", detail: "Transit via Johannesburg", type: "travel" },
      { time: "22:10", title: "Arrival WDH", detail: "Mission complete — Hosea Kutako Intl", type: "travel" },
    ],
  },
]

export type Location = {
  name: string
  country: string
  role: string
  timezone: string
  utcOffset: number // hours from UTC
}

export const LOCATIONS: Location[] = [
  { name: "Windhoek", country: "Namibia", role: "Origin & return", timezone: "CAT", utcOffset: 2 },
  { name: "Shanghai", country: "China", role: "Strategy & innovation", timezone: "CST", utcOffset: 8 },
  { name: "Guiyang", country: "China", role: "Cloud & data centre", timezone: "CST", utcOffset: 8 },
]

export const EXECUTIVE_NOTES: { id: string; title: string; body: string; tag: string }[] = [
  {
    id: "n1",
    title: "Partnership objectives",
    body: "Secure alignment on network modernisation timeline and confirm managed-services scope for the next fiscal cycle.",
    tag: "Strategy",
  },
  {
    id: "n2",
    title: "Protocol reminders",
    body: "Business attire for all official sessions. Exchange of corporate gifts at the welcome dinner. Confirm interpreter availability.",
    tag: "Protocol",
  },
  {
    id: "n3",
    title: "Key contacts",
    body: "Huawei regional account lead and Guizhou data-centre operations director to be primary points of contact on site.",
    tag: "Contacts",
  },
]

export const OBSERVATIONS: { id: string; day: string; text: string }[] = [
  { id: "o1", day: "Day 3 · Shanghai", text: "Innovation centre demonstrated mature 5G-Advanced deployment relevant to TN's urban rollout." },
  { id: "o2", day: "Day 5 · Guiyang", text: "Green-energy cooling model offers a strong sustainability reference for future TN facilities." },
]

export type ActionItem = {
  id: string
  title: string
  owner: string
  due: string
  done: boolean
}

export const ACTION_ITEMS: ActionItem[] = [
  { id: "a1", title: "Circulate pre-departure briefing pack", owner: "Office of the CEO", due: "21 Jun", done: true },
  { id: "a2", title: "Confirm interpreter & protocol arrangements", owner: "Corporate Affairs", due: "23 Jun", done: true },
  { id: "a3", title: "Draft partnership memorandum of understanding", owner: "Strategy", due: "26 Jun", done: false },
  { id: "a4", title: "Compile data-centre evaluation report", owner: "Technology", due: "27 Jun", done: false },
  { id: "a5", title: "Publish post-mission executive summary", owner: "Comms", due: "30 Jun", done: false },
]
