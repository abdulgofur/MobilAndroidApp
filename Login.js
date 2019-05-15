import React, { Component } from 'react';
import { StyleSheet, Image, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import {
    Container, Header, Left, Body, Right, Title, Subtitle, Thumbnail,
    Button, Icon, Form, Item, Input, InputGroup, Content, Grid, Col, Label, Text, Row, Card
} from 'native-base';


import { signIn, SignOut } from './auth';
import Axios from 'axios';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <ScrollView>
            <View style={{ backgroundColor: '#1e3f44', height: 650 }}>
                {/* <Grid style={{ flexDirection: "row" }}>
                    <Col style={{ backgroundColor: '#1e3f44', height: 650 }}></Col>
                </Grid> */}

                <View style={{ justifyContent: "center", height: 200 }} >
                    <Thumbnail style={styles.logoContainer}
                        source={require('../MobileAndroidApp/resources/logo.png')}
                    />
                </View>


                <Form>
                    <Card>
                        <Text style={styles.headerLogin}>Login <Icon name="unlock" /> </Text>
                    </Card>
                    <Item stackedLabel style={styles.textLogin}>
                        <Label style={{ color: 'white' }}>UserName</Label>
                        <Input style={{ color: 'white', fontSize: 13 }} floatingLabel value={this.state.username}
                            onChangeText={
                                (user) => {
                                    this.setState({ username: user })
                                }
                            }
                        />
                    </Item>

                    <Item stackedLabel style={styles.textLogin}>
                        <Label style={{ color: 'white' }}>Password</Label>
                        <Input style={{ color: 'white', fontSize: 13 }} secureTextEntry={true} value={this.state.password}
                            onChangeText={
                                (pass) => {
                                    this.setState({ password: pass })
                                }
                            }
                        />
                    </Item>
                </Form>


                <Form>
                    <Button style={styles.posisitionButton} block light onPress={this._auth}><Text> Login </Text></Button>
                </Form>

                <View>
                    <Text style={{ color: 'white', justifyContent: "center", alignSelf: "center", fontSize: 15 }}
                    >Create New Account ? . </Text>
                    <TouchableOpacity style={{ alignSelf: "center" }} small onPress={() => this.props.navigation.navigate('Register')} title="Register">
                        <Text style={{ color: 'black' }}>SignUp</Text>
                    </TouchableOpacity>
                </View>
            </View>
            </ScrollView>
        )
    }

    _auth = async () => {
        const { username, password } = this.state;
        if (username != password) {
            alert('Invalid UserName or Password !');
        } else {
            const login = await signIn(username, password);
            if (login) {
                this.props.navigation.navigate('Home');
                alert('Login Success');
            } else {
                alert('Login Failed');
            }
        }
    }

    _login1 = async () => {
        const data = {
            email: this.state.username,
            password: this.state.password
        }
        fetch('http://192.168.1.23:8080/login', {
            method: "POST",
            Body: JSON.stringify(data),
            header: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        }).then((result) => {
            result.json();
        })
            .then(async (Response) => {
                console.log(JSON.stringify(Response));
                if (response.responseCode == '01') {
                    const login = await signIn(this.state.username, this.state.password);
                    if (login) {
                        this.props.navigation.navigate('Home');
                        alert('Login Success');
                    } else {
                        alert('Login Failed');
                    }
                } else {
                    alert('Invalid Username or Password !');
                }
            });
    }


    _login = async () => {
        const data = {
            email: this.state.username,
            password: this.state.password
        }
        Axios.post('http://192.168.1.32:8080/login?access_token=4a8c0b5e-da89-4413-bd08-420d83f453a7', data)
            .then(async (result) => {
                const response = result.data;
                // alert(JSON.stringify(response))
                console.log(JSON.stringify(response));
                if (response.responsCode == '01') {
                    const login = await signIn(this.state.username, this.state.password);
                    if (login) {
                        this.props.navigation.navigate('Home');
                        alert('Login Success');
                    } else {
                        alert('Login Failed');
                    }
                } else {
                    alert('Invalid Username or Password !');
                }
            });
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxProfile: {
        backgroundColor: 'white'
    },
    textLogin: {
        fontSize: 20,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
        width: 300,
        alignSelf: "center",
        color: 'white'
    },
    textTitle: {
        fontSize: 25,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5,
        width: 300,
        alignSelf: "center",
        color: "white"
    },
    posisitionButton: {
        justifyContent: "center",
        marginTop: 20,
        width: 300,
        alignSelf: "center"
    },
    logoContainer: {
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "center",
        width: 300,
        height: 150,

    },
    headerLogin: {
        fontSize: 25,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 5,
        width: 300,
        alignSelf: "center",
        color: "black"
    },
    // textSignup : {
    //     flexDirection: Row 
    // }
});