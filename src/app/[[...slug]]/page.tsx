import {ClientOnly} from "./client";

export function generateStaticParams() {
    return [{ slug: [''] }, { slug: ['home'] }];
}

export default function Page() {
    return <ClientOnly />
}