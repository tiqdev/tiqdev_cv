const PortfolioItem = ({ title, role, link, image }) => {
  return (
    <div className="md:max-w-[520px] w-full border-t-[1px] border-solid border-badge bg-badge flex flex-col space-y-[24px] items-start justisfy-start p-[16px] pt-[24px] rounded-[24px]">
      <div className="flex flex-row w-full justify-between items-center px-[12px]">
        <div className="flex flex-col">
          <h3 className="text-[24px] font-[500] leading-[32px] -tracking-[0.02em] text-white">
            {title}
          </h3>
          <h4 className="text-[16px] leading-[24px] -tracking-[0.011em] text-grey">
            {role}
          </h4>
        </div>
        <img
          src="/assets/arrow.svg"
          alt="arrow"
          className="w-[48px] h-[48px] ml-[8px] mt-[4px]"
        />
      </div>

      <img
        src={"/assets/" + image + ".webp"}
        alt="project1"
        className="object-cover rounded-[12px]"
      />
    </div>
  );
};

export default PortfolioItem;
