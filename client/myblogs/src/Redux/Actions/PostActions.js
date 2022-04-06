import { SEND_REQUEST_GET_POSTS, 
    SEND_REQUEST_GET_POSTS_SUCCESS, 
    SEND_REQUEST_GET_POSTS_FAILED,
    SEND_REQUEST_CREATE_POST,
    SEND_REQUEST_CREATE_POST_SUCCESS,
    SEND_REQUEST_CREATE_POST_FAILED,
    SEND_REQUEST_UPDATE_POST,
    SEND_REQUEST_UPDATE_POST_SUCCESS,
    SEND_REQUEST_UPDATE_POST_FAILED
} from "../Reducers/posts";
import axios from 'axios';


const URL = 'http://192.168.1.138:5000';

export const getAllPosts = () => async dispatch=> {
    try{
        dispatch({
            type: SEND_REQUEST_GET_POSTS,
        });
        let x = await axios.get(`${URL}/posts`)
        // then((data)=> {
        //     console.log('data bên action:',data.data)
        //     dispatch({
        //         type:  SEND_REQUEST_GET_POSTS_SUCCESS,
        //         posts: data.data,
        //     })
        // })
            dispatch({
                    type:  SEND_REQUEST_GET_POSTS_SUCCESS,
                    posts: x.data,
                })
        //console.log('Gọi đến getAllpost trong try catch', x.data);
    }catch(err){
        dispatch({
            type: SEND_REQUEST_GET_POSTS_FAILED,
        })
        
    }
}

export const createPosts = (payload) => async dispatch=> {
    try{
        dispatch({
            type:  SEND_REQUEST_CREATE_POST,   
        });
        await axios.post(`${URL}/posts`, payload).then(()=> { 
            dispatch({
            type: SEND_REQUEST_CREATE_POST_SUCCESS,
            post: payload,
        });
        })
    }catch(err){
        dispatch({
            type: SEND_REQUEST_CREATE_POST_FAILED,
        });
        
    }
}

export const updatePosts = (payload) => async dispatch=> {
    try{
        dispatch({
            type:  SEND_REQUEST_UPDATE_POST,   
        });
        await axios.post(`${URL}/posts/update`, payload).then(()=> { 
            dispatch({
            type: SEND_REQUEST_UPDATE_POST_SUCCESS,
            post: payload,
        });
        })
    }catch(err){
        dispatch({
            type: SEND_REQUEST_UPDATE_POST_FAILED,
        });
        
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