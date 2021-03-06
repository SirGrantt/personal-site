module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'The G Rant', // Navigation and Site Title
  titleAlt: 'Grant Elmer', // Title for JSONLD
  description:
    'Speaking, blogs and random tidbits of information on code and stuff.',
  url: '', // Domain of your site. No trailing slash!
  siteUrl: '', // url + pathPrefix
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'static/logo/logo.png', // Used for SEO
  banner: 'static/logo/banner.png',
  // JSONLD / Manifest
  favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
  shortName: 'SirGrantt', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Grant', // Author for schemaORGJSONLD
  themeColor: '#3e7bf2',
  backgroundColor: '#d3e0ff',
  twitter: '@sirgrantt', // Twitter Username
};
