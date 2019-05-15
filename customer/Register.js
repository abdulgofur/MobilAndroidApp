import React, { Component } from 'react';
import { StyleSheet, Image, View, TextInput, ScrollView } from 'react-native';
import {
    Container, Header, Left, Body, Right, Title, Subtitle, Thumbnail,
    Button, Icon, Form, Item, Input, InputGroup, Content, Grid, Col, Label, Text, Row, Card, KeyboardAvoidingView
} from 'native-base';

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // thisCustomer: {
                firstName: '',
                lastName: '',
                birthDate: '',
                email: '',
                password: ''
            // }
        }
    }
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <ScrollView>
                <View>
                    <Form style={{ backgroundColor: '#1e3f44', height: 650 }}>
                        <Card>
                            <Text style={styles.headerLogin}>Register <Icon name="ios-person-add" /> </Text>
                        </Card>
                        <Item stackedLabel style={styles.textLogin}>
                            <Label style={{ color: 'white' }}>First Name</Label>
                            <Input style={{ color: 'white', fontSize: 13 }} floatingLabel value={this.state.firstName}
                                onChangeText={
                                    (user) => {
                                        this.setState({ firstName: user })
                                    }
                                }
                            />
                        </Item>

                        <Item stackedLabel style={styles.textLogin}>
                            <Label style={{ color: 'white' }}>Last Name</Label>
                            <Input style={{ color: 'white', fontSize: 13 }} value={this.state.lastName}
                                onChangeText={
                                    (pass) => {
                                        this.setState({ lastName: pass })
                                    }
                                }
                            />
                        </Item>

                        <Item stackedLabel style={styles.textLogin}>
                            <Label style={{ color: 'white' }}>Birth Date</Label>
                            <Input style={{ color: 'white', fontSize: 13 }} value={this.state.birthDate}
                                onChangeText={
                                    (pass) => {
                                        this.setState({ birthDate: pass })
                                    }
                                }
                            />
                        </Item>


                        <Item stackedLabel style={styles.textLogin}>
                            <Label style={{ color: 'white' }}>Email</Label>
                            <Input style={{ color: 'white', fontSize: 13 }} value={this.state.email}
                                onChangeText={
                                    (pass) => {
                                        this.setState({ email: pass })
                                    }
                                }
                            />
                        </Item>

                        <Item stackedLabel style={styles.textLogin}>
                            <Label style={{ color: 'white' }}>Password</Label>
                            <Input style={{ color: 'white', fontSize: 13 }} value={this.state.password}
                                onChangeText={
                                    (pass) => {
                                        this.setState({ password: pass })
                                    }
                                }
                            />
                        </Item>
                        <Button style={styles.posisitionButton} block light onPress={this._register}><Text> Register </Text></Button>
                    </Form>
                </View>
            </ScrollView>
        )
    }

    _register = async () => {
        const data = {
            firstName: this.state.username,
            lastName: this.state.lastName,
            birthDate: this.state.birthDate,
            email: this.state.email,
            password: this.state.password
        }
        Axios.post('http://192.168.1.32:8080/cust?access_token=626cad98-3f7b-458d-a085-8e26fba56910', data)
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
        fontSize: 5,
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
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
        width: 300,
        alignSelf: "center",
        marginTop: 20,
        height: 35
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
});