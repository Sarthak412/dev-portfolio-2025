import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

const BoxAnimation = () => {
  const boxRef = useRef();

  useGSAP(() => {
    gsap.to(boxRef?.current, {
      duration: 5,
      repeat: -1,
      rotation: 360,
    });
  });

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          ref={boxRef}
          className="w-[8rem]  h-[8rem] bg-gradient-to-br from-red-500 to-yellow-400  font-semibold px-4"
        ></div>
      </div>
    </>
  );
};

export default BoxAnimation;
