import getConfig from "next/config";

const injectGA = () => {

    if (typeof window == "undefined") {
        return;
    }

    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}

    gtag("js", new Date());

    gtag("config", "G-EZ36G6P3MT");
};

function Footer() {

    const config = getConfig().publicRuntimeConfig;

    return (
        <div>
            <script src="https://code.jquery.com/jquery-3.6.0.min.js" crossOrigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></script>
            <script src={`${config.basePath}/js/script.js`}/>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-HNGSCV50W9"></script>
            <script>{injectGA()}</script>
        </div>
    );
}

export default Footer;
