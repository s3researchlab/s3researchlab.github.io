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
                <div className="pt-5">
                    <h2 className="fw-bold text-dark">{technology}</h2>
                    <h3 className="my-2">applied to</h3>
                    <h2 className="fw-bold text-dark">{area}</h2>
                </div>
                <p className="pt-3 text-center">{Package.description}</p>
                <div className="pt-3">
                    <Link href="./projects" className="btn btn-primary">Explore Projects</Link>
                </div>
                <div className="pt-3">
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
