import Link from "next/link";
import { Card, ListGroup } from "react-bootstrap";

import CollapseGroup from "../components/CollapseGroup";
import Layout from "../components/layout/Layout";
import YAML from "../utils/YAML";
import Array from "../utils/Array";
import Section from "../components/Section";

function generateInitiative(i, initiative) {

    const projectsAsHTML = initiative.projects.map((project, index) =>
        <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            <CollapseGroup title={project.title} collapsed={true}>
                <p className="text-secondary">{project.description}</p>
                <Link href={project.url} target="_blank">Apply Now!</Link>
            </CollapseGroup>
        </ListGroup.Item>
    );

    return <div key={i}>
        <Section>
            <Section.Title>{initiative.name}</Section.Title>
            <p>{initiative.description}</p>
        </Section>
        <Card className="my-4" >
            <Card.Header>Projects</Card.Header>
            <ListGroup variant="flush">
                {projectsAsHTML}
            </ListGroup>
        </Card>
    </div>;
}

export default function ProjectsPage({ initiatives }) {

    let initiativesAsHTML = initiatives.map((el, i) => {
        return generateInitiative(i, el);
    });

    if(initiativesAsHTML.length === 0){
        initiativesAsHTML = <p>No opportunities available right now. Please come back later</p>;
    }

    console.log(initiativesAsHTML.length)

    return (
        <Layout menu="Projects">

            <p>We're always looking for talented, motivated people to join us. If you're interested in the things we do and you'd like to join us, or visit our lab, please reach out to the principal investigator. See below the current opportunities in our lab.</p>

            {initiativesAsHTML}

        </Layout>
    );
}

export async function getStaticProps() {

    const initiatives = await YAML.read("data", "projects.yml");

    return {
        props: {
            initiatives: Array.filter(initiatives, { active: true })
        },
    };
}
