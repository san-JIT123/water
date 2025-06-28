import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
} from 'react-native';

export default function LoginScreen() {

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.screen}>
            <View style={styles.headerImage}>
                <Image source={require('../../assets/images/login-image1.jpg')} style={styles.headerImageChild} />
                <Image source={require('../../assets/images/login-image2.jpg')} style={styles.headerImageChild} />
            </View>

            <View style={styles.container}>

                <Text style={styles.title}>India's Water Supply & Fast Delivery App</Text>

                <View style={{ marginBottom: 7, width: '100%', height: 0.3, backgroundColor: 'black' }} />


                <Text style={styles.subtitle}>Log in or Sign up</Text>

                <View style={styles.phoneNumberRow}>
                    <View style={styles.countryContainer}>
                        <Text style={styles.flag}>🇮🇳</Text>
                        <Text style={styles.countryCode}>+91</Text>
                    </View>

                    <TextInput
                        placeholder="Enter phone number"
                        keyboardType="number-pad"
                        style={styles.phoneInput}
                        maxLength={10}
                    />
                </View>

                <TouchableOpacity style={styles.continueButton}
                    onPress={() => {
                        navigation.navigate('HomePage')
                    }}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>

                <Text style={styles.orText}>or</Text>



                <View style={{ marginBottom: 6, width: '100%', height: 0.5, backgroundColor: 'black' }} />

                <View style={styles.socialIconsRow}>
                    <View style={styles.iconWrapper}>
                        <Image source={require('../../assets/images/icons8-google-48.png')} style={styles.icon} />
                    </View>
                    <View style={styles.iconWrapper}>
                        <Image source={require('../../assets/images/icons8-email-48.png')} style={styles.icon} />
                    </View>
                </View>

                <Text style={styles.terms}>
                    By continuing, you agree to our{' '}
                    <Text style={styles.link}>Terms of Service</Text>,{' '}
                    <Text style={styles.link}>Privacy Policy</Text>, and{' '}
                    <Text style={styles.link}>Content Policy</Text>.
                </Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#EAF7FB',
    },
    headerImage: {
        height: 320,
        backgroundColor: '#EAF7FB',
    },
    headerImageChild: {
        width: '100%',
        height: 175,
        resizeMode: 'cover',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        alignItems: 'center',
    },
    title: {
        fontSize: 22,
        fontWeight: '700',
        textAlign: 'center',
        color: '#333',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginBottom: 15,
    },
    phoneNumberRow: {
        flexDirection: 'row',
        width: '100%',
        marginBottom: 20,
        gap: 10,
    },
    countryContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 12,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    flag: {
        fontSize: 20,
        marginRight: 6,
    },
    countryCode: {
        fontSize: 16,
    },
    phoneInput: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 14,
        fontSize: 16,
        backgroundColor: '#fefefe',
    },
    continueButton: {
        backgroundColor: '#3399ff',
        paddingVertical: 14,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    orText: {
        marginVertical: 15,
        color: '#888',
        fontSize: 14,
    },
    socialIconsRow: {
        flexDirection: 'row',
        gap: 20,
        marginBottom: 20,
    },
    iconWrapper: {
        backgroundColor: '#fff',
        borderRadius: 25,
        padding: 5,
        width: 50,
        height: 50,
        elevation: 2,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
    },
    icon: {
        width: 36,
        height: 36,
        resizeMode: 'contain',
    },
    terms: {
        fontSize: 12,
        color: '#666',
        textAlign: 'center',
        paddingHorizontal: 10,
    },
    link: {
        textDecorationLine: 'underline',
        color: '#3399ff',
    },
});
