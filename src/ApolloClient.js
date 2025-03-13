import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: 'http://localhost:8080/graphql', // Your Spring Boot endpoint
    cache: new InMemoryCache(),
    headers: {
        authorization: localStorage.getItem('authToken') || ''
    }
});