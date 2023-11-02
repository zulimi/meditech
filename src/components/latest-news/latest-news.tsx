import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { fetchEntries } from "@builder.io/sdk-qwik";
import { Image } from '@unpic/qwik';

export default component$(() => {
  const latestNewsResource = useResource$(() =>
    fetchEntries({
      model: "latest-news",
      apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
      // limit: 4
    })
  );

  return (
    <Resource
      value={latestNewsResource}
      onPending={() => <>Loading ...</>}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(latestNews) => (
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
            {latestNews.results.map((latest, index) => (
              <div key={index}>
                {index % 2 ?
                  <div class="grid grid-cols-2 gap-0">
                    <div class="text-white px-2.5 py-5">
                      <h3 class="font-semibold text-3xl text-right">{latest.data.title}</h3>
                      <p class="font-dm pt-5 text-right">{latest.data.description}</p>
                    </div>
                    <div class="w-full h-[50vh] pr-2.5">
                      <Image src={latest.data.mainImage} class="object-cover w-full h-full" />
                    </div>                    
                  </div>
                :
                  <div class="grid grid-cols-2 gap-0">
                    <div class="w-full h-[50vh] pl-2.5">
                      <Image src={latest.data.mainImage} class="object-cover w-full h-full" />
                    </div>
                    <div class="text-white px-2.5 py-5">
                      <h3 class="font-semibold text-3xl text-right">{latest.data.title}</h3>
                      <p class="font-dm pt-5 text-right">{latest.data.description}</p>
                    </div>
                  </div>
                }
              </div>
            ))}
          </div>
        </section>
      )}
    />
  )
});