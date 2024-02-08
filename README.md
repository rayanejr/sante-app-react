
![Santé-App Interface](https://github.com/rayanejr/sante-app/blob/main/logo.png)

# À propos de Santé-App

Santé-APP est une application React Native conçue pour améliorer l'accès aux informations de santé et aux services médicaux pour les utilisateurs. Elle offre une plateforme intuitive pour la gestion des soins de santé, y compris la consultation des actes médicaux disponibles dans différents pays, l'estimation de l'empreinte carbone pour les voyages médicaux, et bien plus encore.

## Fonctionnalités Principales

- **Consultation des Soins de Santé** : Parcourez une liste de services de soins de santé disponibles dans divers pays, avec des détails sur les prix et les recommandations.
- **Estimation de l'Empreinte Carbone** : Calculez l'empreinte carbone de vos déplacements pour des soins médicaux à l'étranger.
- **Gestion des Recommandations** : Accédez à des recommandations personnalisées pour votre voyage de soins de santé et gérez-les selon vos besoins.
- **Réservation de Soins de Santé** : Réservez des services de soins de santé directement depuis l'application.
- **Interface Administrateur** : Une interface dédiée pour les administrateurs pour gérer les contenus de l'application.

## Technologies Utilisées

- `react` : Bibliothèque pour la création d'interfaces utilisateur.
- `react-native` : Framework pour développer des applications mobiles.
- `expo` : Plateforme pour construire et déployer des applications React Native.
- `@react-navigation/native` et `@react-navigation/stack` : Pour la navigation dans l'application.
- `react-native-maps` : Pour intégrer des cartes.
- `react-native-vector-icons` et `@expo/vector-icons` : Pour utiliser des icônes.
- `axios` : Pour les requêtes HTTP.

## Prerequis

Avant de commencer, assurez-vous que votre téléphone et votre ordinateur sont connectés au même réseau Wi-Fi. Cela est nécessaire pour assurer une communication fluide entre les deux appareils. Ensuite, récupérez l'adresse IPV4 de votre ordinateur. Cette adresse sera utilisée dans tous les fichiers situés dans le dossier screens de l'application.

Pour trouver l'adresse IPV4 de votre ordinateur :

- Sous Windows, ouvrez l'invite de commande et tapez ipconfig.
- Sous MacOS, allez dans Préférences Système > Réseau, et sélectionnez votre connexion Wi-Fi.
- Sous Linux, ouvrez le terminal et tapez hostname -I.
Une fois que vous avez l'adresse IPV4, remplacez-la dans tous les fichiers appropriés dans le dossier screens.

## Installation

Pour exécuter Santé-APP sur votre système local, suivez ces étapes :

1. **Clonez le dépôt** :

```bash
   git clone https://github.com/votreUsername/sante-app.git
   cd sante-app
```
2. **Installez les dépendances** :

```bash
    npm install
```  
```bash
npm install @react-navigation/native
```
```bash
npm install @react-navigation/stack
```  
```bash
npm install @react-native-maps
``` 
```bash
react-native-vector-icons et @expo/vector-icons
``` 
```bash
npm install axios
``` 
```bash
npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0
```
```bash 
npm install leaflet react-leaflet
```

3. **Lancez l'application** :
```bash
    npm start
```

## Configuration supplémentaire

Pour configurer et démarrer votre projet Santé-APP, suivez ces instructions complémentaires :

1. **Créer une nouvelle application Expo Go** dans un dossier avec la commande : 
   ```bash
   npx create-expo-app nom_de_votre_projet
   ```

2. **Faire un git clone dans un autre dossier** ou télécharger le dossier zip de l'application.

3. **Ajouter les fichiers de sante-app** dans le dossier de l'application créée précédemment.

4. **Télécharger les bibliothèques nécessaires** comme décrit dans les étapes d'installation.

5. **Modifier la variable apiURL** avec votre IP comme suit : 
   ```
   apiURL= http://votreIP:8888/api
   ```

6. **Démarrer l'application** avec : 
   ```bash
   npx expo start --tunnel
   ```

7. **Aller sur l'application de scan de QR Code** de votre téléphone pour accéder à votre application Santé-APP via Expo Go.
