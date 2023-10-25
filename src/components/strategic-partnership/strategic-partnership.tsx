import { component$ } from "@builder.io/qwik";
import CranfieldULogo from "~/media/R.png?jsx";
import MainLogo from "~/media/LogoMeditechHD.png?jsx";
import PartnerPhoto from "~/media/lolap.jpg?jsx";

export default component$(() => {
  return (
    <section class="bg-white grid grid-cols-6 gap-0 pt-[25vh]">
      <div class="col-span-2 col-start-2 h-full px-2.5 relative">
        <div class="h-screen sticky top-0">
          <div class="h-[50vh]">
            <h2 class="text-biru text-5xl font-bold uppercase pt-2.5">Strategic Partnership</h2>
          </div>
          <div>
            <button class="border border-biru text-biru py-2.5 px-5 w-full">Learn more</button>
          </div>
        </div>
      </div>
      <div class="col-span-3 mb-[25vh]">
        <div class="col-span-2 h-[50vh]"></div>
        <div>
          <div class="w-full h-[25vh] px-2.5">
            <div class="grid grid-cols-2 gap-0 border-t border-t-biru text-biru font-semibold text-3xl py-2.5">
              <div>
                Meditech collaborate on innovative product design with renowned research university in UK
              </div>
              <div class="grid grid-cols-3 relative h-[25vh] content-center] py-2.5">
                <div class="pr-2.5"><CranfieldULogo class="h-[125px] object-contain"></CranfieldULogo></div>
                <div class="col-span-2 pl-2.5"><MainLogo class="h-[125px] object-contain"></MainLogo></div>
              </div>
            </div>
          </div>
          <div class="w-full px-2.5">
            <PartnerPhoto />
          </div>
        </div>
      </div>
    </section>
  )
});