export type RootTabParamList = {
  Wardrobe: undefined;
  Transform: undefined;
  Scene: undefined;
  Posture: undefined;
  Social: undefined;
};

export type WardrobeStackParamList = {
  WardrobeHome: undefined;
  AddClothing: undefined;
};

export interface User {
  id: string;
  email: string;
  username: string;
  avatarUrl?: string;
}

export interface ClothingItem {
  id: string;
  userId: string;
  name: string;
  category: string;
  tags: string[];
  colors: string[];
  season: string[];
  imageUrl: string;
  segmentedImageUrl?: string;
  model3dUrl?: string;
}

export interface Outfit {
  id: string;
  userId: string;
  name: string;
  items: { clothingId: string; layer: string }[];
  mood?: string;
  occasion?: string;
  recommendationScore?: number;
}

export interface TransformProject {
  id: string;
  originalClothingId: string;
  targetStyle: string;
  preview3dUrl?: string;
  instructions: { step: number; description: string; imageUrl?: string }[];
  materials: { name: string; quantity: number; estimatedCost?: number }[];
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}
