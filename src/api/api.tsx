import { Movie} from "./apiFormats";
import movieJson from "./Json/movies.json"

const getAllMovies = ():Movie[] => {return movieJson.movies;}

const apis = {
    getAllMovies
}

export default apis;