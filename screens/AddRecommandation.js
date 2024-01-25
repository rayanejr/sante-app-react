import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AddRecommandationScreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  const [titre, setTitre] = useState('');
  const [contenu, setContenu] = useState('');

  const handleSave = () => {
    // Logique d'enregistrement de la recommandation
    console.log('Enregistrer la recommandation');
  };

  return (
    <View style={styles.wrapper}>
      {/* Sidebar */}
      <View style={[styles.sidebarWrapper, windowWidth < 768 ? styles.sidebarWrapperSmall : null]}>
        <Text style={styles.sidebarHeading}>Sante-APP</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Admin')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ActesDeSante')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Actes de Santé</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Deplacements')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Déplacements</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Pays')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Pays</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('RecommandationList')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Recommandations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('UserList')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Utilisateurs</Text>
        </TouchableOpacity>
      </View>

      {/* Page Content */}
      <ScrollView style={styles.pageContentWrapper}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Ajouter une Nouvelle Recommandation</Text>
          </View>
          <View style={styles.cardBody}>
            <TextInput 
              style={styles.input} 
              value={titre} 
              onChangeText={setTitre} 
              placeholder="Titre"
            />
            <TextInput 
              style={[styles.input, styles.textArea]} 
              value={contenu} 
              onChangeText={setContenu} 
              placeholder="Contenu"
              multiline={true}
              numberOfLines={4}
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
  listGroupItemText: {
    color: 'white',
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
  textArea: {
    height: 100, // Hauteur supplémentaire pour le champ de texte multiligne
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

export default AddRecommandationScreen;
