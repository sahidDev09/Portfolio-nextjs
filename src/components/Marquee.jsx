"use client";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div
      data-scroll
      data-scroll-speed=".1"
      className="w-full md:py-20 py-10 rounded-t-3xl bg-[#3DB883]">
      <div className="text border-t border-b border-zinc-300 whitespace-nowrap overflow-hidden flex uppercase">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] text-white md:-mb-10 pt-10 leading-none font-semibold font-founders_bl">
          About myself.
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 10 }}
          className="text-[22vw] text-white md:-mb-10 pt-10 leading-none font-semibold font-founders_bl">
          About myself.
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
