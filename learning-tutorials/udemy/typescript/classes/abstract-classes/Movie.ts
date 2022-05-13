export abstract class Movie {

    protected constructor(private _grade: number, private _name: string) {
    }

    get grade(): number {
        return this._grade;
    }

    set grade(value: number) {
        this._grade = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    getInfo(){
        return `Movie: ${this._name}, Rated with: ${this._grade}`
    }

    abstract ageAppropriate(): number;
}
