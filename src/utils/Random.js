export default class Random {

    static nextInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    static nextEl(array) {

        const index = Random.nextInt(0, array.length - 1);

        return array[index];
    }
}
