import { component$ } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';

export default component$((props: { aboutTitle: string, aboutDescription: string, aboutMedia: string }) => {

  return (
    <section class="grid grid-cols-12 grid-rows-4 gap-0 h-screen relative">
      <div class="md:col-start-3 col-span-12 md:col-span-7 row-span-2 md:row-span-1 px-2.5 pb-2.5 pt-20 md:pt-2.5 z-10">
        <p class="text-biru font-bold text-6xl md:text-7xl uppercase">
          {props.aboutTitle}
        </p>
      </div>
      <div class="col-span-12 md:col-span-3 p-2.5 row-span-2 md:row-span-1 z-10">
        <p class="text-biru font-bold text-lg md:text-3xl border-t border-t-biru md:border-t-0">
          {props.aboutDescription}
        </p>
      </div>
      <div class="col-start-3 col-span-7 col-end-10 p-2.5 relative"></div>
      <div class="absolute t-0 w-screen h-screen md:relative md:w-full md:h-full md:col-span-12 md:row-span-2 overflow-hidden">
        <Image src={props.aboutMedia} class="object-cover object-center w-full h-full"></Image>
      </div>
      <div class="absolute md:hidden w-screen h-screen bg-white/30"></div>
    </section>
  );
});
