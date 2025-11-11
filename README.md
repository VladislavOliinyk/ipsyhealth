# IPsyHealth — Starter

Світла, сучасна стартова тема під Next.js (App Router) + Tailwind для перепису ipsyhealth.site.

## Стек
- Next.js 15 (App Router)
- React 18
- Tailwind CSS 3
- TypeScript, ESLint
- Готові секції: Header/Footer/Hero/Card + базові сторінки

## Запуск локально
```bash
pnpm i   # або npm i / yarn
pnpm dev # або npm run dev / yarn dev
```
Відкрийте http://localhost:3000

## Деплой
Найпростіше — Vercel. Створіть новий проєкт, під’єднайте GitHub і оберіть цей репозиторій.

## Де редагувати контент
- Головна: `app/page.tsx`
- Меню/хедер: `components/Header.tsx`
- Секції та стилі: `components/*`, `app/globals.css`
- Інші сторінки: `app/<slug>/page.tsx`

## Подальші кроки
1. Затвердити інформаційну архітектуру.
2. Додати мультимову (next-intl).
3. Підключити CMS (Sanity / Strapi) для подій, команд і блогу.
4. Імплементувати форми (Resend/Brevo) та платіжні шлюзи (LiqPay/WayForPay).
5. SEO (schema.org), аналітика (Plausible/GA4), редиректи зі старого WordPress.