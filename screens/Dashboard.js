import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps'; // Assurez-vous d'installer react-native-maps
import { useNavigation } from '@react-navigation/native';

async function reverseGeocode(latitude, longitude) {
    try {
      const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyBSM5VbWM1Lv8S1HZWexpYbZKW5aBpk7qw`);
      const responseJson = await response.json();
      if (responseJson.results[0]) {
        const addressComponents = responseJson.results[0].address_components;
        const countryComponent = addressComponents.find(component => component.types.includes('country'));
        return countryComponent ? countryComponent.long_name : null;
      }
      return null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
  

const DashboardScreen = () => {
    const navigation = useNavigation();

    const handleMapPress = async (e) => {
        const { latitude, longitude } = e.nativeEvent.coordinate;
        const countryName = await reverseGeocode(latitude, longitude);
        if (countryName) {
            navigation.navigate('CountryDetails', { countryName });
        } else {
            // Gérer le cas où aucun pays n'est trouvé
            console.log('Aucun pays trouvé à ces coordonnées.');
        }
    };
    
    
  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>Bienvenue sur Sante-APP!</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardBodyText}>
            Découvrez une nouvelle ère de gestion de la santé avec Sante-APP - votre partenaire fiable pour une vie plus saine et heureuse. Notre application révolutionnaire offre une approche holistique pour gérer vos besoins de santé...
            {/* Continuez avec le reste du texte */}
          </Text>
          {/* Carte (Exemple simple) */}
          <MapView
            style={styles.map}
            initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            onPress={handleMapPress}
            />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  card: {
    margin: 10,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    backgroundColor: '#6AC8FF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  cardHeaderText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardBody: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  cardBodyText: {
    color: '#333',
    marginBottom: 10,
  },
  map: {
    height: 400,
    borderRadius: 20,
    marginTop: 10,
  },
});

export default DashboardScreen;
