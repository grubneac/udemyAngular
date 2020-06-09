import { CricketCoach } from "./CricketCoach";
import {ColfCoach} from "./ColfCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new ColfCoach();

let myCoach: Coach[] = [];
myCoach.push(myCricketCoach) ;
myCoach.push(myGolfCoach);

myCoach.forEach(element => {
    console.log(element.getDailyWorkout());
    
});