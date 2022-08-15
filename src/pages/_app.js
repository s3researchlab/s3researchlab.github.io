import "bootstrap/dist/css/bootstrap.css";
import "academicons/css/academicons.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "../../public/css/style.scss";

import Layout from  "../components/layout/Layout";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
    return <Layout><Component {...pageProps} /></Layout>;
}
