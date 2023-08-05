"use client";
import { useRef } from "react";
import PortfolioItem from "./PortfolioItem";
import SectionTitle from "./SectionTitle";
import { motion, useInView } from "framer-motion";

const PortfolioContainer = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  return (
    <div ref={scrollRef} id="works">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center max-w-[1200px] space-y-[48px] md:px-[56px] px-[32px] py-[32px] pb-[48px]"
      >
        <SectionTitle
          title="Product Design Showcase"
          subtitle="PORTFOLIO SECTION"
          icon="portfolio_icon"
        />

        <div className="flex flex-row flex-wrap gap-[24px]">
          <PortfolioItem
            title="Clashub NFT Game"
            role="Web3 Developer"
            link="#"
            image="p_1"
          />
          <PortfolioItem
            title="LollyLoop NFT Col."
            role="Frontend Developer"
            link="#"
            image="p_2"
          />
          <PortfolioItem
            title="Coibot"
            role="Mobile and Frontend Developer"
            link="#"
            image="p_3"
          />
          <PortfolioItem
            title="The Hatch Game"
            role="Frontend Developer"
            link="#"
            image="p_4"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioContainer;
