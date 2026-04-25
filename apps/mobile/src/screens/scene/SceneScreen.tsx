import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export function SceneScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Scene Recommender</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Generate virtual backgrounds or discover nearby photo spots for your outfit.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  subtitle: { marginTop: 8, color: '#666' },
});
