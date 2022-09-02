---
title: 'Hello, World! (and how to get there)'
description: 'A brief summary of what "Hello, World!" is and how this site came to be.'
date: '2022-08-17'
publish: true
---


# Hello, World!

"Hello, World!" programs are programs that does nothing except display a message similar to "Hello, World!". These programs illustrate a programming language's basic syntax and serve as sanity check to ensure that programs, packages, and/or compilers are installed properly to run a programming language. This page is meant to be more of the latter use case of "Hello, World!" programs. While the words on this page was not exactly written in a programming language (it was written in Markdown and rendered using JavaScript), relies on more than just the core facilities JavaScript language to display on a web browser properly, and displays way more than a simple two-worded message, the underlying principles still hold. 

If you are able to read this page on your browser, then that means that the sanity check was passed and that means that all required programs are installed, written, and executed correctly. In addition, the syntax (for Markdown) is illustrated in the .md file for this page, albeit quite excessively given the length of this blog post. The following are the steps that I took to create this website.

# Prerequisites

NodeJS with NPM - allows running JavaScript code without a browser ; can be installed at <https://nodejs.org>

Some Javascript, JSX, HTML, CSS - the tutorial only covers the bare minimum 

Some Bash or Powershell - the tutorial only covers the bare minimum

Some Git - needed to upload to GitHub if going through the commandline

# The tutorial

This personal site was created using NextJS and its accompanying tutorial located here: <https://nextjs.org/learn/basics/create-nextjs-app>. In fact, the very first version of this site that was uploaded to GitHub was the end result of following the tutorial to the letter. The tutorial should result in a web application sporting a home page and two blog posts complete with CSS styling and with infrastructure to easily add more blog posts. By the end of the tutorial, there should be a folder named posts with two .md files. Add more posts here to have them rendered and automatically listed on the home page.

# Exporting

Throughout the tutorial, the site was built and hosted through your own computer. If you would like to host your site on GitHub Pages or GitLab Pages, you'll need to export your site to static files in order to upload them. This can be done easily by editing `package.json` and adding the code below to the scripts and then running `npm run build`.

```
{
  "scripts" : 
    "build": "next build && next export -o outDir" 
}
```

This will output your site to a directory called `outDir` located in the same directory as your NextJS application. `outDir` can be replaced with any valid path to change the export directory.

As of August 2022, there is an issue with utilizing `next/image` while exporting and requires creating `next.config.mjs` in the root of the project directory and adding the code below to disable image optimizations. 

```
/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

export default nextConfig
```

Exporting the site can sometimes cause NextJS to hang, a potential solution that I found involves deleting the `.next` folder in the root project directory and trying again. After the export is complete, the files can be uploaded to a site like GitHub Pages for hosting.

# Uploading to GitHub

GitHub allows you to host a static website for free through GitHub Pages. First you'll need to make a repository called `yourname.github.io`, replacing `yourname` with your GitHub username. Then, you'll need to push the files on there. Before pushing, make sure to commit an empty file called `.nojekyll` in the root directory of the repo. That file is necessary because GitHub uses Jekyll to process sites and Jekyll treats files or directories starting with underscores (namely the `_next` folder) differently and they won't be included on the site. After pushing the site onto GitHub, it should be accessible by going to `yourname.github.io`, again replacing `yourname` with your GitHub username.