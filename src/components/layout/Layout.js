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
                <Container fluid className="pt-3 px-lg-5">
                    <h2 className="pb-2">{title}</h2>
                    <hr className="mt-2" />
                    <Row>
                        <Col sm="12">
                            {children}
                        </Col>
                    </Row>
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
