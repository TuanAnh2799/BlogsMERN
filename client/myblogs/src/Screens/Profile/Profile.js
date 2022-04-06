import { StyleSheet, Text, Dimensions, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import ListPostFlatScreen from './ListPostFlat';

const { height, width } = Dimensions.get("window");

const ProfileScreen = () => {
  const posts = useSelector(state => state.postStore.posts);
  return (
    <View style={{flex: 1}}>
      <View style={{width: '100%', height: height,}}>
        <ListPostFlatScreen data={posts} />
      </View>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({})