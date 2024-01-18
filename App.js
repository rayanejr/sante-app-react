import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Welcome from './screens/Welcome';
import Register from './screens/Register';
import Dashboard from './screens/Dashboard'; // Ajoutez cette ligne
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Stack = createNativeStackNavigator();

const App = () => {
  const headerOptions = (navigation) => ({
    headerTitle: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
        <Text style={styles.headerTitle}>Sante-APP</Text>
      </TouchableOpacity>
    ),
    headerStyle: {
      backgroundColor: '#ffffff',
    },
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerRight: () => (
      <View style={styles.headerSideButtons}>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.headerButton}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.headerButton}>Register</Text>
        </TouchableOpacity>
      </View>
    ),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={Welcome}
          options={({ navigation }) => headerOptions(navigation)}
        />
        <Stack.Screen 
          name="Login" 
          component={Login}
          options={({ navigation }) => headerOptions(navigation)}
        />
        <Stack.Screen 
          name="Register" 
          component={Register}
          options={({ navigation }) => headerOptions(navigation)}
        />
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard}  // Ajoutez cette ligne
          options={({ navigation }) => headerOptions(navigation)}
        />
        <Stack.Screen 
          name="CountryDetailsScreen" 
          component={CountryDetailsScreen}
          options={({ navigation }) => headerOptions(navigation)}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  headerSideButtons: {
    flexDirection: 'row',
    marginRight: 10,
  },
  headerButton: {
    color: '#000',
    paddingHorizontal: 10,
    fontSize: 18,
  },
  headerTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default App;
