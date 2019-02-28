import React,{Component} from 'react'

import {Text,View,Image,Button,TouchableOpacity,StyleSheet} from 'react-native'
import styles from './../styles/style'
class Idea extends Component{
    constructor(props){
        super(props)
    }
    render(){
        // const {navigate} = this.props.navigation;
        return (
            <View style={containerStyle.container}>
                <Text style={containerStyle.text}>idea: {this.props.description}</Text>
                {/* <TouchableOpacity
                    onPress={()=>{}}
                    style={[styles.buttonContainer,containerStyle.button]}>
                    <Text>Edit</Text>
                </TouchableOpacity> */}
            </View>
        )
    }
}
const containerStyle = StyleSheet.create({
    container: {
    
        flexDirection:'row',
        margin:5
    },
    text:{
        flex:1
    },
    button:{
        // height:10,
        paddingLeft:20,
        paddingRight:20,
        // verticalAlign:'middle'
    }
})

export default Idea