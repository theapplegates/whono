// Force the URL here directly
const siteUrl = 'https://whono.paulapplegate.com'; 
const hasSiteUrl = true; 
const fallbackSiteUrl = 'https://whono.paulapplegate.com';
if (!hasSiteUrl && process.env.NODE_ENV === 'production') {
  console.warn(
    '[astro-whono] SITE_URL is not set. RSS will use example.invalid; canonical/og will be omitted; sitemap will not be generated and robots will not include Sitemap.'
  );
}

export const site = {
  url: 'https://whono.paulapplegate.com',
  title: 'Astro Themes by Whono',
  brandTitle: 'Whono',
  author: 'Whono',
  authorAvatar: 'author/avatar.webp',
  description: '一个 Astro 主题的展示站：轻量、可维护、可复用。'
};

export const PAGE_SIZE_ARCHIVE = 12;
export const PAGE_SIZE_ESSAY = 12;
export const PAGE_SIZE_BITS = 20;

export { hasSiteUrl, siteUrl };
