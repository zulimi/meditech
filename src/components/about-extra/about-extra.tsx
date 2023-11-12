import { component$ } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';

export default component$((props: { extraPhoto: string }) => {
  return (
    <section class="grid grid-cols-6 gap-0 py-[25vh]">
      <div class="col-span-5 col-start-2 h-full grid grid-cols-5 gap-0">
        <div class="top-0 col-span-2 px-2.5 ">
          <div class="h-[50vh]">
            <Image src={props.extraPhoto} layout="fullWidth" />
          </div>
        </div>
        <div class="col-span-3 px-2.5">
          <div class="border-t border-t-biru">
            <p class="font-dm pt-5 text-left text-biru">
              “Make the most of yourself by fanning the tiny, inner sparks of possibility into flames of achievement There's nothing wrong with staying small You can do big things with a small team Nothing works better than just improving your product Get big quietly, so you don't tip off potential competitors.”
            </p>
            <p class="font-dm pt-5 text-right text-biru text-sm">
              Dr. Effendi Tenang<br />
              Managing Director<br />
              Meditech Gloves Sdn. Bhd
            </p>
          </div>
        </div>
      </div>
    </section>
  )
});