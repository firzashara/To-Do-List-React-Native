import { StyleSheet,Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
    return(
        <View style={{alignItems:"space-around"}}>
            <Image source={require("../../assets/todo.png")}
            style={{height:300,width:300}}/>

            
        </View>
        
    )
}
export default Fallback
const styles=StyleSheet.create({})