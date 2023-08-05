import Link from "next/link";

const CodePiecesItem = ({ code }) => {
  return (
    <Link
      key={code.id}
      href={code.link}
      className="md:max-w-[400px] min-w-[320px] w-full border-t-[1px] border-solid border-badge bg-badge flex md:flex-row flex-col-reverse  items-start justify-between p-[24px] rounded-[24px] md:gap-[20px] gap-[4px] font-inter hover:border-badge_hover transition-colors duration-500 cursor-pointer group relative overflow-hidden"
    >
      <div className="w-[100px] h-[100px] absolute  top-[-20px] right-[-20px] rounded-full bg-secondary blur-[80px] opacity-0 group-hover:opacity-100 group-hover:top-[20px] transition-all duration-500 group-focus:opacity-100"></div>
      <div className="flex flex-col space-y-[12px] md:max-w-[40%] max-w-full">
        <svg
          className="w-[24px] h-[24px] md:flex hidden fill-grey group-hover:fill-secondary transition-all duration-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
        >
          <g weight="regular">
            <path d="M197.58,129.06l-51.61-19-19-51.65a15.92,15.92,0,0,0-29.88,0L78.07,110l-51.65,19a15.92,15.92,0,0,0,0,29.88L78,178l19,51.62a15.92,15.92,0,0,0,29.88,0l19-51.61,51.65-19a15.92,15.92,0,0,0,0-29.88ZM140.39,163a15.87,15.87,0,0,0-9.43,9.43l-19,51.46L93,172.39A15.87,15.87,0,0,0,83.61,163h0L32.15,144l51.46-19A15.87,15.87,0,0,0,93,115.61l19-51.46,19,51.46a15.87,15.87,0,0,0,9.43,9.43l51.46,19ZM144,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H184V64a8,8,0,0,1-16,0V48H152A8,8,0,0,1,144,40ZM248,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,248,88Z" />
          </g>
        </svg>
        <h2 className="text-[20px] font-[500] text-white leading-[28px] -tracking-[0.02em]">
          {code.title}
        </h2>
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            src="/assets/star.svg"
            className="w-[24px] h-[24px] md:hidden flex"
          />
          <h3 className="text-[12px] font-[400] text-grey leading-[18px] -tracking-[0.02em]">
            {code.site}
          </h3>
        </div>
      </div>
      <img
        src={"/assets/" + code.image}
        className="md:w-[182px] md:h-[130px] w-full rounded-[12px] object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </Link>
  );
};

export default CodePiecesItem;
