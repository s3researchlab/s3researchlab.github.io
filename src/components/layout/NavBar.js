import Link from "next/link";
import { useRouter } from "next/router";

import { Navbar, Container, Nav, Row } from "react-bootstrap";

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
        <Link href={href} className={`nav-link ${isActive}`}>{children}
        </Link>
    </>;
}

function NavBar() {

    return (
        <>
            <div className="topbar d-flex align-items-center">
                <Container className=" d-flex justify-content-between align-items-center">
                    <div>
                        <a href="#" >
                            <img className="img-fluid" src="images/logo-long-name.png"/>
                        </a>
                    </div>
                    <div>
                        <Link href="/join-us" className="btn btn-primary">Join Us</Link>
                    </div>
                </Container>
            </div>
            <Navbar expand="lg" bg="light">
                <Navbar.Toggle className="ms-3" />
                <Container >
                    <Navbar.Collapse className="jusstify-content-end">
                        <Nav>
                            <NavLink href="/" exact><i className="bi bi-house"></i>Home</NavLink>
                            <NavLink href="/team"><i className="bi bi-people"></i>Team</NavLink>
                            <NavLink href="/projects"><i className="bi bi-table"></i>Projects</NavLink>
                            <NavLink href="/publications"><i className="bi bi-file-earmark-text"></i>Publications</NavLink>
                            <NavLink href="/contact"><i className="bi bi-envelope"></i>Contact</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
}

export default NavBar;
