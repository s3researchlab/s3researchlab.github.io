import { Col, Container, Row } from "react-bootstrap";

function IndexPage() {

    return (
        <>
            <Container>

                <Row className="mt-5">
                    <Col sm="12">
                        <p class="text-primary text-uppercase mb-5">Welcome to S3 Research Lab</p>

                        <h3 class="mb-5">Our goal is to research the use of smart technologies in all aspects of the design, implementation, evaluation, and verification of software systems</h3>

                        <button className="btn btn-grad-primary">Explore</button>
                    </Col>

                </Row>

            </Container>

        </>
    );
}

export default IndexPage;
