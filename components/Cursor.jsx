"use client";
import { useEffect } from "react";

const Cursor = () => {
  const moveCursor = (e) => {
    const cursor = document.getElementById("cursor");
    cursor.style.left = e.clientX - 200 + "px";
    cursor.style.top = e.clientY - 200 + "px";
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
      className="w-[400px] h-[400px] blur-[100px] rounded-full bg-grey opacity-10 fixed z-0 transition-transform duration-500 "
    ></div>
  );
};

export default Cursor;
