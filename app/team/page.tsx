import Container from "@/components/Container"
export const metadata = { title: "Команда — IPsyHealth" }
export default function Page() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold">Команда</h1>
        <p className="mt-4 text-gray-700">Картки фахівців із напрямами, досвідом і розкладом.</p>
      </Container>
    </section>
  )
}