import { filter, label, section } from "framer-motion/client";
import React, { useMemo, useState } from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import { motion } from "framer-motion";
import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
import avator from "../assets/avator.png";

const socials = [
  { Icon: FaXTwitter, label: "X", href: "https://twitter.com/RahulKaushikDev" },
  {
    Icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rahul-kaushik-06a664319/",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/Rahul-kaushik15",
  },
];

const glowVariants = {
  initial: { scale: 1, y: 0, filter: "drop-shadow(0 0 0 rgba(0, 0, 0, 0))" },
  hover: {
    scale: 1.2,
    y: -3,
    filter:
      "drop-shadow(0 0 8px rgba(13, 88, 204, 0.9)) drop-shadow(0 0 18px rgba(16, 185, 129, 0.8))",
    transition: { type: "spring", stiffness: 300, damping: 15 },
  },
  tap: {
    scale: 0.9,
    y: 0,
    transition: { duration: 0.08 },
  },
};

const Home = () => {
  const roles = useMemo(
    () => ["Web Developer", "Frontend Developer", "React Developer"],
    []
  );
  const [Index, setIndex] = React.useState(0);
  const [subIndex, setsubIndex] = React.useState(0);
  const [Deleting, setDeleting] = React.useState(false);
  React.useEffect(() => {
    const current = roles[Index];
    let timeout = setTimeout(
      () => {
        if (!Deleting && subIndex < current.length) {
          setsubIndex((v) => v + 1);
        } else if (!Deleting && subIndex === current.length) {
          setTimeout(() => {
            setDeleting(true);
          }, 1200);
        } else if (Deleting && subIndex > 0) {
          setsubIndex((v) => v - 1);
        } else if (Deleting && subIndex === 0) {
          setDeleting(false);
          setIndex((p) => (p + 1) % roles.length);
        }
      },
      Deleting ? 40 : 60
    );
    return () => clearTimeout(timeout);
  }, [subIndex, Deleting, roles, Index]);
  return (
    <section
      id="home"
      className="w-full h-screen relative bg-black overflow-hidden"
    >
      <ParticlesBackground />
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[70vw] sm:w-[z-500vw]  md:w-[40vw]  h-[70vw]sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] to-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse"></div>

        <div className="absolute bottom-0 right-0 w-[70vw] sm:w-[z-500vw]  md:w-[40vw]  h-[70vw]sm:h-[50vw] md:h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-gradient-to-r from-[#302b63] to-[#00bf8f] to-[#1cd8d2] opacity-30 sm:opacity-20 md:opacity-10 blur-[100px] sm:blur-[130px] md:blur-[150px] animate-pulse delay-500"></div>
      </div>

      <div className="relative  z-10 h-full w-full max-w-6xl mx-auto mt-10 px-4  grid grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col justify-center h-full text-center lg:text-left relative ">
          <div className="w-full lg:pr-24 mx-auto max-w-[48rem]">
            <motion.div
              className="mb-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white tracking-wide min-h-[1.6em]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span>{roles[Index].substring(0, subIndex)}</span>
              <span
                className="inline-block w-[2px] ml-1 bg-white animate-pulse align-middle "
                style={{ height: "1em" }}
              ></span>
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] drop-shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Hello, I'm
              <br />
              <span className="text-white font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl lg:whitespace-nowrap">
                Rahul kaushik
              </span>
            </motion.h1>

            {/* <motion.p className=" mt-6 text-base sm:text-lg md:text-sm text-gray-300 max-w-2xl  mx-auto lg:mx-0"
            initial={{opacity:0, y:20}} 
            animate={{opacity:1, y:0}}
            transition={{delay:0.4 , duration:0.8}}
            >I’m a React Developer specializing in modern frontend workflows, including Tailwind CSS for styling, Redux for scalable state management, API integration for dynamic data, and Framer Motion for smooth interactions. Even as a fresher, I focus on performance, clean architecture, and delivering polished, production-ready interfaces.</motion.p> */}
            <motion.p
              className=" mt-6 text-base sm:text-lg md:text-base text-gray-300 max-w-2xl  mx-auto lg:mx-0 "
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I’m a React Developer who builds fast, modern, and user-friendly
              web interfaces. I focus on clean code, smooth UI/UX, and creating
              responsive digital experiences using React and the latest frontend
              tools.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-white font-medium text-md sm:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <a
                href="#projects"
                className="px-4 py-2 rounded-full bg-gradient-to-r from-[#1cd8d2] via-[#00bf8f] to-[#302b63] shadow-lg hover:scale-105 transition-all"
              >
                View My Work
              </a>
              <a
                href="/Rahul_Frontend_developer.docx.pdf"
                download
                className="px-4 py-2 rounded-full text-black bg-white hover:bg-gray-300 shadow-lg hover:scale-105"
              >
                My Resume
              </a>
            </motion.div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-5 text-white text-2xl md:text-3xl">
              {socials.map(({ Icon, label, href }, idx) => (
                <motion.a
                  href={href}
                  key={label}
                  target="_blank"
                  aria-label={label}
                  rel="noopener noreferrer"
                  variants={glowVariants}
                  initial="initial"
                  whileHover="hover"
                  whileTap="tap"
                  className=""
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <div className="relative lg:block hidden">
              <div className="absoulte top-1/2 pointer-events-none "
              style={{
                right:"10px" , width: 'min(22vw, 410px)', height: 'min(40vh, 760px)', borderRadius: '50%',filter: 'blur(38px)',opacity:0.32, background:
                  'from 0deg , #1cd8d2, #00bf8f 50%, #302b63 100%)'
              }}
              />
          <motion.img
            src={avator}
            alt="Rahul kaushik"
            className="
      absolute
      top-1/2 left-1/2
      -translate-x-[35%] -translate-y-[55%]
      object-contain 
      select-none pointer-events-none
      w-full max-w-[450px] h-[90vh]
    "
            style={{
              width: "min(45vw, 780px)",
            }}
            initial={{ opacity: 0, scale: 0.98, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
