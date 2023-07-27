import SectionTitle from "./SectionTitle";

const PortfolioContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1200px] space-y-[48px] px-[56px] py-[32px] pb-[48px]">
      <SectionTitle
        title="Product Design Showcase"
        subtitle="PORTFOLIO SECTION"
        icon="portfolio_icon"
      />
    </div>
  );
};

export default PortfolioContainer;
