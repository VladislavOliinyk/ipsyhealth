import Container from "@/components/Container"
import Hero from "@/components/Hero"
import Card from "@/components/Card"

export default function Page() {
  const services = [
    { title: "Індивідуальні консультації", description: "Психологічний супровід для військових, ветеранів та цивільних." },
    { title: "Групи підтримки", description: "Темні/відкриті групи, супервізії, групові практики регуляції." },
    { title: "Навчання фахівців", description: "Воркшопи, курси, вебінари з актуальних підходів." },
  ]
  return (
    <>
      <Hero />
      <section className="py-12 sm:py-16">
        <Container>
          <h2 className="text-2xl font-bold">Що ми робимо</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => <Card key={i} title={s.title} description={s.description} href="/services" />)}
          </div>
        </Container>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50">
        <Container>
          <h2 className="text-2xl font-bold">Найближчі події</h2>
          <p className="mt-2 text-gray-600">Каталог подій/вебінарів буде під’єднано до CMS. Поки що — заглушка.</p>
        </Container>
      </section>
    </>
  )
}