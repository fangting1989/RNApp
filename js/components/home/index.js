
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';

import { Container, Header, InputGroup,Footer,Title,Tabs, Input,FooterTab,Badge,Content, View, Text, Button, Icon,Card,CardItem,Thumbnail } from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

import myTheme from '../../themes/base-theme';
import styles from './styles';
import _ from  'lodash';

let NavList = [{active:'active',name:'首页',activenavicon:'ios-apps-outline',navicon:'ios-apps-outline'},
{active:'',name:'分类',activenavicon:'ios-options',navicon:'ios-options'},
{active:'',name:'购物车',activenavicon:'md-cart',navicon:'md-cart'},
{active:'',name:'我',activenavicon:'ios-contact-outline',navicon:'ios-contact-outline'}]

class Home extends Component {

    constructor(props) {
       super(props);
       this.state = {
            NeedFlash:true
       };
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    NavItemClick(item){
      _.forEach(NavList,function(obj){
        if(item.name == obj.name){
          obj.active = 'active'
        }
        else{
          obj.active = ''
        }
      })

      this.setState({NeedFlash: !this.state.NeedFlash});
    }

    render() {
        return (
          <Container style={styles.container}>
            <View style={styles.Header}>
            <Grid style={styles.gd}>
              <Col style={{width:44}}>
                <Button transparent>
                  <Icon name='md-qr-scanner' style={{width:24,paddingLeft:2}} />
                </Button>
              </Col>
              <Col>
                    <Grid>
                      <Col>
                        <InputGroup style={styles.iputgp}>
                            <Input placeholder='检索' style={styles.input} placeholderTextColor='#CFD6DE'
                             />
                        </InputGroup>
                      </Col>
                      <Col style={{width:40}}>
                        <Button transparent>
                          <Icon name='ios-search' style={{width:20}} />
                        </Button>
                      </Col>
                    </Grid>

              </Col>
            </Grid>
            </View>
              <Content>
                <Card style={{ flex: 0 }}>
                      <CardItem>
                          <Thumbnail source={require('../images/ji.png')} />
                          <Text>NativeBase</Text>
                          <Text note>April 15, 2016</Text>
                      </CardItem>

                      <CardItem cardBody>
                          <Image style={{ resizeMode: 'cover' }} source={require('../images/file.png')} />
                          <Text>
                              这是测试内容好么
                          </Text>
                          <Button transparent textStyle={{color: '#87838B'}}>
                              <Icon name="logo-github" />
                              <Text>1,926 stars</Text>
                          </Button>
                      </CardItem>
                 </Card>

                 <Card style={{ flex: 0 }}>
                       <CardItem>
                           <Thumbnail source={require('../images/ji.png')} />
                           <Text>NativeBase</Text>
                           <Text note>April 15, 2016</Text>
                       </CardItem>

                       <CardItem cardBody>
                           <Image style={{ resizeMode: 'cover' }} source={require('../images/file.png')} />
                           <Text>
                               这是测试内容好么
                           </Text>
                           <Button transparent textStyle={{color: '#87838B'}}>
                               <Icon name="logo-github" />
                               <Text>1,926 stars</Text>
                           </Button>
                       </CardItem>
                  </Card>


                  <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('../images/ji.png')} />
                            <Text>NativeBase</Text>
                            <Text note>April 15, 2016</Text>
                        </CardItem>

                        <CardItem cardBody>
                            <Image style={{ resizeMode: 'cover' }} source={require('../images/file.png')} />
                            <Text>
                                这是测试内容好么
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Icon name="logo-github" />
                                <Text>1,926 stars</Text>
                            </Button>
                        </CardItem>
                   </Card>

                   <Card style={{ flex: 0 }}>
                         <CardItem>
                             <Thumbnail source={require('../images/ji.png')} />
                             <Text>NativeBase</Text>
                             <Text note>April 15, 2016</Text>
                         </CardItem>

                         <CardItem cardBody>
                             <Image style={{ resizeMode: 'cover' }} source={require('../images/file.png')} />
                             <Text>
                                 这是测试内容好么
                             </Text>
                             <Button transparent textStyle={{color: '#87838B'}}>
                                 <Icon name="logo-github" />
                                 <Text>1,926 stars</Text>
                             </Button>
                         </CardItem>
                    </Card>


                    <Card style={{ flex: 0 }}>
                          <CardItem>
                              <Thumbnail source={require('../images/ji.png')} />
                              <Text>NativeBase</Text>
                              <Text note>April 15, 2016</Text>
                          </CardItem>

                          <CardItem cardBody>
                              <Image style={{ resizeMode: 'cover' }} source={require('../images/file.png')} />
                              <Text>
                                  这是测试内容好么
                              </Text>
                              <Button transparent textStyle={{color: '#87838B'}}>
                                  <Icon name="logo-github" />
                                  <Text>1,926 stars</Text>
                              </Button>
                          </CardItem>
                     </Card>

                     <Card style={{ flex: 0 }}>
                           <CardItem>
                               <Thumbnail source={require('../images/ji.png')} />
                               <Text>NativeBase</Text>
                               <Text note>April 15, 2016</Text>
                           </CardItem>

                           <CardItem cardBody>
                               <Image style={{ resizeMode: 'cover' }} source={require('../images/file.png')} />
                               <Text>
                                   这是测试内容好么
                               </Text>
                               <Button transparent textStyle={{color: '#87838B'}}>
                                   <Icon name="logo-github" />
                                   <Text>1,926 stars</Text>
                               </Button>
                           </CardItem>
                      </Card>
              </Content>
                <Footer >
                    <FooterTab>
                    {
                      NavList.map(function (item) {
                        if(item.active == ''){
                          return <Button onPress={this.NavItemClick.bind(this,item)}>{item.name}<Icon name={item.navicon} /></Button>
                        }
                        else{
                          return  <Button active  onPress={this.NavItemClick.bind(this,item)}>{item.name}<Icon name={item.navicon} /></Button>
                        }

                      },this)
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
