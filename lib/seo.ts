// Falls back to the marketing domain until NEXT_PUBLIC_SITE_URL is set in
// production — set it to the real deployed domain so canonical/OG URLs,
// the sitemap and robots.txt all point at the right place.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://www.volotaoseguros.com.br").replace(
  /\/$/,
  ""
);
