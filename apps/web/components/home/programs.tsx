import SectionHeader from "../section"
import { LearnMore } from "../buttons"
import CommunityOutreachImage from "../../public/images/Community Outreach.jpeg"
import PadDistributionImage from "../../public/images/Pad Distribution.jpeg"
import MenstrualEducation from "../../public/images/Menstrual Education.jpeg"

export default function OurPrograms() {
  return (
    <section className="light-section py-10 md:py-20 2xl:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-12">
        <SectionHeader eyebrow="What We Do" heading="Our Programs" />

        <div className="flex flex-col gap-20">
          {programs.map(({ title, tagline, description, image, stat }, i) => (
            <div
              key={title}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} overflow-hidden rounded-2xl`}
              style={{
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
              <div className="relative min-h-85 shrink-0 overflow-hidden lg:w-[42%]">
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute bottom-4 left-4 rounded-full bg-blue px-3 py-1.5 font-['Poppins',sans-serif] text-[10px] font-semibold tracking-widest text-white uppercase">
                  {stat}
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-center p-1 pt-4 md:p-14">
                <p className="mb-2 hidden text-[10px] font-semibold tracking-[3px] lg:block">
                  {tagline}
                </p>
                <h3 className="mt-2 mb-2 text-xl leading-snug font-semibold text-light-pink-page uppercase md:mb-0 lg:mt-0">
                  {title}
                </h3>
                <p className="mb-5 text-sm leading-[1.9] lg:mt-6 lg:mb-7">
                  {description}
                </p>
                <LearnMore
                  className={
                    "justify-start border-0 px-0 text-blue transition-all duration-500 hover:px-3 lg:w-fit"
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const programs = [
  {
    title: "Pad Distribution",
    tagline: "Free. Dignified. Reliable.",
    description:
      "Emmanuel Pad Foundation is a community-based initiative dedicated to supporting girls and young women by providing access to menstrual hygiene products and education. Founded by Emmanuel Barongo, the foundation has impacted over 2,000 girls in Kisii County and continues to expand its reach.",
    image: PadDistributionImage,
    stat: "2,000+ girls served",
  },
  {
    title: "Menstrual Education",
    tagline: "Knowledge is Power.",
    description:
      "Emmanuel Pad Foundation is a community-based initiative dedicated to supporting girls and young women by providing access to menstrual hygiene products and education. Founded by Emmanuel Barongo, the foundation has impacted over 2,000 girls in Kisii County and continues to expand its reach.",
    image: MenstrualEducation,
    stat: "15+ schools reached",
  },
  {
    title: "Community Outreach",
    tagline: "Change Starts at Home.",
    description:
      "Emmanuel Pad Foundation is a community-based initiative dedicated to supporting girls and young women by providing access to menstrual hygiene products and education. Founded by Emmanuel Barongo, the foundation has impacted over 2,000 girls in Kisii County and continues to expand its reach.",
    image: CommunityOutreachImage,
    stat: "30+ community events",
  },
]
