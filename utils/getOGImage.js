// Verilen URL'den kaynak kodunu almak için XMLHttpRequest veya fetch kullanabilirsiniz.
// Bu örnekte, fetch yöntemini kullanacağız.
export function getURLContent(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.text();
    })
    .catch((error) => {
      console.error("Error fetching the URL:", error);
    });
}

// Görseli almak için kaynak kod içinde meta etiketlerini arayın.
export function getMetadataImage(htmlContent) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, "text/html");
  const metaTags = doc.querySelectorAll("meta");

  let imageUrl = null;

  // Meta etiketlerini dolaşın ve og:image veya twitter:image gibi uygun bir görsel URL'si varsa alın.
  metaTags.forEach((tag) => {
    const property = tag.getAttribute("property");
    if (property === "og:image" || property === "twitter:image") {
      imageUrl = tag.getAttribute("content");
    }
  });

  return imageUrl;
}

// Kullanım örneği
const url = "https://codepen.io/tiqdev/pen/BaqRbyq"; // İlgili URL'yi buraya girin
