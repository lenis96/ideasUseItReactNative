import React,{Component} from 'react'

import {Text,View,Image,Button,StyleSheet,TouchableOpacity} from 'react-native'
import styles from './../styles/style'
class Board extends Component{
    constructor(props){
        super(props)
        console.log(this.props)
    }
    render(){
        const {navigate} = this.props.navigation;
        return (
            <View style={containerStyle.container}>
                <Text style={containerStyle.text}>{this.props.title}</Text>
                <TouchableOpacity
                    onPress={() => navigate('Ideas', {board:this.props,updateBoards:this.props.updateBoards})}
                    style={[styles.buttonContainer,containerStyle.button]}>
                    <Text style={styles.buttonText}>Detail</Text>
                </TouchableOpacity>
                {/* <Button
                    title="Add Idea"
                    // onPress={() => navigate('Ideas', {boardId:this.props.title})}
                    onPress={() => navigate('Ideas', {board:this.props})}
                /> */}
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
    // input:{
    //     height: 40,
    //     backgroundColor: 'rgba(225,225,225,0.2)',
    //     marginBottom: 10,
    //     padding: 10,
    //     color: '#fff'
    // },
    // buttonContainer:{
    //     backgroundColor: '#2980b6',
    //     paddingVertical: 15,
    //     borderRadius:10
    // },
    // buttonText:{
    //     color: '#fff',
    //     textAlign: 'center',
    //     fontWeight: '700'
    // }
})

export default Board