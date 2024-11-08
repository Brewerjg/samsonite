import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "Samsonite Powerwashing and Painting"}
                </title>
            </Head>
        </>
    )
}

export default PageHead