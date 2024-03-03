import { render } from '@testing-library/react';

import Authentication from './Authentication';

describe('Authentication', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Authentication />);
    expect(baseElement).toBeTruthy();
  });
});
