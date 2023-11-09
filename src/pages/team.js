import Link from "next/link";

import Array from "../utils/Array";
import YAML from "../utils/YAML";
import Layout from "../components/layout/Layout";
import Section from "../components/Section";
import TeamMember from "../components/TeamMember";
import TeamGroup from "../components/TeamGroup";

export default function TeamPage({ pi, affiliated, undergraduate, master, phd, postdoc }) {

    const piAsHTML = pi.map((el, i) => <TeamMember key={i} {...el} />);
    const affiliatedAsHTML = affiliated.map((el, i) => <TeamMember key={i} {...el} />);
    const postdocAsHTML = postdoc.map((el, i) => <TeamMember key={i} {...el} />);
    const phdAsHTML = phd.map((el, i) => <TeamMember key={i} {...el} />);
    const masterAsHTML = master.map((el, i) => <TeamMember key={i} {...el} />);
    const undergraduateAsHTML = undergraduate.map((el, i) => <TeamMember key={i} {...el} />);

    return (
        <Layout menu="Team">

            <p>Meet our team! Click on profile picture to open their personal websites.</p>

            <Section>
                <Section.Title>Principal Investigator</Section.Title>
                <TeamGroup>
                    {piAsHTML}
                </TeamGroup>
            </Section>

            <Section>
                <Section.Title>Affiliated Faculty Members</Section.Title>
                <TeamGroup>
                    {affiliatedAsHTML}
                </TeamGroup>
            </Section>

            <Section>
                <Section.Title>Postdoctoral Researcher Fellows</Section.Title>
                <TeamGroup>
                    {postdocAsHTML}
                </TeamGroup>
            </Section>

            <Section>
                <Section.Title>Ph.D. Students</Section.Title>
                <TeamGroup>
                    {phdAsHTML}
                </TeamGroup>
            </Section>

            <Section>
                <Section.Title>Master's Students</Section.Title>
                <TeamGroup>
                    {masterAsHTML}
                </TeamGroup>
            </Section>

            <Section>
                <Section.Title>Undergraduate Students</Section.Title>
                <TeamGroup>
                    {undergraduateAsHTML}
                </TeamGroup>
            </Section>

            <p className="py-3"><Link href="/team/alumni">Click here for Alumni</Link></p>

        </Layout>
    );
}

export async function getStaticProps() {

    const team = await YAML.read("data", "team.yml");

    const members = Array.filter(team, { status: "active" });

    return {
        props: {
            pi: Array.filter(members, { role: "pi" }),
            affiliated: Array.filter(members, { role: "affiliated" }),
            undergraduate: Array.filter(members, { role: "undergraduate" }),
            master: Array.filter(members, { role: "master" }),
            phd: Array.filter(members, { role: "phd" }),
            postdoc: Array.filter(members, { role: "postdoc" })
        },
    };
}
