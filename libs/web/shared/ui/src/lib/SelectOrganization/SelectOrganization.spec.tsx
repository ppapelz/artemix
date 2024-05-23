import { render } from '@testing-library/react';

import SelectOrganization from './SelectOrganization';

describe('SelectOrganization', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SelectOrganization />);
    expect(baseElement).toBeTruthy();
  });
});
