import { Modal, StyleSheet, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, View, Image, ToastAndroid } from 'react-native'
import React, {memo} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RNTextArea from "@freakycoder/react-native-text-area";
import { useState } from 'react';
import {launchImageLibrary} from 'react-native-image-picker';
import { createPosts } from '../../../Redux/Actions/PostActions';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';



const CreatePostModal = ({modalVisible, setModalVisible, screenWidth, screenHeight }) => {

  const dispatch = useDispatch();
  const isLoading = useSelector(state => state.postStore.createLoading);
  const error = useSelector(state => state.postStore.createError);
  const success = useSelector(state => state.postStore.createPostSuccess);

  const [data,setData] = useState({
    title: '',
    content: '',
    attackment: '',
    likeCount: 0,
  })


  useEffect(()=> {
    showPopUp();
  },[success, error]);

  const showPopUp =()=> {
    if(success == true){
      ToastAndroid.showWithGravityAndOffset(
        "Đăng bài thành công!",
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50
      );
      setData({
        title: '',
        content: '',
        attackment: '',
        likeCount: 0,
      });
   }
    if(error == true) {
      ToastAndroid.showWithGravityAndOffset(
        "Đăng bài thất bại!",
        ToastAndroid.LONG,
        ToastAndroid.CENTER,
        25,
        50
      );
  }
}
  const onClose = React.useCallback(() => {
    setModalVisible(false)
    setData({
      title: '',
      content: '',
      attackment: '',
    });
  }, []);

  const onSubmit = React.useCallback(() => {
    dispatch(createPosts(data));
  }, [data,dispatch]);
  
  const PickImageLibrary=async()=> {
    let result = await launchImageLibrary({
      mediaType:'photo',
      includeBase64: true,
      quality: 0.5,
    })
    let source = `data:image/jpeg;base64,${result.assets[0].base64}`;
    setData({...data, attackment: source});
  }

  const body = (
        <TouchableNativeFeedback>
          <View
            style={{
            flex: 1, backgroundColor: '#000000AA',justifyContent: 'center',
            }}>
              <TouchableNativeFeedback>
                <View
                  style={{
                    backgroundColor: '#fff',width: '100%' , height: '70%', borderRadius: 20,
                        //borderTopLeftRadius: 20,
                    }}>
                      <View style={{flexDirection:'row', alignItems:'center', marginTop: 5, borderBottomWidth: 0.5, borderBottomColor:'gray'}}>
                          <View style={{width: screenWidth *0.85, marginLeft: screenWidth *0.05}}>
                            <Text style={{fontSize: 18, fontWeight:'600', textAlign:'center', color:'black'}}>Viết bài</Text>
                          </View>
                          <View style={{width: screenWidth /2 }}>
                              <Icon name='close-circle' size={28} color='red' onPress={onClose}/>
                          </View>
                      </View>

                      <View style={{width:'100%', height: '100%'}}>
                        <Text style={{fontSize: 16, padding: 10}}>Tiêu đề:</Text>
                        <View style={{width: '96%', height: 40, marginLeft:'2%', flexDirection:'row', alignItems:'center'}}>
                            <View style={{width: '8%'}}>
                                <Icon name='pencil' size={30} color='orange'/>
                            </View>
                            <View style={{width: '85%', height:'100%', backgroundColor:'#fff', borderRadius: 30, borderWidth: 0.5, borderColor:'gray', marginLeft: '3%'}}>
                                <TextInput
                                  value={data.title}
                                  onChangeText={(e)=>setData({...data,title: e})}
                                  autoCapitalize='none'
                                 style={{padding: 10, width: '96%', marginLeft:'2%', fontSize: 15}}/>
                            </View>
                        </View>

                        <Text style={{fontSize: 16, padding: 10}}>Nội dung:</Text>
                        <RNTextArea maxCharLimit={500}
                          placeholderTextColor="black"
                          exceedCharCountColor="#990606"
                          placeholder={"Nhập nội dung..."}
                          value={data.content}
                          style={{width: '90%', marginLeft:'5%', height: 150, borderRadius: 12, borderColor: 'gray', borderWidth: 0.5, }}
                          onChangeText={(text) => setData({...data, content: text})}/>


                        <View style={{width: '90%', height: 150, marginLeft: '5%', marginTop: 10, flexDirection:'row', alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>PickImageLibrary()} style={{width: '22%', height:'50%', backgroundColor:'#fff', borderWidth: 0.5, borderColor:'gray', borderRadius: 15, justifyContent:'center', alignItems:'center'}}>
                            <View >
                              <Icon name='camera' color='black' size={40} />
                            </View>
                          </TouchableOpacity>
                            {
                              data.attackment != '' && (
                                <Image
                                  resizeMode="cover"
                                  resizeMethod="scale"
                                  style={{width: 200, height: 200}}
                                  source={{uri: data.attackment}}
                                />
                              )
                            }
                            
                        </View>

                        <View style={{width: '100%', height: 45, marginTop: 15, justifyContent:'center', alignItems:'center'}}>
                          <TouchableOpacity 
                          onPress={onSubmit}
                          style={{width:'35%', height:'100%', backgroundColor:'orange', borderRadius: 30, justifyContent:'center', alignItems:'center'}}>
                            <View>
                              <Text style={{fontSize: 17}}>Đăng bài</Text>
                            </View>
                          </TouchableOpacity>
                        </View>

                      </View>
                  </View>
              </TouchableNativeFeedback>
          </View>
      </TouchableNativeFeedback>
    )

  return (
      <Modal
        visible={modalVisible}
        animationType={'fade'}
        transparent={true}
        onClose={onClose}
        onRequestClose={() => onClose()}>
            {body}
        </Modal>
  )
}

export default memo(CreatePostModal)

const styles = StyleSheet.create({})