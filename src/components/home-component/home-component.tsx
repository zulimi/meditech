import { component$ } from "@builder.io/qwik";
import { Image } from '@unpic/qwik';

export default component$((props: { aboutTitle: string, aboutDescription: string, aboutMedia: string }) => {

  return (

    <>

      {/* Introduction section */}

      <section class="grid grid-cols-12 grid-rows-12 h-screen relative">

        {/* Header and Navigation */}

        <div class="col-span-2 row-span-2 p-5 grid grid-cols-1 place-content-center">
          <Image src="https://cdn.builder.io/api/v1/image/assets%2Fb3469477a4e84c63ba8d1625c301b868%2F4c11778e43c84460b9e2635b5aa0571b" layout="contained" />
        </div>

        <div class="col-span-6 row-span-2 col-start-7 p-2.5 grid grid-cols-1 place-content-center">
          <nav class="w-full rounded-full bg-mgsb2 flex justify-center font-dm font-semibold drop-shadow-md backdrop-blur opacity-75">
            <ul class="flex flex-row w-full px-5 text-center">
              <li class="flex-auto py-2.5"><a href="#">Home</a></li>
              <li class="flex-auto py-2.5"><a href="#">About us</a></li>
              <li class="flex-auto py-2.5"><a href="#">Products</a></li>
              <li class="flex-auto py-2.5"><a href="#">Gallery</a></li>
              <li class="flex-auto py-2.5"><a href="#">Contact us</a></li>
            </ul>
          </nav>
        </div>

        {/* Introduction Content */}

        {/* <div class="col-span-5 row-span-8 col-start-7 row-start-3 px-2.5 rounded-lg drop-shadow-md border border-mgsb2 bg-white">

        </div> */}

        <div class="col-span-5 row-span-6 col-start-2 row-start-4 px-2.5">
          <h1 class="text-4xl font-barlow font-bold text-biru text-6xl">Your Source for Premium Glove Products</h1>
          <p class="text-lg font-dm font-normal text-biru pt-10">Meditech Gloves, established in 2002, excels in manufacturing 2.4 billion natural rubber and nitrile gloves annually, globally recognized for quality.</p>
        </div>

        {/* Video background */}

        <div class="absolute top-0 left-0 w-full h-full -z-10 opacity-75 bg-gradient-to-r from-mgsb1 from-50% to-80%">

        </div>

        <div class="absolute top-0 left-0 w-full h-full -z-20">
          <video autoPlay loop muted class="w-full h-full object-cover">
            <source src="https://cdn.builder.io/o/assets%2Fb3469477a4e84c63ba8d1625c301b868%2Fb2944ea86b584a50afba78bf2f9cd34d%2Fcompressed?apiKey=b3469477a4e84c63ba8d1625c301b868&token=b2944ea86b584a50afba78bf2f9cd34d&alt=media&optimized=true" type="video/mp4"/>
          </video>
        </div>

      </section>

      {/* Latest news section */}

      <section class="grid grid-cols-12 grid-rows-12 h-screen relative bg-mgsb1">

        <div class="col-span-3 row-span-4 col-start-2 row-start-3">
          <h2 class="text-5xl font-bold text-biru">Latest News</h2>
        </div>

        <div class="col-span-7 col-start-5 row-span-8 row-start-3 bg-white shadow-md rounded-lg">

        </div>

      </section>

    </>

  );
});