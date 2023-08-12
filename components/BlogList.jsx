"use client";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useRef } from "react";
import Link from "next/link";
import BlogListItem from "./BlogListItem";

const BlogList = () => {
  const scrollRef = useRef(null);

  const bloglist = [
    {
      title: "How to use React Context API",
      image: "cp2.png",
      slug: "how-to-use-react-context-api",
      date: "2021-09-01",
    },
    {
      title: "How to use React Context API",
      image: "cp2.png",
      slug: "how-to-use-react-context-api",
      date: "2021-09-01",
    },
    {
      title: "How to use React Context API",
      image: "cp2.png",
      slug: "how-to-use-react-context-api",
      date: "2021-09-01",
    },
  ];

  console.log(bloglist.length % 2);

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
          title="Articles & Publications"
          subtitle="BLOG SECTION"
          icon="code_icon"
        />

        <div
          className={
            "grid gap-[16px]" +
            (bloglist.length > 2
              ? " grid-cols-1 sm:grid-cols-2"
              : " grid-cols-1")
          }
        >
          {bloglist.map((blog, index) => (
            <BlogListItem key={index} blog={blog} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default BlogList;
