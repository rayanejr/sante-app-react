import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const users = [
  { id: 1, name: 'User 1', email: 'user1@example.com' },
  { id: 2, name: 'User 2', email: 'user2@example.com' },
  // Ajoutez d'autres utilisateurs ici
];

const UserListScreen = () => {
    const navigation = useNavigation();
    const windowWidth = Dimensions.get('window').width;
    const navigate = (route) => {
      navigation.navigate(route);
    };

  return (
    <View style={styles.wrapper}>
      {/* Sidebar */}
      <View style={[styles.sidebarWrapper, windowWidth < 768 ? styles.sidebarWrapperSmall : null]}>
        <Text style={styles.sidebarHeading}>Sante-APP</Text>
        <TouchableOpacity onPress={() => navigate('Admin')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Dashboard</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('ActesDeSante')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Actes de Santé</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Deplacements')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Déplacements</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('Pays')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Pays</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('RecommandationList')} style={styles.listGroupItem}>
        <Text style={styles.listGroupItemText}>Recommandations</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate('UserList')} style={styles.listGroupItem}>
          <Text style={styles.listGroupItemText}>Utilisateurs</Text>
        </TouchableOpacity>
      </View>

      {/* Page Content */}
      <ScrollView style={[styles.pageContentWrapper, windowWidth < 768 ? styles.pageContentWrapperSmall : null]}>
        <View style={[styles.container, windowWidth < 768 ? styles.containerSmall : null]}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>Utilisateurs</Text>
            </View>
            <View style={styles.cardBody}>
              {users.map(user => (
                <View key={user.id} style={styles.userRow}>
                  <View style={styles.userInfo}>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text style={styles.userEmail}>{user.email}</Text>
                  </View>
                  <View style={styles.userActions}>
                    <TouchableOpacity style={styles.userActionButton}>
                      <Text style={styles.userActionButtonText}>Modifier</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.userActionButton, styles.userActionButtonDelete]}>
                      <Text style={styles.userActionButtonText}>Supprimer</Text>
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
    width: 100, // Réduction supplémentaire de la largeur pour les petits écrans
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
  userRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    color: '#333',
  },
  userEmail: {
    fontSize: 16,
    color: '#555',
  },
  userActions: {
    flexDirection: 'row',
  },
  userActionButton: {
    backgroundColor: '#3490dc',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  userActionButtonText: {
    color: 'white',
  },
  userActionButtonDelete: {
    backgroundColor: '#dc3545',
  },
});

export default UserListScreen;
