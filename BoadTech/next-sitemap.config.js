/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://boadtechnologies.com",
  generateRobotsTxt: true, // (optional)
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/"],
      },
    ],
  },
  exclude: ["/server-sitemap.xml", "/admin/*", "/api/*"],
  generateIndexSitemap: true,
  outDir: "out",
};
