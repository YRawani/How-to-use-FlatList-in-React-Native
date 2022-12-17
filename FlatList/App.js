
import React from 'react';
import {
  View,Text
} from 'react-native';
import FlatListDemo from './src/screens/flatListDemo';
import Images from './src/screens/Images';

const app = () =>{

  return(
    <View style ={{flex:1,alignItems:'center',justifyContent:"center"}}>
   <FlatListDemo/>
   <Images/>
    </View>
  )


}

export default app;