// Use to statically generate routes at build time
export async function generateStaticParams() {

    // const data = await fetch('https://.../posts').then((res) => res.json());
    const data = [{ id: 'flip-host', name: 'flip-host.sh'},{ id: 'init-host', name: 'init-host.sh'}]

    return data.map((script) => ({
        id: script.id,
        name: script.id
    }))
}

export default async function Page({
    params,
}: {
    params: Promise<{ id: string , name: string}>
}) {

    const { id } = await params

    return (
        <h1>this is script id={id}</h1>
        // <p>name: {name}</p>
    );
}