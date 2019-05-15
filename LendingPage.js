import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import { Container, Header, Left, Body, Right, Title, Subtitle, Thumbnail, Button, Icon, View } from 'native-base';

export default class LendingPage extends Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <View>
                <Header style={{ backgroundColor: '#1e3f44', height: 650 }}>
                    <Left>
                        <Thumbnail
                            style={{ width: 50, height: 50, marginRight: 20 }}
                            source={require('../MobileAndroidApp/resources/A-Bank.jpg')}
                        />
                    </Left>
                    <Body>
                        <Title>A-Bank</Title>
                        <Subtitle>Good People Growth</Subtitle>
                    </Body>

                    <Right>
                    <Button transparent onPress={this._removeLog}>
                    <Image
                            style={{ width: 20, height: 20}} 
                            source={require('../MobileAndroidApp/resources/Icon/Icon-logout.png')}
                            onPress={this._removeLog}
                        />
                    </Button>
                   
                        {/* <Button transparent onPress={this._openDrawer}>
                            <Icon name="menu" />
                        </Button> */}
                    </Right>
                </Header>

                <Button transparent onPress={this._checkLogin}><Text>check Login</Text></Button>  
            </View>
        );
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