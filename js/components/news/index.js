
'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import { Image} from 'react-native';
import { Container,Header, Title, Content,Icon,Card, CardItem, Thumbnail, Text, Button,List,ListItem } from 'native-base';

import myTheme from '../../themes/base-theme';
import styles from './styles';
class News extends Component {

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
                     <Title>新闻页</Title>
                    <Button transparent onPress={() => this.popRoute()}>
                        <Icon name='ios-arrow-back' />
                    </Button>
                </Header>

                <Content>
                    <Card>
                        <CardItem >                       
                            <Thumbnail source={require('../../../images/bg3.jpg')} />
                            <Text>NativeBase</Text>
                            <Text note>April 15, 2016</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'cover' }} source={require('../../../images/bg3.jpg')} />
                            <Text style={styles.text}>
                                Your text here
                            </Text> 
                            <Button transparent textStyle={{color: '#87838B'}}>
                                389 Stars11
                            </Button>
                        </CardItem>
                   </Card>
                   <Text></Text>

                   <List>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../../images/bg3.jpg')} />
                            <Text>测试新闻1</Text>
                            <Text note>1967</Text>
                        </ListItem>
                        <ListItem>
                            <Thumbnail square size={80} source={require('../../../images/bg3.jpg')} />
                            <Text>测试新闻2</Text>
                            <Text note>1989</Text>
                        </ListItem>
                    </List>
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

export default connect(null, bindAction)(News);
