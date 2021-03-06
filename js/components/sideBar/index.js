
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';
import {Content, Text, List, ListItem } from 'native-base';


import styles from './style';

class SideBar extends Component {

    navigateTo(route) {
        this.props.closeDrawer(); 
        this.props.replaceOrPushRoute(route);
    }

    render(){
        return (
            <Content style={styles.sidebar} >
                <List foregroundColor={'white'}>
                    <ListItem onPress={() => this.navigateTo('home')} >
                        <Text>首页</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('blankPage')} >
                        <Text>Blank Page</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('news')} >
                        <Text>新闻</Text>
                    </ListItem>
                    <ListItem onPress={() => this.navigateTo('pageview')} >
                        <Text>控件</Text>
                    </ListItem>
                </List>
            </Content>
        );
    }
}

function bindAction(dispatch) {
    return {
        closeDrawer: ()=>dispatch(closeDrawer()),
        replaceOrPushRoute:(route)=>dispatch(replaceOrPushRoute(route))
    }
}

export default connect(null, bindAction)(SideBar);
