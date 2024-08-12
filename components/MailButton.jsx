import Link from "next/link";

const MailButton = ({ link }) => {
  return (
    <Link
      className="flex items-center justify-center rounded-[96px] py-[16px] px-[16px] bg-secondary hover:bg-secondary_hover group/button transition-all duration-500 ease-in-out"
      href={"mailto:" + link}
    >
      <span className="text-[28px] leading-[36px] text-black -tracking-[0.03em] font-[500] group-hover/button:text-[#D8D8D8] transition-all duration-500 ease-in-out">
        {link}
      </span>
    </Link>
  );
};

export default MailButton;
