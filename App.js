import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Button, Image, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// Importez vos écrans ici
import Dashboard from './screens/UserDashboard';
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
import DeplacementsListScreen from './screens/DeplacementsList';
import ActesSanteListScreen from './screens/ActesSanteList';
import PaysListScreen from './screens/PaysList';
import EditDeplacementsScreen from './screens/EditDeplacements';
import EditActesSanteScreen from './screens/EditActesSante';
import AddDeplacementsScreen from './screens/AddDeplacements';
import AddActesSanteScreen from './screens/AddActesSante';
import EditPaysScreen from './screens/EditPays';
import AddPaysScreen from './screens/AddPays';



const Stack = createNativeStackNavigator();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [isAdmin, setIsAdmin] = useState(true);


  const LogoHeader = ({ navigation }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
      <Image 
        source={require('./assets/logo.png')}
        style={styles.logo}
      />
    </TouchableOpacity>
  );


  const UserHeaderButtons = ({ navigation }) => (
    <View style={styles.rightHeaderButtons}>
      <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="EmailVerification" onPress={() => navigation.navigate('EmailVerification')} />
      <Button title="ConfirmPassword" onPress={() => navigation.navigate('ConfirmPassword')} />
      <Button title="ForgotPassword" onPress={() => navigation.navigate('ForgotPassword')} />
      <Button title="ResetPassword" onPress={() => navigation.navigate('ResetPassword')} />
      <Button title="Déconnexion" onPress={() => setIsLoggedIn(false)} />
    </View>
  );

  const AdminHeaderButtons = ({ navigation }) => (
    <View style={styles.rightHeaderButtons}>
      <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <Button title="Admin" onPress={() => navigation.navigate('Admin')} />
      <Button title="Déconnexion" onPress={() => setIsLoggedIn(false)} />
    </View>
  );

  const UnauthenticatedHeaderButtons = ({ navigation }) => (
    <View style={styles.rightHeaderButtons}>
      <Button title="Connexion" onPress={() => navigation.navigate('Login')} />
      <Button title="Inscription" onPress={() => navigation.navigate('Register')} />
    </View>
  );

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Welcome" 
          component={Welcome} 
          options={({ navigation }) => ({
            headerTitle: () => <LogoHeader navigation={navigation} />,
            headerRight: () => isLoggedIn 
              ? (isAdmin ? <AdminHeaderButtons navigation={navigation} /> : <UserHeaderButtons navigation={navigation} />)
              : <UnauthenticatedHeaderButtons navigation={navigation} />
          })}
        />
        {/* Add more Stack.Screen components here for each screen */}
        <Stack.Screen name="ActesSanteListScreen" component={ActesSanteListScreen} />
        <Stack.Screen name="DeplacementsList" component={DeplacementsListScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="CountryDetails" component={CountryDetails} />
        <Stack.Screen name="EmailVerification" component={EmailVerification} />
        <Stack.Screen name="ConfirmPassword" component={ConfirmPassword} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="UserList" component={UserList} />
        <Stack.Screen name="AddUser" component={AddUserScreen} />
        <Stack.Screen name="EditUser" component={EditUserScreen} />
        <Stack.Screen name="RecommandationList" component={RecommandationListScreen} />
        <Stack.Screen name="AddRecommandation" component={AddRecommandationScreen} />
        <Stack.Screen name="EditRecommandation" component={EditRecommandationScreen} />
        <Stack.Screen name="PaysList" component={PaysListScreen} />
        <Stack.Screen name="EditDeplacements" component={EditDeplacementsScreen} />
        <Stack.Screen name="EditActesSante" component={EditActesSanteScreen} />
        <Stack.Screen name="AddDeplacements" component={AddDeplacementsScreen} />
        <Stack.Screen name="AddActesSante" component={AddActesSanteScreen} />
        <Stack.Screen name="EditPays" component={EditPaysScreen} />
        <Stack.Screen name="AddPays" component={AddPaysScreen} />
        

    
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
