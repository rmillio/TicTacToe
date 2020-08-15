import React, { useState, Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity,
} from 'react-native';

import Header from './components/Header';
import GamePage from './components/GamePage';

const title = "Play Now";


const App = () => {
  const [screen, setScreen] = useState("homepage");
  const [winner, setWinner] = useState("");
  const [res, setRes] = useState(0);
  
  const handleWinner = (string) => {
    setWinner(string);
  }
  const onPress = () => {
    setScreen("gamepage");
    console.log(screen);
  }

  const handleButton = () => {
    setRes(1);
  }

  if (screen === "gamepage")
  return(
    <View style={styles.gamePage}>
      <Button title="New Game" onPress={()=>handleButton()}/>
      <View style={styles.winnerContainer}>
        <Text style={styles.winnerText}>{winner}</Text>
      </View>
      <GamePage handleWinner={handleWinner} res={res} setRes={(param)=>setRes(param)} setWinner={()=>setWinner("")}>

      </GamePage>
    </View>
  );


  if (screen === "homepage") 
  return(
    <View style={styles.container}>
      <Header/>
      <TouchableOpacity style={styles.titleContainer} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  gamePage: {
    backgroundColor: '#FEC3AC',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },


  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEC3AC',
  },


  titleContainer: {
    flex: 0.2,
    justifyContent: 'center',
    backgroundColor: '#F1C254',
    alignItems: 'center',
    marginTop: '50%',
    // height: 50,
    width: 300,
    borderRadius: 30,
  },

  title: {
    // minHeight: 150,
    color: 'darkslateblue',
    fontSize: 30,
  },

  winnerText: {
    backgroundColor: '#FEC3AC',
    // justifyContent: 'center',
    alignItems: 'center',
    // alignContent: 'center',
    fontSize: 30,
  },

  winnerContainer: {
    marginBottom: '20%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default App;
