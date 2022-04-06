export const SEND_REQUEST_GET_POSTS = "SEND_REQUEST_GET_POSTS";
export const SEND_REQUEST_GET_POSTS_SUCCESS = "SEND_REQUEST_GET_POSTS_SUCCESS";
export const SEND_REQUEST_GET_POSTS_FAILED = "SEND_REQUEST_GET_POSTS_FAILED";

export const SEND_REQUEST_CREATE_POST = "SEND_REQUEST_CREATE_POST";
export const SEND_REQUEST_CREATE_POST_SUCCESS = "SEND_REQUEST_CREATE_POST_SUCCESS";
export const SEND_REQUEST_CREATE_POST_FAILED = "SEND_REQUEST_CREATE_POST_FAILED";

export const SEND_REQUEST_UPDATE_POST = "SEND_REQUEST_UPDATE_POST";
export const SEND_REQUEST_UPDATE_POST_SUCCESS = "SEND_REQUEST_UPDATE_POST_SUCCESS";
export const SEND_REQUEST_UPDATE_POST_FAILED = "SEND_REQUEST_UPDATE_POST_FAILED";

export const SEND_REQUEST_DELETE_POST = "SEND_REQUEST_DELETE_POST";
export const SEND_REQUEST_DELETE_POST_SUCCESS = "SEND_REQUEST_DELETE_POST_SUCCESS";
export const SEND_REQUEST_DELETE_POST_FAILED = "SEND_REQUEST_DELETE_POST_FAILED";

const initialState = {
    posts: [],
    //comment: [],
    isLoading: false,
    isError: false,

    createLoading: false,
    createError: false,
    createPostSuccess: false,

    updateLoading: false,
    updateError: false,
    updatePostSuccess: false,

    deleteSuccess: false,
    deleteLoading: false,
    deleteError: false,
}


export default function postReducer (state = initialState, payload) {
    switch(payload.type) {
        case SEND_REQUEST_GET_POSTS: 
            return {
                ...state,
                isLoading: true,
            }
        case SEND_REQUEST_GET_POSTS_SUCCESS: 
            return {
                ...state,
                posts: payload.posts,
                isLoading: false,
            }
        case SEND_REQUEST_GET_POSTS_FAILED: 
            return {
                ...state,
                isLoading: false,
                isError: true
            }

        case SEND_REQUEST_CREATE_POST: 
            return {
                ...state,
                createLoading: true,
                createError: false,
                createPostSuccess: false,
            }
        case SEND_REQUEST_CREATE_POST_SUCCESS: 
            return {
                ...state,
                posts: [...state.posts,payload.post],
                createLoading: false,
                createError: false,
                createPostSuccess: true,
            }
        case SEND_REQUEST_CREATE_POST_FAILED: 
            return {
                ...state,
                createLoading: false,
                createError: true,
                createPostSuccess: false,
            }


            //update post
        case SEND_REQUEST_UPDATE_POST: 
            return {
                ...state,
                updateLoading: true,
            }
        case SEND_REQUEST_UPDATE_POST_SUCCESS: 
            return {
                ...state,
                posts: state.posts.map(post => post._id === payload.post._id ? payload.post : post),
                updateLoading: false,
                updateError: false,
                updatePostSuccess: true,
            }
        case SEND_REQUEST_UPDATE_POST_FAILED: 
            return {
                ...state,
                updateLoading: false,
                updateError: true,
                updatePostSuccess: false,
            }
        
            ///delete post
        case SEND_REQUEST_DELETE_POST:
            return {
                ...state,
                deleteLoading: true,
                deleteError: false,
            }

        case SEND_REQUEST_DELETE_POST_SUCCESS:
            return {
                ...state,
                deleteLoading: true,
                posts: state.posts.filter(e => {
                    return e._id !== payload.post._id
                }),
                deleteError: false,
            }


        default:
            return state
    }
}

// //import { types } from "../Actions";
// import { getPosts, getType, createPost, updatePost } from '../Actions/PostActions';


// const initState = {
//     isLoading: false,
//     data: [],
//     isError: false,
// }

// export default function postsReducers(state = initState, action) {
//     switch (action.type) {
//       case getType(getPosts.getPostsRequest):
//         return {
//           ...state,
//           isLoading: true,
//         };
//       case getType(getPosts.getPostsSuccess):
//         return {
//           ...state,
//           isLoading: false,
//           data: action.payload,
//         };
//       case getType(getPosts.getPostsFailure):
//         return {
//           ...state,
//           isLoading: false,
//           isError: false,
//         };
//     //   case getType(createPost.createPostSuccess):
//     //     return {
//     //       ...state,
//     //       data: [...state.data, action.payload],
//     //     };
//     //   case getType(updatePost.updatePostSuccess):
//     //     return {
//     //       ...state,
//     //       data: state.data.map((post) =>
//     //         post._id === action.payload._id ? action.payload : post
//     //       ),
//     //     };
//       default:
//         return state;
//     }
//   }

// export default function postsReducer(state = initState, {type, payload}) {
//     switch(type) {
//         case types.SEND_REQUEST_GET_ALL_POST:
//             return {
//                 ...state,
//                 isLoading: true,
//             }
//         case types.SEND_REQUEST_GET_ALL_POST_SUCCESS:
//             return {
//                 ...state,
//                 isLoading: false,
//                 data: payload
//             }
//         case types.SEND_REQUEST_GET_ALL_POST_FAILURE:
//             return {
//                 ...state,
//                 isLoading: false,
//                 isError: true,
//             }
//         default:
//             return state;
//     }
// }