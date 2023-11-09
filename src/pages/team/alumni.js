import { Col, Row } from "react-bootstrap";

import Layout from "../../components/layout/Layout";
import Section from "../../components/Section";
import TeamMember from "../../components/TeamMember";
import YAML from "../../utils/YAML";

function Group({ children }) {

    if (!children || children.length === 0) {
        return <></>;
    }

    const columns = children.map((child, i) =>
        <Col xs={12} sm={6} md={4} lg={3} key={i} >
            {child}
        </Col>
    );

    return <Row>
        {columns}
    </Row>;
}

export default function AlumniPage({ undergraduates }) {

    const undergraduatesAsHTML = undergraduates.map((el, i) => {
        return <TeamMember
            key={i}
            name={el.name}
            position={el.position}
            img={el.image}
            when={el.when}
            url={el.url}
        />;
    });

    return (
        <Layout menu="Alumni">

            <p>Meet our distinguished alumni! Click on profile picture to open their personal websites.</p>

            <Section>
                <Section.Title>Undergraduate Students</Section.Title>
                <Group>
                    {undergraduatesAsHTML}
                </Group>
            </Section>

        </Layout>
    );
}

export async function getStaticProps() {

    const students = await YAML.read("data", "team", "students.yml");

    const undergraduates = students.filter(el => el.status === "former" && el.degree === "undergraduate");

    return {
        props: {
            undergraduates
        },
    };
}
