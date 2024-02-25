import { SessionContainer } from "supertokens-node/recipe/session";
import { ensureSuperTokensInit } from "./superTokenBackendConfig";
import { getSSRSession } from "supertokens-node/nextjs";
import { cookies, headers } from "next/headers";

ensureSuperTokensInit();

export async function getSSRSessionHelper(): Promise<{
  session: SessionContainer | undefined;
  hasToken: boolean;
  hasInvalidClaims: boolean;
  error: Error | undefined;
}> {
  let session: SessionContainer | undefined;
  let hasToken = false;
  let hasInvalidClaims = false;
  let error: Error | undefined = undefined;

  try {
    ({ session, hasToken, hasInvalidClaims } = await getSSRSession(
      cookies().getAll(),
      headers()
    ));
  } catch (err: any) {
    error = err;
  }
  return { session, hasToken, hasInvalidClaims, error };
}