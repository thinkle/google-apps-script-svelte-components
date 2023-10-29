# Svelte Components for Google Apps Script

Just some quick svelte components for working with Google Apps Script.

Used in this starter repo: https://github.com/thinkle/Google-Apps-Script-Svelte-Starter

Note: after being burned by using various CDNs for content in Google Apps Script projects, my goal here is to generate self-sufficient code.

For that reason, we're avoiding icon fonts and other dependencies.

## Icons

We pull in Icons as raw SVG, that way they get built right into our source code.

There's a handy little node script for crawling google's material icons package and
generating handy exports for use with our library.

We can then import like this...

```svelte
import {Icon,copyright} from 'google-apps-script-svelte-components';

<Icon svg={copyright.outlined}/>
```

## CSS

I copied Google's sidebar CSS and hard-coded it here so that we're not dependent on that URL continuing to exist (did I mention I'd been burned in the past?)

