import AboutContainer from "@/components/AboutContainer";
import Container from "@/components/Container";
import HeroContainer from "@/components/HeroContainer";
import PortfolioContainer from "@/components/PortfolioContainer";
import SkillsContainer from "@/components/SkillsContainer";
import TestimonialsContainer from "@/components/TestimonialsContianer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary">
      <Container>
        <HeroContainer />
        <AboutContainer />
        <PortfolioContainer />
        <TestimonialsContainer />
        <SkillsContainer />
      </Container>
    </main>
  );
}
