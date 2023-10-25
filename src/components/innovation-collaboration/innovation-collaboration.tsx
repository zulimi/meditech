import { component$ } from "@builder.io/qwik";

export default component$(() => {
  return (
    <section class="bg-biru grid grid-cols-6 gap-0">
      <div class="col-span-2 col-start-2 h-full px-2.5 relative">
        <div class="h-[50vh] sticky top-0 border-b border-b-white mb-[50vh]">
          <h2 class="text-white text-4xl font-bold uppercase absolute bottom-24">Innovation and Collaboration</h2>
        </div>
      </div>
      <div class="col-span-3">
        <div class="col-span-2 h-[50vh]">
          01
        </div>
        <div>
          <div class="grid grid-cols-2 gap-0">
            <div class="w-full h-[50vh] pl-2.5">
              kljskldjalksnlksaccnlkacnkla
            </div>
            <div>02</div>
          </div>
          <div class="grid grid-cols-2 gap-0">
            <div>03</div>
            <div class="w-full h-[50vh] pr-2.5"></div>
          </div>
          <div class="grid grid-cols-2 gap-0">
            <div class="w-full h-[50vh] pl-2.5"></div>
            <div>04</div>
          </div>
          <div class="grid grid-cols-2 gap-0">
            <div>05</div>
            <div class="w-full h-[50vh] pr-2.5"></div>
          </div>
        </div>
      </div>
    </section>
  )
});