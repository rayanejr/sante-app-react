import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Image, TouchableOpacity, Button, StyleSheet } from 'react-native';

// Import des écrans
import Dashboard from './screens/Dashboard';
import CountryDetails from './screens/CountryDetails';
import Login from './screens/Login';
import Register from './screens/Register';
import Welcome from './screens/Welcome';
import ConfirmPassword from './screens/ConfirmPassword';
import ForgotPassword from './screens/ForgotPassword';
import ResetPassword from './screens/ResetPassword';
import EmailVerification from './screens/EmailVerification';
import UserList from './screens/UserList';
import Admin from './screens/Admin';
import EditUserScreen from './screens/EditUser';
import AddUserScreen from './screens/AddUser';
import RecommandationListScreen from './screens/RecommandationList';
import AddRecommandationScreen from './screens/AddRecommandation';
import EditRecommandationScreen from './screens/EditRecommandation';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const HeaderRightButtons = ({ navigation }) => {
    return isLoggedIn ? (
      <View style={styles.rightHeaderButtons}>
        <Button title="Admin" onPress={() => navigation.navigate('Admin')} />
        <Button title="UserList" onPress={() => navigation.navigate('UserList')} />
        <Button title="AddUser" onPress={() => navigation.navigate('AddUser')} />
        <Button title="EditUser" onPress={() => navigation.navigate('EditUser')} />
        <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        <Button title="RecommandationList" onPress={() => navigation.navigate('RecommandationList')} />
        <Button title="AddRecommandation" onPress={() => navigation.navigate('AddRecommandation')} />
        <Button title="EditRecommandation" onPress={() => navigation.navigate('EditRecommandation')} />
        <Button title="Déconnexion" onPress={() => setIsLoggedIn(false)} />
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

  const LogoHeader = ({ navigation }) => (
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
            headerTitle: () => <LogoHeader navigation={navigation} />,
            headerRight: () => <HeaderRightButtons navigation={navigation} />
          })}
        />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="AddUser" component={AddUserScreen} />
        <Stack.Screen name="EditUser" component={EditUserScreen} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="RecommandationList" component={RecommandationListScreen} />
        <Stack.Screen name="AddRecommandation" component={AddRecommandationScreen} />
        <Stack.Screen name="EditRecommandation" component={EditRecommandationScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        {/* Autres écrans ici... */}
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
