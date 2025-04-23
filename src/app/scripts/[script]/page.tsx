export async function generateStaticParams() {
    return [
        { script: 'init-host' },
        { script: 'flip-host' },
        { script: 'install-agent' },
    ];
}

const ScriptPage = ({ params }) => {
    const { script } = params;

    return (
        <div>
            <h1>Script: {script}</h1>
            <p>This is the page for the script: {script}</p>
        </div>
    );
};

export default ScriptPage;