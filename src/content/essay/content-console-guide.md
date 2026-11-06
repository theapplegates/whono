---
title: Content Console Guide
description: An overview of the local Content Console in astro-whono during development, covering content types, list search, image upload, edit preview, download, and delete.
badge: Guide
date: 2026-06-13
updatedAt: 2026-08-10
tags: [ "Content Console", "Guide" ]
draft: false
---

astro-whono provides a local Content Console for managing the site's writing content in the development environment.

Content Console is available at `/admin/content/`. It covers browsing, searching, editing, and previewing four content types—Essays, Bits, Memo, and About—and supports creating drafts, downloading source files, and deleting, making it easier to maintain content without writing frontmatter by hand.

:::note[Development environment]
`/admin/content/` and its editor pages can only be used in the development environment. When accessed in production, only a local development notice is shown, and content data and the editor are not loaded; `/api/admin/content/*` serves only the local Admin and is not a public API.
:::

## Local setup and entry point

For local development, start the project with the following commands:

```bash
npm install
npm run dev
```

By default, the development server runs at `http://localhost:4321/`. Once started, you can go directly to:

```text
http://localhost:4321/admin/content/
```

If you changed the development port locally, replace `4321` with the actual port.

Content Console reads source files under `src/content/**` directly and does not rely on a database. Creating, saving, and deleting all write to content files in the repository, while image upload storage is determined by local files or optional S3-compatible storage configuration.

## Image uploads and cloud storage

Admin Console's image uploads are saved locally by default, and S3-compatible object storage can also be configured in the development environment.

When enabled, body images for Essays / Memo and images for Bits are uploaded to the configured bucket, and the public `https://` address is written into the content. Existing local images are not migrated automatically. Images Console (`/admin/images/`) can browse and copy cloud URLs.

Maintainers can run `npm run smoke:cloud-images` to verify the actual service. By default, the command does not access the network; only when `ASTRO_WHONO_CLOUD_SMOKE=1` is explicitly set and separate test credentials are provided will it upload a test object, read the object list with pagination, and clean up the object at the end.

### R2, MinIO, or another custom endpoint

In the `.env.local` file at the project root, fill in:

```dotenv
ASTRO_WHONO_IMAGE_STORAGE=s3
ASTRO_WHONO_S3_ENDPOINT=https://your-s3-endpoint
ASTRO_WHONO_S3_REGION=auto
ASTRO_WHONO_S3_BUCKET=your-bucket
ASTRO_WHONO_S3_ACCESS_KEY_ID=your-access-key
ASTRO_WHONO_S3_SECRET_ACCESS_KEY=your-secret-key
ASTRO_WHONO_S3_PUBLIC_BASE_URL=https://your-cdn-domain
# Optional: ASTRO_WHONO_S3_PREFIX=blog
# Optional: ASTRO_WHONO_S3_FORCE_PATH_STYLE=true (defaults to true for custom endpoints)
# Optional: ASTRO_WHONO_S3_SESSION_TOKEN=temporary-session-token
```

`ASTRO_WHONO_S3_ENDPOINT` is the access address for the object storage service, and `ASTRO_WHONO_S3_PUBLIC_BASE_URL` is the public image address written into content; the two can differ. The public address must be a valid `https://` URL. Custom endpoints default to `region=auto` and path-style; if your service has specific requirements, you can explicitly set `ASTRO_WHONO_S3_FORCE_PATH_STYLE`.

### Native AWS S3

For native AWS S3, do not set `ASTRO_WHONO_S3_ENDPOINT`, and enter the bucket's actual region; `auto` cannot be used:

```dotenv
ASTRO_WHONO_IMAGE_STORAGE=s3
ASTRO_WHONO_S3_REGION=us-east-1
ASTRO_WHONO_S3_BUCKET=your-bucket
ASTRO_WHONO_S3_ACCESS_KEY_ID=your-access-key
ASTRO_WHONO_S3_SECRET_ACCESS_KEY=your-secret-key
ASTRO_WHONO_S3_PUBLIC_BASE_URL=https://your-cdn-domain
# Optional: ASTRO_WHONO_S3_PREFIX=blog
# Optional: ASTRO_WHONO_S3_SESSION_TOKEN=temporary-session-token
```

`.env.local` is ignored by Git by default; do not commit access keys, secret access keys, or session tokens to the repository.

## Content types and capabilities

Content Console manages four content types in one place, but their capabilities differ:

| Content | Directory | New | Edit | Delete | List filters |
| :--- | :--- | :---: | :---: | :---: | :---: |
| Essays | `src/content/essay/` | Supported | Supported | Supported | Supported |
| Bits | `src/content/bits/` | Supported | Supported | Supported | Supported |
| Memo | `src/content/memo/index.md` | — | Supported | — | — |
| About | `src/content/about/index.md` | — | Supported | — | — |

Essays and Bits are multi-entry content types: you can create drafts, edit and delete individual entries in the console, and the list offers filtering and pagination. Memo and About are fixed single pages; you can only edit the existing body and cannot create or delete them.

## Browsing, filtering, and search

When you open `/admin/content/`, the content overview is grouped by Essays, Bits, Memo, and About by default. The top toolbar provides the following:

- Search: find across content by title, tag, or slug
- Scope: switch between "All content" and a single content type
- Status: All statuses / Published / Drafts only
- Sort: Recently updated / Title A-Z
- Year: filter by content year

Status, sort, year filters, and pagination apply only to Essays and Bits; Memo and About are fixed single pages and do not expose these filters. In the list, drafts are marked `[draft]`, and Essays with archiving disabled are marked `[archive off]`.

Each entry provides an Edit button, as well as Edit details, View on site, Download, and Delete actions in the More menu.

## Creating and editing

### Essays

In the Essays group, click New article, fill in basic information such as the title, and a draft is created and you are taken to the editor.

The Essays editor provides:

- A CodeMirror-based body editor with multiple syntax highlighting themes and line number options
- Edit / Preview layout switching, with preview rendered server-side
- A frontmatter panel: publication date, update date, tags, draft, and archive fields
- Two auxiliary sidebars: table of contents and Markdown syntax
- Toolbar: common Markdown, math formulas, emoji, images, and galleries
- Body image upload: saved to the current content's attachment directory by default; with cloud storage enabled, images are written to the configured bucket and the returned `https://` address is inserted

### Bits

In the Bits group, click New update, choose a publication time, and a draft is created and you are taken to the editor.

The Bits editor is a standalone workspace where you can edit the body, basic information, and the image (`images`) rows. It supports image upload and provides a live card preview that matches the cards in the `/bits/` list.

### Memo and About

Memo and About are fixed single-page content; their editors only handle the body:

- Memo: edit the body of `src/content/memo/index.md`; supports inserting body images, page preview, and a body table of contents
- About: edit the body of `src/content/about/index.md`; friend links and FAQ in the preview render with the public page styles; the contact links position is controlled by the `::contact-links` placeholder

The main and subheadings for Memo and About are not maintained here; adjust them in Theme Console.

## Bulk actions

After selecting content in the list, you can use Bulk actions to:

- Publish / Move to draft: switch the `draft` status in bulk
- Download: package the source files of the selected content into a zip file for download
- Delete: delete the selected content in bulk, moving source files to the recycle bin (confirmation is required before deletion)

Bulk actions apply to the selected content in the current list; you can narrow the scope with filters or search first, then process in bulk.

## Download and delete

- Download: click Download source file in the entry's More menu to get the corresponding Markdown file
- Delete: delete from the entry's More menu; the source file is moved to the recycle bin rather than permanently erased, and confirmation is required before deletion

Download and delete operate on the source file itself. Deletion is supported only for Essays and Bits; Memo and About do not offer deletion.

## Content fields and writing conventions

Content Console shares the same field rules as editing `src/content/**` directly. This section lists the parts most commonly used in daily writing; for complete typography examples, see the [Markdown Typography Guide](https://astro.whono.me/archive/markdown-guide/).

### Essays

```yaml
title: My Post
date: 2026-01-01
draft: false
archive: true
# slug: my-post
# publishedAt: 2026-01-01T12:00:00+08:00
# updatedAt: 2026-01-02
```

`title` and `date` are required fields; fields such as `tags`, `description`, `cover`, and `badge` are optional. `date` can be `YYYY-MM-DD` or an ISO 8601 time with a timezone; add `publishedAt` only when you need to preserve a specific publication time, and `updatedAt` cannot be earlier than `date`. If `slug` is omitted, it is derived from the source file path (for example, `2024/my-post` becomes `2024-my-post`); custom values must use lowercase kebab-case. The final slug cannot be `page`, `tag`, or `rss.xml`, and must not duplicate another Essay.

Essays with `draft: true` are shown only in local development; production lists, RSS, and sitemap filter them out. `archive: false` only removes the article from the `/archive/` aggregation and archive RSS; the article remains accessible from `/essay/` and its detail route.

### Bits

```yaml
date: 2026-01-01T12:00:00+08:00
tags: [Reading]
images:
  - src: bits/demo-01.webp
    width: 800
    height: 600
    alt: Example image
# author:
#   name: Alice
#   avatar: author/alice.webp
```

`title`, `tags`, `images`, and `author` are all optional fields. `images[].src` can be a relative image path under `public/**` (omit `public/` when entering it, for example `bits/demo-01.webp`) or a remote `https://` address; local relative paths cannot use `http`, `..`, query strings, or fragments. A positive integer `width` / `height` reduces layout shift, and `alt` provides the image description. Avatars likewise use only relative paths under `public/**`, for example `author/avatar.webp`. The current `/bits/` does not generate detail pages, so `slug` is usually unnecessary.

### Memo and About

Memo and About are both fixed single pages: the Memo source file is `src/content/memo/index.md` and should not be marked as a draft; the About source file is `src/content/about/index.md`, and friend links, FAQ, and contact links in the body use the corresponding directives. The page title and subtitle for both are maintained in Theme Console.

### Images, excerpts, and body

- Body images for Essays / Memo are saved to the current content's attachment directory by default; local Bits images are saved to `public/bits/`. After cloud storage is enabled in Admin Console, newly uploaded images are written to the configured bucket and the `https://` address is written into the content; existing local images are not migrated automatically.
- List excerpts are generated by cleaning and truncating the body by default; you can use `<!-- more -->` to specify the truncation point. `description` is used only for the SEO and Open Graph meta description and does not change list excerpts.
- For syntax and examples of Callout, Figure, Gallery, formulas, code blocks, and more, see the [Markdown Typography Guide](https://astro.whono.me/archive/markdown-guide/).

New Essays and Bits are drafts by default; after saving, preview locally first, and publish only after confirming the content, images, and frontmatter.

---

## Final thoughts

:::info[Why build a local Admin]
Content Console is the most complex and time-consuming part of the entire Admin. Since you write locally and start a development server anyway, editing Markdown directly would also work—so some friends may wonder why build such an Admin at all?

- astro-whono's audience is not necessarily familiar with frontend development. Editing source files directly requires remembering frontmatter fields, directory structure, and writing conventions; the Admin consolidates these into forms and buttons, lowering the barrier to entry.
- When writing, you care more about the final typography. The editor includes server-side preview, so you can see the body, cards, and About page close to how they appear on the live site before saving, without switching back and forth to the browser to check.
- Common content formats (Callout, images, galleries, formulas, emoji, etc.) can be inserted directly from the toolbar, saving you from writing markup by hand and consulting the docs.
- Fixed single pages like Memo and About used to require editing source files; now you can edit the body in place in the Admin and preview it, which is more convenient.

Content Console is not meant to replace the command line or an editor; rather, it lets people without a coding background maintain their content comfortably. Of course, the best solution would be a true CMS, but that is a project of another magnitude and is not on the near-term roadmap.
:::

### 🔜 Current progress and future plans

The features originally envisioned for Content Console are now largely implemented. Future work on the Admin will focus mainly on maintenance and detail refinements, with no plans to keep adding new features for now. If you have suitable ideas or suggestions while using it, you are welcome to share them.

:::tip[Future plans]
Comments are on the roadmap, and the initial plan is to integrate Waline. Integration for Essays is relatively straightforward; Bits is a short-update page type, so the comment system's styles and adaptation for that kind of page still need to be redesigned. So while the comment module is already planned, a formal launch may take some time.
:::

---

The above covers the current content management entry points and common operations in Content Console. If you encounter content anomalies or saving issues, or have ideas and suggestions for features, feel free to submit an Issue.
