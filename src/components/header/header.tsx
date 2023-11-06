import { component$ } from "@builder.io/qwik";
import MainLogo from "~/media/LogoMeditechHD.png?jsx";
import { HiEnvelopeOutline, HiPhoneOutline } from "@qwikest/icons/heroicons";
import { Link } from '@builder.io/qwik-city';
 
export default component$(() => {
  return (
    <header class="bg-white/75 w-1/6 h-screen z-50 border-r border-r-biru fixed left-0 top-0">
      <div class="w-full h-1/4 p-2.5">
        <MainLogo />
      </div>
      <div class="relative w-full h-1/4 p-2.5">
        <nav class="absolute bottom-2.5 left-2.5">
          <ul class="text-biru font-bold">
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Gallery</li>
            <li>Contact Us</li>
          </ul>
        </nav>
      </div>
      <div class="w-full h-1/4 p-0">
        <button class="relative w-full h-full p-2.5 border-t border-t-biru text-biru hover:bg-biru hover:text-white">
          <HiEnvelopeOutline class="absolute top-2.5 left-2.5"></HiEnvelopeOutline>
          <p class="absolute bottom-2.5 left-2.5 font-semibold">
            Email us
          </p>
        </button>
      </div>
      <div class="w-full h-1/4 p-0">
        <button class="relative w-full h-full p-2.5 border-t border-t-biru text-biru hover:bg-biru hover:text-white">
          <HiPhoneOutline class="absolute top-2.5 left-2.5"></HiPhoneOutline>
          <p class="absolute bottom-2.5 left-2.5 font-semibold">
            Call us
          </p>
        </button>
      </div>
    </header>
    
  );
});
