---
title: 'Beyond the NextJS tutorial: Sass'
description: "Extending NextJS functionality with Sass support."
date: '2022-08-18'
---

# From plain CSS to Sass.

## Why Sass?

When I was writing some CSS for the rendered article HTML, I found myself having to repeatedly target the article first followed by its descendants. This resulted in my stylesheet looking something like this:

```
.article-body {
  /* common rules for the entire article */
}

.article-body h1 {
  /* some rules */
}

.article-body h2 {
  /* some more rules */
}

.article-body p {
  /* even more rules */
}
```

It looks somewhat repetitive due to the `.article-body` class selector, and I find that it can potentially get tricky to see which rules get applied to which elements, especially for heavily nested classes. In the code above, if I'm looking at what gets applied to a paragraph descendant of the `.article-body` body class then I'll have to locate and parse the first and fourth independent rulesets (potentially more as more styling is applied). Sometimes, a look at the actual HTML is required because of an inherited rule from a distant ancestor that wasn't obvious from the CSS selectors.

This is where Sass (or Syntactically Awesome Style Sheets) come in. Sass is a superset of CSS meaning that (with very little exception) every CSS file is a valid Sass file, so no relearning is necessary. It introduces the ability to nest selectors in braces so it is very clear which rules are being applied where and gives a very clear view of the HTML nesting structure. Here is the code above in Sass SCSS : 

.article-body {
  /* common rules for the entire article */

  h1 {
    /* some rules */
  }

  h2 {
    /* some more rules */
  }
  
  p {
    /* even more rules */
  }
}

Here, I can clearly see which rules are applied and at what level. Ascertaining inherited rules is also easy by just looking at the containing braces and working my way outwards. The application of rules is similar to how scope works in programming languages. I also saved on some typing by not having to type `.article-body` everytime to target its descendants. 

Of course, nesting isn't the only feature of Sass. Sass also comes with the ability to use variables, have mixins, and more.

Sass comes in two syntaxes, the newer one has the `.scss` (Sassy CSS or SCSS) extension and the older one that has the `.sass` extension. The newer SCSS syntax uses braces to nest statements and semicolons to separate them. The older indented syntax uses indentations to nest statements and newlines to separate them. The newer SCSS syntax is the superset of CSS and is the one that I am using on this site.

Sass does have some downsides, however, such as need to compile because browsers can't read `.scss` or `.sass`. Because compilation is necessary, the resulting CSS file might be less readable than if written by hand. This makes debugging the CSS potentially more difficult. 

## Installation 

NextJS supports importing Sass (both `.scss` and `.sass` extensions) and through CSS Modules using `.module.scss` and `.module.sass` extensions. NextJS makes the compilation seamless ; compilation is done automatically. All that's needed to use Sass is to run:

```
npm install --save-dev sass
```