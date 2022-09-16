class ConvertUtils {

    static toInt(value) {

        if (typeof value === "number") {
            return value;
        }

        if (typeof value !== "string") {
            return undefined;
        }

        const converted = Number(value);

        if (Number.isInteger(converted)) {
            return converted;
        }

        return undefined;
    }
}

export default ConvertUtils;
