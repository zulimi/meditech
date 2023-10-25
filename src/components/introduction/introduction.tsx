import { component$ } from "@builder.io/qwik";
import MainImage from "~/media/Glove-263.jpg?jsx";
import { HiArrowLongRightOutline, HiPlayOutline } from "@qwikest/icons/heroicons"

export default component$(() => {
    return (
      <section class="grid grid-cols-12 grid-rows-4 gap-0 h-screen">
        <div class="col-start-3 col-span-7 p-2.5">
          <p class="text-biru font-bold text-6xl uppercase">
            Your Source for Premium Glove Products
          </p>
        </div>
        <div class="col-span-3 p-2.5">
          <p class="text-biru font-bold text-2xl">
            Meditech Gloves, established in 2002, excels in manufacturing 2.4 billion natural rubber and nitrile gloves annually, globally recognized for quality.
          </p>
        </div>
        <div class="col-start-3 col-span-7 col-end-10 p-2.5 relative">
          <div class="absolute bottom-2.5 left-2.5">
            <button class="border border-biru bg-biru p-5 text-white">Learn more about us <span><HiArrowLongRightOutline class="inline"></HiArrowLongRightOutline></span></button>
            <button class="border border-biru text-biru p-5 ml-2.5">Watch video <HiPlayOutline class="inline"></HiPlayOutline></button>
          </div>
        </div>
        <div class="col-span-12 row-span-2 overflow-hidden">
          <MainImage class="object-cover w-full"></MainImage>
        </div>
      </section>
    );
});