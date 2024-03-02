import { render } from '@testing-library/react';

import WebUiExamplesUiElements from './web-ui-examples-ui-elements';

describe('WebUiExamplesUiElements', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebUiExamplesUiElements />);
    expect(baseElement).toBeTruthy();
  });
});
