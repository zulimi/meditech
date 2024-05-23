import { component$ } from "@builder.io/qwik";

export default component$((props: { contactTitle: string, contactDescription: string}) => {
    return (
        <section class="grid grid-cols-12 md:grid-rows-4 gap-0 h-screen">
          <div class="md:col-start-3 col-span-12 md:col-span-7 px-2.5 pb-2.5 pt-20 md:pt-2.5 h-[50vh]">
            <p class="text-biru font-bold text-6xl md:text-7xl uppercase">
              {props.contactTitle}
            </p>
          </div>
          <div class="col-span-12 md:col-span-3 p-2.5 h-[25vh] md:h-auto">
            <p class="text-biru font-bold text-lg md:text-3xl border-t border-t-biru md:border-t-0">
              {props.contactDescription}
            </p>
          </div>
          <div class="md:col-start-3 col-span-12 md:col-span-7 md:col-end-10 p-2.5 relative"></div>
          <div class="col-span-12 md:col-start-3 md:row-span-2 grid md:grid-cols-2">
            <div class="px-2.5 text-lg">
              <p>
                <b>Local Market</b><br/>
                Meditech Gloves Sdn.Bhd<br/>
                PT 3345, Jalan Permata 1/3,<br/>
                Arab Malaysian Industrial Park,<br/>
                71800 Nilai,<br/>
                Negeri Sembilan,<br/>
                MALAYSIA
              </p>
              <p class="mt-5">
                Telephone: <a href="tel:+6067997742" class="text-biru">+606 799 7742</a><br/>
                Email: <a href="mailto:marketing@meditechgloves.com" class="text-biru">marketing@meditechgloves.com</a>
              </p>
            </div>
            <div class="mx-2.5 pt-10 py-10 mt-10 text-lg border-t border-t-biru md:py-0 md:border-t-0 md:mt-0">
              <p>
                  <b>Europe Market</b><br/>
                  ADVENA LIMITED<br/>
                  Tower Business Centre, 2nd Fir,<br/>
                  Tower Street, Swatar,<br/>
                  BKR 4013, Malta
                </p>
                <p class="mt-5">
                  Telephone: <a href="tel:+35625466689" class="text-biru">+356 2546 6689</a><br/>
                  Email: <a href="mailto:info@advena.mt" class="text-biru">info@advena.mt</a>
                </p>
            </div>
          </div>
        </section>
      );
  });