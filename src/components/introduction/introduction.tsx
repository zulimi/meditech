import { component$, useSignal } from "@builder.io/qwik";
import { HiArrowLongRightOutline, HiPlayOutline, HiXMarkOutline } from "@qwikest/icons/heroicons";
import { Link } from '@builder.io/qwik-city';

export default component$((props: { welcomeTitle: string, shortDescription: string, introMedia: File }) => {
  const showCorporate = useSignal(false);

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
          <Link href="/about-us" class="border border-biru bg-biru p-5 text-white">Learn more about us <span><HiArrowLongRightOutline class="inline"></HiArrowLongRightOutline></span></Link>
          <button
            onClick$={() => (showCorporate.value = true)} 
            class="border border-biru text-biru p-5 ml-2.5">
              Watch video <HiPlayOutline class="inline"></HiPlayOutline>
          </button>
        </div>
      </div>
      <div class="col-span-12 row-span-2 overflow-hidden">
        <video autoPlay muted src="https://res.cloudinary.com/zulimi/video/upload/f_auto:video,q_auto/v1/meditech-gloves/htp07wxmsessv0lrqw7g" class="object-cover object-center w-full"></video>
      </div>
      {showCorporate.value &&
        <div class="fixed w-screen h-screen z-50 backdrop-blur">
          <video autoPlay src="https://res.cloudinary.com/zulimi/video/upload/f_auto:video,q_auto/v1/meditech-gloves/htp07wxmsessv0lrqw7g" class="w-full h-full"></video>
          <button
            onClick$={() => (showCorporate.value = false)}
            class="p-10 text-biru absolute right-0 top-0">
            <HiXMarkOutline class="inline text-6xl"></HiXMarkOutline>
          </button>
        </div>
      }
    </section>
  );
});
