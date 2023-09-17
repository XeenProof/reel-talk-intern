import React,{ createContext } from "react";

export interface UserFormFormat{
    displayName?: string;
    location?: string;
    description?: string;

    counter: number;
}

interface UserFormFormatV2{
    data: UserFormFormat,
    mutators: Record<string, ()=>void>
}




interface Props{
    children:React.ReactNode
}

const UserFormContext = createContext<UserFormFormatV2>({data:{counter:2}, mutators:{}});

export class UserFormContextProvider extends React.Component<Props,UserFormFormatV2>{
    state = {data:{counter:2}, mutators:{}};

    updateState(data: UserFormFormat):void {
        this.setState({data});
    }

    // state.mutators.add = () => {
    //     let counter = this.state.data.counter+1;
    //     this.updateState({...this.state.data, counter:counter});
    // }

    constructor(props:Props){
        super(props);
    }
    

    render(): React.ReactNode {
        return (
            <UserFormContext.Provider value={this.state}>
                {this.props.children}
            </UserFormContext.Provider>
        )
    }
}

export default UserFormContext;