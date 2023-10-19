import Layout from "../components/layout/Layout";
import { useState, useEffect } from "react";
import Link from "next/link";

import Package from "../../package.json";

const technologies = [
    "Genetic Algorithms",
    "Evolutionary Algorithms",
    "Bio-inspired Algorithms",
    "Ant Colony Optimization",
    "Simulated Annealing",
    "Tabu Search",
];

const areas = [
    "Software Requirements",
    "Software Testing",
    "Software Maintenance",
    "Software Refactoring",
];

function SocialIcon({ href, icon, children }) {

    return (
        <Link href={href} target="_blank" className="btn">
            <i className={`${icon} me-2 `}  ></i> {children}
        </Link>
    );
}

export default function IndexPage() {

    const [indexTechnology, setIndexTechnology] = useState(0);
    const [indexArea, setIndexArea] = useState(0);

    useEffect(() => {

        const intervalTechnoly = setInterval(() => {

            setIndexTechnology(count => count + 1);

        }, 2000);

        const intervalArea = setInterval(() => {

            setIndexArea(count => count + 1);

        }, 3000);

        return () => clearInterval(intervalTechnoly) && clearInterval(intervalArea);
    }, []);


    if (indexTechnology == technologies.length) {
        setIndexTechnology(0);
    }
    if (indexArea == areas.length) {
        setIndexArea(0);
    }

    return (
        <Layout menu="Home">
            <div className="text-center banner">
                <div className="mb-5">
                    <h1 className="fw-bold text-dark">{technologies[indexTechnology]}</h1>
                    <h2>applied to {areas[indexArea]}</h2>
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
