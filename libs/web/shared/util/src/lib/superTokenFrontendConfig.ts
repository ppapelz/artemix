'use client';

import ThirdPartyEmailPassword, {
  Google
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import { useRouter } from 'next/navigation';
import { SuperTokensConfig } from 'supertokens-auth-react/lib/build/types';
import { appInfo } from './appInfo';

const routerInfo: { router?: ReturnType<typeof useRouter>; pathName?: string } =
  {};

export function setRouter(
  router: ReturnType<typeof useRouter>,
  pathName: string,
) {
  routerInfo.router = router;
  routerInfo.pathName = pathName;
}

export const frontendConfig = (): SuperTokensConfig => {
  return {
    appInfo,
    recipeList: [
      ThirdPartyEmailPassword.init({
        signInAndUpFeature: {
          providers: [
            Google.init(),
          ],
        },
      }),
      Session.init(),
    ],
    windowHandler: (orig) => {
      return {
        ...orig,
        location: {
          ...orig.location,
          getPathName: () => routerInfo.pathName!,
          assign: (url) => routerInfo.router!.push(url.toString()),
          setHref: (url) => routerInfo.router!.push(url.toString()),
        },
      };
    },
  };
}