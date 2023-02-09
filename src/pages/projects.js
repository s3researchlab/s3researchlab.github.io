import { Card, ListGroup, Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";

function ResearchInitiative({ title, children }) {

    return (
        <Card className="mt-4">
            <Card.Header>
                {title}
            </Card.Header>
            <ListGroup variant="flush">
                {children}
            </ListGroup>
        </Card>
    );
}

function ResearchProject({ title, url }) {

    return (
        <ListGroup.Item className="d-flex justify-content-between align-items-center">
            <span>
                {title}
            </span>
            <Button variant={url ? "success" : "secondary"} disabled={url ? false : true} href={url}>
                {url ? "Apply" : "Soon"}
            </Button>
        </ListGroup.Item>
    );
}

function ProjectsPage() {

    return (
        <Layout menu="Projects">

            <p>We're always looking for talented, motivated people to join us. If you're interested in the things we do and you'd like to join us, or visit our lab, please reach out to the principal investigator. See below the current opportunities in our lab.</p>

            <h4>Ph.D. Research Projects</h4>
            <p>Coming soon.</p>

            <h4>Master's Research Projects</h4>
            <p>Coming soon.</p>

            <h4>Undergraduate Research Projects</h4>
            <p>if you are a undergraduate student at UM-Flint, please consider applying for the following research projects</p>

            <ResearchInitiative title="CIT START Program">
                <ResearchProject
                    title="Towards Meaningful and Real Refactoring Operations"
                    url=""
                />
            </ResearchInitiative>

            <ResearchInitiative title="Undergraduate Research Opportunity Program (UROP)">
                <ResearchProject
                    title="Arduino-powered Autonomous 'Follow Me' Car With Obstacle Avoidance"
                    url="https://umflint.infoready4.com/#competitionDetail/1891954"
                />
                <ResearchProject
                    title="Mining and Data Analysis on GitHub Repositories"
                    url="https://umflint.infoready4.com/#competitionDetail/1891855"
                />
                <ResearchProject
                    title="Selecting the best set of software requirements for the next software release by using optimization algorithms"
                    url="https://umflint.infoready4.com/#competitionDetail/1891856"
                />
            </ResearchInitiative>
        </Layout>
    );
}

export default ProjectsPage;
