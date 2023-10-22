import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import Link from "next/link";

import Package from "../../package.json";
import Random from "../utils/Random";
import YAML from "../utils/YAML";

function SocialIcon({ href, icon, children }) {

    return (
        <Link href={href} target="_blank" className="btn">
            <i className={`${icon} me-2 `}  ></i> {children}
        </Link>
    );
}

export default function IndexPage({ areas, technologies }) {

    const [area, setArea] = useState(areas[0]);
    const [technology, setTechnology] = useState(technologies[0]);

    useEffect(() => {

        const interval = setInterval(() => {

            setArea(Random.nextEl(areas));
            setTechnology(Random.nextEl(technologies));

        }, 1500);

        return () => clearInterval(interval);
    }, []);

    return (
        <Layout menu="Home">
            <div className="text-center banner">
                <div className="mb-5">
                    <h1 className="fw-bold text-dark">{technology}</h1>
                    <h2>applied to {area}</h2>
                </div>
                <p className="mb-5 text-center">{Package.description}</p>
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

export async function getStaticProps() {

    const researchTopics = await YAML.read("data", "research-topics.yml");

    return {
        props: researchTopics
    };
}
