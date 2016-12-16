
'use strict';

import React, { Component} from 'react';
import { connect } from 'react-redux';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import {Swiper} from '../../../node_modules/react-native-swiper/dist';
import { Container, Header, Title, Content,  Button, Icon } from 'native-base';

import myTheme from '../../themes/base-theme';
var ViewPager = require('react-native-viewpager');
var TopScreen = require('./TopScreen');
import styles from './styles';
class ContrlPage extends Component {
    popRoute() {
        this.props.popRoute();
    }
    render() {
        return (
            <Container theme={myTheme} style={{backgroundColor: '#565051'}}>
                <Header>
                    <Button transparent onPress={this.props.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>
                    <Title>页面</Title>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' />
                    </Button>
                </Header>

                <Content padder>
                    <TopScreen style={styles.viewpager} />
                    
                     

                </Content>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute())
    }
}

export default connect(null, bindAction)(ContrlPage);
