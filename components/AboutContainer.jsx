"use client";

import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutContainer = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  return (
    <div ref={scrollRef}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center max-w-[1200px] md:space-y-[48px] space-y-[24px] px-[32px] py-[32px] pb-[48px]"
      >
        <div className="">
          <SectionTitle
            title="Who's the creative mind?"
            subtitle="ABOUT ME SECTION"
            icon="about_icon"
          />
        </div>
        <div className="flex md:flex-row flex-col md:space-x-[32px] md:space-y-0 space-y-[32px]">
          <div className="max-w-[320px] w-full border-t-[1px] border-solid border-badge bg-badge flex flex-col items-center space-y-[16px] p-[12px] pb-[16px] rounded-[24px] hover:-rotate-3 transition-transform duration-300">
            <img
              src="/assets/m_1.webp"
              alt="sparkle"
              className="rounded-[8px] aspect-square object-cover bg-grey"
            />
            <span className="text-[22px] leading-[28px] text-grey font-caveat font-normal">
              Daring to redefine boundaries :)
            </span>
          </div>
          <div className="flex flex-col space-y-[32px] max-w-[308px] w-full">
            <div className="flex flex-col space-y-[12px] flex-start justify-start ">
              <h3 className="text-[24px] font-[500] leading-[32px] -tracking-[0.02em] text-white">
                Tarık Kaya
              </h3>
              <p className="text-[18px] text-grey leading-[28px] font-inter font-normal -tracking-[0.015em] mb-[16px]">
                I'm Wei Chen, a passionate and experienced product designer,
                coffee lover, art enthusiast based in Manhattan, NY. With over 7
                years of expertise in the field, I have dedicated myself to
                creating exceptional user experiences that blend functionality
                and aesthetics seamlessly.
              </p>
            </div>
            <img
              src="/assets/sign.svg"
              alt="sign"
              className="w-[66px] h-[34px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutContainer;
