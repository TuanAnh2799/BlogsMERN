import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ListPostScreen from '../ListPost/ListPost';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getPosts } from '../../Redux/Actions/PostActions';
import TestMemoScreen from './TestMemo';
import { useCallback } from 'react';
import axios from 'axios';




const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts.data);
  const isLoading = useSelector(state => state.posts.isLoading);
  const error = useSelector(state => state.posts.isError);

  const [count, setCount] = useState(0);
  // console.log('Post từ store:', posts);
  // console.log('Trạng thái loading:', loading);
  // console.log('Trạng thái error:', error);
const [mydata, setMydata] = useState([]);
const URL = 'https://jsonplaceholder.typicode.com';
  const fetchPosts =async()=> {
    console.log('chạy hàm fetch tại home');
    
    try {
      console.log('chạy vào try catch');
        fetch('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data));
    } catch (error) {
    }
    
}
console.log('data fetch tại home:',mydata);
  const handerIncrease = useCallback(()=> {
    setCount( pre => pre +1);
  },[]);

  useEffect(() => {
    dispatch(getPosts.getPostsRequest());
    fetchPosts();
  }, []);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <ListPostScreen posts={posts} onLoading={isLoading}/>
      <View style={{backgroundColor:'green', width: '100%', height: 60}}>
        <TestMemoScreen onIncrease={handerIncrease} />
        <Text style={{marginLeft:'50%', marginTop: 20, fontSize: 30}}>{count}</Text>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})