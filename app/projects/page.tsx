import Container from "@/components/Container"
export const metadata = { title: "Навчальні проєкти — IPsyHealth" }
export default function Page() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold">Навчальні проєкти</h1>
        <p className="mt-4 text-gray-700">Каталог курсів і подій з фільтрами (онлайн/офлайн, напрям, рівень).</p>
      </Container>
    </section>
  )
}