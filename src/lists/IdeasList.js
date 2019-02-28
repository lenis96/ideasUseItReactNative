import React,{Component} from 'react'

import {FlatList,Text,TouchableOpacity,View} from 'react-native'
import Idea from './Idea'

import style from './../styles/style'
import api from '../../utils/api';
class IdeasList extends Component{
    static navigationOptions = ({navigation})=>({
        title: 'Board: '+navigation.state.params.board.title,
    })
    constructor(props){
        super(props)
        console.log(this.props.navigation.state.params)
        this.state={ideas:this.props.navigation.state.params.board.ideas}
    }
    componentDidMount(){
    }
    myUpdate=()=>{
        
        // this.props.navigation.state.params.updateBoards()
        api.getBoard(this.props.navigation.state.params.board.id).then(res=>{

            console.log(res)
            this.setState({ideas:res.ideas})
        })
    }
    render(){

        const {navigate} = this.props.navigation;
        return (
            <View style={style.container}>
                <FlatList  keyExtractor={(item)=>item.id.toString()} data={this.state.ideas} renderItem={({item}) => <Idea {...item}/>} />
                <TouchableOpacity 
                    onPress={() =>{console.log(this.props.navigation.state.params.board); navigate('AddIdea', {board:this.props.navigation.state.params.board,updateBoards:this.myUpdate})}}
                    style={style.buttonContainer}>
                    <Text style={style.buttonText}>Add Idea</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default IdeasList