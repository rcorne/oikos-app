// Extends app.json. When OIKOS_WEB_BASE is set (e.g. for GitHub Pages, where the
// app lives under /oikos-app/app/), it configures Expo Router's baseUrl so all
// asset and route paths resolve under that subpath.
//
//   OIKOS_WEB_BASE=/oikos-app/app npx expo export --platform web --output-dir docs/app
module.exports = ({ config }) => {
  if (process.env.OIKOS_WEB_BASE) {
    config.experiments = { ...config.experiments, baseUrl: process.env.OIKOS_WEB_BASE };
  }
  return config;
};
