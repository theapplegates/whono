---
title: Markdown Formatting Guide
description: Demonstrates every Markdown format effect the theme supports, including headings, lists, code, tables, quotes, and more.
date: 2026-01-15
badge: Example
tags: [ "Markdown", "Typography"]
draft: false
---

<cloudinary-picture
  src="assets/images/ScreenShot-ImageTest"
  alt="TODO: describe this image"
  width="3024"
  height="1964"
  sizes="(min-width: 768px) 720px, 100vw"
  breakpoints="50, 476, 730, 969, 1000"
  picture-class="responsive-picture"
/>

This article demonstrates every Markdown formatting effect supported by the theme.

First paragraph… (used for list preview)
<!-- more -->
Continued body…


## Text formatting

This is plain text. **This is bold**, *this is italic*, and ***this is bold italic***. You can also use ~~strikethrough~~ to mark deprecated content.

Inline code is wrapped in backticks: `const hello = 'world'` — handy for marking variable names or commands.

## Quotes

> The value of design does not end when something is built. Good design should stand the test of time, retaining its unique appeal and usefulness as the years go by.

You can also use multi-paragraph quotes:

> First paragraph of the quote.
>
> Second paragraph of the quote, showing the multi-paragraph effect.

Source attribution (`<cite>` placed on the last line inside the blockquote):

> The value of design does not end when something is built.
>
> <cite>— Dieter Rams</cite>

Pull quote (using the `blockquote.pullquote` variant):

<blockquote class="pullquote">
  You hated those people so much and fought them for so long, only to end up becoming just like them. No ideal in this world is worth such a degradation.
  <cite>— One Hundred Years of Solitude</cite>
</blockquote>

## Callouts

Four syntactic sugars are supported: `note / tip / info / warning`. Below is the minimal form first; for finer control you can also write the HTML directly.

~~~md
:::note[Title]
This is the body.
:::
~~~

To write the HTML directly (more precise control):

~~~html
<div class="callout note">
  <p class="callout-title" data-icon="none">Title</p>
  <p>This is the body.</p>
</div>
~~~

Notes:
- The default icon is determined by the type; no `<span class="callout-icon">` is needed.
- Hide the icon with `data-icon="none"`, placed on `.callout-title`.
- A custom icon can be set with `data-icon="✨"` (optional).

### Syntactic-sugar variants (Callout)

This set of examples mainly shows how different types, title forms, and content structures actually render on the front end.

:::note
This is a no-title example.
:::

:::note[With a title]
This is a normal body paragraph.
:::

:::tip[Tip]
Can contain inline code `npm run dev`, emphasized text, and [links](https://astro.build).
:::

:::info[Info]
```ts
const hello = 'world';
```
:::

:::warning[Warning]
> Can also contain a blockquote.
>
> Or switch to multi-paragraph content.
:::

The basic syntax is:

~~~text
:::type[optional title]
body content
:::
~~~

Only `note / tip / info / warning` are supported; unsupported types (such as `:::foo[...]`) currently fall back to `note`.

## Lists

### Unordered list

- First item
- Second item
  - Nested item A
  - Nested item B
- Third item

### Ordered list

1. Preparation
2. Install dependencies
3. Run the project
   1. Development mode
   2. Production build

### Task list

- [x] Finish the design mockup
- [x] Build the home page
- [ ] Write the docs
- [ ] Ship it

## Code blocks

The code blocks below are used to show the toolbar (language / line count / copy button) and line numbers (on by default).

### JavaScript

```javascript
// A simple Astro component example
const greeting = 'Hello, World!';

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10)); // 55
```

### Python

```python
def quick_sort(arr):
    """Quicksort implementation"""
    if len(arr) <= 1:
        return arr

    pivot = arr[len(arr) // 2]
    left = [x for x in arr if x < pivot]
    middle = [x for x in arr if x == pivot]
    right = [x for x in arr if x > pivot]

    return quick_sort(left) + middle + quick_sort(right)

# Usage example
numbers = [3, 6, 8, 10, 1, 2, 1]
print(quick_sort(numbers))
```

### CSS

```css
.card {
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
}
```

### Shell

```bash
# Install dependencies and start the dev server
npm install
npm run dev

# Build the production version
npm run build
```

## Tables

| Feature | Status | Notes |
|:----:|:----:|:----:|
| Responsive layout | ✅ | Perfectly adapts to mobile |
| Dark mode | 🚧 | In development |
| RSS feeds | ✅ | Supports multiple feeds |
| Internationalization | ❌ | Planned |

## Links and images

This is an [external link](https://astro.build) that opens in a new tab.

### Figure / Caption

**Case A: img + figcaption**

<figure class="figure">
  <img src="/images/archive/demo-archive-01.webp" alt="Caption example image 1" />
  <figcaption class="figure-caption">Caption example: the description text for this image.</figcaption>
</figure>

**Case B: no figcaption**

<figure class="figure">
  <img src="/images/archive/demo-archive-02.webp" alt="No-caption example" />
</figure>

**Case C: picture + figcaption (optional)**

<figure class="figure">
  <picture>
    <source srcset="/images/archive/demo-archive-03.webp" type="image/webp" />
    <img src="/images/archive/demo-archive-02.webp" alt="Caption example image 2" />
  </picture>
  <figcaption class="figure-caption">Caption example: description text for the picture.</figcaption>
</figure>

> Note: under the current styling, `img` and `picture` look the same. `picture` is mainly used to prepare several "fallback versions" of the same image, and the browser automatically picks the best fit (a small image for phones, a large one for desktops, or WebP/AVIF when preferred). When you do not need automatic version selection, `img` is enough.

### Gallery

**Example: two-image layout (with optional figcaption)**

<ul class="gallery">
  <li>
    <figure>
      <img src="/images/archive/demo-archive-01.webp" alt="Gallery example 1" />
      <figcaption>First image caption (optional)</figcaption>
    </figure>
  </li>
  <li>
    <figure>
      <img src="/images/archive/demo-archive-02.webp" alt="Gallery example 2" />
      <figcaption>Second image caption (optional)</figcaption>
    </figure>
  </li>
</ul>

## Horizontal rule

Above is some content.

---

Below is some other content.

## Math and special characters

Common math symbols: π ≈ 3.14159, e ≈ 2.71828

Special characters: © 2026 · ™ · ® · € · £ · ¥ · → · ← · ↑ · ↓

## English paragraph

> The best way to predict the future is to invent it. — Alan Kay

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

## Mixed formatting

This is a mixed paragraph containing **bold**, *italic*, `code`, and a [link](/). You can freely combine these elements within a single paragraph to create a rich reading experience.

---

That covers every Markdown format the theme supports. If you spot any rendering issues, feel free to open an Issue!
