import { Col, Row } from "react-bootstrap";
import yaml from "js-yaml";

import Layout from "../components/layout/Layout";
import PathUtils from "../utils/path-utils";
import Section from "../components/Section";
import TeamMember from "../components/TeamMember";

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

function filterOutFaculty(faculty, status) {

    return faculty.filter(el => el.status === status).map((p, i) => {
        return <TeamMember
            key={i}
            name={p.name}
            position={p.position}
            img={p.image}
            when={p.affiliation}
            url={p.url}
        />;
    });
}

function filterOutStudents(students, status, degree) {

    return students.filter(el => el.status === status && el.degree === degree).map((el, i) => {
        return <TeamMember
            key={i}
            name={el.name}
            position={el.position}
            img={el.image}
            when={el.when}
            url={el.url}
        />;
    });
}

function TeamPage({ students, faculty }) {

    return (
        <Layout menu="Team">

            <p>Meet our team! Click on profile picture to open their personal websites.</p>

            <Section>
                <Section.Title>Principal Investigator</Section.Title>
                <Group>
                    {filterOutFaculty(faculty, "pi")}
                </Group>
            </Section>

            <Section>
                <Section.Title>Affiliated Faculty Members</Section.Title>
                <Group>
                    {filterOutFaculty(faculty, "affiliated")}
                </Group>
            </Section>

            {/* <Section>
                <Section.Title>Current Ph.D. Students</Section.Title>
                <Group>
                    {filterOutStudents(students, "current", "phd")}
                </Group>
            </Section> */}

            {/* <Section>
                <Section.Title>Current Master's Students</Section.Title>
                <Group>
                    {filterOutStudents(students, "current", "master")}
                </Group>
            </Section> */}

            <Section>
                <Section.Title>Current Undergraduate Students</Section.Title>
                <Group>
                    {filterOutStudents(students, "current", "undergraduate")}
                </Group>
            </Section>

            <Section>
                <Section.Title>Alumni</Section.Title>

                <p className="mb-3 mt-3 text-light">Undergraduate Students</p>

                <Group>
                    {filterOutStudents(students, "former", "undergraduate")}
                </Group>
            </Section>

        </Layout>
    );
}

export async function getStaticProps() {

    const studentsFile = PathUtils.get("data", "team", "students.yml");
    const facultyFile = PathUtils.get("data", "team", "faculty.yml");

    const studentContent = await PathUtils.readFileContent(studentsFile);
    const facultyContent = await PathUtils.readFileContent(facultyFile);

    const students = yaml.load(studentContent);
    const faculty = yaml.load(facultyContent);

    return {
        props: {
            students,
            faculty
        },
    };
}

export default TeamPage;
