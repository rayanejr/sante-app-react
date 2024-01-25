import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderTitle}>Rejoignez-nous</Text>
        </View>
        <View style={styles.cardBody}>
          {/* Formulaire d'inscription */}
          <TextInput
            style={styles.input}
            placeholder="Votre nom complet"
            autoCapitalize="words"
          />
          <TextInput
            style={styles.input}
            placeholder="Votre email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Créez un mot de passe"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirmez votre mot de passe"
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>S'inscrire</Text>
          </TouchableOpacity>
          <View style={styles.alreadyRegistered}>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.alreadyRegisteredText}>Déjà inscrit ? Connectez-vous</Text>
          </TouchableOpacity>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    backgroundColor: '#6AC8FF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  cardHeaderTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '600',
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
  button: {
    backgroundColor: '#3490dc',
    borderRadius: 20,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  alreadyRegistered: {
    alignItems: 'center',
    marginTop: 10,
  },
  alreadyRegisteredText: {
    color: '#3490dc',
  },
});

export default RegisterScreen;
