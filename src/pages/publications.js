import { useState } from "react";
import { useRouter } from "next/router";

import Layout from "../components/layout/Layout";
import CollapseGroup from "../components/CollapseGroup";
import BibTexUtils from "../utils/bibtex-util";

const groups = {
    "journal": { order: 1, title: "Refereed Journal Papers" },
    "conference": { order: 2, title: "Refereed Conference Papers" },
    "short-paper": { order: 3, title: "Refereed Short Papers, Videos, Demos, and Posters" },
    "no-proceedings": { order: 4, title: "Workshop and Conferences without Proceedings" },
    "unrefereed": { order: 5, title: "Unrefereed Publications" },
    "invited-talks": { order: 6, title: "Major Invited Talks" },
    "thesis": { order: 7, title: "Thesis" },
    "under-review": { order: 8, title: "Under Review" }
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
            <ul>
                {items}
            </ul>
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

function PublicationsPage({ entries }) {

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

    let items = filterOut(entries.formatted, searchTerm);

    let groupedList = createGroupsBy(items, publicationType);

    let groupsAsHtml = createHTML(groupedList);

    return (
        <Layout title="Publications">

            <div className="row d-flex align-items-center">
                <div className="col-12 col-md">
                    <p>This is not the full list. We will update it as soon as possible.</p>
                </div>
                <div className="col-12 col-md-auto">
                    <div autoComplete="off" className="mb-3">
                        <div className="d-flex justify-content-start">
                            <div className="me-2">
                                <select className="form-select" value={publicationType} onChange={handlePublicationType}>
                                    <option value="year">Year</option>
                                    <option value="annote">Type</option>
                                </select>
                            </div>
                            <div>
                                <input type="search" className="form-control" placeholder="Search papers" autoComplete="off" value={searchTerm} onChange={handleSearchTerm} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {groupsAsHtml}

        </Layout>
    );
}

export async function getStaticProps() {

    return {
        props: {
            entries: BibTexUtils.parse("data/references.bib")
        },
    };
}

export default PublicationsPage;
