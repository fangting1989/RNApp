
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';

import { Container, Header, InputGroup,Footer,Title,Tabs, Input,FooterTab,Badge,Content, View, Text, Button, Icon } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import myTheme from '../../themes/base-theme';
import styles from './styles';


class Home extends Component {
    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    NavItemClick(){
      console.log('12')
    }

    render() {
      let NavList = [{active:'active',name:'首页',activenavicon:'ios-apps-outline',navicon:'ios-apps-outline'},
      {active:'',name:'分类',activenavicon:'ios-options',navicon:'ios-options'},
      {active:'',name:'购物车',activenavicon:'md-cart',navicon:'md-cart'},
      {active:'',name:'我',activenavicon:'ios-contact-outline',navicon:'ios-contact-outline'}]

        return (
          <Container>
              <Content />
                <Footer >
                    <FooterTab>
                    {
                      NavList.map(function (item) {
                        return <Button onPress={()=>this.NavItemClick()}>{item.name}<Icon name={item.navicon} /></Button>
                      })
                    }
                    </FooterTab>
                </Footer>
          </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Home);
