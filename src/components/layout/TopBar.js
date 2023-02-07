import Link from "next/link";

import { Container, Button } from "react-bootstrap";

function TopBar() {

    return (
        <nav className="topbar d-flex align-items-center">
            <Container className="d-flex justify-content-between align-items-center">
                    <Link href="/">
                    <img className="img-fluid" src="images/logo-long-name.png"/>
                </Link>
                <Button variant="primary" href="/projects" className="d-none d-md-block">
                    Join Us
                </Button>
            </Container>
        </nav>
    );
}

export default TopBar;
