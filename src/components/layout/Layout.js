import Head from "next/head";

import { Container } from "react-bootstrap";

import NavBar from "./NavBar";
import Footer from "./Footer";
import TopBar from "./TopBar";

function Layout({ children, title, menu }) {

    menu = menu || title;

    title = title == "Home" ? "" : title;
    title = title ? `${title} - ` : "";

    return (
        <>
            <Head>
                <title>{`${title} S3 Research Lab`}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <header>
                <TopBar />
                <NavBar />
            </header>
            <main>
                <Container>
                    <h3>{menu}</h3>
                    {children}
                </Container>
            </main>

            <Footer />
        </>
    );
}

export default Layout;
