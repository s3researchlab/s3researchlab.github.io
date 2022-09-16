
import ConvertUtils from "../convert-utils";

class BibTexSorting {

    constructor() {
        this.criteria = [];
    }

    addSortingCriterion(key, descending = true) {

        this.criteria.push(function (entry1, entry2) {

            let key1 = ConvertUtils.toInt(entry1[key]) || entry1[key];
            let key2 = ConvertUtils.toInt(entry2[key]) || entry2[key];

            if (key1 > key2) return descending ? -1 : 1;
            if (key1 < key2) return descending ? 1 : -1;

            return 0;
        });
    }

    sort(array) {

        const that = this;

        array.sort(function (entry1, entry2) {

            for (let i = 0; i < that.criteria.length; i++) {

                const criterion = that.criteria[i];

                const result = criterion(entry1, entry2);

                if (result !== 0) {
                    return result;
                }
            }
        });

        return array;
    }
}

export default BibTexSorting;
