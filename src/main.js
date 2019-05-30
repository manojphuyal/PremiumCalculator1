import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import { red } from 'ansi-colors';




export default class main extends Component {

    static navigationOptions ={
        title:'Main'
    }
    goCalc = () =>{
        this.props.navigation.navigate('Calculator')
        }
    
      
  render() {
    return (
      <View style={styles.container}>
        <View>
             <TouchableOpacity onPress={ this.goCalc} >
            <Text style={styles.button}>Go To Calculator</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    backgroundColor: '#FFFFFF',
  },
  button:{
    padding:10,
    backgroundColor:'blue',
    color:'#fff',
    textAlign:'center',
    borderRadius:8
  }
});
