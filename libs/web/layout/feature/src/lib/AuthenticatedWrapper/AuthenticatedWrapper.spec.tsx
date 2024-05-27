import { render } from '@testing-library/react';

import AuthenticatedWrapper from './AuthenticatedWrapper';

describe('AuthenticatedWrapper', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AuthenticatedWrapper />);
    expect(baseElement).toBeTruthy();
  });
});
