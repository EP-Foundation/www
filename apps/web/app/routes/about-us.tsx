import Navbar from "../../components/navbar"
import React, { useEffect, useState } from "react"
import { cn } from "@workspace/ui/lib/utils"
import PadDistribution from "../../public/images/Pad Distribution 2.jpeg"
import SectionHeader from "../../components/section"
import BottomCta from "../../components/home/bottom-cta"
import Footer from "../../components/home/footer"
import { Handshake, Heart, Quote, Sparkles } from "lucide-react"
import CatProfile from "../../public/profiles/cat.jpeg"

export default function AboutUs() {
  const [showFixedNav, setShowFixedNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("about-us-hero")
      const heroBottom = hero?.getBoundingClientRect().bottom

      heroBottom && setShowFixedNav(heroBottom <= 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <PageHero
        id={"about-us-hero"}
        mainTitle={
          <>
            Who We Are &amp;
            <br />
            <span className={"text-pink"}>Why We Do It</span>
          </>
        }
        eyebrow={"Emmanuel Pad Foundation"}
        subtitle={
          "To create a world where every girl has access to menstrual hygiene products, education, and the confidence to pursue her dreams without limitations."
        }
      />

      {/* Shown only when the user scrolls past the hero section */}
      <Navbar
        className={`fixed top-0 left-0 z-50 min-h-16 bg-background/60 backdrop-blur-md transition-all duration-500 ${
          showFixedNav
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      />

      <OurStory />
      <Pillars />
      <Impact />

      <BottomCta />
      <Footer />
    </>
  )
}

function PageHero({
  eyebrow,
  mainTitle,
  subtitle,
  className,
  ...props
}: {
  eyebrow: string
  mainTitle: React.ReactNode
  subtitle: string
} & React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "dark-section relative min-h-50 overflow-hidden md:min-h-100",
        className
      )}
      {...props}
    >
      {/* Gradient Orbs */}
      <div
        className={
          "absolute -top-48 -left-30 h-150 w-150 rounded bg-radial from-pink/15 to-transparent to-70%"
        }
      />
      <div
        className={
          "absolute -right-48 -bottom-56 h-150 w-150 rounded bg-radial from-blue/15 to-transparent to-70%"
        }
      />

      <div
        className={
          "absolute right-0 bottom-0 left-0 h-0.75 bg-linear-to-r from-pink-page to-blue-page"
        }
      />

      <Navbar className={"max-h-24 bg-white text-foreground"} />

      <div
        className={
          "relative z-10 mx-auto px-5 py-14 md:max-w-4xl md:px-12 md:py-20 2xl:max-w-7xl"
        }
      >
        <div className={"mb-5 flex items-center gap-3"}>
          <div className={"h-0.5 w-5 bg-light-pink-page"} />
          <p
            className={
              "text-sm font-semibold tracking-[2px] text-light-pink-page uppercase md:tracking-[5px]"
            }
          >
            {eyebrow}
          </p>
          <div className={"h-0.5 w-5 bg-light-pink-page"} />
        </div>

        <h1
          className={
            "mb-6 text-[clamp(2rem,5vw,4rem)] font-semibold tracking-widest"
          }
        >
          {mainTitle}
        </h1>

        <p className={"max-w-xl text-xs tracking-wide md:text-sm"}>
          {subtitle}
        </p>
      </div>
    </section>
  )
}

function OurStory({ className, ...props }: React.ComponentProps<"section">) {
  return (
    <section
      className={cn("light-section py-5 md:py-32", className)}
      {...props}
    >
      <div className={"mx-auto max-w-450 px-5 md:px-12"}>
        <div className={"grid items-center gap-10 2xl:grid-cols-2 2xl:gap-40"}>
          <div
            className={
              "relative min-h-80 overflow-hidden rounded-xl md:rounded-2xl 2xl:aspect-video 2xl:min-h-110"
            }
          >
            <img
              src={PadDistribution}
              alt={"Our Story"}
              className={
                "absolute inset-0 h-full w-full object-cover brightness-90 contrast-110 saturate-90"
              }
            />
          </div>

          <div>
            <SectionHeader eyebrow="Our Story" heading="How We Began" />
            <div className={"text-sm leading-loose"}>
              <p className="mb-6">
                Emmanuel Pad Foundation was born from a simple but painful
                truth: too many girls in Kisii County, Kenya were missing school
                every month simply because they could not afford sanitary pads.
                Our founder, Emmanuel Barongo, witnessed this injustice
                firsthand and resolved to do something about it.
              </p>
              <p className="mb-6">
                What started as a small community effort — collecting and
                distributing pads in a single school — has grown into a
                structured foundation reaching over{" "}
                <strong className={"text-pink"}>2,000 girls</strong> across{" "}
                <strong className={"text-blue"}>15+ schools</strong>. Every step
                of that growth has been driven by the belief that menstrual
                health is not a luxury — it is a right.
              </p>
              <p>
                Today, EPF runs three core programs: pad distribution, menstrual
                health education, and community outreach.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Pillars() {
  const items = [
    {
      icon: (className: React.ComponentProps<"div">["className"]) => (
        <Heart className={className} />
      ),
      title: "Our Mission",
      body: "To empower girls and young women through the provision of menstrual hygiene products, education and community support programs that promote dignity, health and equal opportunities.",
    },
    {
      icon: (className: React.ComponentProps<"div">["className"]) => (
        <Sparkles className={className} />
      ),
      title: "Our Vision",
      body: "To create a world where every girl has access to menstrual hygiene products, education, and the confidence to pursue her dreams without limitations.",
    },
    {
      icon: (className: React.ComponentProps<"div">["className"]) => (
        <Handshake className={className} />
      ),
      title: "Our Values",
      body: "Dignity, Equity, Empowerment, Community and Integrity.",
    },
  ]

  return (
    <section className={"alt-section py-10 md:py-32"}>
      <div className={"mx-auto max-w-7xl px-5 md:px-12"}>
        <SectionHeader
          heading={"Mission & Vision"}
          eyebrow={"What Drives Us"}
        />

        <div className={"grid gap-8 md:grid-cols-3"}>
          {items.map(({ title, icon, body }, index) => (
            <div
              key={index}
              className={"flex flex-col rounded-2xl border px-10 py-14"}
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
              <p
                className={cn(
                  "mb-5 flex items-center gap-4 text-lg font-semibold tracking-[3px] uppercase",
                  index % 2 ? "text-pink" : "text-blue"
                )}
              >
                {icon(cn(index % 2 ? "text-pink" : "text-blue", "size-8"))}
                {title}
              </p>
              <p className={"text-sm leading-[1.9]"}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Impact() {
  const stats = [
    { value: "2,000+", label: "Girls Impacted" },
    { value: "15+", label: "Schools Reached" },
    { value: "3", label: "Core Programs" },
  ]

  return (
    <section className={"dark-section py-10 md:py-32"}>
      <div className={"mx-auto max-w-7xl px-5 md:px-12"}>
        <SectionHeader eyebrow={"Our Impact"} heading={"The Lives we've touched"} />

        <div
          className={
            "grid gap-12 rounded-2xl border border-[#0E2A33FF] bg-light-dark p-4 md:p-12 lg:grid-cols-2"
          }
        >
          <div className={"flex flex-col justify-center"}>
            <p
              className={
                "mb-4 text-sm font-semibold tracking-[4px] text-light-pink-page uppercase"
              }
            >
              since 2019
            </p>
            <div className={"mb-4 flex items-end gap-3"}>
              <span
                className={
                  "text-[clamp(4rem,9vw,7rem)] leading-none font-bold text-pink"
                }
              >
                2,000
              </span>
              <span
                className={"text-5xl font-bold text-light-pink-page md:mb-3"}
              >
                +
              </span>
            </div>

            <p className={"mb-2 text-base font-semibold text-white"}>
              Girls reached
            </p>
            <p className={"text-sm leading-loose"}>
              Every number here represents a girl who sat through an exam,
              raised her hand in class, or simply stayed in school on a day she
              otherwise would not have.
            </p>

            <div
              className={"mt-10 flex gap-10 border-t border-[#0E2A33FF] pt-8"}
            >
              {stats.map(({ label, value }, index) => (
                <div key={index}>
                  <span
                    className={cn(
                      "block text-2xl font-bold",
                      index % 2 ? "text-pink" : "text-blue"
                    )}
                  >
                    {value}
                  </span>
                  <span className={"text-[10px] tracking-widest uppercase"}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={
              "flex flex-col justify-between rounded-xl border border-[#0E2A33FF] bg-[#00171FFF] p-6 md:p-8"
            }
          >
            <Quote className={"stroke-pink"} />
            <p className={"my-8 flex-1 text-base leading-loose md:my-12"}>
              Before this program came to our school, many of us would miss
              classes every month. Now, with the pads and the education we’ve
              received, I feel confident and prepared. I no longer have to
              choose between my health and my education.
            </p>
            <div
              className={
                "flex items-center gap-4 border-t border-[#0E2A33FF] pt-6"
              }
            >
              <div className="boder-pink h-10 w-10 shrink-0 overflow-hidden rounded-full border-2">
                <img
                  src={CatProfile}
                  alt={"profile"}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs font-semibold">Aisha M.</p>
                <p className="text-[10px]">Student, Kisii County</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
