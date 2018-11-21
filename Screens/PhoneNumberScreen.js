import React, { Component } from 'react'
import PhoneInput from 'react-native-phone-input'
import { Text, StyleSheet, TextInput, View, Image, KeyboardAvoidingView, TouchableOpacity } from 'react-native'

import Logo from '../assets/clane-logo-white.png';

export default class PhoneNumberScreen extends Component {
    static navigationOptions = {
        // title: 'Details',
    };
    constructor(){
        super();
        this.state = {
            phoneNumber: ''
        }
    }
    render() {
        return (
            <KeyboardAvoidingView 
            behavior="padding"
            enabled
            style={styles.container}>
            
                <Image style={styles.logo} source={Logo} />
                <Text style={[styles.whiteText, styles.largeText]}> Which mobile number do you want to </Text>
                <Text style={[styles.whiteText, styles.largeText]}>use for your Clane account?</Text>
                
                <View style={styles.phoneInput}>
                    <Text style={[styles.whiteText, styles.mediumText]}>+234</Text>
                    <TextInput 
                    maxLength={10}
                    keyboardType="number-pad"
                    placeholder="Enter mobile number"
                    placeholderTextColor="#999"
                    style={styles.phoneInputText}
                    onChangeText={(text) => this.setState({phoneNumber: text})}
                    value={this.state.phoneNumber}/>
                </View>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('Otp', {phoneNumber: this.state.phoneNumber})}
                    style={styles.button}>
                    <Text style={[styles.whiteText, styles.largeText, styles.boldText]}>Continue</Text>
                </TouchableOpacity>

                <Text style={[styles.greyText, styles.mediumText]}> By signing up you agree to the </Text>
                <Text style={[styles.greyText, styles.mediumText]}>Clane Service Agreement.</Text>

            </KeyboardAvoidingView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#2D03C0',
      alignItems: 'center',
      paddingTop: 20,
      justifyContent: 'flex-start',
    },
    logo: {
        width: 100,
        height: 50,
        marginBottom: 24,
        resizeMode: 'center'
    },
    largeText: {
        fontSize: 20,
    },
    mediumText: {
        fontSize: 16,
    },
    whiteText: {
        color: '#FFF',
    },
    greyText: {
        color: '#999',
    },
    boldText: {
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: 'rgba(	163, 73, 164, 0.2)',
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
        width: '80%',
        padding: 16,
        marginBottom: 24
    },
    phoneInput: {
        width: '80%',
        marginTop: 52,
        marginBottom: 32,
        marginHorizontal: 64,
        display: 'flex',
        flexDirection: 'row'
    },
    phoneInputText: {
        color: '#FFF',
        borderBottomColor: '#999',
        marginLeft: 24,
        width: '80%',
        paddingBottom: 12,
        fontSize: 16,
        borderBottomWidth: 1,
    },
    phoneButton: {
        marginRight: 200
    }
});
  
