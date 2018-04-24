# CSS in JS Stats

[![Build Status](https://travis-ci.org/MicheleBertoli/css-in-js.svg?branch=master)](https://travis-ci.org/MicheleBertoli/css-in-js)

# CSS in JS

React: [CSS in JS](https://speakerdeck.com/vjeux/react-css-in-js) techniques comparison.

## Usage

Inside each package folder, run:

```bash
npm i
npm run build && open index.html
```

## Features

**How to read the table**

More ticks doesn't mean "better", it depends on your needs.
For example, if a package supports the css file extraction you can run the autoprefixing at build time.

#### How to read the Feature column

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| -------------------------- | -------------- | ------------- | ------------------------- | ---------------- |
| ✓                          | ✓              | ✓             | ✓                         | ✓                |

> This list has been auto-updated[*](https://github.com/albinotonnina/mmarkdown) on April 24, 2018

> Click on a package for more details.

| Stars | Package | Version | Open Issues | Features | Created |
| - | - | - | - | - | - |
|15654|[styled-components](#styled-components)|[![npm version](https://badge.fury.io/js/styled-components.svg)](https://badge.fury.io/js/styled-components)|121|✓✓✓✗✗|August 16, 2016|
  |8633|[react-native-web](#react-native-web)|[![npm version](https://badge.fury.io/js/react-native-web.svg)](https://badge.fury.io/js/react-native-web)|32|✓✗✗✓✓|June 9, 2015|
  |6226|[radium](#radium)|[![npm version](https://badge.fury.io/js/radium.svg)](https://badge.fury.io/js/radium)|82|✓✓✓✓✗|January 9, 2015|
  |4520|[react-css-modules](#react-css-modules)|[![npm version](https://badge.fury.io/js/react-css-modules.svg)](https://badge.fury.io/js/react-css-modules)|43|✗✓✓✗✓|August 25, 2015|
  |4027|[aphrodite](#aphrodite)|[![npm version](https://badge.fury.io/js/aphrodite.svg)](https://badge.fury.io/js/aphrodite)|55|✓✓✓✓✓|October 7, 2015|
  |3428|[glamorous](#glamorous)|[![npm version](https://badge.fury.io/js/glamorous.svg)](https://badge.fury.io/js/glamorous)|19|✓✓✓✓✓|April 3, 2017|
  |3354|[emotion](#emotion)|[![npm version](https://badge.fury.io/js/emotion.svg)](https://badge.fury.io/js/emotion)|56|✓✓✓✓✓|May 27, 2017|
  |3093|[glamor](#glamor)|[![npm version](https://badge.fury.io/js/glamor.svg)](https://badge.fury.io/js/glamor)|72|✓✓✓✓✓|July 18, 2016|
  |2979|[styled-jsx](#styled-jsx)|[![npm version](https://badge.fury.io/js/styled-jsx.svg)](https://badge.fury.io/js/styled-jsx)|16|✓✓✓✗✓|December 5, 2016|
  |2628|[css-loader](#css-loader)|[![npm version](https://badge.fury.io/js/css-loader.svg)](https://badge.fury.io/js/css-loader)|52|✗✓✓✗✓|April 7, 2012|
  |2432|[styletron](#styletron)|[![npm version](https://badge.fury.io/js/styletron.svg)](https://badge.fury.io/js/styletron)|44|✓✓✓✓✓|April 1, 2016|
  |1853|[typestyle](#typestyle)|[![npm version](https://badge.fury.io/js/typestyle.svg)](https://badge.fury.io/js/typestyle)|9|✗✓✓✓✓|October 14, 2016|
  |1789|[jsxstyle](#jsxstyle)|[![npm version](https://badge.fury.io/js/jsxstyle.svg)](https://badge.fury.io/js/jsxstyle)|10|✓✗✗✓✗|April 22, 2015|
  |1688|[react-style](#react-style)|[![npm version](https://badge.fury.io/js/react-style.svg)](https://badge.fury.io/js/react-style)|33|✗✗✓✓✓|August 1, 2014|
  |1498|[reactcss](#reactcss)|[![npm version](https://badge.fury.io/js/reactcss.svg)](https://badge.fury.io/js/reactcss)|4|✓✗✗✓✗|June 25, 2015|
  |1341|[fela](#fela)|[![npm version](https://badge.fury.io/js/fela.svg)](https://badge.fury.io/js/fela)|14|✓✓✓✓✓|May 20, 2016|
  |1000|[cssx](#cssx)|[![npm version](https://badge.fury.io/js/cssx.svg)](https://badge.fury.io/js/cssx)|10|✓✓✓✗✓|January 3, 2016|
  |864|[cxs](#cxs)|[![npm version](https://badge.fury.io/js/cxs.svg)](https://badge.fury.io/js/cxs)|18|✗✓✓✓✓|June 29, 2016|
  |843|[react-jss](#react-jss)|[![npm version](https://badge.fury.io/js/react-jss.svg)](https://badge.fury.io/js/react-jss)|24|✓✓✓✓✓|January 11, 2015|
  |703|[react-css-components](#react-css-components)|[![npm version](https://badge.fury.io/js/react-css-components.svg)](https://badge.fury.io/js/react-css-components)|5|✗✓✓✗✓|April 9, 2016|
  |644|[stylable](#stylable)|[![npm version](https://badge.fury.io/js/stylable.svg)](https://badge.fury.io/js/stylable)|70|✗✓✓✗✓|June 25, 2017|
  |602|[react-look](#react-look)|[![npm version](https://badge.fury.io/js/react-look.svg)](https://badge.fury.io/js/react-look)|14|✓✓✓✓✗|June 8, 2015|
  |509|[csjs](#csjs)|[![npm version](https://badge.fury.io/js/csjs.svg)](https://badge.fury.io/js/csjs)|22|✗✓✓✗✗|September 22, 2015|
  |451|[react-inline](#react-inline)|[![npm version](https://badge.fury.io/js/react-inline.svg)](https://badge.fury.io/js/react-inline)|3|✓✓✓✓✓|April 2, 2015|
  |325|[linaria](#linaria)|[![npm version](https://badge.fury.io/js/linaria.svg)](https://badge.fury.io/js/linaria)|20|✓✓✓✓✓|May 23, 2017|
  |251|[babel-plugin-css-in-js](#babel-plugin-css-in-js)|[![npm version](https://badge.fury.io/js/babel-plugin-css-in-js.svg)](https://badge.fury.io/js/babel-plugin-css-in-js)|6|✓✓✓✓✓|November 16, 2015|
  |237|[stilr](#stilr)|[![npm version](https://badge.fury.io/js/stilr.svg)](https://badge.fury.io/js/stilr)|5|✗✓✓✓✓|May 22, 2015|
  |213|[cssobj](#cssobj)|[![npm version](https://badge.fury.io/js/cssobj.svg)](https://badge.fury.io/js/cssobj)|2|✓✓✓✓✗|July 17, 2016|
  |195|[react-styleable](#react-styleable)|[![npm version](https://badge.fury.io/js/react-styleable.svg)](https://badge.fury.io/js/react-styleable)|1|✗✓✓✗✓|June 24, 2015|
  |164|[react-inline-css](#react-inline-css)|[![npm version](https://badge.fury.io/js/react-inline-css.svg)](https://badge.fury.io/js/react-inline-css)|5|✗✓✓✗✗|May 17, 2014|
  |153|[j2c](#j2c)|[![npm version](https://badge.fury.io/js/j2c.svg)](https://badge.fury.io/js/j2c)|8|✗✓✓✓✓|April 10, 2015|
  |147|[es-css-modules](#es-css-modules)|[![npm version](https://badge.fury.io/js/es-css-modules.svg)](https://badge.fury.io/js/es-css-modules)|1|✗✓✓✗✓|May 4, 2016|
  |130|[styling](#styling)|[![npm version](https://badge.fury.io/js/styling.svg)](https://badge.fury.io/js/styling)|5|✗✓✗✓✓|August 10, 2015|
  |118|[react-free-style](#react-free-style)|[![npm version](https://badge.fury.io/js/react-free-style.svg)](https://badge.fury.io/js/react-free-style)|0|✗✓✓✓✓|March 14, 2015|
  |114|[uranium](#uranium)|[![npm version](https://badge.fury.io/js/uranium.svg)](https://badge.fury.io/js/uranium)|3|✗✗✓✓✗|February 16, 2016|
  |109|[freestyler](#freestyler)|[![npm version](https://badge.fury.io/js/freestyler.svg)](https://badge.fury.io/js/freestyler)|21|✓✓✓✓✗|October 7, 2017|
  |108|[css-ns](#css-ns)|[![npm version](https://badge.fury.io/js/css-ns.svg)](https://badge.fury.io/js/css-ns)|1|✗✓✓✗✓|May 1, 2015|
  |89|[css-constructor](#css-constructor)|[![npm version](https://badge.fury.io/js/css-constructor.svg)](https://badge.fury.io/js/css-constructor)|4|✓✓✓✗✗|December 10, 2016|
  |80|[style-it](#style-it)|[![npm version](https://badge.fury.io/js/style-it.svg)](https://badge.fury.io/js/style-it)|1|✗✓✓✗✗|June 13, 2016|
  |73|[smart-css](#smart-css)|[![npm version](https://badge.fury.io/js/smart-css.svg)](https://badge.fury.io/js/smart-css)|4|✗✓✓✓✗|February 25, 2015|
  |64|[react-theme](#react-theme)|[![npm version](https://badge.fury.io/js/react-theme.svg)](https://badge.fury.io/js/react-theme)|0|✗✗✗✓✗|June 12, 2015|
  |53|[react-cssom](#react-cssom)|[![npm version](https://badge.fury.io/js/react-cssom.svg)](https://badge.fury.io/js/react-cssom)|0|✗✓✓✗✓|January 7, 2017|
  |52|[hyperstyles](#hyperstyles)|[![npm version](https://badge.fury.io/js/hyperstyles.svg)](https://badge.fury.io/js/hyperstyles)|0|✗✓✓✗✓|September 8, 2015|
  |46|[restyles](#restyles)|[![npm version](https://badge.fury.io/js/restyles.svg)](https://badge.fury.io/js/restyles)|1|✓✓✓✓✗|May 9, 2017|
  |44|[react-inline-style](#react-inline-style)|[![npm version](https://badge.fury.io/js/react-inline-style.svg)](https://badge.fury.io/js/react-inline-style)|1|✓✓✓✓✗|July 13, 2015|
  |42|[react-styl](#react-styl)|[![npm version](https://badge.fury.io/js/react-styl.svg)](https://badge.fury.io/js/react-styl)|0|✗✓✓✗✗|December 19, 2014|
  |35|[react-styled](#react-styled)|[![npm version](https://badge.fury.io/js/react-styled.svg)](https://badge.fury.io/js/react-styled)|1|✗✓✓✗✗|March 23, 2015|
  |32|[superstyle](#superstyle)|[![npm version](https://badge.fury.io/js/superstyle.svg)](https://badge.fury.io/js/superstyle)|0|✗✗✗✓✗|May 29, 2017|
  |30|[pre-style](#pre-style)|[![npm version](https://badge.fury.io/js/pre-style.svg)](https://badge.fury.io/js/pre-style)|4|✗✓✓✗✓|January 7, 2017|
  |25|[react-statics-styles](#react-statics-styles)|[![npm version](https://badge.fury.io/js/react-statics-styles.svg)](https://badge.fury.io/js/react-statics-styles)|0|✗✓✗✓✓|November 15, 2014|
  |22|[classy](#classy)|[![npm version](https://badge.fury.io/js/classy.svg)](https://badge.fury.io/js/classy)|0|✗✓✓✓✗|August 14, 2015|
  |22|[scope-styles](#scope-styles)|[![npm version](https://badge.fury.io/js/scope-styles.svg)](https://badge.fury.io/js/scope-styles)|7|✗✓✓✓✓|October 20, 2015|
  |20|[react-css-builder](#react-css-builder)|[![npm version](https://badge.fury.io/js/react-css-builder.svg)](https://badge.fury.io/js/react-css-builder)|0|✗✗✗✓✗|February 3, 2015|
  |19|[react-vstyle](#react-vstyle)|[![npm version](https://badge.fury.io/js/react-vstyle.svg)](https://badge.fury.io/js/react-vstyle)|0|✓✓✓✓✓|June 2, 2016|
  |18|[react-stylematic](#react-stylematic)|[![npm version](https://badge.fury.io/js/react-stylematic.svg)](https://badge.fury.io/js/react-stylematic)|1|✓✓✓✓✓|April 24, 2016|
  |5|[babel-plugin-pre-style](#babel-plugin-pre-style)|[![npm version](https://badge.fury.io/js/babel-plugin-pre-style.svg)](https://badge.fury.io/js/babel-plugin-pre-style)|1|✗✓✓✓✓|January 31, 2017|
  |2|[css-light](#css-light)|[![npm version](https://badge.fury.io/js/css-light.svg)](https://badge.fury.io/js/css-light)|1|✗✓✓✓✓|June 24, 2016|
  |2|[i-css](#i-css)|[![npm version](https://badge.fury.io/js/i-css.svg)](https://badge.fury.io/js/i-css)|0|✓✓✓✓✗|July 1, 2017|
  

## List of Projects in alphabetical order


### aphrodite

> Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [Khan](https://github.com/Khan) on October 7, 2015 

***4027*** stars, ***55*** open issues, ***155*** forks

License: -

[Github](https://github.com/Khan/aphrodite)

[Demo Package](/Packages/aphrodite)

---


### babel-plugin-css-in-js

> A plugin for Babel v6 which transforms inline styles defined in JavaScript modules into class names so they become available to, e.g. the `className` prop of React elements. While transforming, the plugin processes all JavaScript style definitions found and bundles them up into a CSS file, ready to be requested from your web server.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [martinandert](https://github.com/martinandert) on November 16, 2015 

***251*** stars, ***6*** open issues, ***7*** forks

License: MIT License

[Github](https://github.com/martinandert/babel-plugin-css-in-js)

[Demo Package](/Packages/babel-plugin-css-in-js)

---


### babel-plugin-pre-style

> Babel Plugin for processing Pre Style statements.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓| ✓


Created by [soluml](https://github.com/soluml) on January 31, 2017 

***5*** stars, ***1*** open issues, ***0*** forks

License: -

[Github](https://github.com/soluml/babel-plugin-pre-style)

[Demo Package](/Packages/babel-plugin-pre-style)

---


### classy

> React styling. Plain and simple.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓|  


Created by [inturn](https://github.com/inturn) on August 14, 2015 

***22*** stars, ***0*** open issues, ***2*** forks

License: MIT License

[Github](https://github.com/inturn/classy)

[Demo Package](/Packages/classy)

---


### csjs

> :sparkles: Modular, scoped CSS with ES6

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| |  


Created by [rtsao](https://github.com/rtsao) on September 22, 2015 

***509*** stars, ***22*** open issues, ***26*** forks

License: MIT License

[Github](https://github.com/rtsao/csjs)

[Demo Package](/Packages/csjs)

---


### css-constructor

> 💄 CSS constructor for React components

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓| |  


Created by [siddharthkp](https://github.com/siddharthkp) on December 10, 2016 

***89*** stars, ***4*** open issues, ***3*** forks

License: MIT License

[Github](https://github.com/siddharthkp/css-constructor)

[Demo Package](/Packages/css-constructor)

---


### css-light

> Light-weight module to write CSS in JavaScript

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓| ✓


Created by [streamich](https://github.com/streamich) on June 24, 2016 

***2*** stars, ***1*** open issues, ***0*** forks

License: -

[Github](https://github.com/streamich/css-light)

[Demo Package](/Packages/css-light)

---


### css-loader

> CSS Loader

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [webpack-contrib](https://github.com/webpack-contrib) on April 7, 2012 

***2628*** stars, ***52*** open issues, ***336*** forks

License: MIT License

[Github](https://github.com/webpack-contrib/css-loader)

[Demo Package](/Packages/css-loader)

---


### css-ns

> Dead-simple CSS namespaces

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [jareware](https://github.com/jareware) on May 1, 2015 

***108*** stars, ***1*** open issues, ***5*** forks

License: -

[Github](https://github.com/jareware/css-ns)

[Demo Package](/Packages/css-ns)

---


### cssobj

> Runtime CSS manager, Turn CSS into dynamic JS module, Stylesheet CRUD (Create, Read, Update, Delete) in CSSOM, name space (local) class names

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓|  


Created by [cssobj](https://github.com/cssobj) on July 17, 2016 

***213*** stars, ***2*** open issues, ***10*** forks

License: MIT License

[Github](https://github.com/cssobj/cssobj)

[Demo Package](/Packages/cssobj)

---


### cssx

> CSS in JavaScript

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓| | ✓


Created by [krasimir](https://github.com/krasimir) on January 3, 2016 

***1000*** stars, ***10*** open issues, ***40*** forks

License: MIT License

[Github](https://github.com/krasimir/cssx)

[Demo Package](/Packages/cssx)

---


### cxs

> fast af css-in-js in 0.7kb

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓| ✓


Created by [cxs-css](https://github.com/cxs-css) on June 29, 2016 

***864*** stars, ***18*** open issues, ***51*** forks

License: MIT License

[Github](https://github.com/cxs-css/cxs)

[Demo Package](/Packages/cxs)

---


### emotion

> style as a function of state

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [emotion-js](https://github.com/emotion-js) on May 27, 2017 

***3354*** stars, ***56*** open issues, ***204*** forks

License: MIT License

[Github](https://github.com/emotion-js/emotion)

[Demo Package](/Packages/emotion)

---


### es-css-modules

> PostCSS plugin that combines CSS Modules and ES Imports

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [jacobp100](https://github.com/jacobp100) on May 4, 2016 

***147*** stars, ***1*** open issues, ***3*** forks

License: ISC License

[Github](https://github.com/jacobp100/es-css-modules)

[Demo Package](/Packages/es-css-modules)

---


### fela

> State-Driven Styling in JavaScript

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [rofrischmann](https://github.com/rofrischmann) on May 20, 2016 

***1341*** stars, ***14*** open issues, ***129*** forks

License: MIT License

[Github](https://github.com/rofrischmann/fela)

[Demo Package](/Packages/fela)

---


### freestyler

> 5th generation CSS-in-JS library

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓|  


Created by [streamich](https://github.com/streamich) on October 7, 2017 

***109*** stars, ***21*** open issues, ***2*** forks

License: -

[Github](https://github.com/streamich/freestyler)

[Demo Package](/Packages/freestyler)

---


### glamor

> inline css for react et al

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [threepointone](https://github.com/threepointone) on July 18, 2016 

***3093*** stars, ***72*** open issues, ***190*** forks

License: MIT License

[Github](https://github.com/threepointone/glamor)

[Demo Package](/Packages/glamor)

---


### glamorous

> 💄 Maintainable CSS with React

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [paypal](https://github.com/paypal) on April 3, 2017 

***3428*** stars, ***19*** open issues, ***259*** forks

License: MIT License

[Github](https://github.com/paypal/glamorous)

[Demo Package](/Packages/glamorous)

---


### hyperstyles

> Transparently apply CSS Modules to hyperscript-compatible DOM builders, such as virtual-hyperscript and React

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [colingourlay](https://github.com/colingourlay) on September 8, 2015 

***52*** stars, ***0*** open issues, ***4*** forks

License: -

[Github](https://github.com/colingourlay/hyperstyles)

[Demo Package](/Packages/hyperstyles)

---


### i-css

> npm package, for writing css in js

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓|  


Created by [irom-io](https://github.com/irom-io) on July 1, 2017 

***2*** stars, ***0*** open issues, ***1*** forks

License: -

[Github](https://github.com/irom-io/i-css)

[Demo Package](/Packages/i-css)

---


### j2c

> CSS in JS library, tiny yet featureful

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓| ✓


Created by [j2css](https://github.com/j2css) on April 10, 2015 

***153*** stars, ***8*** open issues, ***7*** forks

License: -

[Github](https://github.com/j2css/j2c)

[Demo Package](/Packages/j2c)

---


### jsxstyle

> Inline style system for React and Preact

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓| | |✓|  


Created by [smyte](https://github.com/smyte) on April 22, 2015 

***1789*** stars, ***10*** open issues, ***57*** forks

License: Other

[Github](https://github.com/smyte/jsxstyle)

[Demo Package](/Packages/jsxstyle)

---


### linaria

> Zero-runtime CSS in JS library

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [callstack](https://github.com/callstack) on May 23, 2017 

***325*** stars, ***20*** open issues, ***18*** forks

License: MIT License

[Github](https://github.com/callstack/linaria)

[Demo Package](/Packages/linaria)

---


### pre-style

> Pre-Style is a tool that lets you author CSS-in-JS (or CSS-in-Markup) while outputting highly efficient CSS.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [soluml](https://github.com/soluml) on January 7, 2017 

***30*** stars, ***4*** open issues, ***0*** forks

License: -

[Github](https://github.com/soluml/pre-style)

[Demo Package](/Packages/pre-style)

---


### radium

> A toolchain for React component styling.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓|  


Created by [FormidableLabs](https://github.com/FormidableLabs) on January 9, 2015 

***6226*** stars, ***82*** open issues, ***277*** forks

License: Other

[Github](https://github.com/FormidableLabs/radium)

[Demo Package](/Packages/radium)

---


### react-css-builder

> CSS builder to create react component style objects

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| | | |✓|  


Created by [jhudson8](https://github.com/jhudson8) on February 3, 2015 

***20*** stars, ***0*** open issues, ***0*** forks

License: MIT License

[Github](https://github.com/jhudson8/react-css-builder)

[Demo Package](/Packages/react-css-builder)

---


### react-css-components

> Define React presentational components with CSS

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [andreypopp](https://github.com/andreypopp) on April 9, 2016 

***703*** stars, ***5*** open issues, ***19*** forks

License: -

[Github](https://github.com/andreypopp/react-css-components)

[Demo Package](/Packages/react-css-components)

---


### react-css-modules

> Seamless mapping of class names to CSS modules inside of React components.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [gajus](https://github.com/gajus) on August 25, 2015 

***4520*** stars, ***43*** open issues, ***188*** forks

License: Other

[Github](https://github.com/gajus/react-css-modules)

[Demo Package](/Packages/react-css-modules)

---


### react-cssom

> Css selector for React Components

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [mbasso](https://github.com/mbasso) on January 7, 2017 

***53*** stars, ***0*** open issues, ***0*** forks

License: MIT License

[Github](https://github.com/mbasso/react-cssom)

[Demo Package](/Packages/react-cssom)

---


### react-free-style

> Make React components easier and more maintainable by using inline style objects

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓| ✓


Created by [blakeembrey](https://github.com/blakeembrey) on March 14, 2015 

***118*** stars, ***0*** open issues, ***4*** forks

License: MIT License

[Github](https://github.com/blakeembrey/react-free-style)

[Demo Package](/Packages/react-free-style)

---


### react-inline

> Transform inline styles defined in JavaScript modules into static CSS code and class names so they become available to, e.g. the `className` prop of React elements.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [martinandert](https://github.com/martinandert) on April 2, 2015 [***Archived***]

***451*** stars, ***3*** open issues, ***16*** forks

License: MIT License

[Github](https://github.com/martinandert/react-inline)

[Demo Package](/Packages/react-inline)

---


### react-inline-css

> Write CSS inside your React components!

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| |  


Created by [RickWong](https://github.com/RickWong) on May 17, 2014 

***164*** stars, ***5*** open issues, ***22*** forks

License: BSD 3-Clause "New" or "Revised" License

[Github](https://github.com/RickWong/react-inline-css)

[Demo Package](/Packages/react-inline-css)

---


### react-inline-style

> Reusable and adaptable components without external css dependency.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓|  


Created by [dowjones](https://github.com/dowjones) on July 13, 2015 

***44*** stars, ***1*** open issues, ***2*** forks

License: -

[Github](https://github.com/dowjones/react-inline-style)

[Demo Package](/Packages/react-inline-style)

---


### react-jss

> JSS integration for React.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [cssinjs](https://github.com/cssinjs) on January 11, 2015 

***843*** stars, ***24*** open issues, ***62*** forks

License: MIT License

[Github](https://github.com/cssinjs/react-jss)

[Demo Package](/Packages/react-jss)

---


### react-look

> Advanced & Dynamic Component Styling for React and React Native. Ships with powerful Plugins, Mixins and Developer Tools. (Deprecated: use Fela)

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓|  


Created by [rofrischmann](https://github.com/rofrischmann) on June 8, 2015 [***Archived***]

***602*** stars, ***14*** open issues, ***39*** forks

License: MIT License

[Github](https://github.com/rofrischmann/react-look)

[Demo Package](/Packages/react-look)

---


### react-native-web

> React Native for Web

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓| | |✓| ✓


Created by [necolas](https://github.com/necolas) on June 9, 2015 

***8633*** stars, ***32*** open issues, ***677*** forks

License: MIT License

[Github](https://github.com/necolas/react-native-web)

[Demo Package](/Packages/react-native-web)

---


### react-statics-styles

> Declarative styles in React components with support for pre- and post-processing.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓| |✓| ✓


Created by [elierotenberg](https://github.com/elierotenberg) on November 15, 2014 

***25*** stars, ***0*** open issues, ***4*** forks

License: -

[Github](https://github.com/elierotenberg/react-statics-styles)

[Demo Package](/Packages/react-statics-styles)

---


### react-styl

> null

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| |  


Created by [nick](https://github.com/nick) on December 19, 2014 

***42*** stars, ***0*** open issues, ***0*** forks

License: -

[Github](https://github.com/nick/react-styl)

[Demo Package](/Packages/react-styl)

---


### react-style

> UNMAINTAINED

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| | |✓|✓| ✓


Created by [js-next](https://github.com/js-next) on August 1, 2014 

***1688*** stars, ***33*** open issues, ***97*** forks

License: -

[Github](https://github.com/js-next/react-style)

[Demo Package](/Packages/react-style)

---


### react-styleable

> React Component for portable styles

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [pluralsight](https://github.com/pluralsight) on June 24, 2015 

***195*** stars, ***1*** open issues, ***14*** forks

License: MIT License

[Github](https://github.com/pluralsight/react-styleable)

[Demo Package](/Packages/react-styleable)

---


### react-styled

> styled component for react & style-loader/usable

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| |  


Created by [bloodyowl](https://github.com/bloodyowl) on March 23, 2015 

***35*** stars, ***1*** open issues, ***5*** forks

License: MIT License

[Github](https://github.com/bloodyowl/react-styled)

[Demo Package](/Packages/react-styled)

---


### react-stylematic

> A stylematic wrapper for React

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [rtsao](https://github.com/rtsao) on April 24, 2016 

***18*** stars, ***1*** open issues, ***0*** forks

License: MIT License

[Github](https://github.com/rtsao/react-stylematic)

[Demo Package](/Packages/react-stylematic)

---


### react-theme

> Organise your inline styles in a flexible and customizable way.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| | | |✓|  


Created by [azazdeaz](https://github.com/azazdeaz) on June 12, 2015 

***64*** stars, ***0*** open issues, ***10*** forks

License: -

[Github](https://github.com/azazdeaz/react-theme)

[Demo Package](/Packages/react-theme)

---


### react-vstyle

> React bindings for VStyle

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [fdecampredon](https://github.com/fdecampredon) on June 2, 2016 

***19*** stars, ***0*** open issues, ***1*** forks

License: -

[Github](https://github.com/fdecampredon/react-vstyle)

[Demo Package](/Packages/react-vstyle)

---


### reactcss

> :lipstick: Inline Styles in JS

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓| | |✓|  


Created by [casesandberg](https://github.com/casesandberg) on June 25, 2015 

***1498*** stars, ***4*** open issues, ***73*** forks

License: MIT License

[Github](https://github.com/casesandberg/reactcss)

[Demo Package](/Packages/reactcss)

---


### restyles

> 👩‍🚀 declarative glamor for react and preact

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓|  


Created by [tkh44](https://github.com/tkh44) on May 9, 2017 

***46*** stars, ***1*** open issues, ***4*** forks

License: MIT License

[Github](https://github.com/tkh44/restyles)

[Demo Package](/Packages/restyles)

---


### scope-styles

> converts inline style objects into scoped css

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓| ✓


Created by [rtsao](https://github.com/rtsao) on October 20, 2015 

***22*** stars, ***7*** open issues, ***2*** forks

License: MIT License

[Github](https://github.com/rtsao/scope-styles)

[Demo Package](/Packages/scope-styles)

---


### smart-css

> Write CSS in JavaScript with namespaces, proper names, no conflicts and expected results for react.js.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓|  


Created by [hackhat](https://github.com/hackhat) on February 25, 2015 

***73*** stars, ***4*** open issues, ***2*** forks

License: Other

[Github](https://github.com/hackhat/smart-css)

[Demo Package](/Packages/smart-css)

---


### stilr

> Encapsulated styling for your javascript components with all the power of javascript and CSS combined.

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓| ✓


Created by [kodyl](https://github.com/kodyl) on May 22, 2015 

***237*** stars, ***5*** open issues, ***16*** forks

License: MIT License

[Github](https://github.com/kodyl/stilr)

[Demo Package](/Packages/stilr)

---


### stylable

> Stylable - CSS for components 

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| | ✓


Created by [wix](https://github.com/wix) on June 25, 2017 

***644*** stars, ***70*** open issues, ***21*** forks

License: BSD 3-Clause "New" or "Revised" License

[Github](https://github.com/wix/stylable)

[Demo Package](/Packages/stylable)

---


### style-it

> Component for writing plaintext CSS in React apps -- isomorphic, scoped, FOUC-free, fully featured, CSS-in-JS

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓| |  


Created by [buildbreakdo](https://github.com/buildbreakdo) on June 13, 2016 

***80*** stars, ***1*** open issues, ***3*** forks

License: MIT License

[Github](https://github.com/buildbreakdo/style-it)

[Demo Package](/Packages/style-it)

---


### styled-components

> Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓| |  


Created by [styled-components](https://github.com/styled-components) on August 16, 2016 

***15654*** stars, ***121*** open issues, ***914*** forks

License: MIT License

[Github](https://github.com/styled-components/styled-components)

[Demo Package](/Packages/styled-components)

---


### styled-jsx

> Full CSS support for JSX without compromises

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓| | ✓


Created by [zeit](https://github.com/zeit) on December 5, 2016 

***2979*** stars, ***16*** open issues, ***134*** forks

License: MIT License

[Github](https://github.com/zeit/styled-jsx)

[Demo Package](/Packages/styled-jsx)

---


### styletron

> :zap: Toolkit for component-oriented styling

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
|✓|✓|✓|✓| ✓


Created by [rtsao](https://github.com/rtsao) on April 1, 2016 

***2432*** stars, ***44*** open issues, ***86*** forks

License: MIT License

[Github](https://github.com/rtsao/styletron)

[Demo Package](/Packages/styletron)

---


### styling

> Create CSS modules with the full power of JavaScript

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓| |✓| ✓


Created by [andreypopp](https://github.com/andreypopp) on August 10, 2015 

***130*** stars, ***5*** open issues, ***5*** forks

License: -

[Github](https://github.com/andreypopp/styling)

[Demo Package](/Packages/styling)

---


### superstyle

> CSSOM-JS utility library

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| | | |✓|  


Created by [jxnblk](https://github.com/jxnblk) on May 29, 2017 

***32*** stars, ***0*** open issues, ***2*** forks

License: -

[Github](https://github.com/jxnblk/superstyle)

[Demo Package](/Packages/superstyle)

---


### typestyle

> Making CSS Typesafe 🌹

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| |✓|✓|✓| ✓


Created by [typestyle](https://github.com/typestyle) on October 14, 2016 

***1853*** stars, ***9*** open issues, ***65*** forks

License: MIT License

[Github](https://github.com/typestyle/typestyle)

[Demo Package](/Packages/typestyle)

---


### uranium

> Universal css-in-js media queries for React Native and React

| Automatic Vendor Prefixing | Pseudo Classes | Media Queries | Styles As Object Literals | Extract CSS File |
| - | - | - | - |-|
| | |✓|✓|  


Created by [tuckerconnelly](https://github.com/tuckerconnelly) on February 16, 2016 

***114*** stars, ***3*** open issues, ***6*** forks

License: MIT License

[Github](https://github.com/tuckerconnelly/uranium)

[Demo Package](/Packages/uranium)

---



## Testimonials

> ["Wow, this totally makes my week!"](https://twitter.com/dan_abramov/status/604260877622202368) - Dan Abramov

> ["nice compilation of css-in-js techniques"](https://twitter.com/tjholowaychuk/status/739812614239195136) - TJ Holowaychuk

[SurviveJS / Styling React](http://survivejs.com/webpack_react/styling_react/) by Juho Vepsäläinen

[The Case for CSS Modules](http://markdalgleish.github.io/presentation-the-case-for-css-modules) by Mark Dalgleish

[First Class Styles](https://markdalgleish.github.io/presentation-first-class-styles) by Mark Dalgleish

[Styling React.JS applications](https://www.youtube.com/watch?v=19gqsBc_Cx0) by Max Stoiber

## Contributing

If your package is not listed here, feel free to add it.

1.  Create a new folder named `package-name` in `Packages`.
2.  Implement the red button example using the package.
3.  Add a new entry to [data.json](webpage/src/data.json).
4.  Re-generate the table with: `cd webpage && yarn && yarn readme`.
