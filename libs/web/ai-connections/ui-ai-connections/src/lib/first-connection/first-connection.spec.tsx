import { render } from '@testing-library/react';

import FirstConnection from './first-connection';

describe('FirstConnection', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FirstConnection />);
    expect(baseElement).toBeTruthy();
  });
});
