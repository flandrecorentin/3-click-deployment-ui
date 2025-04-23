import {ClientOnly} from "../client";
import NotFoundPage from "./NotFound";

export function generateStaticParams() {
    return [{ slug: [''] }, { slug: ['home'] }];
}

export default function Page() {
    return <NotFoundPage />
}