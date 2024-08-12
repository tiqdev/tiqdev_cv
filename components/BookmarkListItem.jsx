import Link from "next/link";

const BookmarkListItem = ({ bookmark }) => {
  return (
    <Link
      href={bookmark.url}
      target="_blank"
      className="md:max-w-[368px] bg-primary md:flex-1 w-full border-[1px] border-solid border-badge hover:bg-badge duration-300 transition-colors flex flex-col items-start justisfy-start p-[16px] gap-[12px] rounded-[24px] font-inter cursor-pointer"
    >
      <img
        src={
          bookmark["og:image"] !== ""
            ? bookmark["og:image"]
            : "/assets/cp9.jpeg"
        }
        alt={bookmark.title}
        className="w-full aspect-[1.5/1] object-cover rounded-[8px]"
      />
      <h3 className="text-[20px] font-[500] leading-[28px] -tracking-[0.01em] text-[#D8D8D8]">
        {bookmark.title.substring(0, 36) + "..."}
      </h3>

      <div className="flex flex-row items-center justify-center gap-[8px] mt-auto">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLineCap="round"
          strokeLinejoin="round"
          className="text-[#D8D8D8]"
        >
          <path d="M9 17H7A5 5 0 0 1 7 7h2"></path>
          <path d="M15 7h2a5 5 0 1 1 0 10h-2"></path>
          <line x1="8" x2="16" y1="12" y2="12"></line>
        </svg>

        <span className="text-[14px] text-badge font-normal leading-[20px] -tracking-[0.006em]">
          {bookmark["og:site_name"] || bookmark.title.substring(0, 36) + "..."}
        </span>
      </div>
    </Link>
  );
};
export default BookmarkListItem;
