import { component$ } from "@builder.io/qwik";
// import { fetchEntries } from "@builder.io/sdk-qwik";
// import { Image } from '@unpic/qwik';

export default component$(() => {
  // const latestNewsResource = useResource$<any>(() =>
  //   fetchEntries({
  //     model: "latest-news",
  //     apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
  //     limit: 4
  //   })
  // );

  return (
    // <Resource
    //   value={latestNewsResource}
    //   onPending={() => <>Loading ...</>}
    //   onRejected={(error) => <>Error: {error.message}</>}
    //   onResolved={(latestNews) => (
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
        </section>
    //   )}
    // />
  )
});