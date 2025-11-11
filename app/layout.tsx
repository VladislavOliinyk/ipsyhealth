import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "IPsyHealth — Психологічна допомога та навчання",
  description: "Консультації, групи підтримки, навчальні проєкти, події та ресурси з психічного здоров’я.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "IPsyHealth",
    description: "Підтримка психічного здоров’я: консультації, події, навчання.",
    type: "website"
  },
  metadataBase: new URL("https://example.com")
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}