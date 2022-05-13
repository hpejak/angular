import {Coach} from "./Coach";

export class GolfCoach implements Coach{
    getDailyWorkouts(): string {
        return "Hit 100 balls at the golf range";
    }

}
