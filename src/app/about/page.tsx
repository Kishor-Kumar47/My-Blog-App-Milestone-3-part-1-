import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <section className="bg-gray-100 text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ">
          <div className="flex lg:justify-center  lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
            <Image
              className="flex w-[300px] items-center object-cover object-center rounded"
              width={300}
              height={20}
              alt="hero"
              src="/images/profile-2.png"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Us
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to Mr Bheel ! coding channel Dive into the world of coding
              with tutorials tips and tricks designed for both beginners and
              advanced developers. Whether you're just starting with your first
              "Hello World!" or looking to master the latest frameworks and
              technologies this channel has something for everyone. From
              in-depth programming tutorials to quick coding hacks and
              project-based learning I'm here to help you elevate your coding
              skills and stay ahead in the tech world. Join our community of
              coders and let's build something amazing together!
            </p>
            <div className="flex w-full md:justify-start justify-center items-end">
              <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4">
                <label
                  htmlFor="hero-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  YouTube Channel
                </label>
                <Image
                src={'/images/MB-logo.png'}
                width={300}
                height={200}
                alt="logo"
                  className="w-[100px] bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <Link target="blank" href={'https://www.youtube.com/@MrBheelOfficial/videos'} className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
                Subscribe
              </Link >
            </div>
            <p className="text-sm mt-2 text-sky-950 mb-8 w-full">
              HTML CSS TypeScript React.JS Next.JS Web Development 
            </p>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
