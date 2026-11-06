import type { ArticleSharePlatformId } from './theme-settings';

type ArticleShareLinkId = Exclude<ArticleSharePlatformId, 'poster' | 'copy'>;

type ArticleShareLink = {
  id: ArticleShareLinkId;
  label: string;
  href: string;
};

// 用 encodeURIComponent 而非 URLSearchParams：后者把空格编码成 +，mailto 不会还原。
// poster 和 copy 不是链接，由页面渲染为按钮。
export const getArticleShareLinks = (
  url: string,
  title: string,
  platforms: readonly ArticleSharePlatformId[]
): ArticleShareLink[] => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const links: Record<ArticleShareLinkId, Omit<ArticleShareLink, 'id'>> = {
    x: {
      label: 'Share on X',
      href: `https://x.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`
    },
    facebook: {
      label: 'Share on Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
    },
    weibo: {
      label: 'Share on Weibo',
      href: `https://service.weibo.com/share/share.php?url=${encodedUrl}&title=${encodedTitle}`
    },
    telegram: {
      label: 'Share on Telegram',
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`
    },
    linkedin: {
      label: 'Share on LinkedIn',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`
    },
    email: {
      label: 'Share via email',
      href: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`
    }
  };

  return platforms.flatMap((id) => (id === 'poster' || id === 'copy' ? [] : [{ id, ...links[id] }]));
};
