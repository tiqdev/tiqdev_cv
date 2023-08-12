import BlogList from "@/components/BlogList";
import Container from "@/components/Container";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-primary relative">
      <Cursor />
      <Container>
        <BlogList />
        <Footer />
      </Container>
    </main>
  );
}
