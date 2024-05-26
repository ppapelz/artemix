import { render } from '@testing-library/react';

import OrganizationDropdown from './OrganizationDropdown';

describe('OrganizationDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrganizationDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
