"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var ColfCoach_1 = require("./ColfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach();
var myGolfCoach = new ColfCoach_1.ColfCoach();
var myCoach = [];
myCoach.push(myCricketCoach);
myCoach.push(myGolfCoach);
myCoach.forEach(function (element) {
    console.log(element.getDailyWorkout());
});
