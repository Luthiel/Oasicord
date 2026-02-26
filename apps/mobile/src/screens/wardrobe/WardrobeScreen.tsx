import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, FAB } from 'react-native-paper';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { WardrobeStackParamList } from '../../types';

type Props = {
  navigation: NativeStackNavigationProp<WardrobeStackParamList, 'WardrobeHome'>;
};

export function WardrobeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text variant="headlineMedium">My Wardrobe</Text>
      <Text variant="bodyMedium" style={styles.subtitle}>
        Your clothing items will appear here.
      </Text>
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('AddClothing')}
        label="Add Item"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  subtitle: { marginTop: 8, color: '#666' },
  fab: { position: 'absolute', margin: 16, right: 0, bottom: 0 },
});
