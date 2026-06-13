import React from "react"
import Navbar from "../../navbar"
import { cn } from "@workspace/ui/lib/utils"
import { ArrowBigDownDash } from "lucide-react"
import KenyaOutline from "./kenya-outline"
import MaskedImage from "./masked-image"
import GivingPads from "../../../public/images/Giving pads 1.jpeg"
import { Donate, GetInvolved } from "../../buttons"

export default function Hero({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={"light-section relative hero-height"}>
      <section
        className={cn("relative mx-auto max-w-480 lg:px-10", className)}
        {...props}
      >
        <Navbar className={"relative z-50 backdrop-blur-none"} />
        <div
          className={
            "mx-auto flex flex-col items-center justify-center sm:pt-0 lg:flex-row 2xl:max-w-450 2xl:items-start"
          }
        >
          <div className="relative left-0 z-30 flex max-h-screen flex-col justify-center px-5 pb-24 md:px-10 md:pt-10 lg:absolute lg:top-20 lg:max-w-md xl:max-w-205 xl:px-20 2xl:relative 2xl:top-0">
            <p className="mt-4 mb-5 font-sans text-sm tracking-widest text-pink uppercase md:mt-0 md:text-base">
              Emmanuel Pad Foundation
            </p>
            <div className={"2xl:ps-5"}>
              <h1 className="mb-8 font-sedgwick text-5xl leading-18 sm:text-6xl md:mb-5 lg:leading-28 2xl:text-[90px]">
                <span className={"text-pink"}>Empowering Girls </span>
                <br className={"hidden 2xl:inline-block"} />
                Through <span className={"text-blue"}>Dignity</span>{" "}
                <span className={"inline-block 2xl:hidden"}>&</span>
                <span className={"hidden 2xl:inline-block"}>and</span>{" "}
                <span className={"text-blue"}>Care</span>
              </h1>

              <p className="font-sans text-sm leading-normal font-light md:max-w-150 md:text-base md:leading-normal xl:max-w-175">
                To empower girls and young women through the provision of
                menstrual hygiene products, education, and community support
                programs that promote dignity, health, and equal opportunities.
              </p>

              <div className="mt-10 flex flex-col flex-wrap gap-4 md:flex-row 2xl:mt-10">
                <GetInvolved className={"get-involved-btn"} />
                <Donate text={"Donate Now"} />
              </div>

              <div className="mt-5 flex flex-wrap gap-2 pt-4 sm:my-5 sm:gap-5 md:my-10 md:gap-12 2xl:my-10 2xl:gap-20">
                {stats.map(({ value, label }) => (
                  <div key={label} className="flex flex-col font-sans">
                    <span className="font-heading text-2xl font-semibold text-pink sm:text-3xl md:text-4xl 2xl:text-5xl">
                      {value}
                    </span>
                    <span className="mt-1 text-[10px] font-light tracking-widest uppercase md:text-xs 2xl:text-sm">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <KenyaOutline
            className={"absolute -top-20 z-0 border-0 opacity-100 lg:hidden"}
          />

          <MaskedImage
            src={GivingPads}
            id={"one"}
            className={
              "hero-image absolute right-10 -mt-8 hidden h-180 w-auto md:top-40 lg:block 2xl:hidden"
            }
          />

          <MaskedImage
            src={GivingPads}
            id={"two"}
            className={
              "hero-image -mt-10 hidden w-auto pe-10 2xl:block 2xl:h-230"
            }
          />
        </div>

        <div
          className={
            "absolute right-1/2 bottom-3 flex translate-x-1/2 flex-col items-center justify-center gap-2 md:bottom-10"
          }
        >
          <p
            className={"font-sans text-xs font-light tracking-widest uppercase"}
          >
            our story
          </p>
          <ArrowBigDownDash
            className={"size-5 animate-bounce fill-blue stroke-blue"}
          />
        </div>
      </section>
    </div>
  )
}

const stats = [
  { value: "2,000+", label: "Girls Impacted" },
  { value: "15+", label: "Schools Reached" },
  { value: "3", label: "Core Programs" },
]
