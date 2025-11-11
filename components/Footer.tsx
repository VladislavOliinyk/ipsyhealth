import Container from "./Container"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-100 py-10 text-sm text-gray-600">
      <Container className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} IPsyHealth. Всі права захищено.</p>
        <div className="flex gap-4">
          <Link href="/privacy" className="no-underline">Політика конфіденційності</Link>
          <Link href="/terms" className="no-underline">Умови користування</Link>
        </div>
      </Container>
    </footer>
  )
}