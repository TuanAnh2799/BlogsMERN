import { SEND_REQUEST_GET_POSTS, SEND_REQUEST_GET_POSTS_SUCCESS, SEND_REQUEST_GET_POSTS_FAILED } from "../Reducers/posts";
import axios from 'axios';

export const getAllPosts = (url) => async dispatch=> {
    try{
        dispatch({
            type: SEND_REQUEST_GET_POSTS,
        });
        await axios.get(url).then((data)=> {
            dispatch({
                type:  SEND_REQUEST_GET_POSTS_SUCCESS,
                posts: data.data,
            })
        })
 
    }catch(err){
        dispatch({
            type: SEND_REQUEST_GET_POSTS_FAILED,
        })
        
    }
}

// export const getComment = (url) => async dispatch=> {
//     try{
//         dispatch({
//             type: SEND_REQUEST_GET_A_COMMENT,
//         });

//         await fetch(url)
//         .then((response) => response.json())
//         .then((json) => {
//             console.log("comment:",json);
//             dispatch({
//                 type: SEND_REQUEST_GET_A_COMMENT_SUCCESS,
//                 comment: json,
//             })
//         })
 
//     }catch(err){
//         dispatch({
//             type: SEND_REQUEST_GET_A_COMMENT_FAILED,
//         })
//     }
// }




// import { createActions, createAction } from 'redux-actions';

// export const getType = (reduxAction) => {
//   return reduxAction().type;
// };

// export const getPosts = createActions({
//   getPostsRequest: undefined,
//   getPostsSuccess: (payload) => payload,
//   getPostsFailure: (err) => err,
// });


// import { types } from "./index";

// export const getPosts =(payload)=> ({
//     type: types.SEND_REQUEST_GET_ALL_POST,
//     payload,
// });

// export const getPostsSuccess =(payload)=> ({
//     type: types.SEND_REQUEST_GET_ALL_POST_SUCCESS,
//     payload,
// });

// export const getPostsFailed =(payload)=> ({
//     type: types.SEND_REQUEST_GET_ALL_POST_FAILURE,
//     payload,
// });

// export const sendRequestAddPost =(payload)=> ({
//     type: types.SEND_REQUEST_ADD_POST,
//     payload,
// });

// export const sendRequestAddPostSuccess =(payload)=> ({
//     type: types.SEND_REQUEST_ADD_POST_SUCCESS,
//     payload,
// });

// export const sendRequestAddPostFailed =(payload)=> ({
//     type: types.SEND_REQUEST_ADD_POST_FAILED,
//     payload,
// });