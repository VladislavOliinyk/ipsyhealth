"use client"
import Link from "next/link"
import { useState } from "react"
import Container from "./Container"

const nav = [
  { href: "/", label: "Головна" },
  { href: "/team", label: "Команда" },
  { href: "/services", label: "Допомога" },
  { href: "/projects", label: "Навчальні проєкти" },
  { href: "/contacts", label: "Контакти" },
  { href: "/about", label: "Про нас" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-100">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-semibold no-underline">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-brand-600 text-white">IH</span>
          <span className="hidden sm:block">IPsyHealth</span>
        </Link>
        <nav className="hidden md:flex gap-4">
          {nav.map(i => (
            <Link key={i.href} href={i.href} className="text-sm text-gray-700 hover:text-gray-900 no-underline">
              {i.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <button aria-label="Меню" onClick={() => setOpen(!open)} className="btn btn-outline">Меню</button>
        </div>
      </Container>
      {open && (
        <div className="md:hidden border-t border-gray-100">
          <Container className="py-2 flex flex-col gap-2">
            {nav.map(i => (
              <Link key={i.href} href={i.href} className="py-2 text-gray-800 no-underline" onClick={() => setOpen(false)}>
                {i.label}
              </Link>
            ))}
          </Container>
        </div>
      )}
    </header>
  )
}