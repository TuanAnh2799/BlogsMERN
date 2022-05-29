// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const ListPlaceScreen = () => {
//   return (
//     <View>
//       <Text>ListPlaceScreen</Text>
//     </View>
//   )
// }

// export default ListPlaceScreen

// const styles = StyleSheet.create({})

import React, {useCallback} from "react";
import ContainerView from "../../customComponent/ContainerView";
import NavigationBar from "../../customComponent/NavigationBar";
import {Avatar, Chip, Text, useTheme} from "@rneui/themed";
import {StyleSheet, TouchableOpacity, View} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import MenuDown from "../../customComponent/MenuDown";
import {useDispatch, useSelector} from "react-redux";
import * as ImagePicker from 'react-native-image-picker';
import ImagePost from "../../customComponent/ImagePost";
import Video from 'react-native-video';
import TextField from "../../customComponent/TextField";
import ModalViewImage from "../../customComponent/ModalViewImage";
import {uploadFile} from "../../../request/apiRequest";
import linkApi from "../../../request/linkApi";


const AddPostView = () => {
  const {colors} = useTheme().theme;
  const dispatch = useDispatch();
  const [visible, setVisible] = React.useState(false);
  const [cate_id, setCate_Id] = React.useState(0);
  const [content, setContent] = React.useState('');
  const [title, setTitle] = React.useState('Day la tieu de');
  const [imgVisible, setImgVisible] = React.useState(false);
  const [cateVisible, setCateVisible] = React.useState(false);
  const [category, setCategory] = React.useState("Tiêu đề");
  const [isComment, setIsComment] = React.useState(0);
  const [imageURL, setImageURL] = React.useState([]);
  const [viewImage, setViewImage] = React.useState([]);
  const [viewVideo, setViewVideo] = React.useState(null);
  const [indexImage, setIndexImage] = React.useState(0);
  const [videoURL, setVideoURL] = React.useState();
  const [pin, setPin] = React.useState(1);
  const [files, setFiles] = React.useState('');
  const listCategory = useSelector(state => state.post.listCategory);

  const getPhotoFromLibrary = async () => {
    ImagePicker.launchImageLibrary({
      maxHeight: 1500,
      maxWidth: 1500,
      quality: 0.5,
      mediaType: 'photo',
      includeBase64: false,
      selectionLimit: 0, //mutilselect photo
    })
      .then(image => {
        let listURL = [];
        let view = [];
        image.assets?.map((asset) => {
          //console.log('ass', asset)
          listURL.push({uri: asset.uri, name: asset.fileName, type: asset.type});
          view.push(asset.uri);
        })
        setImageURL(listURL);
        setViewImage(view);
      })
      .catch(err => {
        console.log('openCamera catch' + err.toString());
      });
  };

  console.log(imageURL);

  const getVideoFromLibrary = async () => {
    await ImagePicker.launchImageLibrary({
      mediaType: 'video',
      videoQuality: 'medium'
    })
      .then(video => {
        let videos = []; //chuyen sang array
        videos.push({uri: video.assets[0].uri, name: video.assets[0].fileName, type: video.assets[0].type});
        setVideoURL(videos);
        setViewVideo(video.assets[0].uri);
      })
      .catch(err => {
        console.log('openCamera catch' + err.toString());
      });
  };

  const handlePressImage = async (index, images) => {
    await setViewImage(images);
    setIndexImage(index);
    toggleShowImg();
  };

  //console.log('img url: ',imageURL)
  const openMenu = () => setVisible(true);
  const openTopic = () => setCateVisible(true);
  const toggleShowImg = () => setImgVisible(!imgVisible);

  const handleAddPost = () => {
    if (imageURL.length > 0 && viewVideo == null) {
      uploadFile(linkApi.urlUploadMultiFile(), imageURL) 
        .then(res => {
          let data = {
            cate_id: cate_id,
            title: title,
            content: content,
            images: res.data.images,
            files: '',
            video: '',
            allow_comment: isComment,
            pin: pin
          }
          addNewPost(data).then(() => {
              dispatch(addPost(data));
              showMessageSuccess();
            }).catch(error => {
              console.log('add post err: ', error)
              showMessageError(error)
            });
          console.log('video: ', res)
        })
        .catch(error => console.log('err', error))
    }
    else if (imageURL.length == 0 && viewVideo !== null) {
      uploadFile(linkApi.urlUploadMultiFile(), videoURL) 
        .then(res => {
          let data = {
            cate_id: cate_id,
            title: title,
            content: content,
            images: '',
            files: '',
            video: res.data.videos,
            allow_comment: isComment,
            pin: pin
          }
          addNewPost(data).then(() => {
              dispatch(addPost(data));
              showMessageSuccess();
            }).catch(error => {
              console.log('add post err: ', error)
              showMessageError(error)
            });
          console.log('video: ', res)
        })
        .catch(error => console.log('err', error))
    } else if(imageURL.length > 0 && viewVideo !== null){
      let img;
      uploadFile(linkApi.urlUploadMultiFile(), imageURL) 
        .then(res1 => {
          img = res1.data.images;
        }).then(() => {
          uploadFile(linkApi.urlUploadMultiFile(), videoURL)
          .then(res2 => {
            let data = {
            cate_id: cate_id,
            title: title,
            content: content,
            images: img,
            files: '',
            video: res2.data.files,
            allow_comment: isComment,
            pin: pin
          }
          addNewPost(data).then(() => {
              dispatch(addPost(data));
              showMessageSuccess();
            }).catch(error => {
              console.log('add post err: ', error)
              showMessageError(error)
            });
          }).catch(error => console.log('err', error))
          
        }).catch(error => console.log('err', error));
    }


    // uploadPhotoFile(imageURL).then(res=>{
    //   console.log('res: ', res)
    // }).catch(error => console.log('err', error));


    // addNewPost(data).then(() => {
    //   dispatch(addPost(data));
    //   showMessageSuccess();
    // }).catch(error => {
    //   console.log('add post err: ', error)
    //   showMessageError(error)
    // });
    //dispatch(addPost(data));
  }

  const getItemCategory = () => {
    const dataItemCategory = [];
    listCategory.forEach((e, index) => {
      dataItemCategory.push({
        title: e.title, onPress: () => {
          setCategory(e.title);
          setCate_Id(index);
        }
      })
    })
    return dataItemCategory;
  }
  const handleChanContent = useCallback((text) => {
    setContent(text);
  }, []);

  return (
    <ContainerView>
      <NavigationBar
        title={"Tạo bài viết"}
        textRight={"Đăng"}
        onPress={handleAddPost}/>
      <View style={{flex: 9, padding: 10}}>
        <View style={{flexDirection: "row"}}>
          <Avatar
            size={45}
            rounded
            source={{uri: "https://randomuser.me/api/portraits/men/36.jpg"}}
            containerStyle={{
              backgroundColor: colors.grey4,
            }}
          />
          <View style={{marginLeft: 10}}>

            <Text style={{fontWeight: "bold"}}>Hunonic</Text>
            <View style={{flexDirection: "row", marginTop: 5,}}>
              <MenuDown
                visible={visible}
                setVisible={setVisible}
                item={[
                  {title: "Cho phép bình luận", onPress: () => setIsComment(0),},
                  {title: "Không cho phép bình luận", onPress: () => setIsComment(1)},
                ]}
              >
                <Chip
                  onPress={openMenu}
                  title={isComment === 0 ? 'Cho phép bình luận' : "Không cho phép bình luận"}
                  type={"outline"}
                  icon={{
                    name: "chevron-down",
                    type: "font-awesome",
                    size: 10,
                    color: colors.black,
                  }}
                  iconRight
                  titleStyle={{color: colors.black, fontSize: 10}}
                  buttonStyle={{borderColor: colors.grey2}}
                />
              </MenuDown>

              <MenuDown
                visible={cateVisible}
                setVisible={setCateVisible}
                item={getItemCategory()}
              >
                <Chip
                  onPress={openTopic}
                  title={category}
                  type={"outline"}
                  icon={{
                    name: "chevron-down",
                    type: "font-awesome",
                    size: 10,
                    color: colors.black,
                  }}
                  iconRight
                  titleStyle={{color: colors.black, fontSize: 10}}
                  buttonStyle={{borderColor: colors.grey2}}
                />
              </MenuDown>

              {
                pin === 1 ?
                  <MaterialCommunityIcons name={'pin-off'} size={25} color={colors.grey3}
                                          style={{marginLeft: 15, marginTop: 2}} onPress={() => setPin(0)}/>
                  :
                  <MaterialCommunityIcons name={'pin'} size={25} color={'green'} style={{marginLeft: 15, marginTop: 2}}
                                          onPress={() => setPin(1)}/>
              }

            </View>
          </View>
        </View>

        <View style={{
          width: '96%',
          height: 210,
          backgroundColor: "green",
          marginLeft: '2%',
          borderRadius: 25,
          marginTop: 12,
          marginBottom: 5
        }}>
          <TextField style={{width: '100%', height: '100%',}} multiline={true} value={content}
                     onChangeText={handleChanContent}/>
        </View>

        {
          imageURL.length > 0 &&
          <ImagePost images={viewImage} onPressImage={(index, images) => handlePressImage(index, images)}/>
        }
        {
          viewVideo != null &&
          (
            <View style={{width: '96%', height: 150, marginLeft: '2%', marginBottom: 5,}}>
              <Video
                controls
                resizeMode='contain'
                fullscreen={true}
                fullscreenOrientation="landscape"
                repeat
                source={{uri: viewVideo}}
                style={{width: "100%", height: '100%', backgroundColor: 'black'}}/>
            </View>
          )
        }
      </View>
      <View style={{flexDirection: "row", flex: 1}}>
        <TouchableOpacity style={{...styles.btnMedia, borderRightWidth: 0.5, borderColor: colors.grey4}}
                          onPress={getPhotoFromLibrary}>
          <MaterialCommunityIcons name={"camera-plus-outline"} size={24} color={colors.grey3}/>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.btnMedia, borderLeftWidth: 0.5, borderColor: colors.grey4}}
                          onPress={getVideoFromLibrary}>
          <MaterialCommunityIcons name={"video-plus-outline"} size={30} color={colors.grey3}/>
        </TouchableOpacity>
      </View>

      <ModalViewImage
        index={indexImage}
        visible={imgVisible}
        onClose={toggleShowImg}
        images={viewImage}/>

    </ContainerView>
  );
};

export default AddPostView;

const styles = StyleSheet.create({
  btnMedia: {
    flex: 1, alignItems: "center", justifyContent: "center", borderTopWidth: 1,
  },
});
