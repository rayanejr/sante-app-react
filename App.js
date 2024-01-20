import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';
import Dashboard from './screens/Dashboard';
import CountryDetails from './screens/CountryDetails';
import Login from './screens/Login';
import Register from './screens/Register';
import Welcome from './screens/Welcome';
import ConfirmPassword from './screens/ConfirmPassword'; 
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import EmailVerification from './screens/EmailVerification';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const headerRightButtons = (navigation) => {
    return isLoggedIn ? (
      <View style={styles.rightHeaderButtons}>
        <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        <Button title="Déconnexion" onPress={() => setIsLoggedIn(false)} />
        <Button title="ConfirmPassword" onPress={() => navigation.navigate('ConfirmPassword')} />
        <Button title="EmailVerification" onPress={() => navigation.navigate('EmailVerification')} />
        
      </View>
    ) : (
      <View style={styles.rightHeaderButtons}>
        <Button title="Connexion" onPress={() => navigation.navigate('Login')} />
        <Button title="Inscription" onPress={() => navigation.navigate('Register')} />
        <Button title="ForgotPassword" onPress={() => navigation.navigate('ForgotPassword')} />
        <Button title="ResetPassword" onPress={() => navigation.navigate('ResetPassword')} />
      </View>
    );
  };

  const logoHeader = (navigation) => (
    <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
      <Image 
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
    </TouchableOpacity>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={({ navigation }) => ({
            headerTitle: () => logoHeader(navigation),
            headerRight: () => headerRightButtons(navigation)
          })}
        />
        {isLoggedIn ? (
          <>
            <Stack.Screen 
              name="Dashboard" 
              component={Dashboard} 
              options={({ navigation }) => ({
                headerTitle: () => logoHeader(navigation),
                headerRight: () => headerRightButtons(navigation)
              })}
            />
            <Stack.Screen 
              name="CountryDetails" 
              component={CountryDetails} 
              options={({ navigation }) => ({
                headerTitle: () => logoHeader(navigation),
                headerRight: () => headerRightButtons(navigation)
              })}
            />
            <Stack.Screen 
              name="ConfirmPassword" 
              component={ConfirmPassword} 
              options={({ navigation }) => ({
                headerTitle: () => logoHeader(navigation),
                headerRight: () => headerRightButtons(navigation)
              })}
            />
            <Stack.Screen 
              name="EmailVerification" 
              component={EmailVerification} 
              options={({ navigation }) => ({
                headerTitle: () => logoHeader(navigation),
                headerRight: () => headerRightButtons(navigation)
              })}
            />

            
          </>
        ) : (
          <>
            <Stack.Screen 
              name="Login" 
              component={Login} 
              options={({ navigation }) => ({
                headerTitle: () => logoHeader(navigation),
                headerRight: () => headerRightButtons(navigation)
              })}
            />
            <Stack.Screen 
              name="Register" 
              component={Register} 
              options={({ navigation }) => ({
                headerTitle: () => logoHeader(navigation),
                headerRight: () => headerRightButtons(navigation)
              })}
            />
            <Stack.Screen 
              name="ForgotPassword" 
              component={ForgotPassword} 
              options={{ title: 'Réinitialisation du Mot de Passe' }}
            />

            <Stack.Screen
              name="ResetPassword"
              component={ResetPassword}
              options={{ title: 'Réinitialisation du Mot de Passe' }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 40,
    resizeMode: 'contain'
  },
  rightHeaderButtons: {
    flexDirection: 'row',
    marginRight: 10,
  }
});

export default App;
