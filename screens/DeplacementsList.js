import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';

const DeplacementsListScreen = ({ navigation }) => {
  const windowWidth = Dimensions.get('window').width;
  const [deplacements, setDeplacements] = useState([
    { id: 1, userId: 1, paysId: 1, dateDepart: '2022-07-01', dateRetour: '2022-07-15', empreinteCO2: 150 },
    { id: 2, userId: 2, paysId: 2, dateDepart: '2022-08-01', dateRetour: '2022-08-15', empreinteCO2: 200 },
    // ... autres déplacements ...
  ]);

  const navigateToAddDeplacement = () => {
    navigation.navigate('AddDeplacements');
  };

  const handleEdit = (id) => {
    navigation.navigate('EditDeplacements', { deplacementId: id });
  };

  const handleDelete = (id) => {
    setDeplacements(deplacements.filter(deplacement => deplacement.id !== id));
  };

  const isSmallDevice = windowWidth < 768;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.header, isSmallDevice && styles.smallHeader]}>
        <Text style={[styles.headerText, isSmallDevice && styles.smallHeaderText]}>Liste des Déplacements</Text>
        <TouchableOpacity style={[styles.addButton, isSmallDevice && styles.smallAddButton]} onPress={navigateToAddDeplacement}>
          <Text style={[styles.addButtonText, isSmallDevice && styles.smallAddButtonText]}>Ajouter un déplacement</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {deplacements.map((deplacement) => (
          <View key={deplacement.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Déplacement ID: {deplacement.id}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text>Utilisateur ID: {deplacement.userId}</Text>
              <Text>Pays ID: {deplacement.paysId}</Text>
              <Text>Date de Départ: {deplacement.dateDepart}</Text>
              <Text>Date de Retour: {deplacement.dateRetour}</Text>
              <Text>Empreinte CO2: {deplacement.empreinteCO2}</Text>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleEdit(deplacement.id)}>
                  <Text style={styles.actionButtonText}>Modifier</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.actionButtonDanger]} onPress={() => handleDelete(deplacement.id)}>
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  smallHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  smallHeaderText: {
    fontSize: 18,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  smallAddButton: {
    padding: 8,
    alignSelf: 'flex-start',
  },
  addButtonText: {
    color: 'white',
    fontSize: 16,
  },
  smallAddButtonText: {
    fontSize: 14,
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

export default DeplacementsListScreen;
