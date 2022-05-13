"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
class Movie {
    constructor(_grade, _name) {
        this._grade = _grade;
        this._name = _name;
    }
    get grade() {
        return this._grade;
    }
    set grade(value) {
        this._grade = value;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    getInfo() {
        return `Movie: ${this._name}, Rated with: ${this._grade}`;
    }
}
exports.Movie = Movie;
