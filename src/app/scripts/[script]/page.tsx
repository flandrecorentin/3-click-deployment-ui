export default async function Page({
    params
}: {
    params: Promise<{ script: string }>
}) {

    const { script } = await params

    return (
        <ul>
            script page {script}
        </ul>
    )
}