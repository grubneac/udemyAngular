"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Circle_1 = require("./Circle");
var Rectangle_1 = require("./Rectangle");
var myArray = new Array();
myArray.push(new Circle_1.Circle(5, 10, 20));
myArray.push(new Rectangle_1.Rectangle(5, 10, 15, 20));
myArray.forEach(function (element) {
    console.log(element.getInfo());
    console.log(element.calcArea());
    console.log();
});
