import { component$ } from "@builder.io/qwik";

export default component$((props: { contactTitle: string, contactDescription: string}) => {
    return (
        <section class="grid grid-cols-12 grid-rows-4 gap-0 h-screen">
          <div class="col-start-3 col-span-7 p-2.5">
            <p class="text-biru font-bold text-8xl uppercase">
              {props.contactTitle}
            </p>
          </div>
          <div class="col-span-3 p-2.5">
            <p class="text-biru font-bold text-4xl">
              {props.contactDescription}
            </p>
          </div>
          <div class="col-start-3 col-span-7 col-end-10 p-2.5 relative"></div>
          <div class="col-span-12 col-start-3 row-span-2 grid grid-cols-2">
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
                Telephone: <a href="tel:+6067997742">+606 799 7742</a><br/>
                Email: <a href="mailto:marketing@meditechgloves.com">marketing@meditechgloves.com</a>
              </p>
            </div>
            <div class="px-2.5 text-lg">
              <p>
                  <b>Europe Market</b><br/>
                  ADVENA LIMITED<br/>
                  Tower Business Centre, 2nd Fir,<br/>
                  Tower Street, Swatar,<br/>
                  BKR 4013, Malta
                </p>
                <p class="mt-5">
                  Telephone: <a href="tel:+35625466689">+356 2546 6689</a><br/>
                  Email: <a href="mailto:info@advena.mt">info@advena.mt</a>
                </p>
            </div>
          </div>
        </section>
      );
  });