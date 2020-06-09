import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myArray: Shape[] = new Array();

myArray.push(new Shape(10, 15));
myArray.push(new Circle(5, 10, 20));
myArray.push(new Rectangle(5, 10, 15, 20));

myArray.forEach(element => {
    console.log(element.getInfo());
    
});


