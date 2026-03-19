import React, { useEffect, useRef, useState } from "react";
import simpsonImg from "../assets/images/simpson.png"; // adjust path if needed

const MAX_PUPIL_OFFSET = 5;

const SimpsonAvatarWithEyes: React.FC = () => {
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!avatarRef.current) return;
      const rect = avatarRef.current.getBoundingClientRect();

      // Re-centered between eyes
      const centerX = rect.left + rect.width * 0.59;
      const centerY = rect.top + rect.height * 0.36;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;
      const scale = Math.min(MAX_PUPIL_OFFSET / dist, 1);

      setOffset({ x: dx * scale, y: dy * scale });
    };

    const resetOffset = () => setOffset({ x: 0, y: 0 });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", resetOffset);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", resetOffset);
    };
  }, []);

  const pupilStyle: React.CSSProperties = {
    transform: `translate(${offset.x}px, ${offset.y}px)`,
  };

  return (
    <div
      ref={avatarRef}
      className="
        relative
        w-[300px] h-[300px]
        rounded-full overflow-hidden
        border-[3px] border-black
        shrink-0
      "
    >
      {/* Simpson image */}
      <img
        src={simpsonImg}
        alt="Simpson Avatar"
        className="
    w-full h-full object-cover pointer-events-none
    filter grayscale group-hover:grayscale-0
    transition-all duration-500 ease-in-out
  "
      />

      {/* LEFT pupil */}
      <div
        className="
          absolute
          w-[7px] h-[7px] md:w-[8px] md:h-[8px]
          bg-black rounded-full
          top-[28.5%] left-[50%]
          transition-transform duration-75 ease-linear
        "
        style={pupilStyle}
      />

      {/* RIGHT pupil */}
      <div
        className="
          absolute
          w-[7px] h-[7px] md:w-[8px] md:h-[8px]
          bg-black rounded-full
          top-[29%] left-[64%]
          transition-transform duration-75 ease-linear
        "
        style={pupilStyle}
      />
    </div>
  );
};

export default SimpsonAvatarWithEyes;
