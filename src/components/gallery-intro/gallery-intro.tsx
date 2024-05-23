import { component$, useResource$, Resource } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';
import { fetchEntries } from "@builder.io/sdk-qwik";

export default component$((props: { galleryTitle: string, galleryDescription: string }) => {

  const galleryResource = useResource$<any>(() => 
  fetchEntries({
    model: "gallery",
    apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY
  }));

  return (
    <section class="grid grid-cols-12 gap-0">
      <div class="col-span-12 md:col-start-3 md:col-span-7 p-2.5 h-[50vh] px-2.5 pb-2.5 pt-20 md:pt-2.5">
        <p class="text-biru font-bold text-6xl md:text-7xl uppercase">
          {props.galleryTitle}
        </p>
      </div>
      <div class="col-span-12 md:col-span-3 p-2.5 h-[25vh] md:h-auto">
        <p class="text-biru font-bold text-lg md:text-3xl border-t border-t-biru md:border-t-0">
          {props.galleryDescription}
        </p>
      </div>
      <div class="col-span-12 md:col-span-10 md:col-start-3 grid grid-cols-10">
        <Resource
          value={galleryResource}
          onPending={() => <>Loading ...</>}
          onRejected={(error) => <>Error: {error.message}</>}
          onResolved={(photos) => (
            <div class="col-span-10 md:col-span-9 md:col-start-2 gap-0 grid grid-cols-9">
              {photos.results.map((photo:any, index:any) => (
                  <div key={index} class="col-span-9 md:col-span-3 h-[50vh] md:h-[25vh] overflow-hidden">
                    <Image src={photo.data.image} class="w-full h-full p-2.5" />
                  </div>
                ))
              }
            </div>
          )}
        />

        
      </div>
    </section>
  );
});