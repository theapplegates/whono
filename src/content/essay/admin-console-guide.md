---
title: Admin Console Quick Guide
description: An introduction to the local Admin Console in astro-whono, its entry points, and what each page does.
badge: Guide
date: 2026-04-24
updatedAt: 2026-08-10
tags: [ "Admin Console", "Guide" ]
draft: false
---

Admin Console `/admin/` is the local Admin entry point, used to take over site configuration and content maintenance after forking, cloning, or self-hosting.

It is not a standalone CMS—save operations write back to configuration or content files in the repository—so it works well alongside Git: you can review diffs before and after changes, and revert using ordinary project file workflows.

:::note[Local tool]
Admin Console only provides write access in the development environment.<br>
In production, at most a read-only Site Overview page remains; `/api/admin/*` serves only the local Admin and is not a public API.
:::

## Quick access

Start the project locally:

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321/` by default. If you changed the port, replace `4321` with your actual port.

| Entry point | Page | Main purpose |
| :---: | :---: | :--- |
| `/admin/` | Site Overview | View site overview, content structure, recent articles, and more |
| `/admin/theme/` | Theme Console | Edit site information, sidebar, home page, and inner page copy |
| `/admin/content/` | Content Console | Article management and visual writing |
| `/admin/images/` | Images Console | Browse image assets and copy usable paths |
| `/admin/data/` | Data Console | Import and export theme settings for migration and backup |

## Main pages

### 📈 Site Overview

[Site Overview](/admin/) is the Admin home page, where you can view content counts, recent updates, Admin entry points, and more (entry points are only visible in the development environment).

This page can optionally be exposed to visitors, controlled by the Admin Overview toggle in the Theme Console page.

### 🛠️ Theme Console

Theme Console manages theme-level configuration, making it easy to adjust basic site settings after forking or cloning.

For details, see the [Theme Console Configuration Guide](/archive/theme-console-guide/).

### 📝 Content Console

Content Console is the entry point for content management and visual writing, where you can review and maintain the site's writing in one place.

For details, see the [Content Console Guide](/archive/content-console-guide/).

### 🖼️ Images Console

Images Console lets you browse local and cloud images, check image details, and copy paths or URLs for use in configuration or content fields.

For object storage configuration and how to verify the actual service, see the [Content Console Guide](/archive/content-console-guide/).
When replacing local images, first place the image in the project's conventional directory, then return to the relevant page to select or enter the path.

### 📤 Data Console

Data Console handles importing and exporting theme settings. Export is useful for migration or backup; import runs a preflight check first, then confirms before writing.

It works with the theme configuration data managed by Theme Console, not article content.

---

These are the main entry points and features of Admin Console. If you have more ideas or suggestions, feel free to submit an Issue.
