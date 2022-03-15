import { Button, StyleSheet, Text, View } from 'react-native'
import React,{memo} from 'react'

const TestMemoScreen = ({onIncrease}) => {
    console.log('reRender screen test memo.');
  return (
    <View style={{width:'50%', height: 60}}>
      <Text>Test memo Screen</Text>
      <Button title='Cộng' onPress={()=>onIncrease()}/>
     
    </View>
  )
}

export default memo(TestMemoScreen) 

const styles = StyleSheet.create({})