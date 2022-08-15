import Head from "next/head";

import Package from "../../../package.json";

function Component({page}) {

    const title = `${Package.author}`;

    return (
        <Head>
            <meta charSet="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <title>S3 Research Lab</title>

            <meta name="author" content={Package.author} />
            <meta name="description" content={Package.description} />
            <meta name="keywords" content={Package.keywords} />
            <meta name="robots" content="index, follow" />
            <meta name="theme-color" content="#021329" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />
            <meta name="apple-mobile-web-app-title" content={Package.author}/>

            {/* <link rel="apple-touch-icon" sizes="180x180" href="images/profile.jpg"/>
            <link rel="icon" type="image/png" href="images/favicons/favicon-32x32.jpg"/>
            <link rel="icon" type="image/png" sizes="32x32" href="images/favicons/favicon-32x32.jpg"/>
            <link rel="icon" type="image/png" sizes="16x16" href="images/favicons/favicon-16x16.jpg"/>
            <link rel="manifest" href="images/favicons/site.webmanifest"></link> */}

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
