/* eslint-disable react/no-unescaped-entities */
"use client";
import profile from "/public/assets/images/profile.jpeg";
import facebook from "/public/assets/images/social-media-icons/facebook-2.png";
import discord from "/public/assets/images/social-media-icons/discord.png";
import linkedin from "/public/assets/images/social-media-icons/linkedin-2.png";
import instagram from "/public/assets/images/social-media-icons/instagram.png";

import { IoArrowForward } from "react-icons/io5";
import Image from "next/image";

const About = () => {
  return (
    <div className=" w-full md:p-20 p-5 bg-zinc-900 rounded-t-3xl">
      <h1 className=" font-neue md:text-[3.6vw] md:leading-[4.4vw] tracking-normal ">
        Welcome to my digital portfolio! I’m Sahid, a passionate MERN stack
        developer dedicated to crafting beautiful and functional websites. Dive
        in to explore my work and journey.
        <span className="hidden md:inline-flex ml-4 btn font-light border-none transition-all bg-[#3DB883] hover:bg-zinc-700 rounded-full hover:text-[#3DB883] text-white text-[1.5vw] md:p-3 ">
          <a className=" flex items-center gap-2" href="#projects">
            Latest Projects
            <span className=" -rotate-45 bg-white text-black rounded-full">
              <IoArrowForward />
            </span>
          </a>
        </span>
        <button className="md:hidden mt-2 flex items-center gap-1 text-[2vw] bg-[#3DB883] rounded-full p-[4px]">
          Latest Projects
          <span className=" -rotate-45 bg-white text-black rounded-full">
            <IoArrowForward />
          </span>
        </button>
      </h1>

      <div id="aboutme">
        <hr className=" md:my-14 my-8 border-[1px] border-zinc-400" />

        <div className=" grid md:grid-cols-2 gap-10">
          <div className="about-details">
            <h1 className=" font-neue text-2xl md:text-5xl text-highlight-btn">
              My Approach
            </h1>
            <hr className=" my-6" />

            <h1 className="md:text-7xl text-4xl font-bold uppercase ">
              SAHID AHMED
            </h1>
            <p className=" text-zinc-400">
              Computer Science and Engineering Student & MERN Stack Developer
            </p>
            <h1 className=" text-2xl font-semibold my-4">About Me</h1>
            <p className=" flex flex-col gap-3 text-zinc-400">
              <span>
                Hello! I am a MERN stack developer with expertise in{" "}
                <span className=" text-highlight-btn">
                  HTML, CSS, Tailwind, JavaScript, React.js, Express.js,
                  Node.js, MongoDB, Firebase, Git, and GitHub
                </span>
                . I started my journey with Programming Hero and am currently
                exploring Next.js to enhance my skills
              </span>
              <span>
                As a computer science student at Metropolitan University Sylhet,
                I love learning new technologies and collaborating in team
                environments. My goal is to build innovative web applications
                with great user experiences.
              </span>
              <span>Let's connect and create something amazing together!</span>
            </p>
            <div>
              <h1 className=" text-2xl font-semibold my-4">Contact with me</h1>
              <ul className=" flex gap-4 items-center">
                <li>
                  <a
                    href="https://www.linkedin.com/in/sahidofficial09"
                    target="_blank">
                    <Image className=" w-14" src={linkedin} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/JTNQUePX" target="_blank">
                    <Image className=" w-14" src={discord} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Sm.sahid99" target="_blank">
                    <Image className=" w-14" src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/0sahid_99" target="_blank">
                    <Image className=" w-14" src={instagram} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" p-5">
            <div className="rounded-2xl">
              <Image
                className=" rounded-2xl object-cover"
                src={profile}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
