import Container from "./Container"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-8 sm:grid-cols-2 sm:items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
              Психологічна допомога та навчальні програми для стійких спільнот
            </h1>
            <p className="mt-4 text-lg text-gray-700">
              Консультації, групи підтримки, навчання фахівців і події — прозоро, доступно, з повагою до кожного.
            </p>
            <div className="mt-6 flex gap-3">
              <Link href="/services" className="btn btn-primary no-underline">Записатися на консультацію</Link>
              <Link href="/donate" className="btn btn-outline no-underline">Підтримати нас</Link>
            </div>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-brand-100 to-white p-10 ring-1 ring-gray-100 shadow-soft">
            <dl className="grid grid-cols-2 gap-6">
              <div>
                <dt className="text-sm text-gray-600">Фахівців</dt>
                <dd className="text-3xl font-semibold">25+</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Подій на місяць</dt>
                <dd className="text-3xl font-semibold">12+</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Міста/онлайн</dt>
                <dd className="text-3xl font-semibold">UA / Online</dd>
              </div>
              <div>
                <dt className="text-sm text-gray-600">Роки досвіду</dt>
                <dd className="text-3xl font-semibold">10+</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  )
}