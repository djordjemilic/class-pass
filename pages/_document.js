import {Html, Main, Head, NextScript} from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head>
                <title>Georges ClassPass</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>

            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}

export default Document;