import { takeLatest, call, put } from 'redux-saga/effects';
import * as actions from '../Actions/PostActions';
import * as api from '../../API/index';

function* fetchPostsSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
    console.log('chạy qua fetchPostSaga')
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

// function* createPostSaga(action) {
//   try {
//     const post = yield call(api.createPost, action.payload);
//     yield put(actions.createPost.createPostSuccess(post.data));
//   } catch (err) {
//     console.error(err);
//     yield put(actions.createPost.createPostFailure(err));
//   }
// }

// function* updatePostSaga(action) {
//   try {
//     const updatedPost = yield call(api.updatePost, action.payload);
//     yield put(actions.updatePost.updatePostSuccess(updatedPost.data));
//   } catch (err) {
//     console.error(err);
//     yield put(actions.updatePost.updatePostFailure(err));
//   }
// }

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostsSaga);
//   yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
//   yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

// generator function ES6

export default mySaga;


// import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects';
// import {types} from '../Actions/index';
// import * as api from '../../API';
// import { getPostsFailed, getPostsSuccess } from '../Actions/PostActions';


// function* getPostSaga() {
//     try {
//         const posts = yield call(api.fetchPosts);
//         console.log('Post từ api: ',posts);
//         yield put(getPostsSuccess(posts));
//     } catch (error) {
//         yield put(getPostsFailed(error));
//     }
    
// }

// function* getPostWatcher() {
//     yield takeEvery(types.SEND_REQUEST_GET_ALL_POST, getPostSaga);
// }

// export default function*() {
//     yield all([
//         getPostWatcher()
//     ])
// }
