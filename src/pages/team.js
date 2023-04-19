import { Col, Row } from "react-bootstrap";
import yaml from "js-yaml";
import Layout from "../components/layout/Layout";
import PathUtils from "../utils/path-utils";

function Member({ name, position, img, url, when }) {

    return <>
        <a href={url} target="_blank">
            <img className="rounded mb-2 img-fluid" src={`images/profile-photo/${img}`} width={180} />
        </a>
        <p className="text-light mb-0">{name}</p>
        <p className="small mb-0 text-start">{position}</p>
        <p className="small mb-3 text-start">{when}</p>
    </>;
}

function Group({ children }) {

    if (!children || children.length === 0) {
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

function filterOutFaculty(faculty, status) {

    return faculty.filter(el => el.status === status).map(p => {
        return <Member
            name={p.name}
            position={p.position}
            img={p.image}
            when={p.affiliation}
            url={p.url}
        />;
    });
}

function filterOutStudents(students, status, degree) {

    return students.filter(el => el.status === status && el.degree === degree).map(el => {
        return <Member
            name={el.name}
            position={el.position}
            img={el.image}
            when={el.when}
        />;
    });
}

function TeamPage({ students, faculty }) {

    return (
        <Layout menu="Team">

            <p>Meet our team! Click on profile picture to open their personal websites.</p>

            <h4>Principal Investigator</h4>

            <Group>
                {filterOutFaculty(faculty, "pi")}
            </Group>

            <h4>Affiliated Faculty Members</h4>

            <Group>
                {filterOutFaculty(faculty, "affiliated")}
            </Group>

            <h4>Current Ph.D. Students</h4>

            <Group>
                {filterOutStudents(students, "current", "phd")}
            </Group>

            <h4>Current Master's Students</h4>

            <Group>
                {filterOutStudents(students, "current", "master")}
            </Group>

            <h4>Current Undergraduate Students</h4>

            <Group>
                {filterOutStudents(students, "current", "undergraduate")}
            </Group>

            <h4>Alumni</h4>

            <p className="mb-3 mt-3 text-light">Undergraduate Students</p>

            <Group>
                {filterOutStudents(students, "former", "undergraduate")}
            </Group>

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
