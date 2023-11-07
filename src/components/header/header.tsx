import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { fetchEntries } from "@builder.io/sdk-qwik";
import MainLogo from "~/media/LogoMeditechHD.png?jsx";
import { HiEnvelopeOutline, HiPhoneOutline } from "@qwikest/icons/heroicons";
import { Link } from '@builder.io/qwik-city';
 
export default component$(() => {

  const navigationResource = useResource$<any>(() =>
    fetchEntries({
      model: "navigation",
      apiKey: import.meta.env.PUBLIC_BUILDER_API_KEY
    })
  );

  return (
    <header class="bg-white/75 w-1/6 h-screen z-30 border-r border-r-biru fixed left-0 top-0">
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
    </header>
    
  );
});
