import React, { useState } from "react"
import { NavLink } from "react-router"
import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@workspace/ui/components/sheet"
import { Menu } from "lucide-react"
import Logo from "../public/Logo.png"
import { Donate } from "./buttons"

export default function Navbar({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex min-h-16 w-full items-center justify-between px-3 py-2 backdrop-blur-xs md:px-5 lg:px-12",
        className
      )}
      {...props}
    >
      <img
        src={Logo}
        alt="Emmanuel pad Foundation"
        className={"h-16 w-auto md:h-24"}
      />

      <div className="hidden items-center md:flex md:gap-4 lg:gap-20 xl:gap-40">
        <div className="items-center md:flex md:gap-2 lg:gap-10 xl:gap-10 2xl:gap-12">
          {links.map((link) => (
            <NAvLink key={link.name} name={link.name} path={link.path} />
          ))}
        </div>
        <Donate text={"Donate"} className={"py-2.5"} />
      </div>
      <div className="block pe-4 md:hidden">
        <SheetNavbar />
      </div>
    </div>
  )
}

const links = [
  {
    name: "Home",
    path: "/",
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
    path: "/about-us",
  },
]

function NAvLink({
  name,
  path,
  ...props
}: {
  name: string
  path: string
} & React.ComponentProps<"button">) {
  return (
    <Button variant="link" {...props}>
      <NavLink
        to={path}
        className={({ isActive, isPending }) =>
          isActive
            ? "text-foreground"
            : isPending
              ? "text-link-hover"
              : "text-foreground"
        }
        preventScrollReset
      >
        <span className="font-sans text-[12px] font-normal tracking-wider uppercase underline-offset-4 transition-all duration-500 hover:text-primary hover:underline">
          {name}
        </span>
      </NavLink>
    </Button>
  )
}

function SheetNavbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Menu size="24" className={"fill-foregrund"} />
      </SheetTrigger>
      <SheetContent
        side="top"
        className="flex flex-col items-start gap-4 border-0 bg-transparent py-7 backdrop-blur-lg"
      >
        {links.map((link) => (
          <Button
            variant="link"
            className="font-base cursor-pointer font-heading text-base uppercase"
            onClick={() => setIsOpen(false)}
            key={link.name}
          >
            <NavLink
              to={link.path}
              className={({ isActive, isPending }) =>
                isActive
                  ? "text-foreground"
                  : isPending
                    ? "text-link-hover"
                    : "text-foreground"
              }
              preventScrollReset
            >
              {link.name}
            </NavLink>
          </Button>
        ))}
      </SheetContent>
    </Sheet>
  )
}
