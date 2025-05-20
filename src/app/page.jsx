import Counter from "@/layout/Counter";
import SpecialSuggest from "@/layout/PopularDestinations";
import PopularDestinations from "@/layout/SpecialSuggest";
import Cta from "@/layout/Cta";
import Features from "@/layout/Features";

function Home() {
  return (
    <>
      <PopularDestinations />
      <Features />
      <SpecialSuggest />
      <Counter />
      <Cta />
    </>
  );
}

export default Home;
