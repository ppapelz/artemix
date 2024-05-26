import { LoginImage } from '@artemix/web-auth-ui';
import { Authentication } from '@artemix/web-auth-feature';

export default function Login() {
  return (
    <div className="flex flex-row h-screen">
      <div className="bg-accent w-full">
        <LoginImage></LoginImage>
      </div>
      <div className="flex flex-col mx-auto justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <Authentication></Authentication>
      </div>
    </div>
  );
}
