import { render } from '@testing-library/react';

import AddProjectDialog from './AddProjectDialog';

describe('AddProject', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddProjectDialog />);
    expect(baseElement).toBeTruthy();
  });
});
