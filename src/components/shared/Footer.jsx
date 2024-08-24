/* eslint-disable no-unused-vars */
"use client";
import { FaEnvelope, FaFacebook, FaPhone } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Swal from "sweetalert2";
import Image from "next/image";

// Importing assets from the public folder
import slogo from "/public/assets/images/SLOGO.png";

const Footer = () => {
  const handleEmail = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Thank you",
      text: "Thank you for reaching out, I will connect with you as soon as possible.",
      icon: "success",
    });
  };

  return (
    <div>
      <footer className="bg-zinc-900 border-t border-zinc-700 dark:bg-gray-900">
        <div className="container px-6 py-8 mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center mx-auto md:-mx-0 text-center">
              <a href="">
                <Image className="w-24" src={slogo} alt="SLOGO" />
              </a>
              <div className="max-w-md mx-auto mt-4 text-center md:text-left items-center gap-4 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <FaEnvelope />
                  <h1>iamsahidofficial99@gmail.com</h1>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhone />
                  <h1>+8801784-321799</h1>
                </div>
              </div>
            </div>

            <div className="w-[30vw] hidden md:inline">
              <h1 className="text-2xl font-semibold mb-4">Get in Touch</h1>
              <form
                onSubmit={handleEmail}
                className="flex flex-col gap-2"
                action="">
                <input
                  className="input focus:outline-none"
                  type="email"
                  required
                  placeholder="Enter your E-mail"
                />
                <textarea
                  className="input focus:outline-none"
                  required
                  placeholder="Your message"></textarea>
                <input
                  className="w-full btn bg-highlight-btn text-white hover:bg-zinc-700 border-none"
                  type="submit"
                  value="Send Email"
                />
              </form>
            </div>
          </div>

          <hr className="my-10 border-zinc-500 dark:border-gray-700" />

          <div className="flex flex-col items-center sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-500">
              © Copyright 2024. All Rights Reserved.
            </p>

            <div className="flex mt-3 -mx-2 sm:mt-0">
              <a
                href="https://www.facebook.com/Sm.sahid99"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-xl text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="Facebook">
                <FaFacebook />
              </a>

              <a
                href="https://www.linkedin.com/in/sahidofficial09"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-xl text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="LinkedIn">
                <FaLinkedin />
              </a>

              <a
                href="https://github.com/sahidDev09"
                target="_blank"
                rel="noopener noreferrer"
                className="mx-2 text-xl text-gray-500 transition-colors duration-300 hover:text-gray-500 dark:hover:text-gray-300"
                aria-label="GitHub">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
