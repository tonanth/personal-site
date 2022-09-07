---
title: 'Highlighting code with react-syntax-highlighter'
description: 'Using the react-syntax-highlighter to highlight code just like in an IDE.'
date: '2022-09-01'
publish: true
---

# Getting ready to highlight

If you're using a Markdown processor like `react-markdown`, you'll be able to wrap code in React components instead of just `<code>` tags in the redered HTML. This feature allows you to have a great degree of flexibility in the resulting HTML output. For example, you can add a custom code display and/or syntax highlighting. Syntax highlighting will highlight each token of code according to their function (i.e. constants, identifies, reserved words, separators). 

I'll be using the `react-syntax-highlighter` library to perform syntax highlighting in this blog. `react-syntax-highlighter` is an NPM package that provides a React component for you to pass the code to and it will perform the highlighting. It is also very configurable, allowing you to do things such as : customizing the langauge, theme, surround div, class name, and more.

The package is hosted on NPM so installation is straighforward: 

```bash
npm install react-syntax-hightlighter
```

Afterwards, we'll import it as so: 

```jsx
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
```
If you're using `react-markdown`, you can easily have it use `react-syntax-highlighter` in-place of the usual `<code>` tags like so:

```jsx
<ReactMarkdown className={styles.articlebody} children={postData.contentMarkdown} 
        components = {{
          code({node, inline, className, children, ...props}) {
            if (inline) {
              return (
                <code>{children}</code> 
              )
            } else {
              const match = /language-(\w+)/.exec(className || '');
              const lang = match[1];
              return (
                <SyntaxHighlighter  
                  children={String(children)}
                  language={lang}
                  codeTagProps={{style: {fontFamily: 'Fira Code'}}}
                />
              )
            }
```

This code tells `react-markdown` to use `react-syntax-highlighter` when it detects a code block and ignores inline code. You are able to select the language for the syntax highlighter by specifying it in Markdown after the tick marks like so: 

~~~none
```jsx
<MyReactComponent />
```
~~~

The language will be passed as a class name and will be prefixed by "language-". This means that you'll have to filter it out, perhaps using regular expressions. Styling can be added by passing styling to `codeTagProps`. To disable highlighting, set the language to 'none' in the Markdown.