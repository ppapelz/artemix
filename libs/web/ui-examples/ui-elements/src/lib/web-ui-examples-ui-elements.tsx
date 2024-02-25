import styles from './web-ui-examples-ui-elements.module.scss';

/* eslint-disable-next-line */
export interface WebUiExamplesUiElementsProps {}

export function WebUiExamplesUiElements(props: WebUiExamplesUiElementsProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to WebUiExamplesUiElements!</h1>
    </div>
  );
}

export default WebUiExamplesUiElements;
