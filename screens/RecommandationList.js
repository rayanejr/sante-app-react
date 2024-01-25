import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const recommandations = [
  { id: 1, titre: 'Titre Recommandation 1', contenu: 'Contenu Recommandation 1' },
  // ... autres recommandations
];

const RecommandationListScreen = () => {
  const navigation = useNavigation();
  const windowWidth = Dimensions.get('window').width;

  const navigate = (route) => {
    navigation.navigate(route);
  };

  const handleEdit = (id) => {
    console.log(`Modifier la recommandation avec l'id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Supprimer la recommandation avec l'id: ${id}`);
  };

  return (
    <View style={styles.wrapper}>
      <View style={[styles.sidebarWrapper, windowWidth < 768 ? styles.sidebarWrapperSmall : null]}>
        <Text style={styles.sidebarHeading}>Sante-APP</Text>
        <TouchableOpacity onPress={() => navigate('Dashboard')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Dashboard</Text>
        </TouchableOpacity>
        {/* ... autres éléments de navigation */}
      </View>

      <ScrollView style={[styles.pageContentWrapper, windowWidth < 768 ? styles.pageContentWrapperSmall : null]}>
        <View style={[styles.container, windowWidth < 768 ? styles.containerSmall : null]}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Recommandations</Text>
            </View>
            <View style={styles.cardBody}>
              {recommandations.map(recommandation => (
                <View key={recommandation.id} style={styles.recommandationRow}>
                  <View style={styles.recommandationInfo}>
                    <Text style={styles.recommandationTitle}>{recommandation.titre}</Text>
                    <Text style={styles.recommandationContenu}>{recommandation.contenu}</Text>
                  </View>
                  <View style={styles.recommandationActions}>
                    <TouchableOpacity onPress={() => handleEdit(recommandation.id)} style={styles.recommandationActionButton}>
                      <Text style={styles.recommandationActionButtonText}>Modifier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => handleDelete(recommandation.id)} style={[styles.recommandationActionButton, styles.recommandationActionButtonDelete]}>
                      <Text style={styles.recommandationActionButtonText}>Supprimer</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  sidebarWrapper: {
    width: 250,
    backgroundColor: '#3490dc',
  },
  sidebarWrapperSmall: {
    width: 100,
  },
  sidebarHeading: {
    textAlign: 'center',
    color: 'white',
    padding: 20,
    fontSize: 20,
  },
  listGroupItem: {
    padding: 15,
  },
  listGroupItemText: {
    color: 'white',
  },
  pageContentWrapper: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  pageContentWrapperSmall: {
    padding: 10,
  },
  container: {
    maxWidth: 1200,
  },
  containerSmall: {
    maxWidth: '100%',
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
  recommandationRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  recommandationInfo: {
    flex: 1,
  },
  recommandationTitle: {
    fontSize: 16,
    color: '#333',
  },
  recommandationContenu: {
    fontSize: 14,
    color: '#555',
  },
  recommandationActions: {
    flexDirection: 'row',
  },
  recommandationActionButton: {
    backgroundColor: '#3490dc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  recommandationActionButtonText: {
    color: 'white',
  },
  recommandationActionButtonDelete: {
    backgroundColor: '#dc3545',
  },
});

export default RecommandationListScreen;
