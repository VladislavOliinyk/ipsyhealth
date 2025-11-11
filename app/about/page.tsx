import Container from "@/components/Container"
export const metadata = { title: "Про нас — IPsyHealth" }
export default function Page() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold">Про нас</h1>
        <p className="mt-4 text-gray-700">Місія, цінності, партнери, історія ініціативи. Контент підключимо з CMS.</p>
      </Container>
    </section>
  )
}