---
title: 'Migrating from remark-html to react-markdown' 
description: 'Upgrading from remark-html to react-markdown for more secure HTML and customizable React components' 
date: '2022-08-30'
publish: true
---

# The move to more customizable Markdown

If you're using the `remark-html` packages, you'll notice that it is quite limited in the abilty to customize the resulting HTML. `remark-html` only compiles Markdown files into an HTML string with default HTML tags like `<h1>`, `<p>`, or `<code>`. Because it goes straight to a string, you'll have to write code to parse the string in order to utilize custom React components if you do not wish to use the default HTML tags. With the default HTML tags, the customizability of rendered Markdown such as code blocks is quite limited and you can't do complex things with a single `<code>` tag in CSS.

This is where `react-markdown` comes in. `react-markdown` converts a Markdown string into React elements instead of an HTML string. This way, you can specify your own React elements instead of the default HTML tags. This allows for much more customization of individual HTML elements such the ability to use a much more stylish code display complete with syntax highlighting via custom React components such as that from the `react-syntax-highlighter` NPM package.

`react-markdown` also avoids the use of  the `dangerouslySetInnerHTML` feature in React which can potentially cause cross-site scripting (XSS) attacks if used improperly. The `dangerouslySetInnerHTML` function tells React to render an HTML string as actual HTML code without concern for security. `dangerouslySetInnerHTML` is required by `react-markdown`, because `react-markdown` outputs HTML code in a string.

# Installation and use

`react-markdown` is available in NPM and can easily be installed by running: 

`npm install react-markdown`

Afterwards, the code below is no longer used. 

```
import { remark } from 'remark';

// some code

const processedContent = await remark()
  .use(html)
  .process(matterResult.content);
const contentHtml = processedContent.toString();

// some more code

<div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
```

Instead, we'll use : 

```
import ReactMarkdown from 'react-markdown';

// some code

<ReactMarkdown children={matterResult.content} />
```

The rendered page should look exactly the same as before but now we have the ability to pass custom React elements to `ReactMarkdown` for a more customized page.

