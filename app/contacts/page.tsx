import Container from "@/components/Container"
export const metadata = { title: "Контакти — IPsyHealth" }
export default function Page() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold">Контакти</h1>
        <p className="mt-4 text-gray-700">Форма зворотного зв’язку, адреса, карта представництв.</p>
      </Container>
    </section>
  )
}