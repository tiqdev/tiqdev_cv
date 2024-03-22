"use client";

import { useWindowSize } from "react-use";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BiPauseCircle, BiPlayCircle } from "react-icons/bi";

const DynamicIsland = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const { width } = useWindowSize();
  const isMobile = width < 1200;
  const isTooSmall = width < 580;

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
            transition={{ duration: 0.3, type: "spring", stiffness: 100 }}
            onClick={() => setIsActive(!isActive)}
            className={`fixed top-[78px] left-1/2 -translate-x-1/2 bg-[#080808] rounded-[32px] z-20 flex flex-row justify-start items-center p-[8px] gap-[16px]`}
          >
            <motion.img
              initial={{ height: 24, width: 24, borderRadius: 24 }}
              animate={{
                height: isActive ? 84 : 24,
                width: isActive ? 84 : 24,
                borderRadius: isActive ? 24 : 24,
              }}
              exit={{ height: 24, width: 24, borderRadius: 24 }}
              transition={{ duration: 0.3 }}
              src="https://i.scdn.co/image/ab67616d0000b2731fa74364ad8e411d81783933"
              alt="blossom"
              className=" rounded-full"
            />
            <div className="flex flex-col items-start gap-[4px] justify-center mr-4">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isActive ? 1 : 0,
                  x: isActive ? 0 : -10,
                }}
                transition={{ duration: 0.2, delay: 0.1 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-[14px] whitespace-nowrap font-normal text-white leading-[20px] mr-[12px]"
              >
                The Winter
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: isActive ? 0.8 : 0,
                  x: isActive ? 0 : -10,
                }}
                transition={{ duration: 0.2, delay: 0.1 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-[12px] whitespace-nowrap text-white leading-[16px] mr-[12px]"
              >
                Balmorhea
              </motion.span>
            </div>
            <div className="flex justify-between w-[26px] h-[20px] self-center ml-auto">
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-normal bg-gray-400"></div>
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-quiet bg-gray-400"></div>
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-loud bg-gray-400"></div>
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-quiet bg-gray-400"></div>
              <div className="rounded-lg scale-y-[0.4] h-full w-[2px] animate-loud bg-gray-400"></div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicIsland;
