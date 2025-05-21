import Counter from "@/layout/Counter";
import PopularDestinations from "@/layout/PopularDestinations";
import SpecialSuggest from "@/layout/SpecialSuggest";
import Cta from "@/layout/Cta";
import Features from "@/layout/Features";

function Home() {
  return (
    <>
      <SpecialSuggest />
      <Features />
      <PopularDestinations />
      <Counter />
      <Cta />
    </>
  );
}

export default Home;
