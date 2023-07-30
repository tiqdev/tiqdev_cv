"use client";
import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { motion, useInView } from "framer-motion";
import Bookmark from "./Bookmark";

const CodePiecesContainer = () => {
  const scrollRef = useRef(null);
  return (
    <div ref={scrollRef}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center max-w-[1200px] space-y-[48px] md:px-[56px] px-[32px] py-[32px] pb-[48px]"
      >
        <SectionTitle
          title="Voices of Satisfaction"
          subtitle="TESTIMONIALS SECTION"
          icon="testimonials_icon"
        />

        <Bookmark />
      </motion.div>
    </div>
  );
};

export default CodePiecesContainer;
