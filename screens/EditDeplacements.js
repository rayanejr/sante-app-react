import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const EditDeplacementsScreen = ({ route }) => {
  // Récupérer les données de déplacement passées, ou utiliser un objet vide par défaut
  const deplacement = route.params?.deplacement || null;

  // Si aucun déplacement n'est passé, retourner un message d'erreur
  if (!deplacement) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Aucun déplacement trouvé pour modification.</Text>
      </View>
    );
  }

  // État local pour chaque champ
  const [userId, setUserId] = useState(deplacement.userId.toString());
  const [paysId, setPaysId] = useState(deplacement.paysId.toString());
  const [dateDepart, setDateDepart] = useState(deplacement.dateDepart);
  const [dateRetour, setDateRetour] = useState(deplacement.dateRetour);
  const [empreinteCO2, setEmpreinteCO2] = useState(deplacement.empreinteCO2.toString());

  const handleUpdate = () => {
    // Logique pour mettre à jour les informations de déplacement
    console.log({ userId, paysId, dateDepart, dateRetour, empreinteCO2 });
    // Ajoutez ici votre logique pour la mise à jour
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Modifier le Déplacement</Text>
      </View>
      <View style={styles.card}>
        <View style={styles.cardBody}>
          <Text style={styles.label}>Utilisateur ID</Text>
          <TextInput
            style={styles.input}
            value={userId}
            onChangeText={setUserId}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Pays ID</Text>
          <TextInput
            style={styles.input}
            value={paysId}
            onChangeText={setPaysId}
            keyboardType="numeric"
          />
          <Text style={styles.label}>Date de Départ</Text>
          <TextInput
            style={styles.input}
            value={dateDepart}
            onChangeText={setDateDepart}
          />
          <Text style={styles.label}>Date de Retour</Text>
          <TextInput
            style={styles.input}
            value={dateRetour}
            onChangeText={setDateRetour}
          />
          <Text style={styles.label}>Empreinte CO2</Text>
          <TextInput
            style={styles.input}
            value={empreinteCO2}
            onChangeText={setEmpreinteCO2}
            keyboardType="numeric"
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

export default EditDeplacementsScreen;
