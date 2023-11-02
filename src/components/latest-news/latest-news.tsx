import { component$ } from "@builder.io/qwik";
import { getAllContent } from "@builder.io/sdk-qwik";

export default component$(() => {
  return (
    <section class="bg-biru grid grid-cols-6 gap-0 pt-[25vh]">
      <div class="col-span-2 col-start-2 h-full px-2.5 relative">
        <div class="h-screen sticky top-0">
          <div class="h-[50vh]">
            <h2 class="text-white text-5xl font-bold uppercase pt-2.5">Latest News</h2>
          </div>
          <div>
            <button class="border border-white text-white py-2.5 px-5 w-full">More News</button>
          </div>
        </div>
      </div>
      <div class="col-span-3 mb-[25vh]">
        <div class="col-span-2 h-[50vh]"></div>
        <div>
          <div class="grid grid-cols-2 gap-0">
            <div class="w-full h-[50vh] pl-2.5">
              <div class="w-full h-full bg-zinc800"></div>
            </div>
            <div class="text-3xl text-white px-2.5 py-5 text-left font-semibold">This is News 1</div>
          </div>
          <div class="grid grid-cols-2 gap-0">
            <div class="text-3xl text-white px-2.5 py-5 text-right font-semibold">This is News 2</div>
            <div class="w-full h-[50vh] pr-2.5">
              <div class="w-full h-full bg-zinc800"></div>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-0">
            <div class="w-full h-[50vh] pl-2.5">
              <div class="w-full h-full bg-zinc800"></div>
            </div>
            <div class="text-3xl text-white px-2.5 py-5 text-left font-semibold">This is News 3</div>
          </div>
          <div class="grid grid-cols-2 gap-0">
            <div class="text-3xl text-white px-2.5 py-5 text-right font-semibold">This is News 4</div>
            <div class="w-full h-[50vh] pr-2.5">
              <div class="w-full h-full bg-zinc800"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});