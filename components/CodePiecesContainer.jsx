"use client";
import { useRef } from "react";
import SectionTitle from "./SectionTitle";
import { motion, useInView } from "framer-motion";
import CodePiecesItem from "./CodePiecesItem";

const CodePiecesContainer = () => {
  const scrollRef = useRef(null);

  const codePieces = [
    {
      id: 1,
      title: "Custom Cursor Effect",
      link: "https://codepen.io/tiqdev/full/BaqRbyq",
      image: "cp1.jpeg",
      site: "codepen.io",
    },
    {
      id: 2,
      title: "Colorful Grid Container",
      link: "https://codepen.io/tiqdev/full/jOeBrMb",
      image: "cp2.png",
      site: "codepen.io",
    },
    {
      id: 3,
      title: "Circular Text Scroll Effect",
      link: "https://codepen.io/tiqdev/full/OJBWqgL",
      image: "cp3.png",
      site: "codepen.io",
    },
    {
      id: 4,
      title: "Scroll To Explore",
      link: "https://codepen.io/tiqdev/full/gOBgZom",
      image: "cp2.png",
      site: "codepen.io",
    },
    {
      id: 5,
      title: "Interactive Menu",
      link: "https://codepen.io/tiqdev/full/ExeQvaQ",
      image: "cp5.jpeg",
      site: "codepen.io",
    },
    {
      id: 6,
      title: "Custom Cursor On Image",
      link: "https://codepen.io/tiqdev/full/PoyGqWr",
      image: "cp6.png",
      site: "codepen.io",
    },
    {
      id: 7,
      title: "Mouse Move Animation",
      link: "https://codepen.io/tiqdev/full/VwEvZZY",
      image: "cp7.png",
      site: "codepen.io",
    },
    {
      id: 8,
      title: "Infinite Scrolling Text",
      link: "https://codepen.io/tiqdev/full/QWZweMg",
      image: "cp8.png",
      site: "codepen.io",
    },
    {
      id: 9,
      title: "GSAP Char Animation",
      link: "https://codepen.io/tiqdesign/full/oNPvEEx",
      image: "cp9.jpeg",
      site: "codepen.io",
    },
  ];

  return (
    <div ref={scrollRef}>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center mx-auto space-y-[48px] md:px-[56px] px-[32px] py-[32px] pb-[48px]"
      >
        <SectionTitle
          title="Code Enchantments"
          subtitle="CODE PIECES SECTION"
          icon="code_icon"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[18px]">
          {codePieces.map((item) => {
            return <CodePiecesItem code={item} key={Math.random()} />;
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default CodePiecesContainer;
