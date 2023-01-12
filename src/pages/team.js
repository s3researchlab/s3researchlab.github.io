import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout/Layout";

function Member({ name, description, img, url }) {

    return <a href={url} target="_blank">
        <img className="rounded mb-2 img-fluid" src={`images/profile-photo/${img}`} width={180} />
        <p className="text-light mb-0">{name}</p>
        <p className="small mb-3 text-muted">{description}</p>
    </a>;
}

function Group({ children }) {

    if (!children) {
        children = <p>To be Announced</p>;
    }

    if (!Array.isArray(children)) {
        children = [children];
    }

    const columns = children.map((child, i) =>
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

            <h4>Principal Investigator</h4>

            <Member name="Thiago Ferreira" description="University of Michigan-Flint" img="thiago-ferreira.jpg" url="http://umich.edu/~thiagod" />

            <h4>Affiliated Faculty Members</h4>

            <Group>
                <Member name="Jeffrey Yackley" description="University of Michigan-Flint" img="jeff.jpg" url="http://umich.edu/~jyackley" />

            </Group>

            <h4>Current Undergraduate Students</h4>

            <Group></Group>

            <h4>Alumni</h4>

            <Group>
                <Member name="Tyler Gibbard" description="2022 Undergraduate Research Opportunity Program (UROP)" img="tyler-gibbard.png" />
                <Member name="Amanda Binu" description="2022 Undergraduate Research Opportunity Program (UROP)" img="amanda-binu.png" />
            </Group>

        </Layout>
    );
}

export default TeamPage;
