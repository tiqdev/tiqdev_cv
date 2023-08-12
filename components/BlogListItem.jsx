import Link from "next/link";

const BlogListItem = ({ blog }) => {
  let date = new Date(blog.date).toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <Link
      href={"/blog/" + blog.slug}
      className="md:max-w-[368px] md:flex-1 w-full border-[1px] border-solid border-badge bg-transparent hover:bg-badge duration-300 transition-colors flex flex-col items-start justisfy-start p-[16px] gap-[12px] rounded-[24px] font-inter cursor-pointer"
    >
      <img
        src={"/assets/blog/" + blog.image}
        alt={blog.title}
        className="w-full aspect-[1.5/1] object-cover rounded-[8px]"
      />
      <h3 className="text-[20px] font-[500] leading-[28px] -tracking-[0.01em] text-white">
        {blog.title}
      </h3>
      <div className="flex flex-row items-center justify-center gap-[8px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          className="w-[20px] h-[20px] fill-grey"
        >
          <g weight="regular">
            <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
          </g>
        </svg>

        <span className="text-[14px] text-badge font-normal leading-[20px] -tracking-[0.006em]">
          {date}
        </span>
      </div>
    </Link>
  );
};
export default BlogListItem;
