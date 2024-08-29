"use client";
import { useEffect, useRef } from "react";
import Landing from "@/components/Landing";
import Marquee from "@/components/Marquee";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import LocomotiveScroll from "locomotive-scroll";

import Image from "next/image";
import About from "@/components/About";
import SkillsEdu from "@/components/SkillsEdu";
import FeaturesProjects from "@/components/FeaturesProjects";

export default function Home() {
  const scrollRef = useRef(null);

  useEffect(() => {
    let locomotiveScroll;
    if (scrollRef.current) {
      locomotiveScroll = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
      });
    }

    return () => {
      if (locomotiveScroll) locomotiveScroll.destroy();
    };
  }, []);

  return (
    <main
      data-scroll-container
      ref={scrollRef}
      className=" w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <SkillsEdu />
      <FeaturesProjects />
      <Footer />
    </main>
  );
}
