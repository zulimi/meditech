import { Resource, component$, useResource$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';
import { fetchOneEntry } from "@builder.io/sdk-qwik";
import { Image } from '@unpic/qwik';
import { HiArrowLongDownOutline, HiArrowLongLeftOutline, HiArrowDownTrayOutline } from '@qwikest/icons/heroicons'
 
export default component$(() => {
  const loc = useLocation();

  const productResource = useResource$<any>(() => 
    fetchOneEntry({
      apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY,
      model: 'products',
      query: {
        id: loc.params.id
      }
    })
  );

  return (
    <Resource
      value={productResource}
      onPending={() => <>Loading ...</>}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(product) => (
        <div>
          <div class="bg-biru grid grid-cols-12 grid-rows-4 gap-0 h-screen text-white">
            <div class="col-start-3 col-span-7 p-2.5 relative">
              <p class="font-bold text-8xl uppercase">
                {product.name} 
              </p>
              <a href="/products" class="block p-5 m-2.5 border border-white w-fit absolute bottom-0 left-0">
                <span class="pr-10"><HiArrowLongLeftOutline class="inline"></HiArrowLongLeftOutline></span>
                Back to Products
              </a>
            </div>
            <div class="col-span-3 p-2.5">
              <p class="text-white font-bold text-4xl">
                {product.data.subCategory.categories.name}<br/>
                {product.data.subCategory.name}
              </p>
            </div>
            <div class="col-span-10 col-start-3 row-span-2 p-2.5 grid grid-cols-1">
              <div class="w-[25vw] h-fit place-self-center">
                <Image src={product.data.image}></Image>
              </div>
            </div>
            <div class="col-span-4 col-start-3 text-white p-2.5 relative">
              <a href="#product-more" class="block p-5 m-2.5 border border-white w-fit absolute bottom-0 left-0">
                Scroll for more  
                <span class="pl-10"><HiArrowLongDownOutline class="inline"></HiArrowLongDownOutline></span>
              </a>
            </div>
            <div class="col-span-6 col-start-7 p-2.5 grid grid-cols-1 place-content-end text-white font-dm">
              <p class="w-[25vw] h-fit px-2.5 py-5">
                this is more text about the product
              </p>
            </div>
          </div>
          <div id="product-more" class="bg-white grid grid-cols-12 grid-rows-4 gap-0 h-screen text-biru">
            <div class="col-span-4 col-start-3 relative">
              <div class="absolute top-[25vh] left-0 w-full">
                <a href={product.data.doc} class="block p-5 mx-2.5 mb-2.5 border border-biru">
                  <span class="pr-10"><HiArrowDownTrayOutline class="inline"></HiArrowDownTrayOutline></span>
                  Download DoC
                </a>
                <a href={product.data.productDetail} class="block p-5 m-2.5 border border-biru">
                  <span class="pr-10"><HiArrowDownTrayOutline class="inline"></HiArrowDownTrayOutline></span>
                  Product Specification
                </a>
              </div>
            </div>
              <div class="col-span-6 row-start-2 col-start-7 row-span-2 px-2.5">
              <Image src={product.data.productDetailImage} class="border border-biru" />
            </div>
          </div>
        </div>
      )}
    />
  )
});