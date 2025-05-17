import Link from "next/link";
import Image from "next/image";

function Home() {
  return (
    <>
      <section className="special-packages py-15 md:py-40">
        <div className="align-elements">
          <div className="mb-10">
            <h2 className="mb-5 text-2xl uppercase md:text-4xl">
              SPECIAL PACKAGES:
            </h2>
            <p className="text-sm opacity-80 md:text-xl">
              Get special travel packages made tailored for your needs.
            </p>
          </div>
        </div>
      </section>
      <section className="cta py-15 text-center text-white md:py-40">
        <div className="align-elements">
          <h2 className="mb-5 text-3xl uppercase md:text-6xl">
            start your adventure
          </h2>
          <p className="text-md mx-auto max-w-3xl md:text-xl">
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
