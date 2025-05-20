import Counter from "@/layout/Counter";
import SpecialSuggest from "@/layout/SpecialSuggest";
import PopularDestinations from "@/layout/PopularDestinations";
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
