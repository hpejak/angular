"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comedy = void 0;
const Movie_1 = require("./Movie");
class Comedy extends Movie_1.Movie {
    constructor(grade, name) {
        super(grade, name);
    }
    ageAppropriate() {
        return 5;
    }
    getInfo() {
        return super.getInfo();
    }
}
exports.Comedy = Comedy;
