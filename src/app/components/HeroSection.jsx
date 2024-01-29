"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 h-[100vh] relative md:h-[50vh] xl:h-[unset]">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 md:mt-20 text-[48px] md:text-[60px] sm:text-5xl lg:text-7xl lg:leading-normal xl:text-[85px] xl:m-0 font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-white">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Tonderai Kawere",
                1000,
                "A Web Developer",
                1000,
                "A UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] sticky text-base sm:text-lg mb-6 lg:text-xl">
            Empowering businesses with seamless web experiences through elegant
            design and advanced development techniques.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-cyan-900 to-slate-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <Link
              download={true}
              href="/Tonderai cv.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-cyan-900 to-slate-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4  hidden md:block lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] md:bg-transparent w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.svg"
              alt="hero image"
              className="absolute xl:w-2/5  transform -translate-x-1/2 -translate-y-1/2 top-2/3 left-1/2"
              width={120}
              height={120}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
