import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';

const AddPaysScreen = () => {
  const [nom, setNom] = useState('');
  const [indiceCO2, setIndiceCO2] = useState('');

  const handleSave = () => {
    // Logique d'enregistrement du nouveau pays
    console.log(`Nouveau pays: ${nom}, Indice CO2: ${indiceCO2}`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Ajouter un Pays</Text>
      </View>
      <View style={styles.formGroup}>
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
          value={indiceCO2.toString()}
          onChangeText={(text) => setIndiceCO2(text)}
          keyboardType="numeric"
          placeholder="Indice CO2"
        />
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Enregistrer</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  formGroup: {
    marginBottom: 15,
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
    color: '#ffffff',
    fontSize: 16,
  },
});

export default AddPaysScreen;
