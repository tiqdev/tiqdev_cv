import PortfolioItem from "./PortfolioItem";
import SectionTitle from "./SectionTitle";

const PortfolioContainer = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-[1200px] space-y-[48px] md:px-[56px] px-[20px] py-[32px] pb-[48px]">
      <SectionTitle
        title="Product Design Showcase"
        subtitle="PORTFOLIO SECTION"
        icon="portfolio_icon"
      />

      <div className="flex flex-row flex-wrap gap-[24px]">
        <PortfolioItem
          title="Project 1"
          role="UX/UI Designer"
          link="#"
          image="p1"
        />
        <PortfolioItem
          title="Project 2"
          role="UX/UI Designer"
          link="#"
          image="p2"
        />
        <PortfolioItem
          title="Project 3"
          role="UX/UI Designer"
          link="#"
          image="p3"
        />
        <PortfolioItem
          title="Project 4"
          role="UX/UI Designer"
          link="#"
          image="p4"
        />
      </div>
    </div>
  );
};

export default PortfolioContainer;
