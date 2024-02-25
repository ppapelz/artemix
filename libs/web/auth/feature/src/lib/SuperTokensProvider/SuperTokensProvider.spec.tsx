import { render } from '@testing-library/react';

import SuperTokensProvider from './SuperTokensProvider';

describe('SuperTokensProvider', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SuperTokensProvider />);
    expect(baseElement).toBeTruthy();
  });
});
