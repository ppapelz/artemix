import { signInAndUp } from 'supertokens-web-js/recipe/thirdparty';

const AuthCallback = () => {
  async function handleGoogleCallback() {
    try {
      const response = await signInAndUp();

      if (response.status === 'OK') {
        if (
          response.createdNewRecipeUser &&
          response.user.loginMethods.length === 1
        ) {
          // sign up successful
        } else {
          // sign in successful
        }
        window.location.assign('/home');
      } else if (response.status === 'SIGN_IN_UP_NOT_ALLOWED') {
        // this can happen due to automatic account linking. Please see our account linking docs
      } else {
        // SuperTokens requires that the third party provider
        // gives an email for the user. If that's not the case, sign up / in
        // will fail.

        // As a hack to solve this, you can override the backend functions to create a fake email for the user.

        window.alert(
          'No email provided by social login. Please use another form of login'
        );
        window.location.assign('/auth'); // redirect back to login page
      }
    } catch (err: any) {
      if (err.isSuperTokensGeneralError === true) {
        // this may be a custom error message sent from the API by you.
        window.alert(err.message);
      } else {
        window.alert('Oops! Something went wrong.');
      }
    }
  }
  return <span> loading </span>;
};

export default AuthCallback;
