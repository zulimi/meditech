import { component$ } from "@builder.io/qwik";
import Header from "../components/header/header";
import Introduction from "~/components/introduction/introduction";
import LatestNews from "../components/latest-news/latest-news";
import StrategicPartnership from "../components/strategic-partnership/strategic-partnership";
import InnovationCollaboration from "~/components/innovation-collaboration/innovation-collaboration";
import Footer from "../components/footer/footer";

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <Introduction />
        <LatestNews />
        <StrategicPartnership />
        <InnovationCollaboration />
      </main>
      <Footer />
    </>
  );
});
