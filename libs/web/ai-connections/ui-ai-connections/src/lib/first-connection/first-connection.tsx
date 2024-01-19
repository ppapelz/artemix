import styles from './first-connection.module.scss';
import Image from 'next/image';
import firstConnection from './../../assets/empty_connection.png';
import { cn } from '@promptus/utils';
import { Button } from '@promptus/ui';

/* eslint-disable-next-line */
export interface FirstConnectionProps {}

export function FirstConnection(props: FirstConnectionProps) {
  return (
    <div className="flex justify-center w-full">
      <div className={cn(`flex flex-col items-center`, styles.content)}>
        <Image
          className="mt-16"
          src={firstConnection}
          alt="empty_connection"
          priority={true}
        />
        <div className={cn(`p-4`, styles.text)}>
          <h2 className="pb-2 text-lg font-semibold text-base">
            Connect your AI Providers to generate prompts right from
            Promptitude.
          </h2>
          <p className='text-sm'>
            Start by adding your first AI provider like OpenAI. Later, when you
            add or edit a prompt, you can select which AI Provider and model to
            use to generate it.
          </p>
        </div>
        <Button>Add Your First AI Connection</Button>
      </div>
    </div>
  );
}

export default FirstConnection;
