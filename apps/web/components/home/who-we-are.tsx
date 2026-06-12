import { cn } from "@workspace/ui/lib/utils"
import React from "react"
import { Handshake, Heart, Sparkles } from "lucide-react"
import { LearnMore } from "../buttons"
import SectionHeader from "../section"

export default function WhoWeAre({
  className,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("alt-section py-10 md:py-20 2xl:py-32", className)}
      {...props}
    >
      <div className={"mx-auto max-w-7xl px-5 md:px-12"}>
        <SectionHeader heading={"Who we are"} eyebrow={"Our Story"} />

        <div className={"grid items-start gap-10 md:gap-20 lg:grid-cols-2"}>
          {/* Left Text */}
          <div className={"text-base leading-loose"}>
            <p className={"mb-6"}>
              <strong className={"text-foreground"}>
                Emmanuel Pad Foundation{" "}
              </strong>
              is a community-based initiative dedicated to supporting girls and
              young women by providing access to menstrual hygiene products and
              education. Founded by Emmanuel Barongo, the foundation has
              impacted over 2,000 girls in Kisii County and continues to expand
              its reach.
            </p>
            <p className={"mb-0 lg:mb-12"}>
              Since our founding, we have reached over{" "}
              <strong className={"text-pink-page"}>2,000 girls</strong> across
              Kisii County through pad distribution and building safe spaces
              where menstrual health is discussed openly. We believe every girl
              deserves to learn, grow and lead.
            </p>
            {/* Show in the large screens */}
            <LearnMore className={"hidden lg:flex"} />
          </div>

          {/* Organization statements */}
          <div>
            {pillars.map(({ icon, title, text }) => (
              <div key={title} className={"flex gap-5 pb-8"}>
                <span className={"mt-0.5 shrink-0"}>{icon}</span>
                <div>
                  <h3
                    className={
                      "mb-1 font-semibold tracking-wide text-foreground"
                    }
                  >
                    {title}
                  </h3>
                  <p className={"leading-relaxed"}>{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Show in the small screens */}
          <LearnMore className={"flex lg:hidden"} />
        </div>
      </div>
    </section>
  )
}

const pillars = [
  {
    icon: <Heart className={"stroke-pink-page"} />,
    title: "Our Mission",
    text: "To empower girls and young women through the provision of menstrual hygiene products, education and community support programs that promote dignity, health and equal opportunities.",
  },
  {
    icon: <Sparkles className={"stroke-blue-page"} />,
    title: "Our Vision",
    text: "To create a world where every girl has access to menstrual hygiene products, education, and the confidence to pursue her dreams without limitations.",
  },
  {
    icon: <Handshake className={"stroke-pink-page"} />,
    title: "Our Values",
    text: "Dignity, Equity, Empowerment, Community and Integrity.",
  },
]
