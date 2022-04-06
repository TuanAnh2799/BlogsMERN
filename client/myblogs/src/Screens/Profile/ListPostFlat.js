import { StyleSheet, Text, View, FlatList, Dimensions, Image } from 'react-native'
import React from 'react'
//import { FlatList } from 'react-native-gesture-handler';

const DATA = [ 'first row','second row','third row','fourth row','fifth row','sixth row','seventh row','Eight row','Nine row'
,'Tenth row'];
const { height, width } = Dimensions.get("window");


const ListPostFlatScreen = ({data}) => {

  const renderItem =({item})=> {
    return (
      <View style={{width: width * 0.7, height: 300, backgroundColor:'green', marginLeft: 5}}>
        <View style={{width: '100%', height: '80%', backgroundColor:'#fff'}}>
          <Image source={{uri: item.attackment}} style={{width: '100%', height:'100%'}} resizeMode='cover' />
        </View>
        <Text>{item.title}</Text>
      </View>
    )
  }
  return (
    <View>
      <FlatList 
        data={data}
        horizontal
        //pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem} />
    </View>
  )
}

export default ListPostFlatScreen

const styles = StyleSheet.create({
  container_style: {
    flex: 1,
    marginTop: 0,
  },
  item_style: {
    backgroundColor: '#B591FF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    width: 200
    
  },header: {
    textAlign: 'center',
    backgroundColor: '#B2C2D2',
    padding: 20,
    fontSize: 20,
   
  }
});