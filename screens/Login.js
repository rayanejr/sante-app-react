import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logique de connexion
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.loginContainer}>
        <View style={styles.loginInfo}>
          <Text style={styles.loginInfoTitle}>Bienvenue sur Santé-App</Text>
          <Text style={styles.loginInfoText}>
            Rejoignez-nous et découvrez le moyen premium de vérifier votre état de santé, 
            de gérer vos rendez-vous et de rester au courant de vos besoins médicaux en toute simplicité.
          </Text>
          <Text style={styles.loginInfoText}>
            Vous n'avez pas de compte ? <Text style={styles.linkText}>Inscrivez-vous maintenant</Text>
          </Text>
        </View>

        <View style={styles.loginForm}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Connectez-vous à votre compte</Text>
            </View>
            <View style={styles.cardBody}>
              <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder="Email"
                keyboardType="email-address"
              />
              <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Mot de passe"
                secureTextEntry
              />
              <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Se connecter</Text>
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
    padding: 20,
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginInfo: {
    marginRight: 50,
    flex: 1,
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
  loginForm: {
    flex: 1,
  },
  card: {
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#6AC8FF',
    padding: 20,
  },
  cardHeaderText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBody: {
    backgroundColor: '#fff',
    padding: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3490dc',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default LoginScreen;
