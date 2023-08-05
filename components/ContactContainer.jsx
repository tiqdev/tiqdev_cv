import MailButton from "./MailButton";

const ContactContainer = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center justify-center bg-transparent ">
      <div className="flex md:flex-row flex-col items-center justify-between w-full h-min p-[40px] gap-[40px] border-[1px] border-solid border-badge rounded-t-[24px]">
        <img
          src="/assets/curved.svg"
          className="w-[56px] h-[56px] object-cover"
        />
        <h3 className="hero_card_title md:text-left text-center flex-1">
          Wanna work together?
        </h3>
        <MailButton link={"info@tiqdev.com"} />
      </div>
      <div className="bg-[#1a1a1a] p-[6px] w-full border-[1px] border-t-[0px] border-solid border-badge rounded-b-[24px] flex items-center justify-center">
        <span className="text-[12px] font-[500] text-grey uppercase text-center leading-[16px] tracking-[0.04em]">
          Promise you that I’ll reply back within 24 hours.
        </span>
      </div>
    </div>
  );
};

export default ContactContainer;
