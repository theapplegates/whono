---
title: Content Console Usage Guide
description: Covers the content types, list search, edit preview, and download/delete capabilities of the astro-whono local Content Console in the development environment.
badge: Guide
date: 2026-06-13
tags: [ "Content Console", "Guide" ]
draft: false
---

astro-whono ships a local Content Console for managing the site's written content during development.

The Content Console entry point is `/admin/content/`. It covers browsing, searching, editing, and previewing four content types — essays, bits, memo, and about — and supports creating drafts, downloading source files, and deleting, so you can maintain content without hand-writing frontmatter.

:::note[Development only]
`/admin/content/` and its editor pages are only operable in the development environment. In production they show a local-dev notice and load no content data or editor; `/api/admin/content/*` only serves the local back office and is not a public API.
:::

## Local startup and entry point

Start the project locally with:

```bash
npm install
npm run dev
```

By default the dev server runs at `http://localhost:4321/`. Once it is up, open:

```text
http://localhost:4321/admin/content/
```

If you changed the dev port, replace `4321` with your actual port.

The Content Console reads source files directly from `src/content/**` and depends on no database or external service. Creating, saving, and deleting all land in content files inside the repository, so changes can be tracked and reverted through Git.

## Content types and capabilities

The Content Console manages four content types in one place, but their capabilities differ:

| Content | Directory | Create | Edit | Delete | List filtering |
| :--- | :--- | :---: | :---: | :---: | :---: |
| Essay | `src/content/essay/` | Yes | Yes | Yes | Yes |
| Bits | `src/content/bits/` | Yes | Yes | Yes | Yes |
| Memo | `src/content/memo/index.md` | — | Yes | — | — |
| About | `src/content/about/index.md` | — | Yes | — | — |

Essays and bits are multi-entry: you can create drafts, edit and delete entry by entry, and the list offers filtering and pagination. Memo and about are fixed single-page content; you can only edit the existing body, with no create or delete.

## Browse, filter, and search

Opening `/admin/content/` shows a grouped overview by essay, bits, memo, and about by default. The top toolbar provides:

- Search: find across content by title, tag, or slug
- Scope: switch between "All content" and a single type
- Status: all statuses / published / drafts only
- Sort: recently updated / title A-Z
- Year: filter by content year

Status, sort, year filtering, and pagination only apply to essays and bits; memo and about are fixed single pages and do not expose these filters. In the list, drafts are marked `[draft]`, and essays with archiving turned off are marked `[archive off]`.

Each item has an "Edit" button, plus a "More" menu with modification info, front-end view, download, and delete actions.

## Create and edit

### Essay

In the essay group, click "New article", fill in the title and other basics, and a draft is generated and you are taken to the editor.

The essay editor provides:

- A CodeMirror-based body editor with multiple syntax-highlight themes and line-number options
- Edit / preview layout switching, with server-rendered preview
- A frontmatter panel: publish date, update date, tags, draft, archive, and other fields
- Two helper sidebars: table of contents and Markdown syntax reference
- A toolbar: common Markdown, math, emoji, images, and gallery
- Body image upload: uploaded images are saved to the current content's attachment directory and inserted as Markdown

### Bits

In the bits group, click "New post", pick a publish time, and a draft is generated and you are taken to the editor.

The bits editor is a standalone workbench where you can edit the body, basic info, and image (`images`) rows, with image upload and a live card preview that matches what appears on the `/bits/` list.

### Memo and about

Memo and about are fixed single-page content; the editor only handles the body:

- Memo: edit the body of `src/content/memo/index.md`, with body image insertion, page preview, and a body table of contents
- About: edit the body of `src/content/about/index.md`; friend links and FAQ in the preview render with the public-page styling, and the contact-links slot is controlled by a `::contact-links` placeholder

The main and sub titles for memo and about are not maintained here; adjust them in the Theme Console.

## Bulk actions

After checking items in the list, use "Bulk actions" to:

- Publish / set as draft: toggle the `draft` state in bulk
- Download: package the selected items' source files into a zip download
- Delete: delete the selected items in bulk; source files are moved to trash (with confirmation before deleting)

Bulk actions apply to the currently checked items in the list; narrow the scope with filters or search first, then process in bulk.

## Download and delete

- Download: in an item's "More" menu, click "Download source file" to get the corresponding Markdown file
- Delete: in an item's "More" menu, deleting moves the source file to trash rather than erasing it outright; confirmation is required first

Download and delete act on the source files themselves. Delete is only supported for essays and bits; memo and about do not offer delete.

## Content fields and writing conventions

The Content Console handles entering and maintaining content. The specific frontmatter fields, image path rules, and body writing conventions (Callout, Figure, Gallery, math, etc.) still follow the "Content and writing" section of the repo README, so they are not repeated here.

**Newly created content is a draft by default.** Drafts for essays and bits are visible in local development and automatically filtered out of production builds, RSS, and public lists; memo is a single page and should not be marked as a draft.

---

## A closing note

:::info[Why build a local back office]
The Content Console is the most complex, most time-consuming part of the entire back office. Since you are already writing locally and have to start a dev server anyway, editing Markdown directly gets the job done — so you might wonder why this back office exists at all.

- astro-whono targets users who are not necessarily familiar with frontend work. Editing source files directly means remembering frontmatter fields, directory structure, and writing conventions; the back office folds those into forms and buttons to lower the barrier to entry.
- When writing, you care most about the final layout. The editor has built-in server-side preview, so the body, cards, and about page can be seen close to the front-end result before saving, without flipping back to the browser to check.
- Common content formats (Callout, images, gallery, math, emoji, etc.) can be inserted straight from the toolbar, saving you from hand-writing markup and looking up docs.
- Fixed single pages like memo and about used to be editable only via source files; now you can edit the body in place in the back office with preview, which is more convenient.

The Content Console is not meant to replace the command line or your editor; it is meant to let people without a code background comfortably maintain their own content. The best solution would of course be a real CMS, but that is an order of magnitude more work and is not in the near-term plan.
:::

### 🔜 Current progress and next steps

The originally envisioned features of the Content Console are mostly implemented now, and the Admin back office will continue mainly as maintenance and detail polish, with no plan to stack on new features for the time being. If you have suitable ideas or suggestions while using it, they are welcome.

:::tip[Next steps]
Comments are on the roadmap, currently leaning toward Waline. Wiring it into essays is fairly straightforward; bits are short-post-style pages, so the comment system's styling and adaptation for that kind of page still needs to be designed. So although the comment module is on the plan, an official launch may still take some time.
:::

---

That covers the content-management entry points and common operations for the Content Console today. If you run into content issues, save problems, or have thoughts and suggestions on features, feel free to open an Issue.
