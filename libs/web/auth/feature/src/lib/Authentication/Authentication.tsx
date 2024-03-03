import { Button } from '@promptus/web-shared-ui';
import Image from 'next/image';
import googleLogo from './../../assets/google-logo.svg';
import logo from './../../assets/logoipsum-317.svg';

/* eslint-disable-next-line */
export interface AuthenticationProps {}

export function Authentication(props: AuthenticationProps) {
  return (
    <div className="min-w-[380px]">
      <div className="flex flex-col justify-center items-center mb-12">
        <Image
          src={logo}
          alt="logo"
          priority={true}
          className="mr-4 mb-4"
        />
        <h1 className="text-2xl">Sign in to Promtus</h1>
      </div>
      <Button className="w-full mb-4">
        <Image
          src={googleLogo}
          alt="google logo"
          priority={true}
          className="mr-4"
        />
        Sign in with Google
      </Button>
      <Button variant="outline" className="w-full mb-3">
        Sign in with Email
      </Button>
      <div className="text-center text-sm">
        <p>
          Don't have an account?
          <Button variant="link" className="px-2">
            Sign up.
          </Button>
        </p>
      </div>
    </div>
  );
}

export default Authentication;
