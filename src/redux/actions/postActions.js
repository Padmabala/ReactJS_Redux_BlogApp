import { ACTION_GET_POSTS } from "../actionTypes/actionTypes";
import { GET_POSTS_API } from "../../constants/serverUrls";
import fetchData from "../../services/fetchData";
import { postsApiCallStart, postsApiCallSuccess, postsApiCallFailure } from "./ajaxCallActions";


export const getAllPosts=()=>{
    /* can be used to call other actions and it can only return an function and not any value...provided by redux thunk*/
    return async dispatch => {
        // Can be used to call other actions
        try {
            dispatch(postsApiCallStart());
            const posts = await fetchData(GET_POSTS_API, "GET");
            dispatch(postsApiCallSuccess());
            dispatch(loadPostsToRedux(posts));
        } catch (e) {
            dispatch(postsApiCallFailure());
            console.error(e);
        }
    }
};

export const loadPostsToRedux = posts => {
    return {
        type: ACTION_GET_POSTS,
        payload: posts
    }
}

        /* type:ACTION_GET_POSTS,
        payload:[
                {
                  "id": "0cbae1da-d11f-4bc2-a557-13afda4a3827",
                  "author": "Pb",
                  "title": "Post 1",
                  "content": "Post 1",
                  "datetime": "1570257118"
                },
                {
                  "id": "487929f5-47bc-47af-864a-f570d2523f3e",
                  "title": "support",
                  "content": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.",
                  "datetime": "1478674102",
                  "author": "Valaria Claypool"
                },
                {
                  "id": "92751d44-4a2c-4902-9673-07b9f94a6ee5",
                  "title": "Versatile",
                  "content": "Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.\n\nPellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
                  "datetime": "1476433347",
                  "author": "Miltie McLachlan"
                },
        ] */
    