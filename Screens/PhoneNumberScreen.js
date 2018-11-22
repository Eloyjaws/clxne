import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback
} from "react-native";
import { styles } from "../styles";
import Logo from "../assets/clane-logo-white.png";

export default class PhoneNumberScreen extends Component {
  static navigationOptions = {
    // title: 'Details',
  };
  constructor() {
    super();
    this.state = {
      phoneNumber: ""
    };
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          behavior="padding"
          enabled
          style={styles.container}
        >
          <Image style={styles.logo} source={Logo} />
          <Text style={[styles.whiteText, styles.largeText, styles.boldText]}>Which mobile number do you want to</Text>
          <Text style={[styles.whiteText, styles.largeText, styles.boldText]}>
            use for your Clane account?
          </Text>

          <View style={styles.phoneInput}>
            <Text style={[styles.whiteText, styles.mediumText]}>+234</Text>
            <TextInput
              maxLength={10}
              keyboardType="number-pad"
              placeholder="Enter mobile number"
              placeholderTextColor="#999"
              style={styles.phoneInputText}
              onChangeText={text => this.setState({ phoneNumber: text })}
              value={this.state.phoneNumber}
            />
          </View>

          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("Otp", {
                phoneNumber: this.state.phoneNumber || "0123456789"
              })
            }
            style={styles.button}
          >
            <Text style={[styles.whiteText, styles.largeText, styles.boldText]}>
              Continue
            </Text>
          </TouchableOpacity>

          <Text style={[styles.greyText, styles.mediumText]}>By signing up you agree to the</Text>
          <Text style={[styles.greyText, styles.mediumText]}>Clane Service Agreement.</Text>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
