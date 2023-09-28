import { adminDb } from './admin-db';

describe('adminDb', () => {
  it('should work', () => {
    expect(adminDb()).toEqual('admin-db');
  });
});
