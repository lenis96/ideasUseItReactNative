import React,{Component} from 'react'
import {Text,View,TextInput,Button,StyleSheet,TouchableOpacity,AsyncStorage} from 'react-native'
import styles from './../styles/style'
import Api from './../../utils/api'
class Login extends Component{
    static navigationOptions = {
        title: 'Welcome',
        
    };
    constructor(props){
        super(props)
        this.state={username:'andres',password:'test2019'}
    }

    async saveItem(key, value) {
        try {
          await AsyncStorage.setItem(key, value);
        } catch (error) {
          console.log('AsyncStorage Error: ' + error.message);
        }
      }
    
    login=()=>{
        Api.login({email:this.state.username,password:this.state.password}).then((response)=>{
            console.log(response)
            AsyncStorage.setItem('TOKEN',response.token).then((res)=>{
                const {navigate} = this.props.navigation;
                navigate('Boards',{})
                // AsyncStorage.getItem('TOKEN').then((token)=>{
                //     console.log('>>>>>>>>>>>>>>>>>>>>>')
                //     console.log(token); 
                // })
            })
        })
    }

    render(){
        // return this.props.children
        return(
            <View style={styles.container}>
                <Text>Username</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={(username) => this.setState({username})}
                    value={this.state.username}
                />
                <Text>Password</Text>
                <TextInput
                    style = {styles.input}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password}
                    secureTextEntry={true}
                />
                {/* <Button
                    style={styles.buttonContainer}
                    title="Login"
                    onPress={this.login}
                /> */}
                <TouchableOpacity
                    onPress={this.login}
                    style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default Login