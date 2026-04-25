import { gql } from '@apollo/client';

export const GET_ME = gql`
  query GetMe {
    me {
      id
      email
      username
      avatarUrl
    }
  }
`;

export const GET_WARDROBE_ITEMS = gql`
  query GetWardrobeItems {
    wardrobeItems {
      id
      name
      category
      tags
      colors
      season
      imageUrl
      model3dUrl
    }
  }
`;
