
'use strict';

var React = require('react-native');

var { StyleSheet, Dimensions } = React;



var deviceHeight = Dimensions.get('window').height;
var deviceWidth = Dimensions.get('window').width;

module.exports = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FCFCFC'
    },
    logDiv:{
      marginTop:deviceHeight * 0.11,
      marginBottom:30,
      marginLeft:(deviceWidth - 90) /2,
      width:90,
      height:90,
      paddingTop:20,
      paddingLeft:20,
      paddingRight:20,
      paddingBottom:20,
      backgroundColor:'#fff',
      borderRadius: 70
    },
    logo:{
      width:50,
      height:50,
      backgroundColor:'#fff'
    },
    shadow: {
        flex: 1,
        width: null,
        height: null,
        backgroundColor: 'transparent'
    },
    bg: {
        flex: 1,
        marginTop:0,
        backgroundColor: 'transparent',
        paddingTop: 20,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 30,
        bottom: 0
    },
    InputGroup: {
        marginBottom: 20,
        borderColor: '#CCC',
        borderWidth: 1
    },
    input:{
        borderWidth:0,
        color:'#000'
    },
    logBtnDiv:{
      marginTop:10,
      marginBottom:10,
      width:deviceWidth - 20,
    },
    logoBtn:{
      borderRadius: 10,
      height:40,
      borderWidth:1
    },
    gd:{
      marginTop: 60,
      paddingTop:20
    }
});
