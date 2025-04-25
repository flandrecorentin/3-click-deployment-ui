import CodePanel from "../components/CodePanel";

function Page() {
    return (
        <div className="App">
            <p>description</p>
            <h2>Installation</h2>
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