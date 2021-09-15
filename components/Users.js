import React, {useEffect, useState} from "react";
import {StyleSheet,FlatList} from "react-native";
import {View,Text,Button,TouchableOpacityt} from "react-native";
import {getUsers} from "../services/api.services";
import User from "./User";
const Users = () =>{
    let [users,setUsers] = useState();
    useEffect(() =>{
        getUsers().then(value => setUsers([...value]));
    },[])
    return (<View style={[styles.base]}>
       <FlatList
           data={users}
           renderItem={({item})=> {
               return <User item={item}/>
           }}
           keyExtractor={item => '' + item.id}
       />
    </View>)
};
export default Users;
let styles = StyleSheet.create({
    base:{
        flex:1,
        height: '100%'
    }
});