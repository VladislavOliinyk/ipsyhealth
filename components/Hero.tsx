import Container from "./Container"
import Link from "next/link"

const bannerSrc = "/baner.jpg" // поклади файл у public/baner.jpg (або зміни шлях/розширення)

function IconYouTube() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31.2 31.2 0 0 0 0 12a31.2 31.2 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 24 12a31.2 31.2 0 0 0-.5-5.8zM9.6 15.5v-7l6.5 3.5-6.5 3.5z" />
    </svg>
  )
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.5 2.9h-2.4v7A10 10 0 0 0 22 12z"/>
    </svg>
  )
}
function IconTelegram() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
      <path d="M9.04 15.64l-.37 5.26c.54 0 .77-.23 1.05-.51l2.52-2.41 5.22 3.82c.96.53 1.64.25 1.9-.89l3.44-16.15h.01c.31-1.46-.52-2.03-1.46-1.68L1.38 9.8C-.06 10.36-.04 11.22 1.14 11.6l5.2 1.62L19.9 6.2c.6-.36 1.14-.16.69.2"/>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {/* Банер як тло */}
        <img src={bannerSrc} alt="" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white" />
      </div>
      <Container className="py-16 sm:py-24">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            ІНСТИТУТ ПСИХОЛОГІЇ ЗДОРОВʼЯ
          </h1>
          <p className="mt-5 text-lg text-gray-700 max-w-2xl">
            Є неприбутковою організацією, яка надає освітні та психологічні послуги, займається
            науково-методичною роботою та існує завдяки благодійній підтримці та волонтерам.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="https://www.youtube.com/@healthpsychology7961" className="btn btn-outline no-underline" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <span className="inline-flex items-center gap-2"><IconYouTube /> YouTube</span>
            </Link>
            <Link href="https://www.facebook.com/InstituteofHealthPsychology/" className="btn btn-outline no-underline" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span className="inline-flex items-center gap-2"><IconFacebook /> Facebook</span>
            </Link>
            <Link href="https://t.me/+G7sjSLEKbyxhMjNi" className="btn btn-outline no-underline" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <span className="inline-flex items-center gap-2"><IconTelegram /> Telegram</span>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  )
}