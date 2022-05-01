import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../../entities/User";


interface ReduxState{
    loggedInUser: User,
    loggedIn: boolean
}

const initialState: ReduxState ={
    loggedInUser: {} as User,
    loggedIn: false
}

const user = createSlice({
    name: 'USER',
    initialState: initialState,
    reducers: {
        signin: (state, action) => {
            state.loggedInUser = new User(action.payload.email, action.payload.password)
            state.loggedIn = true
        },
        signout: state => {
            state.loggedInUser = {} as User
            state.loggedIn = false
        }
    }
})



export const { signin, signout } = user.actions;
export default user.reducer;