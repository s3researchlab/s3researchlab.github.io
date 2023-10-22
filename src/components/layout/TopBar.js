import Link from "next/link";

import { Container, Navbar, Nav } from "react-bootstrap";
import NavLinkDarkMode from "../NavLinkDarkMode";
import { useRouter } from "next/router";

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

    return <Link href={href} className={`nav-link ${isActive}`}>{children}</Link>;
}

export default function TopBar() {

    return (
        <Navbar expand="md" bg="dark" fixed="top" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        src="images/logo.png"
                        width="169"
                        height="32"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto"></Nav>
                    <Nav>
                        <NavLink href="/team">Team</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="/publications">Publications</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                        <li className="nav-item">
                            <div className="vr d-none d-md-flex h-100 mx-md-2 text-white"></div>
                            <hr className="d-md-none my-2 text-white-50" />
                        </li>
                        <NavLinkDarkMode />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
