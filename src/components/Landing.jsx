"use client";
import Image from "next/image";
import landing from "/public/assets/images/gitBanner_ladning.png";
import reactlogo from "/public/assets/images/reacticon.png";

const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.4"
      className="relative w-full md:h-screen bg-zinc-900 flex justify-center items-center">
      <Image
        className="my-20 md:my-0"
        src={landing}
        alt="Landing Image"
        priority
      />

      {/* React logo icon animation */}
      <Image
        className="absolute lg:w-16 w-5 md:w-12 lg:right-[55vw] lg:top-[65vh] md:top-[63vh] md:right-[55vw] top-[31vh] right-[55.5vw] animate-spin-slow"
        src={reactlogo}
        alt="React Logo"
      />
    </div>
  );
};

export default Landing;
