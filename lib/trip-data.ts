export const TRIP = {
  title: "Huawei China Executive Mission",
  year: "2026",
  org: "Telecom Namibia",
  startDate: "2026-06-22T12:30:00",
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
  date: string
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
    summary: "Departure from Hosea Kutako Airport and arrival at Shanghai Pudong Airport.",
    items: [
      { time: "12:30", title: "Check-in", detail: "Hosea Kutako Airport", type: "logistics" },
      { time: "14:30", title: "Fly", detail: "Hosea Kutako Airport (ET834 + ET684)", type: "travel" },
      { time: "15:15", title: "Arrived in Shanghai", detail: "Shanghai Pudong Airport", type: "travel" },
    ],
  },
  {
    day: 2,
    date: "2026-06-23",
    label: "Arrival in Shanghai",
    city: "Shanghai",
    country: "China",
    summary: "Arrival logistics, dinner, transfer to hotel and check-in.",
    items: [
      { time: "17:00–17:50", title: "En route", detail: "From the airport to the dinner location", type: "travel" },
      { time: "18:00–19:30", title: "Dinner", detail: "Dinner restaurant", type: "logistics" },
      { time: "19:30–19:40", title: "En route", detail: "Restaurant to hotel", type: "travel" },
      { time: "19:40–20:00", title: "Check-in", detail: "Mandarin Oriental, Pudong, Shanghai", type: "logistics" },
    ],
  },
  {
    day: 3,
    date: "2026-06-24",
    label: "Huawei Executive Engagements",
    city: "Shanghai",
    country: "China",
    summary:
      "Huawei Exhibition Hall, investment planning and financing solutions, MOU communication, fibre advancement, copper phase-out, 5G-A and wireless target network sessions.",
    items: [
      { time: "08:00–08:30", title: "Breakfast", detail: "Mandarin Oriental, Pudong, Shanghai", type: "logistics" },
      { time: "08:30–09:00", title: "En route", detail: "Hotel - Huawei Exhibition Hall", type: "travel" },
      { time: "09:00–10:00", title: "Visit Huawei Exhibition Hall", detail: "Huawei Exhibition Hall", type: "visit" },
      {
        time: "10:10–11:40",
        title: "High-level communication",
        detail: "Communication on theme investment planning and financing solutions; sign the MOU agreement",
        type: "meeting",
      },
      { time: "12:00–13:00", title: "Lunch", detail: "Restaurant", type: "logistics" },
      { time: "13:10–14:40", title: "En route", detail: "The restaurant is heading to Huawei's Lian Qiuhu", type: "travel" },
      {
        time: "15:00–16:00",
        title: "Special Topic Exchange",
        detail: "Discussion on the Business Plan for Fiber Optic Advancement and Copper Wire Phase-Out",
        type: "meeting",
      },
      { time: "16:20–16:50", title: "Park Tour + 5G-A Experience", detail: "Huawei Lian Qiuhu", type: "visit" },
      { time: "17:10–18:10", title: "Special Topic Exchange", detail: "Wireless Target Network Strategy Exchange", type: "meeting" },
      { time: "18:30–20:00", title: "Dinner", detail: "Restaurant", type: "logistics" },
      { time: "20:10–21:40", title: "En route", detail: "Restaurant to Hotel", type: "travel" },
    ],
  },
  {
    day: 4,
    date: "2026-06-25",
    label: "Telecom Service Centre and Shanghai Engagements",
    city: "Shanghai",
    country: "China",
    summary:
      "Tianyi Vision Exhibition Hall, Shanghai Telecom Zhangyang Road Service Center, home networking packages discussion, Shanghai tour and Huangpu River night cruise.",
    items: [
      { time: "08:30–09:00", title: "Breakfast", detail: "Hotel", type: "logistics" },
      { time: "09:10–09:50", title: "En route", detail: "Hotel - Tianyi Vision Exhibition Hall", type: "travel" },
      { time: "10:00–12:00", title: "Exhibition Hall Visit", detail: "Tianyi Vision Exhibition Hall", type: "visit" },
      { time: "12:30–14:00", title: "Lunch", detail: "Restaurant", type: "logistics" },
      {
        time: "14:10–14:40",
        title: "En route",
        detail: "Restaurant - Shanghai Telecom Zhangyang Road Service Center",
        type: "travel",
      },
      {
        time: "15:00–16:00",
        title: "Home networking discussion",
        detail: "Introduction to home networking packages, tariff design, marketing scripts, etc.",
        type: "meeting",
      },
      { time: "16:20–18:40", title: "Shanghai Tour", detail: "Within Shanghai City", type: "leisure" },
      { time: "18:50–19:50", title: "Night Cruise on the Huangpu River", detail: "Boat tours", type: "leisure" },
    ],
  },
  {
    day: 5,
    date: "2026-06-26",
    label: "Shanghai to Guiyang",
    city: "Shanghai → Guiyang",
    country: "China",
    summary: "Shanghai free time, transfer to Hongqiao Airport, flight to Guiyang, dinner and hotel check-in.",
    items: [
      { time: "08:30–09:00", title: "Breakfast", detail: "Hotel", type: "logistics" },
      { time: "09:00–11:00", title: "Shanghai Free Time Activity", detail: "Within Shanghai City", type: "leisure" },
      { time: "11:10–12:00", title: "En route", detail: "Head to Terminal 2 at Hongqiao Airport", type: "travel" },
      { time: "13:50–16:45", title: "The plane is en route", detail: "Shanghai - Guiyang", type: "travel" },
      { time: "17:40–18:40", title: "Dinner", detail: "Restaurant", type: "logistics" },
      { time: "18:50–19:30", title: "En route", detail: "Restaurant - Kempinski Hotel", type: "travel" },
      { time: "19:40", title: "Check-in Procedure", detail: "Hotel Kempinski", type: "logistics" },
    ],
  },
  {
    day: 6,
    date: "2026-06-27",
    label: "Guiyang Data Centre and 5G-A Experience",
    city: "Guiyang → Shanghai",
    country: "China",
    summary: "Guizhou Yunshangtun exhibition hall visit, park tour, 5G-A experience, data centre tour and return flight to Shanghai.",
    items: [
      { time: "08:30–09:00", title: "Breakfast", detail: "Hotel Kempinski", type: "logistics" },
      { time: "09:00–10:00", title: "En route", detail: "The hotel is heading to Yunshangtun in Guizhou", type: "travel" },
      { time: "10:30–11:30", title: "Exhibition Hall Visit", detail: "Guizhou Yunshangtun", type: "visit" },
      { time: "11:30–12:00", title: "Park Tour + 5G-A Experience", detail: "Guizhou Yunshangtun", type: "visit" },
      { time: "12:00–13:30", title: "Lunch", detail: "Guizhou Yunshangtun", type: "logistics" },
      { time: "14:00–15:00", title: "Data Center Tour", detail: "Guizhou Yunshangtun", type: "visit" },
      { time: "15:00–16:00", title: "En route", detail: "Guizhou Yunshangtun - Airport", type: "travel" },
      { time: "18:00–20:45", title: "HO1208", detail: "Guiyang - Shanghai", type: "travel" },
    ],
  },
  {
    day: 7,
    date: "2026-06-28",
    label: "Return to Windhoek",
    city: "Shanghai → Windhoek",
    country: "China → Namibia",
    summary: "Return journey from Shanghai to Windhoek.",
    items: [
      { time: "00:20–13:20", title: "En route", detail: "Shanghai - Windhoek (ET685 + ET835)", type: "travel" },
    ],
  },
]

export type Location = {
  name: string
  country: string
  role: string
  timezone: string
  utcOffset: number
}

export const LOCATIONS: Location[] = [
  { name: "Windhoek", country: "Namibia", role: "Origin & return", timezone: "CAT", utcOffset: 2 },
  { name: "Shanghai", country: "China", role: "Executive engagements", timezone: "CST", utcOffset: 8 },
  { name: "Guiyang", country: "China", role: "Guizhou Yunshangtun programme", timezone: "CST", utcOffset: 8 },
]

export const EXECUTIVE_NOTES: { id: string; title: string; body: string; tag: string }[] = [
  {
    id: "n1",
    title: "Mission note",
    body: "Add note during the mission.",
    tag: "Placeholder",
  },
  {
    id: "n2",
    title: "Follow-up note",
    body: "Add follow-up note after engagements.",
    tag: "Placeholder",
  },
]

export const OBSERVATIONS: { id: string; day: string; text: string }[] = [
  { id: "o1", day: "To be captured", text: "Add observation during the mission." },
  { id: "o2", day: "To be captured", text: "Add Telecom Namibia implication or lesson learned." },
]

export type ActionItem = {
  id: string
  title: string
  owner: string
  due: string
  done: boolean
}

export const ACTION_ITEMS: ActionItem[] = [
  { id: "a1", title: "Add action item", owner: "To be assigned", due: "To be confirmed", done: false },
  { id: "a2", title: "Add follow-up action", owner: "To be assigned", due: "To be confirmed", done: false },
]