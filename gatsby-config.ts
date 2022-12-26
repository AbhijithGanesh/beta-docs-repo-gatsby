import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteTitle: `IEEE Computer Society VITC Docs`,
    siteUrl: `https://beta.ieeecsvitc.com`,
    icon: "/src/images/icon.png",
    image: "/src/images/banner-logo.png",
    icon_options: {
      purpose: "any maskable",
    },
    legacy: false,
    siteDescription:
      "This is your one-stop destination for learning everything you need to know about your favourite tech.",
  },
  graphqlTypegen: false,
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.svg",
        name: "IEEE Computer Society learning docs",
        start_url: `/`,
        theme_color: "#31CE9F",
        background_color: "#262626",
        description: `This is your one-stop destination for learning everything you need to know about your favourite tech.`,
        short_name: "Learning portal",
        lang: `en`,
        display: `standalone`,
        icon_options: {
          purpose: "any maskable",
        },
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `./src/content/`,
      },
    },
  ],
};

export default config;
