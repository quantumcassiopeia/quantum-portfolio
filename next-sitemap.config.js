module.exports = {
  siteUrl: "https://qcsolutions.tech",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [],
  additionalPaths: async () => {
    const slug = [
      "portfolio",
      "fitness",
      "education",
      "e-commerce",
      "wellness-spa",
    ];
    const staticPages = ["/", "/about-us", "/contact"];

    const staticPaths = staticPages.flatMap((path) => [
      { loc: path, changefreq: "weekly", priority: 0.7 },
      { loc: `/pt-BR${path}`, changefreq: "weekly", priority: 0.7 },
    ]);

    const dynamicPaths = slug.flatMap((slug) => [
      { loc: `/cases/${slug}`, changefreq: "weekly", priority: 0.7 },
      { loc: `/pt-BR/cases/${slug}`, changefreq: "weekly", priority: 0.7 },
    ]);

    return [...staticPaths, ...dynamicPaths];
  },
};
