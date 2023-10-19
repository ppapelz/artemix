import { render } from '@testing-library/react';

import DashboardLayout from './dashboard-layout';

describe('DashboardLayout', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DashboardLayout />);
    expect(baseElement).toBeTruthy();
  });
});
