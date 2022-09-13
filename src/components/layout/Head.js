import Head from "next/head";

import Package from "../../../package.json";

function Component({ title }) {

    title = title == "Home" ? "" : title;
    title = title ? `${title} - ` : "";

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{`${title} S3 Research Lab`}</title>

            <meta name="author" content={Package.author} />
            <meta name="description" content={Package.description} />
            <meta name="keywords" content={Package.keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#120B1C" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="apple-mobile-web-app-title" content={Package.author} />

            <meta property="og:title" content={Package.author} />
            <meta property="og:url" content={Package.homepage} />
            <meta property="og:description" content={Package.description} />
            <meta property="og:image" content="images/profile.jpg" />
            <meta property="og:locale" content="en_US" />
            <meta property="og:locale:alternate" content="pt_BR" />

        </Head>
    );
}

export default Component;
