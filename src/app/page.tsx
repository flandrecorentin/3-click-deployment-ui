'use client'

import CodePanel from "../components/CodePanel";

function Page() {
    return (
        <div className="App">
            <p>description</p>
            <h2>Installation</h2>
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