# Using Markdown

This is a super trimmed down ✂️copy/🍝pasta version of [vuepress - markdown extensions](https://vuepress.vuejs.org/guide/markdown.html#header-anchors).

## Elementary
``` md
## Heading 2
Paragraphs **bold** _italic_
### Unordered List
* house
  * Cat
  * Dog
* Monkey
* Fox
#### Ordered List
1. Last
    1. least
1. First
    1. Most

horizontal rule
---
##### Heading 5
> Blockquotes
```
⬇️
## Heading 2
Paragraphs **bold** _italic_
### Unordered List
* house
  * Cat
  * Dog
* Monkey
* Fox
#### Ordered List
1. Last
    1. least
1. First
    1. Most

horizontal rule
---
##### Heading 5
> Blockquotes


## Internal Links
``` md
[Home](/) <!-- Sends the user to the root README.md -->
[foo](/foo/) <!-- Sends the user to index.html of directory foo -->
[foo heading anchor](/foo/#heading) <!-- Anchors user to a heading in the foo README file -->
[foo - one](/foo/one.html) <!-- You can append .html -->
[foo - two](/foo/two.md) <!-- Or you can append .md -->
```
⬇️
* [Home](/)

### External Links
Outbound links automatically gets `target="_blank" rel="noopener noreferrer"`:
``` md
[name](/link)
```
⬇️
* [bing](https://www.bing.com)
* [This repo](https://github.com/vuejs/vuepress)

### Images
```md
#### Internal Image
![alt text]( /hero.png "Hero Image")

#### External Image
![alt text]( https://78.media.tumblr.com/8930b9b020b7588bb9f5c3ebaa32b315/tumblr_okmuuwcvMt1qdku5lo1_500.gif "Soot")
```
⬇️ <br/>
#### Internal Image
![alt text]( /hero.png "Hero Image")

#### External Image
![alt text]( https://78.media.tumblr.com/8930b9b020b7588bb9f5c3ebaa32b315/tumblr_okmuuwcvMt1qdku5lo1_500.gif "Soot")


## GitHub-Style Tables

``` md
| name  | role   | phrase    | spirit-animal | hp  |
| ----- | ------ | --------- |:-------------:| --- |
| John  | Wizard | "Yeah"    |      Cat      | 200 |
| Sally | Knight | "Woot"    |    Dragon     | 700 |
| Carl  | Rogue  | "Tsk Tsk" |  Caterpillar  | 150 |
| Maria | Healer | "Meh"     |     Tiger     | 400 |

```
⬇️
| name  | role   | phrase    | spirit-animal | hp  |
| ----- | ------ | --------- |:-------------:| --- |
| John  | Wizard | "Yeah"    |      Cat      | 200 |
| Sally | Knight | "Woot"    |    Dragon     | 700 |
| Carl  | Rogue  | "Tsk Tsk" |  Caterpillar  | 150 |
| Maria | Healer | "Meh"     |     Tiger     | 400 |

## Emoji

``` md
:tada:
:heart:
```
⬇️ <br/>
:tada:
:heart:

## Table of Contents
``` md
[[toc]]
```
⬇️
[[toc]]


## Custom Containers

``` md
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```
⬇️
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::

## Line Highlight Codeblocks

```
js{4}
export default {
  data () {
    return {
      msg: 'Highlighted! Line 4'
    }
  }
}
```
⬇️
``` js{4}
export default {
  data () {
    return {
      msg: 'Highlighted! Line 4'
    }
  }
}
```

## File path

``` md
<<< @/help/markdown/README.md <!-- this file -->
```
⬇️


<<< @/help/markdown/README.md


# Markdown Config

```
markdown: {
  // settings go here
}
```

## TOC
``` js
// options for markdown-it-toc
toc: { includeLevel: [1, 2, 3, 4] }
```

## lineNumbers

``` js
// Line Numbers
lineNumbers: true,
```

## Anchors

``` js
// options for markdown-it-anchor
anchor: {
  permalink: true, // Whether to add permalinks next to titles.
  permalinkBefore: true,
  permalinkSymbol: '#'
}
```

## markdown-it


``` js
config: md => {
  md.set({
    breaks: true,               // Convert '\n' in paragraphs into <br>
    html:         false,        // Enable HTML tags in source
    xhtmlOut:     false,        // Use '/' to close single tags (<br />).
                                // This is only for full CommonMark compatibility.
    breaks:       false,        // Convert '\n' in paragraphs into <br>
    langPrefix:   'language-',  // CSS language prefix for fenced blocks. Can be
                                // useful for external highlighters.
    linkify:      false,        // Autoconvert URL-like text to links
  }),
  md.use(require('markdown-it-highlightjs')),
  md.use(require('markdown-it-prism'), { 'plugins': ['copy-to-clipboard'] })
}
```

[markdown-it plugins](https://www.npmjs.com/search?q=keywords:markdown-it-plugin)
