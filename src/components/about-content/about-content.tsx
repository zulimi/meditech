import { component$ } from "@builder.io/qwik";
// import { Image } from '@unpic/qwik';

export default component$((props: {aboutVideo: string}) => {

  return (
    <section class="bg-biru grid grid-cols-6 gap-0 md:py-[25vh]">
      <div class="col-span-6 md:col-span-5 md:col-start-2 h-full grid grid-cols-5 gap-0">
        <div class="top-0 col-span-5 md:col-span-2 px-2.5 ">
          <div class="h-[25vh] md:h-[50vh] md:border-t md:border-t-white">
            <h2 class="text-white text-5xl font-bold uppercase pt-[10vh] md:pt-2.5">Our story</h2>
          </div>
        </div>
        <div class="col-span-5 md:col-span-3 px-2.5">
          <div class="md:border-t md:border-t-white">
            <p class="font-dm pt-5 text-left text-white border-b border-b-white md:border-0 pb-[10vh] md:pb-0">Meditech Gloves Sdn Bhd, formerly Best Putra Gloves, is a prominent Malaysian company founded in 2002. Originally focused on natural rubber gloves, it has grown rapidly to produce 2.4 billion gloves annually, earning recognition for its quality. Besides rubber gloves, Meditech also manufactures nitrile examination gloves. The company operates globally in Malaysia, the UK, Germany, Denmark, Romania, South Africa, Namibia, Australia, China, Turkey, and the US.</p>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-start-2 h-full grid grid-cols-5 gap-0">
        <div class="top-0 col-span-5 md:col-span-2 px-2.5 ">
          <div class="md:h-[50vh] md:border-t md:border-t-white">
            <h2 class="text-white text-5xl font-bold uppercase py-[10vh] md:pt-2.5 md:pb-0">Where we are and moving forward</h2>
          </div>
        </div>
        <div class="col-span-5 md:col-span-3 px-2.5">
          <div class="md:border-t md:border-t-white pl-5 border-b border-b-white md:border-0">
            <ul class="font-dm md:pt-5 text-left text-white list-disc pb-[10vh] md:pb-0">
              <li>We strive to be the world's best medical-grade glove manufacturer, with top-quality products approved by the U.S. FDA and international certifications.</li>
              <li>Malaysia, a leader in medical-grade gloves, recognizes Meditech Gloves for producing the highest quality.</li>
              <li>Our dedication is to provide customers with superior quality products, going beyond their requirements.</li>
              <li>We're growing our manufacturing capacity for future global expansion.</li>
            </ul>
          </div>
          <div>
            <video controls src={props.aboutVideo} class="mt-7 w-full h-full mb-[10vh] md:mb-0"></video>
          </div>
        </div>
      </div>
    </section>
  )
});
