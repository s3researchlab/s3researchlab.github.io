import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import Link from "next/link";

const technologies = [
    "Machine Learning",
    "Evolutionary Algorithms",
    "Natural Language Processing",
    "Bio-inspired Algorithms",
    "Artificial Intelligence",
    "Deep Learning",
];

function SocialIcon({ href, icon, children }) {

    return (
        <Link href={href} target="_blank" style={{"color": "white"}}>
                <i className={`${icon} me-2 `}  ></i> {children}
        </Link>
    );
}

function IndexPage() {

    const [index, setIndex] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setIndex(count => count + 1);

        }, 2500);

        return () => clearInterval(interval);
    }, []);


    if (index == technologies.length) {
        setIndex(0);
    }

    return (
        <Layout menu="Home">
            <div className="text-center banner">
                <div className="mb-5">
                    <h1 className="fw-bold text-success">{technologies[index]}</h1>
                    <h2>applied to software systems development</h2>
                </div>
                <p className="mb-5 text-center">Smart technologies in all aspects of the design, implementation, evaluation, and verification of software systems</p>
                <div className="mb-5">
                    <Link href="./projects" className="btn btn-primary">Explore Projects</Link>
                </div>
                <div>
                    <SocialIcon icon="bi bi-github" href="https://github.com/s3researchlab">GitHub</SocialIcon>
                </div>
            </div>
        </Layout>
    );
}

export default IndexPage;
