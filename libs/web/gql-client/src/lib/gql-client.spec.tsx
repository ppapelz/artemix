import { render } from '@testing-library/react';

import GqlClient from './gql-client';

describe('GqlClient', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GqlClient />);
    expect(baseElement).toBeTruthy();
  });
});
