import type { Metadata } from 'next'
import '../style/simple.min.css'
import '../style/custom.simple.css'

import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata: Metadata = {
    title: '3-click-deployment',
    description: 'Web site created with Next.js. (not Create React App anymore)',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
            <Header></Header>
            <main id="root">{children}</main>
            <Footer></Footer>
        </body>
        </html>
    )
}