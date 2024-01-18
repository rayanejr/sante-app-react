import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert } from 'react-native';

const CountryDetailsScreen = ({ route }) => {
  const { countryName } = route.params;

  // Logique pour récupérer les actes de santé et autres informations

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>Actes de Santé en {countryName}</Text>
        </View>
        <View style={styles.cardBody}>
          {/* Afficher les actes de santé ici */}
          <Text>Informations sur les actes de santé</Text>
          {/* Autres contenus */}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    maxWidth: 1200,
  },
  card: {
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  cardHeader: {
    backgroundColor: 'linear-gradient(135deg, #6AC8FF 0%, #3A8DFF 100%)',
    color: '#fff',
    padding: 20,
  },
  cardHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBody: {
    backgroundColor: '#fff',
    padding: 20,
  },
  // Ajoutez d'autres styles si nécessaire
});

export default CountryDetailsScreen;
