import axios from "axios";
import { useState } from "react";

const URL = 'https://jsonplaceholder.typicode.com';

export const fetchPosts =async()=> {

        try {
            const data = await axios.get(`${URL}/posts`)
            // .then(data => setData(JSON.stringify(data.data)));
            return data.data;
        } catch (error) {
        }
        
    }

// //const URL = 'http://192.168.1.138:5000'
// export const fetchPosts =async()=> {

//     try {
//         const data = await axios.get(`${URL}/posts`)
//         // .then(data => setData(JSON.stringify(data.data)));
//         return data.data;
//     } catch (error) {
//     }
    
// }

// export const createPost = (payload) => axios.post(`${URL}/posts`, payload);
// export const updatePost = (payload) => axios.post(`${URL}/posts/update`, payload);

// // export const deletePosts =async(payload)=> {
// //     try {
// //         const posts = await axios.delete(`${URL}/posts/`+payload);
// //         return posts.data;
// //     } catch (error) {
// //         console.log('delete data err:',error);
// //     }
    
// // }

// // export const getPost =async(payload)=> {
// //     try {
// //         const posts = await axios.get(`${URL}/posts/`+payload.id);
// //         return posts.data;
// //     } catch (error) {
// //         console.log('get a data err:',error);
// //     }
    
// // }