import { ActivityIndicator, FlatList, StyleSheet, Text, View, Image, ToastAndroid } from 'react-native'
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { updatePosts } from '../../Redux/Actions/PostActions';
import { useEffect } from 'react';



const ListPostScreen = ({posts, onLoading, postLength}) => {

  const dispatch = useDispatch();
  const updateError = useSelector(state => state.postStore.updateError);
  const updateSuccess = useSelector(state => state.postStore.updatePostSuccess);


  useEffect(()=> {
   showPopUp();
  },[updateError,updateSuccess]);

  const showPopUp =()=> {
    if(updateSuccess == true){
      ToastAndroid.showWithGravityAndOffset(
        "Cập nhật thành công!!",
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50
      );

   }
    if(updateError == true) {
      ToastAndroid.showWithGravityAndOffset(
        "Cập nhật thất bại!",
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50
      );
  }
}


  const onBtnClick = React.useCallback((item)=> {
      console.log('Click vào icon trái tmm');
      dispatch(updatePosts({...item,likeCount: item.likeCount +1}));
    },[dispatch, posts]);


  const renderItem =({item})=> {
// '98%'
    return (
      <View style={{width: '98%', height: 210, marginLeft:'1%',backgroundColor:'#fff', marginTop: 10, borderRadius: 10, shadowColor:'black',borderWidth:0.5, borderColor: 'gray' ,elevation: 5}} >
        <View style={{flexDirection:'row', width: '100%', height: 60, marginTop: 5,}}>
          <View style={{width: '15%', height: '100%', borderRadius: 100, borderWidth: 1, marginLeft: '1%'}}>
            <Image source={{uri: 'https://luv.vn/wp-content/uploads/2021/08/hinh-anh-gai-xinh-52.jpg'}} 
            style={{width: '100%', height:'100%',borderRadius: 100}}/>
          </View>
          
          <View style={{width: '74%', }}>
            <View style={{marginLeft: '5%'}}>
              <Text style={{fontSize: 18, color:'black', fontWeight:'600'}}>{item.author}</Text>
            </View>
            <View style={{flexDirection:'row', marginLeft: '5%'}}>
              <Text>{moment(item.createdAt).format('l')}    {moment(item.createdAt).fromNow()}</Text>
              <Icon name='clock' size={15} color='gray' style={{marginLeft: 5, marginTop: 2}}/>
            </View>
          </View>

          <View style={{width: '10%'}}>
            <Icon name='dots-vertical' size={25} color='black' style={{marginLeft: 5, marginTop: 2}}/>
          </View>
        </View>

        <View style={{width:'96%', height:110, flexWrap:'nowrap', marginLeft:'2%', flexDirection:'column'}}>
            <Text style={{fontSize: 17, color:'black', fontWeight:'600'}}>{item.title}</Text>
            <Text>{item.content}...</Text>
        </View>

        <View style={{flexDirection:'row', justifyContent:'space-around'}}>
          <View style={{flexDirection:'row', alignItems:'center'}}>
            <Icon name='heart' size={24} color='gray' onPress={()=>onBtnClick(item)}/> 
            <Text style={{marginLeft: 5}}>{item.likeCount} lượt thích</Text>
          </View>

          <View style={{flexDirection:'row', alignItems:'center'}}>
              <Icon name='eye' size={24} color='#34d399'/>
              <Text style={{marginLeft: 5}}>999 view</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={{width:'100%', height: '100%'}}>
    {
      onLoading == true ? (
        <View style={{width: '100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size={30} color="red" />
        </View>
      ) : (
        <View>
          {
            postLength == 0 ? (
              <View style={{width: '100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
                <Text>Chưa có bài đăng nào...</Text>
              </View>
            ):(
              <FlatList data={posts}
              renderItem={renderItem}
              keyExtractor={(item, index) => String(index)}
              //numColumns={2}
            />)
          }
        </View>
        
        
      )
    }
      
    </View>
  )
}

export default ListPostScreen

const styles = StyleSheet.create({})