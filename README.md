# 3-click-deployment-ui

This project is automatically deployed by 
3-click-deployment-ui

### Development

To start application locally
```
npm run dev
```

---

# Opportunity to learn a little bit more about Next.js

[_check the Next.js doc first_](https://nextjs.org/docs)

SSG (Static Site Generation) render all pages at build time (good for SEO but data stale, hard to scale many page)
_use case example : blog_

```
// into pages\bikes\[id].js (demo SSG logic)
import { useRouter } from 'next/router'

export default function Bike({ bike }) {

    const router = useRouter()
    const { id } = router.query

    return (<>
        <h1>Hello {id}</h1>
        <p>Model: {bike.model}<p>
    </>)
}

// React application
export async function getStaticProps({ params }) {

    const req = await fecth('api');
    const data = await req.json();
    
    return { 
        props : { bike : data}, 
    }
}

// SSG
export async function getStaticProps() {

    const req = await fecth('api');
    const data = await req.json();
    
    const paths = data.map(bike => {
        return { params : { id: bike } }
    })
    
    return { 
        paths,
        fallback: false
    }
}

// generateStaticParams
```

vs SSR (Server-Side Rendering) that generate each page at request time (slower, inefficient data caching). _example: an ebay_

```
// into pages\bikes\[id].js
import { useRouter } from 'next/router'

export default function Bike({ bike }) {

    const router = useRouter()
    const { id } = router.query

    return (<>
        <h1>Hello {id}</h1>
        <p>Model: {bike.model}<p>
    </>)
}

// SSR
export async function getServerSideProps() {

    const req = await fecth('api');
    const data = await req.json();
    
    return { 
        props : { bike : data}, 
    }
}
```

Static Route
The path / is marked as "static" since it will be prerendered during the build time.

With Static Rendering, routes are rendered at build time, or in the background after data revalidation.

Static rendering is useful when a route has data that is not personalized to the user and can be known at build time, such as a static blog post or a product page.

```
// Example to generate static routes for given set of locales
// app/[lang]/layout.tsx
export async function generateStaticParams() {
  return [{ lang: 'en-US' }, { lang: 'de' }]
}
```

---

# Opportunity to learn a little bit more about React

## Next.js

Image component allow automatic image optimization. In CRA (Create React App) manage image file as public URL as a string. Use [this step](https://nextjs.org/docs/app/guides/migrating/from-create-react-app#step-8-update-static-image-imports) to update

Next.js support env var but requires *NEXT_PUBLIC_* prefix

## React context

- Bootstrap

```{bash}
// To install dependencies.boostrap into package.json"
npm install bootstrap

// To use boostrap
import 'bootstrap/dist/css/bootstrap.css';
```

- Router

## react library

Most famous according to some blog
```
import React from 'react';
import ReactDOM from 'react-dom';

import React, { Component, PureComponent } from 'react';

// Hooks functions
import React, { useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue } from 'react';

import React, { Fragment } from 'react';

import React, { memo } from 'react';

import React, { forwardRef } from 'react';

// to pass a ref through a component to one of its children
import React, { lazy, Suspense } from 'react';

// And some many others hooks functions or components from third-party libraries
```

## React details

Difference between default export (work if A has the default export, whatever the name) vs named imported who name matter (myA and Something should exist)

```{javascript}
// only have one default export impossible but as many named exports as you'd like
import B, { myA, Something as XSomething } from './A'
```

If you want to use absolute path for import, [check this section](https://create-react-app.dev/docs/importing-a-component#absolute-imports)

---
# Css frameworks during research

Check [these awesome recommendations](https://github.com/troxler/awesome-css-frameworks?tab=readme-ov-file) for css frameworks

The [simplecss framework](https://simplecss.org/demo) is a very lightweight class-less css framework to stylize your webapp (you can acces the [test page](https://test.simplecss.org/))

[for code hightlight](https://highlightjs.org/)
