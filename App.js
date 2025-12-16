// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

// Import des écrans
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AppBar from './screens/AppBar';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// --- Stack pour Accueil ---
function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Accueil" 
        component={HomeScreen} 
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Details" 
        component={DetailsScreen} 
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

// --- App principale ---
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          {/* AppBar personnalisée */}
          <AppBar />
          
          <Tab.Navigator
            screenOptions={{
              headerShown: false,
              tabBarActiveTintColor: '#007AFF',
              tabBarInactiveTintColor: 'gray',
              tabBarStyle: {
                backgroundColor: '#f8f8f8',
                paddingBottom: 5,
                height: 60,
              },
            }}
          >
            <Tab.Screen 
              name="Accueil" 
              component={HomeStack}
            />
            <Tab.Screen 
              name="Paramètres" 
              component={SettingsScreen}
            />
          </Tab.Navigator>
          
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}