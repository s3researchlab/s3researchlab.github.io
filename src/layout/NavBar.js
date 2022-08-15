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
        <li className="nav-item">
            <Link href={href}>
                <a className={`nav-link ${isActive}`}>{children}</a>
            </Link>
        </li>
    </>;
}

function NavBar() {

    return (
        <Navbar collapseOnSelect expand="md" fixed="top" id="sideNav" bg="light">
            <Container fluid>
                <Navbar.Brand href="/">S3 Research Lab</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <ul className="navbar-nav">
                        <NavLink href="/" exact>Home</NavLink>
                        <NavLink href="/people">People</NavLink>
                        <NavLink href="/publications">Publications</NavLink>
                        <NavLink href="/contact-us">Contact Us</NavLink>
                    </ul>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
