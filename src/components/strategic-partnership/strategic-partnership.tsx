import { component$, useSignal } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';
import { HiPlayOutline, HiXMarkOutline } from "@qwikest/icons/heroicons";

export default component$((props: { description: string, logo1: File, logo2: File, image: File, strategicVideo: string }) => {
  const showStrategicVideo = useSignal(false);
 
  return (
    <section class="bg-white grid grid-cols-6 gap-0 md:pt-[25vh]">
      <div class="col-span-6 md:col-span-2 md:col-start-2 h-full px-0 md:px-2.5 relative">
        <div class="px-2.5 md:px-0 md:h-screen md:sticky top-0">
          <div class="h-[30vh] md:h-[50vh]">
            <h2 class="text-biru text-5xl font-bold uppercase pt-[10vh] md:pt-2.5">Strategic Partnership</h2>
          </div>
          <div>
            <button 
              onClick$={() => (showStrategicVideo.value = true)}
              class="border border-biru text-biru py-2.5 px-5 w-full">
                Learn more <HiPlayOutline class="inline"></HiPlayOutline>
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-3 mb-[25vh]">
        <div class="col-span-2 h-2.5 md:h-[50vh]"></div>
        <div>
          <div class="w-full h-[25vh] px-2.5">
            <div class="grid grid-cols-2 gap-0 border-t border-t-biru text-biru font-semibold text-lg md:text-3xl py-2.5">
              <div>
                {props.description}
              </div>
              <div class="grid grid-cols-3 relative h-[25vh] content-center] py-2.5">
                <div class="pr-2.5"><image src={props.logo1} /></div>
                <div class="col-span-2 pl-2.5"><image src={props.logo2} /></div>
              </div>
            </div>
          </div>
          <div class="w-full px-2.5">
            <Image src={props.image} />
          </div>
        </div>
      </div>
      {showStrategicVideo.value &&
        <div class="fixed w-screen h-full z-50 backdrop-blur left-0 top-0">
          <video autoPlay src={props.strategicVideo} class="w-full h-full"></video>
          <button
            onClick$={() => (showStrategicVideo.value = false)}
            class="p-10 text-biru absolute right-0 top-0">
            <HiXMarkOutline class="inline text-6xl"></HiXMarkOutline>
          </button>
        </div>
      }
    </section>
  )
});