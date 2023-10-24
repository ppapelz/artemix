import { serverDatabase } from './server-database';

describe('serverDatabase', () => {
  it('should work', () => {
    expect(serverDatabase()).toEqual('server-database');
  });
});
