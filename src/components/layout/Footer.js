import Script from "next/script";

const injectGA = () => {

    if (typeof window == "undefined") {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    gtag("js", new Date());

    gtag("config", "G-S1P93RNMN0");
};

function Footer() {

    return (
        <footer>
            <Script src="https://code.jquery.com/jquery-3.6.0.min.js" crossOrigin="anonymous"></Script>

            <Script async src="https://www.googletagmanager.com/gtag/js?id=G-HNGSCV50W9"></Script>
            <Script>{injectGA()}</Script>

            <Script src="js/script.js"/>
        </footer>
    );
}

export default Footer;
