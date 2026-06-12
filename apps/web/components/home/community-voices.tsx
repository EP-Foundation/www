import SectionHeader from "../section"

import CatProfile from "../../public/profiles/cat.jpeg"
import { cn } from "@workspace/ui/lib/utils"

export default function CommunityVoices() {
  return (
    <section className="dark-section py-10 md:py-20 2xl:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <SectionHeader eyebrow="Real Stories" heading="COMMUNITY VOICES" />

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map(({ quote, name, role }, index) => (
            <div
              key={name}
              className="flex flex-col rounded-2xl p-5 md:p-10"
              style={{
                background: "#071e26",
                border: `1px solid #0e2a33`,
                transition: "box-shadow 0.25s ease, transform 0.25s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow =
                  `0 8px 32px #00171f88`
                ;(e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(-3px)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLDivElement).style.boxShadow = "none"
                ;(e.currentTarget as HTMLDivElement).style.transform =
                  "translateY(0)"
              }}
            >
              <span
                className={cn(
                  "mb-3 md:mb-6 font-serif text-5xl leading-none select-none",
                  index % 2 == 0 ? "text-pink" : "text-blue"
                )}
              >
                "
              </span>

              <p className="mb-4 md:mb-8 flex-1 font-['Poppins',sans-serif] text-sm leading-[1.95]">
                {quote}
              </p>

              <div
                className="flex items-center gap-4 pt-6"
                style={{ borderTop: `1px solid #00171f` }}
              >
                <div className="boder-pink h-10 w-10 shrink-0 overflow-hidden rounded-full border-2">
                  <img
                    src={CatProfile}
                    alt={name}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="font-['Poppins',sans-serif] text-xs font-semibold">
                    {name}
                  </p>
                  <p className="font-['Poppins',sans-serif] text-[10px]">
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const testimonials = [
  {
    quote:
      "Before this program came to our school, many of us would miss classes every month. Now, with the pads and the education we’ve received, I feel confident and prepared. I no longer have to choose between my health and my education.",
    name: "Aisha M.",
    role: "Student, Kisii County",
  },
  {
    quote:
      "Before this program came to our school, many of us would miss classes every month. Now, with the pads and the education we’ve received, I feel confident and prepared. I no longer have to choose between my health and my education.",
    name: "Mrs. Nyaboke",
    role: "Teacher, Suneka Girls School",
  },
  {
    quote:
      "Before this program came to our school, many of us would miss classes every month. Now, with the pads and the education we’ve received, I feel confident and prepared. I no longer have to choose between my health and my education.",
    name: "Joyce O.",
    role: "Parent, Kisii Community",
  },
]
