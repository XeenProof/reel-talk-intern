import { useCallback, useReducer } from "react"
import { movie } from "../api/apiFormats"
import apis from "../api/api"

type StateType = {
    movies: movie[]
}

const initState:StateType = {
    movies: []
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

    const queryMovie = useCallback((requery:boolean) => {
        let value = apis.getAllMovies();
        let payload = {key:"movies", value:value};
        dispatch({
            type: REDUCER_ACTION_TYPE.UPDATE_FIELD,
            payload: payload
        })
    }, [])

    return {state, queryMovie}
}

type QueryContextType = ReturnType<typeof useQueryContext>