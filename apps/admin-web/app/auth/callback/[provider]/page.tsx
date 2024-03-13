'use client';

import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AuthCallback = () => {
  const router = useRouter();

  useEffect(() => {
    async function handleGoogleCallback() {
      try {
        const response = await ThirdPartyEmailPassword.thirdPartySignInAndUp();

        if (response.status === 'OK') {
          console.log(response);
          if (
            response.createdNewRecipeUser &&
            response.user.loginMethods.length === 1
          ) {
            console.log('sign up successful');
            // sign up successful
          } else {
            console.log('sign in successful');
            // sign in successful
          }
          router.push('/');
        } else if (response.status === 'SIGN_IN_UP_NOT_ALLOWED') {
          // this can happen due to automatic account linking. Please see our account linking docs
        } else {
          // SuperTokens requires that the third party provider
          // gives an email for the user. If that's not the case, sign up / in
          // will fail.

          // As a hack to solve this, you can override the backend functions to create a fake email for the user.
          router.push('/');
        }
      } catch (err: any) {
        if (err.isSuperTokensGeneralError === true) {
          // this may be a custom error message sent from the API by you.
          console.log(err.message);
        } else {
          console.log(err);
          console.log('Oops! Something went wrong.');
        }
      }
    }
    handleGoogleCallback();
  }, [router]);

  return <span>loading</span>;
};

export default AuthCallback;
