class IdUtils {

    static generateId(text) {
        return "p-" + text.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "-");
    }
}

export default IdUtils;
