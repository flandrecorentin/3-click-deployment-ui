'use client'

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation';
import AboutPage from "./about";

const App = dynamic(() => import('../App'), { ssr: false })
const About = dynamic(() => import('../About'), { ssr: false })

export function ClientOnly() {
    const {slug} = useParams();

    let content;
    if (slug == undefined)
        content = <App/>
    else if (slug[0] == "contact") {
        content = <About/>
    }

    return <div>{content}</div>
}