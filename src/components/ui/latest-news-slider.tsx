import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { fetchEntries } from "@builder.io/sdk-qwik";
import { Image } from '@unpic/qwik';

interface feedProps {
  model?: string
}

export default component$<feedProps>((props) => {

  const allNewsResources = useResource$<any>(() => 
    fetchEntries({
      model: props.model,
      apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY
    })
  );

  return (
    <Resource
      value={allNewsResources}
      onPending={() => <>Loading ...</>}
      onRejected={(error) => <>error: {error.message}</>}
      onResolved={(latestNews) => (
        <div id="default-carousel" class="relative col-span-6 p-2.5 mb-10 md:hidden" data-carousel="slide">
            {/* <!-- Carousel wrapper --> */}
            <div class="relative h-[60vh] overflow-hidden rounded-lg">
              {latestNews.results.map((latest:any, index:any) => (
                <div key={index} class="hidden duration-700 ease-in-out" data-carousel-item>
                  <div class="w-full h-full relative">
                    <Image src={latest.data.mainImage} class="object-cover w-full h-full" />
                    <div class="absolute bottom-8 text-white px-2.5">
                      <h3 class="font-semibold text-3xl pb-4">{latest.data.title}</h3>
                      <p class="font-dm">{latest.data.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* <!-- Slider indicators --> */}
            <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
              {latestNews.results.map((latest:any, index:any) => (
                <button key={index} type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label={"Slide " + index} data-carousel-slide-to={index}></button>
              ))}
            </div>
            {/* <!-- Slider controls --> */}
            <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                    </svg>
                    <span class="sr-only">Previous</span>
                </span>
            </button>
            <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                    <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    <span class="sr-only">Next</span>
                </span>
            </button>
        </div>
      )}
    />
  )
})