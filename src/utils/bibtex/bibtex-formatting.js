
class BibTexFormatting {

    static getHTML(entry) {

        let format = BibTexFormatting.getFormatting(entry);

        format = format.replace("{AUTHOR}", BibTexFormatting.getAuthors(entry));
        format = format.replace("{TITLE}", BibTexFormatting.getTitle(entry));
        format = format.replace("{BOOKTITLE}", `. In: <em>${entry.BOOKTITLE}</em>`);
        format = format.replace("{JOURNAL}", `. In: <em>${entry.JOURNAL}</em>`);
        format = format.replace("{ADDRESS}", `. ${entry.ADDRESS}`);
        format = format.replace("{PUBLISHER}", BibTexFormatting.getPublisher(entry));
        format = format.replace("{PAGES}", BibTexFormatting.getPages(entry));
        format = format.replace("{MONTH}", BibTexFormatting.getMonth(entry));
        format = format.replace("{YEAR}", `. ${entry.YEAR}`);
        format = format.replace("{EDITOR}", BibTexFormatting.getEditors(entry));
        format = format.replace("{TYPE}", `. ${entry.TYPE}`);
        format = format.replace("{SERIES}", `. ${entry.SERIES}`);
        format = format.replace("{ISBN}", `ISBN: ${entry.ISBN}`);
        format = format.replace("{SCHOOL}", `. ${entry.SCHOOL}`);
        format = format.replace("{VOLUME}", ` ${entry.VOLUME}`);
        format = format.replace("{NUMBER}", BibTexFormatting.getNumber(entry));
        format = format.replace("{DOI}", BibTexFormatting.getDOI(entry));
        format = format.replace("{NOTE}", BibTexFormatting.getNote(entry));

        return format;
    }

    static getFormatting(entry) {

        if (entry.type == "inproceedings" || entry.type == "conference") {
            return "{AUTHOR}{TITLE}{BOOKTITLE}{NOTE}{ADDRESS}{PUBLISHER}{MONTH}{YEAR}{PAGES}{DOI}.";
        } else if (entry.type == "article") {
            return "{AUTHOR}{TITLE}{JOURNAL}{VOLUME}{NUMBER}{YEAR}{PAGES}{DOI}";
        } else if (entry.type == "book") {
            return "AUTHOR (YEAR). <em><a class='text-primary fw-bold' href='#'>TITLE</a><\/em>. ADDRESS: PUBLISHER.";
        } else if (entry.type == "phdthesis" || entry.type == "mastersthesis") {
            return "{AUTHOR}{TITLE}{NOTE}{TYPE}{SCHOOL}{YEAR}";
        } else if (entry.type == "misc") {
            return "{AUTHOR}";
        } else if (entry.type == "techreport") {
            return "AUTHOR (YEAR). <a class='text-primary fw-bold' href='#'>TITLE</a>. <em>INSTITUTION. NUMBER. Tech. Rep.<\/em>";
        } else if (entry.type == "inbook") {
            return "{AUTHOR}{TITLE}{BOOKTITLE}, Edited by {EDITOR}{PUBLISHER}{YEAR}{PAGES}, {ISBN}{DOI}.";
        } else if (entry.type == "unpublished") {
            return "{AUTHOR}{TITLE}{TYPE}{SCHOOL}{NOTE}{YEAR}";
        } else {
            return "AUTHOR (YEAR). <a class='text-primary fw-bold' href='#'>TITLE</a>. In <em>BOOKTITLE<\/em>, pp. PAGES, ADDRESS.";
        }
    }

    static getEditors(entry) {

        if(!entry.EDITORS){
            return "";
        }

        let formatted = [];

        entry.EDITORS.forEach((author, i) => {
            formatted.push(author);
        });

        return formatted.join(", ");
    }

    static getAuthors(entry) {

        if(!entry.AUTHORS){
            return "";
        }

        let highlightIndex = -1;

        if (entry["AUTHOR+AN"]) {

            let an = entry["AUTHOR+AN"].split("=");

            if (an[1] && an[1] === "highlight") {
                highlightIndex = parseInt(an[0]) - 1;
            }
        }

        let formatted = [];

        entry.AUTHORS.forEach((author, i) => {

            if (i === highlightIndex) {
                formatted.push(`<strong>${author}</strong>`);
            } else {
                formatted.push(author);
            }
        });

        return formatted.join(", ");
    }

    static getMonth(entry) {

        if (!entry.MONTH) {
            return "";
        }

        const months = ["", "Jan", "Fev", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        return ", " + months[entry.MONTH];
    }

    static getPages(entry) {

        if (!entry.PAGES) {
            return "";
        }

        return ", pp. " + entry.PAGES;
    }

    static getPublisher(entry) {

        if (!entry.PUBLISHER) {
            return "";
        }

        return `: ${entry.PUBLISHER}`;
    }


    static getNumber(entry) {

        if (!entry.NUMBER) {
            return "";
        }

        return `.${entry.NUMBER}`;
    }

    static getTitle(entry) {

        if (!entry.TITLE) {
            return "";
        }

        return `. "${entry.TITLE}"`;
    }

    static getNote(entry) {

        if (!entry.NOTE) {
            return "";
        }

        return `. ${entry.NOTE}`;
    }

    static getDOI(entry) {

        if (!entry.DOI) {
            return "";
        }

        return `. DOI: <a target="_blank" href="https://www.doi.org/${entry.DOI}">${entry.DOI}</a>`;
    }

}

export default BibTexFormatting;
