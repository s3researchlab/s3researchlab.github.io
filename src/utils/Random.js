export default class Random {

    /**
     * @param {number} min the lower number
     * @param {number} max the higher number
     * @returns a random number between min and max (both included):
     */
    static nextInt(min, max) {

        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /**
     * @param {array} array the elements to be selected
     * @returns a random element from the array
     */
    static nextEl(array) {

        const index = Random.nextInt(0, array.length - 1);

        return array[index];
    }
}
