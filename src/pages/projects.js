import { Card, ListGroup, Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";

function ProjectsPage() {

    return (
        <Layout title="Projects">

            <p>We're always looking for talented, motivated people to join us. If you're interested in the things we do and you'd like to join us, or visit our lab, please reach out to the principal investigator. See below the current opportunities in our lab.</p>

            <h4>Ph.D. Research Projects</h4>
            <p>Coming soon.</p>

            <h4>Master's Research Projects</h4>
            <p>Coming soon.</p>

            <h4>Undergraduate Research Projects</h4>
            <p>if you are a undergraduate student at UM-Flint, please consider applying for the following research projects</p>

            <Card className="mt-4">
                <Card.Header>
                    Undergraduate Research Opportunity Program (UROP)
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        <span>
                            Selecting the best set of software requirements for the next software release by using optimization algorithms
                        </span>
                        <Button variant="success" href="https://umflint.infoready4.com/#competitionDetail/1891954">
                            Apply
                        </Button>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        <span>
                            Mining and Data Analysis on GitHub Repositories
                        </span>
                        <Button variant="success" href="https://umflint.infoready4.com/#competitionDetail/1891855">
                            Apply
                        </Button>
                    </ListGroup.Item>
                    <ListGroup.Item className="d-flex justify-content-between align-items-center">
                        <span>
                            Selecting the best set of software requirements for the next software release by using optimization algorithms
                        </span>
                        <Button variant="success" href="https://umflint.infoready4.com/#competitionDetail/1891856">
                            Apply
                        </Button>
                    </ListGroup.Item>
                </ListGroup>
            </Card>
        </Layout>
    );
}

export default ProjectsPage;
