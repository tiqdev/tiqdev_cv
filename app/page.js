import AboutContainer from "@/components/AboutContainer";
import CodePiecesContainer from "@/components/CodePiecesContainer";
import ContactContainer from "@/components/ContactContainer";
import Container from "@/components/Container";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import HeroContainer from "@/components/HeroContainer";
import PortfolioContainer from "@/components/PortfolioContainer";
import SkillsContainer from "@/components/SkillsContainer";
import TestimonialsContainer from "@/components/TestimonialsContianer";

import { openGraphImage } from "./shared-metadata";
import DynamicIsland from "@/components/DynamicIsland";

export const metadata = {
  title: "Tarık KAYA",
  description: "Tarık KAYA's personal website",
  url: "https://tiqdev.com",
  openGraph: {
    ...openGraphImage,
    title: "Tarık KAYA",
  },
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary relative">
      <Cursor />
      <DynamicIsland />
      <Container>
        <HeroContainer />
        <AboutContainer />
        <PortfolioContainer />
        <SkillsContainer />
        <TestimonialsContainer />
        <CodePiecesContainer />
        <Footer />
      </Container>
    </main>
  );
}
