import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const PaysListScreen = () => {
  const navigation = useNavigation();
  const [pays, setPays] = useState([
    { id: 1, nom: 'France', indiceCO2: 90 },
    { id: 2, nom: 'Allemagne', indiceCO2: 85 },
    { id: 3, nom: 'États-Unis', indiceCO2: 120 },
    // ... ajoutez d'autres pays ici ...
  ]);

  
  const navigateToAddPays = () => {
    navigation.navigate('AddPays'); // Assurez-vous que 'AddPays' est bien défini dans votre stack navigator
  };

  const handleEdit = (id) => {
    navigation.navigate('EditPays', { paysId: id }); // Assurez-vous que 'EditPays' est bien défini dans votre stack navigator
  };

  const handleDelete = (id) => {
    // Logique pour supprimer un pays (à implémenter)
    setPays(pays.filter(p => p.id !== id));
  };
  
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Pays</Text>
        <TouchableOpacity style={styles.addButton} onPress={navigateToAddPays}>
          <Text style={styles.addButtonText}>Ajouter un Pays</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        {pays.map(pay => (
          <View key={pay.id} style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>{pay.nom}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text>Indice CO2: {pay.indiceCO2}</Text>
              <View style={styles.actions}>
                <TouchableOpacity style={styles.actionButton} onPress={() => handleEdit(pay.id)}>
                  <Text style={styles.actionButtonText}>Modifier</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.actionButtonDanger]} onPress={() => handleDelete(pay.id)}>
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

export default PaysListScreen;
