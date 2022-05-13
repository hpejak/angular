import {Movie} from "./Movie";

export class Comedy extends Movie {

    constructor(grade: number, name: string) {
        super(grade, name);
    }

    ageAppropriate(): number {
        return 5;
    }

    getInfo(): string {
        return super.getInfo();
    }
}
