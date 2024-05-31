// src/queries.ts
import { gql } from '@apollo/client';

export const GET_TOKENS = gql`
  query GetTokens($first: Int!, $skip: Int!) {
    tokens(first: $first, skip: $skip) {
      id
      name
      symbol
    }
  }
`;
