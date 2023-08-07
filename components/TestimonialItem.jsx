const TestimonialItem = ({ name, role, image, text }) => {
  return (
    <div className="md:max-w-[520px] w-full border-t-[1px] border-solid border-badge bg-badge flex flex-col space-y-[32px] items-start justify-between p-[32px] rounded-[24px] font-inter">
      <h2 className="text-[22px] font-[400] text-white leading-[28px] -tracking-[0.02em]">
        {text}
      </h2>
      <div className="flex flex-row items-start space-x-[16px]">
        <img
          src={`/assets/` + image}
          alt="quote"
          className="w-[48px] h-[48px] rounded-full bg-grey"
        />
        <div className="flex flex-col items-start justify-start space-y-[4px]">
          <h3 className="text-[16px] font-[500] leading-[24px] -tracking-[0.011em] text-white">
            {name}
          </h3>
          <span className="text-[14px] text-grey font-normal leading-[20px] -tracking-[0.006em]">
            {role}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialItem;
