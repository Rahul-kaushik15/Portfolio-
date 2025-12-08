import { section } from "framer-motion/client";
import React from "react";
import { motion } from "framer-motion";
import p from "../assets/Rahul2.png";

const About = () => {

  const stats = [
    { label: "Speciality", value: "Frontend Developer" },
    { label: "Focus", value: "Performance & UX" },
  ]
  const glows = [
    "-top-10 -left-10 w-[360px] h-[360px] opacity-20 blur-[120px]",
    "bottom-0 -right-10 w-[420px] h-[420px] opacity-15 blur-[140px] delay-300",
    "top-1/2 left-1/2 w-[220px] h-[220px] opacity-10 blur-[100px] -translate-x-1/2 -translate-y-1/2",
  ];
  return (
    <section
      id="about"
      className="min-h-screen w-full flex items-center justify-center 
    relative bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none ">
        {glows.map((glow, index) => (
          <div
            key={index}
            className={`absolute rounded-full bg-gradient-to-r from-[#302b63] to-[#00bf8f] to-[#1cd8d2] ${glow} animate-pulse`}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-6 md:px-10 lg:px-12 py-20 flex flex-col gap-12">
        <motion.div
          className="flex flex-col md:flex-row items-center md:items-stretch gap-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.div className="relative w-[160px] h-[160px] md:w-[190px] md:h-[190px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1cd8d2]/20 to-[#302b63]/20 border-2 border-[#1cd8d2]/25 object-cover"
          whileHover={{scale:1.02 }}
          transition={{type:"spring", stiffness:200, damping:18}}
          >
            <img src={p} alt="profile" className="absolute inset-0  " />
          </motion.div>

          <div className="flex-1 flex flex-col justify-center text-center md:text-left">
            <h2
              className="text-4xl sm:text-5xl font-extrabold tracking-tight 
               bg-gradient-to-r from-[#1cd8d2] to-[#00bf8f] 
               bg-clip-text text-transparent"
            >
              Rahul Kaushik
            </h2>
            <p className="mt-2 text-lg sm:text-xl md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto md:mx-0">
              Frontend Developer | React.js | JavaScript | UI/UX Enthusiast
            </p>

            <p className="mt-2 text-gray-300 leading:relaxed text-base sm:text-base max-w-2xl md:max-w-6xl">I’m a Frontend Developer who builds scalable, modern, and
            high-performance web applications with a strong focus on clean
            architecture and delightful user experiences. My expertise includes
            React, Next.js, JavaScript, TypeScript, Tailwind CSS, Framer Motion,
            and RESTful API integration. I enjoy transforming ideas into
            polished, production-ready interfaces that combine smooth
            interactions, robust functionality, and elegant design.</p>
            
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-2xl">
              {stats.map((item,i) =>(
                <motion.div key={i} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                initial={{opacity:0, y:10}}
                whileInView={{opacity:1, y:0}}
                transition={{delay: 0.5 * i , duration:0.4}}
                viewport={{once:true , amount:0.3}}
                >
                  <div className="text-sm  text-gray-400">{item.label}</div>
                  <div className="text-base font-semibold text-white">{item.value}</div> 
                </motion.div>
              ))}
            </div>
              <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
                <a href="#projects" className="inline-flex items-center justify-center rounded-lg bg-white text-black font-semibold px-4 py-2 hover:bg-gray-200 transition ">View Projects</a>
                <a href="#Contact" className="inline-flex items-center justify-center rounded-lg border border-white/20 text-white px-4 py-2 bg-white/10 hover:bg-white/20 transition">Get in Touch</a>
              </div>

          </div>
        </motion.div>
        <motion.div className="text-center md:text-left"
        initial={{opacity:0, x:-30}}
        whileInView={{opacity:1, x:0}}
        transition={{duration:0.6}}
        viewport={{once:true, amount:0.4}}
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">About me</h3>
          <p className="text=gray-300 leading-relaxed text-base sm:text-base">
              I’m a Frontend Developer specializing in building interactive, animation-rich web applications. Using React, Tailwind, GSAP, and Framer Motion, I craft smooth transitions, engaging UI interactions, and modern web experiences that feel dynamic and alive—all while keeping performance and responsiveness at the center.
          </p>
          <p>

          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
