import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import MapView from 'react-native-maps';
import { useNavigation } from '@react-navigation/native';

async function reverseGeocode(latitude, longitude) {
    try {
        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        const response = await fetch(url);
        const responseJson = await response.json();

        if (responseJson.error) {
            console.log("Erreur de géocodage inversé : ", responseJson.error);
            return null;
        }

        return responseJson.address.country;
    } catch (error) {
        console.error("Erreur lors de la requête de géocodage inversé : ", error);
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
            console.log("Aucun pays trouvé à ces coordonnées.");
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
          <Text style={styles.boldText}>
            Découvrez une nouvelle ère de gestion de la santé avec Sante-APP
          </Text> 
          - votre partenaire fiable pour une vie plus saine et heureuse.
          {"\n\n"}

          Notre application révolutionnaire offre une approche holistique pour gérer vos besoins de santé, en mettant à votre disposition des fonctionnalités intuitives et personnalisables. 
          {"\n\n"}
          Avec Sante-APP, prenez le contrôle de votre santé en suivant vos rendez-vous médicaux, en gérant votre dossier médical, et en accédant à des conseils de santé personnalisés. 
          {"\n\n"}
          Notre plateforme connecte les utilisateurs avec un réseau d'experts médicaux, permettant une communication fluide et des consultations en ligne. 
          {"\n\n"}
          Que vous cherchiez à améliorer votre bien-être général, à suivre un traitement spécifique, ou simplement à rester informé sur les dernières tendances en matière de santé, Sante-APP est l'outil qu'il vous faut. 
          
        </Text>

          {/* Carte (Exemple simple) */}
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 48.8566, // Latitude de Paris
              longitude: 2.3522, // Longitude de Paris
              latitudeDelta: 0.0922, // Ajuster au besoin pour le zoom
              longitudeDelta: 0.0421, // Ajuster au besoin pour le zoom
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
    lineHeight: 24, // Augmente l'espacement entre les lignes
    textAlign: 'justify',
  },
  boldText: {
    fontWeight: 'bold',
  },
  map: {
    height: 400,
    borderRadius: 20,
    marginTop: 10,
  },
});

export default DashboardScreen;
