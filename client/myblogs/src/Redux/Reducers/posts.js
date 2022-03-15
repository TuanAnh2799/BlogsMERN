export const SEND_REQUEST_GET_POSTS = "SEND_REQUEST_GET_POSTS";
export const SEND_REQUEST_GET_POSTS_SUCCESS = "SEND_REQUEST_GET_POSTS_SUCCESS";
export const SEND_REQUEST_GET_POSTS_FAILED = "SEND_REQUEST_GET_POSTS_FAILED";

export const SEND_REQUEST_GET_A_COMMENT = "SEND_REQUEST_GET_A_COMMENT";
export const SEND_REQUEST_GET_A_COMMENT_SUCCESS = "SEND_REQUEST_GET_A_COMMENT_SUCCESS";
export const SEND_REQUEST_GET_A_COMMENT_FAILED = "SEND_REQUEST_GET_A_COMMENT_FAILED";


const initialState = {
    posts: [],
    //comment: [],
    isLoading: false,
    isError: false,
    // _A_Comment_Loaing: false,
    // _A_CmtError: false,
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


        // case SEND_REQUEST_GET_A_COMMENT: 
        //     return {
        //         ...state,
        //         _A_Comment_Loaing: true,
        //     }
        // case SEND_REQUEST_GET_A_COMMENT_SUCCESS: 
        //     return {
        //         ...state,
        //         comment: payload.comment,
        //         _A_Comment_Loaing: false,
        //     }
        // case SEND_REQUEST_GET_A_COMMENT_FAILED: 
        //     return {
        //         ...state,
        //         _A_Comment_Loaing: false,
        //         _A_CmtError: true,
        //     }
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