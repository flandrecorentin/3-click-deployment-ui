'use client'

import CodePanel from "../components/CodePanel";
import {dictionnary} from "@/context/Dictionnary";

function Page() {
    return (
        <div className="App">
            <p>{dictionnary.root.description}</p>
            <h2>{dictionnary.root.installation}</h2>
            <pre><code className="language-html">test</code></pre>
            <CodePanel/>
            <h2>Scripts</h2>
            <CodePanel/>
            <CodePanel/>
            <CodePanel/>
            <CodePanel/>
        </div>
    );
}

export default Page;