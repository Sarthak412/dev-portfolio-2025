// import React from "react";

// const Banner = () => {
//   return (
//     <div>
//       <div className="text-[5rem] font-bold text-purple-300">
//         Hello I am Sarthak Kamble
//       </div>
//       <div className="text-white text-6xl text-center font-semibold">
//         Front-end Developer
//       </div>
//     </div>
//   );
// };

// export default Banner;

// src/components/WordSplitAnimation.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
// Make sure SplitText is available (locally or via Club GreenSock)
// You might need to provide the path if it's not from npm
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export default function WordSplitAnimation() {
  const textRef = useRef(null);
  const animationRef = useRef(null);
  const splitRef = useRef(null);

  const animateWords = () => {
    animationRef.current?.revert?.();
    splitRef.current?.revert?.();

    splitRef.current = SplitText.create(textRef.current, {
      type: "chars ",
    });

    animationRef.current = gsap.from(splitRef.current.chars, {
      y: 100,
      autoAlpha: 0,
      stagger: 0.05,
    });
  };

  useEffect(() => {
    animateWords();

    const handleResize = () => {
      animateWords();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      animationRef.current?.revert?.();
      splitRef.current?.revert?.();
    };
  }, []);

  return (
    <div className="p-4 h-full">
      <div
        ref={textRef}
        className="text-[5rem] font-bold text-center text-white"
      >
        Hello, I am Sarthak Kamble
      </div>
      <div className="text-4xl text-purple-400 font-bold text-center">
        Front-end Developer
      </div>
    </div>
  );
}
