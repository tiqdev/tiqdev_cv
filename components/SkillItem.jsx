const SkillItem = ({ title, description, type, icon }) => {
  return (
    <div className="md:max-w-[520px] w-full border-[1px] border-solid border-badge bg-transparent flex flex-row space-x-[24px] items-start justisfy-start p-[32px] rounded-[24px] font-inter">
      <img
        src={`/assets/${icon}.svg`}
        alt="quote"
        className="w-[40px] h-[40px] "
      />
      <div className="flex flex-col items-start justify-start">
        <h3 className="text-[20px] font-[500] leading-[28px] -tracking-[0.01em] text-white">
          {title}
        </h3>
        <span className="text-[14px] text-grey font-normal leading-[20px] -tracking-[0.006em] mt-[8px]">
          {description}
        </span>
        <span className="text-[12px] font-[500] leading-[16px] tracking-[0.04em] mt-[12px] text-grey">
          {type}
        </span>
      </div>
    </div>
  );
};
export default SkillItem;
