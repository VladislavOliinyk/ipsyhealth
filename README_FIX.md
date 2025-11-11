# Fix Pack — Module Not Found (Next.js)

Use this if you see errors like:
- Module not found: Can't resolve '@/components/Container'
- Module not found: Can't resolve 'framer-motion'

## Steps
1) Copy **tsconfig.json** and **next-env.d.ts** from this pack to your repo root (replace if needed).
2) Restart dev server:
   ```bash
   Ctrl+C
   rm -rf .next
   npm install
   npm run dev
   ```
3) If you prefer to avoid path aliases, you can replace imports in `app/page.tsx` with relative ones.
   An example file is included as: `app/page.tsx.relative-example`.
4) Ensure files exist at:
   - `components/Container.tsx`
   - `components/Hero.tsx`