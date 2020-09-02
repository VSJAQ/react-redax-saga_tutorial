import {combineReducers} from "redux";
import {postReducer} from "./postsReducr";

export const rootReducer = combineReducers({
    posts: postReducer,
})