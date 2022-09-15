import { Container } from "react-bootstrap";

import Head from "./Head";
import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children, title, menu }) {

    menu = menu || title;

    return (
        <>
            <Head title={menu} />
            <header>
                <NavBar />
            </header>
            <main>
                <Container>
                    <h5 className="mb-3">{title}</h5>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
