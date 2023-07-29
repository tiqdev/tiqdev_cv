"use client";
import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { motion, useInView } from "framer-motion";
import SkillItem from "./SkillItem";

const SkillsContainer = () => {
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
          title="Skills & Expertise"
          subtitle="SKILLS SECTION"
          icon="skills_icon"
        />

        <div className="flex flex-row flex-wrap gap-[24px]">
          <SkillItem
            title={"Web Development"}
            description={
              "I have experience building websites and chrome extensions using JavaScript, React, HTML, CSS, and more."
            }
            type={"Frontend"}
            icon={"s1"}
          />
          <SkillItem
            title={"Web Development"}
            description={
              "I have experience building websites and chrome extensions using JavaScript, React, HTML, CSS, and more."
            }
            type={"Frontend"}
            icon={"s2"}
          />
          <SkillItem
            title={"Web Development"}
            description={
              "I have experience building websites and chrome extensions using JavaScript, React, HTML, CSS, and more."
            }
            type={"Frontend"}
            icon={"s3"}
          />
          <SkillItem
            title={"Web Development"}
            description={
              "I have experience building websites and chrome extensions using JavaScript, React, HTML, CSS, and more."
            }
            type={"Frontend"}
            icon={"s4"}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default SkillsContainer;
