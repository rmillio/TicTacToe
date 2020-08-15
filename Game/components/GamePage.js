import React, { Component } from 'react';
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
import Cell from './Cell';

class GamePage extends Component {
    state = {
        player: 1,
        cells : [
            {index: 0, status: ''},
            {index: 1, status: ''},
            {index: 2, status: ''},
            {index: 3, status: ''},
            {index: 4, status: ''},
            {index: 5, status: ''},
            {index: 6, status: ''},
            {index: 7, status: ''},
            {index: 8, status: ''},
        ]
    };

    cellPress = (index) => {
        var cells = [...this.state.cells];
        if (this.state.cells[index].status === '') {
            if (this.state.player === -1) {
                cells[index] = {index: index, status: 'o'};
            } else cells[index] = {index: index, status: 'x'};
        }
        this.setState({
            player: this.state.player * (-1),
            cells: cells,
        }, ()=>{
            console.log(this.state.cells[index].status);
            
        })
    }

    checkRow1() {
        if (this.state.cells[0].status === 'x' &&
            this.state.cells[1].status === 'x' &&
            this.state.cells[2].status === 'x') {
                return 1;
            }
        if (this.state.cells[0].status === 'o' &&
            this.state.cells[1].status === 'o' &&
            this.state.cells[2].status === 'o') {
                return -1;
            }
        return 0;
    }

    checkRow2() {
        if (this.state.cells[3].status === 'x' &&
            this.state.cells[4].status === 'x' &&
            this.state.cells[5].status === 'x') {
                return 1;
            }
        if (this.state.cells[3].status === 'o' &&
            this.state.cells[4].status === 'o' &&
            this.state.cells[5].status === 'o') {
                return -1;
            }
        return 0;
    }

    checkRow3() {
        if (this.state.cells[6].status === 'x' &&
            this.state.cells[7].status === 'x' &&
            this.state.cells[8].status === 'x') {
                return 1;
            }
        if (this.state.cells[6].status === 'o' &&
            this.state.cells[7].status === 'o' &&
            this.state.cells[8].status === 'o') {
                return -1;
            }
        return 0;
    }

    checkCol1() {
        if (this.state.cells[0].status === 'x' &&
            this.state.cells[3].status === 'x' &&
            this.state.cells[6].status === 'x') {
                return 1;
            }
        if (this.state.cells[0].status === 'o' &&
            this.state.cells[3].status === 'o' &&
            this.state.cells[6].status === 'o') {
                return -1;
            }
        return 0;
    }

    checkCol2() {
        if (this.state.cells[1].status === 'x' &&
            this.state.cells[4].status === 'x' &&
            this.state.cells[7].status === 'x') {
                return 1;
            }
        if (this.state.cells[1].status === 'o' &&
            this.state.cells[4].status === 'o' &&
            this.state.cells[7].status === 'o') {
                return -1;
            }
        return 0;
    }

    checkCol3() {
        if (this.state.cells[2].status === 'x' &&
            this.state.cells[5].status === 'x' &&
            this.state.cells[8].status === 'x') {
                return 1;
            }
        if (this.state.cells[2].status === 'o' &&
            this.state.cells[5].status === 'o' &&
            this.state.cells[8].status === 'o') {
                return -1;
            } 
        return 0;
    }

    checkDiags() {
        if ((this.state.cells[0].status === 'x' &&
            this.state.cells[4].status === 'x' &&
            this.state.cells[8].status === 'x') || (
            this.state.cells[2].status === 'x' &&
            this.state.cells[4].status === 'x' &&
            this.state.cells[6].status === 'x'
            )) {
            return 1;
        }
        if ((this.state.cells[0].status === 'o' &&
            this.state.cells[4].status === 'o' &&
            this.state.cells[8].status === 'o') || (
            this.state.cells[2].status === 'o' &&
            this.state.cells[4].status === 'o' &&
            this.state.cells[6].status === 'o'
            )) {
            return -1;
        }
        return 0;
    }

    checkWinner = () => {
        
            if (this.checkRow1() === 1 || this.checkRow2() === 1 || this.checkRow3() === 1) return 1;
            if (this.checkCol1() === 1 || this.checkCol2() === 1 || this.checkCol3() === 1) return 1;
            if (this.checkDiags() === 1) return 1;
            if (this.checkRow1() === -1 || this.checkRow2() === -1 || this.checkRow3() === -1) return -1;
            if (this.checkCol1() === -1 || this.checkCol2() === -1 || this.checkCol3() === -1) return -1;
            if (this.checkDiags() === -1) return -1;
        return 0;
    }

    render(){
        console.disableYellowBox = true; 
        if (this.checkWinner() === 1) this.props.handleWinner("Player 1 won");
        else if (this.checkWinner() === -1) this.props.handleWinner("Player 2 won");
        if (this.props.res === 1) {
            this.setState({
                player: 1,
                cells : [
                    {index: 0, status: ''},
                    {index: 1, status: ''},
                    {index: 2, status: ''},
                    {index: 3, status: ''},
                    {index: 4, status: ''},
                    {index: 5, status: ''},
                    {index: 6, status: ''},
                    {index: 7, status: ''},
                    {index: 8, status: ''},
                ]
            }, ()=> {
                    this.props.setRes(0)
                    this.props.setWinner();
                }
            );
        }
    return(
        
        <View style={styles.board}>
            <View style={styles.row1}>
                <TouchableWithoutFeedback style={styles.cellsPress} onPress={()=>this.cellPress(0)}>
                    <View><Cell state={this.state.cells[0]} player={this.state.player}/></View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style={styles.cellsPress} onPress={()=>this.cellPress(1)}>
                    <View><Cell state={this.state.cells[1]} player={this.state.player}/></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.cellsPress} onPress={()=>this.cellPress(2)}>
                    <View><Cell state={this.state.cells[2]} player={this.state.player}/></View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.row2}>
            <TouchableWithoutFeedback style={styles.cellsPress} onPress={()=>this.cellPress(3)}>
                    <View><Cell state={this.state.cells[3]} player={this.state.player}/></View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style={styles.cellsPress} onPress={()=>this.cellPress(4)}>
                    <View><Cell state={this.state.cells[4]} player={this.state.player}/></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.cellsPress} onPress={()=>this.cellPress(5)}>
                    <View><Cell state={this.state.cells[5]} player={this.state.player}/></View>
                </TouchableWithoutFeedback>
            </View>
            <View style={styles.row3}>
            <TouchableWithoutFeedback style={styles.cellsPress} onPress={()=>this.cellPress(6)}>
                    <View><Cell state={this.state.cells[6]} player={this.state.player}/></View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback style={styles.cellsPress} onPress={()=>this.cellPress(7)}>
                    <View><Cell state={this.state.cells[7]} player={this.state.player}/></View>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback style={styles.cellsPress} onPress={()=>this.cellPress(8)}>
                    <View><Cell state={this.state.cells[8]} player={this.state.player}/></View>
                </TouchableWithoutFeedback>
            </View>

        </View>
    );
    }
};

const styles = StyleSheet.create({

    board: {
        flexDirection: 'column',
        height: '50%',
        aspectRatio: 1,
        backgroundColor: '#FEC3AC',
        borderColor: 'black',
        borderWidth: 3,
    },

    row1: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        flex: 1,
    },
    row2: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        flex: 1,
    },
    row3: {
        backgroundColor: 'pink',
        flexDirection: 'row',
        flex: 1,
    },

    cellsPress: {
        flex: 1,
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
    },


})

export default GamePage;