import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout/Layout";

function Section({ children }) {

    return <>
        <h5 className="mb-3">{children}</h5>
        <hr className="pb-2" />
    </>;
}

function Member({ name, description, img, url }) {

    return <a href={url} target="_blank">
        <img className="rounded mb-2 img-fluid" src={`images/profile-photo/${img}`} width={180} />
        <p className="text-light mb-0">{name}</p>
        <p className="small mb-3 text-muted">{description}</p>
    </a>;
}

function Group({ children }) {

    if(!children){
        children = <p className="text-muted">To be Announced</p>;
    }

    if (!Array.isArray(children)) {
        children = [children];
    }

    const columns = children.map( (child, i)=>
        <Col xs={6} sm={4} md={2} key={i} >
            {child}
        </Col>
    );

    return <Row>
        {columns}
    </Row>;
}

function TeamPage() {

    return (
        <Layout title="Team">

            <p>Meet our team! Click on profile picture to open their personal websites.</p>

            <Section>Principal Investigator</Section>

            <Member name="Thiago Ferreira" description="University of Michigan-Flint" img="thiago-ferreira.jpg" url="http://umich.edu/~thiagod" />

            <Section>Affiliated Faculty Members</Section>

            <Group></Group>

            <Section>Current Undergraduate Students</Section>

            <Group></Group>

            <Section>Alumni</Section>

            <Group>
                <Member name="Tyler Gibbard" description="2022 Undergraduate Research Opportunity Program (UROP)" img="tyler-gibbard.png" />
                <Member name="Amanda Binu" description="2022 Undergraduate Research Opportunity Program (UROP)" img="amanda-binu.png" />
            </Group>

        </Layout>
    );
}

export default TeamPage;
