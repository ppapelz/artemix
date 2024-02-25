import { render } from '@testing-library/react';

import ThemeModeToggle from './ThemeModeToggle';

describe('ThemeModeToggle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ThemeModeToggle />);
    expect(baseElement).toBeTruthy();
  });
});
