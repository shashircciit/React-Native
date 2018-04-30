import React, { Component } from 'react';
import { AppRegistry, AsyncStorage, TouchableOpacity, Text, View, TextInput, StyleSheet, Image, Platform ,Alert} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Button, Header, Content, Item, Input } from 'native-base';



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error:"",
        };
    }
 

    static navigationOptions = {
        header: null
    };

    handleEmail = (text) => {
        this.setState({ email: text })
    }
    handlePassword = (text) => {
        this.setState({ password: text })
    }
    login = (email, pass) => {
        var self = this;
        var payload = {
            "email": this.state.email,
            "password": this.state.password
        }
        if(this.state.email!="" && this.state.password !=""){
        var url = "http://10.2.1.49:5037/api/login";
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(payload)
        }).then(res => res.json())
            .then(function (myjson) {
                if (myjson.status == 1) {
                    console.log(JSON.stringify(myjson.data.verificationToken))
                    alert("Successfully Done")
                    // self.props.navigation.navigate('Drawerpage');
           //          AsyncStorage.setItem('token',myjson.data.verificationToken)
             //        console.log(AsyncStorage.getItem(token))
                        
                    return;
                }
                else {
                    self.setState({error:myjson.message});
                };
            }
            )}
            else{
                self.setState({error:"Blank Fields"});
            }
    }

    render() {

        return (
            <View style={styles.container}>
                <Image source={require('../images/images.png')} style={styles.image} />
                <Container>
                    <Content style={styles.Content}>
                        <Item rounded style={{ marginBottom: 20 }}>
                            <Input autoCapitalize = 'none' placeholder='Email' onChangeText={this.handleEmail.bind(this)} />
                        </Item>
                        <Item rounded>
                            <Input autoCapitalize = 'none'placeholder='Password' onChangeText={this.handlePassword.bind(this)} />
                        </Item>
                        <Button  block style={{ marginTop: 20, backgroundColor: '#3f51b5' }} onPress={this.login.bind(this,this.state.email, this.state.password)
                        }><Text style={{ color: 'white', fontSize: 28, fontFamily: 'Futura' }}>Submit</Text></Button>
                          <Text style={styles.Error}>
                          {this.state.error}
                          </Text>
                    </Content>
                </Container>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: '100%'
    },
    Content: {
        marginTop: 30,
        width: 300,
        marginLeft: 40,
        paddingBottom: 20
    },
    image: {
        justifyContent: 'center',
        height: 100,
        marginLeft: 80,
        marginTop: 50,
        alignItems: 'center',

    },
    Error:{
        marginTop:12,
        color:'#7a42f4',
        fontFamily:'Futura',
        fontSize:20
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    submitButtonText: {
        color: 'white'
    }
})

