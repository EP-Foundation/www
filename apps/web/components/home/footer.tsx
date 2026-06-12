import Logo from "../../public/Logo.png"
import {
  Contact,
  LinkIcon,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"
import { Link } from "react-router"
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../icons"
import React from "react"

export default function Footer() {
  return (
    <footer className={"dark-section"}>
      <div className="h-0.75 bg-linear-to-r from-pink-page to-blue-page" />

      <div className="mx-auto max-w-375 px-12 pt-16 pb-10">
        <div className="flex flex-col gap-16 md:items-start 2xl:flex-row">
          <Link
            className="flex shrink-0 items-center gap-5 md:me-60 md:items-start"
            to={"/"}
          >
            <img
              src={Logo}
              alt="EPF logo"
              className="h-20 w-auto rounded-full object-cover"
            />
            <div>
              <p className="text-base font-bold tracking-[4px] text-pink">
                EMMANUEL PAD
              </p>
              <p className="text-base font-bold tracking-[4px] text-blue">
                FOUNDATION
              </p>
            </div>
          </Link>

          {/* Nav */}
          <nav
            className={
              "flex flex-col flex-wrap justify-center gap-x-10 gap-y-4 ps-10 text-muted-foreground md:me-35 md:ps-0"
            }
          >
            <p
              className={
                "-ms-8 flex cursor-default items-center gap-2 text-xs font-medium tracking-[2px] opacity-70 select-none"
              }
            >
              <LinkIcon className={"size-3"} /> Links
            </p>
            {links.map(({ name, path }) => (
              <a
                key={name}
                href={path}
                className="text-sm tracking-widest transition-colors hover:text-white"
              >
                {name}
              </a>
            ))}
          </nav>

          <div
            className={
              "flex shrink-0 flex-col gap-5 ps-10 text-muted-foreground md:me-35 md:ps-0"
            }
          >
            <p
              className={
                "-ms-8 flex cursor-default items-center gap-2 text-xs font-medium tracking-[2px] opacity-70 select-none"
              }
            >
              <Contact className={"size-3"} /> Get in touch
            </p>

            {contactDetails.map(({ icon, name }, index) => (
              <p
                key={index}
                className={
                  "flex cursor-default items-center justify-start gap-2 text-sm tracking-widest hover:text-white"
                }
              >
                {icon("size-4")} {name}
              </p>
            ))}
          </div>

          <div className="flex shrink-0 flex-row gap-5 ps-10 text-muted-foreground md:flex-col md:ps-0">
            <p
              className={
                "-ms-8 flex cursor-default items-center gap-2 text-xs font-medium tracking-[2px] opacity-70 select-none"
              }
            >
              <MessageCircle className={"size-3"} /> Socials
            </p>

            {socials.map(({ icon, name, link }, i) => (
              <a
                key={i}
                href={link}
                aria-label={name}
                target={"_blank"}
                className={"flex items-center justify-center transition-colors"}
              >
                {icon({
                  className: "fill-muted-foreground hover:fill-blue size-5",
                })}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between text-xs text-muted-foreground sm:flex-row">
          <p className={"cursor-default"}>
            © 2026 Emmanuel Pad Foundation. All rights reserved.
          </p>
          <a href={"#"} className={"hover:text-blue"}>
            Privacy policy.
          </a>
        </div>
      </div>
    </footer>
  )
}

const contactDetails = [
  {
    icon: (className: React.ComponentProps<"div">["className"]) => (
      <Mail className={className} />
    ),
    name: "info@epf.org",
  },
  {
    icon: (className: React.ComponentProps<"div">["className"]) => (
      <Phone className={className} />
    ),
    name: "+254 712345678",
  },
  {
    icon: (className: React.ComponentProps<"div">["className"]) => (
      <MapPin className={className} />
    ),
    name: "Nairobi, Kenya",
  },
]

const socials = [
  {
    icon: FacebookIcon,
    name: "Facebook",
    link: "#",
  },
  {
    icon: TwitterIcon,
    name: "Twitter / X",
    link: "#",
  },
  {
    icon: InstagramIcon,
    name: "Instagram",
    link: "#",
  },
]

const navLinks = [
  "Home",
  "About",
  "Programs",
  "Impact",
  "Get Involved",
  "Contact",
]

const links = [
  {
    name: "Home",
    path: "#",
  },
  {
    name: "Programs",
    path: "#",
  },
  // {
  //   name: "Impact",
  //   path: "#",
  // },
  {
    name: "Get Involved",
    path: "#",
  },
  {
    name: "Contact",
    path: "#",
  },
  {
    name: "About",
    path: "#",
  },
]
