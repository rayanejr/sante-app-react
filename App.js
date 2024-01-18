// import React, { useState, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import Login from './screens/Login';
// import Welcome from './screens/Welcome';
// import Register from './screens/Register';
// import Dashboard from './screens/Dashboard';
// import CountryDetails from './screens/CountryDetails';
// import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   useEffect(() => {
//     // Ici, insérez votre logique pour vérifier si l'utilisateur est connecté
//     // Par exemple, vérifier un token stocké localement
//     const checkLoginStatus = async () => {
//       try {
//         const token = await AsyncStorage.getItem('userToken');
//         setIsLoggedIn(token != null);
//       } catch (e) {
//         console.error(e);
//       }
//     };

//     checkLoginStatus();
//   }, []);

//   const headerOptions = ({ navigation }) => ({
//     headerTitle: () => (
//       <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
//         <Text style={styles.headerTitle}>Sante-APP</Text>
//       </TouchableOpacity>
//     ),
//     headerStyle: {
//       backgroundColor: '#ffffff',
//     },
//     headerTitleStyle: {
//       fontWeight: 'bold',
//     },
//     headerRight: () => (
//       <View style={styles.headerSideButtons}>
//         <TouchableOpacity onPress={() => navigation.navigate('Login')}>
//           <Text style={styles.headerButton}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => navigation.navigate('Register')}>
//           <Text style={styles.headerButton}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     ),
//   });

//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         {isLoggedIn ? (
//           <>
//             <Stack.Screen name="Dashboard" component={Dashboard} options={headerOptions} />
//             <Stack.Screen name="CountryDetails" component={CountryDetails} options={headerOptions} />
//           </>
//         ) : (
//           <>
//             <Stack.Screen name="Welcome" component={Welcome} options={headerOptions} />
//             <Stack.Screen name="Login" component={Login} options={headerOptions} />
//             <Stack.Screen name="Register" component={Register} options={headerOptions} />
//           </>
//         )}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// const styles = StyleSheet.create({
//   headerSideButtons: {
//     flexDirection: 'row',
//     marginRight: 10,
//   },
//   headerButton: {
//     color: '#000',
//     paddingHorizontal: 10,
//     fontSize: 18,
//   },
//   headerTitle: {
//     color: '#000',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default App;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from './screens/Dashboard';
import CountryDetails from './screens/CountryDetails';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard">
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard} 
          options={{ title: 'Tableau de Bord' }}
        />
        <Stack.Screen 
          name="CountryDetails" 
          component={CountryDetails} 
          options={{ title: 'Détails du Pays' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

