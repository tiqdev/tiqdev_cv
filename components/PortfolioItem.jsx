import Link from "next/link";

const PortfolioItem = ({ title, role, link, image }) => {
  return (
    <Link href={link} className="group">
      <div className="md:max-w-[520px] w-full border-t-[1px] border-solid border-badge bg-badge flex flex-col space-y-[24px] items-start justisfy-start p-[16px] pt-[0px] rounded-[24px] relative overflow-hidden">
        <div className="w-[100px] h-[100px] absolute  top-[-20px] right-[-20px] rounded-full bg-secondary blur-[80px] opacity-0 group-hover:opacity-100 group-hover:top-[20px] transition-all duration-500 group-focus:opacity-100 z-10"></div>
        <div className="flex flex-row w-full justify-between items-center px-[12px] relative z-20">
          <div className="flex flex-col">
            <h3 className="text-[24px] font-[500] leading-[32px] -tracking-[0.02em] text-white">
              {title}
            </h3>
            <h4 className="text-[16px] leading-[24px] -tracking-[0.011em] text-grey">
              {role}
            </h4>
          </div>

          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            className="w-[48px] h-[48px] md:flex hidden mr-[12px] group-hover:mr-[0px] transition-all duration-500"
            xmlns="http://www.w3.org/2000/svg"
            id="svg-1213721964_296"
          >
            <path
              d="M48 23.9999L0 23.9999M48 23.9999C36.2501 23.9999 26.4169 32.7923 23.9189 44.5713M48 23.9999C36.2501 23.9999 26.4169 15.2075 23.9189 3.42847"
              className="w-[48px] h-[48px] md:flex hidden
              stroke-grey group-hover:stroke-white transition-all duration-500"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <img
          src={"/assets/" + image + ".webp"}
          alt="project1"
          className="object-cover rounded-[12px] bg-grey relative z-20"
        />
      </div>
    </Link>
  );
};

export default PortfolioItem;
