import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddUserScreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;
  const navigate = (route) => {
    navigation.navigate(route);
  };
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // Logique d'enregistrement de l'utilisateur
  };

  return (
    <View style={styles.wrapper}>
      {/* Sidebar */}
      <View style={[styles.sidebarWrapper, windowWidth < 768 ? styles.sidebarWrapperSmall : null]}>
        <Text style={styles.sidebarHeading}>Sante-APP</Text>
        <TouchableOpacity onPress={() => navigate('Admin')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('ActesDeSante')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Actes de Santé</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Deplacements')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Déplacements</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Pays')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Pays</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('RecommandationList')} style={styles.listGroupItem}>
        <Text style={styles.listGroupItemText}>Recommandations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('UserList')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Utilisateurs</Text>
        </TouchableOpacity>
      </View>

      {/* Page Content */}
      <ScrollView style={styles.pageContentWrapper}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Ajouter un Utilisateur</Text>
          </View>
          <View style={styles.cardBody}>
            <TextInput 
              style={styles.input} 
              value={name} 
              onChangeText={setName} 
              placeholder="Nom"
            />
            <TextInput 
              style={styles.input} 
              value={email} 
              onChangeText={setEmail} 
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput 
              style={styles.input} 
              value={password} 
              onChangeText={setPassword} 
              placeholder="Mot de passe"
              secureTextEntry
            />
            <TouchableOpacity style={styles.button} onPress={handleSave}>
              <Text style={styles.buttonText}>Enregistrer</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      flexDirection: 'row',
    },
    sidebarWrapper: {
      width: 250,
      backgroundColor: '#3490dc',
      padding: 20,
    },
    sidebarWrapperSmall: {
      width: 100, // Taille réduite pour les petits écrans
    },
    sidebarHeading: {
      color: 'white',
      fontSize: 24,
      textAlign: 'center',
      marginBottom: 20,
    },
    listGroupItem: {
      backgroundColor: '#3490dc',
      padding: 15,
      marginBottom: 5,
    },
    pageContentWrapper: {
      flex: 1,
      padding: 20,
      backgroundColor: '#f8f9fa',
    },
    card: {
      borderRadius: 20,
      backgroundColor: '#fff',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 3,
      marginBottom: 20,
    },
    cardHeader: {
      backgroundColor: '#6AC8FF',
      padding: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    cardHeaderText: {
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },
    cardBody: {
      padding: 20,
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

export default AddUserScreen;
