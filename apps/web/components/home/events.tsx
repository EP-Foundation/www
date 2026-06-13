import SectionHeader from "../section"
import CalendarIcon from "../../public/calendar icon.jpeg"
import { LearnMore } from "../buttons"
import { Clock, HeartHandshake, MapPin } from "lucide-react"
import React from "react"

export default function Events() {
  return (
    <section className="alt-section py-10 md:py-20 2xl:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <SectionHeader eyebrow="Upcoming" heading="Events" />

        <div className="grid gap-10 sm:grid-cols-2">
          {events.map(
            ({ month, day, title, time, location, description }, i) => (
              <div
                key={i}
                className="flex flex-col overflow-hidden rounded-2xl"
                style={{
                  border: `2px solid #dde6ee`,
                  transition: "box-shadow 0.25s ease, transform 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                    `0 8px 32px #00171f18`
                  ;(e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-3px)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLDivElement).style.boxShadow = "none"
                  ;(e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)"
                }}
              >
                {/* Image with date chip */}
                <div className="relative h-60 shrink-0">
                  <img
                    src={CalendarIcon}
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className={
                      "absolute top-4 left-4 flex flex-col items-center rounded-xl bg-pink px-3 py-2 text-white"
                    }
                  >
                    <span
                      className={"text-sm font-medium tracking-wider uppercase"}
                    >
                      {month}
                    </span>
                    <span className={"text-2xl leading-none font-bold"}>
                      {day}
                    </span>
                  </div>
                </div>

                <div className={"flex flex-1 flex-col p-4 md:p-9"}>
                  <p
                    className={
                      "mb-4 text-sm leading-snug font-semibold 2xl:text-base"
                    }
                  >
                    {title}
                  </p>
                  <div
                    className={
                      "mb-5 flex flex-col gap-2 text-xs leading-snug 2xl:text-sm"
                    }
                  >
                    <span className={"flex items-center gap-2"}>
                      <Clock className={"size-4 stroke-blue"} /> {time}
                    </span>
                    <span className={"flex items-center gap-2"}>
                      <MapPin className={"size-4.5 stroke-blue"} /> {location}
                    </span>
                  </div>
                  <p className="mb-5 flex-1 text-sm leading-relaxed md:mb-8">
                    {description}
                  </p>
                  <LearnMore
                    text={"Join The Journey"}
                    icon={(
                      className: React.ComponentProps<"div">["className"]
                    ) => <HeartHandshake className={className} />}
                    className={
                      "border-0 px-0 text-pink transition-all duration-800 hover:px-3"
                    }
                  />
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  )
}

const events = [
  {
    month: "Aug",
    day: "29",
    title: "Community Menstrual Health & Empowerment Day",
    time: "8:00 AM – 1:00 PM",
    location: "Kisii County Community Center",
    description:
      "Join us for a day dedicated to breaking stigma, sharing knowledge, and supporting girls and women in our community.",
  },
  {
    month: "Sep",
    day: "12",
    title: "Community Menstrual Health & Empowerment Day",
    time: "8:00 AM – 1:00 PM",
    location: "Suneka Girls School, Kisii",
    description:
      "Students, parents, and local leaders come together for an open conversation around menstrual health and community support.",
  },
]
