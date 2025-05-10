import React, { useEffect, useRef } from "react";
import assets from "../../assets";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SiBuymeacoffee } from "react-icons/si";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PiMouseMiddleClick } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

const HeroBanner = () => {
  const bannerContainerRef = useRef(null);

  useEffect(() => {
    const target = bannerContainerRef.current;

    const animateIn = () => {
      gsap.fromTo(
        target,
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
          rotation: 3,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "power3.out",
        }
      );
    };

    const trigger = ScrollTrigger.create({
      trigger: target,
      start: "top 95%",
      onEnter: animateIn,
      onEnterBack: animateIn,
      once: false,
      markers: false, // optional
    });

    return () => {
      trigger.kill();
    };
  }, []);

  return (
    <div className="h-full w-full flex items-center flex-col justify-between select-none">
      <div
        className="flex flex-col gap-8 md:flex-col lg:flex-row lg:gap-[5rem] py-18 lg:py-32"
        ref={bannerContainerRef}
      >
        <div className="right flex items-center justify-center p-5">
          <div className="w-fit skew-x-[8deg] skew-y-[-8deg] px-3 z-10 pt-3 pb-8 border shadow border-gray-200 bg-white">
            <img
              src={assets.ProfilePhoto}
              className="w-[12rem] h-[12rem] lg:w-[14rem] lg:h-[14rem] bg-white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 lg:gap-5 lg:max-w-[50rem] px-4">
          <div className="left">
            <div className="flex items-center justify-center backdrop-blur-2xl gap-4 bg-white/40 p-2 shadow rounded-4xl px-4 w-fit border border-neutral-300 montserrat">
              <div className="w-3 h-3 inline-flex items-center justify-center rounded-full bg-green-500">
                <div className="bg-green-500 w-3 h-3 rounded-full animate-ping"></div>
              </div>
              <span className="text-[0.85rem] pangolin tracking-widest">
                Open to Work
              </span>
            </div>
            <div className="pangolin text-[3rem] text-center lg:text-left lg:text-[6rem] tracking-wider">
              Sarthak Kamble
            </div>
            <div className="text-3xl text-center tracking-wider leading-10 lg:text-left text-neutral-800 font-medium pangolin">
              I’m a <span className="text-amber-500">Front-end Engineer</span>{" "}
              driven by curiosity and a love for modern tech. I enjoy crafting
              clean interfaces and exploring new ways to enhance user
              experiences.
            </div>
          </div>
          <div className="flex flex-col w-full lg:flex-row lg:w-full  items-center gap-4">
            <button className="bg-gradient-to-br w-full lg:w-fit flex gap-2 items-center justify-center from-[#444] to-[#111] hover:scale-95 transition-all duration-150 ease-in-out shadow hover:shadow-none cursor-pointer px-4 py-3 rounded-xl tracking-wider text-white pangolin">
              <SiBuymeacoffee className="w-5 h-5" />
              <span className="">Buy me a Coffee</span>
            </button>
            <button className="bg-white w-full lg:w-fit border-b-2 border-r-2 border-l border-t border-neutral-200 flex gap-2 items-center justify-center hover:scale-95 transition-all duration-150 ease-in-out shadow hover:shadow-none cursor-pointer px-4 py-3 rounded-xl tracking-wider pangolin">
              <IoDocumentTextOutline className="w-5 h-5" />
              <span className="">Download Resume</span>
            </button>
          </div>
        </div>
      </div>
      <div className="inline-flex items-center justify-center">
        <PiMouseMiddleClick className="w-8 h-8 text-neutral-600 animate-bounce" />
      </div>
    </div>
  );
};

export default HeroBanner;
