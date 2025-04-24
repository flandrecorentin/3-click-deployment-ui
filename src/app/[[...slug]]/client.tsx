'use client'

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation';

const App = dynamic(() => import('../App'), { ssr: false })
const About = dynamic(() => import('../About'), { ssr: false })
const Scripts = dynamic(() => import('../Scripts'), { ssr: false })
const NotFound = dynamic(() => import('../NotFound'), { ssr: false })

export function ClientOnly() {
    const {slug} = useParams();

    let content;
    if (slug == undefined)
        content = <App/>
    else if (slug[0] == "about") {
        content = <About/>
    }else if (slug[0] == "scripts") {
        content = <Scripts/>
    } else {
        content = <NotFound/>
    }

    return <div>{content}</div>
}