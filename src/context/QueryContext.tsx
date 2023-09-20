import { ReactElement, createContext, useCallback, useReducer } from "react"
import { Genre, Movie } from "../api/apiFormats"
import apis from "../api/api"

/**
 * The QueryConext is mean as an access point to the backend.
 * It's only job is to query the required contents, since no mutations are needed
 */

type StateType = {
    movies: Movie[],
    genres: Genre[]
}

const initState:StateType = {
    movies: [],
    genres: []
}

const enum REDUCER_ACTION_TYPE{
    UPDATE_FIELD
}

type ReducerAction = {
    type: REDUCER_ACTION_TYPE,
    payload?: Record<string, any>
}

const reducer = (state: StateType, action: ReducerAction): StateType => {
    switch(action.type){
        case REDUCER_ACTION_TYPE.UPDATE_FIELD:
            if(!action.payload){return state;}
            return {...state, [action.payload.key]:action.payload.value}
        default:
            return state;
    }
}

const useQueryContext = (initState:StateType) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const queryMovie = useCallback((requery:boolean = false) => {
        if(requery || state.movies.length === 0){
            let value = apis.getAllMovies();
            let payload = {key:"movies", value:value};
            dispatch({
                type: REDUCER_ACTION_TYPE.UPDATE_FIELD,
                payload: payload
            })
        }
        return state.movies;
    }, [state.movies])

    const queryGenre = useCallback((requery:boolean = false) => {
        if(requery || state.genres.length === 0){
            let value = apis.getAllGenres();
            let payload = {key:"genres", value:value};
            dispatch({
                type: REDUCER_ACTION_TYPE.UPDATE_FIELD,
                payload: payload
            })
        }
        return state.genres;
    }, [state.genres])

    return {state, queryMovie, queryGenre}
}

type QueryContextType = ReturnType<typeof useQueryContext>

const initContextState: QueryContextType = {
    state: initState,
    queryMovie: (requery?:boolean) => [],
    queryGenre: (requery?:boolean) => [],
}

export const QueryContext = createContext<QueryContextType>(initContextState);

type ChildrenType = {
    children?: ReactElement|undefined
}

export const QueryContextProvider = ({children}:ChildrenType):ReactElement => {
    return (
    <QueryContext.Provider value={useQueryContext(initState)}>
        {children}
    </QueryContext.Provider>)
}