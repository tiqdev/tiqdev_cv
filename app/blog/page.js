import Container from "@/components/Container";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";
import { openGraphImage } from "../shared-metadata";

export const metadata = {
  title: "Tarık KAYA",
  description: "Tarık KAYA's personal website",
  url: "https://tiqdev.com",
  openGraph: {
    ...openGraphImage,
    title: "Tarık KAYA",
  },
};

export default function Blog() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-transparent relative">
      <Container>
        <BlogList />
        <Footer />
      </Container>
    </main>
  );
}
