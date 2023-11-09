import { Col, Row } from "react-bootstrap";

import Layout from "../../components/layout/Layout";
import Section from "../../components/Section";
import TeamMember from "../../components/TeamMember";
import TeamGroup from "../../components/TeamGroup";
import YAML from "../../utils/YAML";
import Array from "../../utils/Array";

export default function AlumniPage({ undergraduates }) {

    const undergraduatesAsHTML = undergraduates.map((el, i) => {
        return <TeamMember key={i} {...el} />;
    });

    return (
        <Layout menu="Alumni">

            <p>Meet our distinguished alumni! Click on profile picture to open their personal websites.</p>

            <Section>
                <Section.Title>Undergraduate Students</Section.Title>
                <TeamGroup>
                    {undergraduatesAsHTML}
                </TeamGroup>
            </Section>

        </Layout>
    );
}

export async function getStaticProps() {

    const team = await YAML.read("data", "team.yml");

    const alumni = Array.filter(team, { status: "inactive" });

    return {
        props: {
            undergraduates: Array.filter(alumni, { role: "undergraduate" })
        },
    };
}
