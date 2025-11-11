import Link from "next/link"

export default function Card({ title, description, href }: { title: string, description: string, href?: string }) {
  const content = (
    <div className="card p-6 h-full">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
      {href && <span className="mt-4 inline-block text-sm">Детальніше →</span>}
    </div>
  )
  return href ? <Link className="no-underline" href={href}>{content}</Link> : content
}