const SectionTitle = ({ title, subtitle, icon }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-[8px]">
      <img
        src={`/assets/${icon}.svg`}
        alt={icon}
        className="w-[56px] h-[56px]"
      />
      <h3 className="text-[14px] leading-[20px] font-[500] tracking-[0.06em] font-inter text-left text-grey">
        {subtitle}
      </h3>
      <h2 className="md:text-[48px] text-[36px] font-[500] leading-[56px] -tracking-[0.03em] font-inter text-center text-white">
        {title}
      </h2>
    </div>
  );
};

export default SectionTitle;
