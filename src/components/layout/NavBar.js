import Link from "next/link";
import { useRouter } from "next/router";

import { Navbar, Container, Nav } from "react-bootstrap";

function NavLink({ href, exact, children }) {

    const { pathname } = useRouter();

    let isActive = "";

    if (exact) {
        if (pathname === href) {
            isActive = "active";
        }
    } else if (pathname.startsWith(href)) {
        isActive = "active";
    }

    return <>
        <Link href={href}>
            <a className={`nav-link ${isActive}`}>{children}</a>
        </Link>
    </>;
}

function NavBar() {

    return (
        <Navbar expand="md" fixed="top" id="sideNav" bg="light">
            <Container >
                <Navbar.Brand href="/">S3 Research Lab</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Nav>
                        <NavLink href="/" exact>Home</NavLink>
                        <NavLink href="/people">People</NavLink>
                        <NavLink href="/publications">Publications</NavLink>
                        <NavLink href="/contact-us">Contact Us</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
