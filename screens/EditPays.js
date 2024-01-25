import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';

const EditPaysScreen = ({ route }) => {
  // Supposons que vous recevez les données du pays via les paramètres de route
  const pays = route.params?.pays || null;

  // Si aucun pays n'est passé, retourner un message d'erreur
  if (!pays) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Aucun pays trouvé pour modification.</Text>
      </View>
    );
  }

  const [nom, setNom] = useState(pays.nom);
  const [indiceCO2, setIndiceCO2] = useState(pays.indiceCO2.toString());

  const handleUpdate = () => {
    // Logique de mise à jour du pays
    console.log(`Mise à jour: ${nom}, Indice CO2: ${indiceCO2}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Modifier le Pays</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.label}>Nom du Pays</Text>
          <TextInput
            style={styles.input}
            value={nom}
            onChangeText={setNom}
            placeholder="Nom du pays"
          />
          <Text style={styles.label}>Indice CO2</Text>
          <TextInput
            style={styles.input}
            value={indiceCO2}
            onChangeText={(text) => setIndiceCO2(text)}
            keyboardType="numeric"
            placeholder="Indice CO2"
          />
          <TouchableOpacity style={styles.button} onPress={handleUpdate}>
            <Text style={styles.buttonText}>Mettre à jour</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  cardBody: {
    padding: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#3490dc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default EditPaysScreen;
