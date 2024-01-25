import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const EditRecommandationScreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  // Remplacez ces valeurs par celles récupérées de votre backend ou API
  const [titre, setTitre] = useState('Titre initial');
  const [contenu, setContenu] = useState('Contenu initial');

  const handleUpdate = () => {
    // Logique de mise à jour de la recommandation
    console.log('Mettre à jour la recommandation');
  };

  return (
    <View style={styles.wrapper}>
      {/* Sidebar */}
      <View style={[styles.sidebarWrapper, windowWidth < 768 ? styles.sidebarWrapperSmall : null]}>
        <Text style={styles.sidebarHeading}>Sante-APP</Text>
        {/* Ajoutez ici d'autres éléments de navigation de la sidebar */}
      </View>

      {/* Page Content */}
      <ScrollView style={[styles.pageContentWrapper, windowWidth < 768 ? styles.pageContentWrapperSmall : null]}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Modifier la Recommandation</Text>
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
            <TouchableOpacity style={styles.button} onPress={handleUpdate}>
              <Text style={styles.buttonText}>Mettre à jour</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

// Styles
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
  pageContentWrapper: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  pageContentWrapperSmall: {
    padding: 10, // Réduction du padding pour les petits écrans
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
    height: 100, // Hauteur plus importante pour le champ de texte multiligne
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

export default EditRecommandationScreen;
