import { ExternalLink, HandHeart, Handshake, Phone } from "lucide-react"
import React from "react"
import { cn } from "@workspace/ui/lib/utils"

export function GetInvolved({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "group/get-involved relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-blue px-7 py-3.5 font-medium tracking-widest uppercase transition-all duration-700 hover:text-white",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -z-10 origin-left scale-120 scale-x-0 rounded-lg bg-blue transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/get-involved:scale-x-101" />
      <Handshake className={"size-5"} />
      Get Involved
    </button>
  )
}

export function Donate({
  text,
  className,
  ...props
}: { text: string | undefined } & React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "group/donate relative isolate flex items-center justify-center gap-2 overflow-hidden rounded-lg bg-pink px-7 py-3.5 font-medium tracking-widest text-white uppercase transition-all md:tracking-[2px]",
        className
      )}
      {...props}
    >
      {/*<span className="absolute inset-0 -z-10 origin-left scale-x-0 rounded-lg bg-pink transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/donate:scale-x-101" />*/}
      <HandHeart className={"size-5"} />
      {text ? text : "Donate Now"}
    </button>
  )
}

export function LearnMore({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <>
      <button
        className={cn(
          "group/learn-more relative isolate flex items-center justify-center gap-2 self-start overflow-hidden rounded-lg border border-pink bg-transparent px-5 py-2.5 text-sm font-medium tracking-[2px] uppercase transition-all hover:text-white",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 -z-10 origin-left scale-x-0 rounded-lg bg-pink transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/learn-more:scale-x-101" />
        Learn More
        <ExternalLink className={"size-4 transition-all duration-500"} />
      </button>
    </>
  )
}

export function Contactus({
  className,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "group/contact-us relative isolate inline-flex items-center justify-center gap-2 overflow-hidden rounded-lg border-2 border-white px-7 py-3 font-medium tracking-widest text-white uppercase hover:border-blue transition-all duration-500",
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 -z-10 origin-left scale-x-0 rounded-lg bg-blue transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/contact-us:scale-x-101" />
      <Phone className={"size-5"} />
      Contact Us
    </button>
  )
}
