import Container from "@/components/Container"
export const metadata = { title: "Допомога — IPsyHealth" }
export default function Page() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold">Допомога</h1>
        <p className="mt-4 text-gray-700">Опис послуг, умови, FAQ та форми запису.</p>
      </Container>
    </section>
  )
}