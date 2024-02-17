import EmailPasswordReact from 'supertokens-auth-react/recipe/emailpassword'
import SessionReact from 'supertokens-auth-react/recipe/session'
import { useRouter } from "next/navigation";
import { SuperTokensConfig } from 'supertokens-auth-react/lib/build/types'
import { SPT_API_DOMAIN, SPT_NX_WEBSITE_DOMAIN } from '@promptus/web/shared/util';

const routerInfo: { router?: ReturnType<typeof useRouter>; pathName?: string } =
  {};

export function setRouter(
  router: ReturnType<typeof useRouter>,
  pathName: string,
) {
  routerInfo.router = router;
  routerInfo.pathName = pathName;
}

export const superTokenInit = (): SuperTokensConfig => {
  return {
    appInfo: {
        appName: "Promptus",
        apiDomain: 'http://localhost:3000',
        websiteDomain: 'http://localhost:4200',
        apiBasePath: "/api/auth",
        websiteBasePath: "/login",
    },
    recipeList: [
      EmailPasswordReact.init(),
      SessionReact.init(),
    ],
    windowHandler: (original) => ({
      ...original,
      location: {
        ...original.location,
        getPathName: () => routerInfo.pathName!,
        assign: (url) => routerInfo.router!.push(url.toString()),
        setHref: (url) => routerInfo.router!.push(url.toString()),
      },
    }),
  }
}
