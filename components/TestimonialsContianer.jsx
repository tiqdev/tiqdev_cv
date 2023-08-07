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
    <div ref={scrollRef} id="testimonials">
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
            name={"Jane Doe"}
            role={"Software Developer"}
            image={"person_1.png"}
            text={
              "Tarık is a highly motivated software developer with expertise in Next.js and PWA implementation. His contributions have been vital to our projects, and I highly recommend him for any software development team."
            }
          />
          <TestimonialItem
            name={"John Smith"}
            role={"Software Developer"}
            image={"person_2.png"}
            text={
              "Working with Tarık has been a pleasure; his proficiency in React.js, Flutter, and Native Android has resulted in outstanding applications."
            }
          />
          <TestimonialItem
            name={"Karl Johnson"}
            role={"Software Developer"}
            image={"person_3.png"}
            text={
              "Tarık's enthusiasm for software development is contagious, and his ability to create user-friendly web applications is impressive."
            }
          />
          <TestimonialItem
            name={"Sofia Ramsey"}
            role={"Software Developer"}
            image={"person_4.png"}
            text={
              "As a colleague, I've seen Tarık's commitment to excellence and his valuable knowledge in web3 and crypto technologies."
            }
          />
        </div>
      </motion.div>
    </div>
  );
};

export default TestimonialsContainer;
