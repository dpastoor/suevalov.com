module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "Suevalov Alexander | Senior Web Developer", // Site title.
  siteTitleAlt: "Suevalov Alexander | Senior Web Developer", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://suevalov.com", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "A GatsbyJS stater with Advanced design in mind.", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "", // GA tracking ID.
  disqusShortname: "", // Disqus shortname.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userName: "Alexander Suevalov", // Username to display in the author segment.
  userTwitter: "suevalov", // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: "Wroclaw, Poland", // User location to display in the author segment.
  userAvatar: "https://avatars3.githubusercontent.com/u/3672221", // User avatar to display in the author segment.
  userDescription: "Passionate about making complex things simple.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/suevalov",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/suevalov",
      iconClassName: "fa fa-twitter"
    },
    {
      label: "Email",
      url: "mailto:suevalov.work@gmail.com",
      iconClassName: "fa fa-envelope"
    }
  ],
  copyright: "Copyright © 2018. Alexander Suevalov",
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0" // Used for setting manifest background color.
};