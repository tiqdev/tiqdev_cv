"use client";
import { useEffect } from "react";

const Cursor = () => {
  const moveCursor = (e) => {
    const cursor = document.getElementById("cursor");
    cursor.style.left = e.clientX - 100 + "px";
    cursor.style.top = e.clientY - 100 + "px";
  };

  useEffect(() => {
    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div
      id="cursor"
      className="w-[200px] h-[200px] blur-[20px] rounded-full bg-grey opacity-50 fixed z-0 transition-transform duration-500 "
    ></div>
  );
};

export default Cursor;
