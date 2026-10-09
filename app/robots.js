export default function robots() {
    return {
        rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
        sitemap: "https://aanganlive.in/sitemap.xml",
        host: "https://aanganlive.in",
    };
}