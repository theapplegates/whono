---
title: Admin Console Quick Guide
description: Introduces the entry points and per-page features of the astro-whono local Admin Console.
badge: Guide
date: 2026-04-24
tags: [ "Admin Console", "Guide" ]
draft: false
---


<cloudinary-picture
  src="assets/images/Gulfstream-G800"
  alt="TODO: describe this image"
  width="1672"
  height="941"
  devices="1200|40|original,992|60|16:9,768|70|4:3,0|100|1:1"
  breakpoints="50, 351, 530, 676, 812, 909, 1000"
  picture-class="responsive-picture"
/>

<cloudinary-picture
  src="assets/images/Luke_cowboy"
  alt="TODO: describe this image"
  width="1122"
  height="1402"
  sizes="(min-width: 768px) 720px, 100vw"
  breakpoints="50, 232, 349, 432, 551, 564, 667, 727, 736, 891, 918, 968, 985, 994, 1000"
  picture-class="responsive-picture"
/>



<cloudinary-picture
  src="assets/images/alim-unsplash"
  alt="TODO: describe this image"
  width="1672"
  height="941"
  devices="1200|40|original,992|60|16:9,768|70|4:3,0|100|1:1"
  breakpoints="50, 351, 530, 676, 812, 909, 1000"
  picture-class="responsive-picture"
/>


<cloudinary-picture
  src="assets/images/Luke"
  alt="TODO: describe this image"
  width="2048"
  height="1150"
  sizes="(min-width: 768px) 720px, 100vw"
  breakpoints="200, 657, 913, 978, 1400, 1649, 1861, 1959, 2000"
  picture-class="responsive-picture"
/>

<cloudinary-picture
  src="assets/images/ruben-mavarez-qqL1y15xQ9w-unsplash"
  alt="TODO: describe this image"
  width="2875"
  height="1906"
  sizes="(min-width: 768px) 720px, 100vw"
  breakpoints="50, 335, 651, 729, 816, 951, 993, 1000"
  picture-class="responsive-picture"
/>

Last test image.

<cloudinary-picture
  src="assets/images/mirjam-schuinder-5j8bf62-SmQ-unsplash"
  alt="TODO: describe this image"
  width="2592"
  height="3888"
  devices="1200|40|original,992|60|16:9,768|70|4:3,0|100|1:1"
  breakpoints="50, 245, 357, 452, 543, 608, 669, 727, 782, 822, 849, 948, 992, 995, 1000"
  picture-class="responsive-picture"
/>

<cloudinary-picture
  src="assets/images/alexander-mass-Y4VMzlU2OqQ-unsplash"
  alt="TODO: describe this image"
  width="4000"
  height="6000"
  sizes="(min-width: 768px) 720px, 100vw"
  breakpoints="50, 247, 417, 450, 570, 647, 740, 787, 850, 909, 965, 998, 999, 1000"
  picture-class="responsive-picture"
/>


<cloudinary-picture
  src="assets/images/Gulfstream-G800"
  alt="TODO: describe this image"
  width="1672"
  height="941"
  devices="1200|40|original,992|60|16:9,768|70|4:3,0|100|1:1"
  breakpoints="50, 351, 530, 676, 812, 909, 1000"
  picture-class="responsive-picture"
/>



The Admin Console at `/admin/` is the local back-office entry point, used to take over site configuration and content maintenance after forking, cloning, or self-hosting.

It is not a standalone CMS. Save operations write back to configuration or content files inside the repository, so it pairs well with Git: you can review diffs before and after changes, and roll back like any normal project file when needed.

:::note[Local tool]
The Admin Console only offers write access in the development environment.<br>
In production it keeps at most a read-only site overview page; `/api/admin/*` only serves the local back office and is not a public API.
:::

## Quick entry points

Start the project locally:

```bash
npm install
npm run dev
```

The dev server runs at `http://localhost:4321/` by default. If you changed the port, replace `4321` with your actual port.

| Entry | Page | Main use |
| :---: | :---: | :--- |
| `/admin/` | Site Overview | View site stats, content structure, recent posts, etc. |
| `/admin/theme/` | Theme Console | Edit site info, sidebar, home page, inner-page copy |
| `/admin/content/` | Content Console | Article management and visual writing |
| `/admin/images/` | Images Console | Browse image assets and copy usable paths |
| `/admin/checks/` | Checks Console | Review structured diagnostics and run pre-launch checks |
| `/admin/data/` | Data Console | Import and export theme settings for migration and backup |

## Main pages

### 📈 Site Overview

[Site Overview](/admin/) is the back-office home page, where you can view content counts, recent updates, and back-office entry points (entries are visible only in development).

This page can optionally be opened to visitors, controlled by the Admin Overview toggle inside the Theme Console.

### 🛠️ Theme Console

The Theme Console manages theme-level configuration, making it easy to adjust basic site settings after a fork or clone.

See the [Theme Console Configuration Guide](/archive/theme-console-guide/) for details.

### 📝 Content Console

The Content Console is the entry point for content management and visual writing, where you can centrally view and maintain the site's written content.

See the [Content Console Usage Guide](/archive/content-console-guide/) for details.

### 🖼️ Images Console

The Images Console lets you browse image assets, check image details, and copy paths that work in configuration or content fields.

It is currently positioned as a resource browser and does not yet support compression, deletion, or replacing files.
To swap an image, first place it in the project's agreed directory, then return to the relevant page to select or fill in the path.

### ✅ Checks Console

The Checks Console runs pre-launch checks, turning content, configuration, image-reference, and convention risks into diagnostic results.

This page does not modify files directly. When it surfaces an issue, go back to the Theme Console, Content Console, or source code to fix it.

### 📤 Data Console

The Data Console handles importing and exporting theme settings. Export is handy for migration or backup; import runs a pre-check first, then confirms the write.

It works on the theme configuration data managed by the Theme Console, not on article content.

---
Those are the main entry points and features of the Admin Console today. If you have further thoughts or suggestions, feel free to open an Issue.
