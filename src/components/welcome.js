import React, { Component } from 'react';
import { AppRegistry, TouchableOpacity, Text, View, TextInput, StyleSheet, Button, Image, Platform } from 'react-native';


export default class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMe: true
        };
    }

    static navigationOptions = {
        header: null
    };

    componentWillMount(){
        setTimeout(()=>{
        this.props.navigation.navigate('Login');
      },4000)
    }


    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/asd.png')} style={{ height: 100, width: 400 }} />
                <Text style={styles.text}>The internet of Me.</Text>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50
    },
    text: {
        fontSize: 30,
        fontWeight: 'bold',
        fontFamily: 'Futura',
        color: 'steelblue',
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})
