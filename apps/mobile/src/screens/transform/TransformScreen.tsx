import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export function TransformScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Fashion Assistant</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Select a clothing item from your wardrobe to transform it into a new style.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  subtitle: { marginTop: 8, color: '#666' },
});
