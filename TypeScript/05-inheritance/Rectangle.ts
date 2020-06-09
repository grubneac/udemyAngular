import { Shape } from "./Shape";

export class Rectangle extends Shape{
    
    constructor(theX:number, theY: number, 
                private _width: number, private _lenght: number){
        super(theX,theY);
    }

    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }
    
    public get lenght(): number {
        return this._lenght;
    }
    public set lenght(value: number) {
        this._lenght = value;
    }

    getInfo(): string{
        return super.getInfo() + ` width=${this._width} length=${this._lenght}`;
    }
    
}