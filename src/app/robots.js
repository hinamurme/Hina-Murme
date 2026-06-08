export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://hina-murme.vercel.app/sitemap.xml",
  };
}