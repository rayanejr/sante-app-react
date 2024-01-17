import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginContainer}>

        {/* Information Section */}
        <View style={styles.loginInfo}>
          <Text style={styles.loginInfoTitle}>Bienvenue sur Santé-App</Text>
          <Text style={styles.loginInfoText}>
            Rejoignez-nous et découvrez le moyen premium de vérifier votre état de santé, de gérer vos rendez-vous et de rester au courant de vos besoins médicaux en toute simplicité.
          </Text>
          <Text style={styles.loginInfoText}>
            Vous n'avez pas de compte ?{" "}
            <Text style={styles.linkText}>Inscrivez-vous maintenant</Text>
          </Text>
        </View>

        {/* Login Form */}
        <View style={styles.loginFormContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Connectez-vous à votre compte</Text>
          </View>
          <View style={styles.cardBody}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              secureTextEntry
            />
          <TouchableOpacity>
            <Text style={styles.forgotPasswordText}>Mot de passe oublié ?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Se connecter</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    loginContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    loginInfo: {
      flex: 1,
      marginRight: 50,
    },
    loginInfoTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    loginInfoText: {
      fontSize: 16,
      marginBottom: 20,
    },
    linkText: {
      color: '#3490dc',
      textDecorationLine: 'underline',
    },
    loginFormContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingVertical: 30,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 3,
    },
    cardHeader: {
      backgroundColor: '#6AC8FF',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      padding: 20,
    },
    cardHeaderText: {
      color: '#fff',
      textAlign: 'center',
      fontSize: 20,
      fontWeight: 'bold',
    },
    cardBody: {
      padding: 20,
    },
    input: {
      backgroundColor: '#f8f9fa',
      borderRadius: 10,
      padding: 15,
      marginBottom: 15,
      borderWidth: 1,
      borderColor: '#ced4da',
    },
    rememberMeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    checkbox: {
      marginRight: 10,
    },
    rememberMeText: {
      fontSize: 16,
    },
    forgotPasswordText: {
      color: '#3490dc',
      textAlign: 'right',
      marginBottom: 20,
    },
    loginButton: {
      backgroundColor: '#3490dc',
      borderRadius: 20,
      padding: 15,
      alignItems: 'center',
    },
    loginButtonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
  });
  
export default LoginScreen;
