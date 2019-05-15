import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Thumbnail, Button, Icon, View } from 'native-base';

import { signOut, isSignedIn } from './auth';

export default class Home extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#1e3f44', height: 650 }}>
                    <Left>
                        <Image
                            style={{ width: 300, height: 300}}
                            source={require('../MobileAndroidApp/resources/logo-png.png')}
                        />
                    </Left>
                    <Body>
                        <Title>A-Bank</Title>
                        <Subtitle>Good People Growth</Subtitle>
                    </Body>
                </Header>

                <Button transparent onPress={this._checkLogin}><Text>check Login</Text></Button>

                
            </View>
        );
    }
    // _openDrawer = () => {
    //     this.props.navigation.openDrawer();
    // }

    _checkLogin = async () => {
        const login = await isSignedIn();
        if (login) {
            alert('True');
        } else {
            alert('Flase');
        }
    }

    _removeLog = async () => {
        const login = await signOut();
        if (login)  {
            alert('LOGOUT SUCCESS');
            ;
        }else{
            alert('LOGOUT SUCCESS');
            this.props.navigation.navigate('Login');
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxProfile: {
        backgroundColor: 'white'
    }
});