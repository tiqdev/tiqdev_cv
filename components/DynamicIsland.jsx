"use client";

import { useWindowSize } from "react-use";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const DynamicIsland = () => {
  const [isActive, setIsActive] = useState(false);

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
            className={`fixed top-[78px] left-1/2 -translate-x-1/2 bg-black rounded-[32px] z-20 flex flex-row justify-start items-center p-[8px] gap-[16px]`}
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
            <div className="flex flex-col items-start gap-[4px] justify-center">
              <motion.span
                initial={{ scale: 0 }}
                animate={{
                  scale: isActive ? 1 : 0,
                }}
                exit={{ scale: 0 }}
                className="text-[16px] whitespace-nowrap font-bold text-white leading-[20px] mr-[12px]"
              >
                The Winter
              </motion.span>
              <motion.span
                initial={{ scale: 0 }}
                animate={{
                  scale: isActive ? 1 : 0,
                }}
                exit={{ scale: 0 }}
                className="text-[12px] whitespace-nowrap text-grey leading-[16px] mr-[12px]"
              >
                Balmorhea
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DynamicIsland;
