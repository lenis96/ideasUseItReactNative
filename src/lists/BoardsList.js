import React,{Component} from 'react'

import {FlatList,Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import Board from './Board'

import Api from '../../utils/api'
import styles from '../styles/style'

class BoardsList extends Component{
    static navigationOptions = {
        title: 'Boards',
        
      }
    constructor(props){
        super(props)
        this.state={boards:[]}
    }
    updateBoards=()=>{

        Api.getBoards().then(response=>{
            console.log(response)
            this.setState({boards:response})
        }).catch(err=>{
            
        })
    }
    componentDidMount(){
        this.updateBoards()
    }
    logout=()=>{
        console.log('logout')
        const {navigate} = this.props.navigation;
        navigate('Login', {})
    }
    render(){
        const separator=<View style={{borderTopWidth: 1}}>
          </View>
        return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={this.logout}
                style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
            <FlatList
                style={styles.container}
                keyExtractor={(item)=>item.id.toString()}
                ItemSeparatorComponent={()=><View style={{borderTopWidth: 1}}></View>}
                data={this.state.boards} renderItem={({item}) => <Board updateBoards={this.updateBoards} navigation={this.props.navigation} {...item}/>} />
        </View>
        )
    }
}

export default BoardsList