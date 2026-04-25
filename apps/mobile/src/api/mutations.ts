import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
        username
      }
    }
  }
`;

export const ADD_CLOTHING_ITEM = gql`
  mutation AddClothingItem($input: AddClothingInput!) {
    addClothingItem(input: $input) {
      id
      name
      category
      imageUrl
    }
  }
`;
