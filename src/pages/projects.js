import { Card } from "react-bootstrap";
import Layout from "../components/layout/Layout";

function ProjectsPage() {

    return (
        <Layout title="Projects">

            {/* <p className="text-muted">Coming up soon!</p> */}

            <p className="text-muted">We're always looking for talented, motivated people to join us. If you're interested in the things we do and you'd like to join us, or visit our lab, please reach out to the principal investigator. See below the current opportunities in our lab.</p>

            <Card className="mt-4">
                <Card.Header>
                    Undergraduate Research Opportunity Program (UROP)
                </Card.Header>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-0">
                        <div className="me-auto">
                            Selecting the best set of software requirements for the next software release by using optimization algorithms
                        </div>
                        <a className="btn btn-sm btn-outline-success" href="https://umflint.infoready4.com/#competitionDetail/1891954">Apply</a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-0">
                        <div className="me-auto">
                            Mining and Data Analysis on GitHub Repositories
                        </div>
                        <a className="btn btn-sm btn-outline-success" href="https://umflint.infoready4.com/#competitionDetail/1891855">Apply</a>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center mb-0">
                        <div className="me-auto">
                            Selecting the best set of software requirements for the next software release by using optimization algorithms
                        </div>
                        <a className="btn btn-sm btn-outline-success" href="https://umflint.infoready4.com/#competitionDetail/1891856">Apply</a>
                    </li>
                </ul>
            </Card>
        </Layout>
    );
}

export default ProjectsPage;
