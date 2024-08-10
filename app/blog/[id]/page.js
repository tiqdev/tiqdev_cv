import fs from "fs";
import path from "path";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import { openGraphImage } from "../../shared-metadata";

// JSON dosyasının yolunu belirtiyoruz
const JSON_FILE_PATH = path.join(process.cwd(), "data", "blog.json");

// Gecikme fonksiyonu (eğer hala ihtiyaç varsa)
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function generateStaticParams() {
  // JSON dosyasını okuma işlemi
  let jsonData;
  try {
    jsonData = fs.readFileSync(JSON_FILE_PATH, "utf8");
  } catch (error) {
    console.error("JSON dosyası okunamadı:", error);
    return [];
  }

  // JSON verisini parse ediyoruz
  const data = JSON.parse(jsonData);

  // JSON verisinden postları alıyoruz
  const params = data.rss.channel.item.map((item) => {
    const id = item.guid.split("/").pop();
    return { id };
  });

  return params;
}

export async function generateMetadata({ params }) {
  let jsonData;
  try {
    jsonData = fs.readFileSync(JSON_FILE_PATH, "utf8");
  } catch (error) {
    console.error("JSON dosyası okunamadı:", error);
    return {
      title: "Blog Post",
      description: "A blog post description",
      openGraph: {
        images: ["/assets/og-default.png"],
      },
      author: "Tarık Kaya",
    };
  }

  const data = JSON.parse(jsonData);

  const post = data.rss.channel.item.find(
    (item) => item.guid.split("/").pop() === params.id
  );

  return {
    title: post ? post.title["__cdata"] : "Blog Post",
    description: post ? post.title["__cdata"] : "A blog post description",
    openGraph: {
      ...openGraphImage,
      title: post ? post.title["__cdata"] : "Blog Post",
    },
    author: "Tarık Kaya",
  };
}

export default async function BlogDetail({ params }) {
  const { id } = params;

  // JSON dosyasını okuma işlemi
  let jsonData;
  try {
    jsonData = fs.readFileSync(JSON_FILE_PATH, "utf8");
  } catch (error) {
    console.error("JSON dosyası okunamadı:", error);
    return <p>Blog yazısı yüklenirken bir hata oluştu.</p>;
  }

  // JSON verisini parse ediyoruz
  const data = JSON.parse(jsonData);

  // JSON verisinden postu buluyoruz
  const post = data.rss.channel.item.find(
    (item) => item.guid.split("/").pop() === id
  );

  if (!post) return <p>Loading...</p>;

  const content = post.encoded["__cdata"];

  return (
    <Container>
      <div className="flex flex-col items-start max-w-[680px] mx-auto justify-center w-full text-white mt-10">
        <h1 className="md:text-4xl text-2xl font-bold  md:mb-8 md:text-start text-center mb-4 px-4">
          {post.title["__cdata"]}
        </h1>
        <div
          className="blog_content max-w-[680px] w-full flex flex-col gap-6 px-4"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
      <Footer />
    </Container>
  );
}
