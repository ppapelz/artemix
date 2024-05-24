import SuperTokens from "supertokens-node";
import gql from 'graphql-tag';
import ThirdPartyEmailPassword from "supertokens-node/recipe/thirdpartyemailpassword";
import Session from "supertokens-node/recipe/session";
import { TypeInput } from "supertokens-node/types";
import { appInfo } from "./appInfo";
import Dashboard from "supertokens-node/recipe/dashboard";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";
import { google } from "googleapis";
import UserMetadata from "supertokens-node/recipe/usermetadata";

const createFirstAccount = gql`
mutation CreateFirstAccount($input: CreateAccountInput!) {
  createFirstAccount(input: $input) {
    id
  }
}
`;

const getAccount = gql`
query getAccount($accountId: ID!) {
  getAccount(id: $accountId) {
    displayName
    email
  }
}
`;

const GetAccountOrgsDocument = gql`
    query GetAccountOrgs($accountId: ID!) {
  getOrganizationsByAccountID(id: $accountId) {
    id
    name
    projects {
      id
      name
    }
  }
}
    `;

export const backendConfig = (): TypeInput => {
  const clientId = '1060725074195-kmeum4crr01uirfl2op9kd5acmi9jutn.apps.googleusercontent.com';
  const clientSecret = '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';

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
                clientId: clientId,
                clientSecret: clientSecret,
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
                return oI.thirdPartySignInUp(input)
              },
            }
          },
          apis: (oI) => {
            return {
              ...oI,
              thirdPartySignInUpPOST: async (input) => {
                const apolloClient = await getApolloClient();
                try {
                  if (!oI.thirdPartySignInUpPOST) {
                    throw 'No thirdPartySignInUpPOST defined';
                  }
                  const res =
                    await oI.thirdPartySignInUpPOST(
                      input
                    );

                  if (res.status === "OK") {
                    const userId = res.user.id;
                    const result = await apolloClient.query({
                      query: getAccount,
                      variables: {
                        accountId: userId
                      },
                    });


                    const result2 = await apolloClient.query({
                      query: GetAccountOrgsDocument,
                      variables: {
                        accountId: userId
                      },
                    });
                    await UserMetadata.updateUserMetadata(userId, { orgId: result2.data?.getOrganizationsByAccountID[0].id });
                    const { metadata } = await UserMetadata.getUserMetadata(userId);

                    console.log(metadata)


                    if (!result.data.getAccount) {
                      const googleClient = new google.auth.OAuth2(
                        clientId,
                        clientSecret
                      );
                      const token = res.oAuthTokens.access_token;
                      googleClient.setCredentials({ access_token: token });
                      const { data } = await google.oauth2("v2").userinfo.get({
                        auth: googleClient,
                        fields: "given_name,family_name,picture,email",
                      });

                      const givenName = data?.given_name;
                      const familyName = data?.family_name;
                      const displayName = [givenName, familyName].filter(Boolean).join(" ");

                      await apolloClient.mutate({
                        mutation: createFirstAccount,
                        variables: {
                          input: {
                            id: userId,
                            email: data.email,
                            displayName: displayName,
                          },
                        },
                      });


                    }
                  }
                  return res;
                } catch (e: any) {
                  console.error(e.message);
                  throw e;
                }
              },
            };
          },

        }
      }),
      Dashboard.init(),
      Session.init(),
      UserMetadata.init(),
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