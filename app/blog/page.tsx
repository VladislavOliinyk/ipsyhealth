import Container from "@/components/Container"
export const metadata = { title: "Блог — IPsyHealth" }
export default function Page() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <h1 className="text-3xl font-bold">Блог</h1>
        <p className="mt-4 text-gray-700">Статті, новини, матеріали. later → CMS (BlogPosting schema).</p>
      </Container>
    </section>
  )
}