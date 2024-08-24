"use client";
import { useEffect, useState } from "react";
import Skills from "./Skills";
import Education from "./Education";
import Image from "next/image";
import smile from "/public/assets/images/smiole.png";

const SkillsEdu = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      let MouseX = e.clientX;
      let MouseY = e.clientY;

      let deltaX = MouseX - window.innerWidth / 2;
      let deltaY = MouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div id="skillsedu" className="md:bg-zinc-800 py-10 m-5 md:m-0">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Skills & Educations
      </h1>
      <div className="grid md:grid-cols-2 gap-5 w-full overflow-hidden container mx-auto">
        <div className="eyes hidden md:inline relative w-full h-full bg-cover bg-no-repeat bg-center bg-[url(https://i.ibb.co/MCC1hbB/eyebg-2.jpg)] rounded-2xl">
          <div className="absolute w-1/2 flex gap-5 justify-between top-1/2 left-1/2 -translate-x-[50%] -translate-y-[100%]">
            <div className="flex items-center justify-center w-[10vw] h-[10vw] bg-zinc-200 rounded-full">
              <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-9">
                  <div className="w-9 h-9 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center w-[10vw] h-[10vw] bg-zinc-200 rounded-full">
              <div className="w-2/3 h-2/3 relative bg-zinc-900 rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-9">
                  <div className="w-9 h-9 bg-zinc-100 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image
              className="absolute md:bottom-1/4 bottom-1/4 left-1/2 -translate-x-[50%] translate-y-[30%] md:w-96 w-40"
              src={smile}
              alt="Smiling face"
            />
          </div>
        </div>

        <div className="skillsEdu bg-zinc-900 rounded-2xl">
          <Skills />
          <Education />
        </div>
      </div>
    </div>
  );
};

export default SkillsEdu;
