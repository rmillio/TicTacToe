import React, { Fragment } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';


const gameTitle = "Tic-Tac-Toe";

const Header = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.headerText}>{gameTitle}</Text>
    </View>    
  );
};

const styles = StyleSheet.create({

    headerContainer: {
        flex: 1,
        backgroundColor: 'green',
    },

  container: {
    flex: 0.5,
    position: 'absolute',
    top: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '10%',
  },

  headerText: {
    color: 'white',
    fontSize: 40,
  },

  playersContainer: {
    position: 'absolute',
    top: '10%',
    alignItems: 'center',
    zIndex: 10,
    width: '100%',
  },

  player1Text: {
      backgroundColor: 'white',   //#FEC3AC
      borderBottomWidth: 3,
      borderBottomColor: 'red',
      marginTop: 300,
      fontSize: 30,
      maxHeight: 54,
      textAlign: 'center',
      width: '60%',
  },

  player2Text: {
    backgroundColor: 'white',   //#FEC3AC
    borderBottomWidth: 3,
    borderBottomColor: 'red',
    marginTop: 50,
    fontSize: 30,
    maxHeight: 54,
    textAlign: 'center',
    width: '60%',
}
})

export default Header;