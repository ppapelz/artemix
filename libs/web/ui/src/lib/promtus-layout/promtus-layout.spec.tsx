import { render } from '@testing-library/react';

import PromtusLayout from './promtus-layout';

describe('PromtusLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PromtusLayout />);
    expect(baseElement).toBeTruthy();
  });
});
