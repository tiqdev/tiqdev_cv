import PortfolioItem from "./PortfolioItem";
import SectionTitle from "./SectionTitle";

const PortfolioContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1200px] space-y-[48px] md:px-[56px] px-[32px] py-[32px] pb-[48px]">
      <SectionTitle
        title="Product Design Showcase"
        subtitle="PORTFOLIO SECTION"
        icon="portfolio_icon"
      />

      <div className="flex flex-row flex-wrap gap-[24px]">
        <PortfolioItem
          title="Clashub NFT Game"
          role="Web3 Developer"
          link="#"
          image="p_1"
        />
        <PortfolioItem
          title="LollyLoop NFT Col."
          role="Frontend Developer"
          link="#"
          image="p_2"
        />
        <PortfolioItem
          title="Coibot"
          role="Mobile and Frontend Developer"
          link="#"
          image="p_3"
        />
        <PortfolioItem
          title="The Hatch Game"
          role="Frontend Developer"
          link="#"
          image="p_4"
        />
      </div>
    </div>
  );
};

export default PortfolioContainer;
