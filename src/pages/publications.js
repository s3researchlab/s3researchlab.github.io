import { useState } from "react";
import { useRouter } from "next/router";
import { Col } from "react-bootstrap";

import Layout from "../components/layout/Layout";
import CollapseGroup from "../components/CollapseGroup";

import bibtex2html from "bibtex2html";

const groups = {
    "journal": { order: 1, title: "Refereed Journal Papers" },
    "conference": { order: 2, title: "Refereed Conference Papers" },
    "book": { order: 3, title: "Book Chapters" },
    "short-paper": { order: 4, title: "Refereed Short Papers, Videos, Demos, and Posters" },
    "no-proceedings": { order: 5, title: "Workshop and Conferences without Proceedings" },
    "invited-talks": { order: 6, title: "Major Invited Talks" },
    "thesis": { order: 7, title: "Thesis" },
    "unrefereed": { order: 8, title: "Unrefereed Publications" },
    "unrefereed-poster": { order: 9, title: "Unrefereed Conference Posters" },
    "under-review": { order: 10, title: "Under Review" }
};

for (let i = 2000; i < 2040; i++) {
    groups[i] = { order: 2040 - i, title: i + "" };
}

function createCollapseGroup(title, entries) {

    title = groups[title].title;

    let items = entries.map((entry) => {

        return (
            <li className="ms-1" key={entry.key}>
                <span dangerouslySetInnerHTML={{ __html: entry.HTML }} />
            </li>
        );
    });

    return (
        <CollapseGroup title={title} key={title}>
            <ol>
                {items}
            </ol>
        </CollapseGroup>
    );
}

function createGroupsBy(array, key) {

    let groups = new Map();

    array.forEach(item => {

        const prop = item[key.toUpperCase()];

        if (!groups.has(prop)) {
            groups.set(prop, []);
        }

        groups.get(prop).push(item);
    });

    return groups;
}

function createHTML(groupedList) {

    let keys = Array.from(groupedList.keys());

    keys = keys.sort((a, b) => {
        return groups[a].order - groups[b].order;
    });

    return keys.map(key => createCollapseGroup(key, groupedList.get(key)));
}

function filterOut(array, searchTerm = "") {

    return array.filter(item => {

        if (!searchTerm) {
            return true;
        }

        return item.HTML.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

export default function PublicationsPage({ entries }) {

    const router = useRouter();

    const [publicationType, setPublicationType] = useState("year");
    const [searchTerm, setSearchTerm] = useState("");

    function handlePublicationType(event) {
        setPublicationType(event.target.value);
    }

    function handleSearchTerm(event) {

        const value = event.target.value;

        router.replace({
            query: { ...router.query, q: value },
        });

        setSearchTerm(value);
    }

    let items = filterOut(entries, searchTerm);

    let groupedList = createGroupsBy(items, publicationType);

    let groupsAsHtml = createHTML(groupedList);

    return (
        <Layout menu="Publications" className="publications">

            <p>This is not the full list. We will update it as soon as possible.</p>

            <form className="row g-1 mb-3">
                <Col xs="4" sm="3" md="2" lg="2" xl="1">
                    <select className="form-select" value={publicationType} onChange={handlePublicationType}>
                        <option value="year">Year</option>
                        <option value="annote">Type</option>
                    </select>
                </Col>
                <Col xs="8" sm="9" md="10" lg="10" xl="11">
                    <input type="search" className="form-control" placeholder="Search papers" autoComplete="off" value={searchTerm} onChange={handleSearchTerm} />
                </Col>
            </form>

            {groupsAsHtml}

        </Layout>
    );
}

export async function getStaticProps() {

    const res = await fetch("https://raw.githubusercontent.com/thiagodnf/thiagodnf.github.io/main/data/references.bib");

    const content = await res.text();

    return {
        props: {
            entries: new bibtex2html().parse(content)
        }
    };
}
