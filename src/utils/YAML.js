import yaml from "js-yaml";

import PathUtils from "./PathUtils";

export default class YAML {

    static async read(...url) {

        const path = PathUtils.get(...url);

        const contents = await PathUtils.readFileContent(path);

        return yaml.load(contents);
    }
}
