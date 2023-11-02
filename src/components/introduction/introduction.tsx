import { component$ } from "@builder.io/qwik";
import { HiArrowLongRightOutline, HiPlayOutline } from "@qwikest/icons/heroicons";
import { Image } from '@unpic/qwik';

export default component$((props: { welcomeTitle: string, shortDescription: string, introMedia: File }) => {
    return (
      <section class="grid grid-cols-12 grid-rows-4 gap-0 h-screen">
        <div class="col-start-3 col-span-7 p-2.5">
          <p class="text-biru font-bold text-6xl uppercase">
            {props.welcomeTitle}
          </p>
        </div>
        <div class="col-span-3 p-2.5">
          <p class="text-biru font-bold text-3xl">
            {props.shortDescription}
          </p>
        </div>
        <div class="col-start-3 col-span-7 col-end-10 p-2.5 relative">
          <div class="absolute bottom-2.5 left-2.5">
            <button class="border border-biru bg-biru p-5 text-white">Learn more about us <span><HiArrowLongRightOutline class="inline"></HiArrowLongRightOutline></span></button>
            <button class="border border-biru text-biru p-5 ml-2.5">Watch video <HiPlayOutline class="inline"></HiPlayOutline></button>
          </div>
        </div>
        <div class="col-span-12 row-span-2 overflow-hidden">
          <Image src={props.introMedia} />
        </div>
      </section>
    );
});
