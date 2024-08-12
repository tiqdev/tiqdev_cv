"use client";

import { useWindowSize } from "react-use";
import { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DynamicIsland = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { width } = useWindowSize();
  const isMobile = width < 1200;

  // Audio elementini referans olarak tanımla
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isMobile && (
          <motion.div
            initial={{ height: 36, width: 188 }}
            animate={{
              height: isActive ? 100 : 36,
              width: isActive ? 320 : 190,
            }}
            exit={{ height: 36 }}
            transition={{ duration: 0.3, type: "tween", stiffness: 200 }}
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`sticky top-[40px] border-t-[1px] border-solid border-badge w-full mx-auto max-w-[288px] mt-4 bg-badge  rounded-[32px] z-50 flex flex-row justify-start items-center p-[8px] gap-[16px]`}
          >
            <motion.img
              initial={{ height: 24, width: 24, borderRadius: 24 }}
              animate={{
                height: isActive ? 84 : 24,
                width: isActive ? 84 : 24,
                borderRadius: isActive ? 24 : 24,
              }}
              onClick={(e)=> {
                e.preventDefault();                
                if (isActive) handlePlayPause(); 
              }}
              exit={{ height: 24, width: 24, borderRadius: 24 }}
              transition={{ duration: 0.3 }}
              src="https://i.scdn.co/image/ab67616d0000b2731fa74364ad8e411d81783933"
              alt="blossom"
              className=" rounded-full border-solid border-badge border"
            />
            <div className="flex flex-col items-start gap-[4px] justify-center mr-4 relative">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : -10,
                }}
                transition={{ duration: 0.1, delay: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-[14px] whitespace-nowrap font-normal text-[#D8D8D8] leading-[20px] mr-[12px]"
              >
                The Winter
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isActive ? 0.8 : 0,
                  x: isActive ? 0 : -10,
                }}
                transition={{ duration: 0.1, delay: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-[12px] whitespace-nowrap text-[#D8D8D8] leading-[16px] mr-[12px]"
              >
                Balmorhea
              </motion.span>

              <motion.span
                initial={{ opacity: 0 }}
                animate={{
                  opacity: isActive ? 0 : 0.8,
                }}
                transition={{ duration: 0.1, delay: 0 }}
                exit={{ opacity: 0 }}
                className="text-[12px] whitespace-nowrap font-medium text-[#D8D8D8] leading-[16px] absolute top-3 w-full"
              >
                {isPlaying ? " the winter." : "for relax."}
              </motion.span>

              <motion.span
                initial={{ opacity: 0}}
                animate={{
                  opacity: isActive ? 0 : 0.8,
                }}
                transition={{ duration: 0.1, delay: 0}}
                exit={{ opacity: 0}}
                className="text-[12px] whitespace-nowrap font-medium text-[#D8D8D8] leading-[16px] -right-12 absolute top-3"
                style={ isPlaying ? {
                  display:"none"
                } : null}
              >
                   <svg
          className="w-[16px] h-[16px] fill-secondary transition-all duration-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
        >
          <g weight="regular">
            <path d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" />
          </g>
        </svg>
              </motion.span>
            </div>

            
            
            <div className="flex justify-between w-[26px] h-[20px] self-center ml-auto mr-[1px]" style={ !isPlaying ? {
              display:"none"
            } : null}>
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-normal bg-secondary"></div>
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-quiet bg-secondary"></div>
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-loud bg-secondary"></div>
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-quiet bg-secondary"></div>
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-loud bg-secondary"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Audio elementini buraya ekleyin */}
      <audio ref={audioRef} src="/mp3/TheWinter.mp3" />
    </>
  );
};

export default DynamicIsland;
