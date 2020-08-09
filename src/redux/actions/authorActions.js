import xmlHTTPRequestData from "../../services/xmlHTTPRequestData";
import { GET_AUTHORS_API } from "../../constants/serverUrls";
import { postsApiCallStart, postsApiCallSuccess } from "./ajaxCallActions";
import { ACTION_GET_AUTHORS } from "../actionTypes/actionTypes";

export const get_authors=()=>{
    return async dispatch=>{
        dispatch(postsApiCallStart());
        const authors=await xmlHTTPRequestData(GET_AUTHORS_API,"GET");
        dispatch(postsApiCallSuccess);
        dispatch(loadAuthorsToRedux(authors));
        
    }
}
export const loadAuthorsToRedux=(authors)=>{
    return{
        type:ACTION_GET_AUTHORS,
        payload:authors
    }
}