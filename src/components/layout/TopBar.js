import Link from "next/link";

import { Container, Button, Navbar, Nav } from "react-bootstrap";
import DarkModeNavItem from "../DarkModeNavItem";
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

function TopBar() {

    return (
        <Navbar expand="md" bg="dark" fixed="top">
            <Container fluid>
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
                        {/* <NavLink href="/" exact><i className="bi bi-house"></i>Home</NavLink> */}
                        <NavLink href="/team"><i className="bi bi-people"></i>Team</NavLink>
                        <NavLink href="/projects"><i className="bi bi-table"></i>Projects</NavLink>
                        <NavLink href="/publications"><i className="bi bi-file-earmark-text"></i>Publications</NavLink>
                        <NavLink href="/contact"><i className="bi bi-envelope"></i>Contact</NavLink>
                        <DarkModeNavItem />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;
