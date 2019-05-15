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
            thisCustomer: {
                firstName: '',
                lastName: '',
                birthDate: '',
                email: '',
                password: ''
            }
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
                                
                        <Item stackedLabel style={styles.textLogin}>
                            <Label style={{ color: 'white' }}>No.Ktp</Label>
                            <Input style={{ color: 'white', fontSize: 13 }} value={this.state.ktp}
                                onChangeText={
                                    (pass) => {
                                        this.setState({ ktp: pass })
                                    }
                                }
                            />
                        </Item>

                        <Item stackedLabel style={styles.textLogin}>
                            <Label style={{ color: 'white' }}>Nama Ibu</Label>
                            <Input style={{ color: 'white', fontSize: 13 }} value={this.state.namaIbu}
                                onChangeText={
                                    (pass) => {
                                        this.setState({ namaIbu: pass })
                                    }
                                }
                            />
                        </Item>

                        <Item stackedLabel style={styles.textLogin}>
                            <Label style={{ color: 'white' }}>Telp</Label>
                            <Input style={{ color: 'white', fontSize: 13 }} value={this.state.telepon}
                                onChangeText={
                                    (pass) => {
                                        this.setState({ telepon: pass })
                                    }
                                }
                            />
                        </Item>
                        <Button style={styles.posisitionButton} block light onPress={this._login}><Text> Register </Text></Button>
                    </Form>
                </View>
            </ScrollView>
        )
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