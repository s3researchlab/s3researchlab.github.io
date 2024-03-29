import { Row, Col } from "react-bootstrap";
import Layout from "../components/layout/Layout";

export default function ContactPage() {

    return (
        <Layout menu="Contact">
            <Row>
                <Col sm="12" md="8">

                    <p>We're are currently housed in the <a href="https://www.umflint.edu/cit/">College of Innovation &amp; Technology</a> at <a href="https://www.umflint.edu/"> University of Michigan-Flint</a></p>

                    <hr/>

                    <address>
                        510 Murchie Science Building<br/>
                        303 E. Kearsley Street <br />
                        Flint, Michigan 48502-1950, USA<br />
                    </address>

                    <img className="img-fluid mb-3 cit-logo-dark d-none" src="images/cit-logo-dark.png" width="400px"/>
                    <img className="img-fluid mb-3 cit-logo-light " src="images/cit-logo-light.png" width="400px"/>

                </Col>
                <Col sm="12" md="4">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8511.913487020587!2d-83.69364197666431!3d43.02046106744844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88238217c25d9827%3A0xf5cdab96dcc98e0c!2sUniversity%20of%20Michigan-Flint!5e0!3m2!1sen!2sus!4v1662905510786!5m2!1sen!2sus" width="100%" height="250" style={{"border": "0"}} allowFullScreen="allowfullscreen"  referrerPolicy="no-referrer-when-downgrade"></iframe>
                </Col>
            </Row>
        </Layout>
    );
}
