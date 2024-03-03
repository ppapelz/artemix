import { render } from '@testing-library/react';

import LoginImage from './LoginImage';

describe('LoginImage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LoginImage />);
    expect(baseElement).toBeTruthy();
  });
});
