'use strict';

var React = require('react-native');

var { StyleSheet,Dimensions } = React;
var deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
    row: {
    	flex: 1, 
    	alignItems: 'center'
    },
    text: {
    	 color: '#fff',
    	fontSize: 30,
    	fontWeight: 'bold'
    },
    viewpager: {
	    flex: 1,
	    height:deviceHeight * 0.8 /2,
	},
	slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },

  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },

  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  image: {
    flex: 1,
  }
});