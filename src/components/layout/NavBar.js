import Link from "next/link";
import { useRouter } from "next/router";

import { Navbar, Container, Nav } from "react-bootstrap";
import DarkModeNavItem from "../DarkModeNavItem";

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

function NavBar() {

    return (
        <Navbar expand="sm" bg="light">
            <Container >
                <Navbar.Collapse>
                    <Nav>
                        <NavLink href="/" exact><i className="bi bi-house"></i>Home</NavLink>
                        <NavLink href="/team"><i className="bi bi-people"></i>Team</NavLink>
                        <NavLink href="/projects"><i className="bi bi-table"></i>Projects</NavLink>
                        <NavLink href="/publications"><i className="bi bi-file-earmark-text"></i>Publications</NavLink>
                        <NavLink href="/contact"><i className="bi bi-envelope"></i>Contact</NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Toggle className="text-light" />
                <Nav className="ms-auto">
                    <DarkModeNavItem />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
