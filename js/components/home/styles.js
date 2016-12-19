
'use strict';

var React = require('react-native');

var { StyleSheet,Dimensions } = React;
var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FCFCFC',
        flex: 1,
    },
    Header:{
      width:deviceWidth,
      height:50,
      backgroundColor:'#3185FF',
      paddingTop:3
    },
    gd:{
      width:deviceWidth
    },
    col1:{
      width:35
    },
    HeadBtn:{
      width:30,
      height:40
    },
    iputgp:{
      width:deviceWidth - 40,
      height:40,
    },
    input:{
      width:30,
      borderColor: '#CCC',
      borderWidth: 1
    }
});
