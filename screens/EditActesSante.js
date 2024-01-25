import React, { useState, useEffect } from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';

const EditActesSanteScreen = ({ route }) => {
  const navigation = useNavigation();
  const { acteSanteId } = route.params; // Assurez-vous de passer 'acteSanteId' lors de la navigation vers cet écran

  // État initial pour le formulaire
  const [nom, setNom] = useState('');
  const [description, setDescription] = useState('');
  const [prix, setPrix] = useState('');
  const [paysId, setPaysId] = useState('');

  // Exemple de données pour 'paysList'. Remplacez par vos propres données
  const paysList = [
    { id: '1', nom: 'France' },
    { id: '2', nom: 'Allemagne' },
    // Ajoutez d'autres pays ici
  ];

  useEffect(() => {
    // Charger les données de l'acte de santé ici
    // Exemple: fetchActeSante(acteSanteId).then(data => { setNom(data.nom); setDescription(data.description); ... });
  }, [acteSanteId]);

  const handleUpdate = () => {
    // Logique de mise à jour de l'acte de santé
    console.log('Mise à jour de l\'acte de santé', { nom, description, prix, paysId });
    // navigation.goBack(); // Retour à l'écran précédent après la mise à jour
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Modifier l'Acte de Santé</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Nom</Text>
        <TextInput
          style={styles.input}
          value={nom}
          onChangeText={setNom}
          placeholder="Nom de l'acte de santé"
        />
        <Text style={styles.label}>Description</Text>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={description}
          onChangeText={setDescription}
          placeholder="Description de l'acte de santé"
          multiline
        />
        <Text style={styles.label}>Prix</Text>
        <TextInput
          style={styles.input}
          value={prix.toString()}
          onChangeText={(text) => setPrix(text)}
          placeholder="Prix de l'acte de santé"
          keyboardType="numeric"
        />
        <Text style={styles.label}>Pays</Text>
        <Picker
          selectedValue={paysId}
          onValueChange={(itemValue) => setPaysId(itemValue)}
          style={styles.picker}
        >
          {paysList.map((pays) => (
            <Picker.Item key={pays.id} label={pays.nom} value={pays.id} />
          ))}
        </Picker>
        <TouchableOpacity style={styles.button} onPress={handleUpdate}>
          <Text style={styles.buttonText}>Mettre à jour</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
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
  form: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  textArea: {
    minHeight: 100, // Ajustez selon besoin pour la description
  },
  picker: {
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 5,
    marginBottom: 15,
    // Autres styles pour le picker si nécessaire
  },
  button: {
    backgroundColor: '#3490dc',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default EditActesSanteScreen;
