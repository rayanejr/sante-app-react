import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Picker } from 'react-native';

const HealthActsScreen = ({ route }) => {
  const { countryName, countryId } = route.params;
  const [selectedDepartureCountry, setSelectedDepartureCountry] = useState('');
  const [healthActs, setHealthActs] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [carbonFootprint, setCarbonFootprint] = useState('');

  useEffect(() => {
    // Récupérez ici les actes de santé et tous les pays
    // Exemple : setHealthActs(dataFromApi);
    // Exemple : setAllCountries(allCountriesFromApi);
  }, []);

  const handleCarbonEstimation = () => {
    // Logique pour estimer l'empreinte carbone
    // Exemple : setCarbonFootprint(calculatedCarbon);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>Actes de Santé en {countryName}</Text>
        </View>
        <View style={styles.cardBody}>
          {/* Liste des actes de santé */}
          {healthActs.length > 0 ? (
            healthActs.map((act, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.cardHeader}>
                  <Text>{act.nom}</Text>
                </View>
                <View style={styles.cardBody}>
                  <Text>Prix: {act.prix}€</Text>
                </View>
              </View>
            ))
          ) : (
            <Text style={styles.alertInfo}>Aucun acte de santé disponible pour ce pays.</Text>
          )}

          <View style={styles.separator}></View>
          
          {/* Estimation de l'empreinte carbone */}
          <Text>Estimation de l'Empreinte Carbone pour le Voyage</Text>
          <Picker
            selectedValue={selectedDepartureCountry}
            onValueChange={(itemValue) => setSelectedDepartureCountry(itemValue)}
          >
            {allCountries.map((country, index) => (
              <Picker.Item key={index} label={country.nom} value={country.id} />
            ))}
          </Picker>
          <TouchableOpacity style={styles.button} onPress={handleCarbonEstimation}>
            <Text style={styles.buttonText}>Estimer l'Empreinte Carbone</Text>
          </TouchableOpacity>

          {carbonFootprint && (
            <Text style={styles.successAlert}>
              Empreinte carbone estimée pour le voyage : {carbonFootprint} kg CO2
            </Text>
          )}
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
  card: {
    borderRadius: 20,
    backgroundColor: 'white',
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
  },
  cardHeaderText: {
    color: 'white',
    fontSize: 18,
  },
  cardBody: {
    padding: 20,
    backgroundColor: '#fff',
  },
  alertInfo: {
    backgroundColor: '#d1ecf1',
    padding: 10,
    borderRadius: 10,
    color: '#0c5460',
    textAlign: 'center',
  },
  successAlert: {
    backgroundColor: '#d4edda',
    padding: 10,
    borderRadius: 10,
    color: '#155724',
    textAlign: 'center',
    marginTop: 10,
  },
  separator: {
    marginVertical: 20,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
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
});

export default HealthActsScreen;
