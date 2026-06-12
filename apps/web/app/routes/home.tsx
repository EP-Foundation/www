import Hero from "../../components/home/hero"
import { useEffect, useState } from "react"
import Navbar from "../../components/navbar"
import WhoWeAre from "../../components/home/who-we-are"
import OurPrograms from "../../components/home/programs"
import CommunityVoices from "../../components/home/community-voices"
import Events from "../../components/home/events"
import BottomCta from "../../components/home/bottom-cta"
import Footer from "../../components/home/footer"

export default function Home() {
  const [showFixedNav, setShowFixedNav] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("hero")
      const heroBottom = hero?.getBoundingClientRect().bottom

      heroBottom && setShowFixedNav(heroBottom <= 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-svh">
      <Hero id={"hero"} className={"bg-green-500"} />

      {/* Shown only when the user scrolls past the hero section */}
      <Navbar
        className={`fixed top-0 left-0 z-50 min-h-16 bg-background/60 backdrop-blur-md transition-all duration-500 ${
          showFixedNav
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-full opacity-0"
        }`}
      />

      <WhoWeAre />
      <OurPrograms />
      <CommunityVoices />
      <Events />
      <BottomCta />
      <Footer />
    </div>
  )
}
