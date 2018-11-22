import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Keyboard, Button, TouchableWithoutFeedback } from 'react-native'
import OtpInputs from 'react-native-otp-inputs'
import { styles } from '../styles'

export default class OtpScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Verify',
            headerRight: (
                <View style={{marginRight: 8}}>
                    <Button
                    onPress={() => navigation.navigate('PhoneNumber')}
                    title="Cancel"
                    color="#fff" />
                </View>
            )
        }
    };
    constructor(){
        super();
        this.state = {
            otp: ''
        }
    }



    render() {
        const { params } = this.props.navigation.state
        const handleOtpChange = (otp) => {
            this.setState({otp})
            if(otp.length === 4){
                this.props.navigation.navigate('Password')
            }
        }
        return (
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <Text style={[styles.whiteText, styles.largeText, styles.boldText]}> Please enter the code we sent you to </Text>
                    <Text style={[styles.whiteText, styles.largeText, styles.boldText]}>verify your phone number.</Text>

                    <Text style={[styles.greyText,  styles.largeText, styles.phoneNumberNotification]}> Sent to +234 {params.phoneNumber} </Text>
                    
                    <View style={styles.otpWrapper}>
                        <OtpInputs
                            inputContainerStyles={styles.otpInputContainer}
                            clearTextOnFocus={true}
                            KeyboardType="numeric"
                            handleChange={code => handleOtpChange(code)} numberOfInputs={4} />
                    </View>

                    <Text style={[styles.whiteText,  styles.mediumText]}> I did not receive a code! </Text>
                    <TouchableOpacity style={styles.resendButton}>
                        <Text style={[styles.whiteText, styles.resendButtonText]}>Resend</Text>
                    </TouchableOpacity>
                </View>
            </TouchableWithoutFeedback>
        )
    }
}
