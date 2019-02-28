import React,{Component} from 'react'
import {Text,View,TextInput,Button,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native'
import styles from './../styles/style'
import Api from './../../utils/api'
class AddIdea extends Component{
    static navigationOptions = {
        title: 'AddIdea',
        
    };
    constructor(props){
        super(props)
        this.state={ideaInput:''}
    }

    
    creatIdea=()=>{
        console.log(this.props.navigation.state.params)
        Api.createIdea({description:this.state.ideaInput,board:this.props.navigation.state.params.board.id}).then((response)=>{
            const {goBack} = this.props.navigation;
            this.props.navigation.state.params.updateBoards()
            goBack()
            
        })
    }

    render(){
        // return this.props.children
        return(
            <View style={styles.container}>
                <Text>Idea</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={(ideaInput) => this.setState({ideaInput})}
                    value={this.state.ideaInput}
                />
                <TouchableOpacity
                    onPress={this.creatIdea}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Create Idea</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default AddIdea