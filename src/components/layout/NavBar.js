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
        <Navbar expand="lg" fixed="top" id="sideNav" bg="light">
            <Container>

                <a className="navbar-brand" href="/">
                    <img className="img-fluid" src="images/logo-long-name.png" />
                </a>

                <Navbar.Toggle />

                <Navbar.Collapse className="justify-content-end">
                    <Nav className="me-2">
                        <NavLink href="/" exact>Home</NavLink>
                        <NavLink href="/team">Team</NavLink>
                        <NavLink href="/projects">Projects</NavLink>
                        <NavLink href="http://websites.umich.edu/~thiagod/publications">Publications</NavLink>
                        <NavLink href="/contact">Contact</NavLink>
                    </Nav>
                    <Link href="/join-us">
                        <a class="btn btn-sm btn-primary">Join Us</a>
                    </Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
