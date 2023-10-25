import { component$ } from "@builder.io/qwik";
import CranfieldULogo from "~/media/R.png?jsx";
import MainLogo from "~/media/LogoMeditechHD.png?jsx";

export default component$(() => {
  return (
    <section class="bg-white grid grid-cols-6 gap-0">
      <div class="col-span-2 col-start-2 h-full px-2.5 relative">
        <div class="h-[50vh] sticky top-0 border-b border-b-biru mb-[50vh]">
          <h2 class="text-biru text-4xl font-bold uppercase absolute bottom-24">Strategic Partnership</h2>
        </div>
      </div>
      <div class="col-span-3">
        <div class="col-span-2 h-[50vh]"></div>
        <div>
          <div class="grid grid-cols-2 gap-0 h-[25vh]">
            <div class="col-start-2 text-biru font-semibold text-xl px-2.5 pb-2.5">Meditech collaborate on innovative product design with renowned research university in UK</div>
          </div>
          <div class="grid grid-cols-2 gap-0 h-[25vh]">
            <div class="relative"><CranfieldULogo class="h-[100px] absolute right-2.5 object-contain"></CranfieldULogo></div>
            <div class="relative"><MainLogo class="absolute h-[100px] object-contain"></MainLogo></div>
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