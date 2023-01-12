import { Container } from "react-bootstrap";

import Head from "./Head";
import NavBar from "./NavBar";
import Footer from "./Footer";
import TopBar from "./TopBar";

function Layout({ children, title, menu }) {

    menu = menu || title;

    return (
        <>
            <Head title={menu} />
            <header>
                <TopBar />
                <NavBar />
            </header>
            <main>
                <Container>
                    <h3>{title}</h3>
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default Layout;
