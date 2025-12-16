// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

// --- Écran d'accueil ---
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Écran d'accueil</Text>
      <Button
        title="Aller aux détails"
        onPress={() => navigation.navigate('Details', { id: 42 })}
      />
    </View>
  );
}

export default HomeScreen;