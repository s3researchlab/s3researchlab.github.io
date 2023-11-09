export default class Array {

    static filter(array, query) {

        function search(user) {
            return Object.keys(this).every((key) => user[key] === this[key]);
        }

        return array.filter(search, query);
    }
}
