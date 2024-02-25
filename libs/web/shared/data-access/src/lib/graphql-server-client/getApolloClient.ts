import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { getSSRSessionHelper } from "@promptus/web/auth/util/server";

export async function getApolloClient(): Promise<ApolloClient<unknown>> {
    const { session } = await getSSRSessionHelper();
    const authorization = session?.getAccessToken();

    const link = new HttpLink({
        uri: "http://localhost:3000/graphql",
        headers: authorization ? { authorization } : {},
    });

    const { getClient } = registerApolloClient(() => {
        return new ApolloClient({
            cache: new InMemoryCache(),
            link,
        });
    });

    return getClient();
}