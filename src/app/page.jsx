import Counter from "@/components/layout/Counter";
import SpecialSuggest from "@/components/layout/SpecialSuggest";
import PopularDestinations from "@/components/layout/PopularDestinations";
import Cta from "@/components/layout/Cta";
import Features from "@/components/layout/Features";

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
