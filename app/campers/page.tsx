import React from "react";
import Image from "next/image";

const Pricing = () => {
  return (
    <section className="py-24 padding-container ">
      <div className="px-2 items-center">
        <div className="relative">
          <Image
            src="/camp.svg"
            alt="camp"
            width={50}
            height={50}
            className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
          />
          <h2 className="bold-40 lg:bold-64">Packages</h2>
        </div>
        <div className="pt-8">
          <div className="border px-8 text-center mt-10 py-6">
            <div className="lg:flex lg:pb-4 lg:items-center">
              <Image
                src="/pack1.jpg"
                alt="pack1"
                width={450}
                height={90}
                className="pl-1"
              />
              <h2 className="py-4 font-bold text-[40px] lg:pl-6">
                Tata Camper With Roof Tent
              </h2>
            </div>
            <div>
              <p className="pb-4">
                The Camper is equipped with a foldable rooftop tent that
                comfortably sleeps two travellers. The foldable tents are made
                of premium quality, breathable poly-cotton canvas with pop up
                window awning and flyscreen windows. The retractable ladder is
                attached to the tent. Set up time: 2-3 minutes
              </p>
              <button
                type="button"
                className="text-[30px]  font-semibold border-green-50 border-2 rounded-full px-3 py-1 hover:bg-green-50 transition-all duration-300 text-green-50 hover:text-white"
              >
                Starting At <span className="text-black">INR 2999/-</span>
              </button>
            </div>
          </div>
          <div className="border px-8 text-center mt-10 py-6">
            <div className="lg:flex lg:pb-4 lg:items-center">
              <Image
                src="/pack2.jpeg"
                alt="pack2"
                width={450}
                height={90}
                className="pl-1"
              />
              <h2 className="py-4 font-bold text-[40px] lg:pl-6">
                Toyota Hilux Roof Tent
              </h2>
            </div>
            <div>
              <p className="pb-4">
                Toyota Hilux is equipped with a foldable rooftop tent that
                comfortably sleeps four travellers. The foldable tents are made
                of premium quality, breathable poly-cotton canvas with pop up
                window awning and flyscreen windows. The retractable ladder is
                attached to the tent. Set up time: 10-15 minutes & with Also
                some lighting.
              </p>
              <button
                type="button"
                className="text-[30px]  font-semibold border-green-50 border-2 rounded-full px-3 py-1 hover:bg-green-50 transition-all duration-500 text-green-50 hover:text-white"
              >
                Starting At <span className="text-black">INR 3599/-</span>
              </button>
            </div>
          </div>
          <div className="border px-8 text-center mt-10 py-6">
            <div className="lg:flex lg:pb-4 lg:items-center">
              <Image
                src="/pack3.jpg"
                alt="pack3"
                width={450}
                height={90}
                className="pl-1"
              />
              <h2 className="py-4 font-bold text-[40px] lg:pl-6">
                Tata Winger Intrior Modified
              </h2>
            </div>
            <div>
              <p className="pb-4">
                The Winger is equipped with a intrior modification that
                comfortably sleeps For Couples. The foldable Bed are made of
                premium quality, breathable poly-cotton canvas with pop up
                window awning and flyscreen windows. The roof also open is for
                sky view in Night. Set up time: 5-10 minutes
              </p>
              <button
                type="button"
                className="text-[30px]  font-semibold border-green-50 border-2 rounded-full px-3 py-1 hover:bg-green-50 transition-all duration-300 text-green-50 hover:text-white"
              >
                Starting At <span className="text-black">INR 4999/-</span>
              </button>
            </div>
          </div>
          <div className="border px-8 text-center mt-10 py-6 lg:flex-col  ">
            <div className="lg:flex lg:pb-4 lg:items-center">
              <Image
                src="/pack4.jpg"
                alt="pack4"
                width={350}
                height={90}
                className="pl-1 lg:w-[20rem] object-center"
              />
              <h2 className="py-4 font-bold text-[40px] lg:pl-6">
                Thar 4x4 With Roof Tent
              </h2>
            </div>
            <div>
              <p className="pb-4">
                The Thar is equipped with a foldable rooftop tent that
                comfortably sleeps two travellers. The foldable tents are made
                of premium quality, breathable poly-cotton canvas with pop up
                window awning and flyscreen windows. The retractable ladder is
                attached to the tent. Set up time: 5-6 minutes
              </p>
              <button
                type="button"
                className="text-[30px]  font-semibold border-green-50 border-2 rounded-full px-3 py-1 hover:bg-green-50 transition-all duration-300 text-green-50 hover:text-white"
              >
                Starting At <span className="text-black">INR 5999/-</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
