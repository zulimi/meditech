import { component$, useSignal, useResource$, Resource } from "@builder.io/qwik";
import { fetchEntries } from "@builder.io/sdk-qwik";
import { Image } from '@unpic/qwik';
import { HiArrowRightOutline, HiXMarkOutline } from '@qwikest/icons/heroicons'

interface ProductProps{
  subCategory?: string;
  category?: string;
}

export default component$((props: {imageSurgical: string, imageExam: string}) => {

  const showSurgPowderFreeLatex = useSignal(false);
  const showSurgPowderedLatex = useSignal(false);
  const showExamPowderFreeLatex = useSignal(false);
  const showExamPowderedLatex = useSignal(false);
  const showExamPowderFreeNitrile = useSignal(false);

  return (
    <section class="grid grid-cols-6 gap-0 py-[25vh]">
      <div class="col-span-5 col-start-2 h-full grid grid-cols-5 gap-0 pb-[12.5vh]">
        <div class="top-0 col-span-2 px-2.5 ">
          <div class="h-[50vh] border-t border-t-biru">
            <h2 class="text-biru text-5xl font-bold uppercase pt-2.5">Surgical</h2>
          </div>
        </div>
        <div class="col-span-3 px-2.5">
          <div class="w-full h-[50vh] border border-biru">
            <Image src={props.imageSurgical} class="object-cover w-full h-full" />
          </div>
          <div class="text-biru">
            <button onClick$={() => (showSurgPowderFreeLatex.value = true)} class="block font-semibold text-lg border border-biru mt-5 relative w-full">
              <span class="block bg-biru text-white h-full w-fit absolute right-0 p-6"><HiArrowRightOutline></HiArrowRightOutline></span>
              <span class="block p-5">Powder-free Latex</span>
            </button>
            <button onClick$={() => (showSurgPowderedLatex.value = true)} class="block font-semibold text-lg border border-biru mt-5 relative w-full">
              <span class="block bg-biru text-white h-full w-fit absolute right-0 p-6"><HiArrowRightOutline></HiArrowRightOutline></span>
              <span class="block p-5">Powdered Latex</span>
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-5 col-start-2 h-full grid grid-cols-5 gap-0">
      <div class="top-0 col-span-2 px-2.5 ">
          <div class="h-[50vh] border-t border-t-biru">
            <h2 class="text-biru text-5xl font-bold uppercase pt-2.5">Exam</h2>
          </div>
        </div>
        <div class="col-span-3 px-2.5">
          <div class="w-full h-[50vh] border border-biru">
            <Image src={props.imageExam} class="object-cover w-full h-full" />
          </div>
          <div class="text-biru">
            <button onClick$={() => (showExamPowderFreeLatex.value = true)} class="block font-semibold text-lg border border-biru mt-5 relative w-full">
              <span class="block bg-biru text-white h-full w-fit absolute right-0 p-6"><HiArrowRightOutline></HiArrowRightOutline></span>
              <span class="block p-5">Powder-free Latex</span>
            </button>
            <button onClick$={() => (showExamPowderedLatex.value = true)} class="block font-semibold text-lg border border-biru mt-5 relative w-full">
              <span class="block bg-biru text-white h-full w-fit absolute right-0 p-6"><HiArrowRightOutline></HiArrowRightOutline></span>
              <span class="block p-5">Powdered Latex</span>
            </button>
            <button onClick$={() => (showExamPowderFreeNitrile.value = true)} class="block font-semibold text-lg border border-biru mt-5 relative w-full">
              <span class="block bg-biru text-white h-full w-fit absolute right-0 p-6"><HiArrowRightOutline></HiArrowRightOutline></span>
              <span class="block p-5">Powder-free Nitrile</span>
            </button>
          </div>
        </div>
      </div>
      {showSurgPowderFreeLatex.value &&
        <div class="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur">
          <button
            onClick$={() => (showSurgPowderFreeLatex.value = false)}
            class="p-10 text-biru absolute right-0 top-0">
            <HiXMarkOutline class="inline text-6xl"></HiXMarkOutline>
          </button>
          <Product subCategory="Powder-free Latex" category="Surgical" />
        </div>
      }
      {showSurgPowderedLatex.value &&
        <div class="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur">
          <button
            onClick$={() => (showSurgPowderedLatex.value = false)}
            class="p-10 text-biru absolute right-0 top-0">
            <HiXMarkOutline class="inline text-6xl"></HiXMarkOutline>
          </button>
          <Product subCategory="Powdered Latex" category="Surgical" />
        </div>
      }
      {showExamPowderFreeLatex.value &&
        <div class="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur">
          <button
            onClick$={() => (showExamPowderFreeLatex.value = false)}
            class="p-10 text-biru absolute right-0 top-0">
            <HiXMarkOutline class="inline text-6xl"></HiXMarkOutline>
          </button>
          <Product subCategory="Powder-free Latex" category="Exam" />
        </div>
      }
      {showExamPowderedLatex.value &&
        <div class="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur">
          <button
            onClick$={() => (showExamPowderedLatex.value = false)}
            class="p-10 text-biru absolute right-0 top-0">
            <HiXMarkOutline class="inline text-6xl"></HiXMarkOutline>
          </button>
          <Product subCategory="Powdered Latex" category="Exam" />
        </div>
      }
      {showExamPowderFreeNitrile.value &&
        <div class="fixed top-0 left-0 w-screen h-screen z-50 backdrop-blur">
          <button
            onClick$={() => (showExamPowderFreeNitrile.value = false)}
            class="p-10 text-biru absolute right-0 top-0">
            <HiXMarkOutline class="inline text-6xl"></HiXMarkOutline>
          </button>
          <Product subCategory="Powder-free Nitrile" category="Exam" />
        </div>
      }
    </section>
  );
});

export const Product = component$<ProductProps>((props) => {
  const productsResource = useResource$<any>(() =>
    fetchEntries({
      model: "products",
      apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY
    })
  );

  return (
    <Resource
      value={productsResource}
      onPending={() => <>Loading ...</>}
      onRejected={(error) => <>Error: {error.message}</>}
      onResolved={(products) => (
        <div class="mx-[10vw] my-[10vh] w-[80vw] h-[80vh] bg-biru p-10">
          <div class="mb-10">
            <p class="text-white font-semibold text-3xl">{props.category}</p>
            <p class="text-white font-semibold text-3xl">{props.subCategory}</p>
          </div>
          <div class="grid grid-cols-3 w-full overflow-hidden">
            {products.results
            .filter((product: any) => product.data.subCategory.name === props.subCategory && product.data.subCategory.categories.name === props.category)
            .map((product:any, index:any) => (
              <a key={index} href={"/products/"+product.id} class="block h-[50vh] first:ml-0 ml-[-1px] object-contain font-semibold text-white border border-white grid grid-cols-1 relative">
                <Image src={product.data.image} layout="constrained" class="p-10 place-self-center"></Image>
                <p class="absolute text-2xl bottom-5 left-5">{product.data.name}</p>
              </a>
            ))}
          </div>        
        </div>
      )}
    />
  )
});
