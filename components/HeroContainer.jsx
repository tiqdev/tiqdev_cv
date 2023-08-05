"use client";

import { BsGithub, BsMedium } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import MailButton from "./MailButton";
import Link from "next/link";

const HeroContainer = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  return (
    <div ref={scrollRef} id="home">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex md:flex-row flex-col md:space-x-[16px] md:space-y-[0] space-y-[16px] max-w-[1200px] px-[32px] py-[16px] pb-[32px]"
      >
        <div className="flex-1 hero_card flex-col gap-[20px] group">
          <div className="flex flex-row items-start justify-between">
            <img
              className="w-[80px] h-[80px] overflow-hidden rounded-full bg-badge"
              src="/assets/me.png"
              alt="me"
            />

            <img
              className="w-[48px] h-[48px] group-hover:-translate-x-3 transition-all duration-500 ease-in-out mt-[3px]"
              src="/assets/arrow.svg"
              alt="arrow"
            />
          </div>
          <h2 className="hero_card_title text-left">
            A Portfolio Brimming with Innovation
          </h2>
          <span className="text-[16px] leading-[24px] font-normal -tracking-[0.011em] font-albert_sans text-left text-grey">
            Tarık Kaya • Frontend Developer
          </span>
        </div>

        <div className="flex-1 flex_col items-start justify-between space-y-[16px]">
          <div className="hero_card_row items-center gap-[16px] group/card1">
            <div className="flex flex-col flex-1 items-start justify-center">
              <h3 className="text-grey text-[28px] leading-[36px] -tracking-[0.03em] font-[500]">
                Title
              </h3>
              <span className="text-white text-[28px] leading-[36px] -tracking-[0.03em] font-[500]">
                Frontend Dev.
              </span>
            </div>
            <img
              src="/assets/sparkle.svg"
              alt="sparkle"
              className=" w-[48px] h-[48px] group-hover/card1:-translate-x-3 transition-all duration-500 ease-in-out mt-[3px] "
            />
          </div>

          <ul className="flex flex-row justify-between md:justify-start gap-[16px]">
            <li>
              <Link
                href={"https://github.com/tiqdev"}
                className="hero_card_button group hover:bg-[#000000]"
              >
                <BsGithub className="w-[32px] h-[32px] fill-hero_button_icon group-hover:fill-[#fff] transition-all duration-500 ease-in-out" />
              </Link>
            </li>

            <li>
              <Link
                href={""}
                className="hero_card_button group hover:bg-[#000000]"
              >
                <SiLinkedin className="w-[32px] h-[32px] fill-hero_button_icon group-hover:fill-[#fff] transition-all duration-500 ease-in-out" />
              </Link>
            </li>

            <li>
              <Link
                href={""}
                className="hero_card_button group hover:bg-[#000000]"
              >
                <svg
                  className="w-[36px] h-[36px] fill-hero_button_icon group-hover:fill-[#fff] transition-all duration-500 ease-in-out"
                  version="1.1"
                  id="svg5"
                  x="0px"
                  y="0px"
                  viewBox="0 0 1668.56 1221.19"
                >
                  <g id="layer1" transform="translate(52.390088,-25.058597)">
                    <path
                      id="path1009"
                      d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                    />
                  </g>
                </svg>
              </Link>
            </li>

            <li>
              <Link
                href={"https://medium.com/@tiqdev"}
                className="hero_card_button group hover:bg-[#000000]"
              >
                <BsMedium className="w-[32px] h-[32px] fill-hero_button_icon group-hover:fill-[#fff] transition-all duration-500 ease-in-out" />
              </Link>
            </li>
          </ul>

          <div className="hero_card_row items-center gap-[16px] group/card2">
            <div className="flex flex-col flex-1 items-start justify-center">
              <h3 className="text-grey text-[28px] leading-[36px] -tracking-[0.03em] font-[500]">
                Based In
              </h3>
              <span className="text-white text-[28px] leading-[36px] -tracking-[0.03em] font-[500]">
                Bursa, Turkey
              </span>
            </div>
            <img
              src="/assets/world.svg"
              alt="sparkle"
              className=" w-[48px] h-[48px] group-hover/card2:-translate-x-3 transition-all duration-500 ease-in-out mt-[3px] "
            />
          </div>
        </div>

        <div className="flex-1 hero_card flex-col px-[32px] py-[40px] items-center justify-start gap-[26px]">
          <img
            src="/assets/curved.svg"
            alt="sparkle"
            className="w-[56px] h-[56px]"
          />
          <h2 className="hero_card_title text-center">Wanna work together?</h2>
          <MailButton link={"info@tiqdev.com"} />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroContainer;
