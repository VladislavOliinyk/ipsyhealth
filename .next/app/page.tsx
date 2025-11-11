import Container from "@/components/Container"
import Hero from "@/components/Hero"
import { motion } from "framer-motion"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  viewport: { once: true, amount: 0.2 }
}

export default function Page() {
  return (
    <>
      <Hero />

      {/* Дві колонки: Наше бачення / Наші цінності (коротко) */}
      <section className="py-12 sm:py-16">
        <Container>
          <div className="grid gap-8 sm:grid-cols-2">
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold">Наше бачення</h2>
              <p className="mt-3 text-gray-700">
                Ми сприяємо розвитку здорової та щасливої спільноти через впровадження передових досліджень у сфері
                психології здоров'я, освітніх програм та підтримки психічного благополуччя.
              </p>
            </motion.div>
            <motion.div {...fadeUp}>
              <h2 className="text-2xl font-bold">Наші цінності</h2>
              <div className="mt-3 text-gray-700 space-y-2">
                <p>Професіоналізм і науковий підхід.</p>
                <p>Турбота про психічне здоров'я кожної людини.</p>
                <p>Інновації та розвиток.</p>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Розширена секція "Наші цінності" з переліком */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <Container>
          <motion.h2 className="text-2xl font-bold" {...fadeUp}>Наші цінності</motion.h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <motion.div className="card p-6" {...fadeUp}>
              <h3 className="text-lg font-semibold">Ментальне здоров’я</h3>
              <p className="mt-2 text-gray-700">
                Головною цінністю для нас є ментальне здоров’я: ми допомагаємо людям знаходити сили та ресурси,
                пізнавати та розвивати себе, жити повноцінно та якісно, переживати складні життєві обставини.
              </p>
            </motion.div>

            <motion.div className="card p-6" {...fadeUp}>
              <h3 className="text-lg font-semibold">Професійна етика</h3>
              <p className="mt-2 text-gray-700">
                Наші фахівці ґрунтують свою роботу на: Етичному кодексі психолога, політиці захисту дітей,
                розробленої нашим Інститутом, принципі конфіденційності та законах України.
              </p>
            </motion.div>

            <motion.div className="card p-6" {...fadeUp}>
              <h3 className="text-lg font-semibold">Якісне навчання</h3>
              <p className="mt-2 text-gray-700">
                Надзвичайно актуальною сьогодні є якісна практико орієнтована освіта спеціалістів у сфері психічного
                здоров’я. Саме тому ми постійно проводимо лекції, вебінари, супервізії, навчальні програми від провідних
                спеціалістів з різних країн. Серед наших постійний програм: 8-ми крокова рограма по роботі з горем і
                втратою, курс з біосугестивної терапії, основи психотравматології.
              </p>
            </motion.div>

            <motion.div className="card p-6" {...fadeUp}>
              <h3 className="text-lg font-semibold">Психологічна підтримка</h3>
              <p className="mt-2 text-gray-700">
                Ми пропонуємо безкоштовні групи психологічної підтримки та стабілізації для дорослих і дітей, де всі
                бажаючі можуть віднайти для себе нові сили, краще пізнати і зрозуміти себе, знайти однодумців, легше
                пережити складні життєві обставини.
              </p>
            </motion.div>

            <motion.div className="card p-6" {...fadeUp}>
              <h3 className="text-lg font-semibold">Доступність послуг</h3>
              <p className="mt-2 text-gray-700">
                Групи підтримки і низка навчальних заходів є безкоштовними. Для нас важливо, щоб люди мали можливість
                отримувати якісну професійну допомогу не зважаючи на своє фінансове становище.
              </p>
            </motion.div>

            <motion.div className="card p-6" {...fadeUp}>
              <h3 className="text-lg font-semibold">Відкритість інформації</h3>
              <p className="mt-2 text-gray-700">
                Ми радо ділимось нашими напрацюваннями: сьогодні у вільному доступі на нашому Youtube каналі можна
                передивіться відео зустрічі за участю Стівена Порджеса, Ліз Шер, Кнута Андерсона, Роберта Сапольскі,
                Полін Босс, Барбара Шмідт та інших провідних фахівців у сфері ментального здоров’я
                (<a href="https://www.youtube.com/@user-yr1wj5dk3h" target="_blank" rel="noopener noreferrer" className="underline">перейти на канал</a>).
                Інформацію про групи підтримки і навчання можна знайти на нашій сторінці у Facebook
                (<a href="https://www.facebook.com/InstituteofHealthPsychology" target="_blank" rel="noopener noreferrer" className="underline">посилання</a>)
                та на нашому Telegram-каналі
                (<a href="https://t.me/HealthPsycholog" target="_blank" rel="noopener noreferrer" className="underline">посилання</a>).
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}