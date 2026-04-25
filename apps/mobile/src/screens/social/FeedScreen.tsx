import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export function FeedScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Social Feed</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        See what others are wearing and share your outfits.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  subtitle: { marginTop: 8, color: '#666' },
});
