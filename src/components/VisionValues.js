export const VisionValues = () => `
<section class="py-14">
  <div class="container-app">
    <div class="swiper visionSwiper rounded-2xl shadow overflow-hidden">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="p-10 md:p-16 bg-[var(--brand-blue)] text-white min-h-[320px] flex flex-col justify-center">
            <div class="flex items-center gap-3 mb-4">
              <i class="fa-solid fa-book text-2xl"></i>
              <h2 class="text-2xl sm:text-3xl font-bold">Наше бачення</h2>
            </div>
            <p class="text-lg leading-relaxed" data-aos="fade-up">
              Ми сприяємо розвитку здорової та щасливої спільноти через впровадження передових досліджень
              у сфері психології здоров'я, освітніх програм та підтримки психічного благополуччя.
            </p>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="p-10 md:p-16 bg-blue-600/90 text-white min-h-[320px] flex flex-col justify-center">
            <div class="flex items-center gap-3 mb-4">
              <i class="fa-solid fa-heart text-2xl"></i>
              <h2 class="text-2xl sm:text-3xl font-bold">Наші цінності</h2>
            </div>
            <ul class="space-y-2 text-lg">
              <li data-aos="fade-up">Професіоналізм і науковий підхід</li>
              <li data-aos="fade-up" data-aos-delay="100">Турбота про психічне здоров'я кожної людини</li>
              <li data-aos="fade-up" data-aos-delay="200">Інновації та розвиток</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</section>
`;