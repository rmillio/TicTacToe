import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from 'react-native';


const Cell = (props) => {

    console.log(props.state.status)
    if (props.state.status === 'o') {
        return (
            <View style={styles.cell}>
                <View style={styles.circle}/>
            </View>
        )
    } else if (props.state.status === 'x') {
        return (
            <View style={styles.cell}>
                <View style={styles.line1}></View>
                <View style={styles.line2}></View>
            </View>
        )
    }

    return(
        <View style={styles.cell}>
            {/* <View style={styles.circle}/>

            
            <View style={styles.line1}></View>
            <View style={styles.line2}></View>

            */}

        </View>
    );
};

const styles = StyleSheet.create({

    cell: {
        flex: 1,
        aspectRatio: 1,
        borderWidth: 3,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },

    cellPress: {
        height: '100%',
        width: '100%',
        borderColor: 'transparent'
    },

    circle: {
        flex: 0.7,
        aspectRatio: 1,
        borderColor: 'black',
        borderWidth: 10,
        borderRadius: 60,
    },

    line1: {
        flex: 0.9,
        borderWidth: 5,
        height: '100%',
        transform: [{ rotate: '45deg'}]
    },

    line2: {
        position: 'absolute',
        borderWidth: 5,
        height: '90%',
        transform: [{ rotate: '315deg'}]
    }
})

export default Cell;