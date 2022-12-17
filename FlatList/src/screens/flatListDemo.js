import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FlatListDemo = () => {

    const names = [
        {
            index: "1",
            name: 'Yash',
        },

        {
            index: "2",
            name: 'Harsh',
        },

        {
            index: "3",
            name: 'Piyush',
        },

        {
            index: "4",
            name: 'Raushan',
        },

        {
            index: "5",
            name: 'Krish',
        },

        {
            index: "6",
            name: 'Raj',
        },
    ];
    return <FlatList style={styles.listStyle} /*horizontal*/ showsVerticalScrollIndicator={false} keyExtractor={(key) => {
        return key.index;
    }}
        data={names} renderItem={
            (element) => {
                console.log(element.item.name);
                return <Text style={styles.textStyle}>
                    {element.item.name}
                </Text>

            }} />
};


export default FlatListDemo;

const styles = StyleSheet.create({

    textStyle: {
        fontSize: 40,
        padding:30,
        backgroundColor:"grey",
        margin:20,
        color:"white",

    },

    listStyle:{
        textAlign:'center',
        margin: 20,
        padding :10,
        marginBottom: 30,
    },
});