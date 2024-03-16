import { render } from '@testing-library/react';

import OrganizationsFeature from './Organizations';
import React from 'react';

describe('Organizations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrganizationsFeature />);
    expect(baseElement).toBeTruthy();
  });
});
