import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const ImageFile = () => {
  return (
    <View>
      <Image  style ={styles.Imagestyle} source={require('../screens/Image.jpg')}/>
    </View>
  )
}

export default ImageFile

const styles = StyleSheet.create({
    Imagestyle:{
        height:180,
        width:350,
        marginBottom:30,
    }

})