import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { openGraphImage } from "../shared-metadata";
import BookmarksList from "@/components/BookmarkList";

export const metadata = {
  title: "Tarık KAYA",
  description: "Tarık KAYA's personal website",
  url: "https://tiqdev.com",
  openGraph: {
    ...openGraphImage,
    title: "Tarık KAYA",
  },
};

export default function Bookmarks() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-transparent relative">
      <Container>
        <BookmarksList />
        <Footer />
      </Container>
    </main>
  );
}
