import yaml from "js-yaml";
import { Card, ListGroup, Button, Badge } from "react-bootstrap";

import Layout from "../components/layout/Layout";
import PathUtils from "../utils/path-utils";
import IdUtils from "../utils/id-utils";

function generateResearchProject(project) {

    const id = IdUtils.generateId(project.title);

    const badgeColors = {
        "phd": "warning",
        "master": "info",
        "undergraduate": "danger",
    };

    const buttonColors = {
        "Soon": "outline-warning",
        "Open": "outline-green",
        "Closed": "outline-secondary",
    };

    const url = project.status == "Closed"? "" : project.url;
    const disabled = project.status == "Closed"? "disabled" : "";

    return  (
        <ListGroup.Item className="d-flex justify-content-between align-items-center" key={id}>
            <div className="collapse-group me-3" >
                <p data-bs-toggle="collapse" className="collapsed mb-0" data-bs-target={`#${id}`} >
                    <i className={"bi bi-chevron-right"} /><span className="text-white">{project.title}</span>
                </p>
                <div className={"collapse"} id={id}>
                    <p className="small ms-4 mt-3">{project.description}</p>
                    <div className="ms-3 my-2">
                        {project.targets.map((target, key) => {
                            return <Badge bg={badgeColors[target]} text="dark" className="ms-2" key={key}>{target}</Badge>;
                        })}
                    </div>
                </div>
            </div>
            <Button variant={buttonColors[project.status]} href={url} className={disabled}>
                {project.status}
            </Button>
        </ListGroup.Item>
    );
}
function generateResearchInitiative(initiative) {

    const key = IdUtils.generateId(initiative.name);

    const projectsAsHTML = initiative.projects.map(p => {
        return generateResearchProject(p);
    });

    return <div key={key}>
        <h4>{initiative.name}</h4>
        <p>{initiative.description}</p>
        <Card className="mt-4" >
            <Card.Header>
                Projects
            </Card.Header>
            <ListGroup variant="flush">
                {projectsAsHTML}
            </ListGroup>
        </Card>
    </div>;
}

function ProjectsPage({ initiatives }) {

    const initiativesAsHTML = initiatives.map(initiative => {
        return generateResearchInitiative(initiative);
    });

    return (
        <Layout menu="Projects">

            <p>We're always looking for talented, motivated people to join us. If you're interested in the things we do and you'd like to join us, or visit our lab, please reach out to the principal investigator. See below the current opportunities in our lab.</p>

            {initiativesAsHTML}

        </Layout>
    );
}

export async function getStaticProps() {

    const dir = PathUtils.get("data", "projects");

    const files = await PathUtils.listFiles(dir);

    const contents = await Promise.all(files.map(PathUtils.readFileContent));

    const initiatives = contents.map(yaml.load);

    return {
        props: {
            initiatives
        },
    };
}

export default ProjectsPage;
