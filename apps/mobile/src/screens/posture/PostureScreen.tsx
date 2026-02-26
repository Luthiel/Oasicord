import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export function PostureScreen() {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">Posture Director</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Get real-time pose guidance for your photos.
      </Text>
      <Button mode="contained" style={styles.button} onPress={() => {}}>
        Start Session
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  subtitle: { marginTop: 8, color: '#666' },
  button: { marginTop: 24 },
});
