export const Footer = () => `
<footer id="contact" class="bg-[var(--footer-bg)] text-white mt-12">
  <div class="container-app py-10 grid gap-8 md:grid-cols-3">
    <div>
      <h3 class="font-bold text-lg">Інститут Психології Здоровʼя</h3>
      <p class="mt-2 text-white/80">© <span data-year></span>. Усі права захищені.</p>
    </div>
    <div>
      <h4 class="font-semibold">Контакти</h4>
      <ul class="mt-2 space-y-1 text-white/80">
        <li>Email: <a class="underline hover:text-[var(--nav-accent)]" href="mailto:info@example.com">info@example.com</a></li>
        <li>Телефон: <a class="underline hover:text-[var(--nav-accent)]" href="tel:+380000000000">+38 (000) 000-00-00</a></li>
      </ul>
    </div>
    <div>
      <h4 class="font-semibold">Ми в мережі</h4>
      <div class="mt-2 flex gap-3">
        <a class="social" href="#" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
        <a class="social" href="#" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
        <a class="social" href="#" aria-label="Telegram"><i class="fa-brands fa-telegram"></i></a>
      </div>
    </div>
  </div>
</footer>
`;