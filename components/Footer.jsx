"use client";

import ContactContainer from "./ContactContainer";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Footer = () => {
  const scrollRef = useRef(null);
  const isInView = useInView(scrollRef);

  return (
    <footer>
      <div ref={scrollRef} id="home">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-[1200px] flex flex-col gap-[24px] md:px-[56px] px-[32px] py-[48px] pb-[32px]"
        >
          <ContactContainer />
          <span className="text-[12px] font-[500] text-badge uppercase text-center leading-[16px] tracking-[0.04em]">
            © 2023 tiqdev 💛. All rights reserved.
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
