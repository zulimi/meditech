import { component$ } from "@builder.io/qwik";
import InnoColabImage1 from "~/media/researcher-holds-test-tube-with-water-hand-blue-glove.jpg?jsx";
import InnoColabImage2 from "~/media/futuristic-concept-new-working-possibilities-small-businesses-by-3d-printing-genderneutral-hand-open-window-printer-access-prototype-made-from-recycled-plastic-jpg-photo.jpg?jsx";
import InnoColabImage3 from "~/media/male-hands-cutting-ripe-pear-marble-table.jpg?jsx";
import InnoColabImage4 from "~/media/portrait-young-worker-hard-hat-large-metalworking-plant.jpg?jsx"

export default component$(() => {
  return (
    <section class="bg-biru grid grid-cols-6 gap-0 pt-[25vh]">
      <div class="col-span-2 col-start-2 h-full px-2.5 relative">
        <div class="h-screen sticky top-0">
          <div class="h-[50vh]">
            <h2 class="text-white text-5xl font-bold uppercase pt-2.5">Innovation and Collaboration</h2>
          </div>
          <div>
            <button class="border border-white text-white py-2.5 px-5 w-full">More News</button>
          </div>
        </div>
      </div>
      <div class="col-span-3">
        <div class="col-span-2 h-[50vh]"></div>
        <div class="pb-[25vh]">
          <div class="grid grid-cols-2 gap-0">
            <div class="w-full h-[50vh] pl-2.5">
              <InnoColabImage1 class="object-cover w-full h-full"></InnoColabImage1>
            </div>
            <div class="text-white px-2.5 py-5">
              <h3 class="font-semibold text-3xl text-left">Biodegradability</h3>
              <p class="font-dm pt-5">Biodegradable gloves are an eco-friendly alternative to conventional disposable gloves, designed to break down naturally over time, reducing environmental impact.</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-0">
            <div class="text-white px-2.5 py-5">
              <h3 class="font-semibold text-3xl text-right">3D Printing</h3>
              <p class="font-dm pt-5 text-right">"3D printing revolutionizes the glove industry with customizable, precise, and efficient manufacturing."</p>
            </div>
            <div class="w-full h-[50vh] pr-2.5">
              <InnoColabImage2 class="object-cover w-full h-full"></InnoColabImage2>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-0">
            <div class="w-full h-[50vh] pl-2.5">
              <InnoColabImage3 class="object-cover w-full h-full"></InnoColabImage3>
            </div>
            <div class="text-white px-2.5 py-5">
              <h3 class="font-semibold text-3xl text-left">F&B</h3>
              <p class="font-dm pt-5 text-left">"Gloves used in F&B are designed for safe and hygienic food handling"</p>
            </div>
          </div>
          <div class="grid grid-cols-2 gap-0 text-right">
            <div class="text-white px-2.5 py-5">
              <h3 class="font-semibold text-3xl text-right">Industrial</h3>
              <p class="font-dm pt-5 text-right">"Industrial gloves are engineered to safeguard workers in manufacturing and construction environments by offering protection against a range of workplace hazards.</p>
            </div>
            <div class="w-full h-[50vh] pr-2.5">
              <InnoColabImage4 class="object-cover w-full h-full"></InnoColabImage4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
});