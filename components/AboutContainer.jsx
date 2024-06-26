"use client";

import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutContainer = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  return (
    <div ref={scrollRef} id="about">
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
          <div className="md:max-w-[320px] w-full border-t-[1px] border-solid border-badge bg-badge flex flex-col items-center space-y-[16px] p-[12px] pb-[16px] rounded-[24px] hover:-rotate-3 transition-transform duration-300">
            <img
              src="/assets/me.jpeg"
              alt="sparkle"
              className="rounded-[8px] aspect-square object-cover bg-grey"
            />
            <span className="text-[22px] leading-[28px] text-grey font-caveat font-normal">
              Daring to redefine boundaries :)
            </span>
          </div>
          <div className="flex flex-col space-y-[32px] md:max-w-[308px] w-full md:items-start items-center">
            <div className="flex flex-col space-y-[12px] md:items-start justify-start  items-center">
              <h3 className="text-[24px] font-[500] leading-[32px] -tracking-[0.02em] text-white">
                Tarık Kaya
              </h3>
              <p className="text-[16px] text-grey md:text-left text-center leading-[22px] font-inter font-normal -tracking-[0.015em] mb-[16px]">
                I am Tarık KAYA, a 27-year-old Computer Engineering graduate
                from Anadolu University (2019). I am a passionate and eager
                software enthusiast with a strong desire to learn about new
                technologies. For the past two years, I have gained valuable
                experience in web3 development and crypto technologies while
                working as a Frontend and Mobile Developer at a leading software
                development firm. My expertise includes React.js, Next.js,
                Tailwind CSS, Flutter, and Native Android.
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
