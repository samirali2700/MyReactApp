
import thunk from "redux-thunk";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers/reducers";

export default configureStore({
    reducer: rootReducer,
    middleware: [thunk]
   
})

// const rootReducer = combineReducers({
//     user: userReducer
// })


// export const store = createStore(rootReducer, applyMiddleware(thunk))



