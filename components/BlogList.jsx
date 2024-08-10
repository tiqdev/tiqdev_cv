import fs from "fs";
import path from "path";
import SectionTitle from "@/components/SectionTitle";
import Link from "next/link";

// JSON dosyasının yolunu belirtiyoruz
const JSON_FILE_PATH = path.join(process.cwd(), "data", "blog.json");

export default async function BlogList() {
  // JSON dosyasını okuma işlemi
  let jsonData;
  try {
    jsonData = fs.readFileSync(JSON_FILE_PATH, "utf8");
  } catch (error) {
    console.error("JSON dosyası okunamadı:", error);
    return <p>Blog verisi yüklenirken bir hata oluştu.</p>;
  }

  // JSON verisini parse ediyoruz
  const data = JSON.parse(jsonData);

  // JSON verisinden postları alıyoruz
  const posts = data.rss.channel.item.map((item) => {
    // HTML içeriğinden ilk <img> etiketini ve src'sini bulmak için RegEx kullanımı
    let thumbnail = "/assets/code_icon.svg"; // Varsayılan thumbnail
  
    if (item.encoded && item.encoded["__cdata"]) {
      const content = item.encoded["__cdata"];
      const imgTagMatch = content.match(/<img[^>]+src="([^">]+)"/);
      if (imgTagMatch && imgTagMatch[1]) {
        thumbnail = imgTagMatch[1];
      }
    }
  
    return {
      id: item.guid.split("/").pop(),
      title: item.title["__cdata"],
      link: item.link,
      pubDate: item.pubDate,
      thumbnail: thumbnail, // Belirlenen veya varsayılan thumbnail
      content: item.encoded, // İçerik özeti
    };
  });

  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-auto space-y-[48px] md:px-[56px] px-[32px] py-[32px] pb-[48px]">
        <SectionTitle
          title="Articles & Publications"
          subtitle="BLOG SECTION"
          icon="code_icon"
        />

        <div
          className={
            "grid gap-[16px]" +
            (posts.length > 2 ? " grid-cols-1 sm:grid-cols-2" : " grid-cols-1")
          }
        >
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="md:max-w-[368px] md:flex-1 w-full border-[1px] border-solid border-badge bg-transparent hover:bg-badge duration-300 transition-colors flex flex-col items-start justify-start p-[16px] gap-[12px] rounded-[24px] font-inter cursor-pointer"
            >
              <div className="w-full aspect-[1.5/1] object-cover rounded-[8px]">
                <div className="w-full h-full bg-secondary/20 rounded-md flex items-center justify-center">
                  <img
                    src={post.thumbnail}
                    alt={"Thumbnail for " + post.title}
                    className="w-full h-full object-cover rounded-[8px]"
                  />
                </div>
              </div>
              <h3 className="text-[20px] font-[500] leading-[28px] -tracking-[0.01em] text-white">
                {post.title}
              </h3>
              <div className="flex flex-row items-center justify-center gap-[8px] mt-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  focusable="false"
                  className="w-[20px] h-[20px] fill-grey"
                >
                  <g weight="regular">
                    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z" />
                  </g>
                </svg>
                <span className="text-[14px] text-badge font-normal leading-[20px] -tracking-[0.006em]">
                  {new Date(post.pubDate).toLocaleDateString()}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
