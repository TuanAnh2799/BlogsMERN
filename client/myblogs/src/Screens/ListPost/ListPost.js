import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { useSelector } from 'react-redux';

const ListPostScreen = ({posts, onLoading}) => {
  const renderItem =({item})=> {
    return (
      <View style={{width: '48%', height: 100, backgroundColor:'green', marginLeft:'1%', marginTop: 5}} key={item.id}>
        <Text>{item.id}</Text>
        <Text>{item.body}</Text>
      </View>
    )
  }
  return (
    <View style={{width:'100%', height: '50%'}}>
    {
      onLoading == true ? (
        <View style={{width: '100%', height:'100%', justifyContent:'center', alignItems:'center'}}>
          <ActivityIndicator size={30} color="red" />
        </View>
      ) : (
        <FlatList data={posts}
          renderItem={renderItem}
          keyExtractor={(item, index) => String(index)}
          numColumns={2}
        />
      )
    }
      
    </View>
  )
}

export default ListPostScreen

const styles = StyleSheet.create({})