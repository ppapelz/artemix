import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

let apolloClient = null;

export function initializeApollo(token: string) {
    apolloClient = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({
            uri: "http://localhost:3000/graphql",
            headers: { authorization: token },
        }),
    });

    return apolloClient;
}
