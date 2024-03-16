import { render } from '@testing-library/react';

import AddProject from './AddProject';

describe('AddProject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddProject />);
    expect(baseElement).toBeTruthy();
  });
});
