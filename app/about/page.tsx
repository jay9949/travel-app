import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section className="flexCenter flex-col">
      <div className="padding-container max-container w-full pb-24">
        <Image src="/camp.svg" alt="camp" width={50} height={50} />
        <p className="uppercase regular-18 -mt-1 mb-3 text-green-50">
          About US
        </p>
        <div className="">
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10 pt-8">
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              <h2 className="bold-40 lg:bold-64 xl:max-w-[390px] text-black mb-4">
                Flint, Tinder & Spark!
              </h2>
              'Machan this is awesome! Why don't we offer this experience to
              others?' We were camping in a vineyard somewhere near a town
              called Suruli in Theni district of Tamilnadu. The conversation we
              had that night was the spark. We had managed to import a camping
              tent through a friend who had gone on an onsite to the US.
              Suddenly our lives changed! We got access to breathtaking
              locations.That’s how we had ended up in the vineyard.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
            <p className="regular-16 text-gray-30 xl:max-w-[520px]">
              <h2 className="bold-40 lg:bold-64 text-black xl:max-w-[450px] pt-8 mb-4">
                The Journey:
              </h2>
              Biggest concerns for anyone wanting to go camping in India are
              finding safe campsites & clean toilets. And so we set out with the
              sole motto of addressing these painpoints. We shaped & reshaped
              the idea over several camps, worked on infra, safety & got it into
              a workable form.Today as we speak, all camspites listed in
              Exoticamp are privately owned campsites, with clean toilets, basic
              first-aid kit, trained local hosts & back-up cottage / dormitories
              for rough weather contingency.
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between px-6 pt-[5rem]">
          <div className="text-center">
            <Image src="/rated.svg" alt="rated" width={80} height={80} />
            <h2 className="pt-4 font-semibold">Higest Rated</h2>
          </div>
          <div className="text-center">
            <Image src="/safety.svg" alt="safety" width={80} height={80} />
            <h2
              className="pt-4 font-semibold
            "
            >
              High On Safety
            </h2>
          </div>
          <div className="text-center">
            <Image src="/verified.svg" alt="verified" width={80} height={80} />
            <h2
              className="pt-4 font font-semibold
            "
            >
              Verified
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
