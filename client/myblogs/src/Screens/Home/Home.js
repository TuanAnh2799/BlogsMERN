import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import ListPostScreen from '../ListPost/ListPost';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { getAllPosts } from '../../Redux/Actions/PostActions';
import TestMemoScreen from './TestMemo';
import { useCallback } from 'react';
import axios from 'axios';




const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postStore.posts);
  const isLoading = useSelector(state => state.postStore.isLoading);
  const error = useSelector(state => state.postStore.isError);

  const [count, setCount] = useState(0);
  console.log('Post từ store:', posts);
  // console.log('Trạng thái loading:', loading);
  // console.log('Trạng thái error:', error);
const [mydata, setMydata] = useState([]);

const URL = 'https://jsonplaceholder.typicode.com/posts';
  const fetchPosts =async()=> {
    console.log('chạy hàm fetch tại home');
    
    try {
      console.log('chạy vào try catch');
      await axios.get('https://jsonplaceholder.typicode.com/posts').then(data => console.log(data.data));
    } catch (error) {
    }
    
}
console.log('data fetch tại home:',mydata);

  const handerIncrease = useCallback(()=> {
    setCount( pre => pre +1);
  },[]);

  useEffect(() => {
    dispatch(getAllPosts(URL));
    //fetchPosts();
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