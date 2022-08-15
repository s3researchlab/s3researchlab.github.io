import { Row, Col, Container } from "react-bootstrap";

import Head from "./Head";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children, title, menu }) {

    menu = menu || title;

    return (
        <>
            <Head page={title} />
            <header>
                <NavBar />
            </header>
            <main>
                <Container>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
