import fs from "fs";
import path from "path";

class PathUtils {

    static get(...str) {

        return path.join(...[...str]);
    }

    static listFiles(fullPath) {

        return new Promise((resolve, reject) => {

            fs.readdir(fullPath, (error, files) => {

                if (error) reject(error);
                else resolve(files.map(f => PathUtils.get(fullPath, f)));
            });
        });
    }

    static readFileContent(fullPath) {

        return new Promise((resolve, reject) => {

            fs.readFile(fullPath, "utf8", (error, data) => {

                if (error) reject(error);
                else resolve(data);
            });
        });
    }
}

export default PathUtils;
