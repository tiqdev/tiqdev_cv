import Container from "@/components/Container";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary relative">
      <Container>
        <BlogList />
        <Footer />
      </Container>
    </main>
  );
}
