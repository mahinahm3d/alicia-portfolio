import { Navbar } from "@/components/Navbar"
import { HomeSection } from "@/components/HomeSection"
import { AboutSection } from "@/components/AboutSection"
import { ContentsSection } from "@/components/ContentsSection"
import { ContactSection } from "@/components/ContactSection"

export default function Home() {
  return (
    <main>
      <Navbar />
      <HomeSection />
      <AboutSection />
      <ContentsSection />
      <ContactSection />
    </main>
  )
}

