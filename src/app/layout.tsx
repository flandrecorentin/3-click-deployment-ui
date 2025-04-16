import type { Metadata } from 'next'
import '../App.css' // If global css file

export const metadata: Metadata = {
    title: '3-click-deployment',
    description: 'Web site created with Next.js. (not Create React App anymore)',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        {/* Next.js can manage <head> tag with metadata object*/}
        {/*<head>*/}
            {/* Automatically added. This come from Create React App*/}
            {/*<meta charSet="utf-8"/>*/}
            {/*<meta name="viewport" content="width=device-width, initial-scale=1"/>*/}

            {/* Next.js can manages metadata automatically when they are inside the src/app folder*/}
            {/* Such as favicon.ico, icon.png, robots.txt (see https://nextjs.org/docs/app/building-your-application/optimizing/metadata#file-based-metadata)*/}
            {/*<link rel="icon" href="%PUBLIC_URL%/favicon.ico"/>*/}
            {/*<meta name="theme-color" content="#000000"/>*/}
            {/*<meta*/}
            {/*    name="description"*/}
            {/*    content="Web site created using create-react-app"*/}
            {/*/>*/}
            {/*<link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png"/>*/}
            {/*<link rel="manifest" href="%PUBLIC_URL%/src/app/manifest.json"/>*/}
            {/*<title>React App</title>*/}
        {/*</head>*/}
        <body>
            {/* This come from Create React App*/}
            {/*<noscript>You need to enable JavaScript to run this app.</noscript>*/}
            {/*<div id="root"></div>*/}

            <div id="root">{children}</div>
        </body>
        </html>
    )
}