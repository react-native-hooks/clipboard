import useClipboard from '../src';

describe('Test Clipboard function', () => {
  it('should be a function', () => {
    expect(
      typeof useClipboard,
    ).toBe('function');
  });
});
