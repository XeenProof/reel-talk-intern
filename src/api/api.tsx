import { movie } from "./apiFormats";
import movieJson from "./Json/movies.json"

const getAllMovies = ():movie[] => {return movieJson.movies;}

const apis = {
    getAllMovies
}

export default apis;