import Image from 'next/image';
import loginBackground from './../../assets/4650132.jpg';

/* eslint-disable-next-line */
export interface LoginImageProps {}

export function LoginImage(props: LoginImageProps) {
  return (
    <div>
      <Image
        src={loginBackground}
        alt="google logo"
        priority={true}
        className='h-screen w-full object-cover'
      />
    </div>
  );
}

export default LoginImage;
