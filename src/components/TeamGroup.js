import { Col, Row } from "react-bootstrap";

export default function TeamGroup({ children }) {

    if (!children || children.length === 0) {
        return <></>;
    }

    const columns = children.map((child, i) =>
        <Col xs={12} sm={6} md={4} key={i} className="mb-3">
            {child}
        </Col>
    );

    return <>
        <Row>
            {columns}
        </Row>
    </>;
}
