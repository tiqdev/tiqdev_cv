// Örnek Next.js sayfası (pages/bookmark.js)
"use client";

import { useState } from "react";
import axios from "axios";

const Bookmark = () => {
  const [url, setUrl] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleFetch = async () => {
    try {
      const response = await axios.get(url);
      console.log("response:", response);
      const htmlContent = response.data;

      // Görseli almak için basit bir regex kullanabiliriz. Bu örnek sadece img etiketini bulmaya odaklanıyor.
      const imgRegex = /<img[^>]+src="([^">]+)"/g;
      const imgTags = htmlContent.match(imgRegex);

      if (imgTags && imgTags.length > 0) {
        const firstImageTag = imgTags[0];
        const imageUrlRegex = /src="([^">]+)"/;
        const imageUrlMatch = firstImageTag.match(imageUrlRegex);

        if (imageUrlMatch && imageUrlMatch[1]) {
          setImageUrl(imageUrlMatch[1]);
        } else {
          setImageUrl(""); // Görsel bulunamadıysa boş bir URL ayarlayabilirsiniz.
        }
      } else {
        setImageUrl(""); // Görsel bulunamadıysa boş bir URL ayarlayabilirsiniz.
      }
    } catch (error) {
      console.error("Hata:", error);
    }
  };

  return (
    <div>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={handleFetch}>İçeriği Çek</button>
      {imageUrl && <img src={imageUrl} alt="Alınan Görsel" />}
    </div>
  );
};

export default Bookmark;
