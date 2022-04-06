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
import { Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CreatePostModal from './CreatePost/CreatePost';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.postStore.posts);
  const isLoading = useSelector(state => state.postStore.isLoading);
  const error = useSelector(state => state.postStore.isError);

  const [count, setCount] = useState(0);
  const [isOpenModal, setOpenModal] = useState(false);

  // console.log('Trạng thái loading:', loading);
   //console.log('post từ ređucer:', posts);

//const URL = 'https://jsonplaceholder.typicode.com/posts';http://192.168.1.138:5000/posts

const URL = 'http://192.168.1.138:5000/posts';

  const fetchPosts =async()=> {
    console.log('chạy hàm fetch tại home');
    
    try {
      await axios.get('http://192.168.1.138:5000/posts').then(data => console.log('fetch tại home:',data.data));
    } catch (error) {
    }
    
}


  useEffect(() => {
    dispatch(getAllPosts());
    //fetchPosts();
  }, []);

  return (
    <View style={{width: '100%', height: '100%'}}>
    <View style={{width: '100%', height: '100%'}}>
      <ListPostScreen posts={posts} onLoading={isLoading} postLength={posts.length}/>
      <CreatePostModal screenWidth={windowWidth} screenHeight={windowHeight} modalVisible={isOpenModal} setModalVisible={setOpenModal} />
    </View>
    <View style={{position:'absolute', width: 50, height: 50, backgroundColor:'#38bdf8', marginLeft: windowWidth - 60, marginTop:windowHeight - 200, borderRadius: 100, justifyContent:'center', alignItems:'center'}}>
      <Icon name='plus' size={30} color='#fff' onPress={()=>setOpenModal(true)}/>
    </View>
      {/* <View style={{backgroundColor:'yellow', width: '100%', height: 60, marginTop: 10}}>
        <TestMemoScreen onIncrease={handerIncrease} />
        <Text style={{marginLeft:'50%', marginTop: 20, fontSize: 30}}>{count}</Text>
      </View> */}
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})