import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const LoginScreen = () => {
  const navigation = useNavigation(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ userId,setUserId ] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  const handleRegisterPress = () => {
    navigation.navigate('Register'); 
  };


  const storeUserId = async (userId) => {
    try {
      await AsyncStorage.setItem('userId', userId.toString());
    } catch (error) {
      console.error('Erreur lors du stockage de l\'ID de l\'utilisateur:', error);
    }
  };
    
  const handleLogin = async () => {
    try {
      const response = await fetch('http://172.20.10.2:8888/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      
      setUserId(data.id); 

      if (response.status === 200) {
        // Vérifier si l'utilisateur est un administrateur
        if (data.is_admin) {
          // Naviguer vers le tableau de bord administrateur
          navigation.navigate('AdminDashboard');
        } else {
          // Naviguer vers le tableau de bord utilisateur standard
          storeUserId(userId);
          navigation.navigate('UserDashboard');
        }
      } else {
        // Si le statut n'est pas 200, on suppose qu'il y a une erreur de connexion
        setErrorMessage(data.message || 'Erreur de connexion');
      }
    } catch (error) {
      // Cette partie attrape les erreurs de réseau ou les erreurs survenues lors de la requête
      setErrorMessage(error.message || 'Une erreur est survenue lors de la connexion');
    }
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
            Vous n'avez pas de compte ? <Text style={styles.linkText} onPress={handleRegisterPress}>Inscrivez-vous maintenant</Text>
          </Text>
        </View>

        <View style={styles.loginForm}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Connectez-vous à votre compte</Text>
            </View>
            <View style={styles.cardBody}>
              {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
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
    padding: 10, 
  },
  loginContainer: {
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginInfo: {
    margin: 10, 
    flex: 1,
    alignItems: 'center', 
  },
  loginInfoTitle: {
    fontSize: 20, 
    fontWeight: 'bold',
    marginBottom: 10, 
  },
  loginInfoText: {
    fontSize: 14, 
    marginBottom: 10,
    textAlign: 'center', 
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
    borderRadius: 15, 
    shadowOpacity: 0.1,
    shadowRadius: 4,
    overflow: 'hidden',
    margin: 10, 
  },
  cardHeader: {
    backgroundColor: '#6AC8FF',
    padding: 15, 
  },
  cardHeaderText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18, 
  },
  cardBody: {
    backgroundColor: '#fff',
    padding: 20, 
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
    padding: 12, 
    marginBottom: 15,
    fontSize: 14,
  },
  button: {
    backgroundColor: '#3490dc',
    borderRadius: 20,
    padding: 12, 
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default LoginScreen;
