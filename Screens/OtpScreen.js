import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class OtpScreen extends Component {
    static navigationOptions = {
        title: 'Verify',
    };
    render() {
        const { params } = this.props.navigation.state
        return (
        <View>
            <Text> OTP </Text>
            <Text> {params.phoneNumber} </Text>
        </View>
        )
    }
}

const styles = StyleSheet.create({})