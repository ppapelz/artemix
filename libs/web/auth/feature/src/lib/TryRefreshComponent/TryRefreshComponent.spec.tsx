import { render } from '@testing-library/react';

import TryRefreshComponent from './TryRefreshComponent';

describe('TryRefreshComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TryRefreshComponent />);
    expect(baseElement).toBeTruthy();
  });
});
