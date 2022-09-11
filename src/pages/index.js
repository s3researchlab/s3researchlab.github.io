import Layout from "../components/layout/Layout";

function IndexPage() {

    return (
        <Layout title="Welcome to S3 Research Lab" menu="Home">

            <h3 className="mt-5">Our goal is to research the use of smart technologies in all aspects of the design, implementation, evaluation, and verification of software systems</h3>

            <button className="mt-5 btn btn-grad-primary">Explore Projects</button>

        </Layout>
    );
}

export default IndexPage;
