import { component$, useSignal } from "@builder.io/qwik";
import { HiArrowLongRightOutline, HiPlayOutline, HiXMarkOutline } from "@qwikest/icons/heroicons";
import { Link } from '@builder.io/qwik-city';

export default component$((props: { welcomeTitle: string, shortDescription: string, introMedia: string }) => {
  const showCorporate = useSignal(false);

  return (
    <section class="grid grid-cols-12 grid-rows-4 gap-0 h-screen w-screen">
      <div class="col-span-12 row-span-2 md:col-start-3 md:col-span-7 md:row-span-1 px-2.5 pb-2.5 pt-20 md:pt-2.5 z-10">
        <p class="text-biru font-bold md:text-7xl text-6xl uppercase pt-2.5 md:pt-0">
          {props.welcomeTitle}
        </p>
      </div>
      <div class="col-span-12 md:col-span-3 p-2.5 z-10">
        <p class="text-biru font-bold text-lg md:text-3xl border-t border-t-biru">
          {props.shortDescription}
        </p>
      </div>
      <div class="col-start-3 col-span-7 col-end-10 p-2.5 relative z-10">
        <div class="absolute bottom-2.5 left-2.5">
          <Link href="/about-us" class="border border-biru bg-biru p-5 text-white">Learn more about us <span><HiArrowLongRightOutline class="inline"></HiArrowLongRightOutline></span></Link>
          <button
            onClick$={() => (showCorporate.value = true)} 
            class="border border-biru text-biru p-5 ml-2.5">
              Watch video <HiPlayOutline class="inline"></HiPlayOutline>
          </button>
        </div>
      </div>
      <div class="absolute md:relative w-screen h-screen md:col-span-12 md:row-span-2 overflow-hidden z-0">
        <video autoPlay muted src={props.introMedia} class="object-cover object-center w-full h-full"></video>
      </div>
      {showCorporate.value &&
        <div class="block fixed transition-transform duration-150 ease-in-out w-screen h-screen z-50 backdrop-blur">
          <video autoPlay src={props.introMedia} class="w-full h-full z-50"></video>
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
