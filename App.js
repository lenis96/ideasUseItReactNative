/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */
//adb reverse tcp:8081 tcp:8081
//adb shell input text "RR"
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';

import Login from './src/screens/Login'
import BoardsList from './src/lists/BoardsList'
import IdeaList from './src/lists/IdeasList'
import AddIdea from './src/screens/AddIdea'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


import {createStackNavigator, createAppContainer} from 'react-navigation';

const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  Boards: {screen: BoardsList},
  Ideas:{screen: IdeaList},
  AddIdea:{screen:AddIdea}
});

const App = createAppContainer(MainNavigator);

export default App;



// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <Login>
//         <Text>
//           Hola
//         </Text>
//         <BoardsList/>
//       </Login>
//       // <View style={styles.container}>
//       //   <Image source={{uri:'https://i.pinimg.com/originals/02/61/0f/02610f0fa69c1a287237317f921df3aa.jpg'}}
//       //   style={{height:200,width:80,resizeMode:'contain'}}></Image>
//       //   <Image source={{uri:'https://data.whicdn.com/images/310278063/large.jpg?t=1523050093'}}
//       //     style={{width:200,height:80,resizeMode:'contain'}}></Image>
//       //   <Text style={styles.welcome}>Welcome to React Native!</Text>
//       //   <Text style={styles.instructions}>To get started, edit App.js</Text>
//       //   <Text style={styles.instructions}>{instructions}</Text>
//       // </View>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#7EC0FC',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
