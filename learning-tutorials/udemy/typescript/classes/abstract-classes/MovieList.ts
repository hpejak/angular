import {Drama} from "./Drama";
import {Movie} from "./Movie";
import {Comedy} from "./Comedy";

let interstellar: Drama = new Drama(10, "Interstellar")
let ace_ventura: Comedy = new Comedy(7, "Ace Ventura")

let movies: Movie [] = [];

movies.push(interstellar)
movies.push(ace_ventura)

movies.forEach( movie =>
    console.log(`${movie.getInfo()}, For age of: ${movie.ageAppropriate()} \n`)
)
