import { component$ } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';

export default component$((props: { aboutTitle: string, aboutDescription: string, aboutMedia: string }) => {

  return (
    <section class="grid grid-cols-12 grid-rows-4 gap-0 h-screen">
      <div class="col-start-3 col-span-7 p-2.5">
        <p class="text-biru font-bold text-8xl uppercase">
          {props.aboutTitle}
        </p>
      </div>
      <div class="col-span-3 p-2.5">
        <p class="text-biru font-bold text-4xl">
          {props.aboutDescription}
        </p>
      </div>
      <div class="col-start-3 col-span-7 col-end-10 p-2.5 relative"></div>
      <div class="col-span-12 row-span-2 overflow-hidden">
        <Image src={props.aboutMedia} class="object-cover object-center w-full"></Image>
      </div>
    </section>
  );
});
