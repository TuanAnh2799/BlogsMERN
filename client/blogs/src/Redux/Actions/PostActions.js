import { createActions, createAction } from 'redux-actions';

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostsRequest: undefined,
  getPostsSuccess: (payload) => payload,
  getPostsFailure: (err) => err,
});


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