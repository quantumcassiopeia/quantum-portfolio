module.exports = {
  siteUrl: "https://quantum-portfolio-alpha.vercel.app",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  exclude: [],
  additionalPaths: async () => {
    const slug = [
      "portifolio",
      "fitness",
      "education",
      "e-commerce",
      "wellness-spa",
    ];
    const staticPages = ["/", "/about-us", "/contact"];

    const staticPaths = staticPages.flatMap((path) => [
      { loc: `/en${path}`, changefreq: "weekly", priority: 0.7 },
      { loc: `/pt-BR${path}`, changefreq: "weekly", priority: 0.7 },
    ]);

    const dynamicPaths = slug.flatMap((slug) => [
      { loc: `/en/cases/${slug}`, changefreq: "weekly", priority: 0.7 },
      { loc: `/pt-BR/cases/${slug}`, changefreq: "weekly", priority: 0.7 },
    ]);

    return [...staticPaths, ...dynamicPaths];
  },
};
