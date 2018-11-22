import React, { Component } from "react";
import {
  Text,
  TextInput,
  Button,
  Keyboard,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  View,
  TouchableWithoutFeedback
} from "react-native";
import { styles } from "../styles";

export default class PasswordScreen extends Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'Password',
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
  constructor() {
    super();
    this.state = {
      password: "",
      passwordConfirmation: ""
    };
  }
  callAlert(){
    Alert.alert(
        'Complete',
        'Ready to stop?',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
  }
  render() {
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
            behavior="padding"
            enabled
            style={styles.container}
            >
            <Text style={[styles.whiteText, styles.largeText, styles.boldText]}>Please set a password for your clane</Text>
            <Text style={[styles.whiteText, styles.largeText, styles.boldText, styles.marginBottom32]}>account.</Text>

                <TextInput
                maxLength={10}
                ref={c => this.password = c}
                placeholder="Password"
                onSubmitEditing={() => this.passwordConfirmation.focus()}
                placeholderTextColor="#999"
                style={styles.passwordInputText}
                secureTextEntry={true}
                onChangeText={text => this.setState({ password: text })}
                value={this.state.password}
                />

                <TextInput
                maxLength={10}
                ref={c => this.passwordConfirmation = c}
                placeholder="Confirm Password"
                placeholderTextColor="#999"
                style={styles.passwordInputText}
                secureTextEntry={true}
                onChangeText={text => this.setState({ passwordConfirmation: text })}
                value={this.state.passwordConfirmation}
                />

            <TouchableOpacity
                onPress={() =>
                this.callAlert()
                }
                style={styles.button}
            >
                <Text style={[styles.whiteText, styles.largeText, styles.boldText]}>Sign Up</Text>
            </TouchableOpacity>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
  }
}
