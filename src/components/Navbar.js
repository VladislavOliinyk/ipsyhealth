export const Navbar = () => `
<header class="sticky top-0 z-50 bg-[var(--nav-bg)] text-[var(--nav-text)] shadow">
  <div class="container-app py-3 flex items-center justify-between">
    <a href="#hero" class="font-semibold tracking-wide hover:text-[var(--nav-accent)] transition">ІПЗ</a>
    <nav class="hidden md:flex gap-6 text-sm">
      <a class="hover:text-[var(--nav-accent)] transition" href="#projects">Наші проєкти</a>
      <a class="hover:text-[var(--nav-accent)] transition" href="#education">Навчальні проєкти</a>
      <a class="hover:text-[var(--nav-accent)] transition" href="#updates">Оновлення програм</a>
      <a class="hover:text-[var(--nav-accent)] transition" href="#partners">Партнери</a>
      <a class="hover:text-[var(--nav-accent)] transition" href="#contact">Контакти</a>
    </nav>
    <button id="burger" class="md:hidden p-2 rounded hover:bg-white/10" aria-label="Меню">
      <i class="fa-solid fa-bars"></i>
    </button>
  </div>
  <div id="mobileNav" class="md:hidden hidden border-t border-white/10 bg-[var(--nav-bg)]">
    <div class="container-app py-3 space-y-2">
      <a class="block hover:text-[var(--nav-accent)] transition" href="#projects">Наші проєкти</a>
      <a class="block hover:text-[var(--nav-accent)] transition" href="#education">Навчальні проєкти</a>
      <a class="block hover:text-[var(--nav-accent)] transition" href="#updates">Оновлення програм</a>
      <a class="block hover:text-[var(--nav-accent)] transition" href="#partners">Партнери</a>
      <a class="block hover:text-[var(--nav-accent)] transition" href="#contact">Контакти</a>
    </div>
  </div>
</header>
`;