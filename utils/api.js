const BASE_API='http://192.168.0.110:8000/api'
const TOKEN='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjoiYW5kcmVzIiwiZXhwIjoxNTUxNTU5ODkyfQ.OoaxLF8c37GLEt6v__n_5ii7awACFCkRMngsOA-44KU'
import {AsyncStorage} from 'react-native'
class Api{
    login(credentials){
        return fetch(`${BASE_API}/login/`,{
            method:'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(credentials)
        }).then(res=>res.json())
    }

    getBoards(){
        return AsyncStorage.getItem('TOKEN').then(token=>{
            console.log(token)
            return fetch(`${BASE_API}/boards/?my=1`,{
                headers:{
                    'TOKEN':token
                }
            }).then(res=>res.json())
        })
    }
    getBoard(id){
        return AsyncStorage.getItem('TOKEN').then(token=>{
            console.log(token)
            return fetch(`${BASE_API}/boards/${id}/`,{
                headers:{
                    'TOKEN':token
                }
            }).then(res=>res.json())
        })
    }

    createIdea(idea){
        return AsyncStorage.getItem('TOKEN').then(token=>{
            return fetch(`${BASE_API}/ideas/`,{
                method:'POST',
                headers: {
                    "Content-Type": "application/json",
                    'TOKEN':token
                },
                body:JSON.stringify(idea)
            }).then(res=>res.json())
        })
    }
}

export default new Api()