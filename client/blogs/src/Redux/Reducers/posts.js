//import { types } from "../Actions";
import { getPosts, getType, createPost, updatePost } from '../Actions/PostActions';


const initState = {
    isLoading: false,
    data: [],
    isError: false,
}

export default function postsReducers(state = initState, action) {
    switch (action.type) {
      case getType(getPosts.getPostsRequest):
        return {
          ...state,
          isLoading: true,
        };
      case getType(getPosts.getPostsSuccess):
        return {
          ...state,
          isLoading: false,
          data: action.payload,
        };
      case getType(getPosts.getPostsFailure):
        return {
          ...state,
          isLoading: false,
          isError: false,
        };
    //   case getType(createPost.createPostSuccess):
    //     return {
    //       ...state,
    //       data: [...state.data, action.payload],
    //     };
    //   case getType(updatePost.updatePostSuccess):
    //     return {
    //       ...state,
    //       data: state.data.map((post) =>
    //         post._id === action.payload._id ? action.payload : post
    //       ),
    //     };
      default:
        return state;
    }
  }

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