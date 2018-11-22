import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
        marginVertical: 2,
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
        marginBottom: 24,
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
    },
    phoneNumberNotification: {
        marginTop: 20,
        marginBottom: 12
    },
    resendButton: {
        marginVertical: 4,
    },
    resendButtonText: {
        padding: 8,
        fontSize: 14,
    },
    passwordInputText: {
        color: '#FFF',
        borderBottomColor: '#EEE',
        width: '82%',
        paddingBottom: 12,
        fontSize: 16,
        borderBottomWidth: 1,
        marginBottom: 32
    },
    marginBottom32: {
        marginBottom: 32
    },
    otpWrapper: {
        height: 120
    },
    otpInputContainer: {
        backgroundColor: 'rgba(	163, 73, 164, 0.2)'
    }
});
  
