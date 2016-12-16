
'use strict';

import React, { Component } from 'react';
import { DeviceEventEmitter, Dimensions, Image ,ToastAndroid,Text} from 'react-native';
import { connect } from 'react-redux';

import { replaceRoute } from '../../actions/route';
import { userLogin } from '../../actions/login';

import { Container, Header,Title,Content, InputGroup, Input, Button, Icon, View} from 'native-base';

import { Col, Row, Grid } from "react-native-easy-grid";
var Toast = require('../../../node_modules/@remobile/react-native-toast');
const { BlurView, VibrancyView } = require('react-native-blur');

import myTheme from '../../themes/base-theme';
import styles from './styles';

const LogoImg = require('../images/login.png')

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            scroll: false,
            username:'',
            userpwd:''
        };
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    userLoginPress(){
      // this.props.userLogin('fangting','fangting').then(function(result){
      //   console.warn("back");
      //   console.log("back---data")
      //   console.log(result)
      // })
      this.props.replaceRoute('home');
    }
    ForgetPress(){
      Toast.showLongCenter("对不起，功能未开放！");
    }
    render() {
        return (
             <Container theme={myTheme} style={styles.container}>
                <Content>
                <View style={styles.logDiv}>
                  <Image source={LogoImg} style={styles.logo} />
                </View>
                <View style={styles.bg}>
                                    <InputGroup style={styles.input}>
                                        <Icon name='ios-person' style={{ color: '#CCC'}} />
                                        <Input placeholder='登入名' style={styles.input} placeholderTextColor='#CFD6DE'
                                          onChangeText={(username) => this.setState({username})}
                                          value={this.state.username}
                                        />
                                    </InputGroup>
                                    <InputGroup style={styles.InputGroup}>
                                        <Icon name='ios-unlock-outline' style={{ color: '#CCC'}} />
                                        <Input style={styles.input}  placeholderTextColor='#CFD6DE'
                                            placeholder='密码'
                                            secureTextEntry={true}
                                            onChangeText={(userpwd) => this.setState({userpwd})}
                                            value={this.state.userpwd}
                                        />
                                    </InputGroup>
                                    <View style={styles.logBtnDiv}>

                                        <Button  block danger style={styles.logoBtn} textStyle={{color: '#fff'}} onPress={()=>this.userLoginPress()} >登入</Button>
                                    </View>
                                    <Grid style="gd">
                                    <Col></Col>
                                   <Col><Text onPress={()=>this.ForgetPress()}>忘记密码?</Text></Col>
                                        </Grid>
                                </View>
                </Content>
             </Container>


        )
    }
}

function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        userLogin:(username,userpwd)=>dispatch(userLogin(username,userpwd))
    }
}

const mapStateToProps = (state)=>{
  return{
    loginState:state.login.loginState
  }
}

export default connect(mapStateToProps, bindActions)(Login);
