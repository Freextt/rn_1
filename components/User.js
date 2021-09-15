import React from 'react';
import {StyleSheet} from "react-native";
import {View,Text,Button,TouchableOpacity} from "react-native";

const User = ({item}) =>{
    return <View style = {[styles.userBox,styles.margins,styles.sizes]}>
        <Text style={[styles.align]}>{item.name}</Text>
    </View>;
}
export default User;
let styles =  StyleSheet.create({
    userBox:{
        flex: 1,
        backgroundColor : 'grey',
    },
    margins:{
        marginBottom: 3
    },
    sizes:{
        width: '70%',
        height: 400
    },
    align:{
        textAlign: 'center'
    }
});