import Head from "next/head";

import { Container } from "react-bootstrap";

import Footer from "./Footer";
import TopBar from "./TopBar";

function Layout({ children, menu, className = ""}) {

    let page = menu == "Home" ? "" : menu;
    let title = menu == "Home" ? "" : `${menu} - `;

    return (
        <>
            <Head>
                <title>{`${title} S3 Research Lab`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header>
                <TopBar />
            </header>
            <main>
                <Container className={className}>
                    <h3 className="text-dark">{page}</h3>
                    {children}
                </Container>
            </main>

            <Footer />
        </>
    );
}

export default Layout;
