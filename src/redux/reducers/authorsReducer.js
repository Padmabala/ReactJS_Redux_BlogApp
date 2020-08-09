import { ACTION_GET_AUTHORS } from "../actionTypes/actionTypes"
import initialState from "../store/initialState";

const authorsReducer=(state=initialState.authors,action)=>{
    switch(action.type){
        case ACTION_GET_AUTHORS:
            return action.payload;
        default:
            return state;
    }
}
export default authorsReducer;