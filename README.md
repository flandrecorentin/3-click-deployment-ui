# 3-click-deployment-ui

This project is automatically deployed by 
3-click-deployment-ui

### Development

To start application locally
```
npm run dev
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
# Css frameworks

Check [these awesome recommendations](https://github.com/troxler/awesome-css-frameworks?tab=readme-ov-file) for css frameworks

The [simplecss framework](https://simplecss.org/demo) is a very lightweight class-less css framework to stylize your webapp (you can acces the [test page](https://test.simplecss.org/))

[for code hightlight](https://highlightjs.org/)

---
# Create React App default README.md

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
