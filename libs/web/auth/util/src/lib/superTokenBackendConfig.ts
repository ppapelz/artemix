import SuperTokens from "supertokens-node";
import gql from 'graphql-tag';
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import Session from "supertokens-node/recipe/session";
import { TypeInput } from "supertokens-node/types";
import { appInfo } from "./appInfo";
import Dashboard from "supertokens-node/recipe/dashboard";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

const createFirstAccount = gql`
mutation CreateFirstAccount($input: CreateAccountInput!) {
  createFirstAccount(input: $input) {
    id
  }
}
`;

export const backendConfig = (): TypeInput => {
  return {
    appInfo,
    supertokens: {
      connectionURI: "http://localhost:3567",
    },
    recipeList: [
      ThirdPartyEmailPassword.init({
        providers: [
          {
            config: {
              thirdPartyId: "google",
              clients: [{
                clientId: "1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com",
                clientSecret: "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",
                scope: ["email", "profile"]
              }]
            }
          }
        ],
        signUpFeature: {
          formFields: [{ id: "name" }],
        },
        override: {
          functions: (oI) => {
            return {
              ...oI,
              thirdPartySignInUp: async function (input) {
                const apolloClient = await getApolloClient();
                const fullName = input?.rawUserInfoFromProvider?.fromUserInfoAPI?.name;
                const email = input?.email;
                const thirdPartyUserId = input?.thirdPartyUserId;
                const existingUsers = await SuperTokens.listUsersByAccountInfo(input.tenantId, {
                  email: input.email
                });

                if (existingUsers.length === 0) {
                  // this means that the email is new and is a sign up
                  const result = await apolloClient.mutate({
                    mutation: createFirstAccount,
                    variables: {
                      input: {
                        id: Number(thirdPartyUserId),
                        email: email,
                        displayName: fullName,
                      },
                    },
                  });
                }
                // We allow the sign in / up operation
                return oI.thirdPartySignInUp(input);
              },
            }
          }
        }
      }),
      Dashboard.init(),
      Session.init(),
    ],
  };
}

let initialized = false;
export function ensureSuperTokensInit() {
  if (!initialized) {
    SuperTokens.init(backendConfig());
    initialized = true;
  }
}

async function getApolloClient(): Promise<ApolloClient<unknown>> {

  const link = new HttpLink({
    uri: "http://localhost:3000/graphql",
  });

  const { getClient } = registerApolloClient(() => {
    return new ApolloClient({
      cache: new InMemoryCache(),
      link,
    });
  });

  return getClient();
}