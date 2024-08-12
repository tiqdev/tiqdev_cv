const urlMetadata = require("url-metadata");

async function fetchMetadata(urls) {
  const metadataList = [];

  for (const url of urls) {
    try {
      const metadata = await urlMetadata(url);
      metadataList.push({ url, metadata });
    } catch (error) {
      console.error(`Error fetching metadata for ${url}:`, error);
      metadataList.push({ url, error: "Failed to fetch metadata" });
    }
  }

  return metadataList;
}

async function generateJsonFromMetadata(bookmarks) {
  const metadataList = await fetchMetadata(bookmarks);

  // Return params for each bookmark to generate static pages
  const params = metadataList.map((metadata, index) => ({
    id: index.toString(), // or use a more meaningful id
    metadata,
  }));

  // Define the path to the JSON file
  const filePath = path.join(process.cwd(), "data", "bookmarksMetadata.json");

  // Write the params array to a JSON file
  fs.writeFileSync(filePath, JSON.stringify(params, null, 2), "utf8");

  console.log("JSON file has been written to:", filePath);
}

module.exports = {
  fetchMetadata,
  generateJsonFromMetadata,
};
