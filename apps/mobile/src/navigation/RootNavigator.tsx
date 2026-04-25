import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WardrobeScreen } from '../screens/wardrobe/WardrobeScreen';
import { AddClothingScreen } from '../screens/wardrobe/AddClothingScreen';
import { TransformScreen } from '../screens/transform/TransformScreen';
import { SceneScreen } from '../screens/scene/SceneScreen';
import { PostureScreen } from '../screens/posture/PostureScreen';
import { FeedScreen } from '../screens/social/FeedScreen';
import type { RootTabParamList, WardrobeStackParamList } from '../types';

const Tab = createBottomTabNavigator<RootTabParamList>();
const WardrobeStack = createNativeStackNavigator<WardrobeStackParamList>();

function WardrobeNavigator() {
  return (
    <WardrobeStack.Navigator>
      <WardrobeStack.Screen
        name="WardrobeHome"
        component={WardrobeScreen}
        options={{ title: 'My Clothes' }}
      />
      <WardrobeStack.Screen
        name="AddClothing"
        component={AddClothingScreen}
        options={{ title: 'Add Item' }}
      />
    </WardrobeStack.Navigator>
  );
}

export function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Wardrobe" component={WardrobeNavigator} />
      <Tab.Screen name="Transform" component={TransformScreen} />
      <Tab.Screen name="Scene" component={SceneScreen} />
      <Tab.Screen name="Posture" component={PostureScreen} />
      <Tab.Screen name="Social" component={FeedScreen} />
    </Tab.Navigator>
  );
}
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WardrobeScreen } from '../screens/wardrobe/WardrobeScreen';
import { AddClothingScreen } from '../screens/wardrobe/AddClothingScreen';
import { TransformScreen } from '../screens/transform/TransformScreen';
import { SceneScreen } from '../screens/scene/SceneScreen';
import { PostureScreen } from '../screens/posture/PostureScreen';
import { FeedScreen } from '../screens/social/FeedScreen';
import type { RootTabParamList, WardrobeStackParamList } from '../types';

const Tab = createBottomTabNavigator<RootTabParamList>();
const WardrobeStack = createNativeStackNavigator<WardrobeStackParamList>();

function WardrobeNavigator() {
  return (
    <WardrobeStack.Navigator>
      <WardrobeStack.Screen
        name="WardrobeHome"
        component={WardrobeScreen}
        options={{ title: 'My Clothes' }}
      />
      <WardrobeStack.Screen
        name="AddClothing"
        component={AddClothingScreen}
        options={{ title: 'Add Item' }}
      />
    </WardrobeStack.Navigator>
  );
}

export function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Wardrobe" component={WardrobeNavigator} />
      <Tab.Screen name="Transform" component={TransformScreen} />
      <Tab.Screen name="Scene" component={SceneScreen} />
      <Tab.Screen name="Posture" component={PostureScreen} />
      <Tab.Screen name="Social" component={FeedScreen} />
    </Tab.Navigator>
  );
}
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WardrobeScreen } from '@screens/wardrobe/WardrobeScreen';
import { AddClothingScreen } from '@screens/wardrobe/AddClothingScreen';
import { TransformScreen } from '@screens/transform/TransformScreen';
import { SceneScreen } from '@screens/scene/SceneScreen';
import { PostureScreen } from '@screens/posture/PostureScreen';
import { FeedScreen } from '@screens/social/FeedScreen';
import { ProfileScreen } from '@screens/social/ProfileScreen';
import type { RootTabParamList, WardrobeStackParamList } from '@types/index';

const Tab = createBottomTabNavigator<RootTabParamList>();
const WardrobeStack = createNativeStackNavigator<WardrobeStackParamList>();

function WardrobeNavigator() {
  return (
    <WardrobeStack.Navigator>
      <WardrobeStack.Screen name="WardrobeHome" component={WardrobeScreen} options={{ title: 'My Clothes' }} />
      <WardrobeStack.Screen name="AddClothing" component={AddClothingScreen} options={{ title: 'Add Item' }} />
    </WardrobeStack.Navigator>
  );
}

export function RootNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Wardrobe" component={WardrobeNavigator} />
      <Tab.Screen name="Transform" component={TransformScreen} />
      <Tab.Screen name="Scene" component={SceneScreen} />
      <Tab.Screen name="Posture" component={PostureScreen} />
      <Tab.Screen name="Social" component={FeedScreen} />
    </Tab.Navigator>
  );
}
