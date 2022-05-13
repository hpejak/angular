"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drama = void 0;
const Movie_1 = require("./Movie");
class Drama extends Movie_1.Movie {
    constructor(grade, name) {
        super(grade, name);
    }
    ageAppropriate() {
        return 12;
    }
    getInfo() {
        return super.getInfo();
    }
}
exports.Drama = Drama;
