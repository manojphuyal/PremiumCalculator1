import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity,TextInput} from 'react-native';
import { red } from 'ansi-colors';




export default class Result extends Component {
constructor(props){
    super(props)
}
    static navigationOptions ={
        title:'Result'
    }


  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text> result show : {this.props.navigation.getParam('result','0')} </Text>
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
});
