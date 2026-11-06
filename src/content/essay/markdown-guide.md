---
title: Markdown Typography Guide
description: Showcases all Markdown formatting effects, including headings, lists, code, tables, quotes, and more
date: 2026-01-15
updatedAt: 2026-11-05
badge: Example
tags: [ "Markdown", "Typography" ]
draft: false
---

This article demonstrates all the Markdown formatting effects supported by this theme.

First paragraph… (used for list preview)
<!-- more -->
Subsequent body text…

## Text formatting

This is a paragraph of regular text. **This is bold text**, *this is italic text*, and ***this is bold italic***. You can also use ~~strikethrough~~ to mark deprecated content.

Inline code is wrapped in backticks: `const hello = 'world'`, which is great for marking variable names or commands.

## Blockquotes

> The value of design goes beyond completion. Good design should stand the test of time, retaining its unique charm and practicality as the years pass.

You can also use multi-paragraph quotes:

> First paragraph of the quote.
>
> Second paragraph of the quote, demonstrating the multi-paragraph effect.

Source attribution (`<cite>` on the last line inside a blockquote):

> The value of design goes beyond completion.
>
> <cite>— Dieter Rams</cite>

Pullquote (using the `blockquote.pullquote` variant):

<blockquote class="pullquote">
  You hated those people so much and fought them for so long, and in the end you became just like them. There is no ideal in this world worth such degradation.
  <cite>— One Hundred Years of Solitude</cite>
</blockquote>

## Callouts

Supports four syntax sugar types: `note / tip / info / warning`. Below is a minimal example; if you need finer control, you can also write HTML directly.

~~~md
:::note[Title]
This is the body text.
:::
~~~

To write HTML directly (for more precise control):

~~~html
<div class="callout note">
  <p class="callout-title" data-icon="none">Title</p>
  <p>This is the body text.</p>
</div>
~~~

Notes:
- The default icon is determined by type; `<span class="callout-icon">` is not needed.
- Hide the icon with `data-icon="none"` on `.callout-title`.
- Custom icons can use `data-icon="✨"` (optional).

### Syntax sugar variant examples (Callout)

This set of examples mainly shows how different types, title formats, and content structures actually look on the front end.

:::note
This is an example without a title.
:::

:::note[With title]
This is a regular paragraph.
:::

:::tip[Tip]
Can include inline code `npm run dev`, emphasized text, and a [link](https://astro.build).
:::

:::info[Info]
```ts
const hello = 'world';
```
:::

:::warning[Warning]
> Can also include blockquotes.
>
> Or switch to multiple paragraphs.
:::

The basic syntax is as follows:

~~~text
:::type[Optional title]
Body content
:::
~~~

Callouts support only `note / tip / info / warning`; `details` and `spoiler` serve other purposes (see the next section), and other unsupported types (such as `:::foo[...]`) fall back to `note`.

## Highlight, spoiler, and collapse

Use `==text==` to mark key points: this is ==a sentence readers should pay attention to==.

Use `:spoiler[text]` to hide spoilers, revealed on click: the story's ending is that :spoiler[he was always waiting right there]. Entire paragraphs can use the block form:

:::spoiler
This entire paragraph is blurred until clicked, suitable for hiding answers, easter eggs, or plot twists.
:::

Use `:::details[title]` to collapse secondary content that readers can expand when needed:

:::details[When is collapsed content appropriate?]
FAQs, supplementary notes, or longer examples can all be tucked away to make the body easier to read.
:::

:::details[Collapsed content expanded by default]{open}
Add `{open}` after the title, and it will be expanded when the page opens.
:::

Syntax summary:

~~~md
==Highlighted text==

:spoiler[Inline spoiler]

:::spoiler
Entire paragraph blurred
:::

:::details[Title]{open}
Collapsed content
:::
~~~

Notes:
- Spoilers are only for avoiding spoilers; the original text is still visible in the page source, so do not use them for sensitive information such as passwords. Spoiler content does not appear in article excerpts or search results.
- When `==` is directly adjacent to English letters or digits (such as `a==b`), it will not become a highlight; put code in backticks.
- Bits cards support highlights and spoilers; Bits longer than 180 characters show only a plain-text excerpt, highlights are not displayed, and spoiler content is shown as "[Hidden content]".

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

- [x] Complete the design draft
- [x] Develop the home page
- [ ] Write documentation
- [ ] Launch

## Code blocks

The following code blocks demonstrate the toolbar (language / line count / copy button) and line numbers (enabled by default).

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
# Install dependencies and start the development server
npm install
npm run dev

# Build the production version
npm run build
```

## Tables

| Feature | Status | Notes |
|:----:|:----:|:----:|
| Responsive layout | ✅ | Fully adapted for mobile |
| Dark mode | 🚧 | In development |
| RSS subscription | ✅ | Supports multiple feeds |
| Internationalization | ❌ | Planned |

## Links and images

This is an [external link](https://astro.build); it opens in a new tab.

### Figure / Caption

**Case A: img + figcaption**

<figure class="figure">
  <img src="/images/archive/demo-archive-01.webp" alt="Figure caption example image 1" />
  <figcaption class="figure-caption">Figure caption example: this is the image's descriptive text.</figcaption>
</figure>

**Case B: no figcaption**

<figure class="figure">
  <img src="/images/archive/demo-archive-02.webp" alt="No caption example" />
</figure>

**Case C: picture + figcaption (optional)**

<figure class="figure">
  <picture>
    <source srcset="/images/archive/demo-archive-03.webp" type="image/webp" />
    <img src="/images/archive/demo-archive-02.webp" alt="Figure caption example image 2" />
  </picture>
  <figcaption class="figure-caption">Figure caption example: descriptive text for picture.</figcaption>
</figure>

> Note: under the current styles, `img` and `picture` look identical. `picture` is mainly used to prepare multiple "alternate versions" of the same image, and the browser automatically picks the most suitable one (for example, a small image on phones and a large image on desktop, or preferring WebP/AVIF). When you do not need automatic version selection, just use `img`.

### Gallery

**Case: two-image layout (with optional figcaption)**

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

Some content above.

---

Some other content below.

## Math and special characters

Common mathematical symbols: π ≈ 3.14159, e ≈ 2.71828

Special characters: © 2026 · ™ · ® · € · £ · ¥ · → · ← · ↑ · ↓

## English paragraphs

> The best way to predict the future is to invent it. — Alan Kay

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

## Mixed formatting

This is a mixed-formatting paragraph containing **bold**, *italic*, `code`, and a [link](/). You can freely combine these elements within a paragraph to create a richer reading experience.

---

That covers all the Markdown formats supported by this theme. If you find any rendering issues, feel free to submit an Issue!
