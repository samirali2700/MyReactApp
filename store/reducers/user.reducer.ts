import { User } from "../../entities/User";
import { SIGNIN } from "../actions/user.action";


interface ReduxState{
    loggedInUser: User
}

const initialState: ReduxState = {
    loggedInUser: {} as User
}

function userReducer(state = initialState, action: any){
    action.payload === undefined ? '' : console.log("New State:",action.payload)

    switch(action.type){
        case SIGNIN:
            return {...state, loggedInUser: new User(action.payload.email, action.payload.password)}
        default:
            return state;
    }
}


export default userReducer;