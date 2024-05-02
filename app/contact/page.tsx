import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end">
        <div className="flex flex-1 lg:min-h-[900px]">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>

        <div className="z-20  flex w-full flex-col lg:w-[60%]">
          <div className="relative">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64">Contact Us</h2>
          </div>

          <form className="pt-8">
            <h2 className="pb-2">Name:</h2>
            <input
              type="name"
              placeholder="Name"
              className="border border-black rounded-xl w-[25rem] py-4 px-3"
            />
            <h2 className="pb-2 pt-8">Email:</h2>
            <input
              type="email"
              placeholder="e-mail"
              className="border border-black rounded-xl w-[25rem] py-4 px-3"
            />
            <h2 className="pb-2 pt-8">Message:</h2>
            <textarea
              className="border border-black rounded-xl w-[25rem]
              py-4 px-3"
              placeholder="Message"
            />
            <br className="lg:visible invisible" />
            <button
              type="submit"
              className="mt-8 px-11 py-3 bg-green-50 text-[20px] text-white font-semibold hover:border-2 hover:border-green-50 transition-all duration-300 hover:bg-transparent hover:text-green-50"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
