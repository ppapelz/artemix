import { render } from '@testing-library/react';

import SuperTokensProvider from './super-tokens-provider';

describe('SuperTokensProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SuperTokensProvider />);
    expect(baseElement).toBeTruthy();
  });
});
