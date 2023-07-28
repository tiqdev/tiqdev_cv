"use client";
import { useRef } from "react";
import PortfolioItem from "./PortfolioItem";
import SectionTitle from "./SectionTitle";
import { motion, useInView } from "framer-motion";
import TestimonialItem from "./TestimonialItem";

const TestimonialsContainer = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

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
        <div className="flex flex-row flex-wrap gap-[24px]">
          <TestimonialItem
            name={"Tarık Kaya"}
            role={"UX Designer • Aurora"}
            image={"me.webp"}
            text={
              "Wei Chen's design prowess is unmatched. His attention to detail and innovative approach have transformed our products into sleek, user-centric experiences."
            }
          />
          <TestimonialItem
            name={"Tarık Kaya"}
            role={"UX Designer • Aurora"}
            image={"me.webp"}
            text={
              "Wei Chen's design prowess is unmatched. His attention to detail and innovative approach have transformed our products into sleek, user-centric experiences."
            }
          />
          <TestimonialItem
            name={"Tarık Kaya"}
            role={"UX Designer • Aurora"}
            image={"me.webp"}
            text={
              "Wei Chen's design prowess is unmatched. His attention to detail and innovative approach have transformed our products into sleek, user-centric experiences."
            }
          />
          <TestimonialItem
            name={"Tarık Kaya"}
            role={"UX Designer • Aurora"}
            image={"me.webp"}
            text={
              "Wei Chen's design prowess is unmatched. His attention to detail and innovative approach have transformed our products into sleek, user-centric experiences."
            }
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsContainer;
