// import React, { useEffect, useRef } from "react";
// import { nav_list } from "../../constants";
// import { useSelector } from "react-redux";
// import { selectHomepage } from "../../homepageSlice";
// import gsap from "gsap";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(SplitText);

// const Navbar = () => {
//   const { darkTheme } = useSelector(selectHomepage);
//   const splitRef = useRef();
//   const textRef = useRef();
//   const animationRef = useRef();

//   const animateWords = () => {
//     animationRef.current?.revert?.();
//     splitRef.current?.revert?.();

//     splitRef.current = SplitText.create(textRef.current, {
//       type: "chars",
//     });

//     animationRef.current = gsap.from(splitRef.current.chars, {
//       y: -100,
//       autoAlpha: 0,
//       opacity: 0,
//       ease: "back",
//       stagger: 0.15,
//     });
//   };

//   useEffect(() => {
//     animateWords();

//     const handleResize = () => {
//       animateWords();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       animationRef.current?.revert?.();
//       splitRef.current?.revert?.();
//     };
//   }, []);

//   return (
//     <div
//       className={`sticky  z-20 top-4 border px-8 py-2 rounded-2xl w-2/5 shadow flex gap-12 items-center justify-between ${
//         darkTheme
//           ? "bg-gradient-to-br from-white/10 to-neutral-900/25 border-neutral-800"
//           : "bg-white border-neutral-200"
//       }`}
//     >
//       <div
//         className={`pangolin tracking-widest text-[2rem]  font-bold select-none ${
//           darkTheme ? `text-white/80` : `text-black/80`
//         } `}
//         ref={textRef}
//       >
//         Sarthak
//       </div>
//       <div
//         className={`flex gap-4 text-[1rem] font-semibold uppercase cursor-pointer ${
//           darkTheme ? `text-white/80` : `text-black/90`
//         } `}
//       >
//         {nav_list?.map((data) => {
//           return (
//             <>
//               <div
//                 onClick={() => {}}
//                 className={`icons p-2 border text-neutral-600 rounded-lg hover:scale-[0.95] hover:shadow-none shadow transition-all duration-200 ease-in-out ${
//                   darkTheme
//                     ? `text-white border-neutral-500`
//                     : `text-neutral-600 border-neutral-200`
//                 }`}
//               >
//                 <div className="">{data?.icon}</div>
//               </div>
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { selectHomepage } from "../../homepageSlice";
import { nav_list } from "../../constants";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Navbar = () => {
  const { darkTheme } = useSelector(selectHomepage);
  const navbarRef = useRef();
  const textRef = useRef();

  useEffect(() => {
    // Animate navbar opacity and scale (no transform Y)
    gsap.fromTo(
      navbarRef.current,
      { opacity: 0, scale: 0.65 },
      {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    // Animate split text
    const split = new SplitText(textRef.current, { type: "chars" });
    gsap.from(split.chars, {
      y: -50,
      opacity: 0,
      stagger: 0.05,
      delay: 0.2,
      ease: "back.out(1.7)",
    });

    return () => {
      split.revert();
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      className="sticky z-20 top-6 w-full flex justify-center select-none"
    >
      <div
        className={`border px-5 py-2 lg:px-8 lg:py-2 mx-4 rounded-2xl lg:w-2/5 shadow flex gap-12 items-center justify-between transition-all duration-300 ${
          darkTheme
            ? "bg-gradient-to-br from-white/10 to-neutral-900/25 border-neutral-800"
            : "bg-white border-neutral-200"
        }`}
      >
        <div
          ref={textRef}
          className={`pangolin tracking-widest text-[1.5rem] lg:text-[2rem] font-bold ${
            darkTheme ? "text-white/80" : "text-black/80"
          }`}
        >
          Sarthak
        </div>
        <div
          className={`flex gap-4 text-[1rem] font-semibold uppercase cursor-pointer ${
            darkTheme ? "text-white/80" : "text-black/90"
          }`}
        >
          {nav_list.map((data, index) => (
            <div
              key={index}
              onClick={() => {}}
              className={`hover:animate-spin icons p-2 border rounded-lg hover:scale-[0.95] hover:shadow-none shadow transition-all duration-200 ease-in-out ${
                darkTheme
                  ? "text-white border-neutral-500"
                  : "text-neutral-600 border-neutral-200"
              }`}
            >
              {data.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
