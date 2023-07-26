import Container from "@/components/Container";
import HeroContainer from "@/components/HeroContainer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary">
      <Container>
        <HeroContainer />
      </Container>
    </main>
  );
}
