import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
                      rel="stylesheet"
                      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
                      crossOrigin="anonymous"/>
                <link rel='stylesheet' href="/css/globals.css"/>

            </Head>
            <body>
                <div className="container">
                    <Main/>
                </div>
                <NextScript/>
            </body>
        </Html>
    )
}