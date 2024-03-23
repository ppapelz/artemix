import { getApolloClient } from '../graphql-server-client/getApolloClient';
import { DocumentNode } from 'graphql';
import { OperationVariables, ApolloQueryResult } from '@apollo/client';
import React from 'react';

interface ApolloQueryProps<TData, TVariables extends OperationVariables> {
  query: DocumentNode;
  variables?: TVariables;
  children: (response: ApolloQueryResult<TData>) => JSX.Element;
}

export async function ApolloQuery<
  TData,
  TVariables extends OperationVariables
>({
  query,
  variables,
  children,
}: ApolloQueryProps<TData, TVariables>): Promise<React.ReactElement> {
  try {
    const apolloClient = await getApolloClient();
    const response = await apolloClient.query<TData, TVariables>({
      query,
      variables,
    });
    return children(response);
  } catch (error) {
    console.error('Error executing query', error);
    return <p>Error loading data...</p>;
  }
}

export default ApolloQuery;
