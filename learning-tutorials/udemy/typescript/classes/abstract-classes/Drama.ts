import {Movie} from "./Movie";

export class Drama extends Movie{

    constructor(grade: number, name: string) {
        super(grade, name);
    }

    ageAppropriate(): number {
        return 12;
    }

    getInfo(): string {
        return super.getInfo();
    }
}
