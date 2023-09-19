import { Genre, Movie} from "./apiFormats";
import movieJson from "./Json/movies.json"
import genreJson from "./Json/genre.json"

const getAllMovies = ():Movie[] => {return movieJson.movies;}
const getAllGenres = ():Genre[] => {return genreJson.genres;}

const apis = {
    getAllMovies,
    getAllGenres
}

export default apis;