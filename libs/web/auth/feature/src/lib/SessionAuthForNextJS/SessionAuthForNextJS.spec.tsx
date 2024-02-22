import { render } from '@testing-library/react';

import SessionAuthForNextJS from './SessionAuthForNextJS';

describe('SessionAuthForNextJS', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SessionAuthForNextJS />);
    expect(baseElement).toBeTruthy();
  });
});
