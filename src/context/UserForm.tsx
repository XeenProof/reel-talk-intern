import { ReactElement, createContext, useCallback, useReducer } from "react";

type StateType = {
    display_name: string;
    location: string;
    description: string;

    DoBMonth: number;
    DoBDay: number;
    DoBYear: number;

    GenreId: number[];
    MovieId: number[];
}

const initState:StateType = {
    display_name: '',
    location: '',
    description: '',

    DoBMonth: 1,
    DoBDay: 1,
    DoBYear: 2001,

    GenreId: [],
    MovieId: []
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

const useUserFormContext = (initState:StateType) => {
    const [state, dispatch] = useReducer(reducer, initState)

    const updateField = useCallback((key:string, value:any) => {
        let payload = {key:key, value:value};
        dispatch({
            type: REDUCER_ACTION_TYPE.UPDATE_FIELD,
            payload: payload
        })
    }, [])

    return {state, updateField}
}

type UserFormContextType = ReturnType<typeof useUserFormContext>

const initContextState: UserFormContextType = {
    state: initState,
    updateField: (key:string, value:any) => {}
}

export const UserFormContext = createContext<UserFormContextType>(initContextState);

type ChildrenType = {
    children?: ReactElement|undefined
}

export const UserFormContextProvider = ({children}: ChildrenType):ReactElement => {
    return(
        <UserFormContext.Provider value={useUserFormContext(initState)}>
            {children}
        </UserFormContext.Provider>
    )
}