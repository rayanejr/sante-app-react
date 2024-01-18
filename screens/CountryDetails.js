import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet, TextInput } from 'react-native';

const CountryDetails = ({ route }) => {
  const { countryName } = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedDepartureCountry, setSelectedDepartureCountry] = useState('Sélectionnez votre pays de départ');
  const [recommendations, setRecommendations] = useState([]);
  const [newRecommendation, setNewRecommendation] = useState('');

  // Données simulées pour les soins et les pays
  const healthCareServices = [
    { id: '1', service: 'Consultation médicale', prix: '50€' },
    { id: '2', service: 'Radiographie', prix: '70€' }
  ];
  const departureCountries = ['Pays 1', 'Pays 2', 'Pays 3'];

  useEffect(() => {
    const fakeRecommendations = [
      { id: '1', text: 'Assurez-vous d’avoir une assurance voyage adaptée.' },
      { id: '2', text: 'Vérifiez les exigences de visa pour la France.' }
    ];
    setRecommendations(fakeRecommendations);
  }, []);

  const handleReserveCare = (careId) => {
    alert(`Réservation du soin ${careId}`);
  };

  const handleAddRecommendation = () => {
    setRecommendations([...recommendations, { id: Date.now().toString(), text: newRecommendation }]);
    setNewRecommendation('');
  };

  const handleDeleteRecommendation = (recommendationId) => {
    setRecommendations(recommendations.filter(r => r.id !== recommendationId));
  };

  const handleEstimateCarbonFootprint = () => {
    alert(`Empreinte carbone estimée pour un voyage depuis ${selectedDepartureCountry} vers ${countryName}.`);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>Actes de Santé en {countryName}</Text>
        </View>
        <View style={styles.cardBody}>
          {healthCareServices.map((service) => (
            <View key={service.id} style={styles.serviceCard}>
              <Text style={styles.serviceText}>{service.service} - {service.prix}</Text>
              <TouchableOpacity style={styles.button} onPress={() => handleReserveCare(service.id)}>
                <Text style={styles.buttonText}>Réserver ce soin</Text>
              </TouchableOpacity>
            </View>
          ))}

          <Text style={styles.subtitle}>Recommandations pour {countryName}</Text>
          {recommendations.map((recommendation) => (
            <View key={recommendation.id} style={styles.recommendationCard}>
              <Text>{recommendation.text}</Text>
              <TouchableOpacity style={styles.deleteButton} onPress={() => handleDeleteRecommendation(recommendation.id)}>
                <Text style={styles.deleteButtonText}>Supprimer</Text>
              </TouchableOpacity>
            </View>
          ))}

          
          <TouchableOpacity style={styles.button} onPress={handleAddRecommendation}>
            <Text style={styles.buttonText}>Ajouter Recommandation</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            onChangeText={setNewRecommendation}
            value={newRecommendation}
            placeholder="Ajouter une recommandation"
          />
          
          <Text style={styles.subtitle}>Estimation de l'Empreinte Carbone pour le Voyage</Text>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.dropdown}>
            <Text>{selectedDepartureCountry}</Text>
          </TouchableOpacity>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}>
            <View style={styles.modalView}>
              <ScrollView>
                {departureCountries.map((country, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.countryOption}
                    onPress={() => {
                      setSelectedDepartureCountry(country);
                      setModalVisible(false);
                    }}>
                    <Text>{country}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </Modal>

          <TouchableOpacity style={styles.button} onPress={handleEstimateCarbonFootprint}>
            <Text style={styles.buttonText}>Calculer l'empreinte carbone</Text>
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
    marginBottom: 20,
  },
  cardHeader: {
    backgroundColor: '#6AC8FF',
    padding: 20,
  },
  cardHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBody: {
    padding: 20,
    backgroundColor: '#fff',
  },
  serviceCard: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginBottom: 10,
  },
  serviceText: {
    fontSize: 16,
    marginBottom: 5,
  },
  subtitle: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff', // Bleu plus vif
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Rouge plus vif
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },

  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  dropdown: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    marginBottom: 20,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  countryOption: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
});

export default CountryDetails;
