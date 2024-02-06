import { component$, Resource, useResource$, useSignal } from "@builder.io/qwik";
import { fetchEntries } from "@builder.io/sdk-qwik";
import MainLogo from "~/media/LogoMeditechHD.png?jsx";
import { HiEnvelopeOutline, HiPhoneOutline, HiBars3Outline, HiXMarkOutline } from "@qwikest/icons/heroicons";
import { Link } from '@builder.io/qwik-city';
 
export const Header = component$(() => {

  const showLinks = useSignal(false);

  const navigationResource = useResource$<any>(() =>
    fetchEntries({
      model: "navigation",
      apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY
    })
  );

  return (
    <section class="relative z-30">
      <div class="visible md:invisible fixed left-0 top-0 h-20 w-full bg-white/75 border-b border-b-biru z-30 grid grid-cols-12">
          <Link class="grid grid-cols-1 place-items-center col-span-3 px-2.5" href="/"><MainLogo class="w-28" /></Link>
          <div class="col-span-2 col-start-7 grid grid-cols-1 place-items-center">
            <Link class="grid grid-cols-1 place-items-center relative block w-full h-full text-biru cursor-pointer border-l border-biru" href="mailto:marketing@meditechgloves.com">
              <HiEnvelopeOutline class="w-10 h-8"></HiEnvelopeOutline>
            </Link>
          </div>
          <div class="col-span-2 grid grid-cols-1 place-items-center">
            <Link class="grid grid-cols-1 place-items-center relative block w-full h-full text-biru cursor-pointer border-l border-biru" href="tel:+6067997742">
              <HiPhoneOutline class="w-auto h-8"></HiPhoneOutline>
            </Link>
          </div>
          <div class="col-span-2 grid grid-cols-1 place-items-center">
            <button onClick$={() => (showLinks.value = true)} class="grid grid-cols-1 place-items-center relative block w-full h-full text-biru cursor-pointer border-l border-biru">
              <HiBars3Outline class="w-auto h-8"></HiBars3Outline>
            </button>
          </div>
      </div>
      {showLinks.value &&
        <div class="block fixed transition-transform duration-150 ease-in-out w-screen h-screen z-50">
          <div class="visible md:invisible fixed left-0 top-0 h-20 w-full bg-white/75 border-b border-b-biru z-30 grid grid-cols-12">
            <Link class="grid grid-cols-1 place-items-center col-span-3 px-2.5" href="/"><MainLogo class="w-28" /></Link>
            <div class="col-span-2 col-start-7 grid grid-cols-1 place-items-center">
              <Link class="grid grid-cols-1 place-items-center relative block w-full h-full text-biru cursor-pointer border-l border-biru" href="mailto:marketing@meditechgloves.com">
                <HiEnvelopeOutline class="w-10 h-8"></HiEnvelopeOutline>
              </Link>
            </div>
            <div class="col-span-2 grid grid-cols-1 place-items-center">
              <Link class="grid grid-cols-1 place-items-center relative block w-full h-full text-biru cursor-pointer border-l border-biru" href="tel:+6067997742">
                <HiPhoneOutline class="w-auto h-8"></HiPhoneOutline>
              </Link>
            </div>
            <div class="col-span-2 grid grid-cols-1 place-items-center">
              <button onClick$={() => (showLinks.value = false)} class="grid grid-cols-1 place-items-center relative block w-full h-full text-biru cursor-pointer border-l border-biru">
                <HiXMarkOutline class="w-auto h-8"></HiXMarkOutline>
              </button>
            </div>
          </div>
            <nav class="absolute p-2.5 w-full h-full bg-biru pt-20">
              <Resource
                value={navigationResource}
                onPending={() => <>Loading ...</>}
                onRejected={(error) => <>Error: {error.message}</>}
                onResolved={(navigations) => (
                  <ul class="text-white font-bold text-6xl">
                    {navigations.results.map((link:any, index:any) => (
                      <li key={index}><Link href={link.data.link}>{link.data.text}</Link></li>
                    ))}
                  </ul>
                )}
              />
            </nav>
        </div>
      }
      <div class="bg-white/75 w-1/6 h-screen z-30 border-r border-r-biru fixed left-0 top-0 text-lg invisible md:visible">
        <div class="w-full h-1/4 p-2.5">
          <Link href="/"><MainLogo /></Link>
        </div>
        <div class="relative w-full h-1/4 p-2.5">
          <nav class="absolute bottom-2.5 left-2.5">
            <Resource
              value={navigationResource}
              onPending={() => <>Loading ...</>}
              onRejected={(error) => <>Error: {error.message}</>}
              onResolved={(navigations) => (
                <ul class="text-biru font-bold">
                  {navigations.results.map((link:any, index:any) => (
                    <li key={index}><Link href={link.data.link}>{link.data.text}</Link></li>
                  ))}
                </ul>
              )}
            />
          </nav>
        </div>
        <div class="w-full h-1/4 p-0">
          <Link class="relative block w-full h-full p-2.5 border-t border-t-biru text-biru hover:bg-biru hover:text-white cursor-pointer" href="mailto:marketing@meditechgloves.com">
            <HiEnvelopeOutline class="absolute top-2.5 left-2.5"></HiEnvelopeOutline>
            <span class="absolute bottom-2.5 left-2.5 font-semibold">
              Email us
            </span>
          </Link>
        </div>
        <div class="w-full h-1/4 p-0">
          <Link class="relative block w-full h-full p-2.5 border-t border-t-biru text-biru hover:bg-biru hover:text-white cursor-pointer" href="tel:+6067997742">
            <HiPhoneOutline class="absolute top-2.5 left-2.5"></HiPhoneOutline>
            <p class="absolute bottom-2.5 left-2.5 font-semibold">
              Call us
            </p>
          </Link>
        </div>
      </div>
    </section>    
  );
});

export default component$(() => {
  return (
    <Header />
  )
})