import fs from "fs";
import path from "path";
import SectionTitle from "./SectionTitle";
import BookmarkListItem from "./BookmarkListItem";

const JSON_FILE_PATH = path.join(
  process.cwd(),
  "data",
  "bookmarksMetadata.json"
);

export default async function BookmarksList({}) {
  let jsonData;
  try {
    jsonData = fs.readFileSync(JSON_FILE_PATH, "utf8");
  } catch (error) {
    console.error("JSON dosyası okunamadı:", error);
    return <p>Blog verisi yüklenirken bir hata oluştu.</p>;
  }

  // JSON verisini parse ediyoruz
  const data = JSON.parse(jsonData);

  return (
    <div>
      <div className="flex flex-col items-center justify-center mx-auto space-y-[48px] md:px-[56px] px-[16px] py-[16px]">
        <SectionTitle
          title="Useful Links"
          subtitle="BOOKMARKS SECTION"
          icon="sparkle"
        />

        <div
          className={
            "grid gap-[16px]" +
            (data.length > 2
              ? " grid-cols-1 md:grid-cols-3 sm:grid-cols-2"
              : " grid-cols-1")
          }
        >
          {data.map((item) => (
            <BookmarkListItem bookmark={item.metadata.metadata} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
