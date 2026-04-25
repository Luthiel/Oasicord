import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export function AddClothingScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Add Clothing Item</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Take a photo of your clothing item to add it to your wardrobe.
      </Text>
      <Button mode="contained" style={styles.button} onPress={() => {}}>
        Open Camera
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  subtitle: { marginTop: 8, color: '#666' },
  button: { marginTop: 24 },
});
