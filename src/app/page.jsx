import Counter from "@/components/layout/Counter";
import SpecialSuggest from "@/components/layout/SpecialSuggest";

function Home() {
  return (
    <>
      <SpecialSuggest />
      <Counter />
      <section className="cta text-center text-white md:py-40">
        <div className="align-elements">
          <h2 className="mb-5 text-3xl uppercase md:text-6xl">
            start your adventure
          </h2>
          <p className="text-md mn= mx-auto max-w-3xl md:text-xl">
            Sign up for our newsletter and receive exclusive travel deals,
            insider tips, and destination inspiration. Don't miss out on the
            adventure - join our mailing list today!
          </p>
        </div>
      </section>
    </>
  );
}

export default Home;
