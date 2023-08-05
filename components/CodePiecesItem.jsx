import Link from "next/link";

const CodePiecesItem = ({ code }) => {
  return (
    <Link
      key={code.id}
      href={code.link}
      className="md:max-w-[400px] min-w-[320px] w-full border-t-[1px] border-solid border-badge bg-badge flex md:flex-row flex-col-reverse  items-start justify-between p-[24px] rounded-[24px]  gap-[20px] font-inter hover:bg-badge_hover hover:border-badge_hover transition-colors duration-500 cursor-pointer group"
    >
      <div className="flex flex-col space-y-[12px] md:max-w-[40%] max-w-full">
        <img
          src="/assets/star.svg"
          className="w-[24px] h-[24px] md:flex hidden"
        />
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
