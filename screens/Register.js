import React from 'react';
import { ScrollView, View, Text, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

const SignUpScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={isWeb ? styles.cardHeaderWeb : styles.cardHeaderNative}>
          <Text style={styles.headerText}>Rejoignez-nous</Text>
        </View>
        <View style={styles.cardBody}>
          <TextInput style={styles.input} placeholder="Your name" />
          <TextInput style={styles.input} placeholder="Your email" />
          <TextInput style={styles.input} placeholder="Create a password" secureTextEntry />
          <TextInput style={styles.input} placeholder="Confirm your password" secureTextEntry />

          <TouchableOpacity style={styles.buttonContainer}>
            <View style={isWeb ? styles.buttonWeb : styles.buttonNative}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
  },
  cardHeaderWeb: {
    paddingVertical: 20,
    backgroundImage: 'linear-gradient(135deg, #6AC8FF 0%, #3A8DFF 100%)',
  },
  cardHeaderNative: {
    paddingVertical: 20,
    // Utilisez ici une méthode alternative pour le gradient si disponible
  },
  headerText: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardBody: {
    padding: 20,
  },
  input: {
    backgroundColor: '#ffffff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonWeb: {
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'linear-gradient(135deg, #6AC8FF 0%, #3A8DFF 100%)',
  },
  buttonNative: {
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // Utilisez ici une méthode alternative pour le gradient si disponible
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SignUpScreen;
