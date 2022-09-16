import bibtexParser from "bibtex-parse";
import { Console } from "console";

import BibTexFormatting from "./bibtex/bibtex-formatting";
import BibTexSorting from "./bibtex/bibtex-sorting";

const fs = require("fs");
const sorter = new BibTexSorting();

sorter.addSortingCriterion("YEAR");
sorter.addSortingCriterion("MONTH");
sorter.addSortingCriterion("AUTHOR");
sorter.addSortingCriterion("TITLE", false);

class BibTexUtils {

    static getRequiredKeys() {

        return [
            "AUTHOR",
            "AUTHOR+AN",
            "ANNOTE",
            "YEAR"
        ];
    }

    static getMissingKeys(entry) {

        const requiredKeys = BibTexUtils.getRequiredKeys();
        const keys = Object.keys(entry);
        const missingKeys = [];

        for (let i = 0; i < requiredKeys.length; i++) {

            let requiredKey = requiredKeys[i];

            if (!keys.includes(requiredKey)) {
                missingKeys.push(requiredKey);
            }
        }

        return missingKeys;
    }

    static parse(file) {

        let fileContent = fs.readFileSync(file, "utf8");

        let entries = bibtexParser.entries(fileContent);

        let formattedEntries = [];

        entries.forEach(entry => {

            if(entry.AUTHOR){
                entry["AUTHORS"] = entry.AUTHOR.split(" and ").map(e => e.trim());
            }
            entry["HTML"] = BibTexFormatting.getHTML(entry);

            const missingKeys = BibTexUtils.getMissingKeys(entry);

            if (missingKeys.length === 0) {
                formattedEntries.push(entry);
            } else {
                console.error("Missing keys for", `${entry.key} ${JSON.stringify(missingKeys)}`);
            }
        });

        formattedEntries = sorter.sort(formattedEntries);

        return {
            formatted: formattedEntries,
            groupedByYear: BibTexUtils.createGroupBy("YEAR", formattedEntries),
            groupedByType: BibTexUtils.createGroupBy("ANNOTE", formattedEntries)
        };
    }

    static createGroupBy(key, entries){

        const group = {};

        entries.forEach(entry => {

            if(!group[entry[key]]){
                group[entry[key]] = [];
            }

            group[entry[key]].push(entry);
        });

        return group;
    }

    static format(entry) {

        let formatting = BibTexUtils.getFormatting(entry);

        [
            "AUTHOR", "TITLE", "BOOKTITLE", "YEAR", "PAGES",
            "ADDRESS", "JOURNAL", "VOLUME", "NUMBER", "PUBLISHER",
            "SCHOOL", "ORGANIZATION", "ISSN", "ISBN", "SCHOOL",
            "ORGANIZATION", "TYPE", "HOWPUBLISHED", "NOTE",
            "INSTITUTION", "CHAPTER", "EDITOR", "SERIES", "TYPE"
        ].forEach(key => {
            formatting = formatting.replace(key, BibTexUtils.getFieldAsString(entry, key));
        });

        // Add a link to paper's url
        if (entry.getFieldAsString("DOI")) {
            formatting = formatting.replace("href='#'", `href='${entry.getFieldAsString("DOI")}'`);
            // formatting += " (<a href='" + entry.getFieldAsString("DOI") + "' target='_blank'>doi</a>)";
        }

        return formatting;
    }
}

export default BibTexUtils;
