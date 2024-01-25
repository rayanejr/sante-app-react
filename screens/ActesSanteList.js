import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ActesSanteListScreen = () => {
  const navigation = useNavigation();
  const [healthActs, setHealthActs] = useState([
    { id: 1, nom: 'Acte de Santé 1', description: 'Description 1', prix: 100, pays: 'France' },
    { id: 2, nom: 'Acte de Santé 2', description: 'Description 2', prix: 200, pays: 'Allemagne' },
    // ... autres actes de santé ...
  ]);

  const navigateToAddActeSante = () => {
    navigation.navigate('AddActesSante'); // Assurez-vous que 'AddActesSante' est le nom correct de l'écran dans votre Navigator
  };
  const handleEdit = (id) => {
    // Naviguer vers l'écran EditActesSante avec l'ID de l'acte de santé
    navigation.navigate('EditActesSante', { acteSanteId: id });
  };
  const handleDelete = (id) => {
    // Supprimer l'acte de santé avec l'ID spécifié
    setHealthActs(healthActs.filter(acte => acte.id!== id));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Actes de Santé</Text>
        <TouchableOpacity style={styles.addButton} onPress={navigateToAddActeSante}>
          <Text style={styles.addButtonText}>Ajouter un acte de santé</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {healthActs.map((acte) => (
          <View key={acte.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>{acte.nom}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text>Description: {acte.description}</Text>
              <Text>Prix: {acte.prix}€</Text>
              <Text>Pays: {acte.pays}</Text>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleEdit(acte.id)}>
                  <Text style={styles.actionButtonText}>Modifier</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.actionButtonDanger]} onPress={() => handleDelete(acte.id)}>
                  <Text style={styles.actionButtonText}>Supprimer</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    padding: 20,
    flexDirection: 'row', // Permet d'aligner le titre et le bouton sur la même ligne
    justifyContent: 'space-between', // Répartit uniformément l'espace
    alignItems: 'center', // Alignement vertical des éléments
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  content: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: '#6AC8FF',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  cardHeaderText: {
    color: 'white',
    fontSize: 18,
  },
  cardBody: {
    padding: 20,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  actionButton: {
    backgroundColor: '#3490dc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  actionButtonText: {
    color: 'white',
  },
  actionButtonDanger: {
    backgroundColor: '#dc3545',
  },
});

export default ActesSanteListScreen;
