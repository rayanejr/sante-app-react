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
    padding: 10, // Réduction du padding pour les petits écrans
  },loginContainer: {
    flexDirection: 'column', // Utilisation d'un stack layout sur mobile
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginInfo: {
    margin: 10, // Réduction de la marge
    flex: 1,
    alignItems: 'center', // Centrage du texte sur mobile
  },
  loginInfoTitle: {
    fontSize: 20, // Réduction de la taille de la police pour les petits écrans
    fontWeight: 'bold',
    marginBottom: 10, // Réduction de l'espacement
  },
  loginInfoText: {
    fontSize: 14, // Taille de police adaptée pour mobile
    marginBottom: 10,
    textAlign: 'center', // Centrage du texte sur mobile
  },
  linkText: {
    color: '#3490dc',
    textDecorationLine: 'underline',
  },
  loginForm: {
    flex: 1,
    width: '100%',
  },
  card: {
    borderRadius: 15, // Réduction du rayon de bordure pour un look plus adapté au mobile
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
    margin: 10, // Ajout d'une marge autour de la carte
  },
  cardHeader: {
    backgroundColor: '#6AC8FF',
    padding: 15, // Réduction du padding
  },
  cardHeaderText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18, // Réduction de la taille de la police pour les petits écrans
  },
  cardBody: {
    backgroundColor: '#fff',
    padding: 20, // Réduction du padding pour les petits écrans
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
    padding: 12, // Réduction du padding
    marginBottom: 15,
    fontSize: 14, // Réduction de la taille de la police
  },
  button: {
    backgroundColor: '#3490dc',
    borderRadius: 20,
    padding: 12, // Réduction du padding
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14, // Réduction de la taille de la police
  }
});

export default LoginScreen;
