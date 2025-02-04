import type { Metadata } from "next"
import { Playfair_Display, Great_Vibes } from "next/font/google"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import "./globals.css"
import type React from "react" // Import React

config.autoAddCss = false

const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-great-vibes" })

export const metadata: Metadata = {
  title: "Alicia Suciadi's Design Portfolio",
  description:
    "Alicia Suciadi's design portfolio showcasing skills, education, and creative work. Based in Jakarta, Indonesia.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${greatVibes.variable} font-sans bg-white text-black`}>{children}</body>
    </html>
  )
}

