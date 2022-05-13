import {Shape} from "./Shape";

export class Rectangle extends Shape{

    constructor(x: number, y: number, private _width:number, private _length: number) {
        super(x, y);
    }


    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }


    getInfo(): string {
        return super.getInfo() +`, width=${this._width}, length=${this._length}`;
    }
}
