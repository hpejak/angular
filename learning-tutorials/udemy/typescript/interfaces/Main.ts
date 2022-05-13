import {CricketCoach} from "./CricketCoach";
import {GolfCoach} from "./GolfCoach";
import {Coach} from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let coaches: Coach[] = [];
coaches.push(myCricketCoach);
coaches.push(myGolfCoach);

coaches.forEach(coach =>
console.log(coach.getDailyWorkouts())
)
