import { Col, Row } from "react-bootstrap";
import yaml from "js-yaml";
import Layout from "../components/layout/Layout";
import PathUtils from "../utils/path-utils";

function Member({ id, name, position, img, url, when }) {

    return <>
        <div className="member" key={id}>
            <div className="d-flex">
                <div className="flex-shrink-0">
                    <a href={url} target="_blank">
                        <img className="rounded" src={`images/profile-photo/${img}`} width={65} />
                    </a>
                </div>
                <div className="flex-grow-1 ms-2">
                    <p className="text-dark fw-bold mb-0">{name}</p>
                    <p className="mb-0">{position}</p>
                    <p className="small text-start text-secondary">{when}</p>
                </div>
            </div>
        </div >
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
        <Col xs={12} sm={6} key={i} >
            {child}
        </Col>
    );

    return <Row>
        {columns}
    </Row>;
}

function filterOutFaculty(faculty, status) {

    return faculty.filter(el => el.status === status).map((p, i) => {
        return <Member
            id={i}
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
        return <Member
            id={i}
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

            <h4 className="text-dark">Principal Investigator</h4>
            <hr />

            <Group>
                {filterOutFaculty(faculty, "pi")}
            </Group>

            <h4 className="text-dark">Affiliated Faculty Members</h4>
            <hr />

            <Group>
                {filterOutFaculty(faculty, "affiliated")}
            </Group>

            <h4 className="text-dark">Current Ph.D. Students</h4>
            <hr />

            <Group>
                {filterOutStudents(students, "current", "phd")}
            </Group>

            <h4 className="text-dark">Current Master's Students</h4>
            <hr />

            <Group>
                {filterOutStudents(students, "current", "master")}
            </Group>

            <h4 className="text-dark">Current Undergraduate Students</h4>
            <hr />

            <Group>
                {filterOutStudents(students, "current", "undergraduate")}
            </Group>

            <h4 className="text-dark">Alumni</h4>
            <hr />

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
