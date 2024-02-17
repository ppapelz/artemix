"use client";

import SuperTokens from "supertokens-auth-react";
import {
    SPT_API_DOMAIN,
    SPT_NX_WEBSITE_DOMAIN,
} from "@promptus/web/shared/util";
import ThirdPartyEmailPassword, {
    Google,
} from "supertokens-auth-react/recipe/thirdpartyemailpassword";
import Session from "supertokens-auth-react/recipe/session";

export const initSPT = () => {
    const providers = [];

    providers.push(Google.init());

    SuperTokens.init({
        appInfo: {
            appName: "Promptus",
            apiDomain: SPT_API_DOMAIN,
            websiteDomain: SPT_NX_WEBSITE_DOMAIN,
            apiBasePath: "/api/auth",
            websiteBasePath: "/login",
        },
        recipeList: [
            ThirdPartyEmailPassword.init({
                signInAndUpFeature: {
                    providers,
                },
            }),
            Session.init(),
        ],
    });
};
