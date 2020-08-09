import initialState from "../store/initialState";
import { ACTION_GET_POSTS } from "../actionTypes/actionTypes";
//state=initialState.posts=>this is to assign default value-->state-prev state
//action param contains the data returned from getAllPOSTs action -->value returned by actions with action type and payloads

const postReducer=(state=initialState.posts,action)=>{
    
    switch(action.type){
        case ACTION_GET_POSTS:
            return action.payload;
        //default should always return the prev state
        default:
            
            return state;
    }
};
export default postReducer;