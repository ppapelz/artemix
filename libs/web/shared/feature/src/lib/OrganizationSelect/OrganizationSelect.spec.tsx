import { render } from '@testing-library/react';

import OrganizationSelect from './OrganizationSelect';

describe('OrganizationSelect', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<OrganizationSelect />);
    expect(baseElement).toBeTruthy();
  });
});
